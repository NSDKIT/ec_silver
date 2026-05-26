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
    <div className="min-h-screen bg-[#FAF8F5] flex">
      <aside className="w-60 bg-[#E8DDD0] border-r border-[#D4C5B5] flex flex-col">
        <div className="p-6 border-b border-[#D4C5B5]">
          <Link href="/" className="font-serif text-xl text-[#7B5E4A] tracking-widest">SILMO</Link>
          <p className="text-[#9E9082] text-xs mt-1">管理画面</p>
        </div>
        <nav className="flex-1 p-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#9E9082] hover:bg-[#FAF8F5] hover:text-[#7B5E4A] transition-colors mb-1 text-sm">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-[#D4C5B5]">
          <Link href="/" className="text-[#9E9082] text-xs hover:text-[#C17B5C] transition-colors">← サイトに戻る</Link>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <header className="bg-[#FAF8F5] border-b border-[#E8DDD0] px-8 py-4 flex justify-between items-center">
          <p className="text-[#9E9082] text-sm font-serif">管理ダッシュボード</p>
          <span className="text-[#9E9082] text-sm">管理者: 山田 太郎</span>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
