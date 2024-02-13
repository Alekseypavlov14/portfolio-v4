import { ProjectTypeEntity } from '../project-types'
import { TechnologyEntity } from '../technologies'
import { Id } from '@/shared/types/id'

export interface ProjectData {
  id: Id
  name: string
  typeId: Id
  description: string
  imageSource: string
  link: string | null
  repository: string | null
  technologiesIds: Id[]
  date: number
}

export interface ProjectEntity {
  id: Id
  name: string
  type: ProjectTypeEntity
  description: string
  imageSource: string
  link: string | null
  repository: string | null
  technologies: TechnologyEntity[]
  date: number
}