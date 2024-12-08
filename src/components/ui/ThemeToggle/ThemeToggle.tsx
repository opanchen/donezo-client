'use client';

import { useTheme } from '@/components/providers/ThemeProvider';
import { ThemeMode } from '@/components/providers/ThemeProvider/types';

function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const variants: ThemeMode[] = ['light', 'dark', 'violet'];

  return (
    <div className="flex items-center gap-2">
      {variants.map((mode, idx) => {
        const active = mode === theme;
        return (
          <button
            key={idx}
            className={`rounded bg-slate-500 p-2 text-white ${active ? 'shadow-md shadow-color-text-primary' : ''}`}
            onClick={() => setTheme(mode)}
            disabled={active}
          >
            {capitalize(mode)}
          </button>
        );
      })}
    </div>
  );
};
