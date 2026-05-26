import Link from "next/link";

export function generateStaticParams() {
  return [{ id: "ORD-2024-089" }];
}

const orderData = {
  id: "ORD-2024-089",
  date: "2024年11月15日",
  items: [
    { name: "Silver Ring No.01", size: "M", quantity: 1, price: "¥8,800" },
    { name: "Feather Necklace", size: "45cm", quantity: 1, price: "¥18,500" },
  ],
  shipping: {
    name: "山田 太郎",
    postalCode: "〒150-0000",
    address: "東京都渋谷区神南1-2-3",
    building: "SILMOマンション201",
    phone: "03-XXXX-XXXX",
  },
  payment: "クレジットカード（末尾 1234）",
  subtotal: "¥27,300",
  shippingFee: "無料",
  total: "¥27,300",
  status: "配送済み",
  trackingNumber: "1234-5678-9012",
};

const steps = [
  { label: "注文受付", done: true },
  { label: "処理中", done: true },
  { label: "発送済", done: true },
  { label: "お届け完了", done: false },
];

export default function OrderDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 border-b border-[#2A2A2A] px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-[#C0C0C0] font-sans mb-6">
            <Link href="/" className="hover:text-[#B8960C] transition-colors">
              HOME
            </Link>
            <span>/</span>
            <Link
              href="/mypage"
              className="hover:text-[#B8960C] transition-colors"
            >
              マイページ
            </Link>
            <span>/</span>
            <span className="text-white">注文詳細</span>
          </nav>
          <h1 className="font-serif text-4xl text-white">
            注文詳細
          </h1>
          <p className="text-[#C0C0C0] font-sans text-sm mt-2">
            注文番号：#{params.id || orderData.id}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {/* Step Indicator */}
        <section className="bg-[#1A1A1A] border border-[#2A2A2A] p-8">
          <p className="text-[#C0C0C0] text-xs tracking-widest font-sans mb-6">
            配送状況
          </p>
          <div className="flex items-center justify-between relative">
            {/* Progress line */}
            <div className="absolute top-5 left-0 right-0 h-px bg-[#2A2A2A]" />
            <div
              className="absolute top-5 left-0 h-px bg-[#B8960C] transition-all duration-500"
              style={{ width: "66%" }}
            />
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center z-10">
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                    step.done
                      ? "bg-[#B8960C] border-[#B8960C]"
                      : "bg-[#0D0D0D] border-[#2A2A2A]"
                  }`}
                >
                  {step.done ? (
                    <svg
                      className="w-5 h-5 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <span className="text-[#C0C0C0] text-xs">{i + 1}</span>
                  )}
                </div>
                <span
                  className={`text-xs font-sans mt-3 tracking-wide ${
                    step.done ? "text-[#B8960C]" : "text-[#C0C0C0]"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
          {orderData.trackingNumber && (
            <p className="text-[#C0C0C0] font-sans text-xs mt-6">
              追跡番号：
              <span className="text-[#B8960C]">{orderData.trackingNumber}</span>
            </p>
          )}
        </section>

        {/* Order Items */}
        <section className="bg-[#1A1A1A] border border-[#2A2A2A] p-8">
          <h2 className="font-serif text-xl text-white mb-6 tracking-wide">
            ご注文商品
          </h2>
          <div className="space-y-4">
            {orderData.items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-4 border-b border-[#2A2A2A] last:border-0"
              >
                <div>
                  <p className="text-white font-sans text-sm">{item.name}</p>
                  <p className="text-[#C0C0C0] font-sans text-xs mt-1">
                    サイズ：{item.size} / 数量：{item.quantity}
                  </p>
                </div>
                <p className="text-[#B8960C] font-sans text-sm">{item.price}</p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-6 space-y-3 border-t border-[#2A2A2A] pt-6">
            <div className="flex justify-between text-sm font-sans">
              <span className="text-[#C0C0C0]">小計</span>
              <span className="text-white">{orderData.subtotal}</span>
            </div>
            <div className="flex justify-between text-sm font-sans">
              <span className="text-[#C0C0C0]">送料</span>
              <span className="text-white">{orderData.shippingFee}</span>
            </div>
            <div className="flex justify-between items-center border-t border-[#2A2A2A] pt-3">
              <span className="text-white font-sans text-sm tracking-wider">
                合計（税込）
              </span>
              <span className="font-serif text-2xl text-[#B8960C]">
                {orderData.total}
              </span>
            </div>
          </div>
        </section>

        {/* Shipping Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-[#1A1A1A] border border-[#2A2A2A] p-8">
            <h2 className="font-serif text-xl text-white mb-6 tracking-wide">
              お届け先
            </h2>
            <div className="space-y-2 text-[#C0C0C0] font-sans text-sm">
              <p>{orderData.shipping.name}</p>
              <p>{orderData.shipping.postalCode}</p>
              <p>{orderData.shipping.address}</p>
              <p>{orderData.shipping.building}</p>
              <p>{orderData.shipping.phone}</p>
            </div>
          </section>

          <section className="bg-[#1A1A1A] border border-[#2A2A2A] p-8">
            <h2 className="font-serif text-xl text-white mb-6 tracking-wide">
              お支払い方法
            </h2>
            <p className="text-[#C0C0C0] font-sans text-sm">
              {orderData.payment}
            </p>
            <p className="text-[#C0C0C0] font-sans text-xs mt-4">
              注文日：{orderData.date}
            </p>
          </section>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/mypage"
            className="flex-1 text-center border border-[#2A2A2A] text-[#C0C0C0] hover:border-[#B8960C] hover:text-[#B8960C] py-3 text-sm tracking-widest font-sans transition-all duration-200"
          >
            マイページに戻る
          </Link>
          <button className="flex-1 bg-[#B8960C] text-black hover:bg-[#C9A84C] py-3 text-sm tracking-widest font-sans font-medium transition-colors duration-200">
            返品・交換の申請
          </button>
        </div>
      </div>
    </div>
  );
}
