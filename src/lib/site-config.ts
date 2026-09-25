export const siteConfig = {
  name: "JH Online Solutions",
  legalName: "JH Online Solutions LTDA",
  tagline: "Tecnologia que move o seu negócio adiante",
  description:
    "Consultoria em tecnologia, desenvolvimento de software sob medida e soluções em nuvem para empresas que querem crescer com segurança e performance.",
  url: "https://jhonlinesolutions.com.br",
  locale: "pt-BR",
  email: "contato@jhonlinesolutions.com.br",
  phone: "+55 11 96376-5638",
  phoneDisplay: "(11) 96376-5638",
  whatsapp: "https://wa.me/5511963765638",
  address: {
    street: "Av. Prestes Maia, 241",
    complement: "Sala 3026",
    city: "São Paulo",
    state: "SP",
    zip: "01031-902",
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
