import { GitHubIcon } from '@/assets/icons/gitHub'
import { InstagramIcon } from '@/assets/icons/instagram'
import { LinkedInIcon } from '@/assets/icons/linkedIn'
import { TelegramIcon } from '@/assets/icons/telegram'
import { VkIcon } from '@/assets/icons/vk'
import { v1 } from 'uuid'

export const iconLink = [
  { icon: <TelegramIcon />, id: v1(), link: 'https://t.me/exleonardo' },
  { icon: <InstagramIcon />, id: v1(), link: 'https://www.instagram.com/alexander_khomenok' },
  { icon: <LinkedInIcon />, id: v1(), link: 'https://www.linkedin.com/in/exleonardo' },
  { icon: <VkIcon />, id: v1(), link: 'https://vk.com/exleonardo' },
  { icon: <GitHubIcon />, id: v1(), link: 'https://github.com/exleonardo' },
]
