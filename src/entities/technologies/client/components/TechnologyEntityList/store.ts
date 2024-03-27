import { createEntityListStore } from '@/shared/components/EntityList'
import { TechnologyEntity } from '@/entities/technologies'

export const {
  useEntityListStore: useTechnologyEntityListStore,
  itemsSelector,
  renderedItemsSelector,
  isItemsLinkNeededSelector,
  areItemsShownSelector,
  updateItemsSelector,
  showItemsSelector,
  hideItemsSelector,
} = createEntityListStore<TechnologyEntity>([])