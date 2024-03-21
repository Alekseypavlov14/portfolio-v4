import { TextFragmentCollection } from '../collection'
import { notFoundTextFragmentPlaceholder } from '../constants'

export async function getTextFragmentContentBySelector(selector: string) {
  const textFragments = await TextFragmentCollection.getItems()
  const foundTextFragment = textFragments.find(text => text.selector === selector)

  if (foundTextFragment) return foundTextFragment.content
  return notFoundTextFragmentPlaceholder
}