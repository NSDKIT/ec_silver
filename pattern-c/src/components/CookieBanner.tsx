"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("silmo-cookie-consent");
    if (!accepted) {
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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-3xl mx-auto bg-[#FAF8F5] border border-[#E8DDD0] rounded-lg shadow-lg p-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-sans text-[#7B5E4A] leading-relaxed">
              当サイトでは、より良いお買い物体験のためにCookieを使用しています。
              <a href="/privacy" className="underline hover:text-[#C17B5C] transition-colors ml-1">
                プライバシーポリシー
              </a>
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-sans text-[#9E9082] border border-[#E8DDD0] rounded-lg hover:border-[#9E9082] transition-colors"
            >
              拒否
            </button>
            <button
              onClick={handleAccept}
              className="px-5 py-2 text-sm font-sans bg-[#C17B5C] text-white rounded-lg hover:bg-[#A86848] transition-colors"
            >
              同意する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
