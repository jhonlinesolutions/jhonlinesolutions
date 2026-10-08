import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { siteConfig } from "@/lib/site-config";

const columns = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre nós", href: "/sobre" },
      { label: "Serviços", href: "/servicos" },
      { label: "Blog", href: "/blog" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Desenvolvimento de software", href: "/servicos#desenvolvimento" },
      { label: "Cloud & DevOps", href: "/servicos#cloud" },
      { label: "Consultoria em TI", href: "/servicos#consultoria" },
      { label: "Segurança da informação", href: "/servicos#seguranca" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-brand-950 text-ink-300">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="container-px relative mx-auto max-w-6xl py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo className="text-white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
              {siteConfig.description}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-300 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s|\(|\)|-/g, "")}`}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="leading-relaxed">
                {siteConfig.address.street}, {siteConfig.address.complement}
                <br />
                {siteConfig.address.city}/{siteConfig.address.state}
                {siteConfig.address.zip && ` — ${siteConfig.address.zip}`}
              </li>
            </ul>
            <Link
              href="/contato"
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white"
            >
              Solicitar orçamento
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-ink-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.legalName}. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            <Link href="/politica-de-privacidade" className="hover:text-ink-300">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="hover:text-ink-300">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
