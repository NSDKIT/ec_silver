"use client";

import { useState } from "react";
import type { Metadata } from "next";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#F5F5F5] py-16 border-b border-[#E0E0E0]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-3">
            Contact
          </p>
          <h1 className="text-4xl font-light text-[#111111] tracking-tight">
            お問い合わせ
          </h1>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-6 py-20">
        {submitted ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 border border-[#111111] flex items-center justify-center mx-auto mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-light text-[#111111] mb-4">
              送信が完了しました
            </h2>
            <p className="text-sm font-light text-[#888888] leading-relaxed">
              お問い合わせありがとうございます。
              <br />
              3〜5営業日以内にご返信いたします。
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm font-light text-[#888888] leading-relaxed mb-12 text-center">
              商品やご注文に関するお問い合わせは、以下のフォームからお願いします。
              <br />
              通常3〜5営業日以内にご返信いたします。
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-light text-[#111111] tracking-wide mb-2">
                    お名前 <span className="text-[#888888]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="山田 太郎"
                    className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-light text-[#111111] tracking-wide mb-2">
                    メールアドレス <span className="text-[#888888]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="taro@example.com"
                    className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-light text-[#111111] tracking-wide mb-2">
                  お問い合わせ種別 <span className="text-[#888888]">*</span>
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] focus:outline-none focus:border-[#111111] transition-colors appearance-none"
                >
                  <option value="">選択してください</option>
                  <option>商品について</option>
                  <option>注文・配送について</option>
                  <option>返品・交換について</option>
                  <option>その他</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-light text-[#111111] tracking-wide mb-2">
                  件名 <span className="text-[#888888]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="件名を入力してください"
                  className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#111111] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-light text-[#111111] tracking-wide mb-2">
                  お問い合わせ内容 <span className="text-[#888888]">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="お問い合わせ内容を入力してください"
                  className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#111111] transition-colors resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="mt-1"
                />
                <label
                  htmlFor="privacy"
                  className="text-xs font-light text-[#888888] leading-relaxed"
                >
                  <a
                    href="/privacy"
                    className="underline hover:text-[#111111] transition-colors"
                  >
                    プライバシーポリシー
                  </a>
                  に同意します
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#111111] text-white text-sm font-light tracking-widest uppercase hover:bg-[#333333] transition-colors"
              >
                送信する
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
