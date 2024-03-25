import { sessionsSessionStorage } from '@/entities/sessions/client'

type Callback = () => void

export function checkSession(onError: Callback) {
  const isSessionExist = sessionsSessionStorage.getItem()
  if (!isSessionExist) onError()
}