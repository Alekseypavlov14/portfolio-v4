'use client'

import { FC } from 'react'
import { collaborateButtonText } from '../../constants'
import { Button, ButtonProps } from '@/shared/components/Button'
import { collaborate } from '../../collaborate'

interface CollaborateButtonProps extends Omit<ButtonProps, 'children' | 'onClick'> {}

export const CollaborateButton: FC<CollaborateButtonProps> = ({ ...props }) => {
  return (
    <Button {...props} onClick={collaborate}>
      {collaborateButtonText}
    </Button>
  )
}