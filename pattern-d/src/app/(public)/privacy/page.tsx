export default function PrivacyPage() {
  const sections = [
    { title: "個人情報の収集について", body: "当サイトでは、会員登録・ご注文・お問い合わせの際に、お名前・メールアドレス・住所・電話番号等の個人情報をお預かりします。" },
    { title: "個人情報の利用目的", body: "ご注文の処理、商品の発送、アフターサービスのご連絡、サービス改善のための統計分析に利用します。ご同意をいただいた場合は、新商品・イベント情報のご案内にも利用します。" },
    { title: "個人情報の第三者提供", body: "法令に基づく場合を除き、お客様の個人情報を第三者に提供することはありません。配送業者への提供は商品発送のために必要な範囲に限ります。" },
    { title: "Cookie（クッキー）について", body: "当サイトではサービス改善・アクセス解析のためCookieを使用します。Cookieの使用を希望されない場合はブラウザの設定から無効にできますが、一部サービスが利用できなくなる場合があります。" },
    { title: "個人情報の管理・保護", body: "個人情報の漏洩・紛失・不正アクセスを防ぐため、適切なセキュリティ対策を実施しています。保有期間は原則として法令で定める期間または利用目的達成後速やかに削除します。" },
    { title: "お問い合わせ窓口", body: "個人情報に関するお問い合わせは info@silmo.jp までご連絡ください。" },
  ];
  return (
    <div className="bg-[#1A1A2E] min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-serif text-3xl text-[#C9A84C] tracking-wider mb-2">プライバシーポリシー</h1>
        <div className="w-12 h-px bg-[#C9A84C] mb-10" />
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="border-l-2 border-[#C9A84C]/40 pl-6">
              <h2 className="text-[#C9A84C] font-medium mb-3">{s.title}</h2>
              <p className="text-[#F5F0E8]/70 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
