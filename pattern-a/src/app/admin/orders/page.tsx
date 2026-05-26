"use client";
import { useState } from "react";

const orders = [
  { id: "#ORD-2024-090", date: "2024/11/20", customer: "田中 花子", product: "Silver Ring No.01", amount: "¥8,800", status: "未対応" },
  { id: "#ORD-2024-089", date: "2024/11/19", customer: "山田 太郎", product: "Feather Necklace 他1点", amount: "¥27,300", status: "発送済" },
  { id: "#ORD-2024-088", date: "2024/11/18", customer: "佐藤 美咲", product: "Bangle 03", amount: "¥12,800", status: "完了" },
  { id: "#ORD-2024-087", date: "2024/11/17", customer: "鈴木 一郎", product: "Cross Pendant", amount: "¥22,000", status: "発送済" },
  { id: "#ORD-2024-086", date: "2024/11/16", customer: "高橋 由美", product: "Moon Earrings", amount: "¥7,200", status: "未対応" },
  { id: "#ORD-2024-085", date: "2024/11/15", customer: "伊藤 健二", product: "Chain Ring", amount: "¥9,500", status: "完了" },
  { id: "#ORD-2024-084", date: "2024/11/14", customer: "渡辺 さくら", product: "Leaf Bangle", amount: "¥15,800", status: "発送済" },
  { id: "#ORD-2024-083", date: "2024/11/13", customer: "中村 浩太", product: "Star Earrings", amount: "¥6,800", status: "未対応" },
];

const statusStyle: Record<string, string> = {
  未対応: "bg-amber-900/40 text-amber-400 border border-amber-700/40",
  発送済: "bg-blue-900/40 text-blue-400 border border-blue-700/40",
  完了: "bg-emerald-900/40 text-emerald-400 border border-emerald-700/40",
};

export default function AdminOrdersPage() {
  const [filter, setFilter] = useState("すべて");
  const tabs = ["すべて(8)", "未対応(3)", "発送済(3)", "完了(2)"];
  const filtered = filter === "すべて" ? orders : orders.filter((o) => o.status === filter.replace(/\(\d+\)/, "").trim());

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-serif text-[#B8960C] tracking-wider">注文管理</h1>

      <div className="flex gap-1 border-b border-[#2A2A2A]">
        {tabs.map((t) => {
          const key = t.replace(/\(\d+\)/, "").trim();
          return (
            <button
              key={t}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 text-sm transition-colors ${filter === key ? "text-[#B8960C] border-b-2 border-[#B8960C]" : "text-[#C0C0C0] hover:text-white"}`}
            >
              {t}
            </button>
          );
        })}
      </div>

      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#2A2A2A] text-[#C0C0C0] text-xs tracking-wider">
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
              <tr key={o.id} className="border-b border-[#2A2A2A] hover:bg-[#2A2A2A]/30 transition-colors">
                <td className="px-4 py-3 text-[#B8960C] font-mono text-xs">{o.id}</td>
                <td className="px-4 py-3 text-[#C0C0C0]">{o.date}</td>
                <td className="px-4 py-3 text-white">{o.customer}</td>
                <td className="px-4 py-3 text-[#C0C0C0] text-xs">{o.product}</td>
                <td className="px-4 py-3 text-[#B8960C]">{o.amount}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded text-xs ${statusStyle[o.status]}`}>{o.status}</span>
                </td>
                <td className="px-4 py-3">
                  <select className="bg-[#0D0D0D] border border-[#2A2A2A] text-[#C0C0C0] text-xs px-2 py-1 focus:border-[#B8960C] focus:outline-none">
                    <option>ステータス変更</option>
                    <option>未対応</option>
                    <option>発送済</option>
                    <option>完了</option>
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
