"use client";
import { useState } from "react";

const orders = [
  { id: "#ORD-2024-090", date: "2024/11/20", customer: "田中 花子", product: "Ring 01", amount: "¥8,800", status: "未対応" },
  { id: "#ORD-2024-089", date: "2024/11/19", customer: "山田 太郎", product: "Feather Necklace 他1点", amount: "¥27,300", status: "発送済" },
  { id: "#ORD-2024-088", date: "2024/11/18", customer: "佐藤 美咲", product: "Bangle 03", amount: "¥12,800", status: "完了" },
  { id: "#ORD-2024-087", date: "2024/11/17", customer: "鈴木 一郎", product: "Cross Pendant", amount: "¥22,000", status: "発送済" },
  { id: "#ORD-2024-086", date: "2024/11/16", customer: "高橋 由美", product: "Moon Earrings", amount: "¥7,200", status: "未対応" },
  { id: "#ORD-2024-085", date: "2024/11/15", customer: "伊藤 健二", product: "Chain Ring", amount: "¥9,500", status: "完了" },
  { id: "#ORD-2024-084", date: "2024/11/14", customer: "渡辺 さくら", product: "Leaf Bangle", amount: "¥15,800", status: "発送済" },
  { id: "#ORD-2024-083", date: "2024/11/13", customer: "中村 浩太", product: "Star Earrings", amount: "¥6,800", status: "未対応" },
];

const statusStyle: Record<string, string> = {
  未対応: "bg-amber-100 text-amber-700",
  発送済: "bg-blue-100 text-blue-700",
  完了: "bg-green-100 text-green-700",
};

export default function AdminOrdersPage() {
  const [filter, setFilter] = useState("すべて");
  const tabs = ["すべて", "未対応", "発送済", "完了"];
  const filtered = filter === "すべて" ? orders : orders.filter((o) => o.status === filter);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium text-[#111111]">注文管理</h1>
      <div className="flex gap-0 border-b border-[#E0E0E0]">
        {tabs.map((t) => (
          <button key={t} onClick={() => setFilter(t)}
            className={`px-4 py-2 text-sm transition-colors ${filter === t ? "text-[#111111] border-b-2 border-[#111111]" : "text-[#888888] hover:text-[#111111]"}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="bg-white border border-[#E0E0E0] rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#E0E0E0] text-[#888888] text-xs">
              <th className="px-4 py-3 text-left">注文番号</th>
              <th className="px-4 py-3 text-left">注文日</th>
              <th className="px-4 py-3 text-left">顧客名</th>
              <th className="px-4 py-3 text-left">商品</th>
              <th className="px-4 py-3 text-left">金額</th>
              <th className="px-4 py-3 text-left">ステータス</th>
              <th className="px-4 py-3 text-left">操作</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((o) => (
              <tr key={o.id} className="border-b border-[#E0E0E0] hover:bg-[#F5F5F5] transition-colors">
                <td className="px-4 py-3 text-[#111111] font-mono text-xs">{o.id}</td>
                <td className="px-4 py-3 text-[#888888]">{o.date}</td>
                <td className="px-4 py-3 text-[#111111]">{o.customer}</td>
                <td className="px-4 py-3 text-[#888888] text-xs">{o.product}</td>
                <td className="px-4 py-3 text-[#111111]">{o.amount}</td>
                <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded text-xs ${statusStyle[o.status]}`}>{o.status}</span></td>
                <td className="px-4 py-3">
                  <select className="border border-[#E0E0E0] text-[#888888] text-xs px-2 py-1 focus:outline-none">
                    <option>変更</option><option>未対応</option><option>発送済</option><option>完了</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
