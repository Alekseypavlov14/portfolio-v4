import _clsx, { ClassValue } from 'clsx'

// this util prevents problems in case of API changes
export function clsx(...classes: ClassValue[]): string {
  return _clsx(...classes)
}