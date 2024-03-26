import { AuthValidationLayout } from '@/layouts/AuthValidationLayout'
import { ReactNode } from 'react'

interface AdminPageLayoutProps {
  children: ReactNode
}

export default function AdminPageLayout({ children }: AdminPageLayoutProps) {
  return (
    <AuthValidationLayout>
      {children}
    </AuthValidationLayout>
  )
}
