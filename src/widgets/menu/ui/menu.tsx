import { navigateItem } from '@/common'
import { ElementLink, NavLink, StyledUl } from '@/widgets/header/style/header'

export const Menu = () => {
  return (
    <nav>
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
    </nav>
  )
}
