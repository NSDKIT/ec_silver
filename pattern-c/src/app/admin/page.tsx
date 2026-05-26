import Link from "next/link";

const kpis = [
  { label: "本日の売上", value: "¥48,200", sub: "+12%", color: "text-[#C17B5C]" },
  { label: "本日の注文数", value: "23件", sub: "今日", color: "text-[#7B5E4A]" },
  { label: "本日のアクセス", value: "1,240 PV", sub: "今日", color: "text-[#7B5E4A]" },
  { label: "在庫切れ商品", value: "2点", sub: "⚠️ 要対応", color: "text-amber-600" },
];

const recentOrders = [
  { id: "#ORD-2024-090", customer: "田中 花子", amount: "¥9,800", status: "未対応", color: "bg-amber-100 text-amber-700" },
  { id: "#ORD-2024-089", customer: "山田 太郎", amount: "¥28,800", status: "発送済", color: "bg-blue-100 text-blue-700" },
  { id: "#ORD-2024-088", customer: "佐藤 美咲", amount: "¥12,800", status: "完了", color: "bg-emerald-100 text-emerald-700" },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-serif text-2xl text-[#7B5E4A]">ダッシュボード</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white border border-[#E8DDD0] rounded-lg p-4">
            <p className="text-[#9E9082] text-xs mb-1">{k.label}</p>
            <p className={`text-2xl font-serif ${k.color}`}>{k.value}</p>
            <p className="text-[#9E9082] text-xs mt-1">{k.sub}</p>
          </div>
        ))}
      </div>
      <div className="bg-white border border-[#E8DDD0] rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-[#E8DDD0] flex justify-between">
          <h2 className="font-serif text-[#7B5E4A]">直近の注文</h2>
          <Link href="/admin/orders" className="text-[#C17B5C] text-sm hover:underline">全て見る →</Link>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#E8DDD0] text-[#9E9082] text-xs">
            <th className="px-6 py-3 text-left">注文番号</th>
            <th className="px-6 py-3 text-left">顧客名</th>
            <th className="px-6 py-3 text-left">金額</th>
            <th className="px-6 py-3 text-left">ステータス</th>
          </tr></thead>
          <tbody>
            {recentOrders.map((o) => (
              <tr key={o.id} className="border-b border-[#E8DDD0] hover:bg-[#FAF8F5] transition-colors">
                <td className="px-6 py-3 text-[#7B5E4A] text-xs font-mono">{o.id}</td>
                <td className="px-6 py-3 text-[#7B5E4A]">{o.customer}</td>
                <td className="px-6 py-3 text-[#C17B5C]">{o.amount}</td>
                <td className="px-6 py-3"><span className={`px-2 py-0.5 rounded text-xs ${o.color}`}>{o.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-3 border-t border-[#E8DDD0]">
          <p className="text-[#9E9082] text-xs">在庫アラート: ⚠️ 雫のピアス — 在庫切れ　⚠️ 葉のバングル — 在庫切れ</p>
        </div>
      </div>
    </div>
  );
}
