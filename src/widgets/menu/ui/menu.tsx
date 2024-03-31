import { navigateItem } from '@/common'
import { ElementLink, NavLink, StyledUl } from '@/widgets/header/style/header'
import { Navigation } from '@/widgets/menu'

type MenuProps = {
  hideOnMobile?: boolean
}
export const Menu = ({ hideOnMobile }: MenuProps) => {
  return (
    <Navigation hideOnMobile={hideOnMobile}>
      <StyledUl>
        {navigateItem.map(({ id, link, title }) => {
          return (
            <ElementLink key={id}>
              <NavLink activeClass={'active'} offset={-3} smooth spy to={link}>
                {title}
              </NavLink>
            </ElementLink>
          )
        })}
      </StyledUl>
    </Navigation>
  )
}
