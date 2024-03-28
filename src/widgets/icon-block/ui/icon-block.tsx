import { iconLink } from '@/common/icon-link/icon-link'
import { IconBlockItem, LinkIcon } from '@/widgets/icon-block'

export const IconBlock = () => {
  return (
    <IconBlockItem>
      {iconLink.map(element => {
        return (
          <LinkIcon href={element.link} key={element.id} target={'_blank'}>
            {element.icon}
          </LinkIcon>
        )
      })}
    </IconBlockItem>
  )
}
