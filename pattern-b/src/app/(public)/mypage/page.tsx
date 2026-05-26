import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "マイページ | ARGENT",
};

const recentOrders = [
  {
    id: "ORD-2024-001",
    date: "2024-03-15",
    status: "配送済み",
    items: ["Ring 01", "Feather Necklace"],
    total: 27300,
  },
  {
    id: "ORD-2024-002",
    date: "2024-02-20",
    status: "配送済み",
    items: ["Bangle 03"],
    total: 12800,
  },
];

const menuItems = [
  {
    href: "/mypage",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: "プロフィール",
  },
  {
    href: "/mypage/orders/1",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    label: "注文履歴",
  },
  {
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    label: "お気に入り",
  },
  {
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "住所一覧",
  },
];

export default function MyPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#F5F5F5] py-12 border-b border-[#E0E0E0]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-[#888888] uppercase mb-2">
            My Account
          </p>
          <h1 className="text-3xl font-light text-[#111111] tracking-tight">
            マイページ
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="mb-6 p-6 bg-[#F5F5F5] border border-[#E0E0E0]">
              <p className="text-base font-light text-[#111111] mb-1">
                山田 花子
              </p>
              <p className="text-xs font-light text-[#888888]">
                hanako@example.com
              </p>
              <p className="text-xs font-light text-[#888888] mt-1">
                会員歴: 2年3ヶ月
              </p>
            </div>
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-light text-[#888888] hover:text-[#111111] hover:bg-[#F5F5F5] transition-colors"
                >
                  <span className="text-[#888888]">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
              <button className="flex items-center gap-3 px-4 py-3 text-sm font-light text-[#888888] hover:text-[#111111] hover:bg-[#F5F5F5] transition-colors w-full text-left">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                ログアウト
              </button>
            </nav>
          </aside>

          {/* Main */}
          <div className="lg:col-span-3 space-y-10">
            {/* Profile */}
            <section>
              <h2 className="text-sm font-normal text-[#111111] tracking-widest uppercase mb-6 pb-3 border-b border-[#E0E0E0]">
                プロフィール
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-light text-[#888888] mb-1">
                    氏名
                  </label>
                  <p className="text-sm font-light text-[#111111]">山田 花子</p>
                </div>
                <div>
                  <label className="block text-xs font-light text-[#888888] mb-1">
                    メールアドレス
                  </label>
                  <p className="text-sm font-light text-[#111111]">
                    hanako@example.com
                  </p>
                </div>
                <div>
                  <label className="block text-xs font-light text-[#888888] mb-1">
                    電話番号
                  </label>
                  <p className="text-sm font-light text-[#111111]">
                    090-1234-5678
                  </p>
                </div>
                <div>
                  <label className="block text-xs font-light text-[#888888] mb-1">
                    会員ランク
                  </label>
                  <p className="text-sm font-light text-[#111111]">
                    シルバー会員
                  </p>
                </div>
              </div>
              <button className="mt-6 px-6 py-2 border border-[#111111] text-sm font-light text-[#111111] hover:bg-[#111111] hover:text-white transition-colors">
                編集する
              </button>
            </section>

            {/* Recent Orders */}
            <section>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#E0E0E0]">
                <h2 className="text-sm font-normal text-[#111111] tracking-widest uppercase">
                  最近の注文
                </h2>
                <Link
                  href="/mypage/orders/1"
                  className="text-xs font-light text-[#888888] hover:text-[#111111] transition-colors underline underline-offset-4"
                >
                  すべて見る
                </Link>
              </div>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <Link
                    key={order.id}
                    href={`/mypage/orders/${order.id}`}
                    className="block p-5 border border-[#E0E0E0] hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs font-light text-[#888888] mb-1">
                          {order.date}
                        </p>
                        <p className="text-sm font-normal text-[#111111] mb-1">
                          {order.id}
                        </p>
                        <p className="text-xs font-light text-[#888888]">
                          {order.items.join("、")}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 text-xs font-light bg-[#F5F5F5] text-[#888888] mb-2">
                          {order.status}
                        </span>
                        <p className="text-sm font-light text-[#111111]">
                          ¥{order.total.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
