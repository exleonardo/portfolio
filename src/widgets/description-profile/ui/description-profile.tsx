import { Developer, Hello, Name } from '@/widgets/description-profile'
import Typewriter from 'typewriter-effect'

export const DescriptionProfile = () => {
  return (
    <div>
      <Hello>Hi I am</Hello>
      <Name>Alexander Khomenok</Name>

      <Developer>
        <Typewriter options={{ autoStart: true, loop: true, strings: ['Frontend Developer'] }} />
      </Developer>
    </div>
  )
}
