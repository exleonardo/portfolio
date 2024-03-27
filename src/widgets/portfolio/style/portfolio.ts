import styled from 'styled-components'

export const PortfolioBlock = styled.section`
  box-sizing: border-box;
  background: inherit;
  position: relative;
`
export const PortfolioTitle = styled.h2`
  color: rgb(254, 254, 254);
  font-family: Lato, serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  padding-bottom: 40px;

  padding-top: 100px;
  box-sizing: inherit;
  display: flex;
  position: relative;
  background: inherit;
  justify-content: center;
  z-index: 10;
  margin: 0;
`
export const ProjectsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`
export const DescriptionProj = styled.div`
  border-radius: 0px 0px 16px 16px;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  padding: 16px;
  > span {
    color: rgb(198, 198, 198);
    font-family: Lato;
    font-size: 16px;
    font-weight: 700;
    line-height: 160%;

    text-align: justify;
    text-transform: capitalize;
  }
`
export const Project = styled.div`
  display: flex;
  flex-direction: column;

  width: 415px;
`
export const ImgProj = styled.div<ImgProjProps>`
  height: 415px;
  background-image: url(${props => props.img});
  border-radius: 28px 28px 0px 0px;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const LinkBlock = styled.div`
  width: 100%;
  color: white;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &:hover {
    border-radius: 28px 28px 0px 0px;
    backdrop-filter: blur(10px);
  }
`
export const Link = styled.a`
  border: 2px solid rgb(253 111 0);
  display: flex;

  transition-delay: 2s;

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
  &:hover {
    color: white;
    font-size: 18px;
  }
`

type ImgProjProps = {
  img: string
}
