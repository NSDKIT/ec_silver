import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SILMOの物語 | ブランドストーリー",
  description:
    "SILMOのブランドストーリー。なぜ銀なのか、素材へのこだわり、制作プロセス、そして創業者からのメッセージ。プレミアムシルバーアクセサリーへの思いをすべてお伝えします。",
};

const brandValues = [
  {
    number: "01",
    title: "誠実な素材",
    description:
      "スターリングシルバー925（純銀92.5%以上）のみを使用します。妥協なく厳選した素材だけが、SILMOの作品になります。素材の誠実さが、作品の誠実さにつながると信じています。",
  },
  {
    number: "02",
    title: "手仕事の温もり",
    description:
      "機械大量生産ではなく、職人の手仕事を大切にします。一点一点に職人の時間と技術が宿り、まったく同じ作品は世界に一つとして存在しません。その唯一性こそが、本物の価値です。",
  },
  {
    number: "03",
    title: "時代を超えるデザイン",
    description:
      "今季のトレンドではなく、10年後・20年後も愛され続けるデザインを追求します。流行に左右されない普遍的な美しさを宿したアクセサリーを、SILMOはお届けし続けます。",
  },
  {
    number: "04",
    title: "お客様との繋がり",
    description:
      "お客様は単なる購入者ではなく、SILMOのストーリーを共に紡ぐ仲間です。ご購入後のアフターケア、修理対応、そして一つ一つへの誠意あるコミュニケーションを大切にしています。",
  },
  {
    number: "05",
    title: "地球への配慮",
    description:
      "環境への責任を持つブランドであり続けます。過剰包装を避け、リサイクル可能な素材を選び、製造工程での廃棄物削減に努めます。美しい地球があってこそ、美しい創造があります。",
  },
];

const processSteps = [
  {
    step: "01",
    title: "デザイン構想",
    description:
      "すべてはスケッチから始まります。自然の形、記憶の断片、感情の動き——インスピレーションをノートに書き留め、何度も描き直します。「これだ」と確信が持てるまで、先へは進みません。",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
  },
  {
    step: "02",
    title: "素材選定",
    description:
      "デザインが決まったら、そのデザインに最も適した素材を選びます。スターリングシルバー925の中でも、厚み・純度・質感を確認し、作品ごとに最適なものを厳選します。",
    image: "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=800&q=80",
  },
  {
    step: "03",
    title: "製作",
    description:
      "職人の手によって、銀の板や線を切り、叩き、溶かし、形を作ります。このプロセスには時間がかかります。一つの作品に数時間から数十時間を費やすこともあります。急ぐことは、質を落とすことです。",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=80",
  },
  {
    step: "04",
    title: "磨き仕上げ",
    description:
      "形が完成したら、研磨の工程に入ります。粗い研磨から細かい研磨へ、段階を踏んで磨き上げていきます。最終的には職人の手と布だけで仕上げます。この工程が、SILMOの輝きを生み出します。",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
  },
  {
    step: "05",
    title: "品質検査",
    description:
      "完成した作品は、必ず作り手自身が最終確認します。強度、見た目、質感——あらゆる角度から検査し、SILMOの基準を満たしたものだけが出荷されます。妥協は一切ありません。",
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80",
  },
];

