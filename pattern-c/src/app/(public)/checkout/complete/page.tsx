import Link from "next/link";

export default function CheckoutCompletePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center px-4 pt-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-[#C17B5C] rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <div>
          <h1 className="font-serif text-2xl text-[#7B5E4A]">ご注文ありがとうございます</h1>
          <p className="text-[#9E9082] text-sm mt-2">注文番号: #ORD-2024-090</p>
          <p className="text-[#9E9082] text-sm mt-1">大切なお品をお届けできることを楽しみにしています。</p>
        </div>
        <div className="bg-[#E8DDD0] rounded-lg p-5 text-left space-y-2 text-sm">
          <p className="text-[#9E9082]">確認メールをお送りしました</p>
          <div className="border-t border-[#C9B8A8] pt-3 space-y-1">
            <div className="flex justify-between"><span className="text-[#9E9082]">羽のネックレス</span><span className="text-[#7B5E4A]">¥18,500</span></div>
            <div className="flex justify-between"><span className="text-[#9E9082]">月の指輪</span><span className="text-[#7B5E4A]">¥9,800</span></div>
            <div className="flex justify-between font-medium border-t border-[#C9B8A8] pt-2 mt-2">
              <span className="text-[#7B5E4A]">合計</span><span className="text-[#C17B5C]">¥28,800</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <Link href="/mypage" className="block w-full bg-[#C17B5C] text-white py-3 rounded hover:bg-[#A56A4D] transition-colors font-medium text-center">
            マイページで注文を確認する
          </Link>
          <Link href="/products" className="block text-sm text-[#9E9082] hover:text-[#C17B5C] underline">
            ショッピングを続ける
          </Link>
        </div>
      </div>
    </div>
  );
}
