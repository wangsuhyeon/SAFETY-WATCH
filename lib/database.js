'use strict';
const path = require('node:path');
const fs = require('node:fs');
const { AsyncLocalStorage } = require('node:async_hooks');

/* ============================================================
   SAFETY WATCH — 데이터베이스 어댑터
   ------------------------------------------------------------
   · SUPABASE_DB_URL(또는 DATABASE_URL)이 있으면 Postgres(Supabase),
     없으면 기존처럼 로컬 SQLite(node:sqlite)를 쓴다.
   · 두 드라이버가 같은 인터페이스(prepare().get/.all/.run, exec,
     transaction, runContext)를 제공하므로 server.js 는 그대로 동작한다.
   ============================================================ */

const PG_URL = process.env.SUPABASE_DB_URL || process.env.DATABASE_URL || '';
const scope = new AsyncLocalStorage();

let tail = Promise.resolve();
function enqueue(task) {
  const pending = tail.then(task);
  tail = pending.catch(() => {});
  return pending;
}
function execute(task) {
  return scope.getStore()?.transaction ? Promise.resolve().then(task) : enqueue(task);
}

/* '?' 플레이스홀더를 Postgres 의 '$1, $2, ...' 로 바꾼다. */
function toPgSql(sql) {
  let i = 0;
  return sql.replace(/\?/g, () => '$' + (++i));
}

let driver;

if (PG_URL) {
  const { Pool } = require('pg');
  const pool = new Pool({
    connectionString: PG_URL,
    ssl: { rejectUnauthorized: false },
    max: 5,
    idleTimeoutMillis: 30000
  });

  driver = 'postgres';

  module.exports = {
    driver,
    runContext(callback) { return scope.run({ transaction: false }, callback); },
    transaction(callback) {
      return enqueue(() => scope.run({ transaction: true }, async () => {
        const client = await pool.connect();
        try {
          scope.getStore().client = client;
          await client.query('BEGIN');
          const value = await callback();
          await client.query('COMMIT');
          return value;
        } catch (error) {
          try { await client.query('ROLLBACK'); } catch (e) { /* 이미 끊김 */ }
          throw error;
        } finally {
          client.release();
        }
      }));
    },
    prepare(sql) {
      const text = toPgSql(sql);
      return {
        get(...args) {
          return execute(async () => {
            const client = scope.getStore()?.client || pool;
            return (await client.query(text, args)).rows[0];
          });
        },
        all(...args) {
          return execute(async () => {
            const client = scope.getStore()?.client || pool;
            return (await client.query(text, args)).rows;
          });
        },
        run(...args) {
          return execute(async () => {
            const client = scope.getStore()?.client || pool;
            const result = await client.query(text, args);
            return { changes: result.rowCount, lastInsertRowid: null };
          });
        }
      };
    },
    exec(sql) { return execute(() => pool.query(sql)); }
  };
} else {
  const { DatabaseSync } = require('node:sqlite');
  const file = process.env.BW_DB ? path.resolve(process.env.BW_DB) : path.join(__dirname, '..', 'data', 'beachwatch.db');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const connection = new DatabaseSync(file);
  connection.exec('PRAGMA busy_timeout = 5000; PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON;');

  driver = 'sqlite';

  module.exports = {
    driver,
    runContext(callback) { return scope.run({ transaction: false }, callback); },
    transaction(callback) {
      return enqueue(() => scope.run({ transaction: true }, async () => {
        connection.exec('BEGIN IMMEDIATE');
        try { const value = await callback(); connection.exec('COMMIT'); return value; }
        catch (error) { connection.exec('ROLLBACK'); throw error; }
      }));
    },
    prepare(sql) {
      return {
        get(...args) { return execute(() => connection.prepare(sql).get(...args)); },
        all(...args) { return execute(() => connection.prepare(sql).all(...args)); },
        run(...args) { return execute(() => connection.prepare(sql).run(...args)); }
      };
    },
    exec(sql) { return execute(() => connection.exec(sql)); }
  };
}
