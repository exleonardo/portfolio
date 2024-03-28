import { MailIcon } from '@/assets/icons/mail'
import { PhoneIcon } from '@/assets/icons/phone'
import { Description, FooterBlock, FooterContent, UserContact } from '@/widgets/footer'
import { IconBlock } from '@/widgets/icon-block'
import { Menu } from '@/widgets/menu'

export const Footer = () => {
  return (
    <FooterBlock>
      <FooterContent>
        <Menu />
        <IconBlock />
        <UserContact>
          <MailIcon fill={'grey'} />
          exleonardo31@gmail.com
          <PhoneIcon />
          +375(29)-706-85-11
        </UserContact>
        <Description> 2024 ALL RIGHT RESERVED</Description>
      </FooterContent>
    </FooterBlock>
  )
}
