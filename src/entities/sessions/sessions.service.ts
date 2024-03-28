import { SESSION_ACTIVITY_TIME } from './constants'
import { DatabaseCollection } from '@/shared/database'
import { SessionEntity } from './session.entity'
import { DateTime } from '@/shared/utils/date-time'
import { Id } from '@/shared/types/id'

interface ISessionsService {
  create(): Promise<SessionEntity>
  activateById(id: Id): Promise<void>
  checkById(id: Id): Promise<boolean>
  closeById(id: Id): Promise<SessionEntity>
  closeAll(): void
}

export class SessionsService implements ISessionsService {
  constructor(private readonly sessionCollection: DatabaseCollection<SessionEntity>) {}

  create() {
    const expiresMoment = new DateTime()
      .getDateTimeAfter(SESSION_ACTIVITY_TIME)
      .getTimeInMilliseconds()

    const sessionData: Omit<SessionEntity, 'id'> = { 
      isActive: false,
      expires: expiresMoment
    }

    return this.sessionCollection.create(sessionData)
  }

  async activateById(id: Id) {
    const expiresMoment = new DateTime()
      .getDateTimeAfter(SESSION_ACTIVITY_TIME)
      .getTimeInMilliseconds()

    await this.sessionCollection.updateById(id, { 
      isActive: true,
      expires: expiresMoment
    })
  }

  async checkById(id: string) {
    const session = await this.sessionCollection.getItemById(id)

    const isExpired = new DateTime().isMomentEarlier(new DateTime(session.expires))
    if (isExpired) this.closeById(session.id)

    return session.isActive && !isExpired
  }

  closeById(id: Id) {
    return this.sessionCollection.updateById(id, { isActive: false })
  }

  async closeAll() {
    const sessions = await this.sessionCollection.getItems()
    sessions.forEach(session => this.closeById(session.id))
  }
}