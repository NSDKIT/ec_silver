"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="py-20 text-center border-b border-[#2A2A2A]">
        <p className="text-[#B8960C] text-xs tracking-[0.5em] font-sans mb-4">
          GET IN TOUCH
        </p>
        <h1 className="font-serif text-6xl tracking-[0.3em] text-white">
          CONTACT
        </h1>
        <div className="w-12 h-px bg-[#B8960C] mx-auto mt-6" />
      </section>

      <div className="max-w-2xl mx-auto px-4 py-16">
        {!submitted ? (
          <>
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl text-white mb-4">
                お問い合わせ
              </h2>
              <p className="text-[#C0C0C0] font-sans text-sm leading-7">
                商品・ご注文・その他のご質問はこちらよりお送りください。
                <br />
                通常3営業日以内にご返信いたします。
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-[#C0C0C0] text-xs tracking-widest font-sans mb-2">
                  お名前 <span className="text-[#B8960C]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="山田 太郎"
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white placeholder-[#C0C0C0]/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#B8960C] transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[#C0C0C0] text-xs tracking-widest font-sans mb-2">
                  メールアドレス <span className="text-[#B8960C]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="example@email.com"
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white placeholder-[#C0C0C0]/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#B8960C] transition-colors"
                />
              </div>

              {/* Type */}
              <div>
                <label className="block text-[#C0C0C0] text-xs tracking-widest font-sans mb-2">
                  お問い合わせ種別 <span className="text-[#B8960C]">*</span>
                </label>
                <select
                  required
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#B8960C] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[#1A1A1A]">
                    選択してください
                  </option>
                  <option value="product" className="bg-[#1A1A1A]">
                    商品について
                  </option>
                  <option value="order" className="bg-[#1A1A1A]">
                    ご注文について
                  </option>
                  <option value="return" className="bg-[#1A1A1A]">
                    返品・交換について
                  </option>
                  <option value="custom" className="bg-[#1A1A1A]">
                    カスタムオーダーについて
                  </option>
                  <option value="other" className="bg-[#1A1A1A]">
                    その他
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#C0C0C0] text-xs tracking-widest font-sans mb-2">
                  お問い合わせ内容 <span className="text-[#B8960C]">*</span>
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={7}
                  placeholder="お問い合わせ内容をご記入ください"
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white placeholder-[#C0C0C0]/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-[#B8960C] transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#B8960C] text-black hover:bg-[#C9A84C] py-4 text-sm tracking-[0.3em] font-sans font-medium transition-colors duration-200"
                >
                  送信する
                </button>
              </div>

              <p className="text-[#C0C0C0] text-xs font-sans text-center leading-6">
                ご返信は
                <span className="text-white">info@silmo.jp</span>
                よりお送りします。<br />
                迷惑メールフィルタをご確認ください。
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 border-2 border-[#B8960C] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-[#B8960C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="font-serif text-3xl text-white mb-4">
              送信完了
            </h2>
            <p className="text-[#C0C0C0] font-sans text-sm leading-7 mb-8">
              お問い合わせを受け付けました。<br />
              通常3営業日以内にご返信いたします。
            </p>
            <a
              href="/"
              className="inline-block border border-[#B8960C] text-[#B8960C] hover:bg-[#B8960C] hover:text-black px-10 py-3 text-sm tracking-[0.3em] font-sans transition-all duration-300"
            >
              トップページへ
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
