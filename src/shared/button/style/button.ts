import { ButtonProps } from '@/shared/button'
import styled from 'styled-components'

export const ButtonStyled = styled.button<ButtonProps>`
  cursor: pointer;

  display: flex;
  flex-direction: row;
  flex-grow: 0;
  align-items: flex-end;
  justify-content: center;

  min-width: ${props => (props.fullWidth ? '100%' : '145px')};

  height: 44px;
  padding: 12px 10px;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  color: ${props => (props.variant === 'primary' ? 'rgb(255 255 255)' : 'rgb(149, 149, 149)')};

  background: ${props =>
    props.variant === 'primary'
      ? 'linear-gradient(129.19deg, rgb(253 111 0) 3.082%, rgb(228 100 0) 94.572%)'
      : 'inherit'};
  border: ${props => (props.variant === 'primary' ? 0 : '2px solid rgb(149 149 149)')};
  border-radius: 8px;

  &:hover {
    background: ${props => (props.variant === 'primary' ? '#ea7b2e' : 'none')};
    border: ${props => (props.variant === 'primary' ? 0 : '2px solid white')};
    color: ${props => (props.variant === 'primary' ? 'rgb(245,245,245)' : 'white')};
  }

  &:active {
    background: ${props => (props.variant === 'primary' ? '#e15d1b' : 'none')};
    border: ${props => (props.variant === 'primary' ? 0 : '2px solid #383838')};
    color: ${props => (props.variant === 'primary' ? 0 : 'grey')};
  }
`
