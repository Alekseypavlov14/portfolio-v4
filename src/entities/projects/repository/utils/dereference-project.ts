import { ProjectData, ProjectEntity } from '../../project.entity'
import { ProjectTypesCollection } from '@/entities/project-types'
import { TechnologiesCollection } from '@/entities/technologies'

export async function dereferenceProject(projectData: ProjectData): Promise<ProjectEntity> {
  const projectType = await ProjectTypesCollection.getItemById(projectData.typeId)

  const technologies = await Promise.all(projectData.technologiesIds.map(technologyId => {
    return TechnologiesCollection.getItemById(technologyId)
  }))

  const dereferencedProject: ProjectEntity = {
    id: projectData.id,
    name: projectData.name,
    type: projectType,
    description: projectData.description,
    imageSource: projectData.imageSource,
    link: projectData.link,
    repository: projectData.repository,
    technologies: technologies,
    date: projectData.date
  }

  return dereferencedProject
}