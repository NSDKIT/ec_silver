"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  };

  const necessary = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie同意バナー"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E0E0E0] shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm font-light text-[#111111] leading-relaxed max-w-2xl">
          当サイトではCookieを使用しています。サイトの利便性向上や分析のためにCookieを利用します。
          詳細は
          <a
            href="/privacy"
            className="underline hover:opacity-70 transition-opacity"
          >
            プライバシーポリシー
          </a>
          をご確認ください。
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={necessary}
            className="px-5 py-2 text-sm font-light border border-[#111111] text-[#111111] hover:bg-[#F5F5F5] transition-colors"
          >
            必要のみ
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-light bg-[#111111] text-white hover:bg-[#333333] transition-colors"
          >
            同意する
          </button>
        </div>
      </div>
    </div>
  );
}
