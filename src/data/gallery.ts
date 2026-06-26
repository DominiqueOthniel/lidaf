export type GalleryFocus = 'top' | 'center';

export type GalleryItem = {
  src: string;
  title: string;
  tag: string;
  span?: string;
  focus?: GalleryFocus;
};

const FACE_PRIORITY_TAGS = new Set([
  'Équipe',
  'Direction',
  'Formation',
  'Terrain',
  'Conférence',
  'Médias',
  'Institutionnel',
  'Partenaires',
  'Programme',
  'Conseil',
]);

const FACE_PRIORITY_KEYWORDS = /portrait|interview|équipe|pdg|remise|audience|panel|groupe|direction|bénéficiaire|partenaire|animation|cérémonie/i;

export function getGalleryFocus(tag: string, title: string): GalleryFocus {
  if (FACE_PRIORITY_TAGS.has(tag) || FACE_PRIORITY_KEYWORDS.test(title)) {
    return 'top';
  }
  return 'center';
}

function withFocus(item: Omit<GalleryItem, 'focus'> & Partial<Pick<GalleryItem, 'focus'>>): GalleryItem {
  return { ...item, focus: item.focus ?? getGalleryFocus(item.tag, item.title) };
}

const baseGalleryItems: GalleryItem[] = [
  { src: '/assets/images/gallery/gallery-01.jpg', title: 'Couverture média', tag: 'Médias', span: 'md:col-span-2' },
  { src: '/assets/images/gallery/gallery-02.jpg', title: 'Logo officiel LCCA', tag: 'Identité' },
  { src: '/assets/images/gallery/gallery-03.jpg', title: 'Équipe en mission terrain', tag: 'Terrain', span: 'lg:col-span-2' },
  { src: '/assets/images/gallery/gallery-04.jpg', title: 'Représentation institutionnelle', tag: 'Institutionnel' },
  { src: '/assets/images/gallery/gallery-05.jpg', title: 'Session de travail au cabinet', tag: 'Bureau', span: 'md:col-span-2' },
  { src: '/assets/images/gallery/gallery-06.jpg', title: 'Portrait de direction', tag: 'Direction' },
  { src: '/assets/images/gallery/gallery-07.jpg', title: 'Remise et accompagnement', tag: 'Formation' },
  { src: '/assets/images/gallery/gallery-08.jpg', title: 'Atelier de formation', tag: 'Formation', span: 'lg:col-span-2' },
  { src: '/assets/images/gallery/gallery-09.jpg', title: 'Support PADESCE', tag: 'Programme' },
  { src: '/assets/images/gallery/gallery-10.jpg', title: 'Interview PADESCE', tag: 'Médias', span: 'md:col-span-2' },
  { src: '/assets/images/gallery/gallery-11.jpg', title: 'Équipe au cabinet', tag: 'Bureau' },
  { src: '/assets/images/gallery/gallery-12.jpg', title: 'Présentation services', tag: 'Expertise' },
  { src: '/assets/images/gallery/gallery-13.jpg', title: 'Panel de conférence', tag: 'Conférence', span: 'lg:col-span-2' },
  { src: '/assets/images/gallery/gallery-14.jpg', title: 'Réunion stratégique', tag: 'Conseil' },
  { src: '/assets/images/gallery/gallery-15.jpg', title: 'Mission de terrain', tag: 'Terrain', span: 'md:col-span-2' },
  { src: '/assets/images/gallery/gallery-16.jpg', title: 'Conférence institutionnelle', tag: 'Institutionnel', span: 'lg:col-span-2' },
  { src: '/assets/images/gallery/gallery-17.jpg', title: 'Site du cabinet', tag: 'Bureau' },
  { src: '/assets/images/gallery/gallery-18.jpg', title: 'Documentation visuelle', tag: 'Bureau' },
  { src: '/assets/images/gallery/gallery-19.jpg', title: 'PDG au bureau', tag: 'Direction' },
  { src: '/assets/images/gallery/gallery-20.jpg', title: 'Échange en ligne', tag: 'Digital' },
  { src: '/assets/images/gallery/gallery-21.jpg', title: 'Groupe de partenaires', tag: 'Partenaires', span: 'md:col-span-2' },
  { src: '/assets/images/gallery/gallery-22.jpg', title: 'Cérémonie et formation', tag: 'Formation' },
  { src: '/assets/images/gallery/gallery-23.jpg', title: 'Direction au cabinet', tag: 'Direction' },
  { src: '/assets/images/gallery/gallery-24.jpg', title: 'Interview média', tag: 'Médias', span: 'lg:col-span-2' },
  { src: '/assets/images/gallery/gallery-25.jpg', title: 'Audience de formation', tag: 'Formation', span: 'md:col-span-2' },
  { src: '/assets/images/gallery/gallery-26.jpg', title: 'Présentation du cabinet', tag: 'Identité' },
  { src: '/assets/images/gallery/gallery-27.jpg', title: 'Logo LCCA', tag: 'Identité' },
  { src: '/assets/images/gallery/gallery-28.jpg', title: 'Distinction et partenaires', tag: 'Partenaires', span: 'md:col-span-2' },
  { src: '/assets/images/gallery/gallery-29.jpg', title: 'Remise officielle', tag: 'Institutionnel' },
  { src: '/assets/images/gallery/gallery-30.jpg', title: 'Bureau et accueil', tag: 'Bureau', span: 'lg:col-span-2' },
  { src: '/assets/images/gallery/gallery-77.jpg', title: 'Portrait professionnel', tag: 'Équipe', focus: 'top' },
  { src: '/assets/images/gallery/gallery-78.jpg', title: 'Animation de formation PADESCE', tag: 'Formation', span: 'md:col-span-2', focus: 'top' },
  { src: '/assets/images/gallery/gallery-79.jpg', title: 'Remise de certificat PADESCE', tag: 'Formation', focus: 'top' },
];

