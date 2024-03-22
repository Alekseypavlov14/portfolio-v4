import { CSSProperties } from 'react'

const CSSVariableStartSymbols = '--'

export function setCSSVariables(styles: Record<string, string>) {
  const styleProperties: Record<string, string> = {}

  // take only style variables
  Object.keys(styles)
    .filter(key => key.startsWith(CSSVariableStartSymbols))
    .forEach(key => {
      styleProperties[key as keyof CSSProperties] = styles[key]
    })

  return styleProperties as CSSProperties
}