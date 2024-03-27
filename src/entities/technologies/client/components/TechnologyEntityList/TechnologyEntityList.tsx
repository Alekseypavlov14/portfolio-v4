'use client'

import { EntityList, EntityListBottomLink, EntityListItem, EntityListItems, EntityListTitle, hideItemsLinkText, showItemsLinkText } from '@/shared/components/EntityList'
import { isItemsLinkNeededSelector, renderedItemsSelector, updateItemsSelector, useTechnologyEntityListStore, areItemsShownSelector, showItemsSelector, hideItemsSelector } from './store'
import { TechnologyEntity } from '@/entities/technologies'
import { useEffect } from 'react'

interface TechnologyEntityListProps {
  technologies: TechnologyEntity[]
}

export function TechnologyEntityList({ technologies }: TechnologyEntityListProps) {
  const renderedItems = useTechnologyEntityListStore(renderedItemsSelector)
  const isLinkNeeded = useTechnologyEntityListStore(isItemsLinkNeededSelector)
  const areItemsShown = useTechnologyEntityListStore(areItemsShownSelector)
  const updateItems = useTechnologyEntityListStore(updateItemsSelector)
  const showItems = useTechnologyEntityListStore(showItemsSelector)
  const hideItems = useTechnologyEntityListStore(hideItemsSelector)

  useEffect(() => updateItems(technologies), [technologies])

  const bottomLinkText = areItemsShown ? hideItemsLinkText : showItemsLinkText

  function bottomLinkClickHandler() {
    areItemsShown ? hideItems() : showItems()
  }

  return (
    <EntityList>
      <EntityListTitle>Technologies</EntityListTitle>

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