import { useStore } from 'zustand'
import { createStore } from 'zustand/vanilla'

export type GlobalStore = {
  user: {
    id: string
    name: string
  } | null
  loading: boolean
}

// Global store
export const globalStore = createStore<GlobalStore>()((set) => ({
  user: null,
  loading: false,
}))

// hook for React components
export const useGlobalStore = <T>(
  // return a component of global store
  selector: (state: GlobalStore) => T
) => useStore(globalStore, selector)

export default useGlobalStore
