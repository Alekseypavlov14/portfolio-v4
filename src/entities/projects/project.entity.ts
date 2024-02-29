import { ProjectTypeEntity } from '../project-types'
import { TechnologyEntity } from '../technologies'
import { Nullable } from '@/shared/types/nullable'
import { Entity } from '@/shared/types/entity'
import { Id } from '@/shared/types/id'

export interface ProjectData extends Entity {
  name: string
  typeId: Id
  description: string
  imageSource: string
  link: Nullable<string>
  repository: Nullable<string>
  technologiesIds: Id[]
  date: number
}

export interface ProjectEntity extends Omit<ProjectData, 'typeId' | 'technologiesIds'> {
  type: ProjectTypeEntity
  technologies: TechnologyEntity[]
}