import Image from "next/image";
import Link from "next/link";

const newArrivals = [
  {
    id: 1,
    name: "Silver Ring No.01",
    price: "¥8,800",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
  },
  {
    id: 3,
    name: "Feather Necklace",
    price: "¥18,500",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
  },
  {
    id: 5,
    name: "Bangle 03",
    price: "¥12,800",
    image:
      "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=800&q=80",
  },
  {
    id: 6,
    name: "Moon Earrings",
    price: "¥7,200",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1920&q=80"
          alt="SILMO Hero"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <p className="text-[#C0C0C0] text-xs tracking-[0.5em] font-sans mb-6 uppercase">
            Silver Accessories Brand
          </p>
          <h1 className="font-serif text-8xl md:text-9xl tracking-[0.3em] text-[#B8960C] mb-6">
            SILMO
          </h1>
          <div className="w-16 h-px bg-[#B8960C] mx-auto mb-6" />
          <p className="text-[#C0C0C0] text-lg md:text-xl tracking-widest font-sans mb-12">
            手仕事から生まれる、一点のきらめき。
          </p>
          <Link
            href="/products"
            className="inline-block border border-[#B8960C] text-[#B8960C] hover:bg-[#B8960C] hover:text-black px-10 py-4 text-sm tracking-[0.3em] font-sans transition-all duration-300"
          >
            COLLECTION を見る
          </Link>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#C0C0C0]/60">
          <span className="text-xs tracking-widest font-sans">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#C0C0C0]/60 to-transparent" />
        </div>
      </section>

      {/* New Arrival Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#B8960C] text-xs tracking-[0.5em] font-sans mb-3">
              NEW ARRIVAL
            </p>
            <h2 className="font-serif text-4xl tracking-[0.2em] text-white mb-4">
              新着コレクション
            </h2>
            <div className="w-12 h-px bg-[#B8960C] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
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
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-white mb-2 tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-[#B8960C] font-sans text-sm tracking-wider">
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block border border-[#2A2A2A] text-[#C0C0C0] hover:border-[#B8960C] hover:text-[#B8960C] px-10 py-3 text-xs tracking-[0.3em] font-sans transition-all duration-300"
            >
              すべて見る
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Concept Section */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-full h-px bg-[#B8960C]/30 mb-16" />
          <p className="text-[#B8960C] text-xs tracking-[0.5em] font-sans mb-8">
            OUR PHILOSOPHY
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-relaxed mb-8">
            「本物」だけが持つ、静かな輝き
          </h2>
          <p className="text-[#C0C0C0] font-sans text-sm leading-8 mb-6">
            SILMOは、一人の職人の手から生まれるシルバーアクセサリーブランドです。
            大量生産では決して生まれない、微かな揺らぎと温もり。
            それこそが、私たちが追い求める「本物」の美しさです。
          </p>
          <p className="text-[#C0C0C0] font-sans text-sm leading-8 mb-10">
            素材はすべて国内外から厳選した純銀・スターリングシルバーを使用。
            伝統的な彫金技法と現代的なデザイン感覚を融合させながら、
            身に着ける人の日常に寄り添うアクセサリーを作り続けています。
          </p>
          <div className="w-full h-px bg-[#B8960C]/30" />
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=80"
                alt="SILMO Workshop"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="lg:pl-8">
              <p className="text-[#B8960C] text-xs tracking-[0.5em] font-sans mb-6">
                ABOUT SILMO
              </p>
              <h2 className="font-serif text-4xl text-white leading-tight mb-6">
                職人の手が生み出す、<br />
                唯一無二の輝き
              </h2>
              <div className="w-12 h-px bg-[#B8960C] mb-8" />
              <p className="text-[#C0C0C0] font-sans text-sm leading-8 mb-8">
                東京・渋谷のアトリエで、毎日一つひとつ丁寧に制作しています。
                同じデザインでも、手仕事ならではのわずかな個性が宿ります。
                その「一点もの」の価値を、ぜひあなた自身の手で感じてください。
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-[#B8960C] font-sans text-sm tracking-widest hover:gap-5 transition-all duration-300"
              >
                詳しく見る
                <span className="w-8 h-px bg-[#B8960C]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram-style Gallery Row */}
      <section className="py-16 px-4 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#C0C0C0] text-xs tracking-[0.4em] font-sans">
              @silmo_official
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
              "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
              "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80",
              "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=400&q=80",
              "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
              "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400&q=80",
            ].map((src, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
