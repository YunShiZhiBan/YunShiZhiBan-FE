import { create } from 'zustand';

interface useNavigationProps {
  currentRoute: string;
  setRoute: (route: string) => void;
}

export const useNavigation = create<useNavigationProps>((set) => ({
  currentRoute: '/',
  setRoute: (route) => set({ currentRoute: route }),
}));
