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
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link
            href="/"
            className="font-serif text-4xl tracking-[0.4em] text-[#B8960C] hover:text-[#C9A84C] transition-colors"
          >
            SILMO
          </Link>
          <p className="text-[#C0C0C0] text-xs tracking-widest font-sans mt-2">
            Silver Accessories Brand
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-10">
          <h1 className="font-serif text-2xl text-white text-center mb-8 tracking-wide">
            ログイン
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-[#C0C0C0] text-xs tracking-widest font-sans mb-2">
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
                className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white placeholder-[#C0C0C0]/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#B8960C] transition-colors"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[#C0C0C0] text-xs tracking-widest font-sans mb-2">
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
                className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white placeholder-[#C0C0C0]/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#B8960C] transition-colors"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                href="#"
                className="text-[#C0C0C0] hover:text-[#B8960C] text-xs font-sans tracking-wide transition-colors"
              >
                パスワードをお忘れの方はこちら
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#B8960C] text-black hover:bg-[#C9A84C] py-4 text-sm tracking-[0.3em] font-sans font-medium transition-colors duration-200"
            >
              ログイン
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#2A2A2A]" />
            <span className="text-[#C0C0C0] text-xs font-sans">または</span>
            <div className="flex-1 h-px bg-[#2A2A2A]" />
          </div>

          {/* Register link */}
          <div className="text-center">
            <p className="text-[#C0C0C0] text-xs font-sans mb-3">
              アカウントをお持ちでない方
            </p>
            <Link
              href="/register"
              className="block w-full border border-[#2A2A2A] text-[#C0C0C0] hover:border-[#B8960C] hover:text-[#B8960C] py-3 text-sm tracking-[0.2em] font-sans transition-all duration-200 text-center"
            >
              新規会員登録はこちら
            </Link>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-[#C0C0C0] hover:text-[#B8960C] text-xs font-sans tracking-wider transition-colors"
          >
            ← トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
