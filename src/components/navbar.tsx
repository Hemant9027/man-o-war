"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import Logo from "./logo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => setOpen(false), [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "border-b border-navy/10 bg-ivory/95 shadow-[0_1px_30px_rgba(11,36,51,0.06)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div
          className={cn(
            "container-x flex items-center justify-between transition-all duration-500",
            scrolled ? "h-16" : "h-20 sm:h-24"
          )}
        >
          <Link
            href="/"
            aria-label={`${SITE.name} — home`}
            className={cn(
              "transition-colors duration-500",
              solid ? "text-navy" : "text-ivory"
            )}
          >
            <Logo compact={scrolled} markClassName={scrolled ? "size-8" : "size-10"} />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100",
                    solid
                      ? "text-charcoal/75 hover:text-navy after:bg-ocean"
                      : "text-ivory/85 hover:text-ivory after:bg-sand",
                    active && "after:scale-x-100",
                    active && (solid ? "text-navy" : "text-ivory")
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/book"
              className={cn(
                "group inline-flex h-11 items-center gap-2.5 px-6 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300",
                "bg-sand text-navy hover:bg-ivory",
                !solid && "shadow-[0_10px_30px_rgba(11,36,51,0.25)]"
              )}
            >
              Reserve Dockage
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </nav>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "flex size-11 items-center justify-center transition-colors lg:hidden",
              solid ? "text-navy" : "text-ivory"
            )}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col bg-navy lg:hidden"
          >
            <div className="container-x flex h-16 items-center justify-between text-ivory">
              <Logo compact markClassName="size-8" />
            </div>
            <nav
              aria-label="Mobile"
              className="container-x flex flex-1 flex-col justify-center gap-1"
            >
              {[...NAV_LINKS, { href: "/book", label: "Reserve Dockage" }].map(
                (link, i) => (
                  <motion.div
                    key={link.href}
                    initial={reduce ? undefined : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between border-b border-ivory/10 py-4 text-ivory"
                    >
                      <span className="font-display text-3xl font-medium tracking-wide">
                        {link.label}
                      </span>
                      <ArrowRight className="size-5 text-sand transition-transform duration-300 group-hover:translate-x-1.5" />
                    </Link>
                  </motion.div>
                )
              )}
            </nav>
            <motion.div
              initial={reduce ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="container-x pb-10"
            >
              <a
                href={SITE.marinaPhoneHref}
                className="flex items-center gap-3 text-sm text-ivory/80"
              >
                <Phone className="size-4 text-sand" />
                {SITE.marinaPhoneDisplay}
              </a>
              <p className="mt-3 text-xs uppercase tracking-[0.28em] text-ivory/45">
                {SITE.location}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
