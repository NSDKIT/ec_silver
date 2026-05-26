export default function TermsPage() {
  const sections = [
    { title: "第1条（本規約の適用）", body: "本規約はSILMO（シルモ）が提供するサービスに関する一切の取引・サービス利用に適用されます。" },
    { title: "第2条（会員登録）", body: "会員登録は正確な情報を入力していただく必要があります。虚偽の情報を入力した場合、登録を取り消すことがあります。" },
    { title: "第3条（商品の購入）", body: "ご注文は確認メール送信をもって成立とします。在庫切れ等によりご注文をお受けできない場合はご連絡の上キャンセル処理いたします。" },
    { title: "第4条（禁止事項）", body: "営業目的での転売、当サイトへの不正アクセス、他のユーザーへの迷惑行為、その他法令に違反する行為を禁止します。" },
    { title: "第5条（免責事項）", body: "当社は本サービスの内容変更・中断・終了によって生じた損害について責任を負いません。予めご了承ください。" },
    { title: "第6条（準拠法・管轄裁判所）", body: "本規約は日本法に準拠し、紛争が生じた場合は東京地方裁判所を第一審の専属的合意管轄裁判所とします。" },
  ];
  return (
    <div className="bg-[#1A1A2E] min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-serif text-3xl text-[#C9A84C] tracking-wider mb-2">利用規約</h1>
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
