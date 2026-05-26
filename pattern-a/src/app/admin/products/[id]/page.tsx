"use client";
import { useState } from "react";
import Link from "next/link";

export function generateStaticParams() {
  return ["1","2","3","4","5","6","7","8","new"].map((id) => ({ id }));
}

export default function AdminProductEditPage({ params }: { params: { id: string } }) {
  const isNew = params.id === "new";
  const [published, setPublished] = useState(!isNew);
  const [category, setCategory] = useState("リング");

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-serif text-[#B8960C] tracking-wider">
          {isNew ? "新規商品追加" : "商品編集"}
        </h1>
        <Link href="/admin/products" className="text-[#C0C0C0] text-sm hover:text-white">← 一覧に戻る</Link>
      </div>

      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded p-6 space-y-5">
        {/* Name */}
        <div>
          <label className="block text-[#C0C0C0] text-sm mb-2">商品名 <span className="text-red-400">*</span></label>
          <input
            type="text"
            defaultValue={isNew ? "" : "Silver Ring No.01"}
            className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white px-4 py-2.5 focus:border-[#B8960C] focus:outline-none"
            placeholder="例：Silver Ring No.01"
          />
        </div>

        {/* Price + Category */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[#C0C0C0] text-sm mb-2">価格（円） <span className="text-red-400">*</span></label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B8960C]">¥</span>
              <input
                type="number"
                defaultValue={isNew ? "" : "8800"}
                className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white pl-8 pr-4 py-2.5 focus:border-[#B8960C] focus:outline-none"
                placeholder="8800"
              />
            </div>
          </div>
          <div>
            <label className="block text-[#C0C0C0] text-sm mb-2">カテゴリ <span className="text-red-400">*</span></label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white px-4 py-2.5 focus:border-[#B8960C] focus:outline-none"
            >
              {["リング","ネックレス","バングル","ピアス","ペンダント"].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Stock */}
        <div>
          <label className="block text-[#C0C0C0] text-sm mb-2">在庫数 <span className="text-red-400">*</span></label>
          <input
            type="number"
            defaultValue={isNew ? "" : "12"}
            className="w-40 bg-[#0D0D0D] border border-[#2A2A2A] text-white px-4 py-2.5 focus:border-[#B8960C] focus:outline-none"
            placeholder="0"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-[#C0C0C0] text-sm mb-2">商品説明</label>
          <textarea
            rows={4}
            defaultValue={isNew ? "" : "職人が一つひとつ丁寧に仕上げたシルバーリングです。シンプルなデザインで日常使いにぴったりです。"}
            className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white px-4 py-2.5 focus:border-[#B8960C] focus:outline-none resize-none"
            placeholder="商品の説明を入力してください..."
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-[#C0C0C0] text-sm mb-2">商品画像</label>
          <div className="border-2 border-dashed border-[#2A2A2A] hover:border-[#B8960C] transition-colors rounded p-8 text-center cursor-pointer">
            <div className="text-4xl mb-2">📷</div>
            <p className="text-[#C0C0C0] text-sm">クリックまたはドラッグ＆ドロップ</p>
            <p className="text-[#C0C0C0]/50 text-xs mt-1">JPG, PNG, WEBP（最大5MB）</p>
          </div>
        </div>

        {/* Published Toggle */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#C0C0C0] text-sm font-medium">公開設定</p>
            <p className="text-[#C0C0C0]/60 text-xs mt-0.5">{published ? "この商品はサイトに表示されています" : "この商品は非公開です"}</p>
          </div>
          <button
            onClick={() => setPublished(!published)}
            className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${published ? "bg-[#B8960C]" : "bg-[#2A2A2A]"}`}
          >
            <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${published ? "translate-x-8" : "translate-x-1"}`} />
          </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button className="bg-[#B8960C] text-black px-6 py-2.5 font-medium hover:bg-[#C9A84C] transition-colors">
            保存する
          </button>
          <Link href="/admin/products" className="border border-[#2A2A2A] text-[#C0C0C0] px-6 py-2.5 hover:border-[#C0C0C0] transition-colors">
            キャンセル
          </Link>
        </div>
      </div>
    </div>
  );
}
