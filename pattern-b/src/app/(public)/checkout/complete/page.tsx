import Link from "next/link";

export default function CheckoutCompletePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-20 h-20 border-2 border-[#111111] rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-[#111111]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-light text-[#111111] tracking-wide">ご注文ありがとうございます</h1>
          <p className="text-[#888888] text-sm mt-2">注文番号: #ORD-2024-091</p>
        </div>
        <div className="bg-[#F5F5F5] p-4 text-left space-y-2 text-sm">
          <p className="text-[#888888]">確認メールをお送りしました</p>
          <div className="border-t border-[#E0E0E0] pt-2 space-y-1">
            <div className="flex justify-between"><span className="text-[#888888]">Ring 01</span><span className="text-[#111111]">¥8,800</span></div>
            <div className="flex justify-between"><span className="text-[#888888]">Feather Necklace</span><span className="text-[#111111]">¥18,500</span></div>
            <div className="flex justify-between"><span className="text-[#888888]">送料</span><span className="text-[#111111]">¥500</span></div>
            <div className="flex justify-between font-medium border-t border-[#E0E0E0] pt-1 mt-1">
              <span className="text-[#111111]">合計</span><span className="text-[#111111]">¥27,800</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <Link href="/mypage" className="block w-full bg-[#111111] text-white py-3 text-sm tracking-wider hover:bg-[#333] transition-colors text-center">
            マイページで注文を確認する
          </Link>
          <Link href="/products" className="block text-sm text-[#888888] hover:text-[#111111] underline">
            ショッピングを続ける
          </Link>
        </div>
      </div>
    </div>
  );
}
