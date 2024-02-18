import { FC } from 'react'
import avatar from './Avatar.png'
import styles from './Avatar.module.scss'
import Image from 'next/image'

interface AvatarProps {}

export const Avatar: FC<AvatarProps> = () => {
  return (
    <div className={styles.Avatar}>
      <Image src={avatar} alt='' />
    </div>
  )
}