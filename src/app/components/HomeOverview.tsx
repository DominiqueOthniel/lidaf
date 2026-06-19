import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const pages = [
  {
    href: '/services',
    icon: 'BriefcaseIcon',
    color: 'primary',
    title: 'Nos Services',
    description:
      'Fiscalité, comptabilité, communication, gestion de projets, transit et assurance pour votre entreprise.',
    cta: 'Voir les services',
  },
  {
    href: '/formations',
    icon: 'AcademicCapIcon',
    color: 'accent',
    title: 'Formations',
    description:
      'Programmes de formation en management des organisations et gestion de projets pour vos équipes.',
    cta: 'Voir les formations',
  },
  {
    href: '/clients',
    icon: 'UserGroupIcon',
    color: 'primary',
    title: 'Nos Clients',
    description:
      'Entreprises et organisations qui nous confient leur développement et leur conformité.',
    cta: 'Voir nos clients',
  },
  {
    href: '/galerie',
    icon: 'PhotoIcon',
    color: 'accent',
    title: 'Galerie',
    description:
      'Photos de terrain, formations, conférences et moments institutionnels du Cabinet Lidaf CCA.',
    cta: 'Voir la galerie',
  },
];

export default function HomeOverview() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-background">
      <div className="site-container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="section-eyebrow mb-4 inline-flex">
            <Icon name="SparklesIcon" size={12} />
            Cabinet Lidaf CCA
          </span>
          <h2 className="text-section-title font-extrabold tracking-tight text-foreground mt-4 mb-4">
            Votre partenaire <span className="text-primary">de confiance</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Découvrez nos domaines d&apos;expertise, nos formations professionnelles et les
            entreprises qui nous font confiance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group service-card flex flex-col h-full"
            >
              <div
                className={`service-card-icon w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                  page.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                }`}
              >
                <Icon
                  name={page.icon as 'BriefcaseIcon'}
                  size={22}
                  className={page.color === 'primary' ? 'text-primary' : 'text-accent'}
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {page.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                {page.description}
              </p>
              <span
                className={`inline-flex items-center gap-1.5 text-sm font-bold ${
                  page.color === 'primary' ? 'text-primary' : 'text-accent'
                }`}
              >
                {page.cta}
                <Icon name="ArrowRightIcon" size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
