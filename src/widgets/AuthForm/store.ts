import { Id } from '@/shared/types/id'
import { create } from 'zustand'

interface AuthState {
  sessionId: string
}

interface AuthActions {
  updateSessionId: (sessionId: Id) => void
}

interface AuthStore extends AuthState, AuthActions {}

export const useAuthStore = create<AuthStore>(set => ({
  sessionId: '',
  updateSessionId: (id) => set(state => ({ ...state, sessionId: id}))
}))

export const sessionIdSelector = (store: AuthStore) => store.sessionId
export const updateSessionIdSelector = (store: AuthStore) => store.updateSessionId