import { FirebaseDatabaseCollection } from '@/shared/database'
import { PROJECTS_COLLECTION_KEY } from './constants'
import { ProjectData } from '../project.entity'

export const ProjectsCollection = new FirebaseDatabaseCollection<ProjectData>(PROJECTS_COLLECTION_KEY)
