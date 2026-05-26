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
        <h1 className="text-xl font-medium text-[#111111]">{isNew ? "新規商品追加" : "商品編集"}</h1>
        <Link href="/admin/products" className="text-[#888888] text-sm hover:text-[#111111]">← 一覧に戻る</Link>
      </div>
      <div className="bg-white border border-[#E0E0E0] rounded p-6 space-y-5">
        {[
          { label: "商品名", type: "text", default: isNew ? "" : "Ring 01", placeholder: "例：Ring 01" },
          { label: "価格（円）", type: "number", default: isNew ? "" : "8800", placeholder: "8800" },
        ].map((f) => (
          <div key={f.label}>
            <label className="block text-[#888888] text-sm mb-2">{f.label} <span className="text-red-400">*</span></label>
            <input type={f.type} defaultValue={f.default} placeholder={f.placeholder}
              className="w-full border border-[#E0E0E0] text-[#111111] px-4 py-2.5 focus:border-[#111111] focus:outline-none" />
          </div>
        ))}
        <div>
          <label className="block text-[#888888] text-sm mb-2">カテゴリ</label>
          <select className="w-full border border-[#E0E0E0] text-[#111111] px-4 py-2.5 focus:border-[#111111] focus:outline-none">
            {["リング","ネックレス","バングル","ピアス"].map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[#888888] text-sm mb-2">説明文</label>
          <textarea rows={4} defaultValue={isNew ? "" : "シンプルなデザインの手作りシルバーリングです。"}
            className="w-full border border-[#E0E0E0] text-[#111111] px-4 py-2.5 focus:border-[#111111] focus:outline-none resize-none" />
        </div>
        <div>
          <label className="block text-[#888888] text-sm mb-2">在庫数</label>
          <input type="number" defaultValue={isNew ? "" : "12"}
            className="w-32 border border-[#E0E0E0] text-[#111111] px-4 py-2.5 focus:border-[#111111] focus:outline-none" />
        </div>
        <div>
          <label className="block text-[#888888] text-sm mb-2">商品画像</label>
          <div className="border-2 border-dashed border-[#E0E0E0] hover:border-[#111111] transition-colors p-8 text-center cursor-pointer">
            <p className="text-[#888888] text-sm">📷 クリックまたはドラッグ＆ドロップ</p>
            <p className="text-[#888888]/50 text-xs mt-1">JPG, PNG（最大5MB）</p>
          </div>
        </div>
        <div className="flex items-center justify-between py-2">
          <div>
            <p className="text-[#111111] text-sm font-medium">公開設定</p>
            <p className="text-[#888888] text-xs">{published ? "公開中" : "非公開"}</p>
          </div>
          <button onClick={() => setPublished(!published)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${published ? "bg-[#111111]" : "bg-[#E0E0E0]"}`}>
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${published ? "translate-x-6" : "translate-x-1"}`} />
          </button>
        </div>
        <div className="flex gap-3 pt-2">
          <button className="bg-[#111111] text-white px-6 py-2.5 text-sm hover:bg-[#333] transition-colors">保存する</button>
          <Link href="/admin/products" className="border border-[#E0E0E0] text-[#888888] px-6 py-2.5 text-sm hover:border-[#111111] transition-colors">キャンセル</Link>
        </div>
      </div>
    </div>
  );
}
