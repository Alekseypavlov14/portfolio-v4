import { FirebaseDatabaseCollection } from '@/shared/database'
import { TECHNOLOGIES_COLLECTION_KEY } from './constants'

export const TechnologiesCollection = new FirebaseDatabaseCollection(TECHNOLOGIES_COLLECTION_KEY)