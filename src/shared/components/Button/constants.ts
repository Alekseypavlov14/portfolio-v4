import { ButtonVariant } from './types/button-variant'
import { ButtonSize } from './types/button-size'

export const buttonFilledVariant: ButtonVariant = 'filled'
export const buttonOutlinedVariant: ButtonVariant = 'outlined'

export const buttonVariantToCSSClassKeyMapper: Record<ButtonVariant, string> = {
  filled: 'Filled',
  outlined: 'Outlined'
}

export const buttonBigSize: ButtonSize = 'big'
export const buttonSmallSize: ButtonSize = 'small'

export const buttonSizeToCSSClassKeyMapper: Record<ButtonSize, string> = {
  small: 'Small',
  big: 'Big'
}