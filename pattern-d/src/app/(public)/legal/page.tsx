export default function LegalPage() {
  const items = [
    ["販売業者", "SILMO（シルモ）"],
    ["代表者名", "山田 太郎"],
    ["所在地", "〒150-0000 東京都渋谷区神南1-2-3 SILMOビル2F"],
    ["電話番号", "03-XXXX-XXXX（平日10:00〜17:00）"],
    ["メールアドレス", "info@silmo.jp"],
    ["販売URL", "https://silmo.vercel.app"],
    ["商品代金以外の必要料金", "送料（全国一律500円、10,000円以上無料）"],
    ["支払い方法", "クレジットカード、コンビニ払い、銀行振込"],
    ["支払い時期", "クレジットカード：注文確定時 / その他：注文確定後3日以内"],
    ["商品の引き渡し時期", "決済確認後3〜7営業日"],
    ["返品・交換", "商品到着後7日以内、未使用・未開封に限り返品可（送料はお客様負担）"],
    ["不良品対応", "到着後7日以内にご連絡ください。送料当社負担で交換対応いたします"],
  ];
  return (
    <div className="bg-[#1A1A2E] min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-serif text-3xl text-[#C9A84C] tracking-wider mb-2">特定商取引法に基づく表記</h1>
        <div className="w-12 h-px bg-[#C9A84C] mb-10" />
        <div className="bg-[#252545] border border-[#2E2E50] overflow-hidden">
          {items.map(([label, value], i) => (
            <div key={label} className={`flex border-b border-[#2E2E50] last:border-0 ${i % 2 === 0 ? "bg-[#252545]" : "bg-[#1A1A2E]"}`}>
              <div className="w-48 px-6 py-4 flex-shrink-0 border-r border-[#2E2E50]">
                <p className="text-[#C9A84C]/80 text-sm">{label}</p>
              </div>
              <div className="px-6 py-4">
                <p className="text-[#F5F0E8]/80 text-sm leading-relaxed">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
