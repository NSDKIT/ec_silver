import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: {
    default: "SILMO | すべての銀は、物語を持っている。",
    template: "%s | SILMO",
  },
  description:
    "SILMOは2018年創業のプレミアムシルバーアクセサリーブランドです。一本の銀線から生まれる物語を、丁寧な手仕事で紡ぎ続けています。",
  keywords: ["シルバーアクセサリー", "ハンドメイド", "SILMO", "銀細工", "プレミアム"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://silmo.example.com",
    siteName: "SILMO",
    title: "SILMO | すべての銀は、物語を持っている。",
    description:
      "SILMOは2018年創業のプレミアムシルバーアクセサリーブランドです。一本の銀線から生まれる物語を、丁寧な手仕事で紡ぎ続けています。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${playfair.variable} ${cormorant.variable} ${notoSerifJP.variable}`}>
      <body className="bg-[#1A1A2E] text-[#F5F0E8] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
