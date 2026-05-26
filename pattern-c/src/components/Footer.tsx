import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#E8DDD0]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-2xl font-semibold text-[#7B5E4A] tracking-widest hover:text-[#C17B5C] transition-colors">
              SILMO
            </Link>
            <p className="mt-2 text-sm font-sans text-[#9E9082] italic">
              あなたへの、てしごと。
            </p>
            <p className="mt-4 text-sm font-sans text-[#7B5E4A] leading-relaxed max-w-sm">
              自然から生まれたかたち、手で生まれる温もり。
              ひとつひとつ丁寧に仕上げたシルバーアクセサリーを
              お届けします。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-xs font-semibold text-[#9E9082] uppercase tracking-widest mb-4">
              ショップ
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/products", label: "作品一覧" },
                { href: "/about", label: "つくり手について" },
                { href: "/contact", label: "お問い合わせ" },
                { href: "/cart", label: "カート" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-sans text-[#7B5E4A] hover:text-[#C17B5C] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-sans text-xs font-semibold text-[#9E9082] uppercase tracking-widest mb-4">
              ご案内
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/legal", label: "特定商取引法に基づく表記" },
                { href: "/privacy", label: "プライバシーポリシー" },
                { href: "/terms", label: "利用規約" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-sans text-[#7B5E4A] hover:text-[#C17B5C] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#C17B5C]/20 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs font-sans text-[#9E9082]">
            © 2024 SILMO. All rights reserved.
          </p>
          <p className="text-xs font-sans text-[#9E9082]">
            シルモ — 手仕事の銀細工
          </p>
        </div>
      </div>
    </footer>
  );
}
