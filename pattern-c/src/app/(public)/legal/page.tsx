import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | SILMO",
};

const items = [
  { label: "販売業者", value: "田中みやび（SILMO）" },
  { label: "代表者", value: "田中 みやび" },
  { label: "所在地", value: "〒390-0000 長野県松本市（住所は請求があり次第開示いたします）" },
  { label: "電話番号", value: "請求があり次第開示いたします" },
  { label: "メールアドレス", value: "info@silmo-handmade.jp" },
  { label: "販売URL", value: "https://silmo-handmade.jp" },
  { label: "販売価格", value: "各商品ページに記載（税込）" },
  { label: "商品代金以外の費用", value: "送料：全国一律 ¥500（¥10,000以上のご購入で送料無料）" },
  { label: "お支払い方法", value: "クレジットカード（Visa / Mastercard / JCB / AMEX）、コンビニ払い、銀行振込" },
  { label: "お支払い時期", value: "クレジットカード：注文確定時。コンビニ払い・銀行振込：注文確定後7日以内" },
  { label: "商品の引渡し時期", value: "ご入金確認後、5〜10営業日以内に発送いたします（ハンドメイドのため多少前後する場合があります）" },
  { label: "返品・キャンセルについて", value: "ハンドメイド作品の特性上、お客様都合による返品・交換はお受けできません。商品の破損・不具合の場合は到着後7日以内にご連絡ください。" },
  { label: "動作環境", value: "最新版のChrome / Safari / Firefox / Edge 推奨" },
];

export default function LegalPage() {
  return (
    <div className="bg-[#FAF8F5]">
      <section className="py-16 text-center bg-[#E8DDD0]">
        <h1 className="font-serif text-3xl md:text-4xl text-[#7B5E4A]">
          特定商取引法に基づく表記
        </h1>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="overflow-hidden rounded-lg border border-[#E8DDD0]">
          {items.map(({ label, value }, i) => (
            <div
              key={label}
              className={`flex flex-col md:flex-row ${i % 2 === 0 ? "bg-[#FAF8F5]" : "bg-[#E8DDD0]/50"}`}
            >
              <dt className="md:w-48 shrink-0 px-5 py-4 font-sans text-sm font-semibold text-[#7B5E4A] border-b border-[#E8DDD0] md:border-b-0 md:border-r md:border-[#E8DDD0]">
                {label}
              </dt>
              <dd className="flex-1 px-5 py-4 font-sans text-sm text-[#7B5E4A] leading-relaxed border-b border-[#E8DDD0] last:border-0">
                {value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
