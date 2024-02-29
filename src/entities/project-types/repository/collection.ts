import { FirebaseDatabaseCollection } from '@/shared/database'
import { PROJECT_TYPES_COLLECTION_KEY } from './constants'
import { ProjectTypeEntity } from '../project-types.entity'

export const ProjectTypesCollection = new FirebaseDatabaseCollection<ProjectTypeEntity>(PROJECT_TYPES_COLLECTION_KEY)
