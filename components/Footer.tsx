import Link from "next/link";
import { Phone, MapPin, Clock, Instagram, ArrowUpRight } from "lucide-react";
import { site, navLinks } from "@/lib/site";
import { Logo } from "@/components/Logo";

// Lucide'de marka ikonu olmadığı için WhatsApp ikonu inline SVG
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

export default function Footer() {
  const whatsappHref = `https://wa.me/${site.phoneRaw}`;

  return (
    <footer className="relative bg-ink text-cream">
      {/* Marquee strip */}
      <div className="overflow-hidden border-b border-cream/10 py-6">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex items-center gap-8">
              {[
                "Özel Havuz",
                "Doğayla İç İçe",
                "Müstakil Bahçe",
                "Sapanca",
                "Şömine & Mangal",
                "Huzur",
              ].map((word) => (
                <span
                  key={`${dup}-${word}`}
                  className="flex items-center gap-8 font-display text-3xl font-light text-cream/50"
                >
                  {word}
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container-x grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <Logo className="h-28 w-auto" />
          <p className="mt-6 max-w-xs font-body text-sm leading-relaxed text-cream/60">
            Doğayla iç içe, özel havuzlu müstakil bungalov. Aileler, kız grupları
            ve erkek grupları için huzurlu bir kaçış.
          </p>

          {/* Sosyal medya */}
          <div className="mt-7 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors duration-500 hover:border-gold hover:bg-gold hover:text-ink"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors duration-500 hover:border-gold hover:bg-gold hover:text-ink"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Hızlı linkler */}
        <div>
          <h4 className="font-body text-xs uppercase tracking-widest text-cream/40">
            Hızlı Linkler
          </h4>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline font-display text-xl font-light text-cream/85 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h4 className="font-body text-xs uppercase tracking-widest text-cream/40">
            İletişim
          </h4>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                href={`tel:+${site.phoneRaw}`}
                className="group flex items-center gap-3 font-body text-cream/85 hover:text-gold"
              >
                <Phone className="h-4 w-4 text-gold" />
                {site.phoneDisplay}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </li>
            <li className="flex items-start gap-3 font-body text-cream/85">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                Check-in: {site.checkIn}
                <br />
                Check-out: {site.checkOut}
              </span>
            </li>
            <li className="flex items-center gap-3 font-body text-cream/85">
              <MapPin className="h-4 w-4 text-gold" />
              {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center md:flex-row md:text-left">
          <p className="font-body text-xs text-cream/40">
            © 2025 Kajiya Houses Sapanca · Tüm Hakları Saklıdır
          </p>
          <p className="font-accent text-sm italic text-cream/40">
            Doğanın içinde, size özel.
          </p>
        </div>
      </div>
    </footer>
  );
}
