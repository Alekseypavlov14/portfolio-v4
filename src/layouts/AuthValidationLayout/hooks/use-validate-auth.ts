import { updateIsValidSelector, useAuthValidationStore, setNotCheckingSelector } from '../store'
import { useCheckSession } from '@/modules/auth/client'
import { useEffect } from 'react'

export function useValidateAuth() {
  const setNotChecking = useAuthValidationStore(setNotCheckingSelector)
  const updateIsValid = useAuthValidationStore(updateIsValidSelector)

  useEffect(() => {
    useCheckSession(updateIsValid)
    setNotChecking()
  }, [])
}