import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez le Cabinet Lidaf CCA à Douala pour vos besoins en fiscalité, comptabilité, gestion de projets et formations professionnelles.',
};

const contactInfo = [
  {
    icon: 'PhoneIcon',
    label: 'Téléphone',
    lines: ['674 574 133', '695 258 918'],
    href: 'tel:+237674574133',
  },
  {
    icon: 'EnvelopeIcon',
    label: 'Email',
    lines: ['cabinetlidaf@gmail.com'],
    href: 'mailto:cabinetlidaf@gmail.com',
  },
  {
    icon: 'MapPinIcon',
    label: 'Adresse',
    lines: ['4851 Douala, Bonapriso', 'Cameroun'],
    href: 'https://maps.google.com/?q=4851+Douala+Bonapriso',
  },
];

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      <PageHero
        eyebrow="Contact"
        icon="EnvelopeIcon"
        title={
          <>
            Parlons de votre <span className="text-highlight-green">projet</span>
          </>
        }
        description="Remplissez le formulaire ou contactez-nous directement. Réponse garantie sous 24 heures."
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
                    <h2 className="text-lg font-bold text-foreground">Envoyez-nous un message</h2>
                    <p className="text-xs text-muted-foreground">
                      Tous les champs marqués * sont obligatoires
                    </p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-info-card group"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon name={item.icon as 'PhoneIcon'} size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    {item.lines.map((line) => (
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
              ))}

              <a
                href="https://wa.me/237674574133?text=Bonjour%20Cabinet%20Lidaf%20CCA%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20services."
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
                <p className="text-sm text-foreground font-medium">Lun au Ven : 8h à 18h</p>
                <p className="text-sm text-muted-foreground mt-1">Sam : 9h à 13h</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
