import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#1A1A2E] flex items-center justify-center px-4 py-16">
      <div className="bg-[#252545] border border-[#2E2E50] p-10 w-full max-w-sm space-y-8">
        <div className="text-center">
          <Link href="/" className="font-serif text-3xl text-[#C9A84C] tracking-[0.3em]">SILMO</Link>
          <h1 className="text-[#F5F0E8]/60 text-sm tracking-widest mt-3">NEW MEMBER</h1>
        </div>
        <div className="space-y-5">
          {[
            { label: "お名前", type: "text", placeholder: "山田 太郎" },
            { label: "メールアドレス", type: "email", placeholder: "your@email.com" },
            { label: "パスワード", type: "password", placeholder: "8文字以上" },
            { label: "パスワード（確認）", type: "password", placeholder: "もう一度入力" },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-[#F5F0E8]/60 text-xs tracking-widest mb-2">{f.label}</label>
              <input type={f.type} placeholder={f.placeholder}
                className="w-full bg-[#1A1A2E] border border-[#2E2E50] text-[#F5F0E8] px-4 py-3 focus:border-[#C9A84C] focus:outline-none placeholder-[#F5F0E8]/20" />
            </div>
          ))}
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-0.5 accent-[#C9A84C]" />
            <span className="text-[#F5F0E8]/40 text-xs leading-relaxed">
              <Link href="/terms" className="text-[#C9A84C]/60 hover:text-[#C9A84C]">利用規約</Link>・
              <Link href="/privacy" className="text-[#C9A84C]/60 hover:text-[#C9A84C]">プライバシーポリシー</Link>に同意します
            </span>
          </label>
        </div>
        <button className="w-full bg-[#C9A84C] text-[#1A1A2E] py-3 font-medium tracking-wider hover:bg-[#E8C97A] transition-colors">
          会員登録
        </button>
        <p className="text-center text-[#F5F0E8]/30 text-xs">
          すでにアカウントをお持ちの方は <Link href="/login" className="text-[#C9A84C]/60 hover:text-[#C9A84C]">ログイン</Link>
        </p>
      </div>
    </div>
  );
}
