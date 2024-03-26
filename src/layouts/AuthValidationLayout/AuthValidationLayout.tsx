'use client'

import { isCheckingSelector, isValidSelector, useAuthValidationStore } from './store'
import { useValidateAuth } from './hooks/use-validate-auth'
import { ReactNode } from 'react'

interface AuthValidationLayoutProps {
  children: ReactNode
}

export function AuthValidationLayout({ children }: AuthValidationLayoutProps) {
  const isChecking = useAuthValidationStore(isCheckingSelector)
  const isValid = useAuthValidationStore(isValidSelector)

  useValidateAuth()

  // during check process
  if (isChecking) return (
    <>Checking Authentication...</>
  )

  // if invalid authentication - redirect to auth page
  if (!isValid) return (
    <>Authentication is invalid</>
  )

  return (
    <>{children}</>
  )
}