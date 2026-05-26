"use client";
import { useState } from "react";

const orders = [
  { id: "#ORD-2024-090", date: "2024/11/20", customer: "田中 花子", product: "月の指輪", amount: "¥9,800", status: "未対応" },
  { id: "#ORD-2024-089", date: "2024/11/19", customer: "山田 太郎", product: "羽のネックレス 他1点", amount: "¥28,800", status: "発送済" },
  { id: "#ORD-2024-088", date: "2024/11/18", customer: "佐藤 美咲", product: "草のバングル", amount: "¥12,800", status: "完了" },
  { id: "#ORD-2024-087", date: "2024/11/17", customer: "鈴木 一郎", product: "十字のペンダント", amount: "¥22,000", status: "発送済" },
  { id: "#ORD-2024-086", date: "2024/11/16", customer: "高橋 由美", product: "雫のピアス", amount: "¥7,200", status: "未対応" },
  { id: "#ORD-2024-085", date: "2024/11/15", customer: "伊藤 健二", product: "幹のリング", amount: "¥9,500", status: "完了" },
];

const statusStyle: Record<string, string> = {
  未対応: "bg-amber-100 text-amber-700",
  発送済: "bg-blue-100 text-blue-700",
  完了: "bg-emerald-100 text-emerald-700",
};

export default function AdminOrdersPage() {
  const [filter, setFilter] = useState("すべて");
  const tabs = ["すべて", "未対応", "発送済", "完了"];
  const filtered = filter === "すべて" ? orders : orders.filter((o) => o.status === filter);
  return (
    <div className="space-y-6">
      <h1 className="font-serif text-2xl text-[#7B5E4A]">注文管理</h1>
      <div className="flex gap-0 border-b border-[#E8DDD0]">
        {tabs.map((t) => (
          <button key={t} onClick={() => setFilter(t)}
            className={`px-4 py-2 text-sm transition-colors ${filter === t ? "text-[#C17B5C] border-b-2 border-[#C17B5C]" : "text-[#9E9082] hover:text-[#7B5E4A]"}`}>{t}</button>
        ))}
      </div>
      <div className="bg-white border border-[#E8DDD0] rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#E8DDD0] text-[#9E9082] text-xs">
            {["注文番号","注文日","顧客名","商品","金額","ステータス","操作"].map((h) => <th key={h} className="px-4 py-3 text-left">{h}</th>)}
          </tr></thead>
          <tbody>
            {filtered.map((o) => (
              <tr key={o.id} className="border-b border-[#E8DDD0] hover:bg-[#FAF8F5] transition-colors">
                <td className="px-4 py-3 text-[#7B5E4A] font-mono text-xs">{o.id}</td>
                <td className="px-4 py-3 text-[#9E9082]">{o.date}</td>
                <td className="px-4 py-3 text-[#7B5E4A]">{o.customer}</td>
                <td className="px-4 py-3 text-[#9E9082] text-xs">{o.product}</td>
                <td className="px-4 py-3 text-[#C17B5C]">{o.amount}</td>
                <td className="px-4 py-3"><span className={`px-2 py-0.5 rounded text-xs ${statusStyle[o.status]}`}>{o.status}</span></td>
                <td className="px-4 py-3">
                  <select className="bg-[#FAF8F5] border border-[#E8DDD0] text-[#9E9082] text-xs px-2 py-1 rounded focus:outline-none">
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
