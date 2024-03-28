import { AboutMeBlock } from '@/widgets/about-me'
import { ButtonBlock } from '@/widgets/button-block'
import { DescriptionProfile } from '@/widgets/description-profile'
import { IconBlock } from '@/widgets/icon-block'

export const AboutMe = () => {
  return (
    <AboutMeBlock>
      <DescriptionProfile />
      <IconBlock />
      <ButtonBlock />
    </AboutMeBlock>
  )
}
