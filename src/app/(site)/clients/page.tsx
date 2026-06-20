import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ClientsSection from '@/app/components/ClientsSection';
import HomeCTA from '@/app/components/HomeCTA';

export const metadata: Metadata = {
  title: 'Clients',
  description:
    'Clients de référence du Cabinet Lidaf CCA à Douala : entreprises et organisations en fiscalité, comptabilité et gestion.',
};

export default function ClientsPage() {
  return (
    <main className="bg-background min-h-screen">
      <PageHero
        eyebrow="La confiance des références"
        icon="StarIcon"
        title={
          <>
            Nos clients <span className="text-highlight-green">de référence</span>
          </>
        }
        description="Des entreprises et organisations qui nous confient leur développement et leur conformité depuis des années."
      />
      <ClientsSection hideHeader className="-mt-4" />
      <HomeCTA />
    </main>
  );
}
