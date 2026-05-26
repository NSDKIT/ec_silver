import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const products: Record<
  string,
  {
    id: string;
    name: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
    description: string;
    category: string;
    sizes?: string[];
  }
> = {
  "1": {
    id: "1",
    name: "Ring 01",
    price: 8800,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    rating: 4.8,
    reviews: 42,
    description:
      "シンプルなラインが美しい、ARGENTの定番リング。Sterling Silver 925を使用し、日常使いに最適な存在感を持ちます。",
    category: "ring",
    sizes: ["5号", "7号", "9号", "11号", "13号"],
  },
  "2": {
    id: "2",
    name: "Feather Necklace",
    price: 18500,
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    rating: 4.9,
    reviews: 67,
    description:
      "羽をモチーフにした繊細なネックレス。チェーンの長さは45cmで、デコルテを美しく演出します。",
    category: "necklace",
  },
  "3": {
    id: "3",
    name: "Bangle 03",
    price: 12800,
    image:
      "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=800&q=80",
    rating: 4.7,
    reviews: 29,
    description:
      "細身のシルエットが上品なバングル。重ね付けしても存在感があり、単品でもさまになる一本です。",
    category: "bangle",
  },
  "4": {
    id: "4",
    name: "Moon Earrings",
    price: 7200,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    rating: 4.6,
    reviews: 38,
    description:
      "月をモチーフにしたシンプルなピアス。軽量で長時間着用しても疲れにくいデザインです。",
    category: "earrings",
  },
  "5": {
    id: "5",
    name: "Chain Ring",
    price: 9500,
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    rating: 4.8,
    reviews: 54,
    description:
      "チェーンモチーフを取り入れた個性的なリング。シンプルなコーデのアクセントになります。",
    category: "ring",
    sizes: ["5号", "7号", "9号", "11号", "13号"],
  },
  "6": {
    id: "6",
    name: "Cross Pendant",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80",
    rating: 5.0,
    reviews: 23,
    description:
      "クロスモチーフのペンダント。シンプルながら存在感のある一点。プレゼントにも最適です。",
    category: "necklace",
  },
  "7": {
    id: "7",
    name: "Leaf Bangle",
    price: 15800,
    image:
      "https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=800&q=80",
    rating: 4.7,
    reviews: 31,
    description:
      "葉をモチーフにしたナチュラルなバングル。有機的なフォルムが手首を美しく飾ります。",
    category: "bangle",
  },
  "8": {
    id: "8",
    name: "Star Earrings",
    price: 6800,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    rating: 4.5,
    reviews: 19,
    description:
      "星モチーフのシンプルなスタッドピアス。毎日つけたくなる、定番の一点です。",
    category: "earrings",
  },
};

const reviewsData = [
  {
    name: "A. Tanaka",
    rating: 5,
    date: "2024-03-15",
    body: "シンプルで上品なデザインが気に入っています。毎日つけています。",
  },
  {
    name: "M. Sato",
    rating: 4,
    date: "2024-02-28",
    body: "質感がとても良く、軽くて着けやすいです。プレゼントにも喜ばれました。",
  },
  {
    name: "Y. Yamamoto",
    rating: 5,
    date: "2024-01-10",
    body: "写真通りの美しさ。包装も丁寧で、ギフトに最適でした。",
  },
];

