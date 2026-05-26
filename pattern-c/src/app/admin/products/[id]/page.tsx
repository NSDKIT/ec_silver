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
        <h1 className="font-serif text-2xl text-[#7B5E4A]">{isNew ? "新規商品追加" : "商品編集"}</h1>
        <Link href="/admin/products" className="text-[#9E9082] text-sm hover:text-[#C17B5C]">← 一覧に戻る</Link>
      </div>
      <div className="bg-white border border-[#E8DDD0] rounded-lg p-6 space-y-5">
        {[
          { label: "商品名", type: "text", default: isNew ? "" : "月の指輪", placeholder: "例：月の指輪" },
          { label: "価格（円）", type: "number", default: isNew ? "" : "9800", placeholder: "9800" },
        ].map((f) => (
          <div key={f.label}>
            <label className="block text-[#7B5E4A] text-sm mb-2">{f.label}</label>
            <input type={f.type} defaultValue={f.default} placeholder={f.placeholder}
              className="w-full bg-[#FAF8F5] border border-[#E8DDD0] text-[#7B5E4A] px-4 py-2.5 rounded focus:border-[#C17B5C] focus:outline-none" />
          </div>
        ))}
        <div>
          <label className="block text-[#7B5E4A] text-sm mb-2">カテゴリ</label>
          <select className="w-full bg-[#FAF8F5] border border-[#E8DDD0] text-[#7B5E4A] px-4 py-2.5 rounded focus:border-[#C17B5C] focus:outline-none">
            {["リング","ネックレス","バングル","ピアス"].map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[#7B5E4A] text-sm mb-2">説明文</label>
          <textarea rows={4} defaultValue={isNew ? "" : "手で丁寧に仕上げた、温もりのあるシルバーリングです。"}
            className="w-full bg-[#FAF8F5] border border-[#E8DDD0] text-[#7B5E4A] px-4 py-2.5 rounded focus:border-[#C17B5C] focus:outline-none resize-none" />
        </div>
        <div>
          <label className="block text-[#7B5E4A] text-sm mb-2">在庫数</label>
          <input type="number" defaultValue={isNew ? "" : "12"}
            className="w-32 bg-[#FAF8F5] border border-[#E8DDD0] text-[#7B5E4A] px-4 py-2.5 rounded focus:border-[#C17B5C] focus:outline-none" />
        </div>
        <div>
          <label className="block text-[#7B5E4A] text-sm mb-2">商品画像</label>
          <div className="border-2 border-dashed border-[#E8DDD0] hover:border-[#C17B5C] transition-colors rounded-lg p-8 text-center cursor-pointer">
            <p className="text-[#9E9082] text-sm">📷 クリックまたはドラッグ＆ドロップ</p>
            <p className="text-[#9E9082]/50 text-xs mt-1">JPG, PNG（最大5MB）</p>
          </div>
        </div>
        <div className="flex items-center justify-between py-2">
          <div>
            <p className="text-[#7B5E4A] text-sm">公開設定</p>
            <p className="text-[#9E9082] text-xs">{published ? "公開中" : "非公開"}</p>
          </div>
          <button onClick={() => setPublished(!published)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${published ? "bg-[#C17B5C]" : "bg-[#E8DDD0]"}`}>
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${published ? "translate-x-6" : "translate-x-1"}`} />
          </button>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#C17B5C] text-white px-6 py-2.5 rounded hover:bg-[#A56A4D] transition-colors">保存する</button>
          <Link href="/admin/products" className="border border-[#E8DDD0] text-[#9E9082] px-6 py-2.5 rounded hover:border-[#C17B5C] transition-colors">キャンセル</Link>
        </div>
      </div>
    </div>
  );
}
