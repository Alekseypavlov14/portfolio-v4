'use client'

import { FC } from 'react'
import { isOpenedSelector, useMenuStore } from '../../store'
import { MobileMenuNavigation } from '../MobileMenuNavigation'
import { ContactsContainer } from '../ContactsContainer'
import { useLockBody } from '../../hooks/use-lock-body'
import { clsx } from '@/shared/utils/clsx'
import styles from './MobileMenu.module.scss'

interface MobileMenuProps {}

export const MobileMenu: FC<MobileMenuProps> = () => {
  const isOpened = useMenuStore(isOpenedSelector)
  useLockBody()

  const classNames = clsx(styles.MobileMenu, !isOpened && styles.Closed)

  return (
    <div className={classNames}>
      <div className={styles.HeaderPlaceHolder} />
      <MobileMenuNavigation />
      <ContactsContainer />
    </div>
  )
}