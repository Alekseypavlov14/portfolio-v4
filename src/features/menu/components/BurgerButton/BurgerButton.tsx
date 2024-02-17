'use client'

import { ComponentProps, FC, MouseEvent } from 'react'
import { closeSelector, isOpenedSelector, openSelector, useMenuStore } from '../../store'
import { clsx } from '@/shared/utils/clsx'
import styles from './BurgerButton.module.scss'

interface BurgerButtonProps extends ComponentProps<'div'> {}

export const BurgerButton: FC<BurgerButtonProps> = ({ className, onClick, ...props }) => {
  const isMenuOpened = useMenuStore(isOpenedSelector)
  const openMenu = useMenuStore(openSelector)
  const closeMenu = useMenuStore(closeSelector)

  const classNames = clsx(styles.BurgerButton, isMenuOpened && styles.Active, className)

  function clickHandler(event: MouseEvent<HTMLDivElement>) {
    isMenuOpened ? closeMenu() : openMenu()
    onClick && onClick(event)  
  }

  return (
    <div className={classNames} onClick={clickHandler} {...props}>
      <div />
    </div>
  )
}