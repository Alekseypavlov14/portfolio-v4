import { Entity } from '@/shared/types/entity'

export interface SessionEntity extends Entity {
  isActive: boolean
  expires: number
}