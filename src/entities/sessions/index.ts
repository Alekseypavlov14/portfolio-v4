import { sessionsCollection } from './repository/collection'
import { SessionsService } from './sessions.service'

export const sessionsService = new SessionsService(sessionsCollection)

export type { SessionEntity } from './session.entity'
export { sessionsSessionStorage } from './storage'

export * from './repository'