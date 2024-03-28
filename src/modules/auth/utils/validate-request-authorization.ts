import { AUTH_HEADER } from '@/shared/utils/http'
import { NextRequest } from 'next/server'
import { authService } from '..'

export async function validateRequestAuthorization(request: NextRequest): Promise<boolean> {
  const sessionId = request.headers.get(AUTH_HEADER)
  if (!sessionId) return false

  const isSessionActive = await authService.checkSession(sessionId)
  if (!isSessionActive) return false

  return true
}