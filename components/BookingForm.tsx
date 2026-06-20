"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "2",
    group: "Aile",
    note: "",
  });

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const update = (key: keyof typeof form, value: string) =>
    setForm((p) => ({ ...p, [key]: value }));

  const whatsappHref = useMemo(() => {
    const lines = [
      `Merhaba, ${site.name} için rezervasyon talebim:`,
      ``,
      `İsim: ${form.name || "-"}`,
      `Telefon: ${form.phone || "-"}`,
      `Giriş: ${form.checkin || "-"}`,
      `Çıkış: ${form.checkout || "-"}`,
      `Kişi Sayısı: ${form.guests}`,
      `Grup: ${form.group}`,
      form.note ? `Not: ${form.note}` : "",
    ].filter(Boolean);
    return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  }, [form]);

  const fieldClass =
    "w-full rounded-xl border border-divider bg-cream/60 px-4 py-3.5 font-body text-text outline-none transition-colors duration-300 placeholder:text-muted/60 focus:border-forest focus:bg-white";
  const labelClass =
    "mb-2 block font-body text-xs font-medium uppercase tracking-widest text-forest";

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease }}
      onSubmit={(e) => e.preventDefault()}
      className="rounded-3xl border border-divider bg-white/50 p-7 shadow-card backdrop-blur-sm md:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="name">
            Ad Soyad
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Adınız ve soyadınız"
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="phone">
            Telefon
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="05XX XXX XX XX"
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="checkin">
            Giriş Tarihi
          </label>
          <input
            id="checkin"
            type="date"
            min={today}
            value={form.checkin}
            onChange={(e) => update("checkin", e.target.value)}
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="checkout">
            Çıkış Tarihi
          </label>
          <input
            id="checkout"
            type="date"
            min={form.checkin || today}
            value={form.checkout}
            onChange={(e) => update("checkout", e.target.value)}
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="guests">
            Kişi Sayısı
          </label>
          <select
            id="guests"
            value={form.guests}
            onChange={(e) => update("guests", e.target.value)}
            className={fieldClass}
          >
            {Array.from({ length: site.capacity }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} Kişi
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="group">
            Grup Türü
          </label>
          <select
            id="group"
            value={form.group}
            onChange={(e) => update("group", e.target.value)}
            className={fieldClass}
          >
            <option value="Aile">Aile</option>
            <option value="Kız Grubu">Kız Grubu</option>
            <option value="Erkek Grubu">Erkek Grubu</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="note">
            Notunuz (opsiyonel)
          </label>
          <textarea
            id="note"
            rows={4}
            value={form.note}
            onChange={(e) => update("note", e.target.value)}
            placeholder="Eklemek istedikleriniz..."
            className={`${fieldClass} resize-none`}
          />
        </div>
      </div>

      {/* Reminders */}
      <ul className="mt-6 space-y-2">
        {[
          "Rezervasyonlar minimum 2 gecedir.",
          "Onay için %50 kapora alınır.",
          "Sadece aile, kız ve erkek grupları kabul edilir.",
        ].map((r) => (
          <li
            key={r}
            className="flex items-center gap-2 font-body text-sm text-muted"
          >
            <Check className="h-4 w-4 shrink-0 text-gold" />
            {r}
          </li>
        ))}
      </ul>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-forest px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-cream transition-all duration-500 hover:bg-ink hover:shadow-soft"
      >
        WhatsApp ile Gönder
        <Send className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
      </a>
      <p className="mt-4 text-center font-body text-xs text-muted">
        Form, talebinizi WhatsApp üzerinden bize iletir. Telefonla da
        ulaşabilirsiniz: {site.phoneDisplay}
      </p>
    </motion.form>
  );
}
