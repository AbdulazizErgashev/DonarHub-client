import { create } from 'zustand'

type AppStore = {
  isDark: boolean
  toggleTheme: () => void
}

export const useAppStore = create<AppStore>((set) => ({
  isDark: true,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}))
