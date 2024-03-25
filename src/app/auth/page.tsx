import { authService } from '@/modules/auth'
import { AuthLayout } from '@/layouts/AuthLayout'
import { AuthForm } from '@/widgets/AuthForm'

export default function AuthPage() {
  authService.createSession()

  return (
    <AuthLayout>
      <AuthForm />
    </AuthLayout>
  )
}