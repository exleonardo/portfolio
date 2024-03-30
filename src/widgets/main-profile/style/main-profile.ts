import styled from 'styled-components'

export const MainStyle = styled.main`
  padding-top: 100px;
  margin-left: 80px;
  margin-right: 80px;
  align-items: flex-start;

  display: flex;
  gap: 36px;
  justify-content: space-between;
  @media screen and (width <= 992px) {
    flex-wrap: wrap;

    justify-content: center;
    gap: 0;
  }
  @media screen and (width <= 576px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`
