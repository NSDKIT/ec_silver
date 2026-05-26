"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="bg-[#1A1A2E] border-b border-[#C9A84C]/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Brand Name */}
        <div className="flex items-center justify-between py-4">
          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="mx-auto md:mx-0">
            <span className="font-display text-3xl md:text-4xl font-light tracking-[0.3em] text-[#C9A84C]">
              SILMO
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link href="/products" className="text-[#F5F0E8] hover:text-[#C9A84C] transition-colors text-sm tracking-widest uppercase font-sans">
              Collection
            </Link>
            <Link href="/about" className="text-[#F5F0E8] hover:text-[#C9A84C] transition-colors text-sm tracking-widest uppercase font-sans">
              Story
            </Link>
            <Link href="/contact" className="text-[#F5F0E8] hover:text-[#C9A84C] transition-colors text-sm tracking-widest uppercase font-sans">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link href="/mypage" className="text-[#F5F0E8] hover:text-[#C9A84C] transition-colors" aria-label="マイページ">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <Link href="/cart" className="text-[#F5F0E8] hover:text-[#C9A84C] transition-colors relative" aria-label="カート">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C9A84C] text-[#1A1A2E] text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden border-t border-[#2E2E50] py-4 flex flex-col gap-4">
            <Link href="/products" onClick={() => setMenuOpen(false)} className="text-[#F5F0E8] hover:text-[#C9A84C] transition-colors text-sm tracking-widest uppercase">
              Collection
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-[#F5F0E8] hover:text-[#C9A84C] transition-colors text-sm tracking-widest uppercase">
              Story
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-[#F5F0E8] hover:text-[#C9A84C] transition-colors text-sm tracking-widest uppercase">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
