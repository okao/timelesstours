import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { db, LanguageCode, getWithFallback } from './db';

const app = express();

const rawOrigins = process.env.CORS_ORIGINS || '';
const allowedOrigins = rawOrigins
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allow same-origin/SSR
    if (allowedOrigins.length === 0) return callback(null, true); // allow all if not configured
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));
app.use(express.json());

const PORT = process.env.API_PORT ? Number(process.env.API_PORT) : 3001;

// Health
app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

// List languages
app.get('/api/languages', (_req, res) => {
  const rows = db.prepare('SELECT code, name FROM languages ORDER BY code').all();
  res.json(rows);
});

// Hero slides
app.get('/api/hero-slides', (_req, res) => {
  const rows = db.prepare('SELECT id, image, position FROM hero_slides ORDER BY position, id').all();
  res.json(rows);
});

// Navigation
app.get('/api/navigation', (req, res) => {
  const langCode = (req.query.lang as LanguageCode) || 'en';
  const items = db.prepare('SELECT id, key, path, position, is_cta FROM navigation ORDER BY position, id').all();
  const labelStmt = db.prepare('SELECT lang_code as lang, label FROM navigation_i18n WHERE nav_id = ? AND lang_code IN (?, ?)');

  const data = items.map((n: any) => {
    const rows = labelStmt.all(n.id, langCode, 'en') as { lang: LanguageCode; label: string }[];
    const picked = getWithFallback(rows, langCode, 'en', r => r.lang);
    return {
      key: n.key,
      path: n.path,
      position: n.position,
      isCta: !!n.is_cta,
      label: picked?.label || null,
    };
  });

  res.json(data);
});

// Get translations by keys for a language with fallback
app.post('/api/texts', (req, res) => {
  const { keys, lang } = req.body as { keys: string[]; lang?: LanguageCode };
  const langCode: LanguageCode = (lang as LanguageCode) || 'en';

  if (!Array.isArray(keys) || keys.length === 0) {
    return res.status(400).json({ error: 'keys array required' });
  }

  const placeholders = keys.map(() => '?').join(',');
  const textRows = db.prepare(`SELECT id, key FROM texts WHERE key IN (${placeholders})`).all(keys);

  const result: Record<string, string> = {};

  for (const tr of textRows) {
    const translations = db
      .prepare(
        'SELECT lang_code as lang, value FROM translations WHERE text_id = ? AND lang_code IN (?, ?)' // preferred + en fallback
      )
      .all(tr.id, langCode, 'en') as { lang: LanguageCode; value: string }[];

    const picked = getWithFallback(translations, langCode, 'en', r => r.lang);
    if (picked) {
      result[tr.key] = picked.value;
    }
  }

  res.json(result);
});

// List tours with translations and optional lang param
app.get('/api/tours', (req, res) => {
  const langCode = (req.query.lang as LanguageCode) || 'en';

  const baseTours = db.prepare('SELECT id, destination, duration, price, type, image FROM tours ORDER BY id').all();
  const i18nStmt = db.prepare('SELECT lang_code as lang, title, short_description, full_description FROM tour_i18n WHERE tour_id = ? AND lang_code IN (?, ?)');

  const data = baseTours.map((t: any) => {
    const rows = i18nStmt.all(t.id, langCode, 'en') as { lang: LanguageCode; title: string; short_description: string; full_description: string }[];
    const picked = getWithFallback(rows, langCode, 'en', r => r.lang);
    return {
      ...t,
      title: picked?.title || null,
      shortDescription: picked?.short_description || null,
      fullDescription: picked?.full_description || null,
    };
  });

  res.json(data);
});

// Team members
app.get('/api/team-members', (_req, res) => {
  const rows = db.prepare('SELECT id, name, role, bio, image, position FROM team_members WHERE is_active = 1 ORDER BY position, id').all();
  res.json(rows);
});

// Company values
app.get('/api/values', (_req, res) => {
  const rows = db.prepare('SELECT id, title, description, icon, position FROM company_values WHERE is_active = 1 ORDER BY position, id').all();
  res.json(rows);
});

// FAQ
app.get('/api/faq', (_req, res) => {
  const rows = db.prepare('SELECT id, question, answer, position FROM faq WHERE is_active = 1 ORDER BY position, id').all();
  res.json(rows);
});

// FAQ Topics
app.get('/api/faq-topics', (_req, res) => {
  const rows = db.prepare('SELECT id, title, description, icon, position FROM faq_topics WHERE is_active = 1 ORDER BY position, id').all();
  res.json(rows);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on http://localhost:${PORT}`);
});
