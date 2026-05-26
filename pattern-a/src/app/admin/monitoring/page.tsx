"use client";

const data = [320,280,350,420,380,410,460,390,510,480,520,490,550,600,580,620,650,610,680,720,690,750,780,820,760,810,850,900,960,1240];
const maxVal = 1400;
const w = 600, h = 200;
const pts = data.map((v, i) => `${((i / 29) * w).toFixed(1)},${(h - (v / maxVal) * (h - 20)).toFixed(1)}`).join(" ");
const areaPath = `M${((0 / 29) * w).toFixed(1)},${h} ` + data.map((v, i) => `L${((i / 29) * w).toFixed(1)},${(h - (v / maxVal) * (h - 20)).toFixed(1)}`).join(" ") + ` L${w},${h} Z`;

function ProgressBar({ pct, warning }: { pct: number; warning: boolean }) {
  return (
    <div>
      <div className="w-full bg-[#2A2A2A] rounded-full h-5">
        <div
          className={`h-5 rounded-full transition-all duration-700 ${warning ? "bg-amber-500" : "bg-emerald-500"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function MonitoringPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-serif text-[#B8960C] tracking-wider">運用状況モニタリング</h1>
        <p className="text-[#C0C0C0] text-sm mt-1">サービスの使用状況をリアルタイムで確認できます</p>
      </div>

      {/* Alert */}
      <div className="bg-amber-900/30 border border-amber-500/50 rounded p-4 flex items-start gap-3">
        <span className="text-amber-400 text-xl mt-0.5">⚠️</span>
        <div>
          <p className="text-amber-300 font-medium">Vercelの帯域幅が上限に近づいています</p>
          <p className="text-amber-200/80 text-sm mt-1">今月中にアップグレードをご検討ください。このままご利用いただけますが、上限を超えるとサイトが一時的に停止する可能性があります。</p>
        </div>
      </div>

      {/* Usage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vercel */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded p-6 space-y-4">
          <div>
            <h2 className="text-white font-medium text-lg">Vercel 帯域幅（データ転送量）</h2>
            <p className="text-[#C0C0C0] text-sm mt-1">お客様がサイトにアクセスするたびに消費されます</p>
          </div>
          <ProgressBar pct={80} warning={true} />
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#C0C0C0]">80GB / 100GB 使用中</span>
            <span className="bg-amber-500/20 text-amber-400 border border-amber-500/40 px-2 py-0.5 rounded text-xs">⚠️ 上限に近づいています</span>
          </div>
          <p className="text-[#C0C0C0] text-xs">無料プランの上限：月100GB</p>
          <a href="#" className="inline-block border border-[#B8960C] text-[#B8960C] px-4 py-2 text-sm hover:bg-[#B8960C] hover:text-black transition-colors">
            Vercelプランを確認する →
          </a>
        </div>

        {/* Supabase */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded p-6 space-y-4">
          <div>
            <h2 className="text-white font-medium text-lg">Supabase データベース</h2>
            <p className="text-[#C0C0C0] text-sm mt-1">商品データ・注文履歴・会員情報が保存されています</p>
          </div>
          <ProgressBar pct={30} warning={false} />
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#C0C0C0]">150MB / 500MB 使用中</span>
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded text-xs">✅ 問題ありません</span>
          </div>
          <p className="text-[#C0C0C0] text-xs">無料プランの上限：500MB</p>
          <a href="#" className="inline-block border border-[#B8960C] text-[#B8960C] px-4 py-2 text-sm hover:bg-[#B8960C] hover:text-black transition-colors">
            Supabaseプランを確認する →
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "月間アクセス数", value: "1,240 PV" },
          { label: "今月の売上", value: "¥128,400" },
          { label: "今月の注文数", value: "23件" },
        ].map((s) => (
          <div key={s.label} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded p-4 text-center">
            <p className="text-[#C0C0C0] text-xs mb-1">{s.label}</p>
            <p className="text-[#B8960C] text-xl font-serif">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded p-6">
        <h3 className="text-white font-medium mb-4">月間アクセス数推移（過去30日）</h3>
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-40">
          <path d={areaPath} fill="#B8960C" opacity="0.1" />
          <polyline points={pts} fill="none" stroke="#B8960C" strokeWidth="2" strokeLinejoin="round" />
          {data.map((v, i) => (
            <circle key={i} cx={((i / 29) * w).toFixed(1)} cy={(h - (v / maxVal) * (h - 20)).toFixed(1)} r={i === 29 ? 4 : 0} fill="#B8960C" />
          ))}
        </svg>
        <div className="flex justify-between text-[#C0C0C0] text-xs mt-1">
          <span>1日前</span><span>15日前</span><span>今日</span>
        </div>
      </div>

      {/* Help */}
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded p-6">
        <h3 className="text-white font-medium mb-3">困ったときは</h3>
        <p className="text-[#C0C0C0] text-sm mb-4">使用量が80%を超えたらアップグレードをご検討ください。サービスが停止する前に対処できます。</p>
        <div className="flex gap-4">
          <a href="#" className="text-[#B8960C] text-sm hover:underline">📖 操作マニュアルを見る</a>
          <a href="/contact" className="text-[#B8960C] text-sm hover:underline">✉️ サポートへ問い合わせる</a>
        </div>
      </div>
    </div>
  );
}
