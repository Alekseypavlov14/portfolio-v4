import { sessionsSessionStorage } from '@/entities/sessions/client'
import { useNavigation } from '@/services/navigation'
import { APIEndpoints } from '@/configs/api'
import { httpService } from '@/shared/utils/http'
import { useEffect } from 'react'
import { Id } from '@/shared/types/id'

export function useCheckSession() {
  const { navigateAuthPage } = useNavigation()

  // use effect is needed because otherwise sessionStorage is not defined
  useEffect(() => {
    const sessionId = sessionsSessionStorage.getItem()
    if (!sessionId) return navigateAuthPage()
  
    httpService.post<Id, void>(APIEndpoints.checkAuth, sessionId)
      .catch(navigateAuthPage)
  }, [])
}