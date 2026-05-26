"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/products", label: "コレクション" },
  { href: "/about", label: "ブランドについて" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="bg-white border-b border-[#E0E0E0] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-[#111111] text-xl font-light tracking-[0.3em] uppercase hover:opacity-70 transition-opacity"
        >
          ARGENT
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-light text-[#111111] tracking-wide hover:opacity-60 transition-opacity relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#111111] group-hover:w-full transition-all duration-200" />
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <button
            aria-label="検索"
            className="text-[#111111] hover:opacity-60 transition-opacity hidden md:block"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          {/* User */}
          <Link
            href="/mypage"
            aria-label="マイページ"
            className="text-[#111111] hover:opacity-60 transition-opacity hidden md:block"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            aria-label="カート"
            className="text-[#111111] hover:opacity-60 transition-opacity relative"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#111111] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile hamburger */}
          <button
            aria-label="メニュー"
            className="md:hidden text-[#111111] hover:opacity-60 transition-opacity"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E0E0E0] px-6 py-6">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-light text-[#111111] tracking-wide hover:opacity-60 transition-opacity"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/mypage"
              className="text-sm font-light text-[#111111] tracking-wide hover:opacity-60 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              マイページ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
