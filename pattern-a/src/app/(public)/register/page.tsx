"use client";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    agreed: false,
  });

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
            新規会員登録
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-[#C0C0C0] text-xs tracking-widest font-sans mb-2">
                お名前 <span className="text-[#B8960C]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="山田 太郎"
                className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white placeholder-[#C0C0C0]/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#B8960C] transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#C0C0C0] text-xs tracking-widest font-sans mb-2">
                メールアドレス <span className="text-[#B8960C]">*</span>
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
                パスワード <span className="text-[#B8960C]">*</span>
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="••••••••（8文字以上）"
                className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white placeholder-[#C0C0C0]/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#B8960C] transition-colors"
              />
            </div>

            {/* Password Confirm */}
            <div>
              <label className="block text-[#C0C0C0] text-xs tracking-widest font-sans mb-2">
                パスワード（確認） <span className="text-[#B8960C]">*</span>
              </label>
              <input
                type="password"
                required
                value={formData.passwordConfirm}
                onChange={(e) =>
                  setFormData({ ...formData, passwordConfirm: e.target.value })
                }
                placeholder="••••••••"
                className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white placeholder-[#C0C0C0]/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#B8960C] transition-colors"
              />
            </div>

            {/* Agree */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agree"
                required
                checked={formData.agreed}
                onChange={(e) =>
                  setFormData({ ...formData, agreed: e.target.checked })
                }
                className="mt-1 w-4 h-4 accent-[#B8960C] cursor-pointer"
              />
              <label
                htmlFor="agree"
                className="text-[#C0C0C0] text-xs font-sans leading-5 cursor-pointer"
              >
                <Link
                  href="/terms"
                  className="text-[#B8960C] underline hover:text-[#C9A84C]"
                >
                  利用規約
                </Link>
                および
                <Link
                  href="/privacy"
                  className="text-[#B8960C] underline hover:text-[#C9A84C]"
                >
                  プライバシーポリシー
                </Link>
                に同意します
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#B8960C] text-black hover:bg-[#C9A84C] py-4 text-sm tracking-[0.3em] font-sans font-medium transition-colors duration-200 mt-2"
            >
              会員登録
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-[#C0C0C0] text-xs font-sans mb-3">
              すでにアカウントをお持ちの方
            </p>
            <Link
              href="/login"
              className="block w-full border border-[#2A2A2A] text-[#C0C0C0] hover:border-[#B8960C] hover:text-[#B8960C] py-3 text-sm tracking-[0.2em] font-sans transition-all duration-200 text-center"
            >
              ログインはこちら
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
