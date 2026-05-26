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
    <div className="min-h-screen bg-[#F5F5F5] flex">
      <aside className="w-60 bg-white border-r border-[#E0E0E0] flex flex-col">
        <div className="p-6 border-b border-[#E0E0E0]">
          <Link href="/" className="font-sans font-light text-xl tracking-widest text-[#111111]">ARGENT</Link>
          <p className="text-[#888888] text-xs mt-1">管理画面</p>
        </div>
        <nav className="flex-1 p-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded text-[#888888] hover:bg-[#F5F5F5] hover:text-[#111111] transition-colors mb-1 text-sm">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-[#E0E0E0]">
          <Link href="/" className="text-[#888888] text-xs hover:text-[#111111] transition-colors">← サイトに戻る</Link>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-[#E0E0E0] px-8 py-4 flex justify-between items-center">
          <p className="text-[#888888] text-sm">管理ダッシュボード</p>
          <span className="text-[#888888] text-sm">管理者: 山田 太郎</span>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
