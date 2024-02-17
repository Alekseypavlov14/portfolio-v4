import { create } from 'zustand'

interface MenuState {
  isOpened: boolean
}

interface MenuActions {
  open: () => void
  close: () => void
  toggle: () => void
}

interface MenuStore extends MenuState, MenuActions {}

export const useMenuStore = create<MenuStore>((set) => ({
  isOpened: false,
  open: () => set((state) => ({ ...state, isOpened: true })),
  close: () => set((state) => ({ ...state, isOpened: false })),
  toggle: () => set((state) => ({ ...state, isOpened: !state.isOpened }))
}))

export const isOpenedSelector = (state: MenuStore) => state.isOpened
export const openSelector = (state: MenuStore) => state.open
export const closeSelector = (state: MenuStore) => state.close
export const toggleSelector = (state: MenuStore) => state.toggle