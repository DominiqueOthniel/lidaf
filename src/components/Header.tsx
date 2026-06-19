'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Formations', href: '/formations' },
  { label: 'Clients', href: '/clients' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Contact', href: '/contact' },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const showSolidHeader = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showSolidHeader
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="site-container h-14 sm:h-16 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group min-w-0">
            <AppLogo size={32} className="sm:hidden transition-transform group-hover:scale-105 flex-shrink-0" />
            <AppLogo size={36} className="hidden sm:block transition-transform group-hover:scale-105 flex-shrink-0" />
            <div className="flex flex-col leading-none min-w-0">
              <span
                className={`font-extrabold text-sm sm:text-base tracking-tight transition-colors truncate ${
                  showSolidHeader ? 'text-primary' : 'text-white'
                }`}
              >
                LidafCCA
              </span>
              <span
                className={`text-[10px] font-medium tracking-wide transition-colors hidden sm:block ${
                  showSolidHeader ? 'text-muted-foreground' : 'text-white/70'
                }`}
              >
                Consulting Corp. of Africa
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  showSolidHeader ? 'nav-link-scrolled hover:!text-primary' : ''
                } ${isActive(pathname, link.href) ? '!text-primary font-bold' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link href="/contact" className="btn-primary text-sm whitespace-nowrap">
              Nous Contacter
              <Icon name="ArrowUpRightIcon" size={16} />
            </Link>
          </div>

          <button
            type="button"
            className={`lg:hidden p-2.5 -mr-1 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${
              showSolidHeader ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 top-0 bottom-0 sm:bottom-auto sm:max-h-[85svh] bg-card border-b border-border pt-[4.25rem] pb-6 px-4 sm:px-6 shadow-2xl overflow-y-auto overscroll-contain">
            <nav className="flex flex-col gap-1 max-w-lg mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`font-semibold text-base sm:text-lg py-3.5 px-4 rounded-xl transition-colors min-h-[48px] flex items-center ${
                    isActive(pathname, link.href)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="btn-primary mt-3 justify-center min-h-[48px]"
              >
                Nous Contacter
                <Icon name="ArrowUpRightIcon" size={16} />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
