import { AuthPageLayout } from '@/layouts/AuthPageLayout'
import { authService } from '@/modules/auth'
import { AuthForm } from '@/widgets/AuthForm'

export default function AuthPage() {
  authService.createSession()

  return (
    <AuthPageLayout>
      <AuthForm />
    </AuthPageLayout>
  )
}