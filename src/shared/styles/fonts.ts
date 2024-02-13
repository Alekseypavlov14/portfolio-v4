import { Roboto, Oswald } from 'next/font/google'
import { clsx } from '@/shared/utils/clsx'

export const roboto = Roboto({ 
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-family-roboto'
})

export const oswald = Oswald({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-family-oswald'
})

export const fontFamilyCSSVariablesInjector = clsx(roboto.variable, oswald.variable)