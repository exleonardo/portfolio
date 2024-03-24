import * as React from 'react'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import { ButtonStyled } from '@/shared/button'

export type ButtonProps<T extends ElementType = 'button'> = {
  children?: React.ReactNode
  fullWidth?: boolean
  variant: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = ({ children, fullWidth, variant, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled {...rest} fullWidth={fullWidth} variant={variant}>
      {children}
    </ButtonStyled>
  )
}
