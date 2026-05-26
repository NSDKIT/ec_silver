import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SILMO | すべての銀は、物語を持っている。",
  description:
    "SILMOは2018年創業のプレミアムシルバーアクセサリーブランドです。一本の銀線から生まれる物語を、丁寧な手仕事で紡ぎ続けています。",
};

const featuredProducts = [
  {
    id: "1",
    name: "SILMO No.01 Silver Ring",
    subtitle: "はじまりの指輪",
    price: 9800,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
  },
  {
    id: "2",
    name: "Silver Feather Necklace",
    subtitle: "自由の象徴",
    price: 22000,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
  },
  {
    id: "3",
    name: "Heritage Bangle",
    subtitle: "受け継がれる記憶",
    price: 16500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=800&q=80",
  },
  {
    id: "6",
    name: "Eternal Cross Pendant",
    subtitle: "永遠の誓い",
    price: 28000,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80",
  },
];

const timeline = [
  { year: "2018", event: "SILMO創業。京都のアトリエで最初の作品「No.01」を発表。" },
  { year: "2020", event: "初のコレクション「ROOTS」をリリース。各地のクラフトフェアで高い評価を獲得。" },
  { year: "2022", event: "Japan Handmade Jewelry Award受賞。国内外のコレクターから注目を集める。" },
  { year: "2024", event: "新コレクション「ORIGIN」展開。オンラインストアを本格稼働。" },
];

const testimonials = [
  {
    name: "山田 美咲",
    location: "東京都",
    text: "SILMOの指輪を購入してから3年経ちます。使い込むほどに味が出て、まるで自分の一部になったよう。これほど愛着の持てるアクセサリーは初めてです。",
    rating: 5,
    product: "SILMO No.01 Silver Ring",
  },
  {
    name: "鈴木 香織",
    location: "大阪府",
    text: "ブランドストーリーに惚れ込んで購入しました。梱包からメッセージカードまで、すべてに誠実さが感じられます。作り手の思いが伝わる数少ないブランドです。",
    rating: 5,
    product: "Silver Feather Necklace",
  },
  {
    name: "田中 恵子",
    location: "福岡県",
    text: "Heritage Bangleは母へのプレゼントに購入しました。「一生もの」という言葉がぴったりの品質です。次は自分用に別のアイテムを購入したいと思っています。",
    rating: 5,
    product: "Heritage Bangle",
  },
];

