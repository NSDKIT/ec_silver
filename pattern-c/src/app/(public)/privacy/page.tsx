import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | SILMO",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#FAF8F5]">
      <section className="py-16 text-center bg-[#E8DDD0]">
        <h1 className="font-serif text-3xl md:text-4xl text-[#7B5E4A]">
          プライバシーポリシー
        </h1>
        <p className="mt-3 font-sans text-xs text-[#9E9082]">最終更新日：2024年1月1日</p>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-8 font-sans text-sm text-[#7B5E4A] leading-[2]">
          <section>
            <h2 className="font-serif text-xl text-[#7B5E4A] mb-3">1. 個人情報の取得について</h2>
            <p>
              当店（SILMO）は、お客様からのご注文、お問い合わせ等の際に、
              お名前、住所、電話番号、メールアドレス等の個人情報をご提供いただく場合があります。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[#7B5E4A] mb-3">2. 個人情報の利用目的</h2>
            <ul className="list-disc list-inside space-y-1 text-[#9E9082]">
              <li>ご注文商品の発送・サービス提供のため</li>
              <li>お問い合わせへの回答のため</li>
              <li>新作情報・キャンペーン等のご案内（同意をいただいた方のみ）</li>
              <li>購入履歴の管理のため</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[#7B5E4A] mb-3">3. 第三者への提供</h2>
            <p>
              当店は、法令に基づく場合、または配送業者・決済代行業者への業務委託（必要最小限の情報）を除き、
              お客様の個人情報を第三者に提供・開示することはありません。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[#7B5E4A] mb-3">4. Cookieの使用について</h2>
            <p>
              当サイトでは、ウェブサイトの利便性向上のためCookieを使用しています。
              ブラウザの設定によりCookieを拒否することができますが、
              その場合一部の機能が正常に動作しない場合があります。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[#7B5E4A] mb-3">5. 個人情報の開示・訂正・削除</h2>
            <p>
              お客様ご本人の個人情報の開示・訂正・利用停止・削除をご希望の場合は、
              お問い合わせフォームよりご連絡ください。
              ご本人確認の上、合理的な期間内に対応いたします。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[#7B5E4A] mb-3">6. 安全管理措置</h2>
            <p>
              当店は、個人情報の漏洩・紛失・改ざん等を防ぐため、
              適切なセキュリティ対策を実施しています。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[#7B5E4A] mb-3">7. お問い合わせ</h2>
            <p>
              個人情報の取り扱いに関するお問い合わせは、
              <a href="/contact" className="text-[#C17B5C] hover:underline">
                お問い合わせフォーム
              </a>
              よりご連絡ください。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
