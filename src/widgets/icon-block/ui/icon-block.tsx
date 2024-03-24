import { InstagramIcon } from '@/assets/icons/instagram'
import { LinkedInIcon } from '@/assets/icons/linkedIn'
import { TelegramIcon } from '@/assets/icons/telegram'
import { IconBlockItem } from '@/widgets/icon-block'

export const IconBlock = () => {
  return (
    <IconBlockItem>
      <InstagramIcon />
      <LinkedInIcon />
      <TelegramIcon />
    </IconBlockItem>
  )
}
