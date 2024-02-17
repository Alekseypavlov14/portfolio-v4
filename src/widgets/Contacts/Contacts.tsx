import { FC } from 'react'
import { contactsConfig } from '@/configs/contacts'
import { Anchor } from '@/shared/components/Anchor'
import styles from './Contacts.module.scss'
import Image from 'next/image'

interface ContactsProps {}

export const Contacts: FC<ContactsProps> = () => {
  return (
    <div className={styles.Contacts}>
      {contactsConfig.map(contact => (
        <Anchor className={styles.ContactLink} href={contact.href}>
          <Image 
            key={contact.href}
            src={contact.iconSrc}
            alt=''
          />
        </Anchor>
      ))}
    </div>
  )
}