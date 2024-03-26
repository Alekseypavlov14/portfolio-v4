import { create } from 'zustand'

interface AuthValidationState {
  isChecking: boolean
  isValid: boolean
}

interface AuthValidationActions {
  updateIsChecking(isChecking: boolean): void
  setChecking(): void
  setNotChecking(): void

  updateIsValid(isValid: boolean): void
  setValid(): void
  setInvalid(): void
}

interface AuthValidationStore extends AuthValidationState, AuthValidationActions {}

export const useAuthValidationStore = create<AuthValidationStore>(set => ({
  isChecking: true,
  updateIsChecking: (isChecking) => set(state => ({ ...state, isChecking })),
  setChecking: () => set(state => ({ ...state, isChecking: true })),
  setNotChecking: () => set(state => ({ ...state, isChecking: false })),

  isValid: false,
  updateIsValid: (isValid) => set(state => ({ ...state, isValid })),
  setValid: () => set(state => ({ ...state, isValid: true })),
  setInvalid: () => set(state => ({ ...state, isValid: false })),
}))

export const isCheckingSelector = (store: AuthValidationStore) => store.isChecking
export const updateIsCheckingSelector = (store: AuthValidationStore) => store.updateIsChecking
export const setCheckingSelector = (store: AuthValidationStore) => store.setChecking
export const setNotCheckingSelector = (store: AuthValidationStore) => store.setNotChecking

export const isValidSelector = (store: AuthValidationStore) => store.isValid
export const updateIsValidSelector = (store: AuthValidationStore) => store.updateIsValid
export const setValidSelector = (store: AuthValidationStore) => store.setValid
export const setInvalidSelector = (store: AuthValidationStore) => store.setInvalid