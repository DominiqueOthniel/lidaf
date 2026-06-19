import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface PageHeroProps {
  eyebrow: string;
  icon?: string;
  title: React.ReactNode;
  description: string;
  backHref?: string;
  backLabel?: string;
}

export default function PageHero({
  eyebrow,
  icon = 'BriefcaseIcon',
  title,
  description,
  backHref = '/',
  backLabel = "Retour à l'accueil",
}: PageHeroProps) {
  return (
    <div className="page-hero-banner">
      <div className="relative site-container">
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium mb-6 transition-colors"
        >
          <Icon name="ArrowLeftIcon" size={16} />
          {backLabel}
        </Link>
        <span className="section-eyebrow mb-4 inline-flex border-white/20 bg-white/10 text-white">
          <Icon name={icon as 'BriefcaseIcon'} size={12} />
          {eyebrow}
        </span>
        <h1 className="text-section-title font-extrabold tracking-tight text-white leading-tight mt-4 mb-3 sm:mb-4 max-w-2xl">
          {title}
        </h1>
        <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl">{description}</p>
      </div>
    </div>
  );
}
