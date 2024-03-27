import { FC, ReactNode } from 'react'
import { MobileMenu } from '@/features/menu'
import { Wrapper } from '@/shared/components/Wrapper'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'

interface StructureLayoutProps {
  children: ReactNode
}

export const StructureLayout: FC<StructureLayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <MobileMenu />

      {children}
      
      <Footer />
    </Wrapper>
  )
}