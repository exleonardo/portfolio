import { Button } from '@/shared/button'
import { Input } from '@/shared/input'
import { Textarea } from '@/shared/textarea'
import {
  BlockForm,
  ContactInfo,
  ContactMeBlock,
  ContactMeTitle,
  UserDataSend,
  UserDescriptionSend,
} from '@/widgets/contact-me'

export const ContactMe = () => {
  return (
    <ContactMeBlock>
      <ContactMeTitle>Contact Me</ContactMeTitle>
      <ContactInfo> Cultivating Connections: Reach Out and Connect with Me</ContactInfo>
      <BlockForm>
        <UserDataSend>
          <Input title={'Email'} type={'email'} />
          <Input title={'Name'} type={'text'} />
          <Input title={'Phone Number'} type={'tel'} />
        </UserDataSend>
        <UserDescriptionSend>
          <Textarea title={'Project Details'} />
          <Button type={'submit'} variant={'secondary'}>
            send
          </Button>
        </UserDescriptionSend>
      </BlockForm>
    </ContactMeBlock>
  )
}
