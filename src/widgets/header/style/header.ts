import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 0px 80px 0px 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgb(52, 52, 52);
  align-items: center;
`
export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`
export const ElementLink = styled.li`
  &:not(:first-child) {
    margin-left: 60px;
  }
`
export const Link = styled.a`
  text-decoration: none;

  &:visited {
    color: rgb(149, 149, 149);
  }

  &:hover {
    color: rgb(227, 227, 227);
  }

  font-family: Lato;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
`
