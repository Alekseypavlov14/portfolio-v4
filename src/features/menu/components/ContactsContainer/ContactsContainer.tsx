import { FC, ReactNode } from 'react'
import { Contacts } from '@/widgets/Contacts'
import styles from './ContactsContainer.module.scss'

interface ContactsContainerProps {}

export const ContactsContainer: FC<ContactsContainerProps> = () => {
  return (
    <div className={styles.ContactsContainer}>
      <Contacts />
    </div>
  )
}