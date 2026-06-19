import React from 'react';
import HeroSection from '@/app/components/HeroSection';
import HomeOverview from '@/app/components/HomeOverview';
import LeadershipSection from '@/app/components/LeadershipSection';
import ImpactGallery from '@/app/components/ImpactGallery';
import HomeCTA from '@/app/components/HomeCTA';

export default function HomePage() {
  return (
    <main className="bg-background">
      <HeroSection />
      <HomeOverview />
      <LeadershipSection />
      <ImpactGallery />
      <HomeCTA />
    </main>
  );
}
