import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import {
  contact,
  mailtoHref,
  mapsHref,
  telHref,
  whatsappHref,
} from '@/config/contact';

const footerLinks = {
  navigation: [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Formations', href: '/formations' },
    { label: 'Clients', href: '/clients' },
    { label: 'Galerie', href: '/galerie' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Fiscalité', href: '/services' },
    { label: 'Comptabilité', href: '/services' },
    { label: 'Gestion de projets', href: '/services' },
    { label: 'Formations', href: '/formations' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-foreground text-white overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-[0.04] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 organic-blob opacity-[0.06] pointer-events-none" style={{ background: 'var(--primary)' }} />

      <div className="relative site-container pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <AppLogo size={36} />
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-base text-white">LidafCCA</span>
                <span className="text-[10px] text-white/50 mt-0.5">Consulting Corp. of Africa</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Cabinet de conseil à Douala, spécialisé en fiscalité, comptabilité, gestion de projets
              et formations professionnelles.
            </p>
            <Link href="/contact" className="btn-primary text-sm">
              Demander un devis
              <Icon name="ArrowUpRightIcon" size={14} />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Expertises
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <Icon name="MapPinIcon" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href={mapsHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {contact.address.full}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="PhoneIcon" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  {contact.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={telHref(phone)}
                      className="block hover:text-white transition-colors"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="EnvelopeIcon" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a href={mailtoHref()} className="hover:text-white transition-colors break-all">
                  {contact.email}
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              {[
                { icon: 'PhoneIcon', href: telHref(), label: 'Téléphone' },
                { icon: 'EnvelopeIcon', href: mailtoHref(), label: 'Email' },
                { icon: 'ChatBubbleLeftRightIcon', href: whatsappHref(), label: 'WhatsApp', external: true },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  aria-label={s.label}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all"
                >
                  <Icon name={s.icon as 'PhoneIcon'} size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-sm text-white/40">
            © 2026 Cabinet Lidaf CCA. Tous droits réservés.
          </p>
          <p className="text-xs text-white/30 max-w-sm sm:max-w-none">
            Le temple du management par excellence des entreprises
          </p>
        </div>
      </div>
    </footer>
  );
}
