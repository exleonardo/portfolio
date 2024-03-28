import styled from 'styled-components'

export const IconBlockItem = styled.div`
  :not(:first-child) {
    margin-left: 20px;
  }
`
export const LinkIcon = styled.a`
  cursor: pointer;

  > svg {
    transition: 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }

  position: relative;
`
