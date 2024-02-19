import { FC, ReactNode } from 'react'
import { MobileMenu } from '@/features/menu'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import styles from './StructureLayout.module.scss'

interface StructureLayoutProps {
  children: ReactNode
}

export const StructureLayout: FC<StructureLayoutProps> = ({ children }) => {
  return (
    <div className={styles.StructureLayout}>
      <Header />
      <MobileMenu />

      {children}
      
      <Footer />
    </div>
  )
}