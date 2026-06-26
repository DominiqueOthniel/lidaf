import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import GalleryGrid from '@/components/GalleryGrid';
import Icon from '@/components/ui/AppIcon';
import { galleryItems } from '@/data/gallery';

export const metadata: Metadata = {
  title: 'Galerie',
  description:
    'Galerie photo du Cabinet Lidaf CCA : formations, missions terrain, conférences, médias et vie du cabinet.',
};

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
                {galleryItems.length} photos sélectionnées
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Une galerie complète, organisée par moments clés.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Cliquez sur une photo pour l&apos;aperçu complet. Les visages sont priorisés dans les
              vignettes.
            </p>
          </div>

          <GalleryGrid items={galleryItems} />
        </div>
      </section>
    </main>
  );
}
