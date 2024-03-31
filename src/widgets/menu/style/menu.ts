import styled from 'styled-components'

export const Navigation = styled.nav<NavigationProps>`
  @media screen and (width <= 992px) {
    display: ${props => (props.hideOnMobile ? 'none' : 'block')};
  }
`
type NavigationProps = {
  hideOnMobile?: boolean
}
