'use client'

import { ChangeEvent } from 'react'
import { sessionIdSelector, updateSessionIdSelector, useAuthStore } from '../../store'
import { Input } from '@/shared/components/Input'
import styles from './AuthInput.module.scss'

export function AuthInput() {
  const sessionId = useAuthStore(sessionIdSelector)
  const updateSessionId = useAuthStore(updateSessionIdSelector)

  function updateSessionIdHandler(event: ChangeEvent<HTMLInputElement>) {
    updateSessionId(event.target.value.trim())
  }

  return (
    <Input 
      className={styles.AuthInput}
      placeholder='Session Id' 
      value={sessionId} 
      onChange={updateSessionIdHandler} 
    />
  )
}