import styled from 'styled-components'

export const FooterBlock = styled.footer`
  height: 320px;
  background: var(--color-dark-500);
  width: 100%;
  padding: 40px 80px 25px;
  position: relative;
`
export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  margin-left: 80px;
  margin-right: 80px;
`
export const UserContact = styled.div`
  color: var(--color-light-100);

  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-m);
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
