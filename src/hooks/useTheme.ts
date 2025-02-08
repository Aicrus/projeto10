import { useColorScheme } from 'react-native';
import { create } from 'zustand';

export type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme | null;
  setTheme: (theme: Theme | null) => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  theme: null,
  setTheme: (theme) => set({ theme }),
}));

export const useTheme = () => {
  const systemTheme = useColorScheme() as Theme;
  const { theme, setTheme } = useThemeStore();

  const currentTheme = theme || systemTheme || 'light';

  return {
    currentTheme,
    setTheme,
    isSystemTheme: theme === null,
  };
};
