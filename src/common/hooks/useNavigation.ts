import { create } from 'zustand';

interface useNavigationProps {
  currentNavigation: number;
  setNavigation: (nav: number) => void;
}

export const useNavigation = create<useNavigationProps>((set) => ({
  currentNavigation: 0,
  setNavigation: (nav) => set({ currentNavigation: nav }),
}));
