import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Container } from "@/components/section";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/services-data";

export function ServicesPreview() {
  const featured = services.slice(0, 4);

  return (
    <Section className="bg-brand-50/60">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>O que fazemos</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
                Soluções de ponta a ponta em tecnologia
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/servicos"
              className="group inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-accent-600"
            >
              Ver todos os serviços
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service) => (
            <RevealItem key={service.id}>
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
