// components/Footer.tsx
import { Github, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="container mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} OneUniX. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a className="btn rounded-xl" href="#">
              <Globe size={16} />
              Website
            </a>
            <a className="btn rounded-xl" href="#">
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
