'use strict';
const path = require('node:path');
const fs = require('node:fs');
const { DatabaseSync } = require('node:sqlite');
const { AsyncLocalStorage } = require('node:async_hooks');
const scope = new AsyncLocalStorage();
const file = process.env.BW_DB ? path.resolve(process.env.BW_DB) : path.join(__dirname, '..', 'data', 'beachwatch.db');
fs.mkdirSync(path.dirname(file), { recursive: true });
const connection = new DatabaseSync(file);
connection.exec('PRAGMA busy_timeout = 5000; PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON;');
let tail = Promise.resolve();
function enqueue(task) {
  const pending = tail.then(task);
  tail = pending.catch(() => {});
  return pending;
}
function execute(task) {
  return scope.getStore()?.transaction ? Promise.resolve().then(task) : enqueue(task);
}
module.exports = {
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
