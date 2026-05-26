"use client";
import Link from "next/link";
import { useState } from "react";

const steps = [
  { label: "カート", step: 1 },
  { label: "情報入力", step: 2 },
  { label: "確認", step: 3 },
  { label: "完了", step: 4 },
];

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "convenience" | "bank">("card");

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="py-12 text-center border-b border-[#2A2A2A]">
        <p className="text-[#B8960C] text-xs tracking-[0.5em] font-sans mb-4">
          CHECKOUT
        </p>
        <h1 className="font-serif text-4xl tracking-[0.3em] text-white mb-8">
          お支払い手続き
        </h1>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-0 max-w-xl mx-auto px-4">
          {steps.map((s, i) => (
            <div key={s.step} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-sans font-medium transition-all ${
                    s.step === 2
                      ? "bg-[#B8960C] text-black"
                      : s.step < 2
                      ? "bg-[#2A2A2A] text-[#B8960C] border border-[#B8960C]"
                      : "bg-[#1A1A1A] border border-[#2A2A2A] text-[#C0C0C0]"
                  }`}
                >
                  {s.step < 2 ? "✓" : s.step}
                </div>
                <span
                  className={`mt-2 text-xs font-sans whitespace-nowrap ${
                    s.step === 2 ? "text-[#B8960C]" : "text-[#C0C0C0]"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`h-px flex-1 mx-1 ${
                    s.step < 2 ? "bg-[#B8960C]" : "bg-[#2A2A2A]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Form */}
            <section className="bg-[#1A1A1A] border border-[#2A2A2A] p-8">
              <h2 className="font-serif text-xl text-white mb-6 tracking-wide pb-4 border-b border-[#2A2A2A]">
                お届け先情報
              </h2>
              <div className="space-y-5">
                {/* 郵便番号 */}
                <div>
                  <label className="block text-[#C0C0C0] text-xs font-sans tracking-wider mb-2">
                    郵便番号 <span className="text-[#B8960C]">*</span>
                  </label>
                  <div className="flex gap-3 items-center">
                    <input
                      type="text"
                      placeholder="123-4567"
                      maxLength={8}
                      className="w-40 bg-[#0D0D0D] border border-[#2A2A2A] text-white text-sm font-sans px-4 py-3 focus:outline-none focus:border-[#B8960C] transition-colors placeholder-[#C0C0C0]/30"
                    />
                    <button className="px-4 py-3 border border-[#2A2A2A] text-[#C0C0C0] text-xs font-sans hover:border-[#B8960C] hover:text-[#B8960C] transition-colors">
                      住所検索
                    </button>
                  </div>
                </div>

                {/* 都道府県 */}
                <div>
                  <label className="block text-[#C0C0C0] text-xs font-sans tracking-wider mb-2">
                    都道府県 <span className="text-[#B8960C]">*</span>
                  </label>
                  <select className="w-full md:w-64 bg-[#0D0D0D] border border-[#2A2A2A] text-white text-sm font-sans px-4 py-3 focus:outline-none focus:border-[#B8960C] transition-colors appearance-none">
                    <option value="">選択してください</option>
                    <option>東京都</option>
                    <option>大阪府</option>
                    <option>神奈川県</option>
                    <option>愛知県</option>
                    <option>福岡県</option>
                    <option>北海道</option>
                    <option>その他</option>
                  </select>
                </div>

                {/* 市区町村 */}
                <div>
                  <label className="block text-[#C0C0C0] text-xs font-sans tracking-wider mb-2">
                    市区町村 <span className="text-[#B8960C]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="渋谷区"
                    className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white text-sm font-sans px-4 py-3 focus:outline-none focus:border-[#B8960C] transition-colors placeholder-[#C0C0C0]/30"
                  />
                </div>

                {/* 番地 */}
                <div>
                  <label className="block text-[#C0C0C0] text-xs font-sans tracking-wider mb-2">
                    番地 <span className="text-[#B8960C]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="1-2-3"
                    className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white text-sm font-sans px-4 py-3 focus:outline-none focus:border-[#B8960C] transition-colors placeholder-[#C0C0C0]/30"
                  />
                </div>

                {/* マンション名 */}
                <div>
                  <label className="block text-[#C0C0C0] text-xs font-sans tracking-wider mb-2">
                    マンション名・部屋番号{" "}
                    <span className="text-[#C0C0C0]/50 text-xs">(任意)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="シルモレジデンス 101号室"
                    className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white text-sm font-sans px-4 py-3 focus:outline-none focus:border-[#B8960C] transition-colors placeholder-[#C0C0C0]/30"
                  />
                </div>

                {/* 電話番号 */}
                <div>
                  <label className="block text-[#C0C0C0] text-xs font-sans tracking-wider mb-2">
                    電話番号 <span className="text-[#B8960C]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="090-1234-5678"
                    className="w-full md:w-64 bg-[#0D0D0D] border border-[#2A2A2A] text-white text-sm font-sans px-4 py-3 focus:outline-none focus:border-[#B8960C] transition-colors placeholder-[#C0C0C0]/30"
                  />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="bg-[#1A1A1A] border border-[#2A2A2A] p-8">
              <h2 className="font-serif text-xl text-white mb-6 tracking-wide pb-4 border-b border-[#2A2A2A]">
                お支払い方法
              </h2>

              <div className="space-y-3 mb-6">
                {[
                  { value: "card", label: "クレジットカード", desc: "VISA / Mastercard / JCB / AMEX" },
                  { value: "convenience", label: "コンビニ払い", desc: "セブン-イレブン / ローソン / ファミリーマート" },
                  { value: "bank", label: "銀行振込", desc: "三菱UFJ銀行 / 三井住友銀行 / 他" },
                ].map((method) => (
                  <label
                    key={method.value}
                    className={`flex items-start gap-4 p-4 border cursor-pointer transition-all ${
                      paymentMethod === method.value
                        ? "border-[#B8960C] bg-[#B8960C]/5"
                        : "border-[#2A2A2A] hover:border-[#B8960C]/50"
                    }`}
                  >
                    <div className="mt-0.5">
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          paymentMethod === method.value
                            ? "border-[#B8960C]"
                            : "border-[#2A2A2A]"
                        }`}
                      >
                        {paymentMethod === method.value && (
                          <div className="w-2 h-2 rounded-full bg-[#B8960C]" />
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-white text-sm font-sans font-medium">
                        {method.label}
                      </p>
                      <p className="text-[#C0C0C0] text-xs font-sans mt-0.5">
                        {method.desc}
                      </p>
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      value={method.value}
                      checked={paymentMethod === method.value}
                      onChange={() =>
                        setPaymentMethod(method.value as "card" | "convenience" | "bank")
                      }
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>

              {/* Credit Card Form */}
              {paymentMethod === "card" && (
                <div className="border border-[#2A2A2A] p-6 space-y-5">
                  <div>
                    <label className="block text-[#C0C0C0] text-xs font-sans tracking-wider mb-2">
                      カード番号 <span className="text-[#B8960C]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white text-sm font-sans px-4 py-3 focus:outline-none focus:border-[#B8960C] transition-colors placeholder-[#C0C0C0]/30 tracking-widest"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#C0C0C0] text-xs font-sans tracking-wider mb-2">
                        有効期限 <span className="text-[#B8960C]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        maxLength={7}
                        className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white text-sm font-sans px-4 py-3 focus:outline-none focus:border-[#B8960C] transition-colors placeholder-[#C0C0C0]/30"
                      />
                    </div>
                    <div>
                      <label className="block text-[#C0C0C0] text-xs font-sans tracking-wider mb-2">
                        セキュリティコード <span className="text-[#B8960C]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        maxLength={4}
                        className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white text-sm font-sans px-4 py-3 focus:outline-none focus:border-[#B8960C] transition-colors placeholder-[#C0C0C0]/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#C0C0C0] text-xs font-sans tracking-wider mb-2">
                      カード名義 <span className="text-[#B8960C]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="TARO YAMADA"
                      className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white text-sm font-sans px-4 py-3 focus:outline-none focus:border-[#B8960C] transition-colors placeholder-[#C0C0C0]/30 uppercase"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === "convenience" && (
                <div className="border border-[#2A2A2A] p-6">
                  <p className="text-[#C0C0C0] text-sm font-sans leading-relaxed">
                    ご注文確定後、支払い番号をメールにてお送りします。<br />
                    お支払い期限は注文日より3日以内となります。
                  </p>
                </div>
              )}

              {paymentMethod === "bank" && (
                <div className="border border-[#2A2A2A] p-6">
                  <p className="text-[#C0C0C0] text-sm font-sans leading-relaxed">
                    ご注文確定後、振込先口座情報をメールにてお送りします。<br />
                    お振込み確認後に発送いたします（通常1〜2営業日）。
                  </p>
                </div>
              )}
            </section>

            <div className="flex items-center justify-between">
              <Link
                href="/cart"
                className="inline-flex items-center gap-2 text-[#C0C0C0] hover:text-[#B8960C] text-sm font-sans tracking-wider transition-colors"
              >
                ← カートに戻る
              </Link>
              <Link
                href="/checkout/complete"
                className="inline-block bg-[#B8960C] text-black hover:bg-[#C9A84C] px-12 py-4 text-sm tracking-[0.2em] font-sans font-medium transition-colors duration-200"
              >
                次のステップへ
              </Link>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 sticky top-24">
              <h2 className="font-serif text-xl text-white mb-6 tracking-wide pb-4 border-b border-[#2A2A2A]">
                注文概要
              </h2>

              {/* Items */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#2A2A2A] flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#2A2A2A] to-[#3A3A3A]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-xs font-sans">Silver Ring No.01</p>
                    <p className="text-[#C0C0C0] text-xs font-sans">サイズ: M × 1</p>
                  </div>
                  <span className="text-[#B8960C] text-sm font-sans">¥8,800</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#2A2A2A] flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#2A2A2A] to-[#3A3A3A]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-xs font-sans">Feather Necklace</p>
                    <p className="text-[#C0C0C0] text-xs font-sans">45cm × 1</p>
                  </div>
                  <span className="text-[#B8960C] text-sm font-sans">¥18,500</span>
                </div>
              </div>

              <div className="border-t border-[#2A2A2A] pt-4 space-y-3">
                <div className="flex justify-between text-sm font-sans">
                  <span className="text-[#C0C0C0]">小計 (2点)</span>
                  <span className="text-white">¥27,300</span>
                </div>
                <div className="flex justify-between text-sm font-sans">
                  <span className="text-[#C0C0C0]">送料</span>
                  <span className="text-white">¥500</span>
                </div>
                <div className="border-t border-[#2A2A2A] pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-sans text-sm tracking-wider">
                      合計（税込）
                    </span>
                    <span className="font-serif text-2xl text-[#B8960C]">
                      ¥27,800
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-[#C0C0C0] text-xs font-sans text-center mt-6 leading-relaxed">
                ご注文内容の確認は次のステップで行えます
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
