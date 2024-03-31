import styled from 'styled-components'

export const AboutMeBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: max-content;
  width: 100%;
  margin-top: 100px;
  flex-shrink: 1;
  @media screen and (width <= 992px) {
    margin-top: 0;
    max-width: 100%;
  }
`
