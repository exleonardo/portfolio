import { Link, animateScroll } from 'react-scroll'

import { CvIcon } from '@/assets/icons/cv'
import { Button } from '@/shared/button/ui/Button'
import { LogoLink, StyledHeader } from '@/widgets/header/style/header'
import { Menu } from '@/widgets/menu/ui/menu'

export const Header = () => {
  return (
    <StyledHeader>
      <LogoLink
        onClick={() => {
          animateScroll.scrollToTop()
        }}
      >
        <CvIcon fill={'grey'} width={50} />
      </LogoLink>
      <Menu />
      <Link smooth spy to={'contactMe'}>
        <Button variant={'primary'}>Hire me</Button>
      </Link>
    </StyledHeader>
  )
}
