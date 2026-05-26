import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | ARGENT",
};

const sections = [
  {
    title: "1. 個人情報の取得について",
    content:
      "当社は、お客様がサービスをご利用になる際に、氏名、メールアドレス、住所、電話番号、決済情報等の個人情報を適正な手段により取得します。",
  },
  {
    title: "2. 個人情報の利用目的",
    content:
      "取得した個人情報は、以下の目的で利用します。\n・商品の発送およびご連絡\n・お問い合わせへの対応\n・購入履歴の管理\n・メールマガジンの配信（同意いただいた場合）\n・サービスの改善および新サービスの開発",
  },
  {
    title: "3. 個人情報の第三者提供",
    content:
      "当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。なお、商品の配送のために配送業者に必要な情報を提供する場合があります。",
  },
  {
    title: "4. 個人情報の安全管理",
    content:
      "当社は、個人情報の漏洩、滅失、毀損を防止するため、適切な安全管理措置を講じます。個人情報を取り扱う従業者に対して、適切な監督を行います。",
  },
  {
    title: "5. Cookieの使用について",
    content:
      "当サイトではCookieを使用しています。Cookieはサービスの利便性向上や利用状況の分析のために使用します。ブラウザの設定によりCookieを無効にすることができますが、一部のサービスが利用できなくなる場合があります。",
  },
  {
    title: "6. 個人情報の開示・訂正・削除",
    content:
      "お客様は、当社が保有する自己の個人情報について、開示・訂正・削除を請求することができます。ご請求の際は、下記お問い合わせ先までご連絡ください。",
  },
  {
    title: "7. お問い合わせ",
    content:
      "個人情報の取り扱いに関するお問い合わせは、以下にご連絡ください。\n\nARGENT（アルジャン）個人情報担当\nメール：privacy@argent-silver.jp\n住所：東京都渋谷区神宮前1-2-3 アルジャンビル 2F",
  },
  {
    title: "8. 改定について",
    content:
      "本ポリシーは、法令の変更や当社のサービス変更に伴い、予告なく改定される場合があります。改定後は本ページに掲載します。",
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#F5F5F5] py-16 border-b border-[#E0E0E0]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-3">
            Privacy
          </p>
          <h1 className="text-4xl font-light text-[#111111] tracking-tight">
            プライバシーポリシー
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

        <p className="text-sm font-light text-[#888888] leading-relaxed mb-12">
          ARGENT（アルジャン）（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、以下のプライバシーポリシーを定めます。
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
