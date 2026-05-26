"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex items-center justify-center py-16 px-6">
      <div className="bg-white w-full max-w-md p-10 border border-[#E0E0E0]">
        <div className="text-center mb-10">
          <Link
            href="/"
            className="text-2xl font-light tracking-[0.3em] text-[#111111] uppercase hover:opacity-70 transition-opacity"
          >
            ARGENT
          </Link>
          <p className="text-xs tracking-[0.3em] text-[#888888] uppercase mt-3">
            Sign In
          </p>
          <h1 className="text-xl font-light text-[#111111] mt-2">
            ログイン
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-light text-[#111111] tracking-wide mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              required
              placeholder="taro@example.com"
              className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#111111] transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-light text-[#111111] tracking-wide mb-2">
              パスワード
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#111111] transition-colors"
            />
          </div>

          <div className="flex justify-end">
            <a
              href="#"
              className="text-xs font-light text-[#888888] hover:text-[#111111] transition-colors underline underline-offset-4"
            >
              パスワードをお忘れの方
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#111111] text-white text-sm font-light tracking-widest uppercase hover:bg-[#333333] transition-colors disabled:opacity-50"
          >
            {loading ? "ログイン中..." : "ログイン"}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-[#E0E0E0] text-center">
          <p className="text-xs font-light text-[#888888]">
            アカウントをお持ちでない方は{" "}
            <Link
              href="/register"
              className="text-[#111111] underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              新規登録
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
