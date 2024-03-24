import { sessionsCollection } from './sessions.collection'
import { SessionsService } from './sessions.service'

export const sessionsService = new SessionsService(sessionsCollection)

export type { SessionEntity } from './session.entity'
export { sessionsCollection } from './sessions.collection'