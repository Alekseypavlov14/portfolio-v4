import { ComponentPropsWithoutRef, FC } from 'react'
import { contactsConfig } from '@/configs/contacts'
import { Anchor } from '@/shared/components/Anchor'
import { clsx } from '@/shared/utils/clsx'
import styles from './Contacts.module.scss'
import Image from 'next/image'

interface ContactsProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {}

export const Contacts: FC<ContactsProps> = ({ className, ...props }) => {
  const classNames = clsx(styles.Contacts, className)

  return (
    <div className={classNames} {...props}>
      {contactsConfig.map(contact => (
        <Anchor key={contact.href} className={styles.ContactLink} href={contact.href}>
          <Image src={contact.iconSrc} alt='' />
        </Anchor>
      ))}
    </div>
  )
}