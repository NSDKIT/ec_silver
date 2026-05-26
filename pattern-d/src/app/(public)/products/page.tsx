"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = ["すべて", "リング", "ネックレス", "バングル", "ピアス"];
const products = [
  { id: 1, name: "SILMO No.01 Silver Ring", price: "¥9,800", category: "リング", rating: 4.9, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80", story: "創業時からのシグネチャーリング" },
  { id: 2, name: "Silver Feather Necklace", price: "¥22,000", category: "ネックレス", rating: 5.0, img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80", story: "自由と軽やかさを纏う" },
  { id: 3, name: "Heritage Bangle", price: "¥16,500", category: "バングル", rating: 4.8, img: "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=800&q=80", story: "受け継がれる技の結晶" },
  { id: 4, name: "Moon Drop Earrings", price: "¥8,800", category: "ピアス", rating: 4.7, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", story: "月夜に揺れる雫" },
  { id: 5, name: "Intertwined Ring", price: "¥11,000", category: "リング", rating: 4.8, img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80", story: "絡み合う二本の銀線" },
  { id: 6, name: "Eternal Cross Pendant", price: "¥28,000", category: "ネックレス", rating: 5.0, img: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80", story: "永遠を象徴する十字架" },
  { id: 7, name: "Garden Bangle", price: "¥18,000", category: "バングル", rating: 4.9, img: "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=800&q=80", story: "花園を纏う" },
  { id: 8, name: "Constellation Earrings", price: "¥7,700", category: "ピアス", rating: 4.6, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", story: "夜空の星座" },
];

export default function ProductsPage() {
  const [active, setActive] = useState("すべて");
  const filtered = active === "すべて" ? products : products.filter((p) => p.category === active);
  return (
    <div className="bg-[#1A1A2E] min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl text-[#C9A84C] tracking-[0.2em]">COLLECTION</h1>
          <p className="text-[#F5F0E8]/60 mt-2 text-sm tracking-wider">すべての作品は、物語を持っている</p>
        </div>
        <div className="flex gap-2 mb-10 justify-center flex-wrap">
          {categories.map((c) => (
            <button key={c} onClick={() => setActive(c)}
              className={`px-5 py-2 text-sm tracking-wider transition-colors ${active === c ? "border border-[#C9A84C] text-[#C9A84C]" : "border border-[#2E2E50] text-[#F5F0E8]/60 hover:border-[#C9A84C]/50"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`} className="group">
              <div className="bg-[#252545] border border-[#2E2E50] hover:border-[#C9A84C]/50 transition-colors overflow-hidden">
                <div className="relative aspect-square">
                  <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <p className="text-[#F5F0E8]/80 text-xs tracking-wider mb-1">{p.story}</p>
                  <p className="text-[#F5F0E8] text-sm font-medium">{p.name}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-[#C9A84C] font-medium">{p.price}</p>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={`text-xs ${i < Math.floor(p.rating) ? "text-[#C9A84C]" : "text-[#2E2E50]"}`}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
