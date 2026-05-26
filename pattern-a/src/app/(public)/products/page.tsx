"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const allProducts = [
  {
    id: 1,
    name: "Silver Ring No.01",
    price: "¥8,800",
    rating: 4.8,
    reviews: 24,
    category: "ring",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
  },
  {
    id: 2,
    name: "Feather Necklace",
    price: "¥18,500",
    rating: 4.9,
    reviews: 36,
    category: "necklace",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
  },
  {
    id: 3,
    name: "Bangle 03",
    price: "¥12,800",
    rating: 4.7,
    reviews: 18,
    category: "bangle",
    image:
      "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=800&q=80",
  },
  {
    id: 4,
    name: "Moon Earrings",
    price: "¥7,200",
    rating: 4.6,
    reviews: 15,
    category: "earring",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
  },
  {
    id: 5,
    name: "Chain Ring",
    price: "¥9,500",
    rating: 4.8,
    reviews: 20,
    category: "ring",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
  },
  {
    id: 6,
    name: "Cross Pendant",
    price: "¥22,000",
    rating: 5.0,
    reviews: 12,
    category: "necklace",
    image:
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80",
  },
  {
    id: 7,
    name: "Leaf Bangle",
    price: "¥15,800",
    rating: 4.7,
    reviews: 9,
    category: "bangle",
    image:
      "https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=800&q=80",
  },
  {
    id: 8,
    name: "Star Earrings",
    price: "¥6,800",
    rating: 4.5,
    reviews: 22,
    category: "earring",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
  },
];

const categories = [
  { key: "all", label: "すべて" },
  { key: "ring", label: "リング" },
  { key: "necklace", label: "ネックレス" },
  { key: "bangle", label: "バングル" },
  { key: "earring", label: "ピアス" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3 h-3 ${
            star <= Math.round(rating) ? "text-[#B8960C]" : "text-[#2A2A2A]"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-[#C0C0C0] text-xs ml-1">{rating}</span>
    </div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allProducts.filter((p) => {
    const matchesCategory =
      activeCategory === "all" || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      searchQuery === "";
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="py-20 text-center border-b border-[#2A2A2A]">
        <p className="text-[#B8960C] text-xs tracking-[0.5em] font-sans mb-4">
          ALL ITEMS
        </p>
        <h1 className="font-serif text-6xl tracking-[0.3em] text-white">
          COLLECTION
        </h1>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="商品名で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-80 bg-[#1A1A1A] border border-[#2A2A2A] text-white placeholder-[#C0C0C0]/40 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#B8960C] transition-colors"
            />
          </div>
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 text-xs tracking-widest font-sans transition-all duration-200 ${
                  activeCategory === cat.key
                    ? "border-b-2 border-[#B8960C] text-[#B8960C]"
                    : "text-[#C0C0C0] hover:text-white border-b-2 border-transparent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C0C0C0] text-xs font-sans mb-8 tracking-wider">
            {filtered.length}件の商品
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#B8960C] transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#0D0D0D]/70 backdrop-blur-sm px-2 py-1">
                    <span className="text-[#B8960C] text-xs font-sans">
                      NEW
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-base text-white mb-1 tracking-wide">
                    {product.name}
                  </h3>
                  <StarRating rating={product.rating} />
                  <p className="text-[#C0C0C0] text-xs font-sans mt-1 mb-2">
                    ({product.reviews}件のレビュー)
                  </p>
                  <p className="text-[#B8960C] font-sans text-sm tracking-wider font-medium">
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-[#C0C0C0] font-sans text-sm">
                該当する商品が見つかりませんでした。
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
