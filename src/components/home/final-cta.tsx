import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/section";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24 text-white md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent-500/20 to-cyan-500/10 blur-[120px]"
      />
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <h2 className="font-display text-balance max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            Pronto para modernizar a tecnologia da sua empresa?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-lg text-lg text-ink-300">
            Fale com nossa equipe e receba um diagnóstico inicial sem
            compromisso.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <Link
            href="/contato"
            className="group mt-9 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand-950 transition-all duration-200 hover:bg-accent-400 hover:text-white"
          >
            Solicitar orçamento
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
