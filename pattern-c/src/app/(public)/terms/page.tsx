import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | SILMO",
};

export default function TermsPage() {
  return (
    <div className="bg-[#FAF8F5]">
      <section className="py-16 text-center bg-[#E8DDD0]">
        <h1 className="font-serif text-3xl md:text-4xl text-[#7B5E4A]">利用規約</h1>
        <p className="mt-3 font-sans text-xs text-[#9E9082]">最終更新日：2024年1月1日</p>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-8 font-sans text-sm text-[#7B5E4A] leading-[2]">
          <p>
            SILMO（以下「当店」）のウェブサイト（以下「本サービス」）をご利用いただく前に、
            以下の利用規約をよくお読みください。
            本サービスをご利用いただくことで、本規約に同意いただいたものとみなします。
          </p>

          <section>
            <h2 className="font-serif text-xl text-[#7B5E4A] mb-3">第1条（適用）</h2>
            <p>
              本規約は、当店が本サービスを通じて提供するサービスの利用条件を定めるものです。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[#7B5E4A] mb-3">第2条（購入について）</h2>
            <p>
              当店の商品は、すべてハンドメイドのため、一点一点に個体差があります。
              商品画像は可能な限り実物に近い色調で掲載していますが、
              お使いのモニターの環境によって異なる場合があります。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[#7B5E4A] mb-3">第3条（キャンセル・返品）</h2>
            <p>
              ハンドメイド作品の特性上、お客様都合によるキャンセル・返品・交換はお受けできません。
              ただし、商品の破損・不具合・誤送など当店に起因する場合は、
              到着後7日以内にご連絡いただければ対応いたします。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[#7B5E4A] mb-3">第4条（禁止事項）</h2>
            <ul className="list-disc list-inside space-y-1 text-[#9E9082]">
              <li>法令または公序良俗に違反する行為</li>
              <li>当店または第三者の知的財産権を侵害する行為</li>
              <li>虚偽の情報を登録する行為</li>
              <li>本サービスの正常な運営を妨げる行為</li>
              <li>当店の商品を無断で転売・商業利用する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[#7B5E4A] mb-3">第5条（知的財産権）</h2>
            <p>
              当サイト上のすべてのコンテンツ（文章、写真、デザイン等）の著作権は
              当店に帰属します。無断転載・複製はお断りいたします。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[#7B5E4A] mb-3">第6条（免責事項）</h2>
            <p>
              当店は、本サービスの内容について可能な限り正確な情報を提供するよう努めますが、
              その完全性・正確性を保証するものではありません。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[#7B5E4A] mb-3">第7条（準拠法・管轄裁判所）</h2>
            <p>
              本規約の解釈は日本法に準拠し、本サービスに関する紛争については
              長野地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
