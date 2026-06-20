"use client";

import { motion } from "framer-motion";
import {
  Users,
  Sparkles,
  UserRound,
  CheckCircle2,
  Clock,
  CalendarDays,
  CreditCard,
  Phone,
} from "lucide-react";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const guests = [
  { icon: Users, title: "Aileler", detail: "Çocuklarıyla huzurlu bir tatil arayan aileler" },
  { icon: Sparkles, title: "Kız Grupları", detail: "Arkadaşlarıyla keyifli vakit geçiren gruplar" },
  { icon: UserRound, title: "Erkek Grupları", detail: "Doğada mola veren dostlar" },
];

const infos = [
  {
    icon: Clock,
    title: "Giriş & Çıkış",
    detail: "Check-in: 14:00 — Check-out: 11:00",
  },
  {
    icon: CalendarDays,
    title: "Minimum Konaklama",
    detail: "Rezervasyonlar minimum 2 gece olarak alınır",
  },
  {
    icon: CreditCard,
    title: "Rezervasyon Onayı",
    detail: "Onay için %50 kapora talep edilmektedir",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export default function Rules() {
  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="container-x">
        {/* BÖLÜM A — Kimler konaklayabilir */}
        <div className="mb-20">
          <div className="mb-12 max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Kimler Konaklayabilir
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 font-display text-4xl font-light leading-tight text-forest md:text-5xl"
            >
              Huzurlu bir ortam için{" "}
              <em className="font-accent italic text-gold">misafir profilimiz.</em>
            </motion.h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {guests.map((g) => {
              const Icon = g.icon;
              return (
                <motion.div
                  key={g.title}
                  variants={item}
                  className="group rounded-3xl bg-white p-8 shadow-card transition-transform duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 transition-colors duration-500 group-hover:bg-forest">
                      <Icon
                        className="h-6 w-6 text-forest transition-colors duration-500 group-hover:text-cream"
                        strokeWidth={1.5}
                      />
                    </span>
                    <CheckCircle2 className="ml-auto h-6 w-6 text-forest" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-medium text-forest">
                    {g.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                    {g.detail}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* BÖLÜM B — Önemli bilgiler (amber uyarı kutuları) */}
        <div>
          <div className="mb-10 max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Önemli Bilgiler
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 font-display text-4xl font-light leading-tight text-forest md:text-5xl"
            >
              Rezervasyon öncesi{" "}
              <em className="font-accent italic text-gold">bilmeniz gerekenler.</em>
            </motion.h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2"
          >
            {infos.map((info) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  variants={item}
                  className="flex items-start gap-4 rounded-xl border-l-4 border-gold bg-[#FEF3E2] p-6"
                >
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-gold" strokeWidth={1.6} />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#7A5A2E]">
                      {info.title}
                    </h3>
                    <p className="mt-1 font-body text-sm leading-relaxed text-[#9A7B4F]">
                      {info.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Telefon — tıklanabilir, hover'da yeşile döner */}
            <motion.a
              variants={item}
              href={`tel:+${site.phoneRaw}`}
              className="group flex items-start gap-4 rounded-xl border-l-4 border-gold bg-[#FEF3E2] p-6 transition-colors duration-500 hover:border-forest hover:bg-forest"
            >
              <Phone
                className="mt-0.5 h-6 w-6 shrink-0 text-gold transition-colors duration-500 group-hover:text-cream"
                strokeWidth={1.6}
              />
              <div>
                <h3 className="font-display text-xl font-semibold text-[#7A5A2E] transition-colors duration-500 group-hover:text-cream">
                  Rezervasyon
                </h3>
                <p className="mt-1 font-body text-sm leading-relaxed text-[#9A7B4F] transition-colors duration-500 group-hover:text-cream/80">
                  {site.phoneDisplay} — hemen arayın
                </p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
