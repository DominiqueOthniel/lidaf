export type PhoneContact = {
  display: string;
  tel: string;
  whatsapp: string;
};

export const contact = {
  company: 'Cabinet Lidaf CCA',
  shortName: 'LidafCCA',
  email: 'cabinetlidaf@gmail.com',
  phones: [
    { display: '674 574 133', tel: '+237674574133', whatsapp: '237674574133' },
    { display: '695 258 918', tel: '+237695258918', whatsapp: '237695258918' },
  ] satisfies PhoneContact[],
  address: {
    street: '4851 Douala, Bonapriso',
    country: 'Cameroun',
    full: '4851 Douala, Bonapriso, Cameroun',
    lines: ['4851 Douala, Bonapriso', 'Cameroun'] as const,
  },
  hours: {
    weekdays: 'Lun au Ven : 8h à 18h',
    saturday: 'Sam : 9h à 13h',
  },
  responseTime: '24 heures',
  whatsappDefaultMessage:
    'Bonjour Cabinet Lidaf CCA, je souhaite obtenir des informations sur vos services.',
} as const;

export const primaryPhone = contact.phones[0];

export const formSubjects = [
  'Fiscalité',
  'Comptabilité',
  'Communication & Marketing',
  'Gestion de projets',
  'Transit & Transport-Logistique',
  'Assurance',
  'Formations',
  'Autre',
] as const;

export function telHref(phone: PhoneContact = primaryPhone) {
  return `tel:${phone.tel}`;
}

export function mailtoHref(email: string = contact.email) {
  return `mailto:${email}`;
}

export function whatsappHref(
  phone: PhoneContact = primaryPhone,
  message: string = contact.whatsappDefaultMessage
) {
  return `https://wa.me/${phone.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mapsHref(query: string = contact.address.full) {
  return `https://maps.google.com/?q=${encodeURIComponent(query)}`;
}

export type ContactFormPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export function buildWhatsAppContactMessage(payload: ContactFormPayload) {
  const lines = [
    'Bonjour Cabinet Lidaf CCA,',
    '',
    '*Nouvelle demande de contact*',
    `Nom : ${payload.name}`,
    `Email : ${payload.email}`,
    ...(payload.phone ? [`Téléphone : ${payload.phone}`] : []),
    `Sujet : ${payload.subject}`,
    '',
    payload.message,
  ];

  return lines.join('\n');
}

export function whatsappContactHref(payload: ContactFormPayload) {
  return whatsappHref(primaryPhone, buildWhatsAppContactMessage(payload));
}
