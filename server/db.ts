import Database from 'better-sqlite3';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const DB_PATH = resolve(process.cwd(), 'data', 'app.db');

function ensureDbDir(dbPath: string): void {
  const dir = dirname(dbPath);
  mkdirSync(dir, { recursive: true });
}

export const db = (() => {
  ensureDbDir(DB_PATH);
  const instance = new Database(DB_PATH);

  // Enable foreign keys
  instance.pragma('foreign_keys = ON');

  // Minimal schema to start
  instance.exec(`
    CREATE TABLE IF NOT EXISTS languages (
      code TEXT PRIMARY KEY,
      name TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS texts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key TEXT NOT NULL UNIQUE,
      context TEXT
    );

    CREATE TABLE IF NOT EXISTS translations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text_id INTEGER NOT NULL,
      lang_code TEXT NOT NULL,
      value TEXT NOT NULL,
      UNIQUE(text_id, lang_code),
      FOREIGN KEY(text_id) REFERENCES texts(id) ON DELETE CASCADE,
      FOREIGN KEY(lang_code) REFERENCES languages(code) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS tours (
      id INTEGER PRIMARY KEY,
      destination TEXT,
      duration TEXT,
      price REAL,
      type TEXT,
      image TEXT
    );

    CREATE TABLE IF NOT EXISTS tour_i18n (
      tour_id INTEGER NOT NULL,
      lang_code TEXT NOT NULL,
      title TEXT,
      short_description TEXT,
      full_description TEXT,
      PRIMARY KEY (tour_id, lang_code),
      FOREIGN KEY(tour_id) REFERENCES tours(id) ON DELETE CASCADE,
      FOREIGN KEY(lang_code) REFERENCES languages(code) ON DELETE CASCADE
    );

    -- Navigation
    CREATE TABLE IF NOT EXISTS navigation (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key TEXT NOT NULL UNIQUE,
      path TEXT NOT NULL,
      position INTEGER NOT NULL DEFAULT 0,
      is_cta INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS navigation_i18n (
      nav_id INTEGER NOT NULL,
      lang_code TEXT NOT NULL,
      label TEXT NOT NULL,
      PRIMARY KEY (nav_id, lang_code),
      FOREIGN KEY(nav_id) REFERENCES navigation(id) ON DELETE CASCADE,
      FOREIGN KEY(lang_code) REFERENCES languages(code) ON DELETE CASCADE
    );

    -- Hero carousel slides
    CREATE TABLE IF NOT EXISTS hero_slides (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT NOT NULL,
      position INTEGER NOT NULL DEFAULT 0
    );

    -- Team members
    CREATE TABLE IF NOT EXISTS team_members (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      bio TEXT NOT NULL,
      image TEXT,
      position INTEGER NOT NULL DEFAULT 0,
      is_active INTEGER NOT NULL DEFAULT 1
    );

    -- Company values
    CREATE TABLE IF NOT EXISTS company_values (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      icon TEXT,
      position INTEGER NOT NULL DEFAULT 0,
      is_active INTEGER NOT NULL DEFAULT 1
    );

    -- FAQ
    CREATE TABLE IF NOT EXISTS faq (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      question TEXT NOT NULL,
      answer TEXT NOT NULL,
      position INTEGER NOT NULL DEFAULT 0,
      is_active INTEGER NOT NULL DEFAULT 1
    );

    -- FAQ Topics
    CREATE TABLE IF NOT EXISTS faq_topics (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      icon TEXT,
      position INTEGER NOT NULL DEFAULT 0,
      is_active INTEGER NOT NULL DEFAULT 1
    );
  `);

  return instance;
})();

export type LanguageCode = 'en' | 'zh' | 'it' | 'es';

export function getWithFallback<T>(rows: T[], preferred: LanguageCode, fallback: LanguageCode = 'en', getCode: (r: T) => LanguageCode): T | undefined {
  const preferredRow = rows.find(r => getCode(r) === preferred);
  if (preferredRow) return preferredRow;
  return rows.find(r => getCode(r) === fallback);
}
