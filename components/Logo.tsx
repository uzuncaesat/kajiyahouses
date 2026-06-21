import { site } from "@/lib/site";

/**
 * Kajiya Houses marka işareti — çift cepheli (iki ev) altın çizgi house mark.
 * Altın gradyan, şeffaf zemin: hem koyu hem açık bölümlerde kullanılır.
 */
export function HouseMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 96"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="kajiya-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E7CA8E" />
          <stop offset="45%" stopColor="#B8986A" />
          <stop offset="100%" stopColor="#8C6E42" />
        </linearGradient>
      </defs>
      <g
        stroke="url(#kajiya-gold)"
        strokeWidth={5}
        strokeLinejoin="miter"
        strokeLinecap="butt"
      >
        {/* Ana ev: sol duvar + büyük cephe çatısı */}
        <path d="M12 90 L12 46 L50 12 L88 46" />
        {/* Sol ayak */}
        <path d="M12 90 L36 90" />
        {/* Sağ duvar + sağ ayak */}
        <path d="M88 46 L88 90 L64 90" />
        {/* İkinci (küçük) cephe çatısı — üst sağda bindirme */}
        <path d="M60 30 L84 10 L108 34" />
        {/* Baca / dikey vurgu */}
        <path d="M70 18 L70 38" />
      </g>
    </svg>
  );
}

/**
 * Tam logo kilidi: house mark + Cormorant wordmark.
 * variant="stacked" → mark üstte, yazı altta (footer için).
 * variant="horizontal" → mark solda, yazı sağda (navbar için).
 */
export function Logo({
  variant = "horizontal",
  className = "",
}: {
  variant?: "horizontal" | "stacked";
  className?: string;
}) {
  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <HouseMark className="h-14 w-auto" />
        <span className="mt-3 font-display text-3xl font-semibold uppercase leading-none tracking-wide text-gold">
          Kajiya Houses
        </span>
        <span className="mt-1 font-body text-[0.6rem] uppercase tracking-brand text-gold/70">
          {site.location.split(",")[0]}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <HouseMark className="h-10 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-semibold tracking-wide">
          Kajiya Houses
        </span>
        <span className="mt-0.5 font-body text-[0.6rem] uppercase tracking-brand opacity-70">
          {site.location.split(",")[0]}
        </span>
      </span>
    </div>
  );
}
