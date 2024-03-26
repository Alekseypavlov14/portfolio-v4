import { sessionsSessionStorage } from '@/entities/sessions/client'
import { APIEndpoints } from '@/configs/api'
import { httpService } from '@/shared/utils/http'
import { Id } from '@/shared/types/id'

export type CheckSessionCallback = (result: boolean) => void

export async function useIsSessionActive(): Promise<boolean> {
  const sessionId = sessionsSessionStorage.getItem()
  if (!sessionId) return false

  const result = await httpService.post<Id, boolean>(APIEndpoints.checkAuth, sessionId)
    .catch(() => false)

  return result
}