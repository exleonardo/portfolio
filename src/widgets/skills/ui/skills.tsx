import { Fade } from 'react-awesome-reveal'

import { skillsIcon } from '@/common'
import { IconSkill, IconSkillBlock, SkillBlock, SkillTitle } from '@/widgets/skills'

export const Skills = () => {
  return (
    <SkillBlock id={'skills'}>
      <SkillTitle>My skills</SkillTitle>
      <IconSkillBlock>
        {skillsIcon.map(icon => {
          return (
            <Fade cascade direction={'up'} key={icon.title}>
              <IconSkill>
                {icon.element}
                <span>{icon.title}</span>
              </IconSkill>
            </Fade>
          )
        })}
      </IconSkillBlock>
    </SkillBlock>
  )
}
