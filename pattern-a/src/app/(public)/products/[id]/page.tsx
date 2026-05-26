"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products: Record<
  string,
  {
    id: number;
    name: string;
    price: string;
    category: string;
    image: string;
    subImages: string[];
    description: string[];
    material: string;
    care: string;
  }
> = {
  "1": {
    id: 1,
    name: "Silver Ring No.01",
    price: "¥8,800",
    category: "リング",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    subImages: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
      "https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=400&q=80",
    ],
    description: [
      "SILMOを代表するシグネチャーリング。シンプルでありながら、手仕事ならではの微細なテクスチャが光を受けて美しく輝きます。",
      "スターリングシルバー（925）を使用し、一つひとつ丁寧に鍛造・磨き上げています。細みのデザインながら存在感があり、重ね付けにもおすすめです。",
      "日常使いしやすい細身のデザインで、指を美しく見せるシルエットです。サイズ展開はSS〜Lまでご用意しています。",
    ],
    material:
      "スターリングシルバー（925）/ Sterling Silver 925\n※シルバーの性質上、経年変化により黒ずみが生じる場合があります。シルバークロスにて磨くことで光沢が蘇ります。",
    care: "・水・汗・温泉・プールなどへの接触を避けてください\n・着用後はシルバークロスで軽く拭いてから保管してください\n・直射日光の当たらない乾燥した場所で保管してください\n・硫黄成分に反応して変色することがあります",
  },
  "2": {
    id: 2,
    name: "Feather Necklace",
    price: "¥18,500",
    category: "ネックレス",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    subImages: [
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400&q=80",
      "https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=400&q=80",
    ],
    description: [
      "羽根（フェザー）をモチーフにした繊細なネックレス。職人が一筆一筆手彫りした羽根の繊維模様が、光の中で幻想的に輝きます。",
      "チェーンの長さは45cmと50cmの2種類からお選びいただけます。デコルテを美しく飾る存在感と、日常使いしやすい絶妙なサイズ感を両立しました。",
      "プレゼントとしても人気の高い一品です。専用のボックスにてお届けします。",
    ],
    material: "スターリングシルバー（925）/ Sterling Silver 925",
    care: "・水・汗・温泉・プールなどへの接触を避けてください\n・着用後はシルバークロスで軽く拭いてから保管してください",
  },
  "3": {
    id: 3,
    name: "Bangle 03",
    price: "¥12,800",
    category: "バングル",
    image:
      "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=800&q=80",
    subImages: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
    ],
    description: [
      "無骨ながら上品なバングル。鍛造によって生まれる微妙な凹凸が手首に程よいアクセントを与えます。",
      "開口部の調整で着脱しやすく、シンプルな無地デザインでどんなスタイルにも合わせやすい一本です。",
      "重ね付けでのスタイリングもおすすめです。",
    ],
    material: "スターリングシルバー（925）/ Sterling Silver 925",
    care: "・水・汗・温泉・プールなどへの接触を避けてください\n・着用後はシルバークロスで軽く拭いてから保管してください",
  },
  "4": {
    id: 4,
    name: "Moon Earrings",
    price: "¥7,200",
    category: "ピアス",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    subImages: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
      "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=400&q=80",
    ],
    description: [
      "三日月をモチーフにした上品なピアス。揺れるたびに光を反射し、耳元に柔らかな存在感を添えます。",
      "フック型のデザインで付け外しが簡単。顔周りを明るく演出します。",
      "カジュアルからフォーマルまで、幅広いシーンで活躍するデザインです。",
    ],
    material: "スターリングシルバー（925）/ Sterling Silver 925",
    care: "・水・汗・温泉・プールなどへの接触を避けてください\n・着用後はシルバークロスで軽く拭いてから保管してください",
  },
  "5": {
    id: 5,
    name: "Chain Ring",
    price: "¥9,500",
    category: "リング",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    subImages: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
      "https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=400&q=80",
    ],
    description: [
      "チェーンモチーフを取り入れた個性的なリング。細かなリンクが連なるデザインが指元に動きと光を生み出します。",
      "スタンダードなリングとの重ね付けで、より立体感のある指元の表情を楽しめます。",
      "ユニセックスなデザインで、男女問わずお楽しみいただけます。",
    ],
    material: "スターリングシルバー（925）/ Sterling Silver 925",
    care: "・水・汗・温泉・プールなどへの接触を避けてください\n・着用後はシルバークロスで軽く拭いてから保管してください",
  },
  "6": {
    id: 6,
    name: "Cross Pendant",
    price: "¥22,000",
    category: "ネックレス",
    image:
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80",
    subImages: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80",
      "https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=400&q=80",
    ],
    description: [
      "SILMOが誇るフラグシップアイテム。クロスモチーフに職人の細密彫りを施した贅沢な一品。",
      "重厚感のある彫金技術が光る逸品で、プレゼントとしても最高の贈り物になります。",
      "専用ボックスと磨き用クロス付きで、大切な方への贈り物にも最適です。",
    ],
    material: "スターリングシルバー（925）/ Sterling Silver 925",
    care: "・水・汗・温泉・プールなどへの接触を避けてください\n・定期的なメンテナンスでいつまでも美しく保てます",
  },
  "7": {
    id: 7,
    name: "Leaf Bangle",
    price: "¥15,800",
    category: "バングル",
    image:
      "https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=800&q=80",
    subImages: [
      "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=400&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
    ],
    description: [
      "葉脈をモチーフにした優美なバングル。自然の造形美をシルバーで精緻に表現しました。",
      "リアルな葉脈の立体感が手首に美しい陰影をもたらします。",
      "春夏シーズンに特に人気の高い一品です。",
    ],
    material: "スターリングシルバー（925）/ Sterling Silver 925",
    care: "・水・汗・温泉・プールなどへの接触を避けてください\n・着用後はシルバークロスで軽く拭いてから保管してください",
  },
  "8": {
    id: 8,
    name: "Star Earrings",
    price: "¥6,800",
    category: "ピアス",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    subImages: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
      "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=400&q=80",
    ],
    description: [
      "星をモチーフにしたシンプルで可愛らしいピアス。程よいサイズ感で、デイリーユースに最適です。",
      "軽量で長時間着用でもストレスフリー。耳たぶに優しく添います。",
      "シンプルなデザインだからこそ、シルバーの素材感が際立ちます。",
    ],
    material: "スターリングシルバー（925）/ Sterling Silver 925",
    care: "・水・汗・温泉・プールなどへの接触を避けてください\n・着用後はシルバークロスで軽く拭いてから保管してください",
  },
};

