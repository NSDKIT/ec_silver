import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const products: Record<
  string,
  {
    id: string;
    name: string;
    price: number;
    rating: number;
    reviews: { author: string; text: string; rating: number; date: string }[];
    image: string;
    category: string;
    description: string;
    makerNote: string;
    size: string;
    material: string;
    tags: string[];
  }
> = {
  "1": {
    id: "1",
    name: "月の指輪",
    price: 9800,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    category: "リング",
    description: "夜空に浮かぶ三日月をモチーフにしたリング。シンプルな中に宿る存在感が、どんなコーディネートにも馴染みます。",
    makerNote: "月の満ち欠けを眺めながらデザインしました。細く伸びたシルエットは、指にすっと沿うように何度も調整しています。つけていることを忘れるような、日常に溶け込むリングです。",
    size: "フリーサイズ（7〜13号対応）",
    material: "スターリングシルバー（SV925）",
    tags: ["リング", "シンプル", "日常使い"],
    reviews: [
      { author: "Y.M.", text: "想像以上に繊細で美しいリングでした。毎日つけています。", rating: 5, date: "2024-11-15" },
      { author: "K.T.", text: "プレゼントにしました。とても喜ばれました！", rating: 5, date: "2024-10-28" },
      { author: "S.A.", text: "サイズ調整しやすく、つけ心地も快適です。", rating: 4, date: "2024-10-05" },
    ],
  },
  "2": {
    id: "2",
    name: "羽のネックレス",
    price: 18500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    category: "ネックレス",
    description: "風に揺れる羽をモチーフにした繊細なネックレス。細部まで丁寧に彫り込まれた羽の質感が印象的です。",
    makerNote: "山で拾った鳥の羽をデッサンして作りました。羽の一本一本の線を銀で表現するのに、一番時間をかけた作品のひとつです。",
    size: "チェーン長さ：40cm（調節可）",
    material: "スターリングシルバー（SV925）",
    tags: ["ネックレス", "羽", "ギフト"],
    reviews: [
      { author: "M.K.", text: "こんなに繊細な作品、初めて見ました。大切に使います。", rating: 5, date: "2024-11-20" },
      { author: "T.H.", text: "誕生日プレゼントに。大感激でした。", rating: 5, date: "2024-10-12" },
    ],
  },
  "3": {
    id: "3",
    name: "草のバングル",
    price: 12800,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=800&q=80",
    category: "バングル",
    description: "野原の草を思わせるラインが、腕にやさしく沿うバングル。シンプルながらも存在感のあるデザインです。",
    makerNote: "工房の外に生える草を見ていたとき、そのラインの美しさに気づきました。銀のしなやかさで表現した、自然の線です。",
    size: "内径約58mm（調整不可）",
    material: "スターリングシルバー（SV925）",
    tags: ["バングル", "ナチュラル"],
    reviews: [
      { author: "R.N.", text: "シンプルだけどおしゃれ。ずっと使えそうです。", rating: 5, date: "2024-11-01" },
      { author: "A.O.", text: "つけ心地がとても良いです。", rating: 4, date: "2024-09-22" },
    ],
  },
  "4": {
    id: "4",
    name: "雫のピアス",
    price: 7200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    category: "ピアス",
    description: "水の雫をモチーフにした小さなピアス。揺れるたびに光を反射して、さりげない輝きを演出します。",
    makerNote: "雨の日、窓ガラスを流れる水の雫を眺めていて生まれたデザインです。小さいけれど、存在感がある。そんなピアスを目指しました。",
    size: "縦約15mm（ポストタイプ）",
    material: "スターリングシルバー（SV925）",
    tags: ["ピアス", "定番", "日常使い"],
    reviews: [
      { author: "H.S.", text: "軽くてつけやすい。毎日つけています！", rating: 5, date: "2024-12-01" },
      { author: "Y.T.", text: "シンプルで使いやすいです。", rating: 5, date: "2024-11-14" },
      { author: "K.M.", text: "揺れる感じがとても可愛いです。", rating: 4, date: "2024-10-30" },
    ],
  },
  "5": {
    id: "5",
    name: "幹のリング",
    price: 9500,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80",
    category: "リング",
    description: "木の幹の質感を表現したテクスチャーリング。ハンマーで丁寧に叩き出した表面が、自然の温もりを感じさせます。",
    makerNote: "お気に入りの木の幹のテクスチャーをそのままリングに。ハンマーワークで表現したこの凹凸が、光の当たり方で様々な表情を見せてくれます。",
    size: "11号（サイズ変更可、要相談）",
    material: "スターリングシルバー（SV925）",
    tags: ["リング", "テクスチャー", "ユニセックス"],
    reviews: [
      { author: "D.K.", text: "男女問わずつけられるデザインが好きです。", rating: 5, date: "2024-11-08" },
      { author: "N.H.", text: "質感が独特で素敵です。", rating: 4, date: "2024-10-15" },
    ],
  },
  "6": {
    id: "6",
    name: "十字のペンダント",
    price: 22000,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    category: "ネックレス",
    description: "存在感のある十字のペンダント。太めのラインと表面のテクスチャーが、シンプルながらも力強い印象を与えます。",
    makerNote: "シンプルな十字のかたちに、どれだけの情報を込められるか、に挑戦した作品です。表面のタガネ仕事、側面の磨き、それぞれが語る言葉があります。",
    size: "縦35mm × 横22mm、チェーン50cm",
    material: "スターリングシルバー（SV925）",
    tags: ["ネックレス", "ユニセックス", "ギフト"],
    reviews: [
      { author: "T.Y.", text: "一目惚れして購入。毎日つけています。最高です。", rating: 5, date: "2024-12-05" },
      { author: "S.M.", text: "存在感があってかっこいいです。", rating: 5, date: "2024-11-25" },
    ],
  },
  "7": {
    id: "7",
    name: "葉のバングル",
    price: 15800,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=800&q=80",
    category: "バングル",
    description: "木の葉の葉脈を精緻に表現したバングル。繊細な彫り込みが、シンプルなシルエットに深みを与えています。",
    makerNote: "紅葉の季節に、一枚の葉と長い時間向き合って生まれたデザインです。葉脈の一本一本を針で彫り込む作業は根気がいりますが、それだけの価値がある作品になりました。",
    size: "内径約58mm（調整不可）",
    material: "スターリングシルバー（SV925）",
    tags: ["バングル", "植物モチーフ"],
    reviews: [
      { author: "A.K.", text: "葉脈の彫りが本当に細かくて美しい。", rating: 5, date: "2024-11-18" },
      { author: "M.T.", text: "友人へのプレゼントに。とても喜ばれました。", rating: 5, date: "2024-10-22" },
      { author: "Y.S.", text: "期待以上の品質でした！", rating: 4, date: "2024-09-30" },
    ],
  },
  "8": {
    id: "8",
    name: "星のピアス",
    price: 6800,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    category: "ピアス",
    description: "夜空の星をイメージした小ぶりのピアス。きらりと光るシンプルなフォルムは、どんなシーンにも合わせやすい定番デザイン。",
    makerNote: "工房の周りは星がよく見えます。その星空を毎日見ながら作っているので、星モチーフの作品には特別な愛着があります。",
    size: "縦約10mm（スタッドタイプ）",
    material: "スターリングシルバー（SV925）",
    tags: ["ピアス", "星", "日常使い"],
    reviews: [
      { author: "R.H.", text: "シンプルで可愛い！コスパも良いです。", rating: 5, date: "2024-11-30" },
      { author: "C.T.", text: "つけていて軽いので長時間でも快適です。", rating: 4, date: "2024-10-19" },
    ],
  },
};

