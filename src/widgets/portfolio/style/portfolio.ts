import styled from 'styled-components'

export const PortfolioBlock = styled.section`
  box-sizing: border-box;
  background: inherit;
  position: relative;
  padding-top: 6.25rem;
  width: 100%;
`
export const PortfolioTitle = styled.h2`
  color: var(--color-light-50);

  font-size: var(--font-size-extra-large);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-xl);
  padding-bottom: 2.5rem;

  display: flex;
  position: relative;
  background: inherit;
  justify-content: center;
  z-index: 10;
`
export const ProjectsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`
export const DescriptionProj = styled.div`
  border-radius: 0 0 16px 16px;
  background: var(--color-dark-600);
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  > span {
    color: var(--color-light-100);

    font-size: var(--font-size-m);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-m);

    text-transform: capitalize;
  }
`
export const Project = styled.div`
  display: flex;
  flex-direction: column;

  width: 415px;
  margin-left: 20px;
  margin-right: 20px;
`
export const ImgProj = styled.div<ImgProjProps>`
  height: 415px;
  background-image: url(${props => props.img});
  border-radius: 28px 28px 0 0;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const LinkBlock = styled.div`
  width: 100%;
  color: var(--color-light-50);
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &:hover {
    border-radius: 28px 28px 0 0;
    backdrop-filter: blur(10px);
  }
`
export const Link = styled.a`
  border: 2px solid var(--color-warning-900);
  display: flex;
  color: inherit;

  align-items: center;

  justify-content: center;
  text-decoration: none;
  transition: 0.3s;

  animation-fill-mode: unset;
  border-radius: 5px;
  height: 30px;
  width: 80px;

  &:hover {
    transform: scale(1.2);
  }
`
export const GitLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  color: inherit;

  &:hover {
    color: var(--color-light-50);
    font-size: var(--font-size-l);
  }
`

type ImgProjProps = {
  img: string
}
