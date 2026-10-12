type ReportMiniChartProps = {
  strong: string;
  soft: string;
  bars?: number[];
};

export function ReportMiniChart({
  strong,
  soft,
  bars = [18, 30, 24, 46, 36, 58, 48],
}: ReportMiniChartProps) {
  const w = 160;
  const h = 100;
  const baseline = h - 12;
  const max = Math.max(...bars);
  const bw = 12;
  const startX = 12;
  const gap = (w - startX * 2 - bars.length * bw) / (bars.length - 1);

  const points = bars.map((v, i) => {
    const x = startX + i * (bw + gap) + bw / 2;
    const bh = (v / max) * (baseline - 16);
    return { x, y: baseline - bh, bh };
  });

  const line = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full" aria-hidden="true">
      {points.map((p, i) => (
        <rect key={i} x={p.x - bw / 2} y={p.y} width={bw} height={p.bh} rx={3} fill={soft} />
      ))}
      <path d={line} fill="none" stroke={strong} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={2.75} fill={strong} />
      ))}
    </svg>
  );
}
