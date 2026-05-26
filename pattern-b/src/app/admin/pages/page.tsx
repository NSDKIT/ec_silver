"use client";
import { useState } from "react";

const pages = [
  { id: "top", label: "トップページ", title: "シンプルに、美しく。", body: "ARGENTは洗練されたデザインのシルバーアクセサリーブランドです。" },
  { id: "about", label: "ブランドについて", title: "About ARGENT", body: "ARGENTのブランドストーリーをご紹介します。" },
  { id: "contact", label: "お問い合わせ", title: "CONTACT", body: "お気軽にご連絡ください。" },
];

export default function AdminPagesPage() {
  const [selected, setSelected] = useState(pages[0]);
  const [title, setTitle] = useState(pages[0].title);
  const [body, setBody] = useState(pages[0].body);

  const handleSelect = (p: typeof pages[0]) => { setSelected(p); setTitle(p.title); setBody(p.body); };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-medium text-[#111111]">ページ管理</h1>
        <p className="text-[#888888] text-sm mt-1">HPのテキストや画像を更新できます</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 bg-white border border-[#E0E0E0] rounded overflow-hidden">
          <div className="px-4 py-3 border-b border-[#E0E0E0]"><p className="text-[#888888] text-xs">ページ一覧</p></div>
          {pages.map((p) => (
            <button key={p.id} onClick={() => handleSelect(p)}
              className={`w-full text-left px-4 py-3 text-sm border-b border-[#E0E0E0] last:border-0 transition-colors ${selected.id === p.id ? "bg-[#F5F5F5] text-[#111111]" : "text-[#888888] hover:bg-[#F5F5F5]"}`}>
              {p.label}
            </button>
          ))}
        </div>
        <div className="col-span-2 bg-white border border-[#E0E0E0] rounded p-6 space-y-5">
          <h2 className="font-medium text-[#111111]">{selected.label}</h2>
          <div>
            <label className="block text-[#888888] text-sm mb-2">ページタイトル</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-[#E0E0E0] text-[#111111] px-4 py-2.5 focus:border-[#111111] focus:outline-none" />
          </div>
          <div>
            <label className="block text-[#888888] text-sm mb-2">メインバナー画像</label>
            <div className="border-2 border-dashed border-[#E0E0E0] hover:border-[#111111] transition-colors p-6 text-center cursor-pointer">
              <p className="text-[#888888] text-sm">📷 クリックして画像をアップロード</p>
            </div>
          </div>
          <div>
            <label className="block text-[#888888] text-sm mb-2">本文テキスト</label>
            <textarea rows={5} value={body} onChange={(e) => setBody(e.target.value)}
              className="w-full border border-[#E0E0E0] text-[#111111] px-4 py-2.5 focus:border-[#111111] focus:outline-none resize-none" />
          </div>
          <button className="bg-[#111111] text-white px-6 py-2.5 text-sm hover:bg-[#333] transition-colors">保存する</button>
        </div>
      </div>
    </div>
  );
}
