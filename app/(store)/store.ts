import { create } from "zustand";

type Store = {
  isMenuOpen: boolean;
};

type Actions = {
  setMenuOpen: () => void;
  setMenuClose: () => void;
  setMenu: () => void;
};

export const useStore = create<Store & Actions>((set) => ({
  isMenuOpen: true,
  setMenuOpen: () => set({ isMenuOpen: true }),
  setMenuClose: () => set({ isMenuOpen: false }),
  setMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
