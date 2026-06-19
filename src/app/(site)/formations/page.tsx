import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import TrainingSection from '@/app/components/TrainingSection';
import HomeCTA from '@/app/components/HomeCTA';

export const metadata: Metadata = {
  title: 'Formations',
  description:
    'Formations professionnelles du Cabinet Lidaf CCA : management des organisations et gestion de projets à Douala.',
};

export default function FormationsPage() {
  return (
    <main className="bg-background min-h-screen">
      <PageHero
        eyebrow="Formations Professionnelles"
        icon="AcademicCapIcon"
        title={
          <>
            Nos formations <span className="text-highlight-green">et conseils</span>
          </>
        }
        description="Des programmes conçus pour renforcer les capacités managériales et opérationnelles de vos équipes."
      />
      <TrainingSection hideHeader className="-mt-4 !rounded-none" />
      <HomeCTA />
    </main>
  );
}
