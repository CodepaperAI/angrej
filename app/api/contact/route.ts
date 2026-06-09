import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  pathway: z.enum(['complete', 'unsure']),
  batch: z.enum(['morning', 'evening', 'none']).optional(),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);
    // TODO: wire up Resend / SMTP in production. For now, log only.
    console.log('[contact-form]', data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid submission' }, { status: 400 });
  }
}
