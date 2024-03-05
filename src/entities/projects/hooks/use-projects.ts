import { use } from 'react'
import { getProjects } from '../repository'

export function useProjects() {
  return use(getProjects())
}