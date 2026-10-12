const ZONES = {
  occidentalBaja: "#fb7185",
  occidentalAlta: "#ef4444",
  oriental: "#f97316",
  norte: "#3b82f6",
  sur: "#22c55e",
  vip: "#8b5cf6",
};

export function StadiumZonesMini() {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden="true">
      {/* Localidades */}
      <rect x="14" y="12" width="24" height="14" rx="4" fill={ZONES.vip} />
      <rect x="122" y="12" width="24" height="14" rx="4" fill={ZONES.vip} />
      <rect x="46" y="12" width="68" height="12" rx="4" fill={ZONES.norte} />
      <rect x="46" y="96" width="68" height="12" rx="4" fill={ZONES.sur} />
      <rect x="14" y="32" width="20" height="28" rx="4" fill={ZONES.occidentalBaja} />
      <rect x="14" y="62" width="20" height="26" rx="4" fill={ZONES.occidentalAlta} />
      <rect x="126" y="32" width="20" height="56" rx="4" fill={ZONES.oriental} />

      {/* Cancha */}
      <rect x="46" y="32" width="68" height="56" rx="10" fill="#e8f7ee" stroke="#16a34a" strokeWidth="1.5" />
      <line x1="80" y1="32" x2="80" y2="88" stroke="#16a34a" strokeWidth="1.5" />
      <circle cx="80" cy="60" r="9" fill="none" stroke="#16a34a" strokeWidth="1.5" />
      <circle cx="80" cy="60" r="2" fill="#16a34a" />
    </svg>
  );
}
