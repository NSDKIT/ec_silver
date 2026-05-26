"use client";
import { useState } from "react";

const pages = [
  { id: 1, title: "ブランドについて", slug: "/about", lastUpdated: "2024-03-10", published: true },
  { id: 2, title: "特定商取引法に基づく表記", slug: "/legal", lastUpdated: "2024-02-28", published: true },
  { id: 3, title: "プライバシーポリシー", slug: "/privacy", lastUpdated: "2024-02-28", published: true },
  { id: 4, title: "利用規約", slug: "/terms", lastUpdated: "2024-02-28", published: true },
  { id: 5, title: "お問い合わせ", slug: "/contact", lastUpdated: "2024-03-01", published: true },
];

const topContent = [
  { id: 1, section: "ヒーローキャッチコピー", current: "受け継がれる技と、今を纏う美。", type: "text" },
  { id: 2, section: "ヒーローサブテキスト", current: "SILMO の銀細工は、職人の手と時間が宿る一点もの。あなたの日常に、物語を。", type: "textarea" },
  { id: 3, section: "特集セクションタイトル", current: "BRAND STORY", type: "text" },
  { id: 4, section: "フッターコピーライト", current: "© 2024 SILMO. All rights reserved.", type: "text" },
];

export default function AdminPagesPage() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  const startEdit = (id: number, current: string) => {
    setEditingId(id);
    setEditValue(current);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-2xl text-[#C9A84C] tracking-wider">ページ管理</h1>
        <p className="text-[#F5F0E8]/40 text-sm mt-1">固定ページとトップページのコンテンツを管理します</p>
      </div>

      <div className="space-y-3">
        <h2 className="font-serif text-[#C9A84C] text-lg">固定ページ</h2>
        <div className="bg-[#1A1A2E] border border-[#2E2E50] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2E2E50] text-[#F5F0E8]/30 text-xs tracking-wider">
                {["ページ名", "URL", "最終更新", "公開", "操作"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pages.map((p) => (
                <tr key={p.id} className="border-b border-[#2E2E50] hover:bg-[#252545] transition-colors">
                  <td className="px-4 py-3 text-[#F5F0E8]/80">{p.title}</td>
                  <td className="px-4 py-3 text-[#F5F0E8]/40 font-mono text-xs">{p.slug}</td>
                  <td className="px-4 py-3 text-[#F5F0E8]/40 text-xs">{p.lastUpdated}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 text-xs ${p.published ? "bg-emerald-900/40 text-emerald-400" : "bg-[#2E2E50] text-[#F5F0E8]/30"}`}>
                      {p.published ? "公開中" : "非公開"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-[#C9A84C]/60 hover:text-[#C9A84C] text-xs transition-colors">編集</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="font-serif text-[#C9A84C] text-lg">トップページ コンテンツ</h2>
        <div className="space-y-3">
          {topContent.map((c) => (
            <div key={c.id} className="bg-[#1A1A2E] border border-[#2E2E50] p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-[#F5F0E8]/50 text-xs tracking-wider mb-2">{c.section}</p>
                  {editingId === c.id ? (
                    c.type === "textarea" ? (
                      <textarea
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        rows={3}
                        className="w-full bg-[#0F0F20] border border-[#C9A84C]/50 text-[#F5F0E8] px-4 py-2 focus:outline-none focus:border-[#C9A84C] text-sm resize-none"
                      />
                    ) : (
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="w-full bg-[#0F0F20] border border-[#C9A84C]/50 text-[#F5F0E8] px-4 py-2 focus:outline-none focus:border-[#C9A84C] text-sm"
                      />
                    )
                  ) : (
                    <p className="text-[#F5F0E8]/80 text-sm">{c.current}</p>
                  )}
                </div>
                <div className="flex gap-2 shrink-0">
                  {editingId === c.id ? (
                    <>
                      <button
                        onClick={() => setEditingId(null)}
                        className="bg-[#C9A84C] text-[#1A1A2E] px-3 py-1.5 text-xs font-medium hover:bg-[#E8C97A] transition-colors">
                        保存
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="border border-[#2E2E50] text-[#F5F0E8]/40 px-3 py-1.5 text-xs hover:border-[#C9A84C]/40 transition-colors">
                        キャンセル
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => startEdit(c.id, c.current)}
                      className="border border-[#2E2E50] text-[#C9A84C]/60 px-3 py-1.5 text-xs hover:border-[#C9A84C]/40 hover:text-[#C9A84C] transition-colors">
                      編集
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1A1A2E] border border-[#2E2E50] p-5">
        <h3 className="font-serif text-[#C9A84C] mb-2">メタ情報</h3>
        <p className="text-[#F5F0E8]/40 text-sm mb-4">検索エンジン向けのタイトルや説明文を設定します</p>
        <div className="space-y-4">
          {[
            { l: "サイトタイトル", v: "SILMO | 銀細工ジュエリーブランド" },
            { l: "メタディスクリプション", v: "SILMOは熟練職人が手がける銀細工ジュエリーブランドです。受け継がれる技と、今を纏う美をテーマに、一点もののアクセサリーをお届けします。" },
          ].map((f) => (
            <div key={f.l}>
              <label className="block text-[#F5F0E8]/50 text-xs tracking-wider mb-2">{f.l}</label>
              <input type="text" defaultValue={f.v}
                className="w-full bg-[#0F0F20] border border-[#2E2E50] text-[#F5F0E8] px-4 py-2.5 text-sm focus:border-[#C9A84C] focus:outline-none" />
            </div>
          ))}
          <button className="bg-[#C9A84C] text-[#1A1A2E] px-5 py-2 text-sm font-medium hover:bg-[#E8C97A] transition-colors">
            保存する
          </button>
        </div>
      </div>
    </div>
  );
}
