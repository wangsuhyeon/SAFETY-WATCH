

  CREATE TABLE IF NOT EXISTS users (
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    name           TEXT    NOT NULL,
    email          TEXT    NOT NULL UNIQUE COLLATE NOCASE,
    password_hash  TEXT    NOT NULL,
    password_salt  TEXT    NOT NULL,
    question       TEXT    NOT NULL,
    answer_hash    TEXT    NOT NULL,
    answer_salt    TEXT    NOT NULL,
    role           TEXT    NOT NULL DEFAULT 'operator',
    verified       INTEGER NOT NULL DEFAULT 0,
    email_code_hash    TEXT,
    email_code_salt    TEXT,
    email_code_expires TEXT,
    created_at     TEXT    NOT NULL,
    updated_at     TEXT    NOT NULL,
    last_login_at  TEXT,
    failed_count   INTEGER NOT NULL DEFAULT 0,
    locked_until   TEXT
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token_hash  TEXT    PRIMARY KEY,
    user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at  TEXT    NOT NULL,
    expires_at  TEXT    NOT NULL,
    user_agent  TEXT
  );

  CREATE TABLE IF NOT EXISTS auth_logs (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER,
    email      TEXT,
    action     TEXT    NOT NULL,
    detail     TEXT,
    ip         TEXT,
    user_agent TEXT,
    created_at TEXT    NOT NULL
  );

  CREATE TABLE IF NOT EXISTS events (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER,
    email      TEXT,
    kind       TEXT    NOT NULL DEFAULT 'info',
    message    TEXT    NOT NULL,
    camera     TEXT,
    payload    TEXT,
    ip         TEXT,
    created_at TEXT    NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_sessions_user   ON sessions(user_id);
  CREATE INDEX IF NOT EXISTS idx_auth_logs_time  ON auth_logs(created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_events_time     ON events(created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_events_user     ON events(user_id, created_at DESC);

CREATE TABLE IF NOT EXISTS rate_limits (key TEXT PRIMARY KEY, count INTEGER NOT NULL, reset_at INTEGER NOT NULL);