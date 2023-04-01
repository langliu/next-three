import { create, StoreApi, UseBoundStore } from 'zustand'

export const useShoeStore: UseBoundStore<StoreApi<{
  vampWingColor: string
  setVampWingColor: (color: string) => void
  vampColor: string
  setVampColor: (color: string) => void
}>> = create((set) => ({
  vampWingColor: 'white',
  vampColor: 'pink',
  setVampColor: (color: string) => {
    set((state) => ({ ...state, vampColor: color }))
  },
  setVampWingColor: (color: string) => {
    set((state) => ({ ...state, vampWingColor: color }))
  }
}))
