import { FC } from 'react'
import styles from './HighlightDecor.module.scss'

interface HighlightDecorProps {
  top?: string
  left?: string
  right?: string
  bottom?: string
}

export const HighlightDecor: FC<HighlightDecorProps> = ({
  top = 'auto',
  left = 'auto',
  right = 'auto',
  bottom = 'auto'
}) => {
  return (
    <div 
      className={styles.HighlightDecor}
      style={{
        top: top,
        left: left,
        right: right,
        bottom: bottom,
      }} 
    />
  )
}