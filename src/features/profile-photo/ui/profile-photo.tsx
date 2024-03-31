import Tilt from 'react-parallax-tilt'

import avatar from '@/assets/image/user-photo.png'
import { BackGround, BlockPhoto, UserPhoto } from '@/features/profile-photo'

export const ProfilePhoto = () => {
  return (
    <BlockPhoto>
      <BackGround>
        <Tilt>
          <UserPhoto alt={'avatar'} src={avatar} />
        </Tilt>
      </BackGround>
    </BlockPhoto>
  )
}
