import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | ARGENT",
};

const sections = [
  {
    title: "第1条（適用）",
    content:
      "本規約は、ARGENT（アルジャン）（以下「当社」）が提供するECサービス（以下「本サービス」）の利用条件を定めるものです。お客様は本規約に同意した上で本サービスをご利用ください。",
  },
  {
    title: "第2条（会員登録）",
    content:
      "本サービスの一部機能をご利用いただくには、会員登録が必要です。会員登録の際は、正確な情報をご提供ください。虚偽の情報を登録した場合、当社は会員資格を取り消すことができます。",
  },
  {
    title: "第3条（商品の購入）",
    content:
      "商品の購入は、お客様が注文を確定し、当社が注文確認メールを送信した時点で成立します。在庫状況によっては、ご注文をお断りする場合があります。",
  },
  {
    title: "第4条（価格・料金）",
    content:
      "商品価格は税込で表示しています。配送料は別途かかる場合があります（5,000円以上のご注文で無料）。価格は予告なく変更される場合があります。",
  },
  {
    title: "第5条（支払い）",
    content:
      "支払い方法はクレジットカード（Visa / Mastercard / JCB / Amex）およびコンビニ払いに対応しています。クレジットカード情報はSSLにより暗号化され、安全に処理されます。",
  },
  {
    title: "第6条（配送）",
    content:
      "商品はご注文確認後、3〜5営業日以内に発送いたします。お届け先の状況により、配送に遅延が生じる場合があります。",
  },
  {
    title: "第7条（返品・交換）",
    content:
      "商品到着後8日以内に未使用・未開封の状態であれば返品・交換を承ります。返品送料はお客様の負担となります。ただし、商品の不具合による返品の場合は、当社が送料を負担します。",
  },
  {
    title: "第8条（禁止事項）",
    content:
      "お客様は以下の行為を行ってはなりません。\n・法令または本規約に違反する行為\n・虚偽の情報を提供する行為\n・他のお客様または第三者への迷惑行為\n・本サービスの運営を妨害する行為\n・商業目的での大量注文や転売行為",
  },
  {
    title: "第9条（免責事項）",
    content:
      "当社は、天災・通信障害等の不可抗力により本サービスの提供が困難になった場合、責任を負いません。また、お客様のデバイス・通信環境に起因する問題については責任を負いません。",
  },
  {
    title: "第10条（規約の変更）",
    content:
      "当社は、必要に応じて本規約を変更することができます。変更後の規約は本ページに掲載した時点から適用されます。",
  },
  {
    title: "第11条（準拠法・管轄）",
    content:
      "本規約は日本法に準拠します。本サービスに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#F5F5F5] py-16 border-b border-[#E0E0E0]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-3">
            Terms
          </p>
          <h1 className="text-4xl font-light text-[#111111] tracking-tight">
            利用規約
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-sm font-light text-[#888888] mb-2">
          制定日: 2024年1月1日
        </p>
        <p className="text-sm font-light text-[#888888] mb-12">
          最終更新日: 2024年4月1日
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-base font-normal text-[#111111] mb-4">
                {section.title}
              </h2>
              <p className="text-sm font-light text-[#888888] leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
