import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services-data";
import { ServiceIconGlyph } from "./service-icon";
import { DuotoneImage } from "./duotone-image";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicos#${service.id}`}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_24px_60px_-24px_rgba(15,23,42,0.25)]"
    >
      <DuotoneImage
        src={service.image.src}
        alt={service.image.alt}
        sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
        className="h-40"
      />
      <div className="relative flex flex-1 flex-col gap-4 px-7 pt-9 pb-7">
        <div className="absolute -top-6 left-7 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-cyan-400 text-white shadow-[0_10px_30px_-10px_rgba(91,108,240,0.8)] ring-4 ring-white">
          <ServiceIconGlyph icon={service.icon} size={20} />
        </div>
        <h3 className="font-display text-lg font-semibold text-ink-900">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-ink-500">
          {service.shortDescription}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-accent-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Saiba mais
          <ArrowUpRight size={15} />
        </span>
      </div>
    </Link>
  );
}
