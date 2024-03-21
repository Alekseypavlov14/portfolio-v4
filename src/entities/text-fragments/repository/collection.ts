import { TEXT_FRAGMENT_COLLECTION_KEY } from './constants'
import { FirebaseDatabaseCollection } from '@/shared/database'
import { TextFragmentEntity } from '../text-fragment.entity'

export const TextFragmentCollection = new FirebaseDatabaseCollection<TextFragmentEntity>(TEXT_FRAGMENT_COLLECTION_KEY)