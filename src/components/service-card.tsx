import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type ServiceCardData = {
  href: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export default function ServiceCard({ service }: { service: ServiceCardData }) {
  return (
    <Link
      href={service.href}
      className="group flex h-full flex-col border border-navy/10 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-navy/20 hover:shadow-[0_24px_60px_-24px_rgba(11,36,51,0.28)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/15" />
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <p className="eyebrow text-ocean">{service.label}</p>
        <h3 className="mt-3 font-display text-[1.7rem] font-medium leading-tight text-navy">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65">
          {service.description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-navy">
          Discover
          <ArrowRight className="size-3.5 text-ocean transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}
