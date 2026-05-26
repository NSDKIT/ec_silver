import Link from "next/link";
import Image from "next/image";

const products = [
  { id: 1, name: "SILMO No.01 Silver Ring", price: "¥9,800", stock: 12, published: true, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=100&q=80" },
  { id: 2, name: "Silver Feather Necklace", price: "¥22,000", stock: 5, published: true, img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=100&q=80" },
  { id: 3, name: "Heritage Bangle", price: "¥16,500", stock: 8, published: true, img: "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=100&q=80" },
  { id: 4, name: "Moon Drop Earrings", price: "¥8,800", stock: 0, published: true, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=100&q=80" },
  { id: 5, name: "Intertwined Ring", price: "¥11,000", stock: 15, published: false, img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=100&q=80" },
  { id: 6, name: "Eternal Cross Pendant", price: "¥28,000", stock: 3, published: true, img: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=100&q=80" },
  { id: 7, name: "Garden Bangle", price: "¥18,000", stock: 0, published: true, img: "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=100&q=80" },
  { id: 8, name: "Constellation Earrings", price: "¥7,700", stock: 20, published: true, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=100&q=80" },
];

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-[#C9A84C] tracking-wider">商品管理</h1>
        <Link href="/admin/products/new" className="bg-[#C9A84C] text-[#1A1A2E] px-4 py-2 text-sm font-medium hover:bg-[#E8C97A] transition-colors">
          ＋ 新しい商品を追加
        </Link>
      </div>
      <div className="bg-[#1A1A2E] border border-[#2E2E50] overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#2E2E50] text-[#F5F0E8]/30 text-xs tracking-wider">
            {["画像","商品名","価格","在庫","公開","操作"].map((h) => <th key={h} className="px-4 py-3 text-left">{h}</th>)}
          </tr></thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-[#2E2E50] hover:bg-[#252545] transition-colors">
                <td className="px-4 py-3"><div className="relative w-10 h-10"><Image src={p.img} alt={p.name} fill className="object-cover" /></div></td>
                <td className="px-4 py-3 text-[#F5F0E8]/80">{p.name}</td>
                <td className="px-4 py-3 text-[#C9A84C]">{p.price}</td>
                <td className="px-4 py-3">{p.stock === 0 ? <span className="text-amber-400 text-xs">⚠️ 在���切れ</span> : <span className="text-[#F5F0E8]/50">{p.stock}個</span>}</td>
                <td className="px-4 py-3"><span className={`px-2 py-0.5 text-xs ${p.published ? "bg-emerald-900/40 text-emerald-400" : "bg-[#2E2E50] text-[#F5F0E8]/30"}`}>{p.published ? "公開中" : "非公開"}</span></td>
                <td className="px-4 py-3 flex gap-3">
                  <Link href={`/admin/products/${p.id}`} className="text-[#C9A84C]/60 hover:text-[#C9A84C] text-xs">編集</Link>
                  <button className="text-red-400/60 hover:text-red-400 text-xs">��除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
