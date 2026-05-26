export default function LegalPage() {
  const tableRows = [
    { label: "販売業者", value: "SILMO（シルモ）" },
    { label: "代表者名", value: "山田 太郎" },
    {
      label: "所在地",
      value: "〒150-0000 東京都渋谷区神南1-2-3 SILMOビル2F",
    },
    {
      label: "電話番号",
      value: "03-XXXX-XXXX（平日10:00〜17:00）",
    },
    { label: "メールアドレス", value: "info@silmo.jp" },
    { label: "販売URL", value: "https://silmo.vercel.app" },
    {
      label: "商品代金以外の必要料金",
      value: "送料（全国一律500円、10,000円以上無料）",
    },
    {
      label: "支払い方法",
      value: "クレジットカード、コンビニ払い、銀行振込",
    },
    {
      label: "支払い時期",
      value:
        "クレジットカード：注文確定時 / その他：注文確定後3日以内",
    },
    {
      label: "商品の引き渡し時期",
      value: "決済確認後3〜7営業日",
    },
    {
      label: "返品・交換",
      value:
        "商品到着後7日以内、未使用・未開封に限り返品可。送料はお客様負担となります。",
    },
    {
      label: "不良品対応",
      value:
        "到着後7日以内にご連絡ください。当社負担にて対応いたします。",
    },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 text-center border-b border-[#2A2A2A]">
        <h1 className="font-serif text-4xl tracking-[0.2em] text-white">
          特定商取引法に基づく表記
        </h1>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              {tableRows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-[#2A2A2A]"
                >
                  <td className="py-5 pr-8 text-[#B8960C] text-sm font-sans tracking-wide whitespace-nowrap align-top w-48">
                    {row.label}
                  </td>
                  <td className="py-5 text-[#C0C0C0] text-sm font-sans leading-7">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 border-t border-[#2A2A2A] pt-8">
          <p className="text-[#C0C0C0] font-sans text-xs leading-7">
            ※ 表示価格はすべて税込みです。<br />
            ※ 商品の在庫状況によっては、お届けまでにお時間をいただく場合がございます。<br />
            ※ ご不明な点はお問い合わせフォームよりご連絡ください。
          </p>
        </div>
      </div>
    </div>
  );
}
