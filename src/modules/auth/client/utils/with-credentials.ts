import { sessionsSessionStorage } from '@/entities/sessions/client'
import { AUTH_HEADER, HTTPHeaders } from '@/shared/utils/http'

// used to add credentials to http request
export function withCredentials(): HTTPHeaders {
  const sessionId = sessionsSessionStorage.getItem()

  return { [AUTH_HEADER]: sessionId }
}