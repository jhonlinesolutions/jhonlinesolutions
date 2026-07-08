import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { Container } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { TechMarquee } from "./tech-marquee";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 pt-36 pb-20 text-white md:pt-48 md:pb-28">
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent-500/25 blur-[100px]"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute top-40 -right-24 h-[26rem] w-[26rem] rounded-full bg-cyan-500/20 blur-[110px]"
        style={{ animationDelay: "-3.5s" }}
      />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />

      <Container className="flex flex-col items-start">
        <Reveal>
          <Eyebrow dark>
            <Sparkles size={12} className="text-accent-400" />
            Consultoria & Engenharia de Software
          </Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="font-display text-balance mt-7 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Tecnologia que move o seu{" "}
            <span className="bg-gradient-to-r from-accent-400 to-cyan-400 bg-clip-text text-transparent">
              negócio adiante
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
            Somos parceiros de tecnologia para empresas que precisam de
            software sob medida, infraestrutura em nuvem confiável e
            segurança de verdade — sem enrolação e com prazos que a gente
            cumpre.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contato"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-950 transition-all duration-200 hover:bg-accent-400 hover:text-white"
            >
              Solicitar orçamento
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href="/servicos"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/10"
            >
              Conhecer serviços
            </Link>
          </div>
        </Reveal>
      </Container>

      <div className="mt-20">
        <TechMarquee />
      </div>
    </section>
  );
}
