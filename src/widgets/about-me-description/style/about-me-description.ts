import styled from 'styled-components'

export const AboutMeTitle = styled.h2`
  color: var(--color-light-50);
  position: relative;
  font-size: var(--font-size-extra-large);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-xl);
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`
export const Experience = styled.h3`
  color: var(--color-dark-100);

  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  display: flex;
  justify-content: center;
`
export const AboutMeBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  max-height: max-content;
  width: 100%;

  padding-bottom: 10px;
  @media screen and (width <= 992px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
  }
`
export const UserPhotoDescription = styled.img`
  height: 100%;
  object-fit: cover;
  max-height: 500px;

  width: 100%;
  aspect-ratio: 1/1;
  min-height: 300px;
  min-width: 260px;
  z-index: 30;
`

export const BackGround = styled.div`
  max-width: 550px;

  min-width: 275px;
  display: flex;

  justify-content: center;
  align-items: flex-end;
  max-height: 400px;

  z-index: 20;

  border-radius: 261.5px 261.5px 12px 12px;
  background: var(--color-dark-600);
  @media screen and (width <= 992px) {
    margin-top: 5rem;
    max-width: 418px;
  }
`
export const Description = styled.div`
  color: var(--color-dark-100);
  max-width: 650px;

  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-l);
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-end;
  @media screen and (width <= 576px) {
  }
`
export const AboutMe = styled.div`
  padding-top: 100px;
  margin-right: 80px;
  margin-left: 80px;
  @media screen and (width <= 992px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`
export const ButtonBlock = styled.div`
  @media screen and (width <= 576px) {
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
  }
`
