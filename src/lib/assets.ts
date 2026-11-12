import fs from 'node:fs';
import path from 'node:path';

/** Returns the public URL of an asset in public/assets when the file exists, otherwise null. */
export function asset(name: string): string | null {
  const file = path.join(process.cwd(), 'public', 'assets', name);
  return fs.existsSync(file) ? `/assets/${name}` : null;
}

/** Subtle paper grain used until the Blender paper texture lands. */
export const paperFallback =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .04 0 0 0 0 .1 0 0 0 0 .3 0 0 0 .05 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";