export async function generateStaticParams() {
  return Array.from({ length: 8 }, (_, i) => ({ id: String(i + 1) }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = products[params.id];
  if (!product) return { title: "商品が見つかりません | ARGENT" };
  return {
    title: `${product.name} | ARGENT`,
    description: product.description,
  };
}

function StarRating({ rating, size = 12 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={star <= Math.floor(rating) ? "#111111" : "none"}
          stroke="#111111"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products[params.id];

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#888888] font-light mb-4">
            商品が見つかりませんでした。
          </p>
          <Link
            href="/products"
            className="text-sm font-light text-[#111111] underline underline-offset-4"
          >
            コレクションに戻る
          </Link>
        </div>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "ARGENT",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "JPY",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
  };

  const detailItems = [
    { label: "素材", value: "Sterling Silver 925" },
    { label: "仕上げ", value: "鏡面磨き" },
    { label: "生産国", value: "日本" },
    { label: "ケア", value: "シルバークロスで磨いてください" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="border-b border-[#E0E0E0] py-3">
          <div className="max-w-7xl mx-auto px-6">
            <nav className="flex gap-2 text-xs text-[#888888] font-light">
              <Link href="/" className="hover:text-[#111111] transition-colors">
                ホーム
              </Link>
              <span>/</span>
              <Link
                href="/products"
                className="hover:text-[#111111] transition-colors"
              >
                コレクション
              </Link>
              <span>/</span>
              <span className="text-[#111111]">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-[#F5F5F5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-square bg-[#F5F5F5] overflow-hidden border border-[#E0E0E0] cursor-pointer hover:border-[#111111] transition-colors"
                  >
                    <Image
                      src={product.image}
                      alt={`${product.name} ${i + 1}`}
                      fill
                      className="object-cover opacity-80"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="text-xs tracking-[0.3em] text-[#888888] uppercase mb-3">
                ARGENT
              </p>
              <h1 className="text-3xl font-light text-[#111111] tracking-tight mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <StarRating rating={product.rating} />
                <span className="text-sm font-light text-[#888888]">
                  {product.rating} ({product.reviews}件のレビュー)
                </span>
              </div>

              {/* Price */}
              <p className="text-2xl font-light text-[#111111] mb-8">
                ¥{product.price.toLocaleString()}
                <span className="text-sm text-[#888888] ml-2">税込</span>
              </p>

              {/* Description */}
              <p className="text-sm font-light text-[#888888] leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Size Selector */}
              {product.sizes && (
                <div className="mb-8">
                  <p className="text-xs font-normal text-[#111111] tracking-widest uppercase mb-3">
                    サイズ
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {product.sizes.map((size, i) => (
                      <button
                        key={size}
                        className={`w-14 h-10 border text-sm font-light transition-colors ${
                          i === 1
                            ? "border-[#111111] bg-[#111111] text-white"
                            : "border-[#E0E0E0] text-[#111111] hover:border-[#111111]"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="text-xs text-[#888888] underline underline-offset-4 mt-2 inline-block hover:text-[#111111] transition-colors"
                  >
                    サイズガイド
                  </a>
                </div>
              )}

              {/* Add to Cart */}
              <div className="flex gap-4 mb-8">
                <button className="flex-1 py-4 bg-[#111111] text-white text-sm font-light tracking-widest uppercase hover:bg-[#333333] transition-colors">
                  カートに追加
                </button>
                <button className="w-14 h-14 border border-[#E0E0E0] flex items-center justify-center text-[#888888] hover:border-[#111111] hover:text-[#111111] transition-colors">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>

              {/* Shipping info */}
              <div className="flex items-center gap-2 mb-6 py-3 border-t border-b border-[#E0E0E0]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#888888"
                  strokeWidth="1.5"
                >
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                <p className="text-xs font-light text-[#888888]">
                  5,000円以上のご注文で送料無料
                </p>
              </div>

              {/* Accordion: Details */}
              <details className="border-b border-[#E0E0E0] group">
                <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
                  <span className="text-sm font-light text-[#111111] tracking-wide">
                    商品詳細
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="group-open:rotate-180 transition-transform"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="pb-4">
                  <dl className="space-y-2">
                    {detailItems.map((item) => (
                      <div key={item.label} className="flex gap-4">
                        <dt className="text-xs text-[#888888] font-light w-20">
                          {item.label}
                        </dt>
                        <dd className="text-xs text-[#111111] font-light">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </details>

              <details className="border-b border-[#E0E0E0] group">
                <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
                  <span className="text-sm font-light text-[#111111] tracking-wide">
                    配送・返品について
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="group-open:rotate-180 transition-transform"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="pb-4">
                  <p className="text-xs font-light text-[#888888] leading-relaxed">
                    ご注文から3〜5営業日以内に発送いたします。
                    商品到着後8日以内であれば返品可能です（未使用・未開封の場合）。
                    詳しくは利用規約をご確認ください。
                  </p>
                </div>
              </details>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-20 pt-16 border-t border-[#E0E0E0]">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-2">
                  Reviews
                </p>
                <h2 className="text-2xl font-light text-[#111111] tracking-tight">
                  レビュー
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <StarRating rating={product.rating} size={14} />
                <span className="text-sm text-[#888888] font-light">
                  {product.rating} / {product.reviews}件
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviewsData.map((review, i) => (
                <div
                  key={i}
                  className="bg-[#F5F5F5] p-6"
                >
                  <StarRating rating={review.rating} />
                  <p className="text-sm font-light text-[#111111] leading-relaxed mt-4 mb-4">
                    {review.body}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-light text-[#888888]">
                      {review.name}
                    </p>
                    <p className="text-xs font-light text-[#888888]">
                      {review.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
