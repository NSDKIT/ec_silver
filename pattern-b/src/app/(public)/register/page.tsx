"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
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
            Create Account
          </p>
          <h1 className="text-xl font-light text-[#111111] mt-2">
            新規会員登録
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-light text-[#111111] tracking-wide mb-2">
                姓
              </label>
              <input
                type="text"
                required
                placeholder="山田"
                className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#111111] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-light text-[#111111] tracking-wide mb-2">
                名
              </label>
              <input
                type="text"
                required
                placeholder="太郎"
                className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#111111] transition-colors"
              />
            </div>
          </div>

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
              placeholder="8文字以上"
              minLength={8}
              className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#111111] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-light text-[#111111] tracking-wide mb-2">
              パスワード（確認）
            </label>
            <input
              type="password"
              required
              placeholder="もう一度入力"
              className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#111111] transition-colors"
            />
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" id="terms" required className="mt-1" />
            <label
              htmlFor="terms"
              className="text-xs font-light text-[#888888] leading-relaxed"
            >
              <Link
                href="/terms"
                className="underline hover:text-[#111111] transition-colors"
              >
                利用規約
              </Link>
              および
              <Link
                href="/privacy"
                className="underline hover:text-[#111111] transition-colors"
              >
                プライバシーポリシー
              </Link>
              に同意します
            </label>
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" id="newsletter" className="mt-1" />
            <label
              htmlFor="newsletter"
              className="text-xs font-light text-[#888888] leading-relaxed"
            >
              メールマガジンを受け取る（任意）
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#111111] text-white text-sm font-light tracking-widest uppercase hover:bg-[#333333] transition-colors disabled:opacity-50"
          >
            {loading ? "登録中..." : "アカウントを作成する"}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-[#E0E0E0] text-center">
          <p className="text-xs font-light text-[#888888]">
            すでにアカウントをお持ちの方は{" "}
            <Link
              href="/login"
              className="text-[#111111] underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              ログイン
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
