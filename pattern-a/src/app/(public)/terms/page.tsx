export default function TermsPage() {
  const sections = [
    {
      title: "第1条　本規約の適用",
      content:
        "本規約は、SILMO（シルモ）（以下「当社」といいます）が提供するECサービス（以下「本サービス」といいます）の利用に関する条件を定めるものです。本サービスをご利用いただく際は、本規約に同意いただいたものとみなします。",
    },
    {
      title: "第2条　会員登録",
      content:
        "本サービスへの会員登録を希望される方は、本規約に同意の上、当社の定める方法に従い登録申請を行うものとします。当社は、登録申請者が以下のいずれかに該当する場合、登録を拒否することがあります。\n\n・ 登録申請情報に虚偽の内容が含まれる場合\n・ 過去に本規約に違反したことがある場合\n・ 未成年者で保護者の同意が得られない場合\n・ その他当社が不適切と判断する場合",
    },
    {
      title: "第3条　商品の購入",
      content:
        "商品の購入は、会員または非会員にて行うことができます。ご注文後、当社より注文確認メールを送信した時点で売買契約が成立するものとします。\n\n在庫状況・その他の理由によりご注文をお断りする場合があります。その際は速やかにご連絡いたします。",
    },
    {
      title: "第4条　禁止事項",
      content:
        "お客様は、本サービスの利用に際し、以下の行為を行ってはなりません。\n\n・ 法令または公序良俗に違反する行為\n・ 当社または第三者の知的財産権を侵害する行為\n・ 不正なアクセス・データの改ざん行為\n・ 本サービスの運営を妨げる行為\n・ 転売目的での大量購入\n・ その他当社が不適切と判断する行為",
    },
    {
      title: "第5条　免責事項",
      content:
        "当社は、以下の事由によってお客様に生じた損害について、一切の責任を負いません。\n\n・ 天災・通信障害等の不可抗力による損害\n・ お客様の設備・機器の不具合による損害\n・ 第三者による不正アクセス・情報漏洩による損害\n・ 本サービスの一時的な停止・変更・終了による損害",
    },
    {
      title: "第6条　準拠法・管轄裁判所",
      content:
        "本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して生じた紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。\n\n本規約は、法令の改正その他必要に応じて予告なく変更される場合があります。変更後の規約は当サイトに掲載した時点より効力を生じるものとします。",
    },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 text-center border-b border-[#2A2A2A]">
        <h1 className="font-serif text-4xl tracking-[0.2em] text-white">
          利用規約
        </h1>
        <p className="text-[#C0C0C0] font-sans text-xs mt-4 tracking-wider">
          最終更新日：2024年1月1日
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-[#C0C0C0] font-sans text-sm leading-8 mb-12">
          本規約をよくお読みいただき、同意の上でご利用ください。本サービスのご利用をもって、本規約に同意したものとみなします。
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

        <div className="mt-8">
          <p className="text-[#C0C0C0] font-sans text-xs">
            制定日：2024年1月1日<br />
            SILMO（シルモ）
          </p>
        </div>
      </div>
    </div>
  );
}
