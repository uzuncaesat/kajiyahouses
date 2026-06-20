"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { MapPin, Lock, Waves, Compass, Play } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const cards = [
  {
    icon: MapPin,
    title: "Sapanca'nın Kalbinde",
    detail:
      "Sapanca gölüne ve nefes kesen ormanlara yürüme mesafesinde, doğanın tam ortasında bir konum.",
  },
  {
    icon: Lock,
    title: "Tamamen Size Özel",
    detail:
      "Korunaklı bahçe ve özel havuz yalnızca sizin. Konaklamanız boyunca alanı hiç kimseyle paylaşmıyorsunuz.",
  },
  {
    icon: Waves,
    title: "Isıtmalı Özel Havuz",
    detail:
      "Kış olsun yaz olsun fark etmez; ısıtmalı havuzumuzda dört mevsim yüzme keyfi sizi bekliyor.",
  },
  {
    icon: Compass,
    title: "Merkezi Konumda Huzur",
    detail:
      "Her şeye yakın, ama dünyanın gürültüsünden uzak. Hem erişilebilir hem de derin bir sessizlik.",
  },
];

const stats = [
  { value: 6, suffix: "", label: "Kişi Kapasitesi" },
  { value: 2, suffix: "", label: "Yatak Odası" },
  { value: 4, suffix: "", label: "Mevsim Havuz" },
];

/* CountUp — ekrana girince tetiklenir */
function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: 1600, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) count.set(to);
  }, [inView, to, count]);

  useEffect(() => rounded.on("change", setDisplay), [rounded]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function DroneShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-ink text-cream">
      {/* Bölüm başlığı */}
      <div className="container-x pt-24 md:pt-32">
        <div className="max-w-2xl">
          <span className="eyebrow text-gold">Kuş Bakışı</span>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight md:text-6xl">
            Sapanca ormanının{" "}
            <em className="font-accent italic text-gold">tam ortasında.</em>
          </h2>
        </div>
      </div>

      {/* Split: sol kartlar / sağ sticky video */}
      <div className="container-x grid grid-cols-1 gap-12 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
        {/* Sol — scroll'a bağlı kartlar */}
        <div className="order-2 lg:order-1">
          <div className="flex flex-col gap-6">
            {cards.map((card, i) => {
              const Icon = card.icon;
              const isActive = active === i;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-45% 0px -45% 0px" }}
                  onViewportEnter={() => setActive(i)}
                  transition={{ duration: 0.7, ease }}
                  className={`relative rounded-2xl border p-7 pl-8 transition-all duration-500 md:p-9 md:pl-10 ${
                    isActive
                      ? "border-cream/15 bg-cream/[0.04]"
                      : "border-transparent bg-transparent opacity-50"
                  }`}
                >
                  {/* Aktif kart sol kenarında gold dikey çizgi */}
                  <motion.span
                    aria-hidden
                    className="absolute left-0 top-7 w-[3px] rounded-full bg-gold"
                    animate={{
                      height: isActive ? "calc(100% - 3.5rem)" : "0%",
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease }}
                  />

                  <div className="mb-5 flex items-center gap-4">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-500 ${
                        isActive ? "bg-gold/15" : "bg-cream/5"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 transition-colors duration-500 ${
                          isActive ? "text-gold" : "text-cream/40"
                        }`}
                        strokeWidth={1.5}
                      />
                    </span>
                    <span className="font-display text-sm tracking-widest text-cream/30">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl font-light text-cream md:text-4xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-md font-body text-base leading-relaxed text-[#A0A0A0]">
                    {card.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Sayaçlar */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-cream/10 pt-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl font-light text-cream md:text-6xl">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 font-body text-[0.6rem] uppercase tracking-widest text-[#A0A0A0]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sağ — sticky drone videosu */}
        <div className="order-1 lg:order-2">
          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-soft">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/feature-02.jpg"
                className="h-full w-full object-cover"
              >
                <source src="/videos/drone-showcase.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/20" />

              {/* Play rozeti */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-cream/20 bg-ink/30 px-4 py-2 backdrop-blur-md">
                <Play className="h-3 w-3 fill-gold text-gold" />
                <span className="font-body text-[0.6rem] uppercase tracking-widest text-cream/80">
                  Canlı Drone Görüntüsü
                </span>
              </div>

              {/* Aktif kart başlığı altta */}
              <div className="absolute bottom-5 left-5 right-5">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="rounded-2xl border border-cream/15 bg-ink/40 p-4 backdrop-blur-md"
                >
                  <span className="font-accent text-lg italic text-gold">
                    {cards[active].title}
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 md:h-24" />
    </section>
  );
}
