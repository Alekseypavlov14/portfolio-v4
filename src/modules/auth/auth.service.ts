import { SessionEntity, sessionsService } from './sessions'
import { AuthSessionSender } from './auth-session-sender'
import { Id } from '@/shared/types/id'

interface IAuthService {
  createSession(): Promise<SessionEntity>
  activateSessionById(sessionId: Id): Promise<void>
  checkSession(sessionId: Id): Promise<boolean>
  closeSessionById(sessionId: Id): Promise<SessionEntity>
  closeAllSessions(): Promise<void>
}

export class AuthService implements IAuthService {
  constructor(private readonly authSessionSender: AuthSessionSender) {}

  async createSession() {
    const session = await sessionsService.create()

    this.authSessionSender.sendSessionIdToAdmin(session.id)
    sessionsService.activateById(session.id)
    
    return session
  }

  async activateSessionById(sessionId: Id) {
    await sessionsService.activateById(sessionId)
  }

  checkSession(sessionId: string): Promise<boolean> {
    return sessionsService.checkById(sessionId)
  }

  closeSessionById(sessionId: Id) {
    return sessionsService.closeById(sessionId)
  }

  closeAllSessions(): Promise<void> {
    return sessionsService.closeAll()
  }
}