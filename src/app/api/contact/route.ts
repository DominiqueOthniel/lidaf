import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { formSubjects } from '@/config/contact';

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  website?: string;
}

const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 5000;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    if (body.website?.trim()) {
      return NextResponse.json({ success: true });
    }

    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      );
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Le nom doit contenir entre 2 et 100 caractères.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 });
    }

    if (!formSubjects.includes(subject as (typeof formSubjects)[number])) {
      return NextResponse.json({ error: 'Sujet invalide.' }, { status: 400 });
    }

    if (message.length < MIN_MESSAGE_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        {
          error: `Le message doit contenir entre ${MIN_MESSAGE_LENGTH} et ${MAX_MESSAGE_LENGTH} caractères.`,
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const toEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !fromEmail || !toEmail) {
      console.error('Missing Resend configuration');
      return NextResponse.json(
        { error: 'Service email non configuré. Contactez-nous par téléphone.' },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[LidafCCA Contact] ${subject}`,
      html: `
        <h2>Nouveau message depuis le site LidafCCA</h2>
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>` : ''}
        <p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Impossible d\'envoyer le message. Réessayez plus tard.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Une erreur inattendue est survenue.' },
      { status: 500 }
    );
  }
}
