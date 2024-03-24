import { Button } from '@/shared/button/ui/Button'
import { StyledHeader } from '@/widgets/header/style/header'
import { Menu } from '@/widgets/menu/ui/menu'

export const Header = () => {
  return (
    <StyledHeader>
      <a href={'#'}>
        <img alt={''} src={''} />
      </a>
      <Menu />
      <Button variant={'primary'}>Hire me</Button>
    </StyledHeader>
  )
}
