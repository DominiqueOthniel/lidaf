import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function LeadershipSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-muted">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -bottom-8 -right-6 w-36 h-36 rounded-full bg-accent/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
              <div className="relative aspect-[4/4.4] sm:aspect-[5/4] lg:aspect-[4/4.5]">
                <AppImage
                  src="/assets/images/leadership/pdg-fadil-garba.jpg"
                  alt="Portrait du PDG du Cabinet Lidaf CCA dans son bureau à Douala"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute left-5 right-5 bottom-5 rounded-2xl border border-white/15 bg-white/12 p-4 text-white backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                    Direction générale
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold">Dr. Fadil Garba</h3>
                  <p className="mt-1 text-sm text-white/75">PDG, Cabinet Lidaf CCA</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="section-eyebrow mb-5 inline-flex">
              <Icon name="BuildingOffice2Icon" size={12} />
              Notre Direction
            </span>

            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
                <AppLogo size={34} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  LidafCCA
                </p>
                <p className="text-sm font-semibold text-primary">
                  Consulting Corporation of Africa
                </p>
              </div>
            </div>

            <h2 className="text-section-title font-extrabold tracking-tight text-foreground leading-tight">
              Une expertise portée par une direction de terrain.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Le Cabinet Lidaf CCA accompagne les entreprises avec une approche pratique :
              diagnostic, conseil, formation et suivi opérationnel. La présence du dirigeant dans le
              site renforce la confiance et donne un visage humain à l&apos;institution.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { value: 'Conseil', label: 'Accompagnement stratégique' },
                { value: 'Formation', label: 'Montée en compétence' },
                { value: 'Suivi', label: 'Résultats mesurables' },
              ].map((item) => (
                <div key={item.value} className="stat-card">
                  <p className="text-sm font-extrabold text-primary">{item.value}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary justify-center">
                Rencontrer l&apos;équipe
                <Icon name="ArrowUpRightIcon" size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white"
              >
                Voir les expertises
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
