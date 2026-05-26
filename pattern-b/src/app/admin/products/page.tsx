import Link from "next/link";
import Image from "next/image";

const products = [
  { id: 1, name: "Ring 01", price: "¥8,800", stock: 12, published: true, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=100&q=80" },
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
        <h1 className="text-xl font-medium text-[#111111]">商品管理</h1>
        <Link href="/admin/products/new" className="bg-[#111111] text-white px-4 py-2 text-sm hover:bg-[#333] transition-colors">
          ＋ 商品を追加
        </Link>
      </div>
      <div className="bg-white border border-[#E0E0E0] rounded p-3">
        <input type="text" placeholder="商品名で検索..." className="w-full border border-[#E0E0E0] text-[#111111] px-4 py-2 text-sm focus:border-[#111111] focus:outline-none" />
      </div>
      <div className="bg-white border border-[#E0E0E0] rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#E0E0E0] text-[#888888] text-xs">
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
              <tr key={p.id} className="border-b border-[#E0E0E0] hover:bg-[#F5F5F5] transition-colors">
                <td className="px-4 py-3"><div className="relative w-10 h-10"><Image src={p.img} alt={p.name} fill className="object-cover" /></div></td>
                <td className="px-4 py-3 text-[#111111]">{p.name}</td>
                <td className="px-4 py-3 text-[#111111]">{p.price}</td>
                <td className="px-4 py-3">{p.stock === 0 ? <span className="text-red-500 text-xs">⚠️ 在庫切れ</span> : <span className="text-[#888888]">{p.stock}個</span>}</td>
                <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded text-xs ${p.published ? "bg-green-100 text-green-700" : "bg-[#F5F5F5] text-[#888888]"}`}>{p.published ? "公開中" : "非公開"}</span></td>
                <td className="px-4 py-3 flex gap-3">
                  <Link href={`/admin/products/${p.id}`} className="text-[#111111] hover:underline text-xs">編集</Link>
                  <button className="text-red-500 hover:underline text-xs">削除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-4 py-3 border-t border-[#E0E0E0] text-[#888888] text-xs">全8件</div>
      </div>
    </div>
  );
}
