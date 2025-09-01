// lib/utils.ts

/**
 * Minimal className combiner:
 * - Skips falsy values
 * - Joins with spaces
 * - Works with Tailwind
 *
 * Usage:
 *   cn('base', isActive && 'active', size && `btn-${size}`)
 *   => 'base active btn-lg'
 */
export function cn(...classes: Array<unknown>): string {
  const out: string[] = [];

  for (const c of classes) {
    if (!c) continue; // skip falsy
    if (typeof c === 'string') {
      if (c) out.push(c);
      continue;
    }
    if (Array.isArray(c)) {
      const nested = cn(...c as Array<unknown>);
      if (nested) out.push(nested);
      continue;
    }
    if (typeof c === 'object') {
      for (const [key, val] of Object.entries(c as Record<string, unknown>)) {
        if (val) out.push(key);
      }
      continue;
    }
  }

  return out.join(' ');
}
