import { CollectionReference, DocumentReference, addDoc, collection, deleteDoc, getDocs, updateDoc, DocumentData, UpdateData } from 'firebase/firestore'
import { DatabaseCollection } from '../database-collection'
import { generateId } from '@/shared/utils/id'
import { Exception } from '@/shared/exceptions'
import { Entity } from '@/shared/types/entity'
import { Id } from '@/shared/types/id'
import { db } from './config'

export class FirebaseDatabaseCollection<T extends Entity> extends DatabaseCollection<T> {
  constructor(key: string) {
    super(key)
  }
  
  async getItems(): Promise<T[]> {
    const databaseCollection = this.getCollection()
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

  async create(data: Omit<T, 'id'>): Promise<T> {
    const databaseCollection = this.getCollection()

    const newItemId = generateId()
    const newItem: T = { id: newItemId, ...data } as T

    await addDoc(databaseCollection, newItem)

    return this.getItemById(newItemId)
  }

  async updateById(id: string, data: Partial<T>): Promise<T> {
    const itemRef = await this.getDocumentReferenceById(id)

    updateDoc(itemRef, data as UpdateData<T>)

    return this.getItemById(id)
  }

  async deleteById(id: string): Promise<T> {
    const item = await this.getItemById(id)
    const documentReference = await this.getDocumentReferenceById(id)

    deleteDoc(documentReference)

    return item
  }

  private async getDocumentReferenceById(id: Id): Promise<DocumentReference<DocumentData, T>> {
    const collection = this.getCollection()
    const documentReferences = await getDocs(collection)

    const documentReference = documentReferences.docs.find(doc => {
      const documentData = doc.data() as T
      return documentData.id === id
    })

    if (!documentReference) throw new Exception(404)

    return documentReference.ref as DocumentReference<DocumentData, T>
  }
  private getCollection(): CollectionReference {
    return collection(db, this.key)
  }
}
