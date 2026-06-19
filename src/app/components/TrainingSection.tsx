'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const managementTopics = [
  'Gestion fiscale',
  'Gestion comptable et finance',
  'Gestion des ressources humaines',
  'Gestion transport & logistique',
  'Marketing & communication',
];

const projectTopics = [
  'Montage des business plan',
  'Suivi et évaluation des projets',
  'Recherche de financement',
  'Commerce international',
  'Assurances',
  'Transit',
];

const trainingPhotos = [
  {
    src: '/assets/images/lidaf/formation-audience.jpg',
    alt: 'Session de formation organisée avec les participants du programme PADESCE',
    label: 'Formation professionnelle',
  },
  {
    src: '/assets/images/lidaf/conference-panel.jpg',
    alt: 'Panel de conférence avec les représentants du Cabinet Lidaf CCA',
    label: 'Conférence & expertise',
  },
  {
    src: '/assets/images/lidaf/mission-terrain.jpg',
    alt: 'Mission de terrain avec analyse de plans et accompagnement projet',
    label: 'Mission de terrain',
  },
  {
    src: '/assets/images/lidaf/equipe-terrain.jpg',
    alt: 'Équipe et participants en mission de terrain avec le Cabinet Lidaf CCA',
    label: 'Équipe & terrain',
  },
];

export default function TrainingSection({
  hideHeader = false,
  className = '',
}: {
  hideHeader?: boolean;
  className?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.train-animate');
            items.forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 sm:py-20 md:py-28 bg-muted ${className} ${hideHeader ? '' : 'training-section-curve'}`}
    >
      <div className="site-container">
        {!hideHeader && (
        <>
        {/* Header */}
        <div className="mb-14 reveal-up train-animate">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-4">
              <span className="section-eyebrow">
                <Icon name="AcademicCapIcon" size={12} />
                Formations Professionnelles
              </span>
              <h2 className="text-section-title font-extrabold tracking-tight text-foreground leading-tight">
                Nos formations, conseils<br />
                <span className="text-accent">et suivi des entreprises</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
              Des programmes conçus pour renforcer les capacités managériales et opérationnelles de vos équipes.
            </p>
          </div>
          <div className="mt-6 section-divider" style={{ background: 'linear-gradient(90deg, var(--accent), var(--primary), transparent)' }} />
        </div>
        </>
        )}

        {/* Training photos row */}
        <div className="reveal-up train-animate mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trainingPhotos.map((photo, index) => (
              <div
                key={photo.src}
                className="relative h-52 sm:h-64 md:h-72 rounded-2xl sm:rounded-3xl overflow-hidden group"
              >
                <AppImage
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span
                    className={`text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm ${
                      index % 2 === 0 ? 'bg-primary/80' : 'bg-accent/80'
                    }`}
                  >
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BENTO AUDIT: 2 training cards, grid-cols-2
            Row 1: [col-1: ManagementOrganisations cs-1] [col-2: GestionProjets cs-1]
            Placed 2/2 ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* col-1: Management des organisations */}
          <div className="training-card reveal-up train-animate flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="BuildingLibraryIcon" size={22} className="text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Icon name="StarIcon" size={14} className="text-primary" variant="solid" />
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Module 1</span>
                </div>
                <h3 className="text-lg font-extrabold text-foreground leading-tight">
                  Management des organisations
                </h3>
              </div>
            </div>
            <ul className="space-y-3 flex-1">
              {managementTopics?.map((topic) => (
                <li key={topic} className="flex items-start gap-3">
                  <Icon name="StarIcon" size={14} className="text-primary mt-0.5 flex-shrink-0" variant="solid" />
                  <span className="text-sm text-foreground/85 font-medium">{topic}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-border">
              <a href="/contact" className="btn-primary text-sm w-full justify-center">
                S&apos;inscrire à ce module
                <Icon name="ArrowRightIcon" size={14} />
              </a>
            </div>
          </div>

          {/* col-2: Gestion des projets */}
          <div className="training-card reveal-up train-animate flex flex-col h-full" style={{ transitionDelay: '120ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon name="ChartBarIcon" size={22} className="text-accent" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Icon name="StarIcon" size={14} className="text-accent" variant="solid" />
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Module 2</span>
                </div>
                <h3 className="text-lg font-extrabold text-foreground leading-tight">
                  Gestion des projets
                </h3>
              </div>
            </div>
            <ul className="space-y-3 flex-1">
              {projectTopics?.map((topic) => (
                <li key={topic} className="flex items-start gap-3">
                  <Icon name="StarIcon" size={14} className="text-accent mt-0.5 flex-shrink-0" variant="solid" />
                  <span className="text-sm text-foreground/85 font-medium">{topic}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-border">
              <a href="/contact" className="inline-flex items-center gap-2 justify-center w-full font-bold text-sm py-3 px-5 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all">
                S&apos;inscrire à ce module
                <Icon name="ArrowRightIcon" size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}