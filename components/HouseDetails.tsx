"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Waves, ShieldCheck, MapPin } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const highlights = [
  {
    icon: Waves,
    title: "Isıtmalı Havuz",
    detail: "Korunaklı, size özel ve her mevsim keyifli",
  },
  {
    icon: ShieldCheck,
    title: "Tam Müstakil",
    detail: "Komşusuz, korunaklı bahçe — yalnızca size ait",
  },
  {
    icon: MapPin,
    title: "Merkezi Konum",
    detail: "Sapanca'nın kalbinde, her yere yakın",
  },
];

export default function HouseDetails() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Sol — Metin (soldan kayar) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
        >
          <span className="eyebrow">Konaklama</span>
          <h2 className="mt-4 font-display text-4xl font-light leading-[1.05] text-forest md:text-6xl">
            Eviniz Gibi Rahat,{" "}
            <em className="font-accent italic text-gold">Tatil Gibi Özgür</em>
          </h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-muted">
            Oturma odasındaki iki açılır koltuk dahil, altı kişiye kadar konforla
            ağırlayan müstakil bungalovumuzda; şömineden yerden ısıtmaya, tam
            donanımlı mutfaktan korunaklı bahçeye her detay sizin huzurunuz için
            tasarlandı.
          </p>

          {/* 3 öne çıkan nokta */}
          <div className="mt-10 space-y-px overflow-hidden rounded-2xl border border-divider">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease }}
                  className="group flex items-center gap-5 bg-white/50 p-5 transition-colors duration-500 hover:bg-forest"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream transition-colors duration-500 group-hover:bg-cream/10">
                    <Icon
                      className="h-6 w-6 text-forest transition-colors duration-500 group-hover:text-gold"
                      strokeWidth={1.5}
                    />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-forest transition-colors duration-500 group-hover:text-cream">
                      {h.title}
                    </h3>
                    <p className="font-body text-sm text-muted transition-colors duration-500 group-hover:text-cream/70">
                      {h.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Sağ — Görsel (sağdan kayar) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
            <Image
              src="/images/house-interior.jpg"
              alt="Kajiya Houses bungalov iç mekan"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          </div>

          {/* Süs etiket */}
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-divider bg-cream px-6 py-4 shadow-card">
            <div className="font-display text-3xl font-light text-forest">6</div>
            <div className="font-body text-[0.6rem] uppercase tracking-widest text-muted">
              Kişi Kapasite
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
