import { MobileMenu } from '@/features/menu'
import { HomeMain } from '@/widgets/HomeMain'
import { AboutMe } from '@/widgets/AboutMe'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <MobileMenu />

      <HomeMain />
      <AboutMe />

      <Footer />
    </>
  )
}
