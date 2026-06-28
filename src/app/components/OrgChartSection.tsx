'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

type Member = {
  name: string;
  role: string;
  department: string;
  icon: string;
  photo?: string;
  accent: 'violet' | 'emerald' | 'amber';
};

const AVATAR_FALLBACK = '/assets/images/team/avatar-placeholder.svg';

const pdg: Member = {
  name: 'Dr. Fadil Garba',
  role: 'Président Directeur Général',
  department: 'Direction Générale',
  icon: 'BuildingOffice2Icon',
  photo: '/assets/images/leadership/pdg-fadil-garba.jpg',
  accent: 'emerald',
};

const reports: Member[] = [
  {
    name: 'KASSE AROLD',
    role: 'Ingénieur en gestion de projets',
    department: 'Gestion de projets',
    icon: 'PresentationChartLineIcon',
    photo: '/assets/images/team/kasse-arold.jpg',
    accent: 'violet',
  },
  {
    name: 'Pougom Dominique',
    role: 'Ingénieur informaticien',
    department: 'Informatique',
    icon: 'ComputerDesktopIcon',
    photo: '/assets/images/team/dominique-pougom.jpg',
    accent: 'emerald',
  },
  {
    name: 'Otiomoko Landry',
    role: 'Chargé de mission polyvalente',
    department: 'Missions',
    icon: 'ClipboardDocumentCheckIcon',
    photo: '/assets/images/team/landry-org.jpg',
    accent: 'amber',
  },
];

function MemberCard({ member, isRoot = false }: { member: Member; isRoot?: boolean }) {
  return (
    <div
      className={`oc-card group ${isRoot ? 'oc-root' : ''}`}
      data-accent={isRoot ? undefined : member.accent}
    >
      {!isRoot && (
        <Icon name={member.icon} size={72} className="oc-watermark" aria-hidden="true" />
      )}

      {isRoot && (
        <span className="oc-root-badge">
          <Icon name="StarIcon" variant="solid" size={11} />
          Direction Générale
        </span>
      )}

      <div className="oc-photo">
        <div className="oc-photo-inner">
          <AppImage
            src={member.photo || AVATAR_FALLBACK}
            alt={`Portrait de ${member.name}, ${member.role} au Cabinet Lidaf CCA`}
            fill
            unoptimized
            fallbackSrc={AVATAR_FALLBACK}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 640px) 96px, 120px"
          />
        </div>
        <span className="oc-photo-shine" aria-hidden="true" />
      </div>

      {!isRoot && (
        <span className="oc-dept-badge">
          <Icon name={member.icon} size={11} />
          {member.department}
        </span>
      )}

      <h3 className={`oc-name ${isRoot ? 'oc-name--root' : ''}`}>{member.name}</h3>

      <p className={`oc-role ${isRoot ? 'oc-role--root' : ''}`}>{member.role}</p>
    </div>
  );
}

export default function OrgChartSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [chartVisible, setChartVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const items = entry.target.querySelectorAll<HTMLElement>('.oc-animate');
          items.forEach((el, i) => {
            const delay = Number(el.dataset.delay ?? i * 90);
            window.setTimeout(() => el.classList.add('visible'), delay);
          });

          window.setTimeout(() => setChartVisible(true), 320);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="oc-section relative overflow-hidden py-16 sm:py-20 md:py-24"
    >
      <div className="oc-section-glow oc-section-glow--left" aria-hidden="true" />
      <div className="oc-section-glow oc-section-glow--right" aria-hidden="true" />
      <div className="oc-section-grid" aria-hidden="true" />

      <div className="site-container relative z-[1]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow mb-5 oc-animate" data-delay="0">
            <Icon name="UserGroupIcon" size={12} />
            Notre Organigramme
          </span>
          <h2 className="text-section-title font-extrabold tracking-tight text-foreground leading-tight oc-animate" data-delay="80">
            Les femmes et les hommes derrière Lidaf CCA.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground oc-animate" data-delay="160">
            Une équipe pluridisciplinaire structurée autour d&apos;une direction de terrain,
            pour vous accompagner du diagnostic jusqu&apos;aux résultats.
          </p>
        </div>

        <div className={`oc mt-14 sm:mt-16 ${chartVisible ? 'oc-visible' : ''}`}>
          <div className="oc-animate w-full max-w-[19rem] mx-auto" data-delay="280">
            <MemberCard member={pdg} isRoot />
          </div>

          <div className="oc-trunk" aria-hidden="true">
            <span className="oc-trunk-pulse" />
          </div>

          <p className="oc-level-badge oc-animate" data-delay="520">
            Équipe dirigeante · 3 directions
          </p>

          <div className="oc-reports">
            {reports.map((member, index) => (
              <div
                key={`${member.role}-${member.name}`}
                className="oc-item oc-animate"
                data-delay={String(600 + index * 140)}
              >
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center oc-animate" data-delay="980">
          <Link href="/contact" className="btn-primary group">
            Travailler avec notre équipe
            <Icon
              name="ArrowUpRightIcon"
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
