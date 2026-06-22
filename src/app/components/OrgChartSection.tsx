import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

type Member = {
  name: string;
  role: string;
  department?: string;
  photo?: string;
  children?: Member[];
};

const AVATAR_FALLBACK = '/assets/images/team/avatar-placeholder.svg';

// NOTE : Remplacez les noms / rôles / photos ci-dessous par les informations
// réelles des membres. Déposez les photos dans /public/assets/images/team/.
const organisation: Member = {
  name: 'Dr. Fadil Garba',
  role: 'Président Directeur Général',
  department: 'Direction Générale',
  photo: '/assets/images/leadership/pdg-fadil-garba.jpg',
  children: [
    {
      name: 'Nom Prénom',
      role: 'Directeur Général Adjoint',
      department: 'Coordination',
      photo: '/assets/images/team/dga.jpg',
    },
    {
      name: 'Nom Prénom',
      role: 'Directrice Administrative & Financière',
      department: 'Finances & RH',
      photo: '/assets/images/team/daf.jpg',
      children: [
        {
          name: 'Nom Prénom',
          role: 'Responsable Comptabilité',
          photo: '/assets/images/team/comptabilite.jpg',
        },
        {
          name: 'Nom Prénom',
          role: 'Chargé(e) RH',
          photo: '/assets/images/team/rh.jpg',
        },
      ],
    },
    {
      name: 'Nom Prénom',
      role: 'Directeur Conseil & Stratégie',
      department: 'Consulting',
      photo: '/assets/images/team/conseil.jpg',
      children: [
        {
          name: 'Nom Prénom',
          role: 'Consultant Senior',
          photo: '/assets/images/team/consultant.jpg',
        },
        {
          name: 'Nom Prénom',
          role: 'Analyste',
          photo: '/assets/images/team/analyste.jpg',
        },
      ],
    },
    {
      name: 'Nom Prénom',
      role: 'Responsable Formation',
      department: 'Capital Humain',
      photo: '/assets/images/team/formation.jpg',
    },
  ],
};

function OrgNode({ member, isRoot = false }: { member: Member; isRoot?: boolean }) {
  const hasChildren = !!member.children?.length;

  return (
    <li>
      <div className={`org-card group ${isRoot ? 'org-card-root' : ''}`}>
        {isRoot && (
          <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent px-3 py-1 text-[0.625rem] font-bold uppercase tracking-widest text-white shadow-md">
            <Icon name="StarIcon" variant="solid" size={11} />
            Direction
          </span>
        )}

        <div className="org-photo">
          <div className="org-photo-inner">
            <AppImage
              src={member.photo || AVATAR_FALLBACK}
              alt={`Portrait de ${member.name}, ${member.role} au Cabinet Lidaf CCA`}
              fill
              fallbackSrc={AVATAR_FALLBACK}
              className="object-cover object-center"
              sizes="120px"
            />
          </div>
        </div>

        {member.department && (
          <p
            className={`mt-3 text-[0.625rem] font-bold uppercase tracking-widest ${
              isRoot ? 'text-white/70' : 'text-accent'
            }`}
          >
            {member.department}
          </p>
        )}

        <h3
          className={`mt-1 text-sm font-extrabold leading-snug ${
            isRoot ? 'text-white' : 'text-foreground'
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

      {hasChildren && (
        <ul>
          {member.children!.map((child, index) => (
            <OrgNode key={`${child.role}-${index}`} member={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function OrgChartSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow mb-5">
            <Icon name="UserGroupIcon" size={12} />
            Notre Organigramme
          </span>
          <h2 className="text-section-title font-extrabold tracking-tight text-foreground leading-tight">
            Les femmes et les hommes derrière Lidaf CCA.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Une équipe pluridisciplinaire structurée autour d&apos;une direction de terrain,
            pour vous accompagner du diagnostic jusqu&apos;aux résultats.
          </p>
        </div>

        <div className="org-scroll mt-12">
          <div className="org-tree">
            <ul>
              <OrgNode member={organisation} isRoot />
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/contact" className="btn-primary">
            Travailler avec notre équipe
            <Icon name="ArrowUpRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
