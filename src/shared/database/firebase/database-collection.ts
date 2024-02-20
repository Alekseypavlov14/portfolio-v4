import { collection, getDocs } from 'firebase/firestore'
import { DatabaseCollection } from '../database-collection'
import { db } from './config'

export class FirebaseDatabaseCollection<T> extends DatabaseCollection<T> {
  constructor(key: string) {
    super(key)
  }

  async getItems(): Promise<T[]> {
    const databaseCollection = collection(db, this.key)
    const itemsDocs = await getDocs(databaseCollection)
    const items = itemsDocs.docs.map(doc => doc.data() as T)
    return items
  }
}
