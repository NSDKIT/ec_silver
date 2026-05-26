import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "SILMO | 手仕事から生まれる、一点のきらめき。",
  description:
    "シルバーアクセサリーブランド SILMO。手工芸による一点もの・少量生産のシルバーアクセサリーをお届けします。",
  openGraph: {
    title: "SILMO | 手仕事から生まれる、一点のきらめき。",
    description: "シルバーアクセサリーブランド SILMO",
    url: "https://silmo.vercel.app",
    siteName: "SILMO",
    locale: "ja_JP",
    type: "website",
  },
  metadataBase: new URL("https://silmo.vercel.app"),
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${cormorant.variable} ${notoSerifJP.variable}`}
    >
      <body className="bg-[#0D0D0D] text-white min-h-screen">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
