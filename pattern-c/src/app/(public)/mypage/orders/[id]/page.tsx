import Link from "next/link";

export function generateStaticParams() {
  return [{ id: "ORD-2024-089" }];
}

const steps = ["注文受付", "処理中", "発送済", "お届け完了"];

export default function OrderDetailPage() {
  const currentStep = 2;
  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-16">
      <div className="max-w-2xl mx-auto px-4 py-12 space-y-6">
        <div className="flex items-center gap-2 text-sm text-[#9E9082]">
          <Link href="/mypage" className="hover:text-[#C17B5C]">マイページ</Link>
          <span>›</span>
          <span className="text-[#7B5E4A]">注文 #ORD-2024-089</span>
        </div>
        <h1 className="font-serif text-2xl text-[#7B5E4A]">注文詳細</h1>

        <div className="bg-white rounded-lg border border-[#E8DDD0] p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><p className="text-[#9E9082]">注文番号</p><p className="text-[#7B5E4A] font-medium">#ORD-2024-089</p></div>
            <div><p className="text-[#9E9082]">注文日</p><p className="text-[#7B5E4A]">2024年11月19日</p></div>
          </div>

          {/* Steps */}
          <div className="flex items-center justify-between mt-4">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${i <= currentStep ? "bg-[#C17B5C] text-white" : "bg-[#E8DDD0] text-[#9E9082]"}`}>
                    {i <= currentStep ? "✓" : i + 1}
                  </div>
                  <p className="text-xs text-[#9E9082] mt-1 text-center w-16">{s}</p>
                </div>
                {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-1 ${i < currentStep ? "bg-[#C17B5C]" : "bg-[#E8DDD0]"}`} />}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#E8DDD0] p-6">
          <h2 className="font-serif text-[#7B5E4A] mb-4">ご注文内容</h2>
          <div className="space-y-3 divide-y divide-[#E8DDD0]">
            {[
              { name: "羽のネックレス", price: "¥18,500", qty: 1 },
              { name: "月の指輪", price: "¥9,800", qty: 1 },
            ].map((item) => (
              <div key={item.name} className="flex justify-between pt-3 first:pt-0 text-sm">
                <span className="text-[#7B5E4A]">{item.name} × {item.qty}</span>
                <span className="text-[#C17B5C]">{item.price}</span>
              </div>
            ))}
            <div className="pt-3 space-y-1 text-sm">
              <div className="flex justify-between text-[#9E9082]"><span>小計</span><span>¥28,300</span></div>
              <div className="flex justify-between text-[#9E9082]"><span>送料</span><span>¥500</span></div>
              <div className="flex justify-between font-medium text-[#7B5E4A] text-base border-t border-[#E8DDD0] pt-2 mt-2">
                <span>合計</span><span className="text-[#C17B5C]">¥28,800</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#E8DDD0] p-6 text-sm text-[#7B5E4A]">
          <h2 className="font-serif mb-3">お届け先</h2>
          <p>山田 太郎</p>
          <p className="text-[#9E9082]">〒150-0000 東京都渋谷区神南1-2-3</p>
        </div>

        <Link href="/mypage" className="block text-center text-[#C17B5C] text-sm hover:underline">← マイページに戻る</Link>
      </div>
    </div>
  );
}
