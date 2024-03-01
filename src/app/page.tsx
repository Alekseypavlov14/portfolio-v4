import { HomePagePortfolioCardSection } from '@/widgets/HomePagePortfolioCardSection'
import { StructureLayout } from '@/layouts/StructureLayout'
import { HomeMain } from '@/widgets/HomeMain'
import { AboutMe } from '@/widgets/AboutMe'

export default function Home() {
  return (
    <StructureLayout>
      <HomeMain />
      <HomePagePortfolioCardSection />
      <AboutMe />
    </StructureLayout>
  )
}
