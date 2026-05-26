import Link from "next/link";
import Image from "next/image";

const products = [
  { id: 1, name: "Silver Ring No.01", price: "¥8,800", stock: 12, published: true, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=100&q=80" },
  { id: 2, name: "Feather Necklace", price: "¥18,500", stock: 5, published: true, img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=100&q=80" },
  { id: 3, name: "Bangle 03", price: "¥12,800", stock: 8, published: true, img: "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=100&q=80" },
  { id: 4, name: "Moon Earrings", price: "¥7,200", stock: 0, published: true, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=100&q=80" },
  { id: 5, name: "Chain Ring", price: "¥9,500", stock: 15, published: false, img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=100&q=80" },
  { id: 6, name: "Cross Pendant", price: "¥22,000", stock: 3, published: true, img: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=100&q=80" },
  { id: 7, name: "Leaf Bangle", price: "¥15,800", stock: 0, published: true, img: "https://images.unsplash.com/photo-1573408301185-9519f94acb89?w=100&q=80" },
  { id: 8, name: "Star Earrings", price: "¥6,800", stock: 20, published: true, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=100&q=80" },
];

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-serif text-[#B8960C] tracking-wider">商品管理</h1>
        <Link href="/admin/products/new" className="bg-[#B8960C] text-black px-4 py-2 text-sm font-medium hover:bg-[#C9A84C] transition-colors">
          ＋ 新しい商品を追加
        </Link>
      </div>

      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded p-3">
        <input type="text" placeholder="商品名で検索..." className="w-full bg-[#0D0D0D] border border-[#2A2A2A] text-white px-4 py-2 text-sm focus:border-[#B8960C] focus:outline-none" />
      </div>

      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#2A2A2A] text-[#C0C0C0] text-xs tracking-wider">
              <th className="px-4 py-3 text-left">画像</th>
              <th className="px-4 py-3 text-left">商品名</th>
              <th className="px-4 py-3 text-left">価格</th>
              <th className="px-4 py-3 text-left">在庫</th>
              <th className="px-4 py-3 text-left">公開状態</th>
              <th className="px-4 py-3 text-left">操作</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-[#2A2A2A] hover:bg-[#2A2A2A]/30 transition-colors">
                <td className="px-4 py-3">
                  <div className="relative w-10 h-10">
                    <Image src={p.img} alt={p.name} fill className="object-cover rounded" />
                  </div>
                </td>
                <td className="px-4 py-3 text-white">{p.name}</td>
                <td className="px-4 py-3 text-[#B8960C]">{p.price}</td>
                <td className="px-4 py-3">
                  {p.stock === 0 ? (
                    <span className="text-amber-400">⚠️ 在庫切れ</span>
                  ) : (
                    <span className="text-[#C0C0C0]">{p.stock}個</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded text-xs ${p.published ? "bg-emerald-900/40 text-emerald-400 border border-emerald-700/40" : "bg-[#2A2A2A] text-[#C0C0C0] border border-[#3A3A3A]"}`}>
                    {p.published ? "公開中" : "非公開"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Link href={`/admin/products/${p.id}`} className="text-[#B8960C] hover:underline text-xs">編集</Link>
                    <button className="text-red-400 hover:underline text-xs">削除</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-4 py-3 border-t border-[#2A2A2A] text-[#C0C0C0] text-xs">
          1〜8件 / 全8件
        </div>
      </div>
    </div>
  );
}
