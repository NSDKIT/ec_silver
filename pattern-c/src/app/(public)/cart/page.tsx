import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "カート | SILMO",
};

const cartItems = [
  {
    id: "1",
    name: "月の指輪",
    price: 9800,
    qty: 1,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
  },
  {
    id: "4",
    name: "雫のピアス",
    price: 7200,
    qty: 1,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 10000 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="font-serif text-3xl md:text-4xl text-[#7B5E4A] mb-2">カート</h1>
        <div className="w-10 h-px bg-[#C17B5C] mb-8" />

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-sans text-[#9E9082] mb-6">カートは空です</p>
            <Link
              href="/products"
              className="inline-block bg-[#C17B5C] text-white font-sans text-sm px-8 py-3 rounded-lg hover:bg-[#A86848] transition-colors"
            >
              作品を見る
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 bg-[#E8DDD0] rounded-lg p-4">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-[#FAF8F5]">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${item.id}`}
                      className="font-serif text-base text-[#7B5E4A] hover:text-[#C17B5C] transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="font-sans text-sm text-[#C17B5C] font-semibold mt-1">
                      ¥{item.price.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-[#E8DDD0] rounded-lg overflow-hidden bg-[#FAF8F5]">
                        <button className="px-3 py-1 text-[#7B5E4A] hover:bg-[#E8DDD0] transition-colors text-sm">−</button>
                        <span className="px-4 py-1 text-sm font-sans text-[#7B5E4A] border-x border-[#E8DDD0]">
                          {item.qty}
                        </span>
                        <button className="px-3 py-1 text-[#7B5E4A] hover:bg-[#E8DDD0] transition-colors text-sm">+</button>
                      </div>
                      <button className="text-xs font-sans text-[#9E9082] hover:text-[#C17B5C] transition-colors underline">
                        削除
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <Link
                  href="/products"
                  className="font-sans text-sm text-[#C17B5C] hover:text-[#A86848] transition-colors underline"
                >
                  ← 作品一覧に戻る
                </Link>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-[#E8DDD0] rounded-lg p-6 h-fit">
              <h2 className="font-serif text-xl text-[#7B5E4A] mb-4">ご注文内容</h2>
              <div className="space-y-2 text-sm font-sans text-[#7B5E4A] mb-4">
                <div className="flex justify-between">
                  <span>小計</span>
                  <span>¥{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>送料</span>
                  <span>{shipping === 0 ? "無料" : `¥${shipping}`}</span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs text-[#C17B5C]">¥10,000以上で送料無料</p>
                )}
              </div>
              <div className="border-t border-[#C17B5C]/20 pt-3 mb-5">
                <div className="flex justify-between font-semibold font-sans text-[#7B5E4A]">
                  <span>合計</span>
                  <span className="text-[#C17B5C] text-lg">¥{total.toLocaleString()}</span>
                </div>
                <p className="text-xs text-[#9E9082] mt-1">（税込）</p>
              </div>
              <Link
                href="/checkout"
                className="block w-full bg-[#C17B5C] text-white font-sans text-sm tracking-widest py-4 rounded-lg hover:bg-[#A86848] transition-colors text-center"
              >
                レジに進む
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
