'use client'

import { sessionIdSelector, useAuthStore } from '../store'
import { sessionsSessionStorage } from '@/entities/sessions/client'
import { useNavigation } from '@/services/navigation'


export function useAuth() {
  const sessionId = useAuthStore(sessionIdSelector)
  const { navigateAdminPage } = useNavigation()

  return () => {
    sessionsSessionStorage.setItem(sessionId)
    navigateAdminPage()
  }
}