import { StyledApp } from '@/app'
import { Particle } from '@/features/particle'
import { AboutMeDescription } from '@/widgets/about-me-description'
import { ContactMe } from '@/widgets/contact-me'
import { Footer } from '@/widgets/footer/ui/footer'
import { Header } from '@/widgets/header/ui/Header'
import { MainProfile } from '@/widgets/main-profile'
import { Portfolio } from '@/widgets/portfolio'
import { Skills } from '@/widgets/skills'

export const App = () => {
  return (
    <StyledApp>
      <Particle />
      <Header />
      <MainProfile />
      <AboutMeDescription />
      <Skills />
      <Portfolio />
      <ContactMe />
      <Footer />
    </StyledApp>
  )
}
