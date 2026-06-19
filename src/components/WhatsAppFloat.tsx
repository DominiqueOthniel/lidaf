'use client';

import Icon from '@/components/ui/AppIcon';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/237674574133?text=Bonjour%20Cabinet%20Lidaf%20CCA%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20services."
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
