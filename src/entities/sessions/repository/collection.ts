import { FirebaseDatabaseCollection } from '@/shared/database'
import { SESSIONS_COLLECTION_KEY } from './constants'
import { SessionEntity } from '../session.entity'

export const sessionsCollection = new FirebaseDatabaseCollection<SessionEntity>(SESSIONS_COLLECTION_KEY)