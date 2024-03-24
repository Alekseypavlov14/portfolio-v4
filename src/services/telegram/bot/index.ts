import { ADMIN_CHAT_ID, TELEGRAM_TOKEN_BOT } from './constants'
import { TelegrafTelegramBotService } from './telegraf'

export const telegramBotService = new TelegrafTelegramBotService(TELEGRAM_TOKEN_BOT, ADMIN_CHAT_ID)