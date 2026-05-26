"use client";

const data = [320,280,350,420,380,410,460,390,510,480,520,490,550,600,580,620,650,610,680,720,690,750,780,820,760,810,850,900,960,1240];
const maxVal = 1400;
const w = 600, h = 200;
const pts = data.map((v, i) => `${((i / 29) * w).toFixed(1)},${(h - (v / maxVal) * (h - 20)).toFixed(1)}`).join(" ");
const areaPath = `M0,${h} ` + data.map((v, i) => `L${((i / 29) * w).toFixed(1)},${(h - (v / maxVal) * (h - 20)).toFixed(1)}`).join(" ") + ` L${w},${h} Z`;

function ProgressBar({ pct, warning }: { pct: number; warning: boolean }) {
  return (
    <div className="w-full bg-[#E8DDD0] rounded-full h-4">
      <div className={`h-4 rounded-full ${warning ? "bg-amber-500" : "bg-emerald-500"}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export default function MonitoringPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl text-[#7B5E4A]">運用状況モニタリング</h1>
        <p className="text-[#9E9082] text-sm mt-1">サービスの使用状況を確認できます</p>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
        <span className="text-amber-500 text-lg">⚠️</span>
        <div>
          <p className="text-amber-800 font-medium text-sm">Vercelの帯域幅が上限に近づいています</p>
          <p className="text-amber-700 text-sm">今月中にアップグレードをご検討ください。</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Vercel 帯域幅", desc: "サイトへのアクセスで消費されます", pct: 80, warning: true, usage: "80GB / 100GB", limit: "無料プランの上限：月100GB", btnText: "Vercelプランを確認する →" },
          { title: "Supabase データベース", desc: "商品・注文データが保存されています", pct: 30, warning: false, usage: "150MB / 500MB", limit: "無料プランの上限：500MB", btnText: "Supabaseプランを確認する →" },
        ].map((c) => (
          <div key={c.title} className="bg-white border border-[#E8DDD0] rounded-lg p-6 space-y-4">
            <div>
              <h2 className="font-medium text-[#7B5E4A]">{c.title}</h2>
              <p className="text-[#9E9082] text-sm mt-1">{c.desc}</p>
            </div>
            <ProgressBar pct={c.pct} warning={c.warning} />
            <div className="flex justify-between text-sm">
              <span className="text-[#9E9082]">{c.usage} 使用中</span>
              <span className={`px-2 py-0.5 rounded text-xs ${c.warning ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}>
                {c.warning ? "⚠️ 上限に近づいています" : "✅ 問題ありません"}
              </span>
            </div>
            <p className="text-[#9E9082] text-xs">{c.limit}</p>
            <a href="#" className={`inline-block px-4 py-2 text-sm rounded transition-colors ${c.warning ? "bg-[#C17B5C] text-white hover:bg-[#A56A4D]" : "border border-[#E8DDD0] text-[#7B5E4A] hover:border-[#C17B5C]"}`}>
              {c.btnText}
            </a>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[{ label: "月間アクセス数", value: "1,240 PV" }, { label: "今月の売上", value: "¥128,400" }, { label: "今月の注文数", value: "23件" }].map((s) => (
          <div key={s.label} className="bg-white border border-[#E8DDD0] rounded-lg p-4 text-center">
            <p className="text-[#9E9082] text-xs mb-1">{s.label}</p>
            <p className="text-[#C17B5C] text-xl font-serif">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white border border-[#E8DDD0] rounded-lg p-6">
        <h3 className="font-serif text-[#7B5E4A] mb-4">月間アクセス数推移（過去30日）</h3>
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-40">
          <path d={areaPath} fill="#C17B5C" opacity="0.1" />
          <polyline points={pts} fill="none" stroke="#C17B5C" strokeWidth="2" strokeLinejoin="round" />
          <circle cx={w} cy={(h - (1240 / maxVal) * (h - 20)).toFixed(1)} r="4" fill="#C17B5C" />
        </svg>
        <div className="flex justify-between text-[#9E9082] text-xs mt-1"><span>1日前</span><span>今日</span></div>
      </div>
      <div className="bg-[#E8DDD0] rounded-lg p-6">
        <h3 className="font-serif text-[#7B5E4A] mb-2">困ったときは</h3>
        <p className="text-[#9E9082] text-sm mb-4">使用量が80%を超えたらアップグレードをご検討ください。サービスが止まる前に余裕を持って対処できます。</p>
        <div className="flex gap-4">
          <a href="#" className="text-[#C17B5C] text-sm hover:underline">📖 操作マニュアル</a>
          <a href="/contact" className="text-[#C17B5C] text-sm hover:underline">✉️ お問い合わせ</a>
        </div>
      </div>
    </div>
  );
}
