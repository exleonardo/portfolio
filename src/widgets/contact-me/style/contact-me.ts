import styled from 'styled-components'

export const ContactMeBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 1000px;
  width: 100%;
  padding-top: 6.25rem;
  background: inherit;
  z-index: 10;
  position: relative;
  padding-bottom: 9.3rem;
`
export const ContactMeTitle = styled.h2`
  color: var(--color-light-50);

  font-size: var(--font-size-extra-large);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-xl);

  display: flex;
  justify-content: center;
`
export const ContactInfo = styled.h3`
  display: flex;
  justify-content: center;

  padding-top: 18px;
  color: var(--color-dark-100);

  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-l);
  padding-bottom: 50px;
  text-align: justify;
  text-transform: capitalize;
`
export const BlockForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`
export const UserDataSend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const UserDescriptionSend = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 30px;
  justify-content: flex-end;
`
