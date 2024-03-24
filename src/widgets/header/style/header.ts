import styled from 'styled-components'

export const StyledHeader = styled.header`
  margin-top: 30px;
  height: 44px;
  width: 100%;
  padding: 0px 80px 0px 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
