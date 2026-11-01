// Delivers contact-form enquiries by email through Resend (https://resend.com).
// Needs these environment variables (set them in Vercel, never in the code):
//   RESEND_API_KEY  secret key from Resend
//   ENQUIRY_TO      inbox that receives enquiries, e.g. info@softwareatscale.com.au
//   ENQUIRY_FROM    sender on a domain verified in Resend, e.g. "Software@Scale website <enquiries@send.softwareatscale.com.au>"

const MAX_LENGTH = { name: 200, email: 254, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Enquiry = { name: string; email: string; message: string };

function parse(body: unknown): Enquiry | null {
  if (typeof body !== 'object' || body === null) return null;
  const { name, email, message } = body as Record<string, unknown>;
  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') return null;

  const enquiry = { name: name.trim(), email: email.trim(), message: message.trim() };
  if (!enquiry.name || !enquiry.message || !EMAIL_PATTERN.test(enquiry.email)) return null;
  if (
    enquiry.name.length > MAX_LENGTH.name ||
    enquiry.email.length > MAX_LENGTH.email ||
    enquiry.message.length > MAX_LENGTH.message
  ) return null;
  return enquiry;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'invalid' }, { status: 400 });
  }

  // Hidden "website" field: people never see it, bots fill it in. Pretend success so bots don't retry.
  if (typeof body === 'object' && body !== null && (body as Record<string, unknown>).website) {
    return Response.json({ ok: true });
  }

  const enquiry = parse(body);
  if (!enquiry) return Response.json({ ok: false, error: 'invalid' }, { status: 400 });

  const { RESEND_API_KEY, ENQUIRY_TO, ENQUIRY_FROM } = process.env;
  if (!RESEND_API_KEY || !ENQUIRY_TO || !ENQUIRY_FROM) {
    console.error('[contact] Enquiry not sent: RESEND_API_KEY, ENQUIRY_TO or ENQUIRY_FROM is not set');
    return Response.json({ ok: false, error: 'unavailable' }, { status: 503 });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: ENQUIRY_FROM,
        to: ENQUIRY_TO.split(',').map(address => address.trim()),
        reply_to: enquiry.email,
        subject: `Website enquiry from ${enquiry.name.replace(/[\r\n]+/g, ' ')}`,
        text: `Name: ${enquiry.name}\nEmail: ${enquiry.email}\n\n${enquiry.message}\n\n— Sent from the contact form at softwareatscale.com.au`,
      }),
    });

    if (!response.ok) {
      // Logged without the enquiry itself so no personal details end up in the logs
      console.error(`[contact] Resend rejected the enquiry: HTTP ${response.status}`, await response.text());
      return Response.json({ ok: false, error: 'send_failed' }, { status: 502 });
    }
  } catch (error) {
    console.error('[contact] Could not reach Resend', error);
    return Response.json({ ok: false, error: 'send_failed' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
