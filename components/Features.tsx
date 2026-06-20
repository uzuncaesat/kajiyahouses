"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

export default function Features() {
  return (
    <section id="ozellikler" className="relative bg-cream py-24 md:py-32">
      <div className="container-x">
        {/* Başlık */}
        <div className="mb-16 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Konseptimiz
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 font-display text-4xl font-light leading-tight text-forest md:text-6xl"
          >
            Konforun her ayrıntısı{" "}
            <em className="font-accent italic text-gold">düşünüldü.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-body text-base leading-relaxed text-muted"
          >
            Modern bir tatil evinden beklediğiniz her şey, doğanın huzuruyla bir
            arada. İşte sizi bekleyen ayrıcalıklar.
          </motion.p>
        </div>

        {/* 4'lü grid (mobil 2'li) — stagger animasyonu */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={item}
                className="group relative overflow-hidden rounded-2xl border border-divider bg-white p-6 transition-colors duration-500 hover:bg-forest md:p-8"
              >
                {/* Animasyonlu ikon */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream transition-all duration-500 group-hover:scale-110 group-hover:bg-cream/10">
                  <Icon
                    className="h-6 w-6 text-forest transition-colors duration-500 group-hover:text-gold"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-display text-xl font-medium leading-tight text-forest transition-colors duration-500 group-hover:text-cream md:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-2 font-body text-sm text-muted transition-colors duration-500 group-hover:text-cream/70">
                  {feature.detail}
                </p>

                {/* Köşe süs */}
                <span className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gold/0 transition-colors duration-500 group-hover:bg-gold/10" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
