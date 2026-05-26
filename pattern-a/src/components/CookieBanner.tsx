"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "all");
    setShow(false);
  };
  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A1A] border-t border-[#2A2A2A] p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-[#C0C0C0] text-sm leading-relaxed">
            このサイトではCookieを使用しています。サービス向上・アクセス解析のためCookieを使用します。
            詳しくは
            <Link
              href="/privacy"
              className="text-[#B8960C] underline hover:text-[#C0C0C0]"
            >
              プライバシーポリシー
            </Link>
            をご覧ください。
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={acceptNecessary}
            className="text-sm px-4 py-2 border border-[#2A2A2A] text-[#C0C0C0] hover:border-[#C0C0C0] transition-colors"
          >
            必要なCookieのみ
          </button>
          <button
            onClick={accept}
            className="text-sm px-4 py-2 bg-[#B8960C] text-black hover:bg-[#C9A84C] transition-colors font-medium"
          >
            すべて同意する
          </button>
        </div>
      </div>
    </div>
  );
}
