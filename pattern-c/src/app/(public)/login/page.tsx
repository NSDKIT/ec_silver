"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mockup: no actual auth
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link
            href="/"
            className="font-serif text-4xl tracking-[0.4em] text-[#7B5E4A] hover:text-[#C17B5C] transition-colors"
          >
            SILMO
          </Link>
          <p className="text-[#9E9082] text-xs tracking-widest font-sans mt-2">
            Handmade Silver Accessories
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-[#E8DDD0] rounded-lg p-10 shadow-sm">
          <h1 className="font-serif text-2xl text-[#7B5E4A] text-center mb-2">
            ログイン
          </h1>
          <div className="w-8 h-px bg-[#C17B5C] mx-auto mb-8" />

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-[#7B5E4A] text-xs tracking-wider font-sans mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="example@email.com"
                className="w-full bg-[#E8DDD0] border border-[#E8DDD0] text-[#7B5E4A] placeholder-[#9E9082] px-4 py-3 text-sm font-sans rounded-lg focus:outline-none focus:border-[#C17B5C] transition-colors"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[#7B5E4A] text-xs tracking-wider font-sans mb-2">
                パスワード
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="••••••••"
                className="w-full bg-[#E8DDD0] border border-[#E8DDD0] text-[#7B5E4A] placeholder-[#9E9082] px-4 py-3 text-sm font-sans rounded-lg focus:outline-none focus:border-[#C17B5C] transition-colors"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                href="#"
                className="text-[#7B5E4A] hover:text-[#C17B5C] text-xs font-sans tracking-wide transition-colors underline"
              >
                パスワードをお忘れの方
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#C17B5C] text-white hover:bg-[#A86848] py-4 text-sm tracking-[0.2em] font-sans font-medium rounded-lg transition-colors duration-200"
            >
              ログイン
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#E8DDD0]" />
            <span className="text-[#9E9082] text-xs font-sans">または</span>
            <div className="flex-1 h-px bg-[#E8DDD0]" />
          </div>

          {/* Register link */}
          <div className="text-center">
            <p className="text-[#9E9082] text-xs font-sans mb-3">
              アカウントをお持ちでない方
            </p>
            <Link
              href="/register"
              className="block w-full border border-[#E8DDD0] text-[#7B5E4A] hover:border-[#C17B5C] hover:text-[#C17B5C] py-3 text-sm tracking-[0.15em] font-sans rounded-lg transition-all duration-200 text-center"
            >
              新規会員登録はこちら
            </Link>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-[#9E9082] hover:text-[#C17B5C] text-xs font-sans tracking-wider transition-colors"
          >
            ← トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
