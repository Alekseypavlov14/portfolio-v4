import { createEntityListStore } from '@/shared/components/EntityList'
import { TextFragmentEntity } from '@/entities/text-fragments'

export const {
  useEntityListStore: useTextFragmentEntityListStore,
  itemsSelector,
  renderedItemsSelector,
  isItemsLinkNeededSelector,
  areItemsShownSelector,
  updateItemsSelector,
  showItemsSelector,
  hideItemsSelector
} = createEntityListStore<TextFragmentEntity>([])