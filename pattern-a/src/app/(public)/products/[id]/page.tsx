import type { Metadata } from "next";
import ProductDetailClient from "./_client";

type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  subImages: string[];
  description: string[];
  material: string;
  care: string;
};

const products: Record<string, Product> = {
  "1": { id: 1, name: "Silver Ring No.01", price: "¥8,800", category: "リング", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80", subImages: ["https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80","https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=400&q=80"], description: ["SILMOを代表するシグネチャーリング。シンプルでありながら、手仕事ならではの微細なテクスチャが光を受けて美しく輝きます。","スターリングシルバー（925）を使用し、一つひとつ丁寧に鍛造・磨き上げています。","日常使いしやすい細身のデザインで、指を美しく見せるシルエットです。"], material: "スターリングシルバー（925）/ Sterling Silver 925\n※シルバーの性質上、経年変化により黒ずみが生じる場合があります。", care: "・水・汗・温泉・プールなどへの接触を避けてください\n・着用後はシルバークロスで軽く拭いてから保管してください" },
  "2": { id: 2, name: "Feather Necklace", price: "¥18,500", category: "ネックレス", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80", subImages: ["https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400&q=80","https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=400&q=80"], description: ["羽根をモチーフにした繊細なネックレス。職人が手彫りした羽根の繊維模様が幻想的に輝きます。","チェーンの長さは45cmと50cmの2種類からお選びいただけます。","プレゼントとしても人気の高い一品です。"], material: "スターリングシルバー（925）/ Sterling Silver 925", care: "・水・汗・温泉・プールなどへの接触を避けてください\n・着用後はシルバークロスで軽く拭いてから保管してください" },
  "3": { id: 3, name: "Bangle 03", price: "¥12,800", category: "バングル", image: "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=800&q=80", subImages: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80","https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80"], description: ["無骨ながら上品なバングル。鍛造によって生まれる微妙な凹凸が手首に程よいアクセントを与えます。","シンプルな無地デザインでどんなスタイルにも合わせやすい一本です。"], material: "スターリングシルバー（925）/ Sterling Silver 925", care: "・水・汗・温泉・プールなどへの接触を避けてください" },
  "4": { id: 4, name: "Moon Earrings", price: "¥7,200", category: "ピアス", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", subImages: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80","https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=400&q=80"], description: ["三日月をモチーフにした上品なピアス。揺れるたびに光を反射し、耳元に柔らかな存在感を添えます。"], material: "スターリングシルバー（925）/ Sterling Silver 925", care: "・水・汗・温泉・プールなどへの接触を避けてください" },
  "5": { id: 5, name: "Chain Ring", price: "¥9,500", category: "リング", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80", subImages: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80","https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=400&q=80"], description: ["チェーンモチーフを取り入れた個性的なリング。細かなリンクが連なるデザインが指元に動きと光を生み出します。"], material: "スターリングシルバー（925）/ Sterling Silver 925", care: "・水・汗・温泉・プールなどへの接触を避けてください" },
  "6": { id: 6, name: "Cross Pendant", price: "¥22,000", category: "ネックレス", image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80", subImages: ["https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80","https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=400&q=80"], description: ["SILMOが誇るフラグシップアイテム。クロスモチーフに職人の細密彫りを施した贅沢な一品。"], material: "スターリングシルバー（925）/ Sterling Silver 925", care: "・水・汗・温泉・プールなどへの接触を避けてください" },
  "7": { id: 7, name: "Leaf Bangle", price: "¥15,800", category: "バングル", image: "https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=800&q=80", subImages: ["https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=400&q=80","https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80"], description: ["葉脈をモチーフにした優美なバングル。自然の造形美をシルバーで精緻に表現しました。"], material: "スターリングシルバー（925）/ Sterling Silver 925", care: "・水・汗・温泉・プールなどへの接触を避けてください" },
  "8": { id: 8, name: "Star Earrings", price: "¥6,800", category: "ピアス", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", subImages: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80","https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=400&q=80"], description: ["星をモチーフにしたシンプルで可愛らしいピアス。デイリーユースに最適です。"], material: "スターリングシルバー（925）/ Sterling Silver 925", care: "・水・汗・温泉・プールなどへの接触を避けてください" },
};

export function generateStaticParams() {
  return ["1","2","3","4","5","6","7","8"].map((id) => ({ id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const product = products[params.id] || products["1"];
  return {
    title: `${product.name} | SILMO`,
    description: product.description[0],
    openGraph: { title: `${product.name} | SILMO`, description: product.description[0], images: [product.image] },
  };
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products[params.id] || products["1"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description[0],
    brand: { "@type": "Brand", name: "SILMO" },
    offers: {
      "@type": "Offer",
      price: product.price.replace("¥", "").replace(",", ""),
      priceCurrency: "JPY",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductDetailClient product={product} />
    </>
  );
}
