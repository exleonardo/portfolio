import Tilt from 'react-parallax-tilt'

import { BackGround, BlockPhoto, UserPhoto } from '@/features/profile-photo'

import avatar from '../../../assets/image/user-photo.png'

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
