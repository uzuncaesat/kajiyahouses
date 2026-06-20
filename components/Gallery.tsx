"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowUpRight,
} from "lucide-react";
import { galleryFilters, galleryMedia, type MediaItem } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

/* Masonry span sınıfları — bazı görseller 2 kat yüksek, drone videosu daima col-span-2 */
function spanClass(item: MediaItem): string {
  if (item.category === "Drone Görüntüsü")
    return "col-span-2 row-span-2"; // drone her zaman geniş
  if (item.type === "video") return "row-span-2"; // diğer videolar uzun
  if ([3, 5, 7].includes(item.id)) return "row-span-2"; // seçili görseller 2x
  return "row-span-1";
}

type GalleryProps = {
  /** Ana sayfa için: filtre sekmeleri yok, sınırlı sayıda öğe + "Tüm Galeri" linki */
  preview?: boolean;
};

export default function Gallery({ preview = false }: GalleryProps) {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>("Tümü");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(() => {
    if (preview) return galleryMedia.slice(0, 6);
    if (filter === "Tümü") return galleryMedia;
    return galleryMedia.filter((m) => m.category === filter);
  }, [filter, preview]);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((p) => (p === null ? p : (p + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () =>
      setActive((p) => (p === null ? p : (p - 1 + items.length) % items.length)),
    [items.length]
  );

  // ESC + ok tuşları ile navigasyon
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  const activeItem = active !== null ? items[active] : null;

  return (
    <section id="galeri" className="relative bg-cream py-24 md:py-32">
      <div className="container-x">
        {/* Başlık */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Galeri
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 font-display text-4xl font-light leading-tight text-forest md:text-6xl"
            >
              Her kare bir <em className="font-accent italic text-gold">davet.</em>
            </motion.h2>
          </div>

          {preview && (
            <Link
              href="/galeri"
              className="group inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-forest"
            >
              <span className="link-underline">Tüm Galeri</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          )}
        </div>

        {/* Filtre sekmeleri */}
        {!preview && (
          <div className="mb-12 flex flex-wrap gap-2">
            {galleryFilters.map((f) => {
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`relative rounded-full px-5 py-2.5 font-body text-sm tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-cream"
                      : "text-muted hover:text-forest"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-forest"
                      transition={{ duration: 0.4, ease }}
                    />
                  )}
                  <span className="relative z-10">{f}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Masonry grid */}
        <motion.div
          layout
          className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.button
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05, ease }}
                onClick={() => setActive(i)}
                className={`group relative overflow-hidden rounded-2xl border-2 border-transparent bg-divider transition-[border-color,transform] duration-500 hover:scale-[1.02] hover:border-gold ${spanClass(
                  item
                )}`}
              >
                <Image
                  src={item.type === "video" ? item.thumbnail! : item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Video oynat rozeti */}
                {item.type === "video" && (
                  <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/60 bg-ink/30 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                    <Play className="h-5 w-5 translate-x-0.5 fill-cream text-cream" />
                  </span>
                )}

                {/* İsim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-body text-[0.6rem] uppercase tracking-widest text-gold">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl font-medium text-cream">
                    {item.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 backdrop-blur-md"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Kapat"
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Önceki"
              className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink md:left-8"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Sonraki"
              className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink md:right-8"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease }}
              className="relative max-h-[85vh] w-[92vw] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {activeItem.type === "video" ? (
                <video
                  src={activeItem.src}
                  poster={activeItem.thumbnail}
                  controls
                  autoPlay
                  playsInline
                  className="mx-auto max-h-[85vh] w-full rounded-xl bg-black object-contain"
                />
              ) : (
                <Image
                  src={activeItem.src}
                  alt={activeItem.title}
                  width={1600}
                  height={1200}
                  priority
                  className="mx-auto h-auto max-h-[85vh] w-auto rounded-xl object-contain"
                />
              )}

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="font-body text-[0.6rem] uppercase tracking-widest text-gold">
                    {activeItem.category}
                  </span>
                  <h3 className="font-display text-2xl font-light text-cream">
                    {activeItem.title}
                  </h3>
                </div>
                <span className="font-body text-xs uppercase tracking-widest text-cream/50">
                  {active! + 1} / {items.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
