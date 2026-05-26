import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    id: "1",
    name: "月の指輪",
    price: "¥9,800",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    tag: "人気",
  },
  {
    id: "2",
    name: "羽のネックレス",
    price: "¥18,500",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    tag: "おすすめ",
  },
  {
    id: "3",
    name: "草のバングル",
    price: "¥12,800",
    image: "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=800&q=80",
    tag: "新作",
  },
  {
    id: "4",
    name: "雫のピアス",
    price: "¥7,200",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    tag: "定番",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80"
          alt="手作り銀アクセサリー"
          fill
          className="object-cover"
          priority
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#7B5E4A]/20 via-[#FAF8F5]/10 to-[#7B5E4A]/40" />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <p className="font-sans text-sm tracking-[0.3em] text-white/90 mb-4 uppercase">
            Handmade Silver Jewelry
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white leading-tight mb-6 drop-shadow-lg">
            あなたへの、
            <br />
            てしごと。
          </h1>
          <p className="font-sans text-base md:text-lg text-white/85 mb-10 leading-relaxed">
            ひとつひとつ、手で生まれる銀のかがやき。
          </p>
          <Link
            href="/products"
            className="inline-block bg-[#C17B5C] text-white font-sans text-sm tracking-widest px-10 py-4 rounded-lg hover:bg-[#A86848] transition-colors shadow-md"
          >
            作品を見る
          </Link>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* Brand statement */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="font-sans text-xs tracking-[0.3em] text-[#9E9082] uppercase mb-4">Our Story</p>
          <p className="font-serif text-2xl md:text-3xl text-[#7B5E4A] leading-relaxed">
            素材と向き合い、<br className="md:hidden" />手でかたちをつくる。
          </p>
          <div className="mt-4 w-12 h-px bg-[#C17B5C] mx-auto" />
          <p className="mt-6 font-sans text-sm text-[#9E9082] leading-relaxed">
            SILMOのアクセサリーはすべてハンドメイド。
            ひとつとして同じものはありません。
            自然のかたちにインスピレーションを受け、
            銀を素材に、温もりのある作品をお届けします。
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="font-sans text-xs tracking-[0.3em] text-[#9E9082] uppercase mb-2">Collection</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#7B5E4A]">手しごとの作品</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
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
                  <span className="absolute top-2 left-2 bg-[#C17B5C] text-white text-xs font-sans px-2 py-0.5 rounded">
                    {product.tag}
                  </span>
                </div>
                <div className="mt-3 px-1">
                  <p className="font-serif text-base text-[#7B5E4A] group-hover:text-[#C17B5C] transition-colors">
                    {product.name}
                  </p>
                  <p className="mt-1 font-sans text-sm text-[#C17B5C] font-semibold">
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-block border border-[#C17B5C] text-[#C17B5C] font-sans text-sm tracking-widest px-8 py-3 rounded-lg hover:bg-[#C17B5C] hover:text-white transition-colors"
            >
              すべての作品を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Artist section */}
      <section className="py-16 bg-[#E8DDD0]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80"
                alt="つくり手の肖像"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-sans text-xs tracking-[0.3em] text-[#9E9082] uppercase mb-4">
                Maker&apos;s Note
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#7B5E4A] mb-6">
                つくり手の想い
              </h2>
              <div className="w-12 h-px bg-[#C17B5C] mb-6" />
              <blockquote className="font-serif text-lg text-[#7B5E4A] italic leading-relaxed mb-6">
                &ldquo;素材と向き合い、ひとつひとつ手でつくる。
                機械ではなく、人の手が生み出す温もりを
                お届けします。&rdquo;
              </blockquote>
              <p className="font-sans text-sm text-[#9E9082] leading-relaxed mb-8">
                山の工房で、自然の音を聞きながら
                毎日銀を叩いています。
                不完全な中にある美しさを大切に、
                あなたのもとへ届けたい。
              </p>
              <Link
                href="/about"
                className="inline-block bg-[#7B5E4A] text-white font-sans text-sm tracking-widest px-8 py-3 rounded-lg hover:bg-[#5E4535] transition-colors"
              >
                つくり手について
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop / Process teaser */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&q=80"
          alt="工房の様子"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#7B5E4A]/60" />
        <div className="relative z-10 text-center px-4">
          <p className="font-sans text-xs tracking-[0.3em] text-white/70 uppercase mb-4">
            Process
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            工房からあなたの手へ
          </h2>
          <p className="font-sans text-sm text-white/80 max-w-md mx-auto mb-8 leading-relaxed">
            デザインのスケッチから始まり、
            ひとつひとつ銀を叩いて磨いて仕上げる。
            その過程にも、込められた想いがあります。
          </p>
          <Link
            href="/about"
            className="inline-block border border-white/70 text-white font-sans text-sm tracking-widest px-8 py-3 rounded-lg hover:bg-white hover:text-[#7B5E4A] transition-colors"
          >
            ものづくりの工程を見る
          </Link>
        </div>
      </section>

      {/* Gift section */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="font-sans text-xs tracking-[0.3em] text-[#9E9082] uppercase mb-2">Gift</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#7B5E4A] mb-4">
              おすすめのギフト
            </h2>
            <p className="font-sans text-sm text-[#9E9082] max-w-md mx-auto">
              大切な人へ、自分へのご褒美に。
              ひとつひとつ丁寧につくった作品を
              ギフトボックスに入れてお届けします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "誕生日のおくりもの",
                text: "特別な日に、特別な一点を",
                href: "/products?tag=birthday",
              },
              {
                title: "記念日のアクセサリー",
                text: "二人の思い出になる銀細工",
                href: "/products?tag=anniversary",
              },
              {
                title: "自分へのご褒美",
                text: "毎日を彩る、ていねいな一点",
                href: "/products?tag=self",
              },
            ].map(({ title, text, href }) => (
              <Link
                key={title}
                href={href}
                className="group block bg-[#E8DDD0] rounded-lg p-8 text-center hover:bg-[#DDD0C0] transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-[#C17B5C]/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#C17B5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-[#7B5E4A] mb-2 group-hover:text-[#C17B5C] transition-colors">
                  {title}
                </h3>
                <p className="font-sans text-sm text-[#9E9082]">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#E8DDD0]">
        <div className="max-w-lg mx-auto px-4 text-center">
          <p className="font-sans text-xs tracking-[0.3em] text-[#9E9082] uppercase mb-4">Newsletter</p>
          <h2 className="font-serif text-2xl md:text-3xl text-[#7B5E4A] mb-4">
            新作・お知らせを受け取る
          </h2>
          <p className="font-sans text-sm text-[#9E9082] mb-8 leading-relaxed">
            新作の入荷情報や制作の裏話など、
            SILMOのニュースをお届けします。
          </p>
          <form className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="メールアドレス"
              className="flex-1 px-4 py-3 rounded-lg bg-[#FAF8F5] border border-[#E8DDD0] text-[#7B5E4A] placeholder-[#9E9082] font-sans text-sm focus:outline-none focus:border-[#C17B5C] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#C17B5C] text-white font-sans text-sm px-5 py-3 rounded-lg hover:bg-[#A86848] transition-colors shrink-0"
            >
              登録
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
