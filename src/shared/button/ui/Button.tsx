import * as React from 'react'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import { ButtonStyled } from '@/shared/button'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children?: React.ReactNode
  fullWidth?: boolean
  variant: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const { fullWidth, variant = 'primary', ...rest } = props

  return <ButtonStyled {...rest} fullWidth={fullWidth} variant={variant} />
}
