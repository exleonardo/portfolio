import { skillsIcon } from '@/common'
import { IconSkill, IconSkillBlock, SkillBlock, SkillTitle } from '@/widgets/skills'

export const Skills = () => {
  return (
    <SkillBlock id={'skills'}>
      <SkillTitle>My skills</SkillTitle>
      <IconSkillBlock>
        {skillsIcon.map(icon => {
          return (
            <IconSkill key={icon.title}>
              {icon.element}
              <span>{icon.title}</span>
            </IconSkill>
          )
        })}
      </IconSkillBlock>
    </SkillBlock>
  )
}
