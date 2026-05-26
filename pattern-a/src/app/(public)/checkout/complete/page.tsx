import Link from "next/link";

export default function CheckoutCompletePage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Page Header */}
      <section className="py-12 text-center border-b border-[#2A2A2A]">
        <p className="text-[#B8960C] text-xs tracking-[0.5em] font-sans mb-4">
          ORDER COMPLETE
        </p>
        <h1 className="font-serif text-4xl tracking-[0.3em] text-white">
          ご注文完了
        </h1>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        {/* Gold Checkmark */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full border-2 border-[#B8960C] flex items-center justify-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 24L20 34L38 14"
                stroke="#B8960C"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl text-[#B8960C] mb-4 tracking-wide">
          ご注文ありがとうございます
        </h2>

        {/* Order Number */}
        <div className="inline-flex items-center gap-3 bg-[#1A1A1A] border border-[#2A2A2A] px-6 py-3 mb-4">
          <span className="text-[#C0C0C0] text-xs font-sans tracking-widest">
            注文番号
          </span>
          <span className="text-white font-serif text-lg tracking-wider">
            #ORD-2024-090
          </span>
        </div>

        {/* Confirmation message */}
        <p className="text-[#C0C0C0] font-sans text-sm mb-12 tracking-wider">
          ご確認メールをお送りしました
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-[#B8960C] mx-auto mb-12" />

        {/* Order Summary */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 mb-12 text-left">
          <h3 className="font-serif text-lg text-white mb-6 tracking-wide pb-4 border-b border-[#2A2A2A]">
            ご注文内容
          </h3>
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-sans">Silver Ring No.01</p>
                <p className="text-[#C0C0C0] text-xs font-sans mt-0.5">サイズ: M × 1</p>
              </div>
              <span className="text-[#B8960C] text-sm font-sans">¥8,800</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-sans">Feather Necklace</p>
                <p className="text-[#C0C0C0] text-xs font-sans mt-0.5">45cm × 1</p>
              </div>
              <span className="text-[#B8960C] text-sm font-sans">¥18,500</span>
            </div>
          </div>
          <div className="border-t border-[#2A2A2A] pt-4 space-y-2">
            <div className="flex justify-between text-sm font-sans">
              <span className="text-[#C0C0C0]">小計</span>
              <span className="text-white">¥27,300</span>
            </div>
            <div className="flex justify-between text-sm font-sans">
              <span className="text-[#C0C0C0]">送料</span>
              <span className="text-white">¥500</span>
            </div>
            <div className="border-t border-[#2A2A2A] pt-3 flex justify-between items-center">
              <span className="text-white font-sans text-sm tracking-wider">
                合計（税込）
              </span>
              <span className="font-serif text-2xl text-[#B8960C]">¥27,800</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            href="/mypage"
            className="block w-full bg-[#B8960C] text-black hover:bg-[#C9A84C] py-4 text-sm tracking-[0.2em] font-sans font-medium transition-colors duration-200 text-center"
          >
            マイページで注文を確認する
          </Link>
          <Link
            href="/products"
            className="block text-center text-[#C0C0C0] hover:text-[#B8960C] text-sm font-sans tracking-wider transition-colors py-3"
          >
            ショッピングを続ける →
          </Link>
        </div>
      </div>
    </div>
  );
}
