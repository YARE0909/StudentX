'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      className="btn"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {!isDark ? <Moon size={16} /> : <Sun size={16} />}
      {!isDark ? 'Dark' : 'Light'}
    </button>
  );
}
