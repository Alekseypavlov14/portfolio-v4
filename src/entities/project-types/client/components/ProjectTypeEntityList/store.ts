import { createEntityListStore } from '@/shared/components/EntityList'
import { ProjectTypeEntity } from '@/entities/project-types'

export const {
  useEntityListStore: useProjectTypeEntityListStore,
  itemsSelector,
  renderedItemsSelector,
  isItemsLinkNeededSelector,
  areItemsShownSelector,
  updateItemsSelector,
  showItemsSelector,
  hideItemsSelector
} = createEntityListStore<ProjectTypeEntity>([])