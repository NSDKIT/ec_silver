import Link from "next/link";

const col1 = [
  { href: "/products", label: "コレクション" },
  { href: "/about", label: "ブランドについて" },
  { href: "/contact", label: "お問い合わせ" },
];

const col2 = [
  { href: "/mypage", label: "マイページ" },
  { href: "/cart", label: "カート" },
  { href: "/checkout", label: "お会計" },
];

const col3 = [
  { href: "/legal", label: "特定商取引法に基づく表記" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] border-t border-[#E0E0E0]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <p className="text-xl font-light tracking-[0.3em] text-[#111111] mb-4">
              ARGENT
            </p>
            <p className="text-sm font-light text-[#888888] leading-relaxed">
              シルバーアクセサリーブランド<br />
              アルジャン
            </p>
            <p className="text-xs font-light text-[#888888] mt-4 leading-relaxed">
              東京都渋谷区神宮前1-2-3<br />
              アルジャンビル 2F
            </p>
          </div>

          {/* Col 1 */}
          <div>
            <h3 className="text-xs font-normal text-[#111111] tracking-widest uppercase mb-5">
              Shop
            </h3>
            <ul className="space-y-3">
              {col1.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-[#888888] hover:text-[#111111] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-xs font-normal text-[#111111] tracking-widest uppercase mb-5">
              Account
            </h3>
            <ul className="space-y-3">
              {col2.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-[#888888] hover:text-[#111111] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-xs font-normal text-[#111111] tracking-widest uppercase mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {col3.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-[#888888] hover:text-[#111111] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#E0E0E0] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light text-[#888888]">
            © 2024 ARGENT（アルジャン）. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs font-light text-[#888888] hover:text-[#111111] transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              className="text-xs font-light text-[#888888] hover:text-[#111111] transition-colors"
            >
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
