import { TelegramBotService } from '../telegram-bot.interface'
import { sessionIdMessage } from '../constants'
import { Telegraf } from 'telegraf'
import { Id } from '@/shared/types/id'

export class TelegrafTelegramBotService implements TelegramBotService {
  private telegraf: Telegraf

  constructor(token: string, private readonly adminChatId: string) {
    this.telegraf = new Telegraf(token)
  }

  async sendSessionIdToAdmin(sessionId: Id) {
    await this.telegraf.telegram.sendMessage(this.adminChatId, sessionIdMessage)
    await this.telegraf.telegram.sendMessage(this.adminChatId, sessionId)
  }
}
