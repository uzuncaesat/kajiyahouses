import Image from "next/image";

/**
 * Kajiya Houses logosu — markanın altın logosundan arka planı temizlenmiş
 * şeffaf PNG (public/images/logo-mark.png). Tam kilit: ev + "KAJIYA HOUSES
 * SAPANCA". Altın olduğu için hem koyu hem açık zeminlerde çalışır.
 *
 * Boyut className ile verilir (örn. "h-14 w-auto").
 */
export function Logo({
  className = "h-12 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/logo-mark.png"
      alt="Kajiya Houses Sapanca"
      width={400}
      height={400}
      priority={priority}
      className={className}
    />
  );
}
