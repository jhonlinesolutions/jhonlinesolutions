import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Section, Container } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a equipe da JH Online Solutions e receba um diagnóstico inicial sem compromisso para o seu projeto de tecnologia.",
};

const contactItems = [
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Telefone",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Conversar agora",
    href: siteConfig.whatsapp,
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: `${siteConfig.address.street}, ${siteConfig.address.city}/${siteConfig.address.state}`,
    href: undefined,
  },
];

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Vamos conversar sobre o seu projeto"
        description="Preencha o formulário com alguns detalhes e nossa equipe retorna com um diagnóstico inicial em até 1 dia útil."
      />

      <Section className="pt-0 pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px]">
            <Reveal>
              <div className="rounded-3xl border border-brand-100 bg-white p-7 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.15)] md:p-10">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-brand-950 p-8 text-white">
                <h2 className="font-display text-lg font-semibold">
                  Outros canais
                </h2>
                <ul className="mt-6 space-y-5">
                  {contactItems.map((item) => (
                    <li key={item.label} className="flex items-start gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-400">
                        <item.icon size={18} />
                      </span>
                      <div>
                        <p className="text-xs font-medium tracking-wide text-ink-300 uppercase">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-sm font-medium text-white transition-colors duration-200 hover:text-accent-400"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-white">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm leading-relaxed text-ink-300">
                    Atendimento de segunda a sexta, das 9h às 18h (horário de
                    Brasília).
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
