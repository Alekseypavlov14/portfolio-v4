import { MobileMenu } from '@/features/menu'
import { HomeMain } from '@/widgets/HomeMain'
import { Header } from '@/widgets/Header'

export default function Home() {
  return (
    <>
      <Header />
      <MobileMenu />

      <HomeMain />
    </>
  )
}