const extraTitles = [
  'Équipe en action',
  'Rencontre professionnelle',
  'Accompagnement terrain',
  'Session de conseil',
  'Échange avec les bénéficiaires',
  'Portrait institutionnel',
  'Animation de formation',
  'Mission opérationnelle',
  'Présence sur le terrain',
  'Cadre de concertation',
  'Vie du cabinet',
  'Programme PADESCE',
  'Intervention médiatique',
  'Travaux de groupe',
  'Suivi de projet',
  'Équipe mobilisée',
  'Moment de partage',
  'Atelier pratique',
  'Représentation officielle',
  'Accompagnement des entreprises',
  'Formation professionnelle',
  'Événement institutionnel',
  'Collaboration partenaires',
  'Direction engagée',
  'Échanges stratégiques',
  'Preuve de terrain',
  'Mobilisation des équipes',
  'Session d’expertise',
  'Rencontre partenaires',
  'Action de proximité',
  'Cadre de formation',
  'Mission Lidaf CCA',
  'Accompagnement institutionnel',
  'Équipe et bénéficiaires',
  'Conférence et panel',
  'Suivi opérationnel',
  'Présence médiatique',
  'Travail collaboratif',
  'Engagement terrain',
  'Moment clé du cabinet',
  'Formation et remise',
  'Expertise en action',
  'Rencontre au cabinet',
  'Accompagnement PADESCE',
  'Vie professionnelle',
  'Impact sur le terrain',
];

const extraTags = [
  'Terrain',
  'Formation',
  'Institutionnel',
  'Bureau',
  'Médias',
  'Direction',
  'Partenaires',
  'Programme',
  'Conférence',
  'Conseil',
  'Expertise',
  'Digital',
];

function buildExtraGalleryItems(startIndex: number, count: number): GalleryItem[] {
  return Array.from({ length: count }, (_, offset) => {
    const index = startIndex + offset;
    const layoutIndex = index - 1;

    return withFocus({
      src: `/assets/images/gallery/gallery-${String(index).padStart(2, '0')}.jpg`,
      title: extraTitles[offset % extraTitles.length],
      tag: extraTags[offset % extraTags.length],
      span:
        layoutIndex % 5 === 0
          ? 'md:col-span-2'
          : layoutIndex % 7 === 3
            ? 'lg:col-span-2'
            : undefined,
    });
  });
}

export const galleryItems: GalleryItem[] = [
  ...baseGalleryItems.map(withFocus),
  ...buildExtraGalleryItems(31, 46),
];
