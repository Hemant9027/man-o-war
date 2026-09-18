"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Stagger, StaggerItem } from "./motion";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export default function Gallery({
  images,
  className,
  cols = 3,
}: {
  images: GalleryImage[];
  className?: string;
  cols?: 2 | 3 | 4;
}) {
  const [active, setActive] = React.useState<number | null>(null);
  const reduce = useReducedMotion();

  const close = React.useCallback(() => setActive(null), []);
  const step = React.useCallback(
    (dir: 1 | -1) =>
      setActive((i) =>
        i === null ? i : (i + dir + images.length) % images.length
      ),
    [images.length]
  );

  React.useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  return (
    <>
      <Stagger
        className={cn(
          "grid gap-4 sm:gap-5",
          cols === 2 && "grid-cols-1 sm:grid-cols-2",
          cols === 3 && "grid-cols-2 lg:grid-cols-3",
          cols === 4 && "grid-cols-2 lg:grid-cols-4",
          className
        )}
      >
        {images.map((img, i) => (
          <StaggerItem key={img.src}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open image: ${img.alt}`}
              className={cn(
                "group relative block w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean",
                i % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
              />
              <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-navy/55 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {img.caption && (
                  <span className="text-left text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory">
                    {img.caption}
                  </span>
                )}
                <Expand className="size-4 text-ivory" aria-hidden />
              </span>
            </button>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/95 p-4 backdrop-blur-sm sm:p-10"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 z-10 flex size-11 items-center justify-center border border-ivory/25 text-ivory transition-colors hover:bg-ivory hover:text-navy"
            >
              <X className="size-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center border border-ivory/25 text-ivory transition-colors hover:bg-ivory hover:text-navy sm:left-6"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center border border-ivory/25 text-ivory transition-colors hover:bg-ivory hover:text-navy sm:right-6"
            >
              <ChevronRight className="size-5" />
            </button>
            <motion.figure
              key={active}
              initial={reduce ? undefined : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative max-h-full w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                <Image
                  src={images[active].src}
                  alt={images[active].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  quality={90}
                />
              </div>
              <figcaption className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory/60">
                {images[active].caption ?? images[active].alt}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
