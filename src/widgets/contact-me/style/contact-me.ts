import styled from 'styled-components'

export const ContactMeBlock = styled.div`
  display: flex;
  margin-left: 80px;
  margin-right: 80px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  padding-top: 6.25rem;
  background: inherit;
  z-index: 10;
  position: relative;
  padding-bottom: 9.3rem;
  @media screen and (width <= 992px) {
    margin-left: 20px;
    margin-right: 20px;
  }
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
  max-width: 1000px;
  gap: 30px;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  @media screen and (width <= 992px) {
    flex-wrap: wrap;
    max-width: max-content;
  }
`
export const UserDataSend = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 30px;
`
export const UserDescriptionSend = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 30px;
  justify-content: flex-end;
  @media screen and (width <= 992px) {
    display: flex;
    align-items: unset;
  }
`
