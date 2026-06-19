import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const galleryItems = [
  {
    src: '/assets/images/lidaf/formation-audience.jpg',
    title: 'Formation professionnelle',
    description: 'Des sessions structurées pour renforcer les compétences des équipes.',
    className: 'lg:col-span-2',
  },
  {
    src: '/assets/images/lidaf/mission-terrain.jpg',
    title: 'Suivi terrain',
    description: 'Une présence opérationnelle pour accompagner les projets jusqu’au résultat.',
    className: '',
  },
  {
    src: '/assets/images/lidaf/conference-panel.jpg',
    title: 'Expertise reconnue',
    description: 'Participation aux cadres de concertation, panels et programmes institutionnels.',
    className: '',
  },
  {
    src: '/assets/images/lidaf/equipe-terrain.jpg',
    title: 'Équipes engagées',
    description: 'Des interventions concrètes avec les bénéficiaires, partenaires et organisations.',
    className: 'lg:col-span-2',
  },
];

export default function ImpactGallery() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="site-container">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="section-eyebrow mb-4 inline-flex">
              <Icon name="PhotoIcon" size={12} />
              Galerie terrain
            </span>
            <h2 className="text-section-title font-extrabold tracking-tight text-foreground leading-tight">
              Des preuves visuelles de notre accompagnement.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
            Ces images montrent la présence réelle du cabinet : formation, terrain, représentation et
            suivi des bénéficiaires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className={`group relative min-h-[18rem] overflow-hidden rounded-3xl border border-border bg-card shadow-sm ${item.className}`}
            >
              <AppImage
                src={item.src}
                alt={item.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <h3 className="text-xl font-extrabold">{item.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/formations" className="btn-primary">
            Voir nos formations
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
