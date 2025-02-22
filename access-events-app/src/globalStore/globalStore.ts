import { create } from "zustand";
import { ThemeState } from "./globalStore.types";

export const useThemeStore = create<ThemeState>((set) => ({
  isWhite: true,
  toggleTheme: () => set((state) => ({ isWhite: !state.isWhite })),
}));
