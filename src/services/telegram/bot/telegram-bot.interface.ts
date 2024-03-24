import { AuthSessionSender } from '@/modules/auth'
import { Id } from '@/shared/types/id'

export interface TelegramBotService extends AuthSessionSender {
  sendSessionIdToAdmin(sessionId: Id): Promise<void>
}