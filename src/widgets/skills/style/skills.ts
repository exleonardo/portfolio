import styled from 'styled-components'

export const SkillBlock = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;

  padding-top: 100px;
  width: 100%;
  z-index: 10;

  background: inherit;
`
export const SkillTitle = styled.h2`
  color: var(--color-light-50);

  font-size: var(--font-size-extra-large);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-xl);
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
`

export const IconSkillBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`
export const IconSkill = styled.div`
  min-width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;

  > svg {
    transition: 0.4s;

    &:hover {
      transform: scale(1.2);
    }
  }

  > span {
    color: var(--color-dark-100);

    font-size: var(--font-size-xlm);
    font-weight: var(--font-weight-bold);
  }
`
