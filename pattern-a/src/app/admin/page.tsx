const kpiCards = [
  {
    label: "本日の売上",
    value: "¥48,200",
    badge: "+12%",
    badgeColor: "bg-emerald-500/20 text-emerald-400",
    valueColor: "text-[#B8960C]",
  },
  {
    label: "本日の注文数",
    value: "23件",
    badge: null,
    badgeColor: "",
    valueColor: "text-[#B8960C]",
  },
  {
    label: "本日のアクセス",
    value: "1,240",
    badge: "PV",
    badgeColor: "bg-[#2A2A2A] text-[#C0C0C0]",
    valueColor: "text-[#B8960C]",
  },
  {
    label: "在庫切れ商品",
    value: "2点",
    badge: "要対応",
    badgeColor: "bg-amber-500/20 text-amber-400",
    valueColor: "text-amber-400",
  },
];

const recentOrders = [
  { id: "#ORD-2024-090", customer: "田中 花子", amount: "¥8,800", status: "未対応", statusStyle: "bg-amber-500/20 text-amber-400" },
  { id: "#ORD-2024-089", customer: "山田 太郎", amount: "¥27,300", status: "発送済", statusStyle: "bg-blue-500/20 text-blue-400" },
  { id: "#ORD-2024-088", customer: "佐藤 美咲", amount: "¥12,800", status: "完了", statusStyle: "bg-[#2A2A2A] text-[#C0C0C0]" },
  { id: "#ORD-2024-087", customer: "鈴木 一郎", amount: "¥22,000", status: "発送済", statusStyle: "bg-blue-500/20 text-blue-400" },
  { id: "#ORD-2024-086", customer: "高橋 由美", amount: "¥7,200", status: "未対応", statusStyle: "bg-amber-500/20 text-amber-400" },
];

const stockAlerts = [
  { name: "Moon Earrings", stock: 0 },
  { name: "Leaf Bangle", stock: 0 },
];

// Weekly sales data (Mon–Sun)
const weeklySales = [
  { day: "月", height: 40, amount: "¥18,200" },
  { day: "火", height: 55, amount: "¥24,800" },
  { day: "水", height: 35, amount: "¥15,600" },
  { day: "木", height: 70, amount: "¥31,400" },
  { day: "金", height: 85, amount: "¥38,100" },
  { day: "土", height: 95, amount: "¥42,700" },
  { day: "日", height: 100, amount: "¥48,200" },
];

export default function AdminDashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* Title */}
      <div>
        <p className="text-[#B8960C] text-xs tracking-[0.5em] font-sans mb-1">ADMIN</p>
        <h1 className="font-serif text-3xl text-white tracking-wide">ダッシュボード</h1>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((card) => (
          <div
            key={card.label}
            className="bg-[#1A1A1A] border border-[#2A2A2A] p-6"
          >
            <div className="flex items-start justify-between mb-3">
              <p className="text-[#C0C0C0] text-xs font-sans tracking-wider leading-relaxed">
                {card.label}
              </p>
              {card.badge && (
                <span
                  className={`text-xs font-sans px-2 py-0.5 rounded-sm ${card.badgeColor}`}
                >
                  {card.badge}
                </span>
              )}
            </div>
            <p className={`font-serif text-3xl ${card.valueColor}`}>
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Orders + Stock Alerts row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="xl:col-span-2 bg-[#1A1A1A] border border-[#2A2A2A] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#2A2A2A] flex items-center justify-between">
            <h2 className="font-serif text-lg text-white tracking-wide">最近の注文</h2>
            <span className="text-[#B8960C] text-xs font-sans tracking-wider">
              全件表示 →
            </span>
          </div>
          <div>
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 px-6 py-3 border-b border-[#2A2A2A]">
              {["注文番号", "顧客名", "金額", "ステータス"].map((h) => (
                <span key={h} className="text-[#C0C0C0] text-xs tracking-widest font-sans">
                  {h}
                </span>
              ))}
            </div>
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-[#2A2A2A] last:border-0 items-center hover:bg-[#2A2A2A]/30 transition-colors"
              >
                <span className="text-white font-sans text-sm">{order.id}</span>
                <span className="text-[#C0C0C0] font-sans text-sm">{order.customer}</span>
                <span className="text-[#B8960C] font-sans text-sm">{order.amount}</span>
                <span
                  className={`inline-flex items-center px-2 py-1 text-xs font-sans w-fit rounded-sm ${order.statusStyle}`}
                >
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stock Alerts */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#2A2A2A]">
            <h2 className="font-serif text-lg text-white tracking-wide">在庫アラート</h2>
          </div>
          <div className="p-6 space-y-4">
            {stockAlerts.map((product) => (
              <div
                key={product.name}
                className="flex items-center justify-between p-4 border border-amber-500/30 bg-amber-500/5"
              >
                <div>
                  <p className="text-white text-sm font-sans">{product.name}</p>
                  <p className="text-amber-400 text-xs font-sans mt-1">
                    ⚠️ 在庫切れ
                  </p>
                </div>
                <span className="text-xs font-sans bg-amber-500/20 text-amber-400 px-2 py-1 rounded-sm">
                  0個
                </span>
              </div>
            ))}
            <p className="text-[#C0C0C0] text-xs font-sans text-center pt-2">
              在庫が0の商品: 2点
            </p>
          </div>
        </div>
      </div>

      {/* Weekly Sales Chart */}
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-8">
        <h2 className="font-serif text-lg text-white tracking-wide mb-6">
          週間売上推移
        </h2>
        <div className="flex items-end justify-between gap-3 h-40">
          {weeklySales.map((day) => (
            <div key={day.day} className="flex flex-col items-center flex-1 gap-2">
              <span className="text-[#C0C0C0] text-xs font-sans hidden lg:block">
                {day.amount}
              </span>
              <div className="w-full flex items-end justify-center" style={{ height: "100px" }}>
                <div
                  className="w-full bg-[#B8960C] hover:bg-[#C9A84C] transition-colors duration-200 rounded-t-sm"
                  style={{ height: `${day.height}%` }}
                  title={day.amount}
                />
              </div>
              <span className="text-[#C0C0C0] text-xs font-sans">{day.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
