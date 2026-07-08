import { Section, Container } from "@/components/section";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const steps = [
  {
    title: "Diagnóstico",
    description:
      "Entendemos seu contexto técnico e de negócio, mapeamos riscos e oportunidades.",
  },
  {
    title: "Arquitetura & Plano",
    description:
      "Desenhamos a solução e um roadmap com prioridades claras e critérios de sucesso.",
  },
  {
    title: "Implementação",
    description:
      "Construímos em ciclos curtos, com entregas frequentes e visibilidade total do progresso.",
  },
  {
    title: "Suporte Contínuo",
    description:
      "Monitoramos, evoluímos e damos suporte com SLA definido — sem deixar o sistema órfão.",
  },
];

export function Process() {
  return (
    <Section dark>
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow dark>Metodologia</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Como trabalhamos
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <RevealItem key={step.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-cyan-400 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                {index < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-white/10 md:block" />
                )}
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {step.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
