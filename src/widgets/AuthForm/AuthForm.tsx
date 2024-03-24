import { AuthButton } from './components/AuthButton'
import { AuthInput } from './components/AuthInput'
import styles from './AuthForm.module.scss'

export function AuthForm() {
  return (
    <div className={styles.AuthForm}>
      <div className={styles.Title}>Auth Form</div>
      <AuthInput />

      <AuthButton />
    </div>
  )
}