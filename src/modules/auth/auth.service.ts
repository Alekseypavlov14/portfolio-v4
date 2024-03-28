import { SessionEntity, SessionsService } from '@/entities/sessions'
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
  constructor(
    private readonly authSessionSender: AuthSessionSender,
    private readonly sessionsService: SessionsService
  ) {}

  async createSession() {
    const session = await this.sessionsService.create()
    await this.sessionsService.activateById(session.id)

    this.authSessionSender.sendSessionIdToAdmin(session.id)
    
    return session
  }

  async activateSessionById(sessionId: Id) {
    await this.sessionsService.activateById(sessionId)
  }

  checkSession(sessionId: string): Promise<boolean> {
    return this.sessionsService.checkById(sessionId)
  }

  closeSessionById(sessionId: Id) {
    return this.sessionsService.closeById(sessionId)
  }

  closeAllSessions(): Promise<void> {
    return this.sessionsService.closeAll()
  }
}