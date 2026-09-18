"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { MARINA, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { EASE } from "./motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.35 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

function HeroImage({
  src,
  alt,
  priority = true,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-0"
      >
        <motion.div
          className="absolute inset-0"
          initial={reduce ? undefined : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            quality={82}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
      {/* cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/35 to-navy/75" />
    </div>
  );
}

/** Full-screen cinematic homepage hero */
export function HomeHero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-navy text-ivory">
      <HeroImage
        src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=2200&q=85"
        alt="Aerial view of boats resting on turquoise water beside Man-O-War Cay"
      />

      <div className="container-x relative pb-14 pt-40 sm:pb-20">
        <motion.div
          variants={reduce ? undefined : container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.p
            variants={reduce ? undefined : item}
            className="eyebrow text-sand"
          >
            {SITE.island}, {SITE.region} — The Bahamas
          </motion.p>
          <motion.h1
            variants={reduce ? undefined : item}
            className="mt-6 font-display text-[2.9rem] font-medium leading-[1.02] tracking-[0.005em] sm:text-7xl lg:text-[5.6rem]"
          >
            Your Gateway to
            <br />
            <em className="font-normal italic text-sand">Man-O-War Cay</em>
          </motion.h1>
          <motion.p
            variants={reduce ? undefined : item}
            className="mt-7 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg"
          >
            Dock, dine, refuel and experience island life from the heart of
            Man-O-War Cay.
          </motion.p>
          <motion.div
            variants={reduce ? undefined : item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/book"
              className="group inline-flex h-13 items-center gap-3 bg-sand px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-colors duration-300 hover:bg-ivory"
            >
              Reserve Dockage
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex h-13 items-center gap-3 border border-ivory/45 px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-ivory hover:text-navy"
            >
              Explore Services
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Key facts */}
        <motion.dl
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1, ease: EASE }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ivory/20 pt-8 sm:mt-20 lg:grid-cols-4"
        >
          {[
            { value: `${MARINA.slips}`, label: "Marina Slips" },
            { value: `Up to ${MARINA.maxLengthFt} ft`, label: "Vessel Length" },
            { value: `${MARINA.maxDraftFt} ft`, label: "Draft Capacity" },
            { value: "Abaco", label: "Man-O-War Cay, Bahamas" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="order-2 mt-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-ivory/55">
                {stat.label}
              </dt>
              <dd className="order-1 -mb-2 font-display text-2xl font-medium text-ivory sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <ChevronDown className="size-5 animate-bounce text-ivory/60" />
      </motion.div>
    </section>
  );
}

/** Reusable page hero for interior routes */
export function PageHero({
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  children,
  tall = false,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
  tall?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden bg-navy text-ivory",
        tall ? "min-h-[82svh]" : "min-h-[62svh] sm:min-h-[68svh]",
      )}
    >
      <HeroImage src={image} alt={alt} />
      <div className="container-x relative pb-16 pt-44 sm:pb-20">
        <motion.div
          variants={reduce ? undefined : container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={reduce ? undefined : item}
            className="eyebrow text-sand"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            variants={reduce ? undefined : item}
            className="mt-5 font-display text-5xl font-medium leading-[1.04] sm:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={reduce ? undefined : item}
              className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div
              variants={reduce ? undefined : item}
              className="mt-9 flex flex-wrap gap-4"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
