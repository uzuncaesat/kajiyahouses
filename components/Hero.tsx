"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Users, Moon, Clock } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  // Mobilde video yerine fallback görsel kullan
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink">
      {/* 1 — Full-screen drone video (mobilde fallback görsel) */}
      {isMobile ? (
        <Image
          src="/images/hero-fallback.jpg"
          alt="Sapanca doğası — Kajiya Houses"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-fallback.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/drone-hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Koyu overlay (#1A1A1A, %40) + okunabilirlik için ince degrade */}
      <div className="absolute inset-0 bg-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/30" />

      {/* Ortalanmış içerik */}
      <div className="container-x relative z-10 flex flex-col items-center text-center">
        {/* 2 — Lokasyon etiketi: soldan kayar (0.4s) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-ink/20 px-5 py-2 backdrop-blur-sm"
        >
          <MapPin className="h-3.5 w-3.5 text-gold" />
          <span className="font-body text-xs uppercase tracking-brand text-cream/90">
            Sapanca, Türkiye
          </span>
        </motion.div>

        {/* 3 — Ana başlık: aşağıdan yukarı (0.7s), Cormorant, çok büyük */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease }}
            className="font-display text-6xl font-light uppercase leading-[0.9] tracking-wide text-cream sm:text-8xl lg:text-[10rem]"
          >
            Kajiya Houses
          </motion.h1>
        </div>

        {/* 4 — Alt başlık: fade in (1.0s) */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.9, ease }}
          className="mt-6 max-w-xl font-accent text-lg italic text-cream/85 sm:text-2xl"
        >
          Sapanca&apos;nın Kalbinde Özel Bungalov Deneyimi
        </motion.p>

        {/* 5 — İki buton: stagger (1.3s) */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { delayChildren: 1.3, staggerChildren: 0.15 } },
          }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
            }}
          >
            <Link
              href="/rezervasyon"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-9 py-4 font-body text-sm font-medium uppercase tracking-widest text-cream transition-all duration-500 hover:bg-ink hover:shadow-soft"
            >
              Rezervasyon Yap
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
            }}
          >
            <Link
              href="/galeri"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/60 px-9 py-4 font-body text-sm font-medium uppercase tracking-widest text-cream transition-all duration-500 hover:bg-cream hover:text-ink"
            >
              Galeriyi Keşfet
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* 7 — Sol alt köşe: bilgi kartı */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.8, ease }}
        className="absolute bottom-8 left-6 z-10 hidden items-center gap-5 rounded-2xl border border-cream/20 bg-ink/30 px-6 py-4 backdrop-blur-md md:left-10 md:flex"
      >
        {[
          { icon: Users, label: "Max 6 Kişi" },
          { icon: Moon, label: "Min 2 Gece" },
          { icon: Clock, label: "Check-in 14:00" },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center gap-5">
              {i > 0 && <span className="h-8 w-px bg-cream/20" />}
              <span className="flex items-center gap-2 font-body text-xs uppercase tracking-widest text-cream/85">
                <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                {item.label}
              </span>
            </div>
          );
        })}
      </motion.div>

      {/* 6 — Sağ alt: animasyonlu scroll ok (bounce) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
        className="absolute bottom-8 right-6 z-10 flex flex-col items-center gap-2 md:right-10"
      >
        <span className="font-body text-[0.6rem] uppercase tracking-brand text-cream/60">
          Keşfet
        </span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5"
        >
          <span className="block h-2 w-1 rounded-full bg-gold" />
        </motion.span>
      </motion.div>
    </section>
  );
}
