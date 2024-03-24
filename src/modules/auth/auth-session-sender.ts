import { Id } from '@/shared/types/id'

export interface AuthSessionSender {
  sendSessionIdToAdmin(sessionId: Id): Promise<void>
}