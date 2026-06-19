import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ServicesSection from '@/app/components/ServicesSection';
import HomeCTA from '@/app/components/HomeCTA';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Services du Cabinet Lidaf CCA : fiscalité, comptabilité, communication, gestion de projets, transit et assurance à Douala.',
};

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen">
      <PageHero
        eyebrow="Nos Services"
        icon="BriefcaseIcon"
        title={
          <>
            Nos domaines <span className="text-highlight-green">d&apos;expertise</span>
          </>
        }
        description="Six piliers de conseil pour accompagner la croissance et la conformité de votre entreprise au Cameroun."
      />
      <ServicesSection hideHeader className="-mt-4" />
      <HomeCTA />
    </main>
  );
}
