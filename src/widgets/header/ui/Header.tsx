import { useState } from 'react'
import { Link, animateScroll } from 'react-scroll'

import { BurgerIcon } from '@/assets/icons/burger'
import { CloseIcon } from '@/assets/icons/close'
import { CvIcon } from '@/assets/icons/cv'
import { navigateItem } from '@/common'
import { Button } from '@/shared/button/ui/Button'
import {
  Burger,
  ButtonLink,
  LogoLink,
  ModalNav,
  NavLink,
  StyledHeader,
} from '@/widgets/header/style/header'
import { Menu } from '@/widgets/menu/ui/menu'

export const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false)

  return (
    <StyledHeader>
      <LogoLink
        onClick={() => {
          animateScroll.scrollToTop()
        }}
      >
        <CvIcon fill={'grey'} width={50} />
      </LogoLink>
      <Burger>
        <BurgerIcon onClick={() => setIsShowModal(!isShowModal)} width={25} />
      </Burger>
      {isShowModal && (
        <ModalNav onClick={() => setIsShowModal(!isShowModal)}>
          <CloseIcon fill={'white'} onClick={() => setIsShowModal(!isShowModal)} width={25} />
          {navigateItem.map(el => {
            return (
              <NavLink
                activeClass={'active'}
                key={el.id}
                offset={-3}
                onClick={() => setIsShowModal(!isShowModal)}
                smooth
                spy
                to={el.link}
              >
                {el.title}
              </NavLink>
            )
          })}
        </ModalNav>
      )}
      <Menu hideOnMobile />
      <ButtonLink>
        <Link smooth spy to={'contactMe'}>
          <Button variant={'primary'}>Hire me</Button>
        </Link>
      </ButtonLink>
    </StyledHeader>
  )
}
