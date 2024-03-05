import { useEffect } from 'react'
import { useMenuStore, isOpenedSelector } from '../store'
import styles from '../styles.module.scss'

export function useLockBody() {
  const isOpened = useMenuStore(isOpenedSelector)

  // useEffect is needed because of "document is not defined" error of NEXT JS
  useEffect(() => {
    const body = document.querySelector('body')!

    if (isOpened) body.classList.add(styles.LockedScroll)
    else body.classList.remove(styles.LockedScroll)
  }, [isOpened])
}