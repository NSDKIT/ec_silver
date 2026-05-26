import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブランドについて | ARGENT",
  description:
    "シルバーアクセサリーブランド ARGENT（アルジャン）のブランドストーリーと私たちの想い。",
};

const values = [
  {
    title: "シンプル",
    en: "Simple",
    desc: "余計なものをそぎ落とし、本質的な美しさを追求します。引き算のデザインが生む、静かな存在感。",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <rect x="3" y="3" width="18" height="18" />
      </svg>
    ),
  },
  {
    title: "上質",
    en: "Quality",
    desc: "Sterling Silver 925を使用し、一点一点を職人が丁寧に手作りしています。素材の良さが長く続く美しさをつくります。",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "永続性",
    en: "Timeless",
    desc: "流行に左右されないデザインは、何年経っても輝き続けます。毎日身につけることで、あなたの一部になっていく。",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const process = [
  {
    step: "01",
    title: "デザイン",
    desc: "スケッチから始まり、何度も試作を重ねて最終デザインを決定します。",
  },
  {
    step: "02",
    title: "素材選び",
    desc: "国内外から厳選した Sterling Silver 925 のみを使用。品質を妥協しません。",
  },
  {
    step: "03",
    title: "手作業",
    desc: "熟練の職人が一点一点、丁寧に手作りします。機械では出せない温かみがあります。",
  },
  {
    step: "04",
    title: "品質検査",
    desc: "出荷前に全商品を厳格に検査。納得のいくものだけをお届けします。",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-4">
                About ARGENT
              </p>
              <h1 className="text-5xl font-light text-[#111111] leading-tight tracking-tight mb-8">
                私たちについて
              </h1>
              <div className="w-8 h-px bg-[#111111] mb-8" />
              <p className="text-base font-light text-[#888888] leading-relaxed mb-6">
                ARGENT（アルジャン）は、東京発のシルバーアクセサリーブランドです。
                「銀」を意味するフランス語を冠した私たちのブランドは、
                2018年の創業以来、シンプルで上質なアクセサリーを作り続けています。
              </p>
              <p className="text-base font-light text-[#888888] leading-relaxed mb-6">
                流行を追うのではなく、時代を超えて愛されるデザインを。
                素材の美しさを最大限に引き出す、引き算のものづくりが私たちのスタイルです。
              </p>
              <p className="text-base font-light text-[#888888] leading-relaxed">
                毎日身につけることで、あなただけの輝きへと育っていく。
                そんなアクセサリーをお届けしたいと思っています。
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80"
                  alt="ARGENT アトリエ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-8 -right-4 bg-white p-6 border border-[#E0E0E0] shadow-sm hidden lg:block">
                <p className="text-3xl font-light text-[#111111] mb-1">2018</p>
                <p className="text-xs text-[#888888] font-light tracking-widest uppercase">
                  Founded
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-4">
              Our Values
            </p>
            <h2 className="text-3xl font-light text-[#111111] tracking-tight">
              大切にしていること
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((val) => (
              <div key={val.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 border border-[#E0E0E0] text-[#888888] mb-6">
                  {val.icon}
                </div>
                <p className="text-xs tracking-[0.3em] text-[#888888] uppercase mb-2">
                  {val.en}
                </p>
                <h3 className="text-xl font-light text-[#111111] mb-4">
                  {val.title}
                </h3>
                <p className="text-sm font-light text-[#888888] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-4">
              Our Process
            </p>
            <h2 className="text-3xl font-light text-[#111111] tracking-tight">
              ものづくりのプロセス
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={step.step} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-4 left-full w-full h-px bg-[#E0E0E0] z-0" />
                )}
                <div className="relative z-10">
                  <p className="text-4xl font-light text-[#E0E0E0] mb-4">
                    {step.step}
                  </p>
                  <h3 className="text-base font-normal text-[#111111] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm font-light text-[#888888] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-6">
            Collection
          </p>
          <h2 className="text-4xl font-light text-white tracking-tight mb-8">
            ARGENTの世界へ
          </h2>
          <a
            href="/products"
            className="inline-block px-12 py-3 border border-white text-white text-sm font-light tracking-widest uppercase hover:bg-white hover:text-[#111111] transition-colors"
          >
            コレクションを見る
          </a>
        </div>
      </section>
    </div>
  );
}
