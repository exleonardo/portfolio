import Tilt from 'react-parallax-tilt'

import { DownloadIcon } from '@/assets/icons/download'
import { Button } from '@/shared/button'
import {
  AboutMe,
  AboutMeBlock,
  AboutMeTitle,
  BackGround,
  Description,
  Experience,
  UserPhotoDescription,
} from '@/widgets/about-me-description'

import avatar from '../../../assets/image/user-photo2.png'

export const AboutMeDescription = () => {
  return (
    <AboutMe>
      <AboutMeTitle>About Me</AboutMeTitle>
      <Experience>Experienced Frontend Developer with a diverse skill set.</Experience>
      <AboutMeBlock>
        <BackGround>
          <Tilt>
            <UserPhotoDescription src={avatar} />
          </Tilt>
        </BackGround>
        <Description>
          Experience in developing web applications using React, React-Redux, and Redux Toolkit.
          Knowledge of TypeScript, JavaScript, CSS/SCSS/Sass, HTML5. Experience working with Rest
          APIs (using Axios) and Git version control system. Experience in writing tests using Jest.
          Proficiency in Material-UI, Ant Design, and RadixUI libraries for creating modern user
          interfaces. Experience with React-router-dom for in-app navigation. Knowledge of React
          Hook Form, Formik, and Zod for form management and data validation. I am an experienced
          developer with a wide range of skills in frontend development. My projects are
          characterized by high-quality code, responsive design, and good architecture.
          <Button variant={'primary'}>
            <DownloadIcon height={24} width={24} /> Download CV
          </Button>
        </Description>
      </AboutMeBlock>
    </AboutMe>
  )
}
