import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#1A1A2E] flex items-center justify-center px-4">
      <div className="bg-[#252545] border border-[#2E2E50] p-10 w-full max-w-sm space-y-8">
        <div className="text-center">
          <Link href="/" className="font-serif text-3xl text-[#C9A84C] tracking-[0.3em]">SILMO</Link>
          <h1 className="text-[#F5F0E8]/60 text-sm tracking-widest mt-3">MEMBER LOGIN</h1>
        </div>
        <div className="space-y-5">
          {[
            { label: "メールアドレス", type: "email", placeholder: "your@email.com" },
            { label: "パスワード", type: "password", placeholder: "••••••••" },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-[#F5F0E8]/60 text-xs tracking-widest mb-2">{f.label}</label>
              <input type={f.type} placeholder={f.placeholder}
                className="w-full bg-[#1A1A2E] border border-[#2E2E50] text-[#F5F0E8] px-4 py-3 focus:border-[#C9A84C] focus:outline-none placeholder-[#F5F0E8]/20" />
            </div>
          ))}
        </div>
        <button className="w-full bg-[#C9A84C] text-[#1A1A2E] py-3 font-medium tracking-wider hover:bg-[#E8C97A] transition-colors">
          ログイン
        </button>
        <div className="text-center space-y-2">
          <Link href="/register" className="block text-[#C9A84C]/60 text-xs hover:text-[#C9A84C] transition-colors">新規会員登録はこちら</Link>
          <Link href="#" className="block text-[#F5F0E8]/30 text-xs hover:text-[#F5F0E8]/60 transition-colors">パスワードをお忘れの方</Link>
        </div>
      </div>
    </div>
  );
}
