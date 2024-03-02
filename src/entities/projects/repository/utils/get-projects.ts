import { dereferenceProject } from './dereference-project'
import { ProjectsCollection } from '../collection'
import { ProjectEntity } from '../../project.entity'
import { DateTime } from '@/shared/utils/date-time'

export async function getProjects(): Promise<ProjectEntity[]> {
  const projectsData = await ProjectsCollection.getItems()
  const projects = await Promise.all(projectsData.map(dereferenceProject))
  const projectsSortedByDate = DateTime.sortByDateStartingByNewest(projects, project => new DateTime(project.date))

  return projectsSortedByDate
}