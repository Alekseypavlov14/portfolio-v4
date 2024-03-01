import { WithNonNullable } from '@/shared/types/with-non-nullable'
import { ProjectEntity } from '../project.entity'

export function hasImage(project: ProjectEntity): project is WithNonNullable<ProjectEntity, 'imageSource'> {
  return project.imageSource !== null
}
