'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

const clients = [
  { name: 'OMC Sarl', sector: 'Commerce', initials: 'OM', logoBase: 'omc-sarl' },
  { name: 'SICAF', sector: 'Finance', initials: 'SC', logoBase: 'sicaf' },
  { name: 'ALTRAC LTD', sector: 'Transport', initials: 'AL', logoBase: 'altrac-ltd' },
  { name: 'COGEBA', sector: 'BTP', initials: 'CB', logoBase: 'cogeba' },
  { name: 'GONGA S.A', sector: 'Industrie', initials: 'GA', logoBase: 'gonga-sa' },
  { name: 'AFBU', sector: 'Agriculture', initials: 'AF', logoBase: 'afbu' },
  { name: 'SICA S.A', sector: 'Commerce', initials: 'SA', logoBase: 'sica-sa' },
  {
    name: 'Jost Sugar Company',
    sector: 'Agroalimentaire',
    initials: 'JS',
    logoBase: 'jost-sugar-company',
  },
];

const stats = [
  { value: '10+', label: 'Clients de référence', icon: 'UserGroupIcon' },
  { value: '6', label: 'Domaines d\'expertise', icon: 'BriefcaseIcon' },
  { value: '100%', label: 'Conformité garantie', icon: 'ShieldCheckIcon' },
  { value: 'Douala', label: 'Bonapriso, Cameroun', icon: 'MapPinIcon' },
];

function getLogoCandidates(logoBase: string) {
  const folders = ['/lidaf-logo', '/assets/images/lidaf-logo'];
  const extensions = ['svg', 'png', 'webp', 'jpg', 'jpeg'];

  return folders.flatMap((folder) =>
    extensions.map((extension) => `${folder}/${logoBase}.${extension}`)
  );
}

function ClientLogoCard({
  client,
  index,
}: {
  client: (typeof clients)[number];
  index: number;
}) {
  const logoCandidates = useMemo(() => getLogoCandidates(client.logoBase), [client.logoBase]);
  const [logoIndex, setLogoIndex] = useState(0);
  const logoSrc = logoCandidates[logoIndex];
  const hasLogoCandidate = Boolean(logoSrc);

  return (
    <div
      className="client-logo-card group reveal-up client-animate flex-col gap-3"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="relative flex h-16 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-white via-secondary/40 to-muted px-4 ring-1 ring-border/70">
        <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        {hasLogoCandidate ? (
          <Image
            src={logoSrc}
            alt={`Logo ${client.name}`}
            width={180}
            height={72}
            className="max-h-12 w-auto max-w-full object-contain transition duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 180px"
            onError={() => setLogoIndex((current) => current + 1)}
          />
        ) : (
          <div className="client-avatar flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-sm">
            <span className="text-sm font-extrabold tracking-wide text-white">{client.initials}</span>
          </div>
        )}
      </div>
      <div className="text-center">
        <p className="text-xs sm:text-sm font-bold text-foreground leading-snug break-words">
          {client.name}
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground font-bold">
          {client.sector}
        </p>
      </div>
    </div>
  );
}

export default function ClientsSection({
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
            const items = entry.target.querySelectorAll('.client-animate');
            items.forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 sm:py-20 md:py-28 bg-background ${className}`}
    >
      <div className="site-container">
        {!hideHeader && (
          <>
            {/* Header */}
            <div className="mb-14 text-center reveal-up client-animate">
              <span className="section-eyebrow mb-4 inline-flex">
                <Icon name="StarIcon" size={12} variant="solid" />
                Ils nous font confiance
              </span>
              <h2 className="text-section-title font-extrabold tracking-tight text-foreground mt-4 mb-4">
                Des partenaires qui avancent avec nous
              </h2>
              <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
                Entreprises, industries et organisations s&apos;appuient sur Lidaf CCA pour
                sécuriser leur conformité, structurer leur gestion et accélérer leurs projets.
              </p>
            </div>
          </>
        )}

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="reveal-up client-animate stat-card text-center"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name={stat.icon as 'UserGroupIcon'} size={18} className="text-primary" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-foreground">{stat.value}</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground font-medium mt-1 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Client logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <ClientLogoCard key={client.name} client={client} index={index} />
          ))}
        </div>

        {/* Tagline */}
        <div className="mt-14 reveal-up client-animate text-center">
          <div className="clients-tagline inline-flex items-center gap-3 px-4 sm:px-6 py-3 rounded-full bg-primary/10 border border-primary/20 max-w-full">
            <Icon name="CheckBadgeIcon" size={18} className="text-primary" />
            <p className="text-sm font-semibold text-primary">
              Cabinet agréé · Douala, Bonapriso · Cameroun
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}