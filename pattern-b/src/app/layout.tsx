import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "ARGENT | シンプルに、美しく。",
  description:
    "シルバーアクセサリーブランド ARGENT（アルジャン）。洗練されたデザインの手作りシルバーアクセサリー。",
  openGraph: {
    title: "ARGENT | シンプルに、美しく。",
    url: "https://argent.vercel.app",
    siteName: "ARGENT",
    locale: "ja_JP",
    type: "website",
  },
  metadataBase: new URL("https://argent.vercel.app"),
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="bg-white text-[#111111] min-h-screen font-sans">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
