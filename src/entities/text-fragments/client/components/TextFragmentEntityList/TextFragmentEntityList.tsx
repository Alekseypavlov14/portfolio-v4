'use client'

import { EntityList, EntityListBottomLink, EntityListItem, EntityListItems, EntityListTitle, hideItemsLinkText, showItemsLinkText } from '@/shared/components/EntityList'
import { areItemsShownSelector, hideItemsSelector, isItemsLinkNeededSelector, renderedItemsSelector, showItemsSelector, updateItemsSelector, useTextFragmentEntityListStore } from './store'
import { TextFragmentEntity } from '@/entities/text-fragments'
import { useEffect } from 'react'

interface TextFragmentEntityListProps {
  textFragments: TextFragmentEntity[]
}

export function TextFragmentEntityList({ textFragments }: TextFragmentEntityListProps) {
  const renderedItems = useTextFragmentEntityListStore(renderedItemsSelector)
  const isLinkNeeded = useTextFragmentEntityListStore(isItemsLinkNeededSelector)
  const areItemsShown = useTextFragmentEntityListStore(areItemsShownSelector)
  const updateItems = useTextFragmentEntityListStore(updateItemsSelector)
  const showItems = useTextFragmentEntityListStore(showItemsSelector)
  const hideItems = useTextFragmentEntityListStore(hideItemsSelector)

  useEffect(() => updateItems(textFragments), [textFragments])

  const bottomLinkText = areItemsShown ? hideItemsLinkText : showItemsLinkText

  function bottomLinkClickHandler() {
    areItemsShown ? hideItems() : showItems()
  }

  return (
    <EntityList>
      <EntityListTitle>Text Fragments</EntityListTitle>

      <EntityListItems>
        {renderedItems.map(item => (
          <EntityListItem key={item.id}>
            {item.selector}
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