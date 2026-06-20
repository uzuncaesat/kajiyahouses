import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galeri",
  description: `${site.name} fotoğraf ve video galerisi — iç mekan, havuz, bahçe ve drone görüntüleri.`,
};

export default function GaleriPage() {
  return (
    <main className="grain">
      <Navbar />

      {/* Header band */}
      <header className="relative flex min-h-[60vh] items-end overflow-hidden bg-ink">
        <Image
          src="/images/garden.jpg"
          alt="Kajiya Houses bahçe ve havuz"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
        <div className="container-x relative z-10 pb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="font-body text-xs uppercase tracking-brand text-gold">
              Galeri
            </span>
          </div>
          <h1 className="font-display text-5xl font-light leading-none text-cream md:text-8xl">
            Her köşe, <em className="font-accent italic text-gold">bir hikaye.</em>
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-cream/75">
            Isıtmalı özel havuzdan korunaklı bahçeye, sıcacık iç mekanlardan kuş
            bakışı drone görüntülerine — Kajiya Houses&apos;ı kategorilere göre
            keşfedin.
          </p>
        </div>
      </header>

      <Gallery />
      <BookingCTA />
      <Footer />
    </main>
  );
}
