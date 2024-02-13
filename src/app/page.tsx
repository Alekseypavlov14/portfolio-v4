import { SectionTitle } from '@/shared/components/SectionTitle'
import { Container } from '@/shared/components/Container'
import { Logo } from '@/shared/components/Logo'

export default function Home() {
  return (
    <div>
      <Container>
        <Logo />

        <SectionTitle>About me</SectionTitle>
      </Container>
    </div>
  )
}
