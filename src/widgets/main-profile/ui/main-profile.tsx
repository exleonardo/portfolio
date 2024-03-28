import { ProfilePhoto } from '@/features/profile-photo'
import { AboutMe } from '@/widgets/about-me'
import { MainStyle } from '@/widgets/main-profile'

export const MainProfile = () => {
  return (
    <MainStyle id={'home'}>
      <AboutMe />
      <ProfilePhoto />
    </MainStyle>
  )
}
