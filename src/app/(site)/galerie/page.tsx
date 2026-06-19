import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Galerie',
  description:
    'Galerie photo du Cabinet Lidaf CCA : formations, missions terrain, conférences, médias et vie du cabinet.',
};

const galleryItems = [
  { src: '/assets/images/gallery/gallery-01.jpg', title: 'Couverture média', tag: 'Médias', span: 'md:col-span-2' },
  { src: '/assets/images/gallery/gallery-02.jpg', title: 'Logo officiel LCCA', tag: 'Identité' },
  { src: '/assets/images/gallery/gallery-03.jpg', title: 'Équipe en mission terrain', tag: 'Terrain', span: 'lg:col-span-2' },
  { src: '/assets/images/gallery/gallery-04.jpg', title: 'Représentation institutionnelle', tag: 'Institutionnel' },
  { src: '/assets/images/gallery/gallery-05.jpg', title: 'Session de travail au cabinet', tag: 'Bureau', span: 'md:col-span-2' },
  { src: '/assets/images/gallery/gallery-06.jpg', title: 'Portrait de direction', tag: 'Direction' },
  { src: '/assets/images/gallery/gallery-07.jpg', title: 'Remise et accompagnement', tag: 'Formation' },
  { src: '/assets/images/gallery/gallery-08.jpg', title: 'Atelier de formation', tag: 'Formation', span: 'lg:col-span-2' },
  { src: '/assets/images/gallery/gallery-09.jpg', title: 'Support PADESCE', tag: 'Programme' },
  { src: '/assets/images/gallery/gallery-10.jpg', title: 'Interview PADESCE', tag: 'Médias', span: 'md:col-span-2' },
  { src: '/assets/images/gallery/gallery-11.jpg', title: 'Équipe au cabinet', tag: 'Bureau' },
  { src: '/assets/images/gallery/gallery-12.jpg', title: 'Présentation services', tag: 'Expertise' },
  { src: '/assets/images/gallery/gallery-13.jpg', title: 'Panel de conférence', tag: 'Conférence', span: 'lg:col-span-2' },
  { src: '/assets/images/gallery/gallery-14.jpg', title: 'Réunion stratégique', tag: 'Conseil' },
  { src: '/assets/images/gallery/gallery-15.jpg', title: 'Mission de terrain', tag: 'Terrain', span: 'md:col-span-2' },
  { src: '/assets/images/gallery/gallery-16.jpg', title: 'Conférence institutionnelle', tag: 'Institutionnel', span: 'lg:col-span-2' },
  { src: '/assets/images/gallery/gallery-17.jpg', title: 'Site du cabinet', tag: 'Bureau' },
  { src: '/assets/images/gallery/gallery-18.jpg', title: 'Documentation visuelle', tag: 'Bureau' },
  { src: '/assets/images/gallery/gallery-19.jpg', title: 'PDG au bureau', tag: 'Direction' },
  { src: '/assets/images/gallery/gallery-20.jpg', title: 'Échange en ligne', tag: 'Digital' },
  { src: '/assets/images/gallery/gallery-21.jpg', title: 'Groupe de partenaires', tag: 'Partenaires', span: 'md:col-span-2' },
  { src: '/assets/images/gallery/gallery-22.jpg', title: 'Cérémonie et formation', tag: 'Formation' },
  { src: '/assets/images/gallery/gallery-23.jpg', title: 'Direction au cabinet', tag: 'Direction' },
  { src: '/assets/images/gallery/gallery-24.jpg', title: 'Interview média', tag: 'Médias', span: 'lg:col-span-2' },
  { src: '/assets/images/gallery/gallery-25.jpg', title: 'Audience de formation', tag: 'Formation', span: 'md:col-span-2' },
  { src: '/assets/images/gallery/gallery-26.jpg', title: 'Présentation du cabinet', tag: 'Identité' },
  { src: '/assets/images/gallery/gallery-27.jpg', title: 'Logo LCCA', tag: 'Identité' },
  { src: '/assets/images/gallery/gallery-28.jpg', title: 'Distinction et partenaires', tag: 'Partenaires', span: 'md:col-span-2' },
  { src: '/assets/images/gallery/gallery-29.jpg', title: 'Remise officielle', tag: 'Institutionnel' },
  { src: '/assets/images/gallery/gallery-30.jpg', title: 'Bureau et accueil', tag: 'Bureau', span: 'lg:col-span-2' },
];

export default function GaleriePage() {
  return (
    <main className="bg-background min-h-screen">
      <PageHero
        eyebrow="Galerie"
        icon="PhotoIcon"
        title={
          <>
            Nos actions <span className="text-highlight-green">en images</span>
          </>
        }
        description="Formations, missions terrain, conférences, médias et vie du cabinet : une vue concrète de l'accompagnement Lidaf CCA."
      />

      <section className="py-14 sm:py-16 md:py-20">
        <div className="site-container">
          <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <span className="section-eyebrow mb-4 inline-flex">
                <Icon name="SparklesIcon" size={12} />
                30 photos sélectionnées
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Une galerie complète, organisée par moments clés.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Chaque image sert à montrer une preuve concrète : terrain, formation, institutionnel,
              médias ou identité du cabinet.
            </p>
          </div>

          <div className="grid auto-rows-[16rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <article
                key={item.src}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm ${
                  item.span ?? ''
                } ${index % 7 === 0 ? 'sm:row-span-2' : ''}`}
              >
                <AppImage
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                    {item.tag}
                  </span>
                  <h3 className="mt-2 text-lg font-extrabold leading-tight">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
