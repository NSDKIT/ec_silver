"use client";
import { useState } from "react";
import Link from "next/link";

export function generateStaticParams() {
  return ["1","2","3","4","5","6","7","8","new"].map((id) => ({ id }));
}

export default function AdminProductEditPage({ params }: { params: { id: string } }) {
  const isNew = params.id === "new";
  const [published, setPublished] = useState(!isNew);
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-[#C9A84C] tracking-wider">{isNew ? "新規商品追加" : "商品編集"}</h1>
        <Link href="/admin/products" className="text-[#F5F0E8]/40 text-sm hover:text-[#C9A84C]">← 一覧に戻る</Link>
      </div>
      <div className="bg-[#1A1A2E] border border-[#2E2E50] p-6 space-y-5">
        {[
          { l: "商品名", t: "text", d: isNew ? "" : "SILMO No.01 Silver Ring", p: "例：SILMO No.01 Silver Ring" },
          { l: "価格（円）", t: "number", d: isNew ? "" : "9800", p: "9800" },
        ].map((f) => (
          <div key={f.l}>
            <label className="block text-[#F5F0E8]/50 text-xs tracking-wider mb-2">{f.l}</label>
            <input type={f.t} defaultValue={f.d} placeholder={f.p}
              className="w-full bg-[#0F0F20] border border-[#2E2E50] text-[#F5F0E8] px-4 py-3 focus:border-[#C9A84C] focus:outline-none placeholder-[#F5F0E8]/20" />
          </div>
        ))}
        <div>
          <label className="block text-[#F5F0E8]/50 text-xs tracking-wider mb-2">カテゴリ</label>
          <select className="w-full bg-[#0F0F20] border border-[#2E2E50] text-[#F5F0E8] px-4 py-3 focus:border-[#C9A84C] focus:outline-none">
            {["リング","ネックレス","バングル","ピアス","ペンダント"].map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[#F5F0E8]/50 text-xs tracking-wider mb-2">商品説明</label>
          <textarea rows={4} defaultValue={isNew ? "" : "SILMOが初めて世に送り出した、創業時からのシグネチャーリングです。"}
            className="w-full bg-[#0F0F20] border border-[#2E2E50] text-[#F5F0E8] px-4 py-3 focus:border-[#C9A84C] focus:outline-none resize-none placeholder-[#F5F0E8]/20" />
        </div>
        <div>
          <label className="block text-[#F5F0E8]/50 text-xs tracking-wider mb-2">在庫数</label>
          <input type="number" defaultValue={isNew ? "" : "12"}
            className="w-32 bg-[#0F0F20] border border-[#2E2E50] text-[#F5F0E8] px-4 py-3 focus:border-[#C9A84C] focus:outline-none" />
        </div>
        <div>
          <label className="block text-[#F5F0E8]/50 text-xs tracking-wider mb-2">商品画像</label>
          <div className="border-2 border-dashed border-[#2E2E50] hover:border-[#C9A84C]/50 transition-colors p-8 text-center cursor-pointer">
            <p className="text-[#F5F0E8]/40 text-sm">📷 クリックまたはドラッグ＆ドロップ</p>
          </div>
        </div>
        <div className="flex items-center justify-between py-2">
          <div>
            <p className="text-[#F5F0E8]/60 text-sm">公開設定</p>
            <p className="text-[#F5F0E8]/30 text-xs">{published ? "公開中" : "非公���"}</p>
          </div>
          <button onClick={() => setPublished(!published)}
            className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${published ? "bg-[#C9A84C]" : "bg-[#2E2E50]"}`}>
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${published ? "translate-x-7" : "translate-x-1"}`} />
          </button>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#C9A84C] text-[#1A1A2E] px-6 py-2.5 font-medium hover:bg-[#E8C97A] transition-colors">保存する</button>
          <Link href="/admin/products" className="border border-[#2E2E50] text-[#F5F0E8]/40 px-6 py-2.5 hover:border-[#C9A84C]/40 transition-colors">キャンセル</Link>
        </div>
      </div>
    </div>
  );
}
