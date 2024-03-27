'use client'

import { areItemsShownSelector, hideItemsSelector, isItemsLinkNeededSelector, renderedItemsSelector, showItemsSelector, updateItemsSelector, useProjectEntityListStore } from './store'
import { EntityList, EntityListBottomLink, EntityListItem, EntityListItems, EntityListTitle, hideItemsLinkText, showItemsLinkText } from '@/shared/components/EntityList'
import { ProjectEntity } from '@/entities/projects'
import { useEffect } from 'react'
import styles from './ProjectEntityList.module.scss'

interface ProjectEntityListProps {
  projects: ProjectEntity[]
}

export function ProjectEntityList({ projects }: ProjectEntityListProps) {
  const renderedItems = useProjectEntityListStore(renderedItemsSelector)
  const isLinkNeeded = useProjectEntityListStore(isItemsLinkNeededSelector)
  const areItemsShown = useProjectEntityListStore(areItemsShownSelector)
  const updateItems = useProjectEntityListStore(updateItemsSelector)
  const showItems = useProjectEntityListStore(showItemsSelector)
  const hideItems = useProjectEntityListStore(hideItemsSelector)

  useEffect(() => updateItems(projects), [projects])

  const bottomLinkText = areItemsShown ? hideItemsLinkText : showItemsLinkText

  function bottomLinkClickHandler() {
    areItemsShown ? hideItems() : showItems()
  }

  return (
    <EntityList>
      <EntityListTitle>Projects</EntityListTitle>

      <EntityListItems>
        {renderedItems.map(item => (
          <EntityListItem key={item.id}>
            {item.name}
          </EntityListItem>
        ))}
      </EntityListItems>

      <EntityListBottomLink 
        isLinkNeeded={isLinkNeeded} 
        onClick={bottomLinkClickHandler}
      >
        {bottomLinkText}
      </EntityListBottomLink>
    </EntityList>
  )
}