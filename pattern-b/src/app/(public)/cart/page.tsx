"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Metadata } from "next";

const initialItems = [
  {
    id: "1",
    name: "Ring 01",
    price: 8800,
    qty: 1,
    size: "9号",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
  },
  {
    id: "2",
    name: "Feather Necklace",
    price: 18500,
    qty: 1,
    size: "-",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80",
  },
];

export default function CartPage() {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const remove = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = subtotal >= 5000 ? 0 : 550;
  const total = subtotal + shipping;

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#F5F5F5] py-12 border-b border-[#E0E0E0]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-2">
            Cart
          </p>
          <h1 className="text-3xl font-light text-[#111111] tracking-tight">
            カート
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#888888] font-light mb-6">
              カートに商品がありません。
            </p>
            <Link
              href="/products"
              className="inline-block px-10 py-3 bg-[#111111] text-white text-sm font-light tracking-widest uppercase hover:bg-[#333333] transition-colors"
            >
              コレクションを見る
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Items */}
            <div className="lg:col-span-2 space-y-0 divide-y divide-[#E0E0E0]">
              {items.map((item) => (
                <div key={item.id} className="flex gap-6 py-8">
                  <div className="relative w-24 h-24 flex-shrink-0 bg-[#F5F5F5]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-sm font-normal text-[#111111] mb-1">
                          {item.name}
                        </h3>
                        {item.size !== "-" && (
                          <p className="text-xs font-light text-[#888888]">
                            サイズ: {item.size}
                          </p>
                        )}
                        <p className="text-sm font-light text-[#111111] mt-2">
                          ¥{item.price.toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => remove(item.id)}
                        className="text-[#888888] hover:text-[#111111] transition-colors"
                        aria-label="削除"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-8 h-8 border border-[#E0E0E0] text-[#111111] hover:border-[#111111] transition-colors text-sm"
                      >
                        −
                      </button>
                      <span className="text-sm font-light w-6 text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-8 h-8 border border-[#E0E0E0] text-[#111111] hover:border-[#111111] transition-colors text-sm"
                      >
                        ＋
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#F5F5F5] p-8 sticky top-24">
                <h2 className="text-sm font-normal text-[#111111] tracking-widest uppercase mb-8">
                  Order Summary
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm font-light text-[#888888]">
                    <span>小計</span>
                    <span>¥{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-light text-[#888888]">
                    <span>配送料</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-[#111111]">無料</span>
                      ) : (
                        `¥${shipping.toLocaleString()}`
                      )}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-[#888888] font-light">
                      ¥{(5000 - subtotal).toLocaleString()}以上で送料無料
                    </p>
                  )}
                </div>
                <div className="border-t border-[#E0E0E0] pt-4 mb-8">
                  <div className="flex justify-between text-sm font-normal text-[#111111]">
                    <span>合計</span>
                    <span>¥{total.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-[#888888] font-light mt-1">
                    税込
                  </p>
                </div>

                {/* Coupon */}
                <div className="mb-6">
                  <div className="flex gap-0">
                    <input
                      type="text"
                      placeholder="クーポンコード"
                      className="flex-1 px-4 py-2 border border-[#E0E0E0] bg-white text-sm font-light text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#111111] transition-colors"
                    />
                    <button className="px-4 py-2 border border-[#111111] bg-white text-sm font-light text-[#111111] hover:bg-[#111111] hover:text-white transition-colors">
                      適用
                    </button>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full py-4 bg-[#111111] text-white text-sm font-light tracking-widest uppercase text-center hover:bg-[#333333] transition-colors"
                >
                  お会計へ進む
                </Link>
                <Link
                  href="/products"
                  className="block text-center text-xs font-light text-[#888888] mt-4 hover:text-[#111111] transition-colors"
                >
                  ← ショッピングを続ける
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
