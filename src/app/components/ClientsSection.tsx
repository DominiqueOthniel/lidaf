'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const clients = [
  { name: 'OMC Sarl', sector: 'Commerce' },
  { name: 'SICAF', sector: 'Finance' },
  { name: 'ALTRAC LTD', sector: 'Transport' },
  { name: 'COGEBA', sector: 'BTP' },
  { name: 'GONGA S.A', sector: 'Industrie' },
  { name: 'AFBU', sector: 'Agriculture' },
  { name: 'SICA S.A', sector: 'Commerce' },
  { name: 'Jost Sugar Company', sector: 'Agroalimentaire' },
];

const stats = [
  { value: '10+', label: 'Clients de référence', icon: 'UserGroupIcon' },
  { value: '6', label: 'Domaines d\'expertise', icon: 'BriefcaseIcon' },
  { value: '100%', label: 'Conformité garantie', icon: 'ShieldCheckIcon' },
  { value: 'Douala', label: 'Bonapriso, Cameroun', icon: 'MapPinIcon' },
];

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
            Nos clients de référence
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Des entreprises et organisations qui nous confient leur développement et leur conformité depuis des années.
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
        {/* BENTO AUDIT: 8 client cards, 4-col desktop
            Row 1: [col-1: OMCSarl cs-1] [col-2: SICAF cs-1] [col-3: ALTRAC cs-1] [col-4: COGEBA cs-1]
            Row 2: [col-1: GONGA cs-1] [col-2: AFBU cs-1] [col-3: SICA cs-1] [col-4: JostSugar cs-1]
            Placed 8/8 ✓ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            /* each card cs-1 */
            <div
              key={client.name}
              className="client-logo-card reveal-up client-animate flex-col gap-2"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="client-avatar w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-2">
                <span className="text-white font-extrabold text-sm">
                  {client.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-foreground text-center leading-snug break-words">
                {client.name}
              </p>
              <p className="text-[10px] text-muted-foreground text-center font-medium">{client.sector}</p>
            </div>
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