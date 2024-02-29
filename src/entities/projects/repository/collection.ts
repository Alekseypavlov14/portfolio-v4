import { FirebaseDatabaseCollection } from '@/shared/database'
import { PROJECTS_COLLECTION_KEY } from './constants'

export const ProjectsCollection = new FirebaseDatabaseCollection(PROJECTS_COLLECTION_KEY)
