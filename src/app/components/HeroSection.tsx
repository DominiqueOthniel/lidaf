'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = contentRef.current?.querySelectorAll('.hero-animate');
    items?.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.15}s`;
      el.classList.add('animate-fade-in-up');
    });

    const card = cardRef.current;
    if (card) {
      card.style.animationDelay = '0.6s';
      card.classList.add('animate-fade-in-up');
    }
  }, []);

  return (
    <section ref={heroRef} className="hero-section relative w-full">
      <div className="absolute inset-0 w-full h-full">
        <AppImage
          src="/assets/images/lidaf/hero-consulting-light.svg"
          alt="Illustration claire d'une équipe de conseil en réunion professionnelle"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-scrim" />
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-background hero-corner-cut" />

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col justify-end h-full site-container pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 md:pb-28 min-h-[100svh]"
      >
        <div className="hero-animate opacity-0 mb-4 sm:mb-5">
          <span className="inline-flex max-w-full flex-wrap items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span>Cabinet de Conseil · Douala, Cameroun</span>
          </span>
        </div>

        <h1 className="hero-animate opacity-0 text-hero-xl font-extrabold tracking-tight leading-[1.12] sm:leading-[1.1] max-w-3xl mb-4 sm:mb-6">
          <span className="text-highlight-green">Le temple du management</span>{' '}
          <span className="text-highlight-green">par excellence</span>{' '}
          <span className="text-highlight-accent">des entreprises</span>
        </h1>

        <p className="hero-animate opacity-0 text-white/80 text-base sm:text-lg font-medium max-w-xl mb-6 sm:mb-8 leading-relaxed">
          Fiscalité, comptabilité, gestion de projets, logistique et formations professionnelles.
          Votre partenaire stratégique au Cameroun.
        </p>

        <div className="hero-animate opacity-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <Link
            href="/services"
            className="btn-primary text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 w-full sm:w-auto justify-center"
          >
            Découvrir nos services
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
          <Link
            href="/contact"
            className="btn-outline-white text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 w-full sm:w-auto justify-center"
          >
            Nous contacter
            <Icon name="ArrowUpRightIcon" size={16} />
          </Link>
        </div>

        <div className="hero-animate opacity-0 mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-4">
          {[
            { value: '6', label: "Domaines d'expertise" },
            { value: '10+', label: 'Clients de référence' },
            { value: '24h', label: 'Délai de réponse' },
          ].map((stat) => (
            <div key={stat.label} className="glass-stat">
              <span className="text-xl sm:text-2xl font-extrabold text-white">{stat.value}</span>
              <span className="text-[11px] sm:text-xs text-white/60 font-medium mt-0.5 block leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="hero-animate opacity-0 mt-6 lg:hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-4">
          <div className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-3 text-white/90">
            <a href="tel:+237674574133" className="flex items-center gap-2 text-xs font-semibold min-h-[44px]">
              <Icon name="PhoneIcon" size={16} className="text-green-400 flex-shrink-0" />
              <span>674 574 133</span>
            </a>
            <a
              href="mailto:cabinetlidaf@gmail.com"
              className="flex items-center gap-2 text-xs font-semibold min-h-[44px] break-all"
            >
              <Icon name="EnvelopeIcon" size={16} className="text-green-400 flex-shrink-0" />
              <span className="truncate">cabinetlidaf@gmail.com</span>
            </a>
            <a
              href="https://wa.me/237674574133"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold min-h-[44px]"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={16} className="text-green-400 flex-shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <Link
        href="/services"
        className="scroll-indicator hidden md:flex"
        aria-label="Voir nos services"
      >
        <span>Découvrir</span>
        <Icon name="ChevronDownIcon" size={20} />
      </Link>

      <div
        ref={cardRef}
        className="floating-card opacity-0 absolute top-24 right-6 md:right-12 bg-white/95 backdrop-blur-md text-foreground p-6 rounded-3xl w-72 shadow-2xl z-20 hidden lg:block border border-border"
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-sm font-bold text-primary leading-tight">Lidaf Consulting Corp.</h3>
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon name="BuildingOfficeIcon" size={16} className="text-primary" />
          </div>
        </div>
        <div className="space-y-3 text-xs">
          <div className="flex items-start gap-2.5">
            <Icon name="MapPinIcon" size={14} className="text-accent mt-0.5 flex-shrink-0" />
            <p className="text-muted-foreground">4851 Douala, Bonapriso, Cameroun</p>
          </div>
          <div className="flex items-start gap-2.5">
            <Icon name="PhoneIcon" size={14} className="text-accent mt-0.5 flex-shrink-0" />
            <div className="text-muted-foreground">
              <p>674 574 133</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Icon name="EnvelopeIcon" size={14} className="text-accent mt-0.5 flex-shrink-0" />
            <p className="text-muted-foreground break-all">cabinetlidaf@gmail.com</p>
          </div>
        </div>
        <div className="mt-5 pt-4 border-t border-border">
          <p className="text-[10px] italic text-muted-foreground leading-relaxed">
            &ldquo;Le temple du management par excellence des entreprises&rdquo;
          </p>
        </div>
        <a
          href="https://wa.me/237674574133"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-2.5 rounded-xl transition-colors min-h-[44px]"
        >
          <Icon name="ChatBubbleLeftRightIcon" size={14} />
          WhatsApp
        </a>
      </div>
    </section>
  );
}
