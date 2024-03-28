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
  min-height: 400px;
  padding-bottom: 10px;
`
export const UserPhotoDescription = styled.img`
  width: 460px;
  height: 450px;
  z-index: 10;
  background-size: cover;
`

export const BackGround = styled.div`
  width: 480px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 400px;
  z-index: 20;

  border-radius: 261.5px 261.5px 12px 12px;
  background: var(--color-dark-600);
`
export const Description = styled.div`
  color: var(--color-dark-100);

  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-l);
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-end;
`
export const AboutMe = styled.div`
  padding-top: 100px;
  margin-right: 80px;
  margin-left: 80px;
`
