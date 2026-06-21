import { useMemo } from "react";

export function FloatingHearts({ count = 18 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 14,
        duration: 14 + Math.random() * 14,
        size: 10 + Math.random() * 18,
        opacity: 0.35 + Math.random() * 0.5,
        symbol: Math.random() > 0.55 ? "❤" : Math.random() > 0.5 ? "★" : "✦",
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((p) => (
        <span
          key={p.id}
          className="absolute text-[color:var(--gold)]"
          style={{
            left: `${p.left}%`,
            bottom: `-10vh`,
            fontSize: p.size,
            opacity: p.opacity,
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
            filter: "drop-shadow(0 0 6px oklch(0.78 0.16 70 / 0.6))",
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}

export function Starfield({ count = 60 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 4,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
