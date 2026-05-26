import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="bg-[#1A1A2E] min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="font-serif text-3xl text-[#C9A84C] tracking-[0.2em] mb-10">CART</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              { id: 2, name: "Silver Feather Necklace", price: "¥22,000", qty: 1, img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=200&q=80" },
              { id: 1, name: "SILMO No.01 Silver Ring", price: "¥9,800", qty: 1, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&q=80" },
            ].map((item) => (
              <div key={item.id} className="bg-[#252545] border border-[#2E2E50] p-5 flex gap-5">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image src={item.img} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-[#F5F0E8] font-medium">{item.name}</p>
                  <p className="text-[#C9A84C] mt-1">{item.price}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center border border-[#2E2E50]">
                      <button className="w-8 h-8 text-[#F5F0E8]/60 hover:text-[#C9A84C] flex items-center justify-center">−</button>
                      <span className="w-8 text-center text-[#F5F0E8] text-sm">{item.qty}</span>
                      <button className="w-8 h-8 text-[#F5F0E8]/60 hover:text-[#C9A84C] flex items-center justify-center">＋</button>
                    </div>
                    <button className="text-[#F5F0E8]/40 text-xs hover:text-red-400 transition-colors">削除</button>
                  </div>
                </div>
                <p className="text-[#C9A84C] font-medium self-start">{item.price}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#252545] border border-[#2E2E50] p-6 h-fit space-y-4">
            <h2 className="font-serif text-[#C9A84C] text-lg">ご注文内容</h2>
            <div className="space-y-2 text-sm border-t border-[#2E2E50] pt-4">
              <div className="flex justify-between text-[#F5F0E8]/60"><span>小計</span><span>¥31,800</span></div>
              <div className="flex justify-between text-[#F5F0E8]/60"><span>送料</span><span>¥500</span></div>
              <div className="flex justify-between text-[#F5F0E8] text-lg font-medium border-t border-[#2E2E50] pt-3 mt-3">
                <span>合計</span><span className="text-[#C9A84C]">¥32,300</span>
              </div>
            </div>
            <Link href="/checkout" className="block w-full bg-[#C9A84C] text-[#1A1A2E] py-3 text-center font-medium tracking-wider hover:bg-[#E8C97A] transition-colors">
              決済に進む
            </Link>
            <Link href="/products" className="block text-center text-[#F5F0E8]/40 text-sm hover:text-[#C9A84C] transition-colors">
              ショッピングを続ける
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
