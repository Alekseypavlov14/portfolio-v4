import { Entity } from '@/shared/types/entity'
import { Id } from '@/shared/types/id'

export abstract class DatabaseCollection<T extends Entity> {
  constructor(protected readonly key: string) {}

  abstract getItems(): Promise<T[]> 

  abstract getItemById(id: Id): Promise<T>

  abstract create(data: Omit<T, 'id'>): Promise<T>

  abstract updateById(id: Id, data: Partial<T>): Promise<T>

  abstract deleteById(id: Id): Promise<T>
}