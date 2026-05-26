"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: "1",
    name: "Ring 01",
    price: 8800,
    category: "ring",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    rating: 4.8,
    reviews: 42,
  },
  {
    id: "2",
    name: "Feather Necklace",
    price: 18500,
    category: "necklace",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    rating: 4.9,
    reviews: 67,
  },
  {
    id: "3",
    name: "Bangle 03",
    price: 12800,
    category: "bangle",
    image:
      "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=800&q=80",
    rating: 4.7,
    reviews: 29,
  },
  {
    id: "4",
    name: "Moon Earrings",
    price: 7200,
    category: "earrings",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    rating: 4.6,
    reviews: 38,
  },
  {
    id: "5",
    name: "Chain Ring",
    price: 9500,
    category: "ring",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    rating: 4.8,
    reviews: 54,
  },
  {
    id: "6",
    name: "Cross Pendant",
    price: 22000,
    category: "necklace",
    image:
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80",
    rating: 5.0,
    reviews: 23,
  },
  {
    id: "7",
    name: "Leaf Bangle",
    price: 15800,
    category: "bangle",
    image:
      "https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=800&q=80",
    rating: 4.7,
    reviews: 31,
  },
  {
    id: "8",
    name: "Star Earrings",
    price: 6800,
    category: "earrings",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    rating: 4.5,
    reviews: 19,
  },
];

const categories = [
  { key: "all", label: "すべて" },
  { key: "ring", label: "リング" },
  { key: "necklace", label: "ネックレス" },
  { key: "bangle", label: "バングル" },
  { key: "earrings", label: "ピアス" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill={star <= Math.floor(rating) ? "#111111" : "none"}
          stroke="#111111"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <span className="text-xs text-[#888888] ml-1">{rating}</span>
    </div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat =
      activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      !search || p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-[#F5F5F5] py-16 border-b border-[#E0E0E0]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-3">
            Collection
          </p>
          <h1 className="text-4xl font-light text-[#111111] tracking-tight">
            コレクション
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search */}
        <div className="mb-8 max-w-md">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888888]"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="商品を検索..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#111111] transition-colors"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-8 mb-10 border-b border-[#E0E0E0]">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`pb-3 text-sm font-light tracking-wide transition-colors relative ${
                activeCategory === cat.key
                  ? "text-[#111111]"
                  : "text-[#888888] hover:text-[#111111]"
              }`}
            >
              {cat.label}
              {activeCategory === cat.key && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-[#111111]" />
              )}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-xs text-[#888888] mb-8">
          {filtered.length}件
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white border border-[#E0E0E0] hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square bg-[#F5F5F5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-normal text-[#111111] mb-2">
                  {product.name}
                </h3>
                <StarRating rating={product.rating} />
                <p className="text-xs text-[#888888] mt-1 font-light">
                  {product.reviews}件のレビュー
                </p>
                <p className="text-sm font-light text-[#111111] mt-3">
                  ¥{product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#888888] font-light">
              該当する商品が見つかりませんでした。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
