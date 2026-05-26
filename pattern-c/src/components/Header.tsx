"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#FAF8F5] border-b border-[#E8DDD0] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Brand name */}
        <div className="flex items-center justify-between py-4">
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#7B5E4A] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
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
          <div className="flex-1 flex justify-center md:justify-center">
            <Link
              href="/"
              className="font-serif text-3xl font-semibold text-[#7B5E4A] tracking-widest hover:text-[#C17B5C] transition-colors"
            >
              SILMO
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-[#7B5E4A] hover:text-[#C17B5C] transition-colors" aria-label="アカウント">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <Link href="/cart" className="text-[#7B5E4A] hover:text-[#C17B5C] transition-colors relative" aria-label="カート">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-[#C17B5C] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center leading-none">
                2
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex justify-center gap-8 pb-3">
          {[
            { href: "/products", label: "作品一覧" },
            { href: "/about", label: "つくり手について" },
            { href: "/contact", label: "お問い合わせ" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-sans text-[#7B5E4A] hover:text-[#C17B5C] transition-colors relative group pb-1"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C17B5C] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-t border-[#E8DDD0] px-4 py-4">
          <nav className="flex flex-col gap-4">
            {[
              { href: "/products", label: "作品一覧" },
              { href: "/about", label: "つくり手について" },
              { href: "/contact", label: "お問い合わせ" },
              { href: "/login", label: "ログイン" },
              { href: "/cart", label: "カート" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[#7B5E4A] hover:text-[#C17B5C] transition-colors font-sans text-sm py-1 border-b border-[#E8DDD0] last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
