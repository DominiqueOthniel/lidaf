'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

const partnerLogos = [
  '003705e0-1a97-41f8-a8fb-ccddf1717637.jpg',
  '03859e07-e90d-4100-980c-7d2c9d77dc52.jpg',
  '2566ce68-2da6-4a63-801b-79c573d34eeb.jpg',
  '34ce7e8f-0b15-44e4-8c35-5d626cefc18c.jpg',
  '3cf0b5f3-dc54-40e2-8a26-f5ec1b493a11.jpg',
  '4ce404e7-3286-4fbf-a891-21191560072e.jpg',
  '655eaaed-0bab-4413-b46a-29d005b88b67.jpg',
  '6c3235a1-61d5-431d-bb57-1f03dcbc4049.jpg',
  '7c642102-dbde-47f6-89ba-eebe44ee58d2.jpg',
  '83bacc31-6598-4626-8ae5-551af7b1e04f.jpg',
  '88d86701-5587-4a8e-8d03-e5353807ed01.jpg',
  '9f125220-1f15-4f14-be98-c9ff20c953c0.jpg',
  'b468a16e-a4c2-405e-bbfb-ca511377a913.jpg',
  'b64a87da-e609-4a2d-b434-797bc753e983.jpg',
  'b9f96e97-f34e-41fb-98e4-8da2c82a8008.jpg',
  'ba2d85a2-26b6-40df-8bb4-d028020272db.jpg',
  'cb61c21d-a7f3-4ee0-8f2c-918c444cf814.jpg',
  'd4183a1e-38f1-40e6-ba5c-c2b2782d1e45.jpg',
  'd4692783-b342-498e-898f-71668d04c079.jpg',
  'd7077319-6d91-424d-a3fc-080458a71648.jpg',
  'ed8520bf-a2ad-414f-9086-7f920885e562.jpg',
  'f20db34d-0ce7-46b6-81a6-25df41e1ab78.jpg',
  'fce36b74-6558-4ef6-adf2-7da43e03fcc0.jpg',
];

const stats = [
  { value: '10+', label: 'Clients de référence', icon: 'UserGroupIcon' },
  { value: '6', label: 'Domaines d\'expertise', icon: 'BriefcaseIcon' },
  { value: '100%', label: 'Conformité garantie', icon: 'ShieldCheckIcon' },
  { value: 'Douala', label: 'Bonapriso, Cameroun', icon: 'MapPinIcon' },
];

function ClientLogoCard({
  logo,
  index,
}: {
  logo: string;
  index: number;
}) {
  const partnerNumber = String(index + 1).padStart(2, '0');

  return (
    <div
      className="client-logo-card group reveal-up client-animate"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="relative flex h-24 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-white via-secondary/40 to-muted px-4 ring-1 ring-border/70">
        <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <Image
          src={`/assets/images/lidaf-logos/${logo}`}
          alt={`Logo partenaire Lidaf CCA ${partnerNumber}`}
          width={220}
          height={120}
          className="max-h-20 w-auto max-w-full object-contain transition duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 220px"
        />
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {partnerLogos.map((logo, index) => (
            <ClientLogoCard key={logo} logo={logo} index={index} />
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