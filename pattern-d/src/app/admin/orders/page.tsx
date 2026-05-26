"use client";
import { useState } from "react";
import Link from "next/link";

const orders = [
  { id: "#ORD-2024-090", customer: "田中 花子", email: "hanako@example.com", amount: "¥9,800", items: 1, status: "未対応", date: "2024-03-15" },
  { id: "#ORD-2024-089", customer: "山田 太郎", email: "taro@example.com", amount: "¥32,300", items: 3, status: "発送済", date: "2024-03-14" },
  { id: "#ORD-2024-088", customer: "佐藤 美咲", email: "misaki@example.com", amount: "¥16,500", items: 1, status: "完了", date: "2024-03-13" },
  { id: "#ORD-2024-087", customer: "鈴木 一郎", email: "ichiro@example.com", amount: "¥28,000", items: 2, status: "発送済", date: "2024-03-12" },
  { id: "#ORD-2024-086", customer: "高橋 由美", email: "yumi@example.com", amount: "¥11,000", items: 1, status: "完了", date: "2024-03-11" },
  { id: "#ORD-2024-085", customer: "伊藤 健二", email: "kenji@example.com", amount: "¥7,700", items: 1, status: "完了", date: "2024-03-10" },
  { id: "#ORD-2024-084", customer: "渡辺 さくら", email: "sakura@example.com", amount: "¥22,000", items: 2, status: "未対応", date: "2024-03-09" },
  { id: "#ORD-2024-083", customer: "中村 浩", email: "hiroshi@example.com", amount: "¥8,800", items: 1, status: "完了", date: "2024-03-08" },
];

const statusConfig: Record<string, { label: string; classes: string }> = {
  "未対応": { label: "未対応", classes: "bg-amber-900/40 text-amber-400" },
  "発送済": { label: "発送済", classes: "bg-blue-900/40 text-blue-400" },
  "完了":   { label: "完了",   classes: "bg-emerald-900/40 text-emerald-400" },
};

const tabs = ["すべて", "未対応", "発送済", "完了"];

export default function AdminOrdersPage() {
  const [active, setActive] = useState("すべて");
  const filtered = active === "すべて" ? orders : orders.filter((o) => o.status === active);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-[#C9A84C] tracking-wider">注文管理</h1>
        <span className="text-[#F5F0E8]/30 text-xs">{orders.length}件の注文</span>
      </div>

      <div className="flex gap-1 border-b border-[#2E2E50]">
        {tabs.map((t) => (
          <button key={t} onClick={() => setActive(t)}
            className={`px-5 py-2.5 text-sm transition-colors ${active === t ? "border-b-2 border-[#C9A84C] text-[#C9A84C]" : "text-[#F5F0E8]/40 hover:text-[#F5F0E8]/70"}`}>
            {t}
            {t !== "すべて" && (
              <span className="ml-1.5 text-xs opacity-60">
                ({orders.filter((o) => o.status === t).length})
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="bg-[#1A1A2E] border border-[#2E2E50] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#2E2E50] text-[#F5F0E8]/30 text-xs tracking-wider">
              {["注文番号", "顧客名", "金額", "点数", "ステータス", "注文日", "操作"].map((h) => (
                <th key={h} className="px-4 py-3 text-left">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((o) => (
              <tr key={o.id} className="border-b border-[#2E2E50] hover:bg-[#252545] transition-colors">
                <td className="px-4 py-3 text-[#C9A84C]/80 font-mono text-xs">{o.id}</td>
                <td className="px-4 py-3">
                  <p className="text-[#F5F0E8]/80">{o.customer}</p>
                  <p className="text-[#F5F0E8]/30 text-xs">{o.email}</p>
                </td>
                <td className="px-4 py-3 text-[#C9A84C]">{o.amount}</td>
                <td className="px-4 py-3 text-[#F5F0E8]/50">{o.items}点</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 text-xs ${statusConfig[o.status].classes}`}>
                    {statusConfig[o.status].label}
                  </span>
                </td>
                <td className="px-4 py-3 text-[#F5F0E8]/40 text-xs">{o.date}</td>
                <td className="px-4 py-3">
                  <Link href={`/admin/orders/${o.id.replace("#", "")}`}
                    className="text-[#C9A84C]/60 hover:text-[#C9A84C] text-xs transition-colors">
                    詳細
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="py-16 text-center text-[#F5F0E8]/30 text-sm">
            該当する注文はありません
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "未対応", value: orders.filter((o) => o.status === "未対応").length + "件", color: "text-amber-400" },
          { label: "発送済", value: orders.filter((o) => o.status === "発送済").length + "件", color: "text-blue-400" },
          { label: "完了", value: orders.filter((o) => o.status === "完了").length + "件", color: "text-emerald-400" },
        ].map((s) => (
          <div key={s.label} className="bg-[#1A1A2E] border border-[#2E2E50] p-4 text-center">
            <p className="text-[#F5F0E8]/40 text-xs tracking-wider mb-1">{s.label}</p>
            <p className={`font-serif text-2xl ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
