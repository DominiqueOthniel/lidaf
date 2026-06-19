'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

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
      setErrorMessage(error instanceof Error ? error.message : 'Erreur lors de l\'envoi du message.');
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
          Merci pour votre message. Notre équipe vous répondra dans les 24 heures.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn-primary"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
            <option value="Fiscalité">Fiscalité</option>
            <option value="Comptabilité">Comptabilité</option>
            <option value="Gestion de projets">Gestion de projets</option>
            <option value="Formations">Formations</option>
            <option value="Logistique & Transit">Logistique & Transit</option>
            <option value="Autre">Autre</option>
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
          rows={6}
          disabled={status === 'loading'}
          placeholder="Décrivez votre besoin..."
          className="form-input resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          'Envoi en cours...'
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
