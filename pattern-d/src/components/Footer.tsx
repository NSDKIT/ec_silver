import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] border-t border-[#C9A84C]/30">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Brand */}
        <div className="text-center mb-12">
          <p className="font-display text-5xl font-light tracking-[0.4em] text-[#C9A84C] mb-4">SILMO</p>
          <div className="w-24 h-px bg-[#C9A84C]/50 mx-auto mb-4" />
          <p className="font-display text-lg italic text-[#F5F0E8]/70 tracking-wide">
            すべての銀は、物語を持っている。
          </p>
        </div>

        {/* Gold rule */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent mb-12" />

        {/* 3-column nav */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-serif text-[#C9A84C] text-sm tracking-widest uppercase mb-4">Collection</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-colors text-sm font-sans">すべての作品</Link></li>
              <li><Link href="/products?category=ring" className="text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-colors text-sm font-sans">リング</Link></li>
              <li><Link href="/products?category=necklace" className="text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-colors text-sm font-sans">ネックレス</Link></li>
              <li><Link href="/products?category=bangle" className="text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-colors text-sm font-sans">バングル</Link></li>
              <li><Link href="/products?category=earrings" className="text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-colors text-sm font-sans">ピアス</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-[#C9A84C] text-sm tracking-widest uppercase mb-4">Brand</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-colors text-sm font-sans">SILMOの物語</Link></li>
              <li><Link href="/about#philosophy" className="text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-colors text-sm font-sans">ブランド哲学</Link></li>
              <li><Link href="/about#craft" className="text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-colors text-sm font-sans">制作へのこだわり</Link></li>
              <li><Link href="/contact" className="text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-colors text-sm font-sans">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-[#C9A84C] text-sm tracking-widest uppercase mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link href="/login" className="text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-colors text-sm font-sans">ログイン</Link></li>
              <li><Link href="/register" className="text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-colors text-sm font-sans">新規会員登録</Link></li>
              <li><Link href="/mypage" className="text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-colors text-sm font-sans">マイページ</Link></li>
              <li><Link href="/cart" className="text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-colors text-sm font-sans">カート</Link></li>
            </ul>
          </div>
        </div>

        {/* Gold rule */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent mb-8" />

        {/* Legal & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Link href="/legal" className="text-[#F5F0E8]/40 hover:text-[#C9A84C] transition-colors text-xs font-sans">
              特定商取引法に基づく表記
            </Link>
            <Link href="/privacy" className="text-[#F5F0E8]/40 hover:text-[#C9A84C] transition-colors text-xs font-sans">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-[#F5F0E8]/40 hover:text-[#C9A84C] transition-colors text-xs font-sans">
              利用規約
            </Link>
          </div>
          <p className="text-[#F5F0E8]/30 text-xs font-sans tracking-widest">
            © 2024 SILMO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
