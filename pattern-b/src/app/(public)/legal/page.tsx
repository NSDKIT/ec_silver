import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | ARGENT",
};

const legalItems = [
  { label: "販売業者", value: "ARGENT（アルジャン）" },
  { label: "運営責任者", value: "山田 花子" },
  { label: "所在地", value: "東京都渋谷区神宮前1-2-3 アルジャンビル 2F" },
  {
    label: "電話番号",
    value: "03-1234-5678（受付時間：平日 10:00〜18:00）",
  },
  { label: "メールアドレス", value: "support@argent-silver.jp" },
  { label: "サイトURL", value: "https://argent.vercel.app" },
  {
    label: "販売価格",
    value: "各商品ページに記載（税込）",
  },
  {
    label: "送料",
    value: "550円（税込）。5,000円以上のご注文で無料。",
  },
  {
    label: "支払方法",
    value: "クレジットカード（Visa / Mastercard / JCB / Amex）、コンビニ払い",
  },
  {
    label: "支払時期",
    value: "クレジットカード：ご注文時に決済。コンビニ払い：ご注文後3日以内にお支払い。",
  },
  {
    label: "商品引き渡し時期",
    value: "ご注文確認後、3〜5営業日以内に発送いたします。",
  },
  {
    label: "返品・交換",
    value:
      "商品到着後8日以内であれば返品・交換を承ります（未使用・未開封のものに限ります）。返品送料はお客様負担となります。ただし、商品に不具合がある場合は当社が送料を負担します。",
  },
  {
    label: "動作環境",
    value: "最新版のChrome / Firefox / Safari / Edge を推奨します。",
  },
];

export default function LegalPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#F5F5F5] py-16 border-b border-[#E0E0E0]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-3">
            Legal
          </p>
          <h1 className="text-4xl font-light text-[#111111] tracking-tight">
            特定商取引法に基づく表記
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-sm font-light text-[#888888] mb-12 leading-relaxed">
          特定商取引法に基づき、以下に事業者情報を記載します。
        </p>

        <div className="divide-y divide-[#E0E0E0]">
          {legalItems.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6"
            >
              <dt className="text-xs font-normal text-[#111111] tracking-wide col-span-1">
                {item.label}
              </dt>
              <dd className="text-sm font-light text-[#888888] leading-relaxed col-span-3">
                {item.value}
              </dd>
            </div>
          ))}
        </div>

        <p className="text-xs font-light text-[#888888] mt-12 leading-relaxed">
          ※ 上記の情報は変更になる場合があります。最新の情報はこのページをご確認ください。
        </p>
      </div>
    </div>
  );
}
