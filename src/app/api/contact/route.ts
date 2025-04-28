import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const FORMSPREE_URL = process.env.FORMSPREE_URL;
    if (!FORMSPREE_URL) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
    }

    const formspreeRes = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const data = await formspreeRes.json().catch(() => ({}));

    if (!formspreeRes.ok) {
      return NextResponse.json({ error: data?.message || 'Formspree error' }, { status: formspreeRes.status });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
