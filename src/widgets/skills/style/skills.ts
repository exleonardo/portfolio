import styled from 'styled-components'

export const SkillBlock = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;

  padding-top: 100px;
  width: 100%;
  z-index: 10;
  box-sizing: border-box;
  background: inherit;
`
export const SkillTitle = styled.h2`
  color: rgb(254, 254, 254);
  font-family: Lato;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 40px;
  margin-top: 0;
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
    color: rgb(149, 149, 149);
    font-family: Lato;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
  }
`
