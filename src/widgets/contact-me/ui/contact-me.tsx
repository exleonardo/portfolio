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
  useContactMe,
} from '@/widgets/contact-me'

export const ContactMe = () => {
  const { form, sendEmail } = useContactMe()

  return (
    <ContactMeBlock id={'contactMe'}>
      <ContactMeTitle>Contact Me</ContactMeTitle>
      <ContactInfo> Cultivating Connections: Reach Out and Connect with Me</ContactInfo>
      <BlockForm onSubmit={sendEmail} ref={form}>
        <UserDataSend>
          <Input
            name={'user_email'}
            pattern={`^((([0-9A-Za-z]{1}[-0-9A-z\\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\\.){1,}[-A-Za-z]{2,})$`}
            required
            title={'Email'}
            type={'email'}
          />
          <Input name={'user_name'} required title={'Name'} type={'text'} />
          <Input name={'user_phone'} required title={'Phone Number'} type={'tel'} />
        </UserDataSend>
        <UserDescriptionSend>
          <Textarea name={'message'} required title={'Project Details'} />
          <Button type={'submit'} variant={'secondary'}>
            Send
          </Button>
        </UserDescriptionSend>
      </BlockForm>
    </ContactMeBlock>
  )
}
