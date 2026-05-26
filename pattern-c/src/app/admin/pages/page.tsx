"use client";
import { useState } from "react";

const pages = [
  { id: "top", label: "トップページ", title: "あなたへの、てしごと。", body: "SILMOは、手仕事から生まれる温もりのあるシルバーアクセサリーブランドです。" },
  { id: "about", label: "ブランドについて", title: "つくり手について", body: "素材と向き合い、ひとつひとつ手でつくる作品をお届けします。" },
  { id: "contact", label: "お問い合わせ", title: "お問い合わせ", body: "お気軽にご連絡ください。" },
];

export default function AdminPagesPage() {
  const [selected, setSelected] = useState(pages[0]);
  const [title, setTitle] = useState(pages[0].title);
  const [body, setBody] = useState(pages[0].body);
  const [saved, setSaved] = useState(false);

  const handleSelect = (p: typeof pages[0]) => { setSelected(p); setTitle(p.title); setBody(p.body); setSaved(false); };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl text-[#7B5E4A]">ページ管理</h1>
        <p className="text-[#9E9082] text-sm mt-1">HPのテキストや画像を更新できます</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 bg-[#E8DDD0] rounded-lg overflow-hidden">
          <div className="px-4 py-3 border-b border-[#D4C5B5]"><p className="text-[#9E9082] text-xs">ページ一覧</p></div>
          {pages.map((p) => (
            <button key={p.id} onClick={() => handleSelect(p)}
              className={`w-full text-left px-4 py-3 text-sm border-b border-[#D4C5B5] last:border-0 transition-colors ${selected.id === p.id ? "bg-white text-[#C17B5C]" : "text-[#9E9082] hover:bg-[#FAF8F5]"}`}>
              {p.label}
            </button>
          ))}
        </div>
        <div className="col-span-2 bg-white border border-[#E8DDD0] rounded-lg p-6 space-y-5">
          <h2 className="font-serif text-[#7B5E4A]">{selected.label}</h2>
          <div>
            <label className="block text-[#7B5E4A] text-sm mb-2">ページタイトル</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#E8DDD0] text-[#7B5E4A] px-4 py-2.5 rounded focus:border-[#C17B5C] focus:outline-none" />
          </div>
          <div>
            <label className="block text-[#7B5E4A] text-sm mb-2">メインバナー画像</label>
            <div className="border-2 border-dashed border-[#E8DDD0] hover:border-[#C17B5C] transition-colors rounded-lg p-6 text-center cursor-pointer">
              <p className="text-[#9E9082] text-sm">📷 クリックして画像をアップロード</p>
            </div>
          </div>
          <div>
            <label className="block text-[#7B5E4A] text-sm mb-2">本文テキスト</label>
            <textarea rows={5} value={body} onChange={(e) => setBody(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#E8DDD0] text-[#7B5E4A] px-4 py-2.5 rounded focus:border-[#C17B5C] focus:outline-none resize-none" />
          </div>
          <button onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
            className="bg-[#C17B5C] text-white px-6 py-2.5 rounded hover:bg-[#A56A4D] transition-colors">
            {saved ? "✓ 保存しました" : "保存する"}
          </button>
        </div>
      </div>
    </div>
  );
}
