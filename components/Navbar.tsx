"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { site, navLinks } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/85 py-3 shadow-[0_8px_30px_-20px_rgba(26,26,26,0.4)] backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="container-x flex items-center justify-between">
          <Link href="/" className="group flex flex-col leading-none">
            <span
              className={`font-display text-2xl font-semibold tracking-wide transition-colors duration-500 ${
                scrolled ? "text-forest" : "text-cream"
              }`}
            >
              Kajiya Houses
            </span>
            <span
              className={`mt-0.5 font-body text-[0.6rem] uppercase tracking-brand transition-colors duration-500 ${
                scrolled ? "text-gold" : "text-cream/70"
              }`}
            >
              Sapanca
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`link-underline font-body text-sm uppercase tracking-widest transition-colors duration-500 ${
                    scrolled ? "text-text" : "text-cream"
                  } ${active ? "opacity-100" : "opacity-75 hover:opacity-100"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={`tel:+${site.phoneRaw}`}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-body text-xs uppercase tracking-widest transition-all duration-500 ${
                scrolled
                  ? "border-forest/30 text-forest hover:bg-forest hover:text-cream"
                  : "border-cream/40 text-cream hover:bg-cream hover:text-forest"
              }`}
            >
              <Phone className="h-3.5 w-3.5" />
              {site.phoneDisplay}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Menüyü aç"
            className={`md:hidden ${scrolled ? "text-forest" : "text-cream"}`}
          >
            <Menu className="h-7 w-7" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex flex-col bg-forest text-cream md:hidden"
          >
            <div className="container-x flex items-center justify-between py-6">
              <span className="font-display text-2xl font-semibold">
                Kajiya Houses
              </span>
              <button onClick={() => setOpen(false)} aria-label="Menüyü kapat">
                <X className="h-7 w-7" />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="block border-b border-cream/15 py-5 font-display text-4xl font-light"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="container-x pb-12">
              <a
                href={`tel:+${site.phoneRaw}`}
                className="inline-flex items-center gap-3 font-body text-lg tracking-wide text-gold"
              >
                <Phone className="h-5 w-5" />
                {site.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
