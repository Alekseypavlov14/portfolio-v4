import { env } from '@/shared/utils/env'

export const TELEGRAM_TOKEN_BOT = env('TELEGRAM_BOT_TOKEN')
export const ADMIN_CHAT_ID = env('ADMIN_CHAT_ID')

export const sessionIdMessage = 'New session is created. It\'s id is:'