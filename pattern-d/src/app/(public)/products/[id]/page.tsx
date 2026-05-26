import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return [1,2,3,4,5,6,7,8].map((id) => ({ id: String(id) }));
}

const products: Record<string, { name: string; price: string; img: string; story: string }> = {
  "1": { name: "SILMO No.01 Silver Ring", price: "¥9,800", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80", story: "2018年、SILMOが最初に世に送り出した作品です。" },
  "2": { name: "Silver Feather Necklace", price: "¥22,000", img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80", story: "自由と軽やかさを象徴する羽根を、純銀で表現しました。" },
  "3": { name: "Heritage Bangle", price: "¥16,500", img: "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=800&q=80", story: "先代から受け継いだ鍛金技法で仕上げた一品です。" },
  "4": { name: "Moon Drop Earrings", price: "¥8,800", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", story: "月夜に揺れる雫をモチーフにしました。" },
  "5": { name: "Intertwined Ring", price: "¥11,000", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80", story: "二本の銀線が絡み合う、絆を象徴するリングです。" },
  "6": { name: "Eternal Cross Pendant", price: "¥28,000", img: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80", story: "永遠と信仰を象徴する十字架ペンダントです。" },
  "7": { name: "Garden Bangle", price: "¥18,000", img: "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=800&q=80", story: "花園に咲く草花を繊細に彫り込みました。" },
  "8": { name: "Constellation Earrings", price: "¥7,700", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", story: "夜空の星座を6粒の銀で表現しました。" },
};

const reviews = [
  { name: "山田 美咲", rating: 5, text: "SILMOのリングを3年愛用しています。つけるたびに気持ちが上がります。品質への妥協のなさが伝わります。" },
  { name: "田中 恵理", rating: 5, text: "ギフトとして購入。渡した相手も毎日付けていると聞きました。包装も美しく、贈り物に最適です。" },
  { name: "佐藤 健", rating: 5, text: "細部のこだわりが伝わります。これからもずっと大切にします。次の作品も楽しみにしています。" },
];

const jsonLd = (product: { name: string; price: string; img: string }) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  image: product.img,
  offers: { "@type": "Offer", priceCurrency: "JPY", price: product.price.replace(/[¥,]/g, ""), availability: "https://schema.org/InStock" },
});

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products[params.id] ?? products["1"];
  const subImages = [product.img, "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=200&q=80", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&q=80"];

  return (
    <div className="bg-[#1A1A2E] min-h-screen pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(product)) }} />
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#F5F0E8]/40 mb-8">
          <Link href="/" className="hover:text-[#C9A84C]">HOME</Link>
          <span>›</span>
          <Link href="/products" className="hover:text-[#C9A84C]">COLLECTION</Link>
          <span>›</span>
          <span className="text-[#F5F0E8]/60">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="relative aspect-square bg-[#252545]">
              <Image src={product.img} alt={product.name} fill className="object-cover" />
            </div>
            <div className="flex gap-2 mt-3">
              {subImages.map((img, i) => (
                <div key={i} className="relative w-20 h-20 border border-[#2E2E50] hover:border-[#C9A84C] cursor-pointer transition-colors">
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <p className="text-[#C9A84C]/60 text-xs tracking-widest uppercase mb-2">Silver Jewelry</p>
              <h1 className="font-serif text-3xl text-[#F5F0E8] leading-tight">{product.name}</h1>
              <p className="text-[#C9A84C] text-2xl mt-3 font-serif">{product.price}</p>
              <div className="flex gap-0.5 mt-2">
                {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-[#C9A84C] text-sm">★</span>)}
                <span className="text-[#F5F0E8]/40 text-xs ml-2 mt-0.5">(5.0 / 12件)</span>
              </div>
            </div>

            <div className="border-t border-[#2E2E50] pt-6">
              <p className="text-[#C9A84C] text-xs tracking-widest mb-3">この作品の物語</p>
              <p className="text-[#F5F0E8]/80 text-sm leading-relaxed">{product.story}</p>
              <p className="text-[#F5F0E8]/60 text-sm leading-relaxed mt-3">素材にはスターリングシルバー（925銀）を使用。一つひとつ丁寧に手仕上げを施しています。経年変化をお楽しみいただける素材です。</p>
            </div>

            <div>
              <p className="text-[#F5F0E8]/60 text-xs tracking-wider mb-3">サイズを選択</p>
              <div className="flex gap-2">
                {["SS", "S", "M", "L"].map((s, i) => (
                  <button key={s} className={`w-12 h-10 text-sm border transition-colors ${i === 1 ? "border-[#C9A84C] text-[#C9A84C]" : "border-[#2E2E50] text-[#F5F0E8]/60 hover:border-[#C9A84C]/50"}`}>{s}</button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-[#C9A84C] text-[#1A1A2E] py-3 font-medium tracking-wider hover:bg-[#E8C97A] transition-colors">
                カートに追加
              </button>
              <button className="w-full border border-[#2E2E50] text-[#F5F0E8]/60 py-3 text-sm hover:border-[#C9A84C]/50 transition-colors">
                ♡ お気に入りに追加
              </button>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-16 border-t border-[#2E2E50] pt-12">
          <h2 className="font-serif text-2xl text-[#C9A84C] mb-8">お客様の声</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-[#252545] border border-[#2E2E50] p-6">
                <div className="flex gap-0.5 mb-3">{Array.from({ length: r.rating }).map((_, i) => <span key={i} className="text-[#C9A84C] text-sm">★</span>)}</div>
                <p className="text-[#F5F0E8]/80 text-sm leading-relaxed">{r.text}</p>
                <p className="text-[#F5F0E8]/40 text-xs mt-4">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
