import { Link } from 'react-scroll'

import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 0 80px 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: var(--color-dark-600);
  align-items: center;
`
export const StyledUl = styled.ul`
  display: flex;
`
export const ElementLink = styled.li`
  &:not(:first-child) {
    margin-left: 60px;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: var(--color-light-50);
  transition: 0.3s ease-in-out;

  &.active {
    color: var(--color-warning-900);

    font-size: var(--font-size-xl);
    font-weight: 700;
    line-height: var(--line-height-m);
  }

  &:hover {
    color: var(--color-light-300);
  }

  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-m);
`
export const LogoLink = styled.a`
  & > svg {
    transition: 0.3s;
    fill: var(--color-light-50);

    &:hover {
      cursor: pointer;
      fill: var(--color-light-300);
    }
  }
`
