import * as React from 'react'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import styled from 'styled-components'

export type TextareaProps = {
  children?: React.ReactNode
  errorMessage?: string
  title?: string
} & ComponentPropsWithoutRef<'textarea'>
type Props = TextareaProps & Omit<ComponentPropsWithoutRef<'textarea'>, keyof TextareaProps>

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ errorMessage, title, ...rest }: Props, ref) => {
    return (
      <>
        <StyleTextarea placeholder={title} {...rest} ref={ref} />

        {!!errorMessage && <div>{errorMessage}</div>}
      </>
    )
  }
)

const StyleTextarea = styled.textarea`
  max-width: 500px;
  width: 100%;
  color: white;
  height: 150px;
  border: none;

  padding: 14px 24px 14px 24px;

  border-radius: 8px;
  background: var(--color-dark-600);

  &:focus-visible {
    outline: none;
  }

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
