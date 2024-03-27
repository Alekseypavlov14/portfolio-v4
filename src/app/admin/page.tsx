import { TechnologiesCollection } from '@/entities/technologies'
import { TechnologyEntityList } from '@/entities/technologies/client'
import { ProjectEntityList } from '@/entities/projects/client'
import { getProjects } from '@/entities/projects'
import { Section } from '@/shared/components/Section'
import { TextFragmentEntityList } from '@/entities/text-fragments/client'
import { TextFragmentCollection } from '@/entities/text-fragments'
import { ProjectTypesCollection } from '@/entities/project-types'
import { ProjectTypeEntityList } from '@/entities/project-types/client'
import { BlockListVerticalDivider } from '@/shared/components/BlockListVerticalDivider'

export const metadata = {
  title: 'Oleksii Pavlov | Admin Panel'
}

export default async function Admin() {
  const projects = await getProjects()
  const technologies = await TechnologiesCollection.getItems()
  const textFragments = await TextFragmentCollection.getItems()
  const projectTypes = await ProjectTypesCollection.getItems()

  return (
    <>
      <Section>
        <BlockListVerticalDivider>
          <ProjectEntityList projects={projects} />
          <TechnologyEntityList technologies={technologies} />
          <TextFragmentEntityList textFragments={textFragments} />
          <ProjectTypeEntityList projectTypes={projectTypes} />
        </BlockListVerticalDivider>
      </Section>
    </>
  )
}