"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Only the home page has a dark hero behind the navbar; light pages need a solid bar.
  const solid = scrolled || open || pathname !== "/";
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 md:px-5 ${
          solid
            ? "border-white/10 bg-brand-950/90 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]"
            : "border-white/5 bg-brand-950/40"
        }`}
      >
        <Logo className="text-white" />

        <nav className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "text-white"
                    : "text-ink-300 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contato"
            className="group inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold whitespace-nowrap text-brand-950 transition-all duration-200 hover:bg-accent-400 hover:text-white"
          >
            Fale conosco
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-brand-950/95 p-3 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-ink-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contato"
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-4 py-3 text-sm font-semibold text-brand-950"
              >
                Fale conosco
                <ArrowUpRight size={16} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