export default function TopPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1920&q=80"
            alt="SILMO Hero"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E]/60 via-[#1A1A2E]/40 to-[#1A1A2E]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="font-display text-xs tracking-[0.5em] text-[#C9A84C] uppercase mb-6 opacity-80">
            Premium Silver Jewelry since 2018
          </p>
          <h1 className="font-display text-[5rem] md:text-[8rem] lg:text-[10rem] font-light tracking-[0.2em] text-[#C9A84C] leading-none mb-6">
            SILMO
          </h1>
          <div className="w-32 h-px bg-[#C9A84C]/50 mx-auto mb-8" />
          <p className="font-display text-xl md:text-2xl lg:text-3xl italic text-[#F5F0E8] leading-relaxed tracking-wide mb-4">
            すべての銀は、物語を持っている。
          </p>
          <p className="font-sans text-sm md:text-base text-[#F5F0E8]/60 leading-relaxed tracking-wide mb-12 max-w-lg mx-auto">
            2018年の創業以来、一本の銀線から生まれる物語を紡いでいます。
          </p>
          <Link
            href="/products"
            className="inline-block border border-[#C9A84C] text-[#C9A84C] px-10 py-3 font-sans text-xs tracking-[0.3em] uppercase hover:bg-[#C9A84C] hover:text-[#1A1A2E] transition-all duration-300"
          >
            コレクションへ
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-[#F5F0E8]/30 text-xs tracking-widest uppercase font-sans">Scroll</p>
          <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C]/40 to-transparent" />
        </div>
      </section>

      {/* Brand Manifesto */}
      <section className="bg-[#F5F0E8] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display text-xs tracking-[0.5em] text-[#C9A84C] uppercase mb-6">About SILMO</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A2E] mb-8 leading-tight">
            SILMOについて
          </h2>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mb-10" />
          <div className="space-y-6 text-[#1A1A2E]/80 font-sans leading-loose text-base md:text-lg text-left">
            <p>
              銀は、太古から人類が愛し続けてきた素材です。月の光を映すような白い輝き、時とともに深まる風合い、そして人の手の温もりを帯びる不思議な特性——SILMOはその銀の持つ力を信じ、一点一点に魂を込めた作品を生み出しています。
            </p>
            <p>
              私たちが大切にしているのは、「速さ」ではなく「深さ」です。トレンドを追うのではなく、10年後、20年後も愛され続けるデザインを追求する。量産ではなく、職人の手によって丁寧に仕上げられた一つの作品として、あなたの元へお届けしたい——それがSILMOの変わらぬ姿勢です。
            </p>
            <p>
              すべてのアクセサリーには物語があります。デザインが生まれた瞬間の感動、素材を選ぶときの真剣なまなざし、磨きをかける職人の指先——そのすべてがあなたの手元に届く一つの作品に宿っています。あなたがSILMOを身につけるとき、その物語の続きを紡ぐのはあなた自身です。
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/about"
              className="font-display text-sm italic text-[#1A1A2E] border-b border-[#C9A84C] pb-1 hover:text-[#C9A84C] transition-colors tracking-wide"
            >
              ブランドストーリーをくわしく →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="bg-[#1A1A2E] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-display text-xs tracking-[0.5em] text-[#C9A84C] uppercase mb-4">Featured</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0E8] mb-4">選ばれた作品たち</h2>
            <div className="w-16 h-px bg-[#C9A84C]/50 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="relative aspect-square overflow-hidden bg-[#252545] mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1A1A2E]/0 group-hover:bg-[#1A1A2E]/20 transition-all duration-300" />
                </div>
                <p className="font-display text-xs italic text-[#C9A84C]/70 mb-1 tracking-wide">{product.subtitle}</p>
                <h3 className="font-serif text-[#F5F0E8] text-sm mb-2 leading-tight tracking-wide">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="font-display text-[#C9A84C] text-lg">¥{product.price.toLocaleString()}</p>
                  <div className="flex items-center gap-1">
                    <span className="text-[#C9A84C] text-xs">★</span>
                    <span className="text-[#F5F0E8]/50 text-xs font-sans">{product.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/products"
              className="inline-block border border-[#C9A84C]/60 text-[#C9A84C] px-10 py-3 font-sans text-xs tracking-[0.3em] uppercase hover:bg-[#C9A84C] hover:text-[#1A1A2E] transition-all duration-300"
            >
              すべての作品を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="bg-[#F5F0E8] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="創業者"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-[#C9A84C]/30 -z-10" />
            </div>
            <div>
              <p className="font-display text-xs tracking-[0.5em] text-[#C9A84C] uppercase mb-6">From the Founder</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A2E] mb-6 leading-tight">創業者の言葉</h2>
              <div className="w-16 h-px bg-[#C9A84C] mb-8" />
              <div className="space-y-5 text-[#1A1A2E]/75 font-sans leading-loose text-sm md:text-base">
                <p>
                  銀と出会ったのは、20代の終わりのことでした。旅先のトルコの市場で、年老いた職人が黙々と銀を叩いているのを見て、その姿に打たれたのです。完成した作品を手に取ったとき、金属の冷たさの中に確かな温もりを感じた——あの瞬間が、SILMOの原点です。
                </p>
                <p>
                  日本に帰り、独学で銀細工を学び始めました。最初の2年間は失敗の連続でした。しかし、銀という素材は正直で、誠実に向き合えば向き合うほど、応えてくれます。失敗から学んだことが、今のSILMOのすべての作品に生きています。
                </p>
                <p>
                  私がお届けしたいのは、単なるアクセサリーではありません。「これを見るたびに、あの日のことを思い出す」「大切な人への愛情を込めて贈った」——そんな記憶と感情を宿す器を作りたい。SILMOはこれからも、そのために銀を磨き続けます。
                </p>
              </div>
              <div className="mt-8">
                <p className="font-display text-lg italic text-[#1A1A2E] tracking-wide">— 渡辺 誠一郎</p>
                <p className="font-sans text-xs text-[#1A1A2E]/50 tracking-widest mt-1">SILMO Founder & Artisan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F5F0E8] py-16 md:py-24 border-t border-[#1A1A2E]/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-display text-xs tracking-[0.5em] text-[#C9A84C] uppercase mb-4">History</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A2E] mb-4">SILMOの歩み</h2>
            <div className="w-16 h-px bg-[#C9A84C] mx-auto" />
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-16 md:left-1/2 top-0 bottom-0 w-px bg-[#C9A84C]/20 -translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-start gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} hidden md:block`}>
                    {index % 2 === 0 ? (
                      <div className="pb-2">
                        <p className="font-display text-3xl text-[#C9A84C] font-light">{item.year}</p>
                        <p className="font-sans text-[#1A1A2E]/70 text-sm leading-relaxed mt-2">{item.event}</p>
                      </div>
                    ) : <div />}
                  </div>
                  <div className="relative z-10 flex-shrink-0 w-4 h-4 md:w-3 md:h-3 rounded-full bg-[#C9A84C] border-2 border-[#F5F0E8] shadow-lg mt-1 ml-14 md:ml-0 md:mt-0 self-start md:self-auto md:my-auto" />
                  <div className={`flex-1 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className="md:hidden mb-1">
                      <p className="font-display text-2xl text-[#C9A84C] font-light">{item.year}</p>
                    </div>
                    {index % 2 !== 0 ? (
                      <div className="hidden md:block pb-2">
                        <p className="font-display text-3xl text-[#C9A84C] font-light">{item.year}</p>
                        <p className="font-sans text-[#1A1A2E]/70 text-sm leading-relaxed mt-2">{item.event}</p>
                      </div>
                    ) : <div className="md:hidden"><p className="font-sans text-[#1A1A2E]/70 text-sm leading-relaxed">{item.event}</p></div>}
                    <div className="md:hidden">
                      {index % 2 !== 0 && <p className="font-sans text-[#1A1A2E]/70 text-sm leading-relaxed">{item.event}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="bg-[#1A1A2E] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="font-display text-xs tracking-[0.5em] text-[#C9A84C] uppercase mb-6">Craftsmanship</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0E8] mb-6 leading-tight">技の継承</h2>
              <div className="w-16 h-px bg-[#C9A84C]/50 mb-8" />
              <div className="space-y-5 text-[#F5F0E8]/70 font-sans leading-loose text-sm md:text-base">
                <p>
                  SILMOの制作工程には、現代では失われつつある伝統的な銀細工の技術が生きています。機械に頼らず、職人の手と目と感覚で一点一点仕上げる——そのプロセスこそが、SILMOの作品に他にはない個性と温もりをもたらします。
                </p>
                <p>
                  使用するスターリングシルバー925は、純銀92.5%以上という厳格な基準を満たすものだけを厳選。銀の持つ本来の輝きと強度を最大限に引き出すため、熟練の職人が手仕事で鍛え、磨き上げます。
                </p>
                <p>
                  完成した作品は、必ず作り手自身の目で最終確認を行います。わずかでも「これではない」と感じたものは市場に出しません。100点のものだけがSILMOの名を冠することを許されます。
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about#craft"
                  className="font-display text-sm italic text-[#C9A84C] border-b border-[#C9A84C]/40 pb-1 hover:border-[#C9A84C] transition-colors tracking-wide"
                >
                  制作工程をくわしく →
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=80"
                  alt="制作風景"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#1A1A2E]/20" />
              </div>
              <div className="absolute -top-4 -left-4 w-3/4 h-3/4 border border-[#C9A84C]/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#252545] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-display text-xs tracking-[0.5em] text-[#C9A84C] uppercase mb-4">Voices</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0E8] mb-4">お客様の声</h2>
            <div className="w-16 h-px bg-[#C9A84C]/50 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <div key={index} className="border border-[#2E2E50] p-8 hover:border-[#C9A84C]/40 transition-colors">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-[#C9A84C] text-sm">★</span>
                  ))}
                </div>
                <p className="font-display text-2xl text-[#C9A84C]/20 leading-none mb-2">"</p>
                <p className="text-[#F5F0E8]/70 font-sans text-sm leading-loose mb-6">{review.text}</p>
                <div className="border-t border-[#2E2E50] pt-4">
                  <p className="font-serif text-[#F5F0E8] text-sm">{review.name}</p>
                  <p className="text-[#F5F0E8]/40 font-sans text-xs mt-1">{review.location} · {review.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A2E] py-20 md:py-28 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-display text-xs tracking-[0.5em] text-[#C9A84C] uppercase mb-6">Your Story Begins</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0E8] mb-6 leading-tight">
            あなたの物語を、<br />SILMOとともに。
          </h2>
          <div className="w-16 h-px bg-[#C9A84C]/50 mx-auto mb-8" />
          <p className="text-[#F5F0E8]/60 font-sans text-sm leading-loose mb-10">
            一生身につけたいと思えるアクセサリーに、出会ったことがありますか。<br />
            SILMOは、そんな特別な一点をお届けするためにあります。
          </p>
          <Link
            href="/products"
            className="inline-block bg-[#C9A84C] text-[#1A1A2E] px-12 py-4 font-sans text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#E8C97A] transition-all duration-300"
          >
            コレクションを見る
          </Link>
        </div>
      </section>
    </>
  );
}
