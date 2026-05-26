export default function ContactPage() {
  return (
    <div className="bg-[#1A1A2E] min-h-screen pt-16">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl text-[#C9A84C] tracking-[0.2em] text-center mb-4">CONTACT</h1>
        <p className="text-center text-[#F5F0E8]/60 italic font-serif text-lg mb-2">誠心誠意、お答えします。</p>
        <p className="text-center text-[#F5F0E8]/40 text-sm mb-12">3営業日以内にご返信いたします</p>
        <div className="bg-[#252545] border border-[#2E2E50] p-8 space-y-6">
          {[
            { label: "お名前", type: "text", placeholder: "山田 太郎" },
            { label: "メールアドレス", type: "email", placeholder: "your@email.com" },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-[#F5F0E8]/60 text-sm tracking-wider mb-2">{f.label}</label>
              <input type={f.type} placeholder={f.placeholder}
                className="w-full bg-[#1A1A2E] border border-[#2E2E50] text-[#F5F0E8] px-4 py-3 focus:border-[#C9A84C] focus:outline-none placeholder-[#F5F0E8]/20" />
            </div>
          ))}
          <div>
            <label className="block text-[#F5F0E8]/60 text-sm tracking-wider mb-2">お問い合わせ種別</label>
            <select className="w-full bg-[#1A1A2E] border border-[#2E2E50] text-[#F5F0E8] px-4 py-3 focus:border-[#C9A84C] focus:outline-none">
              {["商品について","オーダーメイドについて","注文・配送について","その他"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-[#F5F0E8]/60 text-sm tracking-wider mb-2">お問い合わせ内容</label>
            <textarea rows={6} placeholder="ご質問・ご相談内容をご記入ください"
              className="w-full bg-[#1A1A2E] border border-[#2E2E50] text-[#F5F0E8] px-4 py-3 focus:border-[#C9A84C] focus:outline-none resize-none placeholder-[#F5F0E8]/20" />
          </div>
          <button className="w-full bg-[#C9A84C] text-[#1A1A2E] py-3 font-medium tracking-wider hover:bg-[#E8C97A] transition-colors">
            送信する
          </button>
        </div>
      </div>
    </div>
  );
}
