"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  { number: 1, label: "カート" },
  { number: 2, label: "情報入力" },
  { number: 3, label: "確認" },
  { number: 4, label: "完了" },
];

const prefectures = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
  "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
  "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
  "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県",
];

const orderItems = [
  { name: "Silver Ring No.01", price: 8800 },
  { name: "Feather Necklace", price: 18500 },
];

const subtotal = orderItems.reduce((sum, i) => sum + i.price, 0);
const shipping = 500;
const total = subtotal + shipping;

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit");

  return (
    <div className="bg-white min-h-screen">
      {/* Step indicator */}
      <div className="border-b border-[#E0E0E0] bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex">
            {steps.map((step) => {
              const isActive = step.number === 2;
              const isDone = step.number < 2;
              return (
                <div
                  key={step.number}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-light transition-colors ${
                    isActive
                      ? "border-b-2 border-[#111111] text-[#111111]"
                      : isDone
                      ? "text-[#888888]"
                      : "text-[#CCCCCC]"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      isActive
                        ? "bg-[#111111] text-white"
                        : isDone
                        ? "bg-[#888888] text-white"
                        : "border border-[#CCCCCC] text-[#CCCCCC]"
                    }`}
                  >
                    {isDone ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </span>
                  <span className="hidden sm:inline">{step.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: shipping form (2/3) */}
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-sm font-normal text-[#111111] tracking-widest uppercase mb-6 pb-3 border-b border-[#E0E0E0]">
                お届け先
              </h2>
              <div className="space-y-5">
                {/* Postal code */}
                <div>
                  <label className="block text-xs font-light text-[#888888] mb-2">
                    郵便番号 <span className="text-[#111111]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="000-0000"
                    className="w-full sm:w-48 px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#CCCCCC] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>

                {/* Prefecture */}
                <div>
                  <label className="block text-xs font-light text-[#888888] mb-2">
                    都道府県 <span className="text-[#111111]">*</span>
                  </label>
                  <select className="w-full sm:w-64 px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] focus:outline-none focus:border-[#111111] transition-colors appearance-none">
                    <option value="">選択してください</option>
                    {prefectures.map((pref) => (
                      <option key={pref} value={pref}>
                        {pref}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-light text-[#888888] mb-2">
                    市区町村 <span className="text-[#111111]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="渋谷区"
                    className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#CCCCCC] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>

                {/* Street */}
                <div>
                  <label className="block text-xs font-light text-[#888888] mb-2">
                    番地 <span className="text-[#111111]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="神南1-2-3"
                    className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#CCCCCC] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>

                {/* Building (optional) */}
                <div>
                  <label className="block text-xs font-light text-[#888888] mb-2">
                    マンション名・部屋番号
                    <span className="ml-2 text-[#888888] font-light">（任意）</span>
                  </label>
                  <input
                    type="text"
                    placeholder="ARGENTマンション201"
                    className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#CCCCCC] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-light text-[#888888] mb-2">
                    電話番号 <span className="text-[#111111]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="090-1234-5678"
                    className="w-full sm:w-64 px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#CCCCCC] focus:outline-none focus:border-[#111111] transition-colors"
                  />
                </div>
              </div>
            </section>

            {/* Payment */}
            <section>
              <h2 className="text-sm font-normal text-[#111111] tracking-widest uppercase mb-6 pb-3 border-b border-[#E0E0E0]">
                お支払い方法
              </h2>
              <div className="space-y-3 mb-6">
                {[
                  { value: "credit", label: "クレジットカード" },
                  { value: "convenience", label: "コンビニ払い" },
                  { value: "bank", label: "銀行振込" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-3 p-4 border cursor-pointer transition-colors ${
                      paymentMethod === option.value
                        ? "border-[#111111] bg-white"
                        : "border-[#E0E0E0] hover:border-[#888888]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={option.value}
                      checked={paymentMethod === option.value}
                      onChange={() => setPaymentMethod(option.value)}
                      className="accent-[#111111]"
                    />
                    <span className="text-sm font-light text-[#111111]">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>

              {/* Credit card fields */}
              {paymentMethod === "credit" && (
                <div className="space-y-5 p-6 bg-[#F5F5F5] border border-[#E0E0E0]">
                  <div>
                    <label className="block text-xs font-light text-[#888888] mb-2">
                      カード番号 <span className="text-[#111111]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#CCCCCC] focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-light text-[#888888] mb-2">
                        有効期限（MM/YY） <span className="text-[#111111]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#CCCCCC] focus:outline-none focus:border-[#111111] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-light text-[#888888] mb-2">
                        セキュリティコード <span className="text-[#111111]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-4 py-3 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#CCCCCC] focus:outline-none focus:border-[#111111] transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "convenience" && (
                <div className="p-6 bg-[#F5F5F5] border border-[#E0E0E0]">
                  <p className="text-sm font-light text-[#888888]">
                    注文確認後にお支払い番号をメールでお送りします。コンビニエンスストアのマルチメディア端末でお支払いください。
                  </p>
                </div>
              )}

              {paymentMethod === "bank" && (
                <div className="p-6 bg-[#F5F5F5] border border-[#E0E0E0]">
                  <p className="text-sm font-light text-[#888888]">
                    注文確認後に振込先口座情報をメールでお送りします。3営業日以内にお振込みください。
                  </p>
                </div>
              )}
            </section>

            {/* Mobile: submit button */}
            <div className="lg:hidden">
              <Link
                href="/checkout/complete"
                className="block w-full py-4 bg-[#111111] text-white text-sm font-light tracking-widest uppercase text-center hover:bg-[#333333] transition-colors"
              >
                次のステップへ
              </Link>
            </div>
          </div>

          {/* Right: Order summary (1/3) */}
          <div className="lg:col-span-1">
            <div className="bg-[#F5F5F5] p-6 sticky top-24">
              <h2 className="text-sm font-normal text-[#111111] tracking-widest uppercase mb-6">
                注文内容
              </h2>
              <div className="space-y-4 mb-6 divide-y divide-[#E0E0E0]">
                {orderItems.map((item, i) => (
                  <div key={i} className="flex justify-between items-center pt-4 first:pt-0">
                    <p className="text-sm font-light text-[#111111] pr-4">{item.name}</p>
                    <p className="text-sm font-light text-[#111111] whitespace-nowrap">
                      ¥{item.price.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-[#E0E0E0] pt-4">
                <div className="flex justify-between text-sm font-light text-[#888888]">
                  <span>小計</span>
                  <span>¥{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-light text-[#888888]">
                  <span>送料</span>
                  <span>¥{shipping.toLocaleString()}</span>
                </div>
              </div>

              <div className="border-t border-[#E0E0E0] mt-4 pt-4 mb-8">
                <div className="flex justify-between text-sm font-normal text-[#111111]">
                  <span>合計（税込）</span>
                  <span>¥{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Desktop: submit button */}
              <div className="hidden lg:block">
                <Link
                  href="/checkout/complete"
                  className="block w-full py-4 bg-[#111111] text-white text-sm font-light tracking-widest uppercase text-center hover:bg-[#333333] transition-colors"
                >
                  次のステップへ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
