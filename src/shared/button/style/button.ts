import { ButtonProps } from '@/shared/button'
import styled from 'styled-components'

export const ButtonStyled = styled.button<ButtonProps>`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  align-items: flex-end;
  justify-content: center;

  transition: 0.3s;
  min-width: ${props => (props.fullWidth ? '100%' : '145px')};
  z-index: 10;
  height: 44px;
  padding: 12px 10px;
  gap: 8px;
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-bold);
  line-height: var(--font-size-xl);

  &:visited {
    color: var(--color-light-50);
  }

  &:link {
    color: var(--color-light-50);
  }

  color: ${props =>
    props.variant === 'primary' ? 'var(--color-light-50)' : 'var(--color-dark-100)'};

  background: ${props => (props.variant === 'primary' ? 'var(--color-warning-900)' : 'inherit')};
  border: ${props => (props.variant === 'primary' ? 0 : '2px solid var(--color-dark-100)')};
  border-radius: 8px;

  &:hover {
    background: ${props => (props.variant === 'primary' ? 'var(--color-warning-700)' : 'none')};
    transform: scale(1.1);
    border: ${props => (props.variant === 'primary' ? 0 : '2px solid var(--color-light-50)')};
    color: ${props =>
      props.variant === 'primary' ? 'var(--color-light-50)' : 'var(--color-light-50)'};
  }

  &:active {
    background: ${props => (props.variant === 'primary' ? 'var(--color-warning-1100)' : 'none')};
    border: ${props => (props.variant === 'primary' ? 0 : '2px solid var(--color-dark-100)')};
    color: ${props => (props.variant === 'primary' ? 0 : 'var(--color-dark-100)')};
  }
`
