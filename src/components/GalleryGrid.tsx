'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import GalleryLightbox from '@/components/GalleryLightbox';
import type { GalleryItem } from '@/data/gallery';

function focusClass(focus: GalleryItem['focus']) {
  return focus === 'top' ? 'object-top' : 'object-center';
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid auto-rows-[16rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className={`gallery-card group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm text-left ${
              item.span ?? ''
            } ${index % 7 === 0 ? 'sm:row-span-2' : ''}`}
            aria-label={`Voir ${item.title} en grand`}
          >
            <AppImage
              src={item.src}
              alt={item.title}
              fill
              className={`object-cover ${focusClass(item.focus)} transition-transform duration-700 group-hover:scale-105`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                {item.tag}
              </span>
              <h3 className="mt-2 text-lg font-extrabold leading-tight">{item.title}</h3>
            </div>
            <span className="gallery-card-zoom" aria-hidden="true">
              <Icon name="ArrowsPointingOutIcon" size={18} />
            </span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
