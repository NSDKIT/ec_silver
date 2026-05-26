import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "注文詳細 | ARGENT",
};

export function generateStaticParams() {
  return [{ id: "ORD-2024-089" }];
}

const orderData = {
  id: "ORD-2024-089",
  date: "2024年11月19日",
  items: [
    { name: "Silver Ring No.01", size: "9号", quantity: 1, price: 8800 },
    { name: "Feather Necklace", size: "45cm", quantity: 1, price: 18500 },
  ],
  shipping: {
    name: "山田 太郎",
    postalCode: "〒150-0000",
    address: "東京都渋谷区神南1-2-3",
    building: "ARGENTマンション201",
    phone: "090-1234-5678",
  },
  payment: "クレジットカード（末尾 1234）",
  subtotal: 27300,
  shippingFee: 500,
  total: 27800,
  trackingNumber: "1234-5678-9012",
};

const steps = [
  { label: "注文受付", done: true, current: false },
  { label: "処理中", done: true, current: false },
  { label: "発送済", done: true, current: true },
  { label: "お届け完了", done: false, current: false },
];

export default function OrderDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const orderId = params.id || orderData.id;

  return (
    <div className="bg-white min-h-screen">
      {/* Page header */}
      <section className="bg-[#F5F5F5] py-12 border-b border-[#E0E0E0]">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#888888] mb-4">
            <Link href="/mypage" className="hover:text-[#111111] transition-colors">
              マイページ
            </Link>
            <span>/</span>
            <Link href="/mypage" className="hover:text-[#111111] transition-colors">
              注文履歴
            </Link>
            <span>/</span>
            <span className="text-[#111111]">#{orderId}</span>
          </nav>
          <h1 className="text-3xl font-light text-[#111111] tracking-tight">
            注文詳細
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        {/* Order info card */}
        <div className="bg-white border border-[#E0E0E0] p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-xs text-[#888888] font-light mb-1">注文番号</p>
            <p className="text-lg font-normal text-[#111111]">#{orderId}</p>
          </div>
          <div>
            <p className="text-xs text-[#888888] font-light mb-1">注文日</p>
            <p className="text-sm font-light text-[#111111]">{orderData.date}</p>
          </div>
          <div>
            <p className="text-xs text-[#888888] font-light mb-1">支払い方法</p>
            <p className="text-sm font-light text-[#111111]">{orderData.payment}</p>
          </div>
          <div>
            <span className="inline-block px-3 py-1 text-xs font-light bg-[#111111] text-white">
              発送済
            </span>
          </div>
        </div>

        {/* Delivery status stepper */}
        <div className="bg-white border border-[#E0E0E0] p-8">
          <p className="text-xs tracking-widest text-[#888888] uppercase font-light mb-8">
            配送状況
          </p>
          <div className="relative flex items-start justify-between">
            {/* Background line */}
            <div className="absolute top-5 left-0 right-0 h-px bg-[#E0E0E0]" />
            {/* Progress line (3/4 = 66%) */}
            <div
              className="absolute top-5 left-0 h-px bg-[#111111] transition-all duration-500"
              style={{ width: "66%" }}
            />
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center z-10 flex-1">
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center bg-white ${
                    step.done
                      ? "border-[#111111] bg-[#111111]"
                      : "border-[#E0E0E0] bg-white"
                  }`}
                >
                  {step.done ? (
                    <svg
                      className="w-5 h-5 text-white"
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
                    <div className="w-3 h-3 rounded-full border border-[#E0E0E0]" />
                  )}
                </div>
                <span
                  className={`text-xs font-light mt-3 text-center tracking-wide ${
                    step.done ? "text-[#111111]" : "text-[#888888]"
                  } ${step.current ? "font-normal" : ""}`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
          {orderData.trackingNumber && (
            <p className="text-xs text-[#888888] font-light mt-8">
              追跡番号：
              <span className="text-[#111111] font-normal">{orderData.trackingNumber}</span>
            </p>
          )}
        </div>

        {/* Items table */}
        <div className="bg-white border border-[#E0E0E0]">
          <div className="p-6 border-b border-[#E0E0E0]">
            <h2 className="text-sm font-normal text-[#111111] tracking-widest uppercase">
              ご注文商品
            </h2>
          </div>
          <div className="divide-y divide-[#E0E0E0]">
            {orderData.items.map((item, i) => (
              <div key={i} className="flex justify-between items-center px-6 py-5">
                <div>
                  <p className="text-sm font-normal text-[#111111] mb-1">{item.name}</p>
                  <p className="text-xs font-light text-[#888888]">
                    サイズ: {item.size}　数量: {item.quantity}
                  </p>
                </div>
                <p className="text-sm font-light text-[#111111]">
                  ¥{item.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
          {/* Price breakdown */}
          <div className="px-6 py-6 bg-[#F5F5F5] border-t border-[#E0E0E0] space-y-3">
            <div className="flex justify-between text-sm font-light text-[#888888]">
              <span>小計</span>
              <span>¥{orderData.subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm font-light text-[#888888]">
              <span>送料</span>
              <span>¥{orderData.shippingFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm font-normal text-[#111111] border-t border-[#E0E0E0] pt-3">
              <span>合計（税込）</span>
              <span className="text-base">¥{orderData.total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Shipping address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#E0E0E0] p-6">
            <h2 className="text-sm font-normal text-[#111111] tracking-widest uppercase mb-4">
              お届け先
            </h2>
            <div className="space-y-1 text-sm font-light text-[#111111]">
              <p className="font-normal">{orderData.shipping.name}</p>
              <p className="text-[#888888]">{orderData.shipping.postalCode}</p>
              <p>{orderData.shipping.address}</p>
              <p>{orderData.shipping.building}</p>
              <p className="text-[#888888]">{orderData.shipping.phone}</p>
            </div>
          </div>
          <div className="bg-white border border-[#E0E0E0] p-6">
            <h2 className="text-sm font-normal text-[#111111] tracking-widest uppercase mb-4">
              お支払い方法
            </h2>
            <p className="text-sm font-light text-[#111111]">{orderData.payment}</p>
            <p className="text-xs font-light text-[#888888] mt-4">
              注文日：{orderData.date}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/mypage"
            className="flex-1 text-center border border-[#111111] text-sm font-light text-[#111111] py-3 hover:bg-[#111111] hover:text-white transition-colors tracking-wide"
          >
            マイページに戻る
          </Link>
          <button className="flex-1 border border-[#E0E0E0] text-sm font-light text-[#888888] py-3 hover:border-[#111111] hover:text-[#111111] transition-colors">
            返品・交換の申請
          </button>
        </div>
      </div>
    </div>
  );
}