export function generateStaticParams() {
  return ["1", "2", "3", "4", "5", "6", "7", "8"].map((id) => ({ id }));
}

const reviews = [
  {
    name: "M.T",
    rating: 5,
    date: "2024/11/01",
    comment:
      "とても丁寧な作りで、着けた瞬間から特別な気持ちになれました。シルバーの輝きが本当に美しく、毎日のコーデに欠かせない一本になっています。",
  },
  {
    name: "K.A",
    rating: 5,
    date: "2024/10/15",
    comment:
      "プレゼントとして購入しました。箱を開けた瞬間の雰囲気も最高で、相手にも大変喜んでもらえました。また購入したいと思います。",
  },
  {
    name: "Y.H",
    rating: 4,
    date: "2024/09/28",
    comment:
      "期待通りのクオリティでした。シンプルながら存在感があり、普段使いとフォーマル両方に使えるのが気に入っています。",
  },
];

const relatedProducts = [
  {
    id: 5,
    name: "Chain Ring",
    price: "¥9,500",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
  },
  {
    id: 2,
    name: "Feather Necklace",
    price: "¥18,500",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80",
  },
  {
    id: 3,
    name: "Bangle 03",
    price: "¥12,800",
    image:
      "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=400&q=80",
  },
];

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products[params.id] || products["1"];
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const sizes = ["SS", "S", "M", "L"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description[0],
    brand: { "@type": "Brand", name: "SILMO" },
    offers: {
      "@type": "Offer",
      price: product.price.replace("¥", "").replace(",", ""),
      priceCurrency: "JPY",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-xs text-[#C0C0C0] font-sans">
            <Link href="/" className="hover:text-[#B8960C] transition-colors">
              HOME
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-[#B8960C] transition-colors"
            >
              COLLECTION
            </Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </nav>
        </div>

        {/* Product Detail */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Images */}
            <div>
              <div className="relative aspect-square mb-4 bg-[#1A1A1A] overflow-hidden">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="flex gap-3">
                {[product.image, ...product.subImages].map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-20 overflow-hidden border-2 transition-colors ${
                      selectedImage === img
                        ? "border-[#B8960C]"
                        : "border-[#2A2A2A]"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} sub ${i}`}
                      fill
                      className="object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <p className="text-[#B8960C] text-xs tracking-[0.4em] font-sans mb-3">
                {product.category}
              </p>
              <h1 className="font-serif text-3xl text-[#B8960C] mb-4 tracking-wide">
                {product.name}
              </h1>
              <p className="font-serif text-2xl text-white mb-2">
                {product.price}
              </p>
              <p className="text-[#C0C0C0] text-xs font-sans mb-8">
                税込 / 送料別途
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-[#2A2A2A] mb-8" />

              {/* Description */}
              <div className="space-y-4 mb-8">
                {product.description.map((para, i) => (
                  <p
                    key={i}
                    className="text-[#C0C0C0] font-sans text-sm leading-7"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Size Selector */}
              <div className="mb-8">
                <p className="text-white font-sans text-sm tracking-widest mb-3">
                  サイズ
                </p>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 text-sm font-sans border transition-all duration-200 ${
                        selectedSize === size
                          ? "bg-[#B8960C] text-black border-[#B8960C]"
                          : "bg-transparent text-[#C0C0C0] border-[#2A2A2A] hover:border-[#B8960C]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-[#C0C0C0] text-xs font-sans mt-2">
                  サイズガイドは
                  <Link href="#" className="text-[#B8960C] underline">
                    こちら
                  </Link>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 mb-8">
                <button className="w-full bg-[#B8960C] text-black hover:bg-[#C9A84C] py-4 text-sm tracking-[0.2em] font-sans font-medium transition-colors duration-200">
                  カートに追加
                </button>
                <button className="w-full border border-[#2A2A2A] text-[#C0C0C0] hover:border-[#B8960C] hover:text-[#B8960C] py-3 text-sm tracking-widest font-sans transition-all duration-200 flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  お気に入りに追加
                </button>
              </div>

              {/* Accordions */}
              <div className="border-t border-[#2A2A2A]">
                {[
                  { key: "material", label: "素材・仕様", content: product.material },
                  { key: "care", label: "お手入れ方法", content: product.care },
                  {
                    key: "shipping",
                    label: "配送・返品について",
                    content:
                      "通常、ご注文から3〜7営業日以内に発送いたします。\n送料：全国一律500円（10,000円以上のご購入で無料）\n\n商品到着後7日以内、未使用・未開封のものに限り返品・交換を承ります。お問い合わせフォームよりご連絡ください。",
                  },
                ].map((accordion) => (
                  <div key={accordion.key} className="border-b border-[#2A2A2A]">
                    <button
                      onClick={() =>
                        setOpenAccordion(
                          openAccordion === accordion.key ? null : accordion.key
                        )
                      }
                      className="w-full flex justify-between items-center py-4 text-sm text-[#C0C0C0] hover:text-white font-sans tracking-wider transition-colors"
                    >
                      {accordion.label}
                      <span className="text-[#B8960C]">
                        {openAccordion === accordion.key ? "−" : "+"}
                      </span>
                    </button>
                    {openAccordion === accordion.key && (
                      <div className="pb-5 text-[#C0C0C0] font-sans text-xs leading-6 whitespace-pre-line">
                        {accordion.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <section className="max-w-7xl mx-auto px-4 py-16 border-t border-[#2A2A2A]">
          <h2 className="font-serif text-2xl text-white mb-10 tracking-wide">
            カスタマーレビュー
          </h2>
          <div className="space-y-8">
            {reviews.map((review, i) => (
              <div key={i} className="border-b border-[#2A2A2A] pb-8 last:border-0">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center text-[#B8960C] font-serif">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-sans text-sm">{review.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-3 h-3 ${
                            star <= review.rating
                              ? "text-[#B8960C]"
                              : "text-[#2A2A2A]"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="ml-auto text-[#C0C0C0] text-xs font-sans">
                    {review.date}
                  </span>
                </div>
                <p className="text-[#C0C0C0] font-sans text-sm leading-7">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Products */}
        <section className="max-w-7xl mx-auto px-4 py-16 border-t border-[#2A2A2A]">
          <h2 className="font-serif text-2xl text-white mb-10 tracking-wide">
            関連商品
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="group bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#B8960C] transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-base text-white mb-1">
                    {p.name}
                  </h3>
                  <p className="text-[#B8960C] font-sans text-sm">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
