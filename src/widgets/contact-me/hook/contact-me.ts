import { FormEvent, useRef } from 'react'
import { toast } from 'react-toastify'

import { sendForm } from '@emailjs/browser'

export const useContactMe = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) {
      return
    }
    try {
      await toast.promise(
        sendForm('service_6qaiox9', 'template_eby6hwm', form.current, {
          publicKey: 'wntSfGLQZoDUDTcFu',
        }),
        {
          pending: 'Send..',
          success: 'You message send sucsess',
        }
      )
      form.current?.reset()
    } catch (e) {
      toast.error('You message not send')
    }
  }

  return { form, sendEmail }
}
