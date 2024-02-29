import { collection, getDocs } from 'firebase/firestore'
import { DatabaseCollection } from '../database-collection'
import { Exception } from '@/shared/exceptions'
import { Entity } from '@/shared/types/entity'
import { Id } from '@/shared/types/id'
import { db } from './config'

export class FirebaseDatabaseCollection<T extends Entity> extends DatabaseCollection<T> {
  constructor(key: string) {
    super(key)
  }

  async getItems(): Promise<T[]> {
    const databaseCollection = collection(db, this.key)
    const itemsDocs = await getDocs(databaseCollection)
    const items = itemsDocs.docs.map(doc => doc.data() as T)
    return items
  }

  async getItemById(id: Id): Promise<T> {
    const items = await this.getItems()
    const item = items.find(item => item.id === id)

    if (!item) throw new Exception(404)

    return item
  }
}
