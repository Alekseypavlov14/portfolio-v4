import { FirebaseDatabaseCollection } from '@/shared/database'
import { TECHNOLOGIES_COLLECTION_KEY } from './constants'
import { TechnologyEntity } from '../technology.entity'

export const TechnologiesCollection = new FirebaseDatabaseCollection<TechnologyEntity>(TECHNOLOGIES_COLLECTION_KEY)