import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services-data";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

// Plain-markdown summary of the site for LLM crawlers (https://llmstxt.org).
export function GET() {
  const { address } = siteConfig;
  const lines = [
    `# ${siteConfig.legalName}`,
    "",
    `> ${siteConfig.description}`,
    "",
    `${siteConfig.name} é uma empresa brasileira de consultoria em tecnologia sediada em ${address.city}/${address.state}, que atende empresas em todo o Brasil.`,
    "",
    "## Contato",
    "",
    `- E-mail: ${siteConfig.email}`,
    `- Telefone/WhatsApp: ${siteConfig.phoneDisplay}`,
    `- Endereço: ${address.street}, ${address.complement} — ${address.city}/${address.state}, CEP ${address.zip}`,
    `- Formulário: ${siteConfig.url}/contato`,
    "",
    "## Serviços",
    "",
    ...services.map(
      (s) => `- [${s.title}](${siteConfig.url}/servicos#${s.id}): ${s.shortDescription}`
    ),
    "",
    "## Blog",
    "",
    ...getAllPosts().map(
      (p) => `- [${p.title}](${siteConfig.url}/blog/${p.slug}): ${p.description}`
    ),
    "",
    "## Institucional",
    "",
    `- [Sobre](${siteConfig.url}/sobre)`,
    `- [Política de Privacidade](${siteConfig.url}/politica-de-privacidade)`,
    `- [Termos de Uso](${siteConfig.url}/termos-de-uso)`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
