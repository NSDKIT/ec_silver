import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#2A2A2A] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl tracking-[0.4em] text-[#B8960C] mb-4">
            SILMO
          </h2>
          <p className="text-[#C0C0C0] text-sm tracking-widest font-sans">
            手仕事から生まれる、一点のきらめき。
          </p>
        </div>

        {/* Gold divider */}
        <div className="w-24 h-px bg-[#B8960C] mx-auto mb-12" />

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* SHOP */}
          <div>
            <h3 className="font-serif text-sm tracking-[0.3em] text-[#B8960C] mb-6 uppercase">
              Shop
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/products", label: "すべての商品" },
                { href: "/products?category=ring", label: "リング" },
                { href: "/products?category=necklace", label: "ネックレス" },
                { href: "/products?category=bangle", label: "バングル" },
                { href: "/products?category=earring", label: "ピアス" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#C0C0C0] hover:text-white text-sm tracking-wider transition-colors font-sans"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* INFO */}
          <div>
            <h3 className="font-serif text-sm tracking-[0.3em] text-[#B8960C] mb-6 uppercase">
              Info
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "ブランドについて" },
                { href: "/contact", label: "お問い合わせ" },
                { href: "/legal", label: "特定商取引法に基づく表記" },
                { href: "/privacy", label: "プライバシーポリシー" },
                { href: "/terms", label: "利用規約" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#C0C0C0] hover:text-white text-sm tracking-wider transition-colors font-sans"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FOLLOW */}
          <div>
            <h3 className="font-serif text-sm tracking-[0.3em] text-[#B8960C] mb-6 uppercase">
              Follow
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#", label: "Instagram" },
                { href: "#", label: "Twitter / X" },
                { href: "#", label: "Pinterest" },
                { href: "#", label: "YouTube" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#C0C0C0] hover:text-white text-sm tracking-wider transition-colors font-sans"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-[#2A2A2A] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6">
              {[
                { href: "/legal", label: "特定商取引法に基づく表記" },
                { href: "/privacy", label: "プライバシーポリシー" },
                { href: "/terms", label: "利用規約" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#C0C0C0] hover:text-white text-xs tracking-wider transition-colors font-sans"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="text-[#C0C0C0] text-xs tracking-wider font-sans">
              © 2024 SILMO All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
