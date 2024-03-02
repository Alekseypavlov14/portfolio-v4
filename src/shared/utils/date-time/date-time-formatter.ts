import { DateTime } from './date-time'
import formatDate from 'dateformat'

export function createFormatter(template: string) {
  return (dateTime: DateTime): string => formatDate(dateTime.getDate(), template)
}

export const formatDateWide = createFormatter('dd.mm.yyyy')
export const formatDateShort = createFormatter('dd.mm.yy')