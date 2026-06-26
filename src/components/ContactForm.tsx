'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import {
  contact,
  formSubjects,
  primaryPhone,
  telHref,
  whatsappHref,
} from '@/config/contact';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 5000;

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get('website')) {
      setStatus('success');
      form.reset();
      return;
    }

    const payload = {
      name: (formData.get('name') as string).trim(),
      email: (formData.get('email') as string).trim(),
      phone: (formData.get('phone') as string).trim(),
      subject: formData.get('subject') as string,
      message: (formData.get('message') as string).trim(),
    };

    if (payload.message.length < MIN_MESSAGE_LENGTH) {
      setStatus('error');
      setErrorMessage(`Le message doit contenir au moins ${MIN_MESSAGE_LENGTH} caractères.`);
      return;
    }

    if (payload.message.length > MAX_MESSAGE_LENGTH) {
      setStatus('error');
      setErrorMessage(`Le message ne peut pas dépasser ${MAX_MESSAGE_LENGTH} caractères.`);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi du message.');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Erreur lors de l\'envoi du message.'
      );
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl sm:rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Icon name="CheckCircleIcon" size={28} className="text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Message envoyé !</h3>
        <p className="text-muted-foreground mb-6">
          Merci pour votre message. Notre équipe vous répondra sous {contact.responseTime}.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button type="button" onClick={() => setStatus('idle')} className="btn-primary">
            Envoyer un autre message
          </button>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn justify-center"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={18} />
            WhatsApp
          </a>
        </div>
        <p className="mt-5 text-xs text-muted-foreground">
          Besoin d&apos;une réponse immédiate ? Appelez le{' '}
          <a href={telHref(primaryPhone)} className="font-semibold text-primary hover:underline">
            {primaryPhone.display}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot anti-spam — invisible aux visiteurs */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none h-0 w-0"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-foreground">
            Nom complet <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            disabled={status === 'loading'}
            placeholder="Votre nom"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-foreground">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={status === 'loading'}
            placeholder="votre@email.com"
            className="form-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-foreground">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            disabled={status === 'loading'}
            placeholder="+237 6XX XXX XXX"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-foreground">
            Sujet <span className="text-primary">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            disabled={status === 'loading'}
            className="form-input"
          >
            <option value="">Choisir un sujet</option>
            {formSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={MIN_MESSAGE_LENGTH}
          maxLength={MAX_MESSAGE_LENGTH}
          rows={6}
          disabled={status === 'loading'}
          placeholder="Décrivez votre besoin..."
          className="form-input resize-none"
        />
        <p className="mt-1.5 text-xs text-muted-foreground">
          Minimum {MIN_MESSAGE_LENGTH} caractères
        </p>
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <p>{errorMessage}</p>
          <p className="mt-2 text-xs text-red-600/80">
            Vous pouvez aussi nous joindre au{' '}
            <a href={telHref(primaryPhone)} className="font-semibold underline">
              {primaryPhone.display}
            </a>{' '}
            ou via{' '}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              WhatsApp
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Icon name="ArrowPathIcon" size={18} className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer le message
            <Icon name="PaperAirplaneIcon" size={18} />
          </>
        )}
      </button>
    </form>
  );
}
