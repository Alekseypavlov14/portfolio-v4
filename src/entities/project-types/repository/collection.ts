import { FirebaseDatabaseCollection } from '@/shared/database'
import { PROJECT_TYPES_COLLECTION_KEY } from './constants'

export const ProjectTypesCollection = new FirebaseDatabaseCollection(PROJECT_TYPES_COLLECTION_KEY)
