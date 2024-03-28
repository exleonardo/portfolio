import * as React from 'react'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import styled from 'styled-components'

export type InputProps = {
  children?: React.ReactNode
  errorMessage?: string
  title?: string
} & ComponentPropsWithoutRef<'input'>
type Props = InputProps & Omit<ComponentPropsWithoutRef<'input'>, keyof InputProps>

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ errorMessage, title, ...rest }: Props, ref) => {
    return (
      <>
        <StyleInput placeholder={title} {...rest} ref={ref} />

        {!!errorMessage && <div>{errorMessage}</div>}
      </>
    )
  }
)
const StyleInput = styled.input`
  min-width: 500px;
  color: white;
  height: 54px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 14px 24px 14px 24px;
  margin: 0px 30px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;

    -webkit-text-fill-color: #fff;
  }
  &:hover {
    border: 1px solid grey;
  }
`
