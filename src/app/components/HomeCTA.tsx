import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function HomeCTA() {
  return (
    <section className="py-10 sm:py-12 pb-16 sm:pb-20 bg-background">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-foreground px-5 py-10 sm:px-8 sm:py-12 md:py-16 text-white shadow-2xl">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute -top-24 -right-24 w-72 h-72 organic-blob opacity-10"
              style={{ background: 'var(--primary)' }}
            />
            <div className="absolute inset-0 dot-pattern opacity-5" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-3 sm:mb-4">
                Prêt à avancer avec <span className="text-highlight-white">LidafCCA</span> ?
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                Contactez nos experts pour un diagnostic gratuit de vos besoins en gestion,
                fiscalité et développement.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
              <Link href="/contact" className="btn-primary text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 justify-center w-full sm:w-auto">
                Nous contacter
                <Icon name="ArrowUpRightIcon" size={16} />
              </Link>
              <a
                href="https://wa.me/237674574133"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn justify-center w-full sm:w-auto text-sm sm:text-base"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
