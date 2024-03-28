import { sessionsSessionStorage } from '@/entities/sessions/client'
import { withCredentials } from '../utils/with-credentials'
import { APIEndpoints } from '@/configs/api'
import { httpService } from '@/shared/utils/http'

export type CheckSessionCallback = (result: boolean) => void

export async function useIsSessionActive(): Promise<boolean> {
  const sessionId = sessionsSessionStorage.getItem()
  if (!sessionId) return false

  const result = await httpService.post<{}, {}>(APIEndpoints.checkAuth, {}, withCredentials())
    .then(() => true)
    .catch(() => false)

  if (!result) sessionsSessionStorage.clear()

  return result
}