"use client";
import { useState } from "react";
import Link from "next/link";

const steps = ["カート", "情報入力", "確認", "完了"];

export default function CheckoutPage() {
  const [payment, setPayment] = useState("card");
  return (
    <div className="bg-[#1A1A2E] min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center gap-2 mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className="flex items-center gap-2">
                <div className={`w-7 h-7 flex items-center justify-center text-xs border ${i === 1 ? "border-[#C9A84C] bg-[#C9A84C]/20 text-[#C9A84C]" : i < 1 ? "border-[#C9A84C] text-[#C9A84C]" : "border-[#2E2E50] text-[#F5F0E8]/30"}`}>
                  {i < 1 ? "✓" : i + 1}
                </div>
                <span className={`text-sm hidden sm:block ${i === 1 ? "text-[#C9A84C]" : "text-[#F5F0E8]/30"}`}>{s}</span>
              </div>
              {i < steps.length - 1 && <div className="w-6 h-px bg-[#2E2E50] mx-2" />}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#252545] border border-[#2E2E50] p-6 space-y-5">
              <h2 className="font-serif text-[#C9A84C]">お届け先情報</h2>
              {[
                { label: "郵便番号", placeholder: "150-0000", half: true },
                { label: "都道府県", placeholder: "東京都", half: true },
                { label: "市区町村", placeholder: "渋谷区" },
                { label: "番地", placeholder: "神南1-2-3" },
                { label: "電話番号", placeholder: "090-0000-0000" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-[#F5F0E8]/60 text-xs tracking-wider mb-2">{f.label}</label>
                  <input type="text" placeholder={f.placeholder}
                    className={`${f.half ? "w-1/2" : "w-full"} bg-[#1A1A2E] border border-[#2E2E50] text-[#F5F0E8] px-4 py-3 focus:border-[#C9A84C] focus:outline-none placeholder-[#F5F0E8]/20`} />
                </div>
              ))}
            </div>
            <div className="bg-[#252545] border border-[#2E2E50] p-6 space-y-4">
              <h2 className="font-serif text-[#C9A84C]">お支払い方法</h2>
              {[{ v: "card", l: "クレジットカード" }, { v: "convenience", l: "コンビニ払い" }, { v: "bank", l: "銀行振込" }].map((p) => (
                <label key={p.v} className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="payment" value={p.v} checked={payment === p.v} onChange={() => setPayment(p.v)} className="accent-[#C9A84C]" />
                  <span className="text-[#F5F0E8]/80">{p.l}</span>
                </label>
              ))}
              {payment === "card" && (
                <div className="space-y-3 border-t border-[#2E2E50] pt-4">
                  {[{ l: "カード番号", p: "0000 0000 0000 0000" }, { l: "有効期限", p: "MM/YY" }, { l: "セキュリティコード", p: "000" }, { l: "カード名義", p: "TARO YAMADA" }].map((f) => (
                    <div key={f.l}>
                      <label className="block text-[#F5F0E8]/60 text-xs tracking-wider mb-2">{f.l}</label>
                      <input type="text" placeholder={f.p}
                        className="w-full bg-[#1A1A2E] border border-[#2E2E50] text-[#F5F0E8] px-4 py-3 focus:border-[#C9A84C] focus:outline-none placeholder-[#F5F0E8]/20" />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className="w-full bg-[#C9A84C] text-[#1A1A2E] py-3 font-medium tracking-wider hover:bg-[#E8C97A] transition-colors">次のステップへ →</button>
          </div>
          <div className="bg-[#252545] border border-[#2E2E50] p-6 h-fit space-y-4">
            <h2 className="font-serif text-[#C9A84C]">ご注文内容</h2>
            {[{ n: "Silver Feather Necklace", p: "¥22,000" }, { n: "SILMO No.01 Silver Ring", p: "¥9,800" }].map((item) => (
              <div key={item.n} className="flex justify-between text-sm"><span className="text-[#F5F0E8]/60">{item.n}</span><span className="text-[#C9A84C]">{item.p}</span></div>
            ))}
            <div className="border-t border-[#2E2E50] pt-3 space-y-1 text-sm">
              <div className="flex justify-between text-[#F5F0E8]/40"><span>小計</span><span>¥31,800</span></div>
              <div className="flex justify-between text-[#F5F0E8]/40"><span>送料</span><span>¥500</span></div>
              <div className="flex justify-between text-[#F5F0E8] font-medium text-base border-t border-[#2E2E50] pt-2 mt-2">
                <span>合計</span><span className="text-[#C9A84C]">¥32,300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
