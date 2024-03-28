import { v1 } from 'uuid'

export const navigateItem: NavigateItemType[] = [
  { id: v1(), link: 'home', title: 'Home' },
  { id: v1(), link: 'aboutMe', title: 'About me' },
  { id: v1(), link: 'skills', title: 'Skills' },
  { id: v1(), link: 'portfolio', title: 'Portfolio' },
  { id: v1(), link: 'contactMe', title: 'Contact me' },
]
type NavigateItemType = {
  id: string
  link: string
  title: string
}
