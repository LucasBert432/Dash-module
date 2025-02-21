import { create } from "zustand";
import { ThemeState } from "./globalStore.types";

export const useThemeStore = create<ThemeState>((set) => ({
  isWhite: false,
  toggleTheme: () => set((state) => ({ isWhite: !state.isWhite })),
}));
