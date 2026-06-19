'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    id: 'fiscalite',
    icon: 'DocumentTextIcon',
    color: 'primary',
    title: 'Fiscalité',
    subtitle: 'Conformité & Optimisation fiscale',
    items: [
      'Création et immatriculation d\'entreprise',
      'Inscription fichier importateur/exportateur',
      'Immatriculation et suivi CNPS',
      'Déclaration TVA, IS, IRPP, ACOMPTE, PRÉCOMPTE',
      'Mise à jour fiscal',
      'Montage PDF fiscal',
    ],
  },
  {
    id: 'comptabilite',
    icon: 'CalculatorIcon',
    color: 'accent',
    title: 'Comptabilité',
    subtitle: 'Gestion financière & Audit',
    items: [
      'Élaboration système de gestion en 07 étapes',
      'États financiers : bilan, compte de résultat, balance',
      'Audit et contrôle de gestion',
      'Outils de gestion comptable',
      'Rapprochement des comptes bancaires',
      'Recrutement et formation des employés qualifiés',
    ],
  },
  {
    id: 'communication',
    icon: 'MegaphoneIcon',
    color: 'primary',
    title: 'Communication & Marketing',
    subtitle: 'Stratégie commerciale & Croissance',
    items: [
      'Ventes et négociation commerciale',
      'Étude des marchés & lancement de produits',
      'Politiques et stratégies commerciales',
      'Segmentation des marchés',
      'Réseaux de distribution des produits',
      'Définition des politiques commerciales',
    ],
  },
  {
    id: 'projets',
    icon: 'ClipboardDocumentListIcon',
    color: 'accent',
    title: 'Gestion des Projets',
    subtitle: 'Montage & Suivi de projets',
    items: [
      'Montage des projets',
      'Élaboration d\'un business plan',
      'Recherche de financement',
      'Suivi-évaluation des projets',
    ],
  },
  {
    id: 'transit',
    icon: 'TruckIcon',
    color: 'primary',
    title: 'Transit & Transport-Logistique',
    subtitle: 'Import/Export & Livraisons',
    items: [
      'Déclaration douanière',
      'Validation des documents',
      'Cotation des frets',
      'Paiement et gestion financière',
      'Enlèvement des marchandises',
      'Livraisons à destination',
    ],
  },
  {
    id: 'assurance',
    icon: 'ShieldCheckIcon',
    color: 'accent',
    title: 'Assurance',
    subtitle: 'Couverture tous risques',
    items: [
      'Assurance tous risque',
      'Assurance maladie',
      'Assurance véhicule, camion et autres',
      'Assurance marchandises',
      'Assurance incendie',
      'Assurance accident et risque divers',
    ],
  },
];

export default function ServicesSection({
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
            const cards = entry.target.querySelectorAll('.service-animate');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, i * 100);
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
        <div className="mb-14 reveal-up service-animate">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-4">
              <span className="section-eyebrow">
                <Icon name="BriefcaseIcon" size={12} />
                Nos Services
              </span>
              <h2 className="text-section-title font-extrabold tracking-tight text-foreground leading-tight">
                Nos domaines<br />
                <span className="text-primary">d&apos;expertise</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
              Six piliers de conseil pour accompagner la croissance et la conformité de votre entreprise au Cameroun.
            </p>
          </div>
          <div className="mt-6 section-divider" />
        </div>
        </>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            /* col-1 to col-3 each row, 6 cards total */
            <div
              key={service.id}
              className="service-card reveal-up service-animate"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Card top */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`service-card-icon w-12 h-12 rounded-2xl flex items-center justify-center ${
                    service.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                  }`}
                >
                  <Icon
                    name={service.icon as 'DocumentTextIcon'}
                    size={22}
                    className={service.color === 'primary' ? 'text-primary' : 'text-accent'}
                  />
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                    service.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                  }`}
                  style={{
                    backgroundColor: service.color === 'primary' ?'rgba(27,94,32,0.08)' :'rgba(107,79,160,0.08)',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-1">{service.title}</h3>
              <p className="text-xs text-muted-foreground mb-5 font-medium">{service.subtitle}</p>

              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        service.color === 'primary' ? 'bg-primary' : 'bg-accent'
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-border">
                <a
                  href="/contact"
                  className={`inline-flex items-center gap-1.5 text-sm font-bold transition-colors ${
                    service.color === 'primary'
                      ? 'text-primary hover:text-primary/80'
                      : 'text-accent hover:text-accent/80'
                  }`}
                >
                  Demander un devis
                  <Icon name="ArrowRightIcon" size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}