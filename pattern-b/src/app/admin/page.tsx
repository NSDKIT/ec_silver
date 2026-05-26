import Link from "next/link";

const kpis = [
  { label: "本日の売上", value: "¥48,200", sub: "+12%", color: "text-green-600" },
  { label: "本日の注文数", value: "23件", sub: "今日", color: "text-blue-600" },
  { label: "本日のアクセス", value: "1,240 PV", sub: "今日", color: "text-[#111111]" },
  { label: "在庫切れ商品", value: "2点", sub: "⚠️ 要対応", color: "text-red-500" },
];

const recentOrders = [
  { id: "#ORD-2024-090", customer: "田中 花子", amount: "¥8,800", status: "未対応", statusColor: "bg-amber-100 text-amber-700" },
  { id: "#ORD-2024-089", customer: "山田 太郎", amount: "¥27,300", status: "発送済", statusColor: "bg-blue-100 text-blue-700" },
  { id: "#ORD-2024-088", customer: "佐藤 美咲", amount: "¥12,800", status: "完了", statusColor: "bg-green-100 text-green-700" },
  { id: "#ORD-2024-087", customer: "鈴木 一郎", amount: "¥22,000", status: "発送済", statusColor: "bg-blue-100 text-blue-700" },
  { id: "#ORD-2024-086", customer: "高橋 由美", amount: "¥7,200", status: "未対応", statusColor: "bg-amber-100 text-amber-700" },
];

const weeklyData = [65, 80, 55, 90, 72, 88, 95];
const days = ["月", "火", "水", "木", "金", "土", "日"];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium text-[#111111] tracking-wide">ダッシュボード</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white border border-[#E0E0E0] rounded p-4">
            <p className="text-[#888888] text-xs mb-1">{k.label}</p>
            <p className={`text-2xl font-light ${k.color}`}>{k.value}</p>
            <p className="text-[#888888] text-xs mt-1">{k.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-[#E0E0E0] rounded overflow-hidden">
          <div className="px-4 py-3 border-b border-[#E0E0E0]">
            <h2 className="text-sm font-medium text-[#111111]">直近の注文</h2>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#E0E0E0] text-[#888888] text-xs">
                <th className="px-4 py-2 text-left">注文番号</th>
                <th className="px-4 py-2 text-left">顧客名</th>
                <th className="px-4 py-2 text-left">金額</th>
                <th className="px-4 py-2 text-left">ステータス</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id} className="border-b border-[#E0E0E0] hover:bg-[#F5F5F5] transition-colors">
                  <td className="px-4 py-2.5 text-[#111111] font-mono text-xs">{o.id}</td>
                  <td className="px-4 py-2.5 text-[#111111]">{o.customer}</td>
                  <td className="px-4 py-2.5 text-[#111111]">{o.amount}</td>
                  <td className="px-4 py-2.5">
                    <span className={`px-2 py-0.5 rounded text-xs ${o.statusColor}`}>{o.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-4 py-2 border-t border-[#E0E0E0]">
            <Link href="/admin/orders" className="text-xs text-[#888888] hover:text-[#111111] underline">全ての注文を見る →</Link>
          </div>
        </div>

        <div className="bg-white border border-[#E0E0E0] rounded p-4">
          <h2 className="text-sm font-medium text-[#111111] mb-4">今週の売上</h2>
          <div className="flex items-end gap-2 h-32">
            {weeklyData.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-[#111111] rounded-t" style={{ height: `${v}%` }} />
                <span className="text-[#888888] text-xs">{days[i]}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-[#E0E0E0]">
            <p className="text-xs text-[#888888]">在庫アラート</p>
            <div className="mt-2 space-y-1">
              <p className="text-xs text-red-500">⚠️ Moon Earrings — 在庫切れ</p>
              <p className="text-xs text-red-500">⚠️ Leaf Bangle — 在庫切れ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
