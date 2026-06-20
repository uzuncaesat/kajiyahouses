"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BookingCTA() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "2",
    message: "",
  });

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const update = (k: keyof typeof form, v: string) =>
    setForm((p) => ({ ...p, [k]: v }));

  const whatsappHref = useMemo(() => {
    const lines = [
      `Merhaba, ${site.name} için rezervasyon talebim:`,
      ``,
      `İsim: ${form.name || "-"}`,
      `Telefon: ${form.phone || "-"}`,
      `Giriş: ${form.checkin || "-"}`,
      `Çıkış: ${form.checkout || "-"}`,
      `Kişi Sayısı: ${form.guests}`,
      form.message ? `Mesaj: ${form.message}` : "",
    ].filter(Boolean);
    return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  }, [form]);

  const fieldClass =
    "w-full rounded-xl border border-cream/20 bg-cream/10 px-4 py-3.5 font-body text-cream outline-none transition-colors duration-300 placeholder:text-cream/40 focus:border-gold focus:bg-cream/15 [color-scheme:dark]";
  const labelClass =
    "mb-2 block font-body text-xs font-medium uppercase tracking-widest text-cream/70";

  return (
    <section id="rezervasyon" className="relative overflow-hidden bg-ink py-24 text-cream md:py-32">
      {/* Arka plan görseli + koyu overlay */}
      <Image
        src="/images/cta-bg.jpg"
        alt="Kajiya Houses özel havuz"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/60" />

      <div className="container-x relative z-10 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Sol — metin */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col justify-center"
        >
          <span className="eyebrow text-gold">Rezervasyon</span>
          <h2 className="mt-5 max-w-lg font-display text-4xl font-light leading-[1.05] md:text-6xl">
            Sapanca&apos;da Unutulmaz Bir Tatil{" "}
            <em className="font-accent italic text-gold">Sizi Bekliyor</em>
          </h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-cream/75">
            Tarihlerinizi seçin, talebinizi gönderin; müsaitlik durumunu en kısa
            sürede teyit edelim. Dilerseniz doğrudan telefonla da ulaşabilirsiniz.
          </p>
          <a
            href={`tel:+${site.phoneRaw}`}
            className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-cream/30 px-6 py-3.5 font-body text-sm uppercase tracking-widest text-cream transition-all duration-500 hover:border-cream hover:bg-cream/10"
          >
            <Phone className="h-4 w-4 text-gold" />
            {site.phoneDisplay}
          </a>
        </motion.div>

        {/* Sağ — form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          onSubmit={(e) => e.preventDefault()}
          className="rounded-3xl border border-cream/15 bg-ink/40 p-7 backdrop-blur-md md:p-9"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="cta-name">
                Ad Soyad
              </label>
              <input
                id="cta-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Adınız ve soyadınız"
                className={fieldClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="cta-phone">
                Telefon
              </label>
              <input
                id="cta-phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="05XX XXX XX XX"
                className={fieldClass}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="cta-checkin">
                Giriş Tarihi
              </label>
              <input
                id="cta-checkin"
                type="date"
                min={today}
                value={form.checkin}
                onChange={(e) => update("checkin", e.target.value)}
                className={fieldClass}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="cta-checkout">
                Çıkış Tarihi
              </label>
              <input
                id="cta-checkout"
                type="date"
                min={form.checkin || today}
                value={form.checkout}
                onChange={(e) => update("checkout", e.target.value)}
                className={fieldClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="cta-guests">
                Kişi Sayısı
              </label>
              <select
                id="cta-guests"
                value={form.guests}
                onChange={(e) => update("guests", e.target.value)}
                className={fieldClass}
              >
                {Array.from({ length: site.capacity }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n} className="bg-ink">
                    {n} Kişi
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="cta-message">
                Mesaj
              </label>
              <textarea
                id="cta-message"
                rows={3}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Eklemek istedikleriniz..."
                className={`${fieldClass} resize-none`}
              />
            </div>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-ink transition-all duration-500 hover:bg-cream"
          >
            Rezervasyon Talebi Gönder
            <Send className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-center font-body text-xs text-cream/50">
            Talebiniz WhatsApp üzerinden iletilir · Onay için %50 kapora alınır
          </p>
        </motion.form>
      </div>
    </section>
  );
}