export async function generateStaticParams() {
  return ["1", "2", "3", "4", "5", "6", "7", "8"].map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = products[params.id];
  if (!product) return { title: "作品 | SILMO" };
  return {
    title: `${product.name} | SILMO`,
    description: product.description,
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products[params.id] ?? products["1"];

  return (
    <div className="bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-sans text-[#9E9082] mb-8">
          <Link href="/" className="hover:text-[#C17B5C] transition-colors">ホーム</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#C17B5C] transition-colors">作品一覧</Link>
          <span>/</span>
          <span className="text-[#7B5E4A]">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-[#E8DDD0]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Details */}
          <div>
            <p className="font-sans text-xs text-[#9E9082] tracking-widest uppercase mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-[#7B5E4A] mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#C17B5C] text-sm">{"★".repeat(Math.floor(product.rating))}</span>
              <span className="font-sans text-xs text-[#9E9082]">
                {product.rating} / 5.0
              </span>
            </div>

            <p className="font-sans text-2xl font-semibold text-[#C17B5C] mb-6">
              ¥{product.price.toLocaleString()}
              <span className="text-sm font-normal text-[#9E9082] ml-2">（税込）</span>
            </p>

            <p className="font-sans text-sm text-[#7B5E4A] leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="space-y-2 mb-6 text-sm font-sans">
              <div className="flex gap-4 text-[#7B5E4A]">
                <span className="text-[#9E9082] w-20 shrink-0">素材</span>
                <span>{product.material}</span>
              </div>
              <div className="flex gap-4 text-[#7B5E4A]">
                <span className="text-[#9E9082] w-20 shrink-0">サイズ</span>
                <span>{product.size}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-sans text-[#9E9082] border border-[#E8DDD0] px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="space-y-3">
              <button className="w-full bg-[#C17B5C] text-white font-sans text-sm tracking-widest py-4 rounded-lg hover:bg-[#A86848] transition-colors">
                カートに追加
              </button>
              <Link
                href="/checkout"
                className="block w-full bg-[#7B5E4A] text-white font-sans text-sm tracking-widest py-4 rounded-lg hover:bg-[#5E4535] transition-colors text-center"
              >
                すぐに購入する
              </Link>
            </div>

            <p className="mt-4 text-xs font-sans text-[#9E9082] text-center">
              ※ ハンドメイドのため、画像と若干異なる場合があります
            </p>
          </div>
        </div>

        {/* Maker's note */}
        <section className="mb-16 bg-[#E8DDD0] rounded-lg p-8">
          <p className="font-sans text-xs tracking-[0.3em] text-[#9E9082] uppercase mb-3">Maker&apos;s Note</p>
          <h2 className="font-serif text-2xl text-[#7B5E4A] mb-4">この作品について</h2>
          <div className="w-8 h-px bg-[#C17B5C] mb-6" />
          <p className="font-serif text-base text-[#7B5E4A] italic leading-[2]">
            &ldquo;{product.makerNote}&rdquo;
          </p>
          <p className="mt-4 font-sans text-sm text-[#9E9082] text-right">— 田中 みやび</p>
        </section>

        {/* Reviews */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl text-[#7B5E4A] mb-6">
            お客様のお声
          </h2>
          <div className="space-y-4">
            {product.reviews.map((review, i) => (
              <div key={i} className="bg-[#E8DDD0] rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#C17B5C]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#C17B5C] text-xs font-serif">{review.author[0]}</span>
                    </div>
                    <span className="font-sans text-sm text-[#7B5E4A]">{review.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#C17B5C] text-sm">{"★".repeat(review.rating)}</span>
                    <span className="font-sans text-xs text-[#9E9082] ml-2">{review.date}</span>
                  </div>
                </div>
                <p className="font-sans text-sm text-[#7B5E4A] leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-block border border-[#C17B5C] text-[#C17B5C] font-sans text-sm tracking-widest px-8 py-3 rounded-lg hover:bg-[#C17B5C] hover:text-white transition-colors"
          >
            作品一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
