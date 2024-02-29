import { dereferenceProject } from './dereference-project'
import { ProjectsCollection } from '../collection'
import { ProjectEntity } from '../../project.entity'

export async function getProjects(): Promise<ProjectEntity[]> {
  const projectsData = await ProjectsCollection.getItems()
  return Promise.all(projectsData.map(dereferenceProject))
}