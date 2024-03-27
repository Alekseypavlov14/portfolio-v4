'use client'

import { areItemsShownSelector, hideItemsSelector, isItemsLinkNeededSelector, renderedItemsSelector, showItemsSelector, updateItemsSelector, useProjectTypeEntityListStore } from './store'
import { EntityList, EntityListBottomLink, EntityListItem, EntityListItems, EntityListTitle, hideItemsLinkText, showItemsLinkText } from '@/shared/components/EntityList'
import { ProjectTypeEntity } from '@/entities/project-types'
import { useEffect } from 'react'

interface ProjectTypeEntityListProps {
  projectTypes: ProjectTypeEntity[]
}

export function ProjectTypeEntityList({ projectTypes }: ProjectTypeEntityListProps) {
  const renderedItems = useProjectTypeEntityListStore(renderedItemsSelector)
  const isLinkNeeded = useProjectTypeEntityListStore(isItemsLinkNeededSelector)
  const areItemsShown = useProjectTypeEntityListStore(areItemsShownSelector)
  const updateItems = useProjectTypeEntityListStore(updateItemsSelector)
  const showItems = useProjectTypeEntityListStore(showItemsSelector)
  const hideItems = useProjectTypeEntityListStore(hideItemsSelector)

  useEffect(() => updateItems(projectTypes), [projectTypes])

  const bottomLinkText = areItemsShown ? hideItemsLinkText : showItemsLinkText

  function bottomLinkClickHandler() {
    areItemsShown ? hideItems() : showItems()
  }

  return (
    <EntityList>
      <EntityListTitle>Project types</EntityListTitle>

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