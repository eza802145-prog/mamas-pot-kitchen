import express from 'express';
import type { Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const DATA_DIR = path.join(__dirname, 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

interface EnquiryPayload {
  fullName?: unknown;
  phone?: unknown;
  email?: unknown;
  serviceRequired?: unknown;
  preferredDate?: unknown;
  guestCount?: unknown;
  interestedIn?: unknown;
  message?: unknown;
}

interface StoredEnquiry {
  referenceId: string;
  fullName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  preferredDate: string;
  guestCount: string;
  interestedIn: string;
  message: string;
  submittedAt: string;
}

function cleanString(value: unknown, maxLength = 500): string {
  if (typeof value !== 'string') {
    return '';
  }
  return value.trim().slice(0, maxLength);
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/[\s\-()+]/g, '');
  return digits.length >= 7 && digits.length <= 15 && /^\d+$/.test(digits);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function saveEnquiry(record: StoredEnquiry): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  let existing: StoredEnquiry[] = [];
  try {
    const raw = await fs.readFile(ENQUIRIES_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      existing = parsed;
    }
  } catch {
    existing = [];
  }
  existing.push(record);
  await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(existing, null, 2), 'utf-8');
}

async function startServer(): Promise<void> {
  const app = express();
  app.use(express.json({ limit: '100kb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ ok: true });
  });

  app.post('/api/enquiries', async (req: Request, res: Response) => {
    const body = (req.body || {}) as EnquiryPayload;
    const fullName = cleanString(body.fullName, 120);
    const phone = cleanString(body.phone, 30);
    const email = cleanString(body.email, 160);
    const serviceRequired = cleanString(body.serviceRequired, 120);
    const preferredDate = cleanString(body.preferredDate, 40);
    const guestCount = cleanString(body.guestCount, 30);
    const interestedIn = cleanString(body.interestedIn, 200);
    const message = cleanString(body.message, 2000);

    const errors: Record<string, string> = {};

    if (fullName.length < 2) {
      errors.fullName = 'Please enter your full name.';
    }
    if (!isValidPhone(phone)) {
      errors.phone = 'Please enter a valid phone or WhatsApp number.';
    }
    if (email && !isValidEmail(email)) {
      errors.email = 'Please enter a valid email address or leave this field blank.';
    }
    if (!serviceRequired) {
      errors.serviceRequired = 'Please select the service you need.';
    }
    if (message.length < 5) {
      errors.message = 'Please share a short message about your order or event.';
    }

    if (Object.keys(errors).length > 0) {
      res.status(400).json({
        success: false,
        error: 'Please check the highlighted fields and try again.',
        fieldErrors: errors,
      });
      return;
    }

    const referenceId = `MPK-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    const submittedAt = new Date().toISOString();

    const record: StoredEnquiry = {
      referenceId,
      fullName,
      phone,
      email,
      serviceRequired,
      preferredDate,
      guestCount,
      interestedIn,
      message,
      submittedAt,
    };

    try {
      await saveEnquiry(record);
      res.status(201).json({
        success: true,
        referenceId,
        submittedAt,
        message: 'Your enquiry has been received by Mama’s Pot Kitchen.',
      });
    } catch (error) {
      console.error('Failed to persist customer enquiry:', error);
      res.status(500).json({
        success: false,
        error:
          'We could not save your enquiry right now. Please send your details directly on WhatsApp instead.',
      });
    }
  });

  if (!IS_PRODUCTION) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.join(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Mama's Pot Kitchen server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Server startup error:', err);
  process.exit(1);
});
