import { AuthValidationLayout } from '@/layouts/AuthValidationLayout'
import { AdminStructureLayout } from '@/layouts/AdminStructureLayout'
import { ReactNode } from 'react'

interface AdminPageLayoutProps {
  children: ReactNode
}

export default function AdminPageLayout({ children }: AdminPageLayoutProps) {
  return (
    <AuthValidationLayout>
      <AdminStructureLayout>
        {children}
      </AdminStructureLayout>
    </AuthValidationLayout>
  )
}
