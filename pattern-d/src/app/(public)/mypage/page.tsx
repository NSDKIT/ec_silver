import Link from "next/link";
import Image from "next/image";

const orders = [
  { id: "#ORD-2024-089", date: "2024/11/19", product: "Silver Feather Necklace 他1点", amount: "¥32,300", status: "発送済", color: "bg-blue-900/40 text-blue-400" },
  { id: "#ORD-2024-076", date: "2024/10/28", product: "SILMO No.01 Silver Ring", amount: "¥9,800", status: "完了", color: "bg-[#2E2E50] text-[#F5F0E8]/40" },
  { id: "#ORD-2024-055", date: "2024/09/10", product: "Heritage Bangle", amount: "¥16,500", status: "完了", color: "bg-[#2E2E50] text-[#F5F0E8]/40" },
];

export default function MypagePage() {
  return (
    <div className="bg-[#1A1A2E] min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div>
          <p className="text-[#C9A84C]/60 text-xs tracking-widest">WELCOME BACK</p>
          <h1 className="font-serif text-3xl text-[#F5F0E8] mt-1">山田 太郎 様</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "ポイント残高", value: "1,250P", icon: "✦" },
            { label: "お気に入り", value: "5点", icon: "♡" },
            { label: "ご注文回数", value: "12回", icon: "◇" },
            { label: "会員ランク", value: "SILVER", icon: "⬡" },
          ].map((s) => (
            <div key={s.label} className="bg-[#252545] border border-[#2E2E50] p-5 text-center">
              <p className="text-[#C9A84C] text-2xl mb-2">{s.icon}</p>
              <p className="text-[#C9A84C] font-serif text-xl">{s.value}</p>
              <p className="text-[#F5F0E8]/40 text-xs mt-1 tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#252545] border border-[#2E2E50]">
          <div className="px-6 py-4 border-b border-[#2E2E50] flex justify-between">
            <h2 className="font-serif text-[#C9A84C]">ご注文履歴</h2>
            <Link href="/mypage/orders/ORD-2024-089" className="text-[#C9A84C]/60 text-sm hover:text-[#C9A84C]">全て見る →</Link>
          </div>
          <div className="divide-y divide-[#2E2E50]">
            {orders.map((o) => (
              <div key={o.id} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-[#F5F0E8] text-sm font-mono">{o.id}</p>
                  <p className="text-[#F5F0E8]/40 text-xs mt-0.5">{o.date} / {o.product}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-[#C9A84C] font-medium">{o.amount}</p>
                  <span className={`px-2 py-0.5 rounded text-xs ${o.color}`}>{o.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-serif text-xl text-[#C9A84C] mb-4">お気に入り</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Eternal Cross Pendant", price: "¥28,000", img: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=200&q=80" },
              { name: "Silver Feather Necklace", price: "¥22,000", img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=200&q=80" },
            ].map((f) => (
              <div key={f.name} className="bg-[#252545] border border-[#2E2E50] overflow-hidden">
                <div className="relative h-32"><Image src={f.img} alt={f.name} fill className="object-cover" /></div>
                <div className="p-3">
                  <p className="text-[#F5F0E8] text-sm">{f.name}</p>
                  <p className="text-[#C9A84C] text-sm mt-0.5">{f.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
