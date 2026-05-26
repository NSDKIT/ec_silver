import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center px-4 py-16">
      <div className="bg-white border border-[#E8DDD0] rounded-lg p-8 w-full max-w-sm shadow-sm space-y-6">
        <div className="text-center">
          <Link href="/" className="font-serif text-2xl text-[#7B5E4A] tracking-widest">SILMO</Link>
          <h1 className="text-lg text-[#7B5E4A] mt-2">新規会員登録</h1>
          <p className="text-[#9E9082] text-xs mt-1">アカウントを作成してください</p>
        </div>
        <div className="space-y-4">
          {[
            { label: "お名前", type: "text", placeholder: "山田 太郎" },
            { label: "メールアドレス", type: "email", placeholder: "your@email.com" },
            { label: "パスワード", type: "password", placeholder: "8文字以上" },
            { label: "パスワード（確認）", type: "password", placeholder: "もう一度入力" },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-[#7B5E4A] text-sm mb-1.5">{f.label}</label>
              <input type={f.type} placeholder={f.placeholder}
                className="w-full bg-[#FAF8F5] border border-[#E8DDD0] text-[#7B5E4A] px-4 py-2.5 rounded focus:border-[#C17B5C] focus:outline-none placeholder-[#9E9082]/50" />
            </div>
          ))}
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-0.5 accent-[#C17B5C]" />
            <span className="text-[#9E9082] text-xs leading-relaxed">
              <Link href="/terms" className="text-[#C17B5C] hover:underline">利用規約</Link>および
              <Link href="/privacy" className="text-[#C17B5C] hover:underline">プライバシーポリシー</Link>に同意します
            </span>
          </label>
        </div>
        <button className="w-full bg-[#C17B5C] text-white py-3 rounded hover:bg-[#A56A4D] transition-colors font-medium tracking-wide">
          会員登録
        </button>
        <p className="text-center text-[#9E9082] text-sm">
          すでにアカウントをお持ちの方は{" "}
          <Link href="/login" className="text-[#C17B5C] hover:underline">ログイン</Link>
        </p>
      </div>
    </div>
  );
}
