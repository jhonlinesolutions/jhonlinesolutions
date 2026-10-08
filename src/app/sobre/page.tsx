import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Code2, ShieldCheck, Target, RefreshCw } from "lucide-react";
import { Section, Container } from "@/components/section";
import { Eyebrow } from "@/components/eyebrow";
import { PageHeader } from "@/components/page-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = pageMetadata({
  title: "Sobre",
  description:
    "Conheça a JH Online Solutions: consultoria em tecnologia e engenharia de software focada em resultado, transparência e parceria de longo prazo.",
  path: "/sobre",
});

const values = [
  {
    icon: Code2,
    title: "Excelência técnica",
    description:
      "Preferimos fazer bem feito a fazer rápido e errado. Código limpo e decisões de arquitetura sólidas evitam retrabalho caro depois.",
  },
  {
    icon: ShieldCheck,
    title: "Transparência radical",
    description:
      "Comunicação direta, sem jargão para impressionar. Você sabe exatamente o que está sendo feito, por quê, e quanto custa.",
  },
  {
    icon: Target,
    title: "Compromisso com resultado",
    description:
      "Toda decisão técnica é avaliada pelo impacto no negócio — não pela tecnologia mais nova ou mais interessante do momento.",
  },
  {
    icon: RefreshCw,
    title: "Aprendizado contínuo",
    description:
      "Tecnologia muda rápido. Nosso time se atualiza constantemente para trazer as melhores soluções, não apenas as mais conhecidas.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre nós"
        title="Parceiros de tecnologia, não apenas fornecedores"
        description="A JH Online Solutions nasceu para ajudar empresas a tomar decisões melhores sobre tecnologia — com engenharia séria, comunicação direta e comprometimento real com resultado."
      />

      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Como pensamos</Eyebrow>
              <h2 className="font-display mt-5 text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
                Tecnologia é meio, não fim
              </h2>
              <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-ink-700">
                <p>
                  Vemos muitas empresas investindo em tecnologia sem clareza
                  sobre o problema que estão resolvendo. O resultado é
                  previsível: projetos caros, prazos que se arrastam e
                  sistemas que ninguém entende direito seis meses depois.
                </p>
                <p>
                  Trabalhamos de forma diferente. Cada projeto começa com uma
                  pergunta simples — qual resultado de negócio essa tecnologia
                  precisa entregar? — e só então desenhamos a solução técnica.
                  Isso significa arquiteturas mais simples, entregas mais
                  rápidas e sistemas que o seu time realmente consegue manter.
                </p>
                <p>
                  Atuamos como uma extensão do seu time: próximos o
                  suficiente para entender o contexto do negócio, e técnicos
                  o suficiente para tomar as decisões certas de engenharia.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl bg-brand-950 p-10 text-white">
                <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
                <div
                  aria-hidden
                  className="animate-float pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-full bg-accent-500/30 blur-[90px]"
                />
                <div className="relative space-y-8">
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-accent-400 uppercase">
                      Missão
                    </p>
                    <p className="mt-2 text-lg leading-relaxed">
                      Tornar tecnologia de qualidade acessível para empresas
                      que não têm — e não precisam ter — um departamento de
                      TI gigante.
                    </p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-accent-400 uppercase">
                      Visão
                    </p>
                    <p className="mt-2 text-lg leading-relaxed">
                      Ser reconhecida como a parceira de tecnologia mais
                      confiável para empresas em crescimento no Brasil.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section dark>
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow dark>Nossos valores</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                O que guia cada projeto
              </h2>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <RevealItem
                key={value.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-cyan-400 text-white">
                  <value.icon size={20} />
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {value.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
