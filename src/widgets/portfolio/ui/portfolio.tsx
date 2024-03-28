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
import { AnimatePresence, motion } from 'framer-motion'

export const Portfolio = () => {
  const { handleMouseEnter, handleMouseLeave, project } = usePortfolio()

  return (
    <PortfolioBlock id={'portfolio'}>
      <PortfolioTitle>Portfolio</PortfolioTitle>
      <ProjectsBlock>
        <AnimatePresence>
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
                      <motion.div
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        id={pr.id}
                        initial={{ opacity: 0 }}
                        layout
                      >
                        <Link href={pr.link} target={'_blank'}>
                          View
                        </Link>
                      </motion.div>
                    )}
                  </LinkBlock>
                </ImgProj>

                <DescriptionProj>
                  <span>{pr.title}</span>
                  <span>
                    <GitLink href={pr.gitLink} target={'_blank'}>
                      git
                    </GitLink>
                  </span>
                </DescriptionProj>
              </Project>
            )
          })}
        </AnimatePresence>
      </ProjectsBlock>
    </PortfolioBlock>
  )
}
