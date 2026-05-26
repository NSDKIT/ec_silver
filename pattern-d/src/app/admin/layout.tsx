import Link from "next/link";

const navItems = [
  { href: "/admin", label: "ダッシュボード", icon: "📊" },
  { href: "/admin/products", label: "商品管理", icon: "📦" },
  { href: "/admin/orders", label: "注文管理", icon: "📋" },
  { href: "/admin/pages", label: "ページ管理", icon: "📝" },
  { href: "/admin/monitoring", label: "運用状況", icon: "📡" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0F0F20] flex">
      <aside className="w-64 bg-[#1A1A2E] border-r border-[#2E2E50] flex flex-col">
        <div className="p-6 border-b border-[#2E2E50]">
          <Link href="/" className="font-serif text-xl tracking-[0.3em] text-[#C9A84C]">SILMO</Link>
          <p className="text-[#F5F0E8]/30 text-xs mt-1 tracking-wider">ADMIN</p>
        </div>
        <nav className="flex-1 p-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-[#F5F0E8]/50 hover:bg-[#252545] hover:text-[#C9A84C] transition-colors mb-1 text-sm">
              <span>{item.icon}</span><span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-[#2E2E50]">
          <Link href="/" className="text-[#F5F0E8]/30 text-xs hover:text-[#C9A84C] transition-colors">← サイトに戻る</Link>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <header className="bg-[#1A1A2E] border-b border-[#2E2E50] px-8 py-4 flex justify-between items-center">
          <p className="text-[#F5F0E8]/40 text-sm">管理ダッシュボード</p>
          <span className="text-[#F5F0E8]/40 text-sm">管理者: 山田 太郎</span>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
