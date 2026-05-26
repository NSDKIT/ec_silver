import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "作品一覧 | SILMO",
  description: "SILMOのハンドメイドシルバーアクセサリー一覧。自然からインスピレーションを受けた作品をご覧ください。",
};

const products = [
  {
    id: "1",
    name: "月の指輪",
    price: 9800,
    rating: 4.9,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    category: "リング",
    tag: "人気",
  },
  {
    id: "2",
    name: "羽のネックレス",
    price: 18500,
    rating: 4.9,
    reviews: 28,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    category: "ネックレス",
    tag: "おすすめ",
  },
  {
    id: "3",
    name: "草のバングル",
    price: 12800,
    rating: 4.7,
    reviews: 19,
    image: "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=800&q=80",
    category: "バングル",
    tag: "",
  },
  {
    id: "4",
    name: "雫のピアス",
    price: 7200,
    rating: 4.8,
    reviews: 54,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    category: "ピアス",
    tag: "定番",
  },
  {
    id: "5",
    name: "幹のリング",
    price: 9500,
    rating: 4.7,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80",
    category: "リング",
    tag: "",
  },
  {
    id: "6",
    name: "十字のペンダント",
    price: 22000,
    rating: 5.0,
    reviews: 11,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    category: "ネックレス",
    tag: "新作",
  },
  {
    id: "7",
    name: "葉のバングル",
    price: 15800,
    rating: 4.8,
    reviews: 22,
    image: "https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=800&q=80",
    category: "バングル",
    tag: "",
  },
  {
    id: "8",
    name: "星のピアス",
    price: 6800,
    rating: 4.6,
    reviews: 38,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    category: "ピアス",
    tag: "",
  },
];

const categories = ["すべて", "リング", "ネックレス", "バングル", "ピアス"];

export default function ProductsPage() {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Header */}
      <section className="py-16 text-center bg-[#E8DDD0]">
        <p className="font-sans text-xs tracking-[0.3em] text-[#9E9082] uppercase mb-4">Collection</p>
        <h1 className="font-serif text-4xl md:text-5xl text-[#7B5E4A] mb-4">作品一覧</h1>
        <p className="font-sans text-sm text-[#9E9082]">
          すべてハンドメイド、ひとつとして同じものはありません
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-sans transition-colors border ${
                cat === "すべて"
                  ? "bg-[#C17B5C] text-white border-[#C17B5C]"
                  : "bg-[#FAF8F5] text-[#7B5E4A] border-[#E8DDD0] hover:border-[#C17B5C] hover:text-[#C17B5C]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-[#E8DDD0]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-2 left-2 bg-[#C17B5C] text-white text-xs font-sans px-2 py-0.5 rounded">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="mt-3 px-1">
                <p className="font-sans text-xs text-[#9E9082] mb-1">{product.category}</p>
                <p className="font-serif text-base text-[#7B5E4A] group-hover:text-[#C17B5C] transition-colors leading-snug">
                  {product.name}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[#C17B5C] text-xs">{"★".repeat(Math.floor(product.rating))}</span>
                  <span className="font-sans text-xs text-[#9E9082]">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                <p className="mt-1 font-sans text-sm font-semibold text-[#C17B5C]">
                  ¥{product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
