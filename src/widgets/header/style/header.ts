import { Link } from 'react-scroll'

import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 60px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 0 80px 0 80px;
  display: flex;

  justify-content: space-between;
  background: var(--color-dark-600);
  align-items: center;
  @media screen and (width <= 992px) {
    padding: 0 20px 0 20px;
  }
`
export const StyledUl = styled.ul`
  flex-wrap: wrap;
  display: flex;
  @media screen and (width <= 992px) {
    flex-direction: column;
  }
`
export const ElementLink = styled.li`
  &:not(:first-child) {
    margin-left: 3.75rem;
  }

  @media screen and (width <= 992px) {
    &:not(:first-child) {
      margin-left: 0;
    }
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

    &:hover {
      color: var(--color-warning-900);
    }
  }

  &:hover {
    color: var(--color-light-300);
  }

  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-m);
  @media screen and (width <= 992px) {
    flex-wrap: wrap;
  }
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

  @media screen and (width <= 576px) {
    display: none;
  }
`
export const Burger = styled.button`
  cursor: pointer;
  @media screen and (width >= 576px) {
    display: none;
  }
`

export const ModalNav = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;

  top: 0;
  left: 0;

  right: 0;
  bottom: 0;
  background: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  gap: 30px;

  & > svg {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`

export const ButtonLink = styled.div`
  @media screen and (width <= 576px) {
    display: none;
  }
`
