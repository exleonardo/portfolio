import {
  DescriptionProj,
  GitLink,
  ImgProj,
  Link,
  LinkBlock,
  PortfolioBlock,
  PortfolioTitle,
  Project,
  ProjectsBlock,
} from '@/widgets/portfolio'
import { usePortfolio } from '@/widgets/portfolio/hooks/usePortfolio'

export const Portfolio = () => {
  const { handleMouseEnter, handleMouseLeave, project } = usePortfolio()

  return (
    <PortfolioBlock>
      <PortfolioTitle>Portfolio</PortfolioTitle>
      <ProjectsBlock>
        {project.map(pr => {
          return (
            <Project key={pr.id}>
              <ImgProj
                img={pr.img}
                onMouseEnter={() => handleMouseEnter(pr.id)}
                onMouseLeave={() => handleMouseLeave(pr.id)}
              >
                <LinkBlock>
                  {pr.isShowLink && (
                    <Link href={pr.link} target={'_blank'}>
                      View
                    </Link>
                  )}
                </LinkBlock>
              </ImgProj>

              <DescriptionProj>
                <span>{pr.title}</span>
                <span>
                  <GitLink href={pr.gitLink}>git</GitLink>
                </span>
              </DescriptionProj>
            </Project>
          )
        })}
      </ProjectsBlock>
    </PortfolioBlock>
  )
}
