import { ReactNode } from 'react'
import { Centered } from '@/shared/components/Centered'

interface AuthPageLayoutProps {
  children: ReactNode
}

export function AuthPageLayout({ children }: AuthPageLayoutProps) {
  return (
    <Centered>
      {children}
    </Centered>
  )
}