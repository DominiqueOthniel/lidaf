'use client';

import React, { useCallback, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import type { GalleryItem } from '@/data/gallery';

type GalleryLightboxProps = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function GalleryLightbox({ items, index, onClose, onNavigate }: GalleryLightboxProps) {
  const item = items[index];
  const hasPrev = index > 0;
  const hasNext = index < items.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onNavigate(index - 1);
  }, [hasPrev, index, onNavigate]);

  const goNext = useCallback(() => {
    if (hasNext) onNavigate(index + 1);
  }, [hasNext, index, onNavigate]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose, goPrev, goNext]);

  if (!item) return null;

  return (
    <div
      className="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Aperçu : ${item.title}`}
      onClick={onClose}
    >
      <div className="gallery-lightbox-backdrop" aria-hidden="true" />

      <button
        type="button"
        onClick={onClose}
        className="gallery-lightbox-close"
        aria-label="Fermer l'aperçu"
      >
        <Icon name="XMarkIcon" size={22} />
      </button>

      {hasPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="gallery-lightbox-nav gallery-lightbox-nav-prev"
          aria-label="Photo précédente"
        >
          <Icon name="ChevronLeftIcon" size={24} />
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="gallery-lightbox-nav gallery-lightbox-nav-next"
          aria-label="Photo suivante"
        >
          <Icon name="ChevronRightIcon" size={24} />
        </button>
      )}

      <figure className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="gallery-lightbox-image-wrap">
          <AppImage
            src={item.src}
            alt={item.title}
            fill
            unoptimized
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        <figcaption className="gallery-lightbox-caption">
          <span className="gallery-lightbox-tag">{item.tag}</span>
          <p className="gallery-lightbox-title">{item.title}</p>
          <p className="gallery-lightbox-counter">
            {index + 1} / {items.length}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
