import { SESSIONS_SESSION_STORAGE_KEY } from './constants'
import { SessionStorage } from '@/shared/utils/session-storage'
import { Id } from '@/shared/types/id'

export const sessionsSessionStorage = new SessionStorage<Id>(SESSIONS_SESSION_STORAGE_KEY)