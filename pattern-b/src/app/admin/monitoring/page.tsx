"use client";

const data = [320,280,350,420,380,410,460,390,510,480,520,490,550,600,580,620,650,610,680,720,690,750,780,820,760,810,850,900,960,1240];
const maxVal = 1400;
const w = 600, h = 200;
const pts = data.map((v, i) => `${((i / 29) * w).toFixed(1)},${(h - (v / maxVal) * (h - 20)).toFixed(1)}`).join(" ");
const areaPath = `M0,${h} ` + data.map((v, i) => `L${((i / 29) * w).toFixed(1)},${(h - (v / maxVal) * (h - 20)).toFixed(1)}`).join(" ") + ` L${w},${h} Z`;

function ProgressBar({ pct, warning }: { pct: number; warning: boolean }) {
  return (
    <div>
      <div className="w-full bg-[#E0E0E0] rounded-full h-4">
        <div className={`h-4 rounded-full transition-all duration-700 ${warning ? "bg-amber-500" : "bg-emerald-500"}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function MonitoringPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-medium text-[#111111]">運用状況モニタリング</h1>
        <p className="text-[#888888] text-sm mt-1">サービスの使用状況を確認できます</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded p-4 flex gap-3">
        <span className="text-amber-500 text-lg">⚠️</span>
        <div>
          <p className="text-amber-800 font-medium text-sm">Vercelの帯域幅が上限に近づいています</p>
          <p className="text-amber-700 text-sm mt-0.5">今月中にアップグレードをご検討ください。</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-[#E0E0E0] rounded p-6 space-y-4">
          <div>
            <h2 className="font-medium text-[#111111]">Vercel 帯域幅（データ転送量）</h2>
            <p className="text-[#888888] text-sm mt-1">サイトへのアクセスで消費されます</p>
          </div>
          <ProgressBar pct={80} warning={true} />
          <div className="flex justify-between text-sm">
            <span className="text-[#888888]">80GB / 100GB 使用中</span>
            <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs">⚠️ 上限に近づいています</span>
          </div>
          <p className="text-[#888888] text-xs">無料プランの上限：月100GB</p>
          <a href="#" className="inline-block bg-[#111111] text-white px-4 py-2 text-sm hover:bg-[#333] transition-colors">
            Vercelプランを確認する →
          </a>
        </div>

        <div className="bg-white border border-[#E0E0E0] rounded p-6 space-y-4">
          <div>
            <h2 className="font-medium text-[#111111]">Supabase データベース</h2>
            <p className="text-[#888888] text-sm mt-1">商品・注文・会員データが保存されています</p>
          </div>
          <ProgressBar pct={30} warning={false} />
          <div className="flex justify-between text-sm">
            <span className="text-[#888888]">150MB / 500MB 使用中</span>
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">✅ 問題ありません</span>
          </div>
          <p className="text-[#888888] text-xs">無料プランの上限：500MB</p>
          <a href="#" className="inline-block border border-[#111111] text-[#111111] px-4 py-2 text-sm hover:bg-[#F5F5F5] transition-colors">
            Supabaseプランを確認する →
          </a>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "月間アクセス数", value: "1,240 PV" },
          { label: "今月の売上", value: "¥128,400" },
          { label: "今月の注文数", value: "23件" },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-[#E0E0E0] rounded p-4 text-center">
            <p className="text-[#888888] text-xs mb-1">{s.label}</p>
            <p className="text-[#111111] text-xl font-light">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#E0E0E0] rounded p-6">
        <h3 className="font-medium text-[#111111] mb-4">月間アクセス数推移（過去30日）</h3>
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-40">
          <path d={areaPath} fill="#111111" opacity="0.05" />
          <polyline points={pts} fill="none" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx={w} cy={(h - (1240 / maxVal) * (h - 20)).toFixed(1)} r="4" fill="#111111" />
        </svg>
        <div className="flex justify-between text-[#888888] text-xs mt-1">
          <span>1日前</span><span>15日前</span><span>今日</span>
        </div>
      </div>

      <div className="bg-white border border-[#E0E0E0] rounded p-6">
        <h3 className="font-medium text-[#111111] mb-2">困ったときは</h3>
        <p className="text-[#888888] text-sm mb-4">使用量が80%を超えたらアップグレードをご検討ください。</p>
        <div className="flex gap-4">
          <a href="#" className="text-[#111111] text-sm underline">📖 操作マニュアル</a>
          <a href="/contact" className="text-[#111111] text-sm underline">✉️ お問い合わせ</a>
        </div>
      </div>
    </div>
  );
}
