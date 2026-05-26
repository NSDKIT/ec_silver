"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-sm border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-serif text-2xl tracking-[0.3em] text-[#B8960C]"
          >
            SILMO
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "HOME" },
              { href: "/products", label: "COLLECTION" },
              { href: "/about", label: "ABOUT" },
              { href: "/contact", label: "CONTACT" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#C0C0C0] hover:text-[#B8960C] text-sm tracking-widest transition-colors duration-200 font-sans"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="text-[#C0C0C0] hover:text-[#B8960C] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </Link>
            <Link
              href="/mypage"
              className="text-[#C0C0C0] hover:text-[#B8960C] transition-colors hidden md:block"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[#C0C0C0]"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-[#2A2A2A] px-4 py-4">
          {[
            { href: "/", label: "HOME" },
            { href: "/products", label: "COLLECTION" },
            { href: "/about", label: "ABOUT" },
            { href: "/contact", label: "CONTACT" },
            { href: "/cart", label: "CART" },
            { href: "/mypage", label: "MY PAGE" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-[#C0C0C0] hover:text-[#B8960C] tracking-widest text-sm font-sans border-b border-[#2A2A2A] last:border-0"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
