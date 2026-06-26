'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import {
  contact,
  formSubjects,
  primaryPhone,
  telHref,
  whatsappContactHref,
} from '@/config/contact';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 5000;

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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

    const whatsappUrl = whatsappContactHref(payload);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setStatus('success');
    form.reset();
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl sm:rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/15">
          <Icon name="ChatBubbleLeftRightIcon" size={28} className="text-[#25D366]" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp ouvert !</h3>
        <p className="text-muted-foreground mb-6">
          Votre message est prêt à être envoyé sur WhatsApp. Notre équipe vous répondra sous{' '}
          {contact.responseTime}.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button type="button" onClick={() => setStatus('idle')} className="btn-primary">
            Envoyer un autre message
          </button>
        </div>
        <p className="mt-5 text-xs text-muted-foreground">
          WhatsApp ne s&apos;est pas ouvert ? Appelez le{' '}
          <a href={telHref(primaryPhone)} className="font-semibold text-primary hover:underline">
            {primaryPhone.display}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
          Minimum {MIN_MESSAGE_LENGTH} caractères — le message sera envoyé via WhatsApp
        </p>
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <p>{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="whatsapp-btn w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          'Ouverture de WhatsApp...'
        ) : (
          <>
            Envoyer via WhatsApp
            <Icon name="ChatBubbleLeftRightIcon" size={18} />
          </>
        )}
      </button>
    </form>
  );
}
