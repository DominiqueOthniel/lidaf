'use client';

import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import { whatsappHref } from '@/config/contact';

export default function WhatsAppFloat() {
  const pathname = usePathname();

  if (pathname === '/contact') return null;

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter via WhatsApp"
      className="whatsapp-float group"
    >
      <Icon name="ChatBubbleLeftRightIcon" size={26} className="text-white" />
      <span className="whatsapp-float-label">WhatsApp</span>
    </a>
  );
}
