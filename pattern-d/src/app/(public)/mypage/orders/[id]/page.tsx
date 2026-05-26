import Link from "next/link";

export function generateStaticParams() {
  return [{ id: "ORD-2024-089" }];
}

const steps = ["注文受付", "処理中", "発送済", "お届け完了"];

export default function OrderDetailPage() {
  const currentStep = 2;
  return (
    <div className="bg-[#1A1A2E] min-h-screen pt-16">
      <div className="max-w-2xl mx-auto px-4 py-12 space-y-8">
        <div className="flex items-center gap-2 text-xs text-[#F5F0E8]/40">
          <Link href="/mypage" className="hover:text-[#C9A84C]">マイページ</Link>
          <span>›</span><span className="text-[#F5F0E8]/60">#ORD-2024-089</span>
        </div>
        <h1 className="font-serif text-3xl text-[#C9A84C]">注文詳細</h1>
        <div className="bg-[#252545] border border-[#2E2E50] p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><p className="text-[#F5F0E8]/40 text-xs tracking-wider">注文番号</p><p className="text-[#F5F0E8] font-mono mt-1">#ORD-2024-089</p></div>
            <div><p className="text-[#F5F0E8]/40 text-xs tracking-wider">注文日</p><p className="text-[#F5F0E8] mt-1">2024年11月19日</p></div>
          </div>
          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 flex items-center justify-center text-sm border ${i <= currentStep ? "border-[#C9A84C] bg-[#C9A84C]/20 text-[#C9A84C]" : "border-[#2E2E50] text-[#F5F0E8]/30"}`}>
                    {i <= currentStep ? "✓" : i + 1}
                  </div>
                  <p className={`text-xs mt-1 text-center w-16 ${i <= currentStep ? "text-[#C9A84C]/80" : "text-[#F5F0E8]/30"}`}>{s}</p>
                </div>
                {i < steps.length - 1 && <div className={`flex-1 h-px mx-1 ${i < currentStep ? "bg-[#C9A84C]" : "bg-[#2E2E50]"}`} />}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#252545] border border-[#2E2E50] p-6">
          <h2 className="font-serif text-[#C9A84C] mb-4">ご注文内容</h2>
          <div className="space-y-3 divide-y divide-[#2E2E50]">
            {[{ name: "Silver Feather Necklace", price: "¥22,000" }, { name: "SILMO No.01 Silver Ring", price: "¥9,800" }].map((item) => (
              <div key={item.name} className="flex justify-between pt-3 first:pt-0 text-sm">
                <span className="text-[#F5F0E8]/80">{item.name}</span>
                <span className="text-[#C9A84C]">{item.price}</span>
              </div>
            ))}
            <div className="pt-3 space-y-1 text-sm">
              <div className="flex justify-between text-[#F5F0E8]/40"><span>小計</span><span>¥31,800</span></div>
              <div className="flex justify-between text-[#F5F0E8]/40"><span>送料</span><span>¥500</span></div>
              <div className="flex justify-between text-[#F5F0E8] text-base font-medium border-t border-[#2E2E50] pt-2 mt-2">
                <span>合計</span><span className="text-[#C9A84C]">¥32,300</span>
              </div>
            </div>
          </div>
        </div>
        <Link href="/mypage" className="block text-center text-[#C9A84C]/60 text-sm hover:text-[#C9A84C]">← マイページに戻る</Link>
      </div>
    </div>
  );
}
