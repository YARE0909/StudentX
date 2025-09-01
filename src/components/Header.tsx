// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Layers,
  HomeIcon,
  Box,
  Menu,
  X,
  Phone,
  PersonStanding,
  MessageSquare,
  GraduationCap,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xs font-header">
      <div className="container mx-auto max-w-7xl px-4">
        <nav className="mt-4 flex items-center justify-between rounded-2xl glass px-3 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 px-2 py-1">
            <span className="glass rounded-full p-2">
              <GraduationCap size={18} />
            </span>
            <span className="text-sm font-semibold tracking-wide">
              StudentX
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 sm:flex sm:gap-2">
            <li>
              <Link href="/" className="btn rounded-xl">
                <HomeIcon size={16} />
                Home
              </Link>
            </li>
            <li>
              <Link href="/subjects" className="btn rounded-xl">
                <Layers size={16} />
                Subjects
              </Link>
            </li>
            <li>
              <Link href="/career" className="btn rounded-xl">
                <Box size={16} />
                CareerX
              </Link>
            </li>
            <li>
              <Link href="/hostel" className="btn rounded-xl">
                <Phone size={16} />
                HostelX
              </Link>
            </li>
            <li>
              <Link href="/commX" className="btn rounded-xl">
                <MessageSquare size={16} />
                CommX
              </Link>
            </li>
            <li>
              <Link href="/community" className="btn rounded-xl">
                <PersonStanding size={16} />
                Community
              </Link>
            </li>
          </ul>

          {/* Theme toggle + Mobile menu button */}
          <div className="ml-2 flex items-center gap-2">
            <ThemeToggle />
            <div className="sm:hidden">
              <button
                className="btn p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="sm:hidden absolute left-4 right-4 mt-2 rounded-2xl glass p-3 space-y-2 animate-fadeIn">
            <Link
              href="/"
              className="flex items-center gap-2 btn w-full"
              onClick={() => setMenuOpen(false)}
            >
              <HomeIcon size={16} />
              Home
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 btn w-full"
              onClick={() => setMenuOpen(false)}
            >
              <Layers size={16} />
              About
            </Link>
            <Link
              href="/products"
              className="flex items-center gap-2 btn w-full"
              onClick={() => setMenuOpen(false)}
            >
              <Box size={16} />
              Products
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 btn w-full"
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={16} />
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
