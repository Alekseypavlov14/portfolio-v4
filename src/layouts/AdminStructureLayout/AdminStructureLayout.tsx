import { AdminHeader } from '@/widgets/AdminHeader'
import { ReactNode } from 'react'
import { Wrapper } from '@/shared/components/Wrapper'

interface AdminStructureLayoutProps {
  children: ReactNode
}

export function AdminStructureLayout({ children }: AdminStructureLayoutProps) {
  return (
    <Wrapper>
      <AdminHeader />
      
      {children}
    </Wrapper>
  )
}