'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

import { ThemeMode } from './types';

const STORAGE_KEY = 'DONEZO_UI_THEME';

const ThemeContext = createContext<{
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}>({
  theme: 'light',
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem(STORAGE_KEY) as ThemeMode) || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    setMounted(true);

    localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.className = theme;
  }, [theme]);

  if (!mounted) {
    return <>{children}</>; // To handle hydration errors
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
