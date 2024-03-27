import { createEntityListStore } from '@/shared/components/EntityList'
import { ProjectEntity } from '@/entities/projects'

export const {
  useEntityListStore: useProjectEntityListStore,
  isItemsLinkNeededSelector,
  itemsSelector,
  renderedItemsSelector,
  areItemsShownSelector,
  updateItemsSelector,
  showItemsSelector,
  hideItemsSelector
} = createEntityListStore<ProjectEntity>([])