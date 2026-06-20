import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { site } from "@/lib/site";
import { Phone, MapPin, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Rezervasyon",
  description: `${site.name} rezervasyon talebi — özel havuzlu bungalovda yerinizi ayırtın.`,
};

export default function RezervasyonPage() {
  return (
    <main className="grain">
      <Navbar />

      {/* Header band */}
      <header className="relative flex min-h-[50vh] items-end overflow-hidden bg-ink">
        <Image
          src="/images/feature-01.jpg"
          alt="Kajiya Houses özel havuz"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
        <div className="container-x relative z-10 pb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="font-body text-xs uppercase tracking-brand text-gold">
              Rezervasyon
            </span>
          </div>
          <h1 className="font-display text-5xl font-light leading-none text-cream md:text-8xl">
            Yerinizi <em className="font-accent italic text-gold">ayırtın.</em>
          </h1>
        </div>
      </header>

      {/* Body */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Info column */}
          <div className="lg:pt-4">
            <span className="eyebrow">Bize Ulaşın</span>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-forest md:text-5xl">
              Doğadaki kaçışınız <br />
              <em className="font-accent italic text-gold">bir adım ötede.</em>
            </h2>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-muted">
              Aşağıdaki formu doldurarak rezervasyon talebinizi WhatsApp
              üzerinden iletebilir veya doğrudan telefonla bize
              ulaşabilirsiniz. Müsaitlik durumunu en kısa sürede teyit ederiz.
            </p>

            <div className="mt-10 space-y-px overflow-hidden rounded-2xl border border-divider">
              {[
                {
                  icon: Phone,
                  label: "Telefon",
                  value: site.phoneDisplay,
                  href: `tel:+${site.phoneRaw}`,
                },
                { icon: MapPin, label: "Konum", value: site.location },
                {
                  icon: Clock,
                  label: "Giriş / Çıkış",
                  value: `${site.checkIn} — ${site.checkOut}`,
                },
                {
                  icon: Users,
                  label: "Kapasite",
                  value: `${site.capacity} Kişi · Min. 2 Gece`,
                },
              ].map((d) => {
                const Icon = d.icon;
                const content = (
                  <div className="flex items-center gap-4 bg-white/40 p-5 transition-colors duration-300 hover:bg-white/70">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
                    <div>
                      <div className="font-body text-[0.65rem] uppercase tracking-widest text-muted">
                        {d.label}
                      </div>
                      <div className="font-display text-xl font-medium text-forest">
                        {d.value}
                      </div>
                    </div>
                  </div>
                );
                return d.href ? (
                  <a key={d.label} href={d.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={d.label}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* Form column */}
          <BookingForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
