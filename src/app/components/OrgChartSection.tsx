'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

type Member = {
  name: string;
  role: string;
  department: string;
  icon: string;
  photo?: string;
};

const AVATAR_FALLBACK = '/assets/images/team/avatar-placeholder.svg';

// NOTE : Remplacez les noms / rôles / photos par les informations réelles.
// Déposez les photos dans /public/assets/images/team/.
const pdg: Member = {
  name: 'Dr. Fadil Garba',
  role: 'Président Directeur Général',
  department: 'Direction Générale',
  icon: 'BuildingOffice2Icon',
  photo: '/assets/images/leadership/pdg-fadil-garba.jpg',
};

const reports: Member[] = [
  {
    name: 'Nom Prénom',
    role: 'Directrice Administrative & Financière',
    department: 'Finances & RH',
    icon: 'BanknotesIcon',
    photo: '/assets/images/team/daf.jpg',
  },
  {
    name: 'Nom Prénom',
    role: 'Directeur Conseil & Stratégie',
    department: 'Consulting',
    icon: 'PresentationChartLineIcon',
    photo: '/assets/images/team/conseil.jpg',
  },
  {
    name: 'Pougom Dominique',
    role: 'Ingénieur informaticien',
    department: 'Informatique',
    icon: 'ComputerDesktopIcon',
    photo: '/assets/images/team/dominique-pougom.jpg',
  },
  {
    name: 'Otiomoko Landry',
    role: 'Chargé de mission polyvalente',
    department: 'Missions',
    icon: 'ClipboardDocumentCheckIcon',
    photo: '/assets/images/team/landry-org.jpg',
  },
];

function MemberCard({ member, isRoot = false }: { member: Member; isRoot?: boolean }) {
  return (
    <div className={`oc-card group ${isRoot ? 'oc-root' : ''}`}>
      {!isRoot && (
        <Icon name={member.icon} size={64} className="oc-watermark" />
      )}

      {isRoot && (
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.625rem] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
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
            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
            sizes="120px"
          />
        </div>
      </div>

      {!isRoot && (
        <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-widest text-accent">
          <Icon name={member.icon} size={11} />
          {member.department}
        </span>
      )}

      <h3
        className={`text-base font-extrabold leading-snug ${
          isRoot ? 'mt-4 text-lg text-white' : 'mt-2 text-foreground'
        }`}
      >
        {member.name}
      </h3>

      <p
        className={`mt-1 text-xs leading-snug ${
          isRoot ? 'text-white/75' : 'text-muted-foreground'
        }`}
      >
        {member.role}
      </p>
    </div>
  );
}

export default function OrgChartSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.reveal-up')
              .forEach((el) => el.classList.add('visible'));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow mb-5 reveal-up">
            <Icon name="UserGroupIcon" size={12} />
            Notre Organigramme
          </span>
          <h2 className="text-section-title font-extrabold tracking-tight text-foreground leading-tight reveal-up">
            Les femmes et les hommes derrière Lidaf CCA.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground reveal-up">
            Une équipe pluridisciplinaire structurée autour d&apos;une direction de terrain,
            pour vous accompagner du diagnostic jusqu&apos;aux résultats.
          </p>
        </div>

        <div className="oc mt-12">
          <div className="reveal-up w-full max-w-xs mx-auto">
            <MemberCard member={pdg} isRoot />
          </div>

          <div className="oc-trunk reveal-up" aria-hidden="true" />

          <p className="oc-level-badge reveal-up">Équipe dirigeante · 4 directions</p>

          <div className="oc-reports">
            {reports.map((member, index) => (
              <div
                key={`${member.role}-${member.name}`}
                className="oc-item reveal-up"
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center reveal-up">
          <Link href="/contact" className="btn-primary">
            Travailler avec notre équipe
            <Icon name="ArrowUpRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
