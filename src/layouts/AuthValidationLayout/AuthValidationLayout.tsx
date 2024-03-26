'use client'

import { ReactNode } from 'react'
import { isCheckingSelector, isValidSelector, useAuthValidationStore } from './store'
import { useValidateAuth } from './hooks/use-validate-auth'
import { Centered } from '@/shared/components/Centered'

interface AuthValidationLayoutProps {
  children: ReactNode
}

export function AuthValidationLayout({ children }: AuthValidationLayoutProps) {
  const isChecking = useAuthValidationStore(isCheckingSelector)
  const isValid = useAuthValidationStore(isValidSelector)

  useValidateAuth()

  // during check process
  if (isChecking) return (
    <Centered>Checking Authentication...</Centered>
  )

  // if invalid authentication - redirect to auth page
  if (!isValid) return (
    <Centered>Authentication is invalid</Centered>
  )

  return (
    <>{children}</>
  )
}