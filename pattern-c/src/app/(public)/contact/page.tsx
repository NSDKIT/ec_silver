import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | SILMO",
  description: "SILMOへのお問い合わせはこちらから。作品に関するご質問など、お気軽にどうぞ。",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Header */}
      <section className="py-16 text-center bg-[#E8DDD0]">
        <p className="font-sans text-xs tracking-[0.3em] text-[#9E9082] uppercase mb-4">Contact</p>
        <h1 className="font-serif text-4xl md:text-5xl text-[#7B5E4A] mb-4">お問い合わせ</h1>
        <p className="font-sans text-sm text-[#9E9082] max-w-md mx-auto">
          お気軽にご連絡ください。
          作品に関するご質問、オーダーメイドのご相談など
          なんでもお聞きします。
        </p>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-[#E8DDD0] rounded-lg p-8 mb-10">
          <p className="font-serif text-lg text-[#7B5E4A] italic mb-3">
            どんな小さなご質問でも、喜んでお答えします。
          </p>
          <p className="font-sans text-sm text-[#9E9082] leading-relaxed">
            通常2〜3営業日以内にご返信いたします。
            お急ぎの場合はInstagramのDMからどうぞ。
          </p>
        </div>

        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-sans text-sm text-[#7B5E4A] mb-1.5">
                お名前 <span className="text-[#C17B5C]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="田中 花子"
                className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8DDD0] rounded-lg text-[#7B5E4A] placeholder-[#9E9082] font-sans text-sm focus:outline-none focus:border-[#C17B5C] transition-colors"
              />
            </div>
            <div>
              <label className="block font-sans text-sm text-[#7B5E4A] mb-1.5">
                メールアドレス <span className="text-[#C17B5C]">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="hanako@example.com"
                className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8DDD0] rounded-lg text-[#7B5E4A] placeholder-[#9E9082] font-sans text-sm focus:outline-none focus:border-[#C17B5C] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block font-sans text-sm text-[#7B5E4A] mb-1.5">
              お問い合わせの種類
            </label>
            <select className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8DDD0] rounded-lg text-[#7B5E4A] font-sans text-sm focus:outline-none focus:border-[#C17B5C] transition-colors">
              <option>作品についてのご質問</option>
              <option>オーダーメイドのご相談</option>
              <option>ご注文・配送について</option>
              <option>アフターケアについて</option>
              <option>その他</option>
            </select>
          </div>

          <div>
            <label className="block font-sans text-sm text-[#7B5E4A] mb-1.5">
              件名 <span className="text-[#C17B5C]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="件名を入力してください"
              className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8DDD0] rounded-lg text-[#7B5E4A] placeholder-[#9E9082] font-sans text-sm focus:outline-none focus:border-[#C17B5C] transition-colors"
            />
          </div>

          <div>
            <label className="block font-sans text-sm text-[#7B5E4A] mb-1.5">
              メッセージ <span className="text-[#C17B5C]">*</span>
            </label>
            <textarea
              required
              rows={6}
              placeholder="お気軽にご連絡ください..."
              className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8DDD0] rounded-lg text-[#7B5E4A] placeholder-[#9E9082] font-sans text-sm focus:outline-none focus:border-[#C17B5C] transition-colors resize-none"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacy"
              required
              className="mt-1 accent-[#C17B5C]"
            />
            <label htmlFor="privacy" className="font-sans text-xs text-[#9E9082]">
              <a href="/privacy" className="underline hover:text-[#C17B5C] transition-colors">
                プライバシーポリシー
              </a>
              に同意します
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#C17B5C] text-white font-sans text-sm tracking-widest py-4 rounded-lg hover:bg-[#A86848] transition-colors"
          >
            送信する
          </button>
        </form>

        {/* SNS */}
        <div className="mt-12 pt-10 border-t border-[#E8DDD0] text-center">
          <p className="font-sans text-sm text-[#9E9082] mb-4">
            SNSでもお気軽にどうぞ
          </p>
          <p className="font-sans text-sm text-[#7B5E4A]">
            Instagram:{" "}
            <a
              href="https://instagram.com/silmo_handmade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C17B5C] hover:underline"
            >
              @silmo_handmade
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
