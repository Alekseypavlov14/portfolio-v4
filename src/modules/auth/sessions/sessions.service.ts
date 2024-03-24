import { DatabaseCollection } from '@/shared/database'
import { SessionEntity } from './session.entity'
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
    const sessionData: Omit<SessionEntity, 'id'> = { isActive: false }
    return this.sessionCollection.create(sessionData)
  }

  async activateById(id: Id) {
    await this.sessionCollection.updateById(id, { isActive: true })
  }

  async checkById(id: string) {
    const session = await this.sessionCollection.getItemById(id)
    return session.isActive
  }

  closeById(id: Id) {
    return this.sessionCollection.updateById(id, { isActive: false })
  }

  async closeAll() {
    const sessions = await this.sessionCollection.getItems()
    sessions.forEach(session => this.closeById(session.id))
  }
}