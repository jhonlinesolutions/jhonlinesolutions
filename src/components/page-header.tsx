import type { ReactNode } from "react";
import { Section, Container } from "@/components/section";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal } from "@/components/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <Section className="pt-36 pb-16 md:pt-44">
      <Container>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-balance mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-500">
              {description}
            </p>
          </Reveal>
        )}
        {children}
      </Container>
    </Section>
  );
}
