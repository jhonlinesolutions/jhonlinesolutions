export const siteConfig = {
  name: "JH Online Solutions",
  legalName: "JH Online Solutions LTDA",
  tagline: "Tecnologia que move o seu negócio adiante",
  description:
    "Consultoria em tecnologia, desenvolvimento de software sob medida e soluções em nuvem para empresas que querem crescer com segurança e performance.",
  url: "https://www.jhonlinesolutions.com.br",
  locale: "pt-BR",
  email: "contato@jhonlinesolutions.com.br",
  phone: "+55 11 4002-8922",
  phoneDisplay: "(11) 4002-8922",
  whatsapp: "https://wa.me/5511940028922",
  address: {
    street: "Av. Paulista, 1106",
    complement: "Conjunto 801",
    city: "São Paulo",
    state: "SP",
    zip: "01310-914",
    country: "Brasil",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/jh-online-solutions",
    instagram: "https://www.instagram.com/jhonlinesolutions",
    github: "https://github.com/jh-online-solutions",
  },
  nav: [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
