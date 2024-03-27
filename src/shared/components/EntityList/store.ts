import { ADMIN_PANEL_LINKS_PER_TABLE } from '@/configs/globals'
import { Entity } from '@/shared/types/entity'
import { create } from 'zustand'

interface EntityListState<T> {
  items: T[]
  renderedItems: T[]
  isItemsLinkNeeded: boolean
  areItemsShown: boolean
}

interface EntityListActions<T> {
  updateItems: (items: T[]) => void
  showItems: () => void
  hideItems: () => void
}

interface EntityListStore<T> extends EntityListState<T>, EntityListActions<T> {}

export function createEntityListStore<T extends Entity>(entities: T[]) {
  const useEntityListStore = create<EntityListStore<T>>(set => ({
    items: entities,
    renderedItems: getItemsRenderSlice(entities),
    isItemsLinkNeeded: isBottomLinkNeeded(entities),
    areItemsShown: false,

    updateItems: (items) => set(state => ({ 
      ...state, items, 
      renderedItems: getItemsRenderSlice(items),
      isItemsLinkNeeded: isBottomLinkNeeded(items)
    })),
    showItems: () => set(state => ({ 
      ...state, 
      renderedItems: state.items, 
      areItemsShown: true 
    })),
    hideItems: () => set(state => ({ 
      ...state, 
      renderedItems: getItemsRenderSlice(state.items), 
      areItemsShown: false 
    }))
  }))

  const itemsSelector = (store: EntityListStore<T>) => store.items
  const renderedItemsSelector = (store: EntityListStore<T>) => store.renderedItems
  const isItemsLinkNeededSelector = (store: EntityListStore<T>) => store.isItemsLinkNeeded
  const areItemsShownSelector = (store: EntityListStore<T>) => store.areItemsShown

  const updateItemsSelector = (store: EntityListStore<T>) => store.updateItems
  const showItemsSelector = (store: EntityListStore<T>) => store.showItems
  const hideItemsSelector = (store: EntityListStore<T>) => store.hideItems

  return ({
    useEntityListStore,
    itemsSelector,
    renderedItemsSelector,
    isItemsLinkNeededSelector,
    areItemsShownSelector,
    updateItemsSelector,
    showItemsSelector,
    hideItemsSelector,
  })
}

function getItemsRenderSlice<T>(items: T[]) {
  return items.slice(0, ADMIN_PANEL_LINKS_PER_TABLE)
}
function isBottomLinkNeeded<T>(items: T[]) {
  return items.length > ADMIN_PANEL_LINKS_PER_TABLE
}