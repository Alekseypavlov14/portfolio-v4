import { sessionsCollection } from './repository'
import { SessionsService } from './sessions.service'

export const sessionsService = new SessionsService(sessionsCollection)

export type { SessionEntity } from './session.entity'
export { SessionsService } from './sessions.service'

export * from './repository'