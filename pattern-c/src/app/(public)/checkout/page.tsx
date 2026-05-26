"use client";
import { useState } from "react";
import Link from "next/link";

const steps = ["カート", "情報入力", "確認", "完了"];

export default function CheckoutPage() {
  const [payment, setPayment] = useState("card");

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Steps */}
        <div className="flex items-center justify-center mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`flex items-center gap-2 ${i === 1 ? "text-[#C17B5C]" : "text-[#9E9082]"}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm ${i === 1 ? "bg-[#C17B5C] text-white" : i < 1 ? "bg-[#E8DDD0] text-[#7B5E4A]" : "border border-[#E8DDD0] text-[#9E9082]"}`}>
                  {i < 1 ? "✓" : i + 1}
                </div>
                <span className="text-sm hidden sm:block">{s}</span>
              </div>
              {i < steps.length - 1 && <div className="w-8 h-0.5 mx-2 bg-[#E8DDD0]" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg border border-[#E8DDD0] p-6 space-y-4">
              <h2 className="font-serif text-lg text-[#7B5E4A]">お届け先情報</h2>
              {[
                { label: "郵便番号", placeholder: "150-0000", half: true },
                { label: "都道府県", placeholder: "東京都", half: true },
                { label: "市区町村", placeholder: "渋谷区" },
                { label: "番地", placeholder: "神南1-2-3" },
                { label: "マンション名・部屋番号（任意）", placeholder: "" },
                { label: "電話番号", placeholder: "090-0000-0000" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-[#7B5E4A] text-sm mb-1.5">{f.label}</label>
                  <input type="text" placeholder={f.placeholder}
                    className={`${f.half ? "w-1/2" : "w-full"} bg-[#FAF8F5] border border-[#E8DDD0] text-[#7B5E4A] px-4 py-2.5 rounded focus:border-[#C17B5C] focus:outline-none placeholder-[#9E9082]/40`} />
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg border border-[#E8DDD0] p-6 space-y-4">
              <h2 className="font-serif text-lg text-[#7B5E4A]">お支払い方法</h2>
              {[
                { value: "card", label: "クレジットカード" },
                { value: "convenience", label: "コンビニ払い" },
                { value: "bank", label: "銀行振込" },
              ].map((p) => (
                <label key={p.value} className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="payment" value={p.value} checked={payment === p.value} onChange={() => setPayment(p.value)} className="accent-[#C17B5C]" />
                  <span className="text-[#7B5E4A]">{p.label}</span>
                </label>
              ))}
              {payment === "card" && (
                <div className="mt-4 space-y-3 border-t border-[#E8DDD0] pt-4">
                  {[
                    { label: "カード番号", placeholder: "0000 0000 0000 0000" },
                    { label: "有効期限", placeholder: "MM/YY" },
                    { label: "セキュリティコード", placeholder: "000" },
                    { label: "カード名義", placeholder: "TARO YAMADA" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-[#7B5E4A] text-sm mb-1">{f.label}</label>
                      <input type="text" placeholder={f.placeholder}
                        className="w-full bg-[#FAF8F5] border border-[#E8DDD0] text-[#7B5E4A] px-4 py-2.5 rounded focus:border-[#C17B5C] focus:outline-none placeholder-[#9E9082]/40" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button className="w-full bg-[#C17B5C] text-white py-3 rounded hover:bg-[#A56A4D] transition-colors font-medium">
              次のステップへ →
            </button>
          </div>

          {/* Summary */}
          <div className="bg-[#E8DDD0] rounded-lg p-6 h-fit space-y-3">
            <h2 className="font-serif text-[#7B5E4A] mb-4">ご注文内容</h2>
            {[
              { name: "羽のネックレス", price: "¥18,500" },
              { name: "月の指輪", price: "¥9,800" },
            ].map((item) => (
              <div key={item.name} className="flex justify-between text-sm">
                <span className="text-[#7B5E4A]">{item.name}</span>
                <span className="text-[#C17B5C]">{item.price}</span>
              </div>
            ))}
            <div className="border-t border-[#C9B8A8] pt-3 space-y-1 text-sm">
              <div className="flex justify-between text-[#9E9082]"><span>小計</span><span>¥28,300</span></div>
              <div className="flex justify-between text-[#9E9082]"><span>送料</span><span>¥500</span></div>
              <div className="flex justify-between font-medium text-[#7B5E4A] text-base border-t border-[#C9B8A8] pt-2 mt-2">
                <span>合計</span><span className="text-[#C17B5C]">¥28,800</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
