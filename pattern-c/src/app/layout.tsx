import type { Metadata } from "next";
import { Playfair_Display, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "SILMO | あなたへの、てしごと。",
  description:
    "SILMOは、ひとつひとつ手でつくる銀のアクセサリーブランドです。自然からインスピレーションを受けた作品は、大切な人へのギフトにも、自分へのご褒美にも。",
  keywords: "シルモ, SILMO, シルバーアクセサリー, ハンドメイド, 手作り, 指輪, ネックレス",
  openGraph: {
    title: "SILMO | あなたへの、てしごと。",
    description: "ひとつひとつ手でつくる銀のアクセサリー",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${playfair.variable} ${notoSerifJP.variable}`}>
      <body className="bg-[#FAF8F5] text-[#7B5E4A]">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
