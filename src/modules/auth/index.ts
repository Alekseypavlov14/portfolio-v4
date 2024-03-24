import { telegramBotService } from '@/services/telegram'
import { AuthService } from './auth.service'

export type { AuthSessionSender } from './auth-session-sender'

export const authService = new AuthService(telegramBotService)