import { ContactConfig } from './types/contact-config'

import telegramIcon from './icons/telegram.svg'
import instagramIcon from './icons/instagram.svg'
import whatsappIcon from './icons/whatsapp.svg'

export const contactsConfig: ContactConfig[] = [
  { iconSrc: telegramIcon, label: '@aleshapavlov14', href: 'https://t.me/aleshapavlov14' },
  { iconSrc: instagramIcon, label: '@alio.sha13', href: 'https://instagram.com/alio.sha13'},
  { iconSrc: whatsappIcon, label: '+40 739 521 908', href: 'https://wa.me/40739521908' }
]