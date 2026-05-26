import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "つくり手について | SILMO",
  description: "SILMOのものづくりへの想いと、作品が生まれるまでの工程をご紹介します。",
};

const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: "スケッチ",
    desc: "自然の中を歩き、形を見つける。石、葉、光、水面。インスピレーションをスケッチブックに記します。",
  },
  {
    number: "02",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "銀の準備",
    desc: "純度の高い銀を厳選。素材の質が作品の質。信頼できる産地から仕入れた銀を使います。",
  },
  {
    number: "03",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "打ち出し・成形",
    desc: "ハンマーで銀を叩き、少しずつ形を作っていく。この作業が一番好きな時間。力と繊細さのバランス。",
  },
  {
    number: "04",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "磨き・仕上げ",
    desc: "丁寧に磨いて光沢を出す。表面の質感ひとつで、作品の印象が変わります。時間をかけて仕上げます。",
  },
  {
    number: "05",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "梱包・お届け",
    desc: "ひとつひとつ手書きのメッセージカードと丁寧に梱包。あなたのもとへ、大切にお届けします。",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Header */}
      <section className="py-20 text-center bg-[#E8DDD0]">
        <p className="font-sans text-xs tracking-[0.3em] text-[#9E9082] uppercase mb-4">About the Maker</p>
        <h1 className="font-serif text-4xl md:text-6xl text-[#7B5E4A] mb-4">
          つくり手について
        </h1>
        <div className="w-12 h-px bg-[#C17B5C] mx-auto" />
      </section>

      {/* Artist portrait + intro */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80"
                alt="作家の肖像"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-sans text-xs tracking-[0.3em] text-[#9E9082] uppercase mb-4">Maker</p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#7B5E4A] mb-2">
                田中 みやび
              </h2>
              <p className="font-sans text-sm text-[#9E9082] mb-6 italic">Miyabi Tanaka</p>
              <div className="w-8 h-px bg-[#C17B5C] mb-6" />
              <p className="font-sans text-sm text-[#7B5E4A] leading-relaxed mb-4">
                長野県松本市の山の工房で、毎日銀を叩いています。
                美術大学卒業後、東京の貴金属工房で7年間修行し、
                2018年に独立。自然豊かな松本に移住し、
                SILMOを立ち上げました。
              </p>
              <p className="font-sans text-sm text-[#7B5E4A] leading-relaxed">
                「機械では出せない、手の温もりのある作品を。」
                その想いひとつで、今日も工房に立ちます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-[#E8DDD0]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.3em] text-[#9E9082] uppercase mb-4">Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#7B5E4A]">ものづくりへの想い</h2>
          </div>
          <div className="space-y-6 font-sans text-sm text-[#7B5E4A] leading-[2]">
            <p>
              小さいころから手を動かすことが好きでした。粘土をこねて、木を彫って、
              布を縫って。何かを作るとき、時間が溶けるように過ぎていく感覚が
              たまらなく好きでした。
            </p>
            <p>
              美術大学で金属工芸と出会ったとき、「これだ」と思いました。
              銀はやわらかくて、でも強い。ハンマーで叩くと少しずつ形が変わっていく。
              その変化が目に見える喜びは、他の素材では味わえないものでした。
            </p>
            <p>
              修行時代、師匠に言われた言葉が今も胸にあります。
              「道具は手の延長。素材と対話しなさい。」
              銀と話しながら作っていると、自然とかたちが見えてくる。
              そのような境地に、少しずつ近づいている気がします。
            </p>
            <p>
              松本に来て、自然の中でのものづくりは、私にとって必然でした。
              朝、工房の窓から山を見て、午後は銀を叩く。
              その繰り返しの中で、今日もひとつの作品が生まれます。
            </p>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] text-[#9E9082] uppercase mb-4">Materials</p>
              <h2 className="font-serif text-3xl text-[#7B5E4A] mb-6">素材へのこだわり</h2>
              <div className="w-8 h-px bg-[#C17B5C] mb-6" />
              <div className="space-y-4 font-sans text-sm text-[#7B5E4A] leading-relaxed">
                <p>
                  SILMOでは、スターリングシルバー（純度92.5%の銀）を主に使用しています。
                  適度な硬さと美しい輝きを持ち、ハンドメイドのアクセサリーに最適な素材です。
                </p>
                <p>
                  素材は信頼できる国内の仕入れ先から調達。
                  品質にこだわり、肌に優しい素材のみを使用しています。
                  金属アレルギーが心配な方もご安心ください。
                </p>
                <p>
                  天然石を組み合わせた作品では、
                  石ひとつひとつの個性を活かした作品づくりをしています。
                  同じ作品でも、石によって表情が異なります。
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&q=80"
                alt="工房の道具"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-[#E8DDD0]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.3em] text-[#9E9082] uppercase mb-4">Process</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#7B5E4A]">作品ができるまで</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#FAF8F5] rounded-full flex items-center justify-center text-[#C17B5C] mb-4 shadow-sm">
                  {step.icon}
                </div>
                <p className="font-sans text-xs text-[#9E9082] mb-1">{step.number}</p>
                <h3 className="font-serif text-base text-[#7B5E4A] mb-2">{step.title}</h3>
                <p className="font-sans text-xs text-[#9E9082] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal letter */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-[#E8DDD0] rounded-lg p-8 md:p-12 relative">
            <div className="absolute top-6 left-8 text-[#C17B5C]/30 font-serif text-6xl leading-none">&ldquo;</div>
            <div className="text-center mb-8">
              <p className="font-sans text-xs tracking-[0.3em] text-[#9E9082] uppercase mb-4">Message</p>
              <h2 className="font-serif text-2xl text-[#7B5E4A]">お客様へのメッセージ</h2>
            </div>
            <div className="space-y-4 font-serif text-base text-[#7B5E4A] leading-[2] italic text-center">
              <p>
                この作品を手にとってくださって、ありがとうございます。
              </p>
              <p>
                ひとつひとつに、私の時間と想いが込められています。
                あなたの毎日に寄り添う一点になれたなら、
                それ以上の喜びはありません。
              </p>
              <p>
                大切に使っていただければ、銀は時間とともに
                あなただけの表情を持つようになります。
                その変化も、作品の一部です。
              </p>
              <p>
                いつも、ありがとうございます。
              </p>
            </div>
            <p className="text-right font-serif text-sm text-[#9E9082] mt-8">
              — 田中 みやび
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#E8DDD0] text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-[#7B5E4A] mb-6">
          作品をご覧ください
        </h2>
        <Link
          href="/products"
          className="inline-block bg-[#C17B5C] text-white font-sans text-sm tracking-widest px-10 py-4 rounded-lg hover:bg-[#A86848] transition-colors"
        >
          作品一覧へ
        </Link>
      </section>
    </div>
  );
}
