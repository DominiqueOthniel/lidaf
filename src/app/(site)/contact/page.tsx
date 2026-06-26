import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/ui/AppIcon';
import {
  contact,
  mailtoHref,
  mapsHref,
  telHref,
  whatsappHref,
} from '@/config/contact';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez le Cabinet Lidaf CCA à Douala pour vos besoins en fiscalité, comptabilité, gestion de projets et formations professionnelles.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: contact.company,
  email: contact.email,
  telephone: contact.phones.map((p) => p.tel),
  address: {
    '@type': 'PostalAddress',
    streetAddress: contact.address.street,
    addressLocality: 'Douala',
    addressCountry: 'CM',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  url: '/contact',
};

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Contact"
        icon="EnvelopeIcon"
        title={
          <>
            Parlons de votre <span className="text-highlight-green">projet</span>
          </>
        }
        description={`Remplissez le formulaire : votre message s'ouvre directement sur WhatsApp. Réponse garantie sous ${contact.responseTime}.`}
      />

      <section className="pb-12 sm:pb-16 md:pb-20 -mt-6 sm:-mt-8 relative z-10">
        <div className="site-container">
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-start">
            <div className="lg:col-span-3">
              <div className="rounded-2xl sm:rounded-3xl border border-border bg-card p-5 sm:p-8 shadow-xl">
                <div className="flex items-start sm:items-center gap-3 mb-6 pb-6 border-b border-border">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="PaperAirplaneIcon" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">Contactez-nous via WhatsApp</h2>
                    <p className="text-xs text-muted-foreground">
                      Remplissez le formulaire, puis envoyez sur WhatsApp
                    </p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {/* Téléphones — liens individuels */}
              <div className="contact-info-card">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon name="PhoneIcon" size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Téléphone
                  </p>
                  <div className="space-y-1.5">
                    {contact.phones.map((phone) => (
                      <a
                        key={phone.tel}
                        href={telHref(phone)}
                        className="block text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <a href={mailtoHref()} className="contact-info-card group">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon name="EnvelopeIcon" size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-foreground leading-snug break-all">
                    {contact.email}
                  </p>
                </div>
                <Icon
                  name="ArrowUpRightIcon"
                  size={14}
                  className="text-muted-foreground/40 group-hover:text-primary transition-colors mt-1"
                />
              </a>

              {/* Adresse */}
              <a
                href={mapsHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card group"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon name="MapPinIcon" size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                    Adresse
                  </p>
                  {contact.address.lines.map((line) => (
                    <p key={line} className="text-sm font-semibold text-foreground leading-snug">
                      {line}
                    </p>
                  ))}
                </div>
                <Icon
                  name="ArrowUpRightIcon"
                  size={14}
                  className="text-muted-foreground/40 group-hover:text-primary transition-colors mt-1"
                />
              </a>

              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn w-full justify-center"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={18} />
                Discuter sur WhatsApp
              </a>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="ClockIcon" size={16} className="text-accent" />
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Horaires d&apos;ouverture
                  </p>
                </div>
                <p className="text-sm text-foreground font-medium">{contact.hours.weekdays}</p>
                <p className="text-sm text-muted-foreground mt-1">{contact.hours.saturday}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
