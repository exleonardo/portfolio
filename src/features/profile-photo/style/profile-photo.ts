import styled from 'styled-components'

export const BlockPhoto = styled.div`
  width: 618px;
  height: max-content;

  padding-top: 150px;
  @media screen and (width <= 992px) {
    margin: 0 auto;
    width: 418px;
    height: max-content;
    padding-top: 100px;
  }
  @media screen and (width <= 576px) {
  }
`
export const UserPhoto = styled.img`
  border-radius: 244px;
  min-width: 200px;
  max-width: 520px;
  width: 100%;
  z-index: 30;
`

export const BackGround = styled.div`
  overflow: visible;
  min-width: 275px;

  padding-left: 49px;
  padding-right: 49px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  min-height: 275px;
  aspect-ratio: 1/1;

  z-index: 20;
  border-radius: 50%;
  background: var(--color-dark-600);
`
