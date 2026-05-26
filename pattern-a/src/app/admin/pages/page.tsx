"use client";
import { useState } from "react";

const pages = [
  { id: "top", label: "トップページ", title: "手仕事から生まれる、一点のきらめき。", body: "SILMOは、職人の手から生まれるシルバーアクセサリーブランドです。" },
  { id: "about", label: "ブランドについて", title: "ABOUT SILMO", body: "SILMOのこだわりと制作背景をご紹介します。" },
  { id: "contact", label: "お問い合わせ", title: "CONTACT", body: "お気軽にお問い合わせください。3営業日以内にご返信します。" },
];

export default function AdminPagesPage() {
  const [selected, setSelected] = useState(pages[0]);
  const [title, setTitle] = useState(pages[0].title);
  const [body, setBody] = useState(pages[0].body);
  const [saved, setSaved] = useState(false);

  const handleSelect = (p: typeof pages[0]) => {
    setSelected(p);
    setTitle(p.title);
    setBody(p.body);
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-serif text-[#B8960C] tracking-wider">ページ管理</h1>
        <p className="text-[#C0C0C0] text-sm mt-1">HPのテキストや画像を更新できます</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Page list */}
        <div className="col-span-1">
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded overflow-hidden">
            <div className="border-b border-[#2A2A2A] px-4 py-3">
              <p className="text-[#C0C0C0] text-xs tracking-wider">ページ一覧</p>
            </div>
            {pages.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSelect(p)}
                className={`w-full text-left px-4 py-3 text-sm border-b border-[#2A2A2A] last:border-0 transition-colors ${selected.id === p.id ? "text-[#B8960C] bg-[#2A2A2A]/50" : "text-[#C0C0C0] hover:bg-[#2A2A2A]/30"}`}
              >
                {p.label}
                {selected.id === p.id && <span className="ml-2 text-xs">▶</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Edit form */}
        <div className="col-span-2">
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded p-6 space-y-5">
            <h2 className="text-white font-medium">{selected.label} を編集</h2>

            <div>
              <label className="block text-[#C0C0C0] text-sm mb-2">ページタイトル</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white px-4 py-2.5 focus:border-[#B8960C] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#C0C0C0] text-sm mb-2">メインバナー画像</label>
              <div className="border-2 border-dashed border-[#2A2A2A] hover:border-[#B8960C] transition-colors rounded p-6 text-center cursor-pointer">
                <p className="text-[#C0C0C0] text-sm">📷 クリックして画像をアップロード</p>
                <p className="text-[#C0C0C0]/50 text-xs mt-1">推奨サイズ：1920×800px</p>
              </div>
            </div>

            <div>
              <label className="block text-[#C0C0C0] text-sm mb-2">本文テキスト</label>
              <textarea
                rows={5}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white px-4 py-2.5 focus:border-[#B8960C] focus:outline-none resize-none"
              />
            </div>

            <button onClick={handleSave} className="bg-[#B8960C] text-black px-6 py-2.5 font-medium hover:bg-[#C9A84C] transition-colors">
              {saved ? "✓ 保存しました" : "保存する"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
