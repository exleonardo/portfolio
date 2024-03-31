import styled from 'styled-components'

export const FooterBlock = styled.footer`
  height: 320px;
  background: var(--color-dark-500);
  width: 100%;
  padding: 40px 80px 25px;
  position: relative;
  @media screen and (width <= 992px) {
    padding: 0;
  }
`
export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: inherit;

  gap: 40px;
  margin-left: 80px;
  margin-right: 80px;
  @media screen and (width <= 992px) {
    flex-wrap: wrap;
    margin-left: 0;
    margin-right: 0;
    flex-direction: row;
    padding-top: 2rem;
  }
  @media screen and (width <= 576px) {
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
  }
`
export const UserContact = styled.div`
  color: var(--color-light-100);

  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-m);
  gap: 10px;
  position: relative;

  background: inherit;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media screen and (width <= 576px) {
    flex-direction: column;
    align-self: flex-end;
    max-width: 500px;
    width: 100%;
  }
`
export const Description = styled.div`
  padding-top: 1rem;
  color: var(--color-light-100);

  font-size: var(--font-size-m);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-m);
  width: 500px;
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--color-light-100);
`
export const Mail = styled.div`
  display: flex;
  gap: 10px;
`
export const Phone = styled.div`
  display: flex;
  gap: 10px;
`
