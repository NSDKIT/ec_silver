export default function PrivacyPage() {
  const sections = [
    {
      title: "1. 個人情報の収集について",
      content:
        "当社は、サービスのご提供にあたり、お客様の氏名、メールアドレス、住所、電話番号、購入履歴などの個人情報を収集する場合があります。個人情報の収集は、適法かつ公正な方法によって行います。",
    },
    {
      title: "2. 個人情報の利用目的",
      content:
        "収集した個人情報は、以下の目的に使用します。\n\n・ 商品のご注文・配送・決済処理\n・ お問い合わせへの対応\n・ サービスの改善・新サービスの開発\n・ キャンペーン・お知らせのご案内（ご同意をいただいた場合）\n・ 不正利用の防止",
    },
    {
      title: "3. 個人情報の第三者提供",
      content:
        "当社は、以下の場合を除き、お客様の同意なく第三者に個人情報を提供することはありません。\n\n・ 法令に基づく場合\n・ 人の生命・身体・財産の保護に必要な場合\n・ 公衆衛生の向上または児童の健全育成のために必要な場合\n・ 業務委託先（配送業者・決済代行会社等）への提供（必要最小限の範囲）",
    },
    {
      title: "4. Cookie（クッキー）について",
      content:
        "当サイトでは、ユーザーの利便性向上・アクセス解析のためにCookieを使用しています。Cookieはブラウザの設定により無効化することができますが、その場合一部のサービスがご利用いただけなくなる場合があります。\n\n使用しているCookieの種類：\n・ 必須Cookie：サービスの提供に不可欠なもの\n・ 分析用Cookie：アクセス解析ツール（Google Analytics等）\n・ 機能Cookie：ユーザー設定の保存等",
    },
    {
      title: "5. 個人情報の管理・保護",
      content:
        "当社は、お客様の個人情報を適切に管理し、不正アクセス・紛失・改ざん・漏洩等を防止するため、必要かつ適切なセキュリティ対策を講じます。個人情報の取り扱いを委託する場合は、委託先に対して適切な監督を行います。",
    },
    {
      title: "6. お問い合わせ窓口",
      content:
        "個人情報に関するご質問・開示・訂正・削除のご要望は、下記窓口までお問い合わせください。\n\n社名：SILMO（シルモ）\nメール：info@silmo.jp\n受付時間：平日10:00〜17:00\n\n本ポリシーは、法令の改正やサービスの変更に伴い、予告なく改定することがあります。改定後のポリシーは当サイトに掲載した時点より効力を生じるものとします。",
    },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 text-center border-b border-[#2A2A2A]">
        <h1 className="font-serif text-4xl tracking-[0.2em] text-white">
          プライバシーポリシー
        </h1>
        <p className="text-[#C0C0C0] font-sans text-xs mt-4 tracking-wider">
          最終更新日：2024年1月1日
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-[#C0C0C0] font-sans text-sm leading-8 mb-12">
          SILMO（シルモ）（以下「当社」といいます）は、お客様の個人情報を適切に保護することを重要な責務と考え、以下のとおりプライバシーポリシーを定め、これを遵守します。
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-lg text-[#B8960C] mb-4">
                {section.title}
              </h2>
              <p className="text-[#C0C0C0] font-sans text-sm leading-8 whitespace-pre-line">
                {section.content}
              </p>
              <div className="w-full h-px bg-[#2A2A2A] mt-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
