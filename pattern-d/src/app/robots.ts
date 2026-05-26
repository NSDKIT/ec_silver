import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/mypage/"],
      },
    ],
    sitemap: "https://silmo-d.vercel.app/sitemap.xml",
  };
}
