import Link from "next/link";
import Image from "next/image";

const stats = [
  { label: "ポイント残高", value: "1,250", unit: "P", color: "text-[#B8960C]" },
  { label: "お気に入り", value: "5", unit: "点", color: "text-white" },
  { label: "ご注文", value: "12", unit: "回", color: "text-white" },
  { label: "会員ランク", value: "SILVER", unit: "", color: "text-[#C0C0C0]" },
];

const recentOrders = [
  {
    id: "ORD-2024-089",
    date: "2024/11/15",
    amount: "¥27,300",
    status: "配送済み",
    statusColor: "text-emerald-400 bg-emerald-400/10",
  },
  {
    id: "ORD-2024-076",
    date: "2024/10/28",
    amount: "¥8,800",
    status: "完了",
    statusColor: "text-[#C0C0C0] bg-[#C0C0C0]/10",
  },
  {
    id: "ORD-2024-055",
    date: "2024/09/10",
    amount: "¥18,500",
    status: "完了",
    statusColor: "text-[#C0C0C0] bg-[#C0C0C0]/10",
  },
];

const favoriteProducts = [
  {
    id: 6,
    name: "Cross Pendant",
    price: "¥22,000",
    image:
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400&q=80",
  },
  {
    id: 3,
    name: "Bangle 03",
    price: "¥12,800",
    image:
      "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=400&q=80",
  },
];

export default function MyPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 border-b border-[#2A2A2A] px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#B8960C] text-xs tracking-[0.5em] font-sans mb-2">
            WELCOME BACK
          </p>
          <h1 className="font-serif text-4xl text-white">
            山田 太郎{" "}
            <span className="text-[#B8960C] text-2xl">様</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Stat Cards */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 text-center"
              >
                <p className="text-[#C0C0C0] text-xs tracking-widest font-sans mb-3">
                  {stat.label}
                </p>
                <p className={`font-serif text-3xl ${stat.color}`}>
                  {stat.value}
                  <span className="text-base ml-1">{stat.unit}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Orders */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-serif text-2xl text-white tracking-wide">
              最近の注文
            </h2>
            <Link
              href="#"
              className="text-[#B8960C] text-xs font-sans tracking-wider hover:text-[#C9A84C] transition-colors"
            >
              全ての注文を見る →
            </Link>
          </div>
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] overflow-hidden">
            <div className="hidden md:grid grid-cols-5 gap-4 px-6 py-3 border-b border-[#2A2A2A]">
              {["注文番号", "注文日", "金額", "ステータス", "操作"].map((h) => (
                <span key={h} className="text-[#C0C0C0] text-xs tracking-widest font-sans">
                  {h}
                </span>
              ))}
            </div>
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="grid grid-cols-2 md:grid-cols-5 gap-4 px-6 py-5 border-b border-[#2A2A2A] last:border-0 items-center"
              >
                <span className="text-white font-sans text-sm">
                  #{order.id}
                </span>
                <span className="text-[#C0C0C0] font-sans text-sm">
                  {order.date}
                </span>
                <span className="text-[#B8960C] font-sans text-sm">
                  {order.amount}
                </span>
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-sm text-xs font-sans w-fit ${order.statusColor}`}
                >
                  {order.status}
                </span>
                <Link
                  href={`/mypage/orders/${order.id}`}
                  className="text-[#C0C0C0] hover:text-[#B8960C] text-xs font-sans tracking-wider transition-colors"
                >
                  詳細を見る
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Favorites */}
        <section>
          <h2 className="font-serif text-2xl text-white tracking-wide mb-6">
            お気に入り
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favoriteProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#1A1A1A] border border-[#2A2A2A] overflow-hidden group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-base text-white mb-1">
                      {product.name}
                    </h3>
                    <p className="text-[#B8960C] font-sans text-sm">
                      {product.price}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/products/${product.id}`}
                      className="text-xs text-[#C0C0C0] hover:text-[#B8960C] font-sans transition-colors"
                    >
                      詳細
                    </Link>
                    <button className="text-xs text-[#C0C0C0] hover:text-red-400 font-sans transition-colors">
                      削除
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Account Links */}
        <section>
          <h2 className="font-serif text-2xl text-white tracking-wide mb-6">
            アカウント設定
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "会員情報の変更", href: "#" },
              { label: "パスワードの変更", href: "#" },
              { label: "配送先住所の管理", href: "#" },
              { label: "ログアウト", href: "#" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between px-6 py-4 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#B8960C] text-[#C0C0C0] hover:text-white text-sm font-sans tracking-wider transition-all duration-200"
              >
                {item.label}
                <span className="text-[#B8960C]">→</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
