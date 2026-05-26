import Link from "next/link";

const kpis = [
  { label: "本日の売上", value: "¥48,200", sub: "+12%", color: "text-[#C9A84C]" },
  { label: "本日の注文数", value: "23件", sub: "今日", color: "text-[#E8C97A]" },
  { label: "本日のアクセス", value: "1,240 PV", sub: "今日", color: "text-[#F5F0E8]" },
  { label: "在庫切れ商品", value: "2点", sub: "⚠️ 要対応", color: "text-amber-400" },
];

const recentOrders = [
  { id: "#ORD-2024-090", customer: "田中 花子", amount: "¥9,800", status: "未対応", color: "bg-amber-900/40 text-amber-400" },
  { id: "#ORD-2024-089", customer: "山田 太郎", amount: "¥32,300", status: "発送済", color: "bg-blue-900/40 text-blue-400" },
  { id: "#ORD-2024-088", customer: "佐藤 美咲", amount: "¥16,500", status: "完了", color: "bg-emerald-900/40 text-emerald-400" },
  { id: "#ORD-2024-087", customer: "鈴木 一郎", amount: "¥28,000", status: "発送済", color: "bg-blue-900/40 text-blue-400" },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-serif text-2xl text-[#C9A84C] tracking-wider">ダッシュボード</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-[#1A1A2E] border border-[#2E2E50] p-5">
            <p className="text-[#F5F0E8]/40 text-xs tracking-wider mb-2">{k.label}</p>
            <p className={`font-serif text-2xl ${k.color}`}>{k.value}</p>
            <p className="text-[#F5F0E8]/30 text-xs mt-1">{k.sub}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#1A1A2E] border border-[#2E2E50]">
        <div className="px-6 py-4 border-b border-[#2E2E50] flex justify-between">
          <h2 className="font-serif text-[#C9A84C]">直近の注文</h2>
          <Link href="/admin/orders" className="text-[#C9A84C]/60 text-sm hover:text-[#C9A84C]">全て見る →</Link>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#2E2E50] text-[#F5F0E8]/30 text-xs tracking-wider">
            {["注文番号","顧客名","金額","ステータス"].map((h) => <th key={h} className="px-6 py-3 text-left">{h}</th>)}
          </tr></thead>
          <tbody>
            {recentOrders.map((o) => (
              <tr key={o.id} className="border-b border-[#2E2E50] hover:bg-[#252545] transition-colors">
                <td className="px-6 py-3 text-[#C9A84C]/80 font-mono text-xs">{o.id}</td>
                <td className="px-6 py-3 text-[#F5F0E8]/80">{o.customer}</td>
                <td className="px-6 py-3 text-[#C9A84C]">{o.amount}</td>
                <td className="px-6 py-3"><span className={`px-2 py-0.5 text-xs ${o.color}`}>{o.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-3 border-t border-[#2E2E50]">
          <p className="text-[#F5F0E8]/30 text-xs">在庫アラート: ⚠️ Moon Drop Earrings / Constellation Earrings — 在庫切れ</p>
        </div>
      </div>
    </div>
  );
}
