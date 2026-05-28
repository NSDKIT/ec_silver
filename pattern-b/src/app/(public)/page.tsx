"use client";
import Image from "next/image";
import Link from "next/link";

const newArrivals = [
  {
    id: "1",
    name: "Ring 01",
    price: "¥8,800",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Feather Necklace",
    price: "¥18,500",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    rating: 4.9,
  },
  {
    id: "3",
    name: "Bangle 03",
    price: "¥12,800",
    image:
      "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=800&q=80",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Moon Earrings",
    price: "¥7,200",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    rating: 4.6,
  },
];

const instagramImages = [
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
  "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80",
  "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=600&q=80",
  "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
  "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=80",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
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

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="order-2 lg:order-1">
              <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-6">
                New Collection 2024
              </p>
              <h1 className="text-5xl lg:text-7xl font-light text-[#111111] leading-tight tracking-tight mb-8">
                シンプルに、<br />
                美しく。
              </h1>
              <p className="text-base font-light text-[#888888] leading-relaxed mb-10 max-w-sm">
                素材の美しさを活かした、余計なものを持たないデザイン。
                ARGENT のシルバーアクセサリーは、
                日常に静かな輝きをもたらします。
              </p>
              <div className="flex gap-4">
                <Link
                  href="/products"
                  className="inline-block px-10 py-3 bg-[#111111] text-white text-sm font-light tracking-widest uppercase hover:bg-[#333333] transition-colors"
                >
                  コレクションを見る
                </Link>
                <Link
                  href="/about"
                  className="inline-block px-10 py-3 border border-[#111111] text-[#111111] text-sm font-light tracking-widest uppercase hover:bg-[#F5F5F5] transition-colors"
                >
                  ブランドについて
                </Link>
              </div>
            </div>
            {/* Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] bg-[#F5F5F5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
                  alt="ARGENT Silver Accessories"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#E0E0E0] bg-white flex items-center justify-center">
                <p className="text-center">
                  <span className="block text-xl font-light text-[#111111]">
                    Ag
                  </span>
                  <span className="block text-[10px] tracking-widest text-[#888888] uppercase">
                    Silver
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrival */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-2">
                New Arrival
              </p>
              <h2 className="text-3xl font-light text-[#111111] tracking-tight">
                新着アイテム
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-light text-[#888888] hover:text-[#111111] transition-colors tracking-wide underline underline-offset-4 hidden md:block"
            >
              すべて見る
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white hover:shadow-md transition-shadow"
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
                  <h3 className="text-sm font-normal text-[#111111] mb-1">
                    {product.name}
                  </h3>
                  <StarRating rating={product.rating} />
                  <p className="text-sm font-light text-[#111111] mt-2">
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/products"
              className="inline-block px-8 py-3 border border-[#111111] text-sm font-light text-[#111111] tracking-widest uppercase hover:bg-[#111111] hover:text-white transition-colors"
            >
              すべて見る
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Concept */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-6">
            Our Concept
          </p>
          <h2 className="text-4xl font-light text-[#111111] leading-tight tracking-tight mb-10">
            余白が、美しさをつくる。
          </h2>
          <p className="text-base font-light text-[#888888] leading-relaxed mb-6">
            ARGENT は「銀」を意味するフランス語。
            私たちは、余分なものをそぎ落としたシルバーアクセサリーを作ります。
          </p>
          <p className="text-base font-light text-[#888888] leading-relaxed mb-12">
            シンプルな形の中に宿る、素材本来の輝き。
            毎日身につけたくなる、飽きのこないデザイン。
            それが ARGENT のフィロソフィーです。
          </p>
          <Link
            href="/about"
            className="inline-block text-sm font-light text-[#111111] tracking-widest uppercase border-b border-[#111111] pb-1 hover:opacity-60 transition-opacity"
          >
            ブランドストーリーを読む
          </Link>
        </div>
      </section>

      {/* Values Strip */}
      <section className="bg-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              {
                title: "Handcrafted",
                desc: "職人による手作り",
                icon: "✦",
              },
              {
                title: "Sterling Silver",
                desc: "スターリングシルバー 925",
                icon: "◇",
              },
              {
                title: "Free Shipping",
                desc: "5,000円以上 送料無料",
                icon: "◯",
              },
            ].map((item) => (
              <div key={item.title}>
                <p className="text-[#888888] text-lg mb-3">{item.icon}</p>
                <p className="text-white text-sm font-light tracking-widest uppercase mb-2">
                  {item.title}
                </p>
                <p className="text-[#888888] text-xs font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-2">
              Instagram
            </p>
            <h2 className="text-2xl font-light text-[#111111] tracking-tight">
              @argent_silver
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {instagramImages.map((src, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square bg-[#F5F5F5] overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={`Instagram photo ${i + 1}`}
                  fill
                  className="object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-4">
            Newsletter
          </p>
          <h2 className="text-3xl font-light text-[#111111] tracking-tight mb-4">
            最新情報をお届けします
          </h2>
          <p className="text-sm font-light text-[#888888] mb-8">
            新着アイテムやキャンペーン情報をいち早くお届けします。
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-0 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="メールアドレス"
              className="flex-1 px-5 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#111111] transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#111111] text-white text-sm font-light tracking-widest uppercase hover:bg-[#333333] transition-colors flex-shrink-0"
            >
              登録
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
