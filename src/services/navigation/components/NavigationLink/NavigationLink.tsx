import React, { ComponentPropsWithoutRef } from 'react'
import { WithRequired } from '@/shared/types/with-required'
import { hasHash } from '@/shared/utils/url'
import { Anchor } from '@/shared/components/Anchor'
import Link from 'next/link'

interface NavigationLinkProps extends WithRequired<ComponentPropsWithoutRef<'a'>, 'href' | 'children'> {}

export function NavigationLink({ href, ...props }: NavigationLinkProps) {
  return hasHash(href) ? (
    <Anchor 
      href={href}
      {...props}
    />
  ) : (
    <Link 
      href={href}
      {...props}
    />
  )
}