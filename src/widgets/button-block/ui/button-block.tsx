import { Link } from 'react-scroll'

import { linkCv } from '@/common/link-cv/link-cv'
import { Button } from '@/shared/button'
import { ButtonCV } from '@/widgets/button-block'

export const ButtonBlock = () => {
  return (
    <ButtonCV>
      <Link smooth spy to={'contactMe'}>
        <Button variant={'primary'}>Hire me</Button>
      </Link>
      <Button as={'a'} href={linkCv} target={'_blank'} variant={'secondary'}>
        Download CV
      </Button>
    </ButtonCV>
  )
}
