import Image from "next/image";
import Link from "next/link";

const commitments = [
  {
    icon: "◆",
    title: "素材へのこだわり",
    description:
      "国内外から厳選した純銀・スターリングシルバー（925）のみを使用。不純物の少ない良質な素材だけが、あの柔らかな光沢を生み出します。チェーンや金具に至るまで、妥協なくシルバー素材を使用しています。",
  },
  {
    icon: "◇",
    title: "技法へのこだわり",
    description:
      "彫金・ロストワックス・鍛造など、伝統的な技法を一人の職人が習得。現代の機械では再現できない、手仕事ならではの微細なテクスチャと有機的なフォルムを大切にしています。すべての工程を一貫して自社アトリエで行います。",
  },
  {
    icon: "◈",
    title: "デザインへのこだわり",
    description:
      "自然界のモチーフ（葉、月、羽根など）から着想を得たデザインは、時代に左右されないタイムレスな美しさを追求しています。日常のどんなシーンにも自然に溶け込みながら、さりげない個性を放つアクセサリーを目指しています。",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=80"
          alt="SILMO Workshop"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#B8960C] text-xs tracking-[0.5em] font-sans mb-4 uppercase">
            Our Story
          </p>
          <h1 className="font-serif text-6xl md:text-7xl tracking-[0.3em] text-white">
            ABOUT SILMO
          </h1>
          <div className="w-12 h-px bg-[#B8960C] mx-auto mt-6" />
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#B8960C] text-xs tracking-[0.5em] font-sans mb-8 text-center">
            BRAND STORY
          </p>
          <h2 className="font-serif text-3xl text-white text-center mb-12 leading-relaxed">
            銀の輝きに宿る、職人の魂
          </h2>

          <div className="space-y-6 text-[#C0C0C0] font-sans text-sm leading-8">
            <p>
              SILMOは、2018年に東京・渋谷のアトリエで生まれたシルバーアクセサリーブランドです。ブランド名「SILMO」は、ラテン語で「輝き」「閃き」を意味する言葉から着想を得ました。
            </p>
            <p>
              創業者の山田太郎は、大学卒業後に渡欧し、イタリア・フィレンツェで彫金を学びました。現地の職人文化に触れ、「手仕事の価値」と「素材への敬意」を心の芯に刻んで帰国。東京のアトリエで一から制作環境を整え、現在に至ります。
            </p>
            <p>
              大量生産品が溢れる現代において、SILMOはあえて少量生産・一点ものにこだわり続けています。同じデザインであっても、手仕事から生まれるわずかなゆらぎが、着ける人だけの「一点もの」を作り出します。それこそがシルバーアクセサリーの本質的な価値だと、私たちは信じています。
            </p>
            <p>
              素材は国内外から厳選したスターリングシルバー（純度92.5%）を使用。すべての工程を自社アトリエで行い、完成した商品は一つひとつ品質検査を経てお客様のもとへ届けられます。
            </p>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24 bg-[#1A1A1A] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#B8960C] text-xs tracking-[0.5em] font-sans mb-4">
              OUR COMMITMENTS
            </p>
            <h2 className="font-serif text-4xl text-white">三つのこだわり</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((item) => (
              <div
                key={item.title}
                className="bg-[#0D0D0D] border border-[#2A2A2A] p-8 hover:border-[#B8960C] transition-all duration-300"
              >
                <div className="text-[#B8960C] text-2xl mb-6">{item.icon}</div>
                <h3 className="font-serif text-xl text-white mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-[#C0C0C0] font-sans text-sm leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop/Process Images */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#B8960C] text-xs tracking-[0.5em] font-sans mb-4">
              OUR ATELIER
            </p>
            <h2 className="font-serif text-4xl text-white">
              制作の現場から
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=80"
                alt="Workshop"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&q=80"
                alt="Artist at work"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Artist Message */}
      <section className="py-24 bg-[#0D0D0D] px-4 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] overflow-hidden max-w-sm mx-auto lg:mx-0">
              <Image
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&q=80"
                alt="Artist"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="lg:pl-8">
              <p className="text-[#B8960C] text-xs tracking-[0.5em] font-sans mb-6">
                FROM THE MAKER
              </p>
              <h2 className="font-serif text-3xl text-white mb-2">
                作り手より
              </h2>
              <p className="text-[#C0C0C0] font-sans text-sm mb-8">
                山田 太郎 / Founder & Silversmith
              </p>
              <div className="w-12 h-px bg-[#B8960C] mb-8" />
              <div className="space-y-5 text-[#C0C0C0] font-sans text-sm leading-8">
                <p>
                  「どうしてシルバーなのか」とよく聞かれます。私の答えは、「シルバーだけが持つ、あの温かみと冷たさの同居する独特の輝きに、今もなお惹かれ続けているから」です。
                </p>
                <p>
                  金属でありながら、光の当たり方や着ける人の体温によって表情を変える。その繊細さが、職人としての私の挑戦をいつも新鮮にしてくれます。
                </p>
                <p>
                  SILMOのアクセサリーを手に取ってくださった方が、何年後かに「やっぱりこれが好き」と思えるものを作り続けたいと思っています。流行を超えた、静かで確かな美しさを、これからもお届けします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A1A] border-t border-[#2A2A2A] text-center px-4">
        <p className="text-[#C0C0C0] font-sans text-sm tracking-widest mb-6">
          SILMOの世界をもっと感じていただくために
        </p>
        <h2 className="font-serif text-3xl text-white mb-8">
          コレクションを見る
        </h2>
        <Link
          href="/products"
          className="inline-block border border-[#B8960C] text-[#B8960C] hover:bg-[#B8960C] hover:text-black px-12 py-4 text-sm tracking-[0.3em] font-sans transition-all duration-300"
        >
          COLLECTION
        </Link>
      </section>
    </div>
  );
}
