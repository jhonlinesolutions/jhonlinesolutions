import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { Section, Container } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ServiceIconGlyph } from "@/components/service-icon";
import { DuotoneImage } from "@/components/duotone-image";
import { services } from "@/lib/services-data";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Desenvolvimento de software, cloud & DevOps, consultoria em TI, segurança da informação, automação e IA, suporte e sustentação.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Serviços"
        title="Soluções de ponta a ponta em tecnologia"
        description="Do diagnóstico à sustentação em produção: cobrimos todo o ciclo de vida da tecnologia que sustenta o seu negócio."
      />

      <Section className="pt-0">
        <Container>
          <div className="divide-y divide-brand-100 border-t border-brand-100">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 py-14 first:pt-0 md:py-16"
              >
                <Reveal>
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-cyan-400 text-white">
                        <ServiceIconGlyph icon={service.icon} size={22} />
                      </div>
                      <span className="mt-4 block font-display text-sm font-semibold text-ink-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-ink-900">
                        {service.title}
                      </h2>
                      <div className="group mt-6">
                        <DuotoneImage
                          src={service.image.src}
                          alt={service.image.alt}
                          sizes="(min-width: 1024px) 280px, 100vw"
                          className="aspect-[4/3] rounded-2xl"
                        />
                      </div>
                    </div>

                    <div>
                      <p className="max-w-2xl text-lg leading-relaxed text-ink-700">
                        {service.description}
                      </p>
                      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {service.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2.5 text-sm text-ink-700"
                          >
                            <CheckCircle2
                              size={18}
                              className="mt-0.5 shrink-0 text-accent-500"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contato"
                        className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600"
                      >
                        Falar sobre {service.title.toLowerCase()}
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