const mediaItems = [
  {
    outlet: "Handmade Japan Magazine",
    date: "2023年11月号",
    title: "「銀を纏う、物語を生きる」——SILMOの哲学",
    description: "ハンドメイドジュエリーの新世代として特集。創業から5年で確立されたブランドアイデンティティに迫る。",
  },
  {
    outlet: "Japan Handmade Jewelry Award",
    date: "2022年",
    title: "審査員特別賞 受賞",
    description: "素材へのこだわりと時代を超えるデザイン哲学が高く評価され、5年連続でのノミネートの末、受賞を果たした。",
  },
  {
    outlet: "Craft Story Web",
    date: "2023年3月",
    title: "「職人に聞く、銀との対話」インタビュー",
    description: "創業者・渡辺誠一郎へのロングインタビュー。銀細工を始めたきっかけから、SILMOが目指す世界観まで詳細に語る。",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#1A1A2E]">
      {/* Page Hero */}
      <section className="py-20 md:py-28 text-center border-b border-[#2E2E50]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-display text-xs tracking-[0.5em] text-[#C9A84C] uppercase mb-6">Brand Story</p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] mb-6 leading-tight">SILMO の物語</h1>
          <div className="w-16 h-px bg-[#C9A84C]/50 mx-auto mb-8" />
          <p className="font-display text-lg italic text-[#F5F0E8]/60 tracking-wide">
            すべての銀は、物語を持っている。
          </p>
        </div>
      </section>

      {/* なぜ、銀なのか */}
      <section className="py-20 md:py-28 bg-[#F5F0E8]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <p className="font-display text-xs tracking-[0.5em] text-[#C9A84C] uppercase mb-4">Chapter 01</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A2E] mb-2">なぜ、銀なのか</h2>
            <div className="w-12 h-px bg-[#C9A84C] mt-4" />
          </div>
          <div className="space-y-6 text-[#1A1A2E]/80 font-sans leading-loose text-base md:text-lg">
            <p>
              銀は、時とともに表情を変える稀有な素材です。金が変わらぬ輝きを持ち続けるのに対し、銀は空気と反応し、酸化し、くすみ、そしてまた磨けば輝きを取り戻す。その「変化する」という性質こそが、私には銀の最大の魅力に映りました。
            </p>
            <p>
              人の一生も、銀に似ていると思います。若いときの輝き、年を重ねて深みを増す表情、大切な人に磨かれてまた輝く瞬間——銀のアクセサリーは、それを身につける人と共に歳を重ね、その人の人生の証人となります。金は「永遠」を象徴しますが、銀は「今を生きること」を象徴する素材なのです。
            </p>
            <p>
              また、銀には月の光を連想させる白い輝きがあります。日本では古来より、月は美しさと哀愁の象徴とされてきました。SILMOの作品が持つ、どこか物悲しいような美しさは、この「月の金属」である銀の本質的な性格から来ているのかもしれません。
            </p>
            <p>
              技術的にも、銀は職人に誠実に応える素材です。硬すぎず柔らかすぎず、熱を加えれば形を変え、冷えれば安定する。鎚で叩けば強くなり、削れば繊細な表情を見せる。銀は職人の技術と感性を忠実に映す鏡のような素材です。だからこそ、誤魔化しがきかない。誠実な仕事をした分だけ、誠実な作品が生まれる。そこに私は深い誠実さを感じ、惹かれ続けています。
            </p>
            <p>
              世界の歴史を見ても、銀は特別な位置を占めてきました。古代エジプトでは金より珍重され、ヨーロッパの王族の食器や装飾品に使われ、日本でも江戸の職人たちが精巧な銀細工を生み出してきた。その長い歴史の上に立ちながら、現代の感覚で新しい表現を試みること——それがSILMOの使命です。
            </p>
          </div>
        </div>
      </section>

      {/* 素材へのこだわり */}
      <section className="py-20 md:py-28 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <p className="font-display text-xs tracking-[0.5em] text-[#C9A84C] uppercase mb-4">Chapter 02</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0E8] mb-2">素材へのこだわり</h2>
            <div className="w-12 h-px bg-[#C9A84C] mt-4" />
          </div>
          <div className="space-y-6 text-[#F5F0E8]/70 font-sans leading-loose text-base md:text-lg">
            <p>
              SILMOが使用するのは、Sterling Silver 925——純銀92.5%以上、残り7.5%に銅などの金属を混合した合金です。これはジュエリーとして最も広く使われている銀の規格であり、純銀（999）よりも硬く耐久性があり、日常使いに適しています。
            </p>
            <p>
              しかし、スターリングシルバーであれば何でもよい、というわけではありません。SILMOでは、信頼できる国内の仕入れ先から、ロットごとに品質確認を行った素材だけを使用します。同じ925でも、混合金属の比率や精製方法によって、色合いや仕上がりは微妙に異なります。私たちはその微妙な差異を見逃しません。
            </p>
            <p>
              また、SILMOでは仕上げにロジウムメッキを施していません。メッキは確かに輝きを長持ちさせますが、それは「銀本来の顔」を隠すことでもあります。SILMOは銀そのものと向き合い、経年変化も含めて素材の美しさとして捉えています。変化したときの磨き直しも、SILMOではアフターサービスとして対応しています。
            </p>
            <p>
              ストーンを使う作品では、天然石にこだわります。ガラスや人工石は使いません。天然石にも一つ一つ個体差があり、その個体差こそが、その作品が「世界に一つ」であることの証明です。同じデザインでも、異なる石を使えば、異なる表情が生まれる——それがSILMOのものづくりの豊かさです。
            </p>
          </div>
        </div>
      </section>

      {/* 制作のプロセス */}
      <section id="craft" className="py-20 md:py-28 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-display text-xs tracking-[0.5em] text-[#C9A84C] uppercase mb-4">Chapter 03</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A2E] mb-4">制作のプロセス</h2>
            <div className="w-12 h-px bg-[#C9A84C] mx-auto" />
          </div>
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-display text-4xl text-[#C9A84C]/30 font-light">{step.step}</span>
                    <div className="w-8 h-px bg-[#C9A84C]/40" />
                    <h3 className="font-serif text-xl text-[#1A1A2E]">{step.title}</h3>
                  </div>
                  <p className="font-sans text-[#1A1A2E]/70 leading-loose text-sm md:text-base">{step.description}</p>
                </div>
                <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1A1A2E]/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section id="philosophy" className="py-20 md:py-28 bg-[#1A1A2E]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-display text-xs tracking-[0.5em] text-[#C9A84C] uppercase mb-4">Chapter 04</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0E8] mb-4">SILMOの誓い</h2>
            <p className="font-display text-sm italic text-[#F5F0E8]/50 tracking-wide">ブランドバリュー</p>
            <div className="w-12 h-px bg-[#C9A84C]/50 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandValues.map((value, index) => (
              <div
                key={index}
                className={`border border-[#2E2E50] p-8 hover:border-[#C9A84C]/40 transition-colors ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <p className="font-display text-3xl text-[#C9A84C]/20 font-light mb-4">{value.number}</p>
                <h3 className="font-serif text-[#C9A84C] text-lg mb-4">{value.title}</h3>
                <p className="text-[#F5F0E8]/60 font-sans text-sm leading-loose">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 作り手より */}
      <section className="py-20 md:py-28 bg-[#F5F0E8]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-display text-xs tracking-[0.5em] text-[#C9A84C] uppercase mb-4">Chapter 05</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A2E] mb-4">作り手より</h2>
            <div className="w-12 h-px bg-[#C9A84C] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            <div className="md:col-span-1">
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="創業者 渡辺誠一郎"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-serif text-[#1A1A2E] text-lg">渡辺 誠一郎</p>
              <p className="font-sans text-[#1A1A2E]/50 text-xs tracking-widest mt-1">SILMO Founder & Artisan</p>
            </div>
            <div className="md:col-span-2">
              <div className="space-y-5 text-[#1A1A2E]/75 font-sans leading-loose text-sm md:text-base">
                <p className="font-display text-2xl italic text-[#1A1A2E] leading-relaxed mb-6">
                  "作るたびに、銀はまだ私に何かを教えてくれます。"
                </p>
                <p>
                  SILMOを始めたとき、私にあったのは「本当に好きなものを作りたい」という思いだけでした。売れるかどうかわからない。市場があるかどうかわからない。それでも、妥協せずに作り続けることだけを決めていました。
                </p>
                <p>
                  創業から7年経った今、あの選択は正しかったと確信しています。SILMOの作品を長年使い続けてくださるお客様からお手紙をいただくとき、「母のお葬式にSILMOの指輪を着けていきました」というメッセージをいただくとき、私はこの仕事を選んでよかったと、心の底から思います。
                </p>
                <p>
                  銀は正直な素材です。不誠実な気持ちで作れば、それが作品に出る。丁寧に向き合えば、その誠実さが伝わる。毎日アトリエに立つたびに、銀との対話の中で、自分自身も鍛えられていく気がします。
                </p>
                <p>
                  これからも、SILMOは変わらず一点一点に向き合い続けます。流行に媚びず、数を追わず、ただ「本物」だけを作り続けること。それが、SILMOを信じてくださるすべてのお客様への、私の誓いです。
                </p>
                <p>
                  あなたがSILMOを選んでくださったことに、心から感謝します。その作品があなたの人生の一部となり、いつかまた、次の誰かへ受け継がれていくことを、願っています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="py-20 md:py-28 bg-[#252545]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-display text-xs tracking-[0.5em] text-[#C9A84C] uppercase mb-4">Press</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0E8] mb-4">メディア・受賞歴</h2>
            <div className="w-12 h-px bg-[#C9A84C]/50 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaItems.map((item, index) => (
              <div key={index} className="bg-[#1A1A2E] border border-[#2E2E50] p-8 hover:border-[#C9A84C]/40 transition-colors">
                <p className="font-sans text-xs text-[#C9A84C] tracking-widest uppercase mb-1">{item.outlet}</p>
                <p className="font-sans text-xs text-[#F5F0E8]/30 mb-4">{item.date}</p>
                <h3 className="font-serif text-[#F5F0E8] text-base mb-3 leading-snug">{item.title}</h3>
                <p className="text-[#F5F0E8]/50 font-sans text-xs leading-loose">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#1A1A2E] text-center border-t border-[#2E2E50]">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-[#F5F0E8] mb-6">あなただけの一点を、見つけてください。</h2>
          <Link
            href="/products"
            className="inline-block border border-[#C9A84C] text-[#C9A84C] px-10 py-3 font-sans text-xs tracking-[0.3em] uppercase hover:bg-[#C9A84C] hover:text-[#1A1A2E] transition-all duration-300"
          >
            コレクションを見る
          </Link>
        </div>
      </section>
    </div>
  );
}
