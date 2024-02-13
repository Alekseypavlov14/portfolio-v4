import { ProjectEntity } from '../project.entity'

export function isProjectUnpublished(project: ProjectEntity) {
  return project.link === null
}