import styled from 'styled-components'

export const Hello = styled.h3`
  color: var(--color-light-100);

  font-size: var(--font-size-xlm);
  font-weight: var(--font-weight-normal);
  width: max-content;
`
export const Name = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  color: var(--color-light-100);
  width: max-content;

  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-l);

  margin: 10px 0;
`
export const Developer = styled.h1`
  position: relative;

  word-break: break-word;
  z-index: 10;

  margin: 24px 0;

  background: linear-gradient(109.57deg, rgb(152, 67, 0), rgb(253, 111, 0), rgb(202, 89, 0));
  text-shadow: 0 0 250px rgb(253, 111, 0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  font-weight: var(--font-weight-bolder);
  line-height: 55px;
`
export const ProfileBlock = styled.div`
  @media screen and (width <= 992px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
  }
`
