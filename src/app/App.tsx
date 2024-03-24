import { AboutMeDescription } from '@/widgets/about-me-description/ui/about-me-description'
import { Header } from '@/widgets/header/ui/Header'
import { MainProfile } from '@/widgets/main/ui/main-profile'
import { Portfolio } from '@/widgets/portfolio/ui/Portfolio'
import { Skills } from '@/widgets/skills'
import styled from 'styled-components'

export const App = () => {
  return (
    <StyledApp>
      <Header />
      <MainProfile />
      <AboutMeDescription />
      <Skills />
      <Portfolio />
    </StyledApp>
  )
}
const StyledApp = styled.div`
  background-color: rgb(30, 30, 30);
  width: 100%;
  height: 100%;
`
