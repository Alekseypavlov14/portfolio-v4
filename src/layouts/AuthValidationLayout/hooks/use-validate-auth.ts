import { updateIsValidSelector, useAuthValidationStore, setNotCheckingSelector, isValidSelector, isCheckingSelector, setCheckingSelector, setInvalidSelector, resetStateSelector } from '../store'
import { useCheckSession } from '@/modules/auth/client'
import { useNavigation } from '@/services/navigation'
import { useEffect } from 'react'

export function useValidateAuth() {
  const setNotChecking = useAuthValidationStore(setNotCheckingSelector)
  const updateIsValid = useAuthValidationStore(updateIsValidSelector)
  const resetState = useAuthValidationStore(resetStateSelector)

  const isValid = useAuthValidationStore(isValidSelector)
  const isChecking = useAuthValidationStore(isCheckingSelector)

  const { navigateAuthPage } = useNavigation()

  useEffect(() => {
    resetState()

    useCheckSession(updateIsValid)
      .then(setNotChecking)
  }, [])

  useEffect(() => {
    if (!isValid && !isChecking) {
      resetState()
      navigateAuthPage()
    }
  }, [isValid, isChecking])
}