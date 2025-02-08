import { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';

export function useColorScheme() {
  const { currentTheme } = useTheme();
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  return theme;
}
