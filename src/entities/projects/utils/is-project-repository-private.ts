import { ProjectEntity } from '../project.entity'

export function isProjectRepositoryPrivate(project: ProjectEntity): boolean {
  return project.repository === null
}