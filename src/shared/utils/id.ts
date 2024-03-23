import { Id } from '../types/id'

export function generateId(): Id {
  return Date.now().toString()
}