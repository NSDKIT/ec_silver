import Link from "next/link";
import Image from "next/image";

const orders = [
  { id: "#ORD-2024-089", date: "2024/11/19", product: "羽のネックレス 他1点", amount: "¥27,300", status: "配送済み", color: "bg-emerald-100 text-emerald-700" },
  { id: "#ORD-2024-076", date: "2024/10/28", product: "月の指輪", amount: "¥9,800", status: "完了", color: "bg-[#E8DDD0] text-[#9E9082]" },
  { id: "#ORD-2024-055", date: "2024/09/10", product: "草のバングル", amount: "¥12,800", status: "完了", color: "bg-[#E8DDD0] text-[#9E9082]" },
];

const favorites = [
  { id: 6, name: "十字のペンダント", price: "¥22,000", img: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=200&q=80" },
  { id: 1, name: "月の指輪", price: "¥9,800", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&q=80" },
];

export default function MypagePage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div>
          <h1 className="font-serif text-2xl text-[#7B5E4A]">山田 太郎 さん、ようこそ</h1>
          <p className="text-[#9E9082] text-sm mt-1">マイページへようこそ</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "ポイント残高", value: "1,250P", icon: "✨" },
            { label: "お気に入り", value: "5点", icon: "♡" },
            { label: "ご注文回数", value: "12回", icon: "📦" },
            { label: "会員ランク", value: "SILVER", icon: "🥈" },
          ].map((s) => (
            <div key={s.label} className="bg-[#E8DDD0] rounded-lg p-4 text-center">
              <p className="text-2xl mb-1">{s.icon}</p>
              <p className="text-[#C17B5C] text-xl font-serif font-medium">{s.value}</p>
              <p className="text-[#9E9082] text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg border border-[#E8DDD0] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E8DDD0] flex justify-between items-center">
            <h2 className="font-serif text-[#7B5E4A]">最近の注文</h2>
            <Link href="/mypage/orders/ORD-2024-089" className="text-[#C17B5C] text-sm hover:underline">全て見る →</Link>
          </div>
          <div className="divide-y divide-[#E8DDD0]">
            {orders.map((o) => (
              <div key={o.id} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-[#7B5E4A] text-sm font-medium">{o.id}</p>
                  <p className="text-[#9E9082] text-xs mt-0.5">{o.date} / {o.product}</p>
                </div>
                <div className="text-right flex items-center gap-3">
                  <p className="text-[#7B5E4A] font-medium">{o.amount}</p>
                  <span className={`px-2 py-0.5 rounded text-xs ${o.color}`}>{o.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif text-xl text-[#7B5E4A] mb-4">お気に入り</h2>
          <div className="grid grid-cols-2 gap-4">
            {favorites.map((f) => (
              <div key={f.id} className="bg-white rounded-lg border border-[#E8DDD0] overflow-hidden">
                <div className="relative h-32">
                  <Image src={f.img} alt={f.name} fill className="object-cover" />
                </div>
                <div className="p-3">
                  <p className="text-[#7B5E4A] text-sm font-medium">{f.name}</p>
                  <p className="text-[#C17B5C] text-sm mt-0.5">{f.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
