import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services-data";
import { ServiceIconGlyph } from "./service-icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicos#${service.id}`}
      className="group flex cursor-pointer flex-col gap-4 rounded-2xl border border-brand-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_24px_60px_-24px_rgba(15,23,42,0.25)]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-cyan-400 text-white">
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
    </Link>
  );
}
