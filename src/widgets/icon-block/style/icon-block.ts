import styled from 'styled-components'

export const IconBlockItem = styled.div`
  :not(:first-child) {
    margin-left: 0.8rem;
  }

  @media screen and (width <= 992px) {
    display: flex;
    justify-content: center;
  }
`
export const LinkIcon = styled.a`
  cursor: pointer;

  > svg {
    transition: 0.3s;
    @media screen and (width <= 576px) {
      width: 35px;
      height: 35px;
    }

    &:hover {
      transform: scale(1.2);
    }
  }

  position: relative;
`
