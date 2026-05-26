import Link from "next/link";

const navItems = [
  { icon: "📊", label: "ダッシュボード", href: "/admin" },
  { icon: "📦", label: "商品管理", href: "/admin/products" },
  { icon: "📋", label: "注文管理", href: "/admin/orders" },
  { icon: "📝", label: "ページ管理", href: "/admin/pages" },
  { icon: "📡", label: "運用状況", href: "/admin/monitoring" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0D0D0D]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1A1A1A] border-r border-[#2A2A2A] flex flex-col flex-shrink-0">
        {/* Brand */}
        <div className="px-6 py-8 border-b border-[#2A2A2A]">
          <p className="font-serif text-2xl text-[#B8960C] tracking-[0.3em]">
            SILMO
          </p>
          <p className="text-[#C0C0C0] text-xs font-sans tracking-widest mt-1">
            管理画面
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-6 py-3 text-[#C0C0C0] hover:text-white hover:bg-[#2A2A2A] transition-all duration-200 text-sm font-sans group"
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="tracking-wider group-hover:text-[#B8960C] transition-colors">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Back to site */}
        <div className="px-6 py-6 border-t border-[#2A2A2A]">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#C0C0C0] hover:text-[#B8960C] text-xs font-sans tracking-wider transition-colors"
          >
            <span>←</span>
            <span>サイトに戻る</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="bg-[#1A1A1A] border-b border-[#2A2A2A] px-8 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-[#B8960C]" />
            <span className="text-[#C0C0C0] text-xs font-sans tracking-widest">
              SILMO ADMIN PANEL
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-[#B8960C]/20 border border-[#B8960C]/40 flex items-center justify-center">
              <span className="text-[#B8960C] text-xs font-serif">山</span>
            </div>
            <span className="text-[#C0C0C0] text-sm font-sans">
              管理者: 山田 太郎
            </span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
