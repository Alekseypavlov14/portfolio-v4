'use client'

import { useNavigation } from '@/services/navigation'
import { Container } from '@/shared/components/Container'
import { Logo } from '@/shared/components/Logo'

export default function Portfolio() {
  const  { navigateAboutMeSection } = useNavigation()
  
  return (
    <div>
      <Container>
        <Logo onClick={navigateAboutMeSection} />
      </Container>
    </div>
  )
}
