"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const initialCartItems = [
  {
    id: 1,
    name: "Silver Ring No.01",
    size: "M",
    price: 8800,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
  },
  {
    id: 2,
    name: "Feather Necklace",
    size: "45cm",
    price: 18500,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal >= 10000 ? 0 : 500;
  const total = subtotal + shipping;

  const formatPrice = (price: number) =>
    `¥${price.toLocaleString("ja-JP")}`;

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="py-16 text-center border-b border-[#2A2A2A]">
        <p className="text-[#B8960C] text-xs tracking-[0.5em] font-sans mb-4">
          YOUR CART
        </p>
        <h1 className="font-serif text-5xl tracking-[0.3em] text-white">
          CART
        </h1>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {cartItems.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[#C0C0C0] font-sans text-sm mb-8">
              カートに商品がありません
            </p>
            <Link
              href="/products"
              className="inline-block border border-[#B8960C] text-[#B8960C] hover:bg-[#B8960C] hover:text-black px-10 py-3 text-sm tracking-[0.3em] font-sans transition-all duration-300"
            >
              ショッピングを続ける
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="border-b border-[#2A2A2A] pb-4 mb-4 hidden md:grid md:grid-cols-12 gap-4">
                <div className="md:col-span-6">
                  <span className="text-[#C0C0C0] text-xs tracking-widest font-sans">
                    商品
                  </span>
                </div>
                <div className="md:col-span-3 text-center">
                  <span className="text-[#C0C0C0] text-xs tracking-widest font-sans">
                    数量
                  </span>
                </div>
                <div className="md:col-span-3 text-right">
                  <span className="text-[#C0C0C0] text-xs tracking-widest font-sans">
                    小計
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-6 border-b border-[#2A2A2A]"
                  >
                    {/* Product */}
                    <div className="md:col-span-6 flex items-center gap-4">
                      <div className="relative w-20 h-20 flex-shrink-0 bg-[#1A1A1A] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <div>
                        <h3 className="font-serif text-base text-white mb-1">
                          {item.name}
                        </h3>
                        <p className="text-[#C0C0C0] text-xs font-sans mb-2">
                          サイズ: {item.size}
                        </p>
                        <p className="text-[#B8960C] text-sm font-sans">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="md:col-span-3 flex items-center justify-center">
                      <div className="flex items-center border border-[#2A2A2A]">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center text-[#C0C0C0] hover:text-white hover:bg-[#2A2A2A] transition-colors"
                        >
                          −
                        </button>
                        <span className="w-10 h-8 flex items-center justify-center text-white text-sm font-sans border-x border-[#2A2A2A]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center text-[#C0C0C0] hover:text-white hover:bg-[#2A2A2A] transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Subtotal & Remove */}
                    <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-4">
                      <p className="text-white font-sans text-sm">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[#C0C0C0] hover:text-white text-xs font-sans tracking-wider transition-colors"
                      >
                        削除
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-[#C0C0C0] hover:text-[#B8960C] text-sm font-sans tracking-wider transition-colors"
                >
                  ← ショッピングを続ける
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-8">
                <h2 className="font-serif text-xl text-white mb-6 tracking-wide">
                  注文概要
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm font-sans">
                    <span className="text-[#C0C0C0]">小計</span>
                    <span className="text-white">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-sans">
                    <span className="text-[#C0C0C0]">送料</span>
                    <span className="text-white">
                      {shipping === 0 ? "無料" : formatPrice(shipping)}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-[#B8960C] text-xs font-sans">
                      10,000円以上のため送料無料
                    </p>
                  )}
                  <div className="border-t border-[#2A2A2A] pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-sans text-sm tracking-wider">
                        合計（税込）
                      </span>
                      <span className="font-serif text-2xl text-[#B8960C]">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  className="block w-full bg-[#B8960C] text-black hover:bg-[#C9A84C] py-4 text-sm tracking-[0.2em] font-sans font-medium transition-colors duration-200 text-center"
                >
                  決済に進む
                </Link>
                <p className="text-[#C0C0C0] text-xs font-sans text-center mt-4">
                  クレジットカード・コンビニ払い・銀行振込
                </p>
              </div>

              {/* Coupon */}
              <div className="mt-4 bg-[#1A1A1A] border border-[#2A2A2A] p-6">
                <p className="text-[#C0C0C0] text-xs font-sans mb-3 tracking-wider">
                  クーポンコード
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="コードを入力"
                    className="flex-1 bg-[#0D0D0D] border border-[#2A2A2A] text-white text-sm font-sans px-3 py-2 focus:outline-none focus:border-[#B8960C]"
                  />
                  <button className="px-4 py-2 border border-[#2A2A2A] text-[#C0C0C0] text-sm font-sans hover:border-[#B8960C] hover:text-[#B8960C] transition-colors">
                    適用
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
