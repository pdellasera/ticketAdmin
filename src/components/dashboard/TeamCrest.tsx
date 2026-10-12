import { useState } from "react";

type TeamCrestProps = {
  name: string;
  crest: string;
  color: string;
  size?: number;
};

export function TeamCrest({ name, crest, color, size = 28 }: TeamCrestProps) {
  const [failed, setFailed] = useState(false);
  const id = `crest-${name}-${color.replace("#", "")}`;

  if (failed) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 34" className="shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor="#00000044" />
          </linearGradient>
        </defs>
        <path
          d="M16 2 L29.5 6.2 V15.8 C29.5 24.8 23.6 30.6 16 33.5 C8.4 30.6 2.5 24.8 2.5 15.8 V6.2 Z"
          fill={`url(#${id})`}
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <path
          d="M16 7 L25.5 10 V15.8 C25.5 21.4 21.4 25.4 16 27.6 C10.6 25.4 6.5 21.4 6.5 15.8 V10 Z"
          fill="#ffffff"
          opacity="0.16"
        />
        <text
          x="16"
          y="21.5"
          textAnchor="middle"
          fontSize="10"
          fontWeight="800"
          fill="#ffffff"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="0.5"
        >
          {name}
        </text>
      </svg>
    );
  }

  return (
    <img
      src={crest}
      alt={name}
      width={size}
      height={size}
      onError={() => setFailed(true)}
      className="shrink-0 object-contain"
      style={{ width: size, height: size }}
    />
  );
}
