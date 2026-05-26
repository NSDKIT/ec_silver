"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("silmo-cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("silmo-cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("silmo-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A2E] border-t border-[#C9A84C]/40 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-serif text-[#C9A84C] text-sm mb-1 tracking-wide">Cookie について</p>
          <p className="text-[#F5F0E8]/70 text-xs font-sans leading-relaxed">
            当サイトでは、よりよいご体験をご提供するためにCookieを使用しています。
            引き続きご利用いただく場合は、Cookieの使用にご同意いただいたものとみなします。
            詳しくは
            <a href="/privacy" className="text-[#C9A84C] hover:underline ml-1">プライバシーポリシー</a>
            をご確認ください。
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-5 py-2 text-xs font-sans tracking-widest text-[#F5F0E8]/60 border border-[#2E2E50] hover:border-[#C9A84C]/40 hover:text-[#F5F0E8] transition-all"
          >
            拒否する
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 text-xs font-sans tracking-widest bg-[#C9A84C] text-[#1A1A2E] font-semibold hover:bg-[#E8C97A] transition-all"
          >
            同意する
          </button>
        </div>
      </div>
    </div>
  );
}
