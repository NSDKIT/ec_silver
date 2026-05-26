import Link from "next/link";

export default function CheckoutCompletePage() {
  return (
    <div className="min-h-screen bg-[#1A1A2E] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-24 h-24 border border-[#C9A84C]/60 flex items-center justify-center">
            <svg className="w-12 h-12 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <div>
          <p className="text-[#C9A84C]/60 text-xs tracking-widest mb-2">THANK YOU</p>
          <h1 className="font-serif text-3xl text-[#F5F0E8]">ご縁に感謝します</h1>
          <p className="text-[#F5F0E8]/60 mt-2">ご注文ありがとうございます</p>
          <p className="text-[#F5F0E8]/40 text-sm mt-1">注文番号: #ORD-2024-090</p>
        </div>
        <div className="border border-[#2E2E50] p-6 text-left space-y-3">
          <p className="text-[#F5F0E8]/40 text-sm">SILMOの作品があなたの日常を彩ることを願っています。</p>
          <p className="text-[#F5F0E8]/30 text-xs">確認メールをお送りしました。3〜7営業日以内にお届けします。</p>
          <div className="border-t border-[#2E2E50] pt-3 space-y-1 text-sm">
            <div className="flex justify-between text-[#F5F0E8]/40"><span>Silver Feather Necklace</span><span>¥22,000</span></div>
            <div className="flex justify-between text-[#F5F0E8]/40"><span>SILMO No.01 Silver Ring</span><span>¥9,800</span></div>
            <div className="flex justify-between text-[#F5F0E8] font-medium pt-2 border-t border-[#2E2E50] mt-2">
              <span>合計</span><span className="text-[#C9A84C]">¥32,300</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <Link href="/mypage" className="block w-full bg-[#C9A84C] text-[#1A1A2E] py-3 font-medium tracking-wider hover:bg-[#E8C97A] transition-colors text-center">
            マイページで注文を確認する
          </Link>
          <Link href="/products" className="block text-[#F5F0E8]/30 text-sm hover:text-[#C9A84C] transition-colors">
            コレクションを見る
          </Link>
        </div>
      </div>
    </div>
  );
}
