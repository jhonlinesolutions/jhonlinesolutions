export type ServiceIcon =
  | "code"
  | "cloud"
  | "compass"
  | "shield"
  | "cpu"
  | "lifebuoy";

export type Service = {
  id: string;
  icon: ServiceIcon;
  title: string;
  shortDescription: string;
  description: string;
  bullets: string[];
  image: { src: string; alt: string };
};

export const services: Service[] = [
  {
    id: "desenvolvimento",
    image: {
      src: "/images/services/desenvolvimento.jpg",
      alt: "Desenvolvedor trabalhando em múltiplos monitores com código",
    },
    icon: "code",
    title: "Desenvolvimento de Software",
    shortDescription:
      "Sistemas web, APIs e produtos digitais sob medida, construídos para escalar com o seu negócio.",
    description:
      "Projetamos e desenvolvimento aplicações web, APIs e produtos digitais sob medida, do zero ou evoluindo sistemas legados. Trabalhamos com arquiteturas modernas, testes automatizados e entregas contínuas para que o seu time de negócio veja valor desde as primeiras semanas.",
    bullets: [
      "Plataformas web e aplicações internas sob medida",
      "APIs e integrações entre sistemas",
      "Modernização de sistemas legados",
      "Times dedicados ou squads sob demanda",
    ],
  },
  {
    id: "cloud",
    image: {
      src: "/images/services/cloud.jpg",
      alt: "Racks de servidores com cabos de rede em um data center",
    },
    icon: "cloud",
    title: "Cloud & DevOps",
    shortDescription:
      "Arquitetura em nuvem, automação de infraestrutura e pipelines de deploy confiáveis.",
    description:
      "Desenhamos arquiteturas em nuvem (AWS, Azure e GCP) focadas em custo, performance e resiliência. Implementamos infraestrutura como código, observabilidade e pipelines de CI/CD que tornam cada deploy previsível — sem noites em claro monitorando produção.",
    bullets: [
      "Arquitetura e migração para nuvem pública ou híbrida",
      "Infraestrutura como código (Terraform)",
      "Pipelines de CI/CD e automação de deploys",
      "Observabilidade, monitoramento e alertas",
    ],
  },
  {
    id: "consultoria",
    image: {
      src: "/images/services/consultoria.jpg",
      alt: "Equipe discutindo um plano em frente a um quadro branco",
    },
    icon: "compass",
    title: "Consultoria em TI",
    shortDescription:
      "Diagnóstico técnico e roadmap claro para priorizar investimentos em tecnologia.",
    description:
      "Avaliamos sua stack tecnológica atual, processos e time para entregar um diagnóstico honesto e um roadmap priorizado. Sem jargão desnecessário — apenas recomendações práticas, com impacto e esforço estimados, para orientar decisões de investimento.",
    bullets: [
      "Diagnóstico técnico e arquitetural completo",
      "Roadmap de modernização priorizado",
      "Definição de stack e boas práticas de engenharia",
      "Apoio a decisões de build vs. buy",
    ],
  },
  {
    id: "seguranca",
    image: {
      src: "/images/services/seguranca.jpg",
      alt: "Cadeado sobre o teclado de um notebook",
    },
    icon: "shield",
    title: "Segurança da Informação",
    shortDescription:
      "Gestão de vulnerabilidades, conformidade com a LGPD e resposta a incidentes.",
    description:
      "Estruturamos um programa de segurança proporcional ao tamanho e ao risco da sua empresa: gestão de acessos, gestão de vulnerabilidades, adequação à LGPD e planos de resposta a incidentes — sem burocracia desnecessária.",
    bullets: [
      "Gestão de identidade e acessos (MFA, SSO)",
      "Gestão de vulnerabilidades e testes de segurança",
      "Adequação à LGPD",
      "Plano de resposta a incidentes",
    ],
  },
  {
    id: "automacao",
    image: {
      src: "/images/services/automacao.jpg",
      alt: "Braço robótico automatizado em ambiente iluminado em azul",
    },
    icon: "cpu",
    title: "Automação & IA",
    shortDescription:
      "Automação de processos e integração de IA generativa em fluxos de trabalho reais.",
    description:
      "Identificamos processos manuais e repetitivos com potencial real de automação, e implementamos soluções — de RPA a IA generativa — com humano no loop onde faz sentido, sempre medindo o retorno antes de escalar.",
    bullets: [
      "Mapeamento de processos automatizáveis",
      "Automação de fluxos e integrações (RPA)",
      "Assistentes e copilotos com IA generativa",
      "Extração e estruturação de dados de documentos",
    ],
  },
  {
    id: "suporte",
    image: {
      src: "/images/services/suporte.jpg",
      alt: "Mesa de trabalho com tablet, anotações e monitores",
    },
    icon: "lifebuoy",
    title: "Suporte & Sustentação",
    shortDescription:
      "Manutenção contínua, monitoramento e evolução dos seus sistemas com SLA claro.",
    description:
      "Depois do go-live, seguimos ao seu lado: manutenção corretiva e evolutiva, monitoramento proativo e um canal direto com a equipe que conhece o seu sistema — com SLA definido em contrato, sem letras miúdas.",
    bullets: [
      "Manutenção corretiva e evolutiva",
      "Monitoramento proativo 24/7",
      "SLA de atendimento definido em contrato",
      "Canal direto com engenheiros, sem camadas de triagem",
    ],
  },
];

export function getServiceById(id: string) {
  return services.find((service) => service.id === id);
}
