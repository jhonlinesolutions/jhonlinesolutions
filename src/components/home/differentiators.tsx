import { Section, Container } from "@/components/section";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const items = [
  {
    number: "01",
    title: "Entrega incremental",
    description:
      "Você vê valor em semanas, não em meses. Dividimos projetos em ciclos curtos com entregas visíveis desde o início.",
  },
  {
    number: "02",
    title: "Engenheiros seniores no projeto",
    description:
      "Sem camadas de intermediação: você fala diretamente com quem está construindo a solução.",
  },
  {
    number: "03",
    title: "Transparência total",
    description:
      "Escopo, prazo e custo definidos com clareza desde a proposta — sem letras miúdas ou surpresas na fatura.",
  },
  {
    number: "04",
    title: "Parceria de longo prazo",
    description:
      "Nosso trabalho não termina no go-live. Seguimos ao seu lado na sustentação e evolução do sistema.",
  },
];

export function Differentiators() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Por que a JH Online Solutions</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              Engenharia séria, sem burocracia
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {items.map((item) => (
            <RevealItem key={item.number} className="flex gap-5">
              <span className="font-display text-2xl font-semibold text-brand-100">
                {item.number}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {item.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
