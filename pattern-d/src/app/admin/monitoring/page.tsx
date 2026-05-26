"use client";

const data = [320,280,350,420,380,410,460,390,510,480,520,490,550,600,580,620,650,610,680,720,690,750,780,820,760,810,850,900,960,1240];
const maxVal = 1400;
const w = 600, h = 200;
const pts = data.map((v, i) => `${((i / 29) * w).toFixed(1)},${(h - (v / maxVal) * (h - 20)).toFixed(1)}`).join(" ");
const areaPath = `M0,${h} ` + data.map((v, i) => `L${((i / 29) * w).toFixed(1)},${(h - (v / maxVal) * (h - 20)).toFixed(1)}`).join(" ") + ` L${w},${h} Z`;

function ProgressBar({ pct, warning }: { pct: number; warning: boolean }) {
  return (
    <div className="w-full bg-[#0F0F20] h-5 rounded-full">
      <div className={`h-5 rounded-full transition-all duration-700 ${warning ? "bg-amber-500" : "bg-emerald-500"}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export default function MonitoringPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl text-[#C9A84C] tracking-wider">運用状況モニタリング</h1>
        <p className="text-[#F5F0E8]/40 text-sm mt-1">サービスの使用状況をリアルタイムで確認できます</p>
      </div>
      <div className="bg-amber-900/20 border border-amber-600/40 p-4 flex gap-3">
        <span className="text-amber-400 text-xl">⚠️</span>
        <div>
          <p className="text-amber-300 font-medium">Vercelの帯域幅が上限に近づいています</p>
          <p className="text-amber-400/70 text-sm mt-0.5">今月中にアップグレードをご検討ください。サービス停止を防ぐため、早めのご対応をお勧めします。</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Vercel 帯域幅", desc: "お客様がサイトにアクセスするたびに消費されます", pct: 80, warning: true, usage: "80GB / 100GB", limit: "無料プランの上限：月100GB", btn: "Vercelプランを確認する →" },
          { title: "Supabase データベース", desc: "商品データ・注文履歴が保存されています", pct: 30, warning: false, usage: "150MB / 500MB", limit: "無料プランの上限：500MB", btn: "Supabaseプランを確認する →" },
        ].map((c) => (
          <div key={c.title} className="bg-[#1A1A2E] border border-[#2E2E50] p-6 space-y-4">
            <div>
              <h2 className="text-[#F5F0E8] font-medium">{c.title}</h2>
              <p className="text-[#F5F0E8]/40 text-sm mt-1">{c.desc}</p>
            </div>
            <ProgressBar pct={c.pct} warning={c.warning} />
            <div className="flex justify-between text-sm">
              <span className="text-[#F5F0E8]/50">{c.usage} 使用中</span>
              <span className={`px-2 py-0.5 text-xs ${c.warning ? "bg-amber-900/40 text-amber-400" : "bg-emerald-900/40 text-emerald-400"}`}>
                {c.warning ? "⚠️ 上限に近づいています" : "✅ 問題ありません"}
              </span>
            </div>
            <p className="text-[#F5F0E8]/30 text-xs">{c.limit}</p>
            <a href="#" className="inline-block border border-[#C9A84C]/60 text-[#C9A84C] px-4 py-2 text-sm hover:bg-[#C9A84C]/10 transition-colors">{c.btn}</a>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[{ l: "月間アクセス数", v: "1,240 PV" }, { l: "今月の売上", v: "¥128,400" }, { l: "今月の注文数", v: "23件" }].map((s) => (
          <div key={s.l} className="bg-[#1A1A2E] border border-[#2E2E50] p-4 text-center">
            <p className="text-[#F5F0E8]/40 text-xs tracking-wider mb-1">{s.l}</p>
            <p className="font-serif text-xl text-[#C9A84C]">{s.v}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#1A1A2E] border border-[#2E2E50] p-6">
        <h3 className="font-serif text-[#C9A84C] mb-4">月間アクセス数推移（過去30日）</h3>
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-40">
          <path d={areaPath} fill="#C9A84C" opacity="0.08" />
          <polyline points={pts} fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx={w} cy={(h - (1240 / maxVal) * (h - 20)).toFixed(1)} r="4" fill="#C9A84C" />
        </svg>
        <div className="flex justify-between text-[#F5F0E8]/30 text-xs mt-1"><span>1日前</span><span>今日</span></div>
      </div>
      <div className="bg-[#1A1A2E] border border-[#2E2E50] p-6">
        <h3 className="font-serif text-[#C9A84C] mb-2">困ったときは</h3>
        <p className="text-[#F5F0E8]/50 text-sm mb-4">使用量が80%を超えたらアップグレードをご検討ください。サービスが止まる前に余裕を持って対処できます。</p>
        <div className="flex gap-6">
          <a href="#" className="text-[#C9A84C]/60 text-sm hover:text-[#C9A84C] transition-colors">📖 操作マニュアル</a>
          <a href="/contact" className="text-[#C9A84C]/60 text-sm hover:text-[#C9A84C] transition-colors">✉️ お問い合わせ</a>
        </div>
      </div>
    </div>
  );
}
