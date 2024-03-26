import styled from 'styled-components'
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
const Hello = styled.h3`
  color: rgb(112, 112, 112);
  font-family: Lato;
  font-size: 24px;
  font-weight: 600;
  width: max-content;
  text-align: left;
`
const Name = styled.h2`
  position: static;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  color: rgb(149, 149, 149);
  width: max-content;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;

  text-align: left;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0;
`
const Developer = styled.h1`
  position: relative;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  z-index: 10;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 24px 0px;

  background: linear-gradient(109.57deg, rgb(152, 67, 0), rgb(253, 111, 0), rgb(202, 89, 0));
  text-shadow: 0px 0px 250px rgb(253, 111, 0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  font-family: Lato, serif;
  font-size: 70px;
  font-weight: 900;
  line-height: 84px;

  text-align: left;
`
