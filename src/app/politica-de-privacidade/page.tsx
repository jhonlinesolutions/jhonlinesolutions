import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/page-header";
import { Section, Container } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Política de Privacidade",
  description:
    "Como a JH Online Solutions coleta, usa e protege dados pessoais, em conformidade com a LGPD.",
  path: "/politica-de-privacidade",
});

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Política de Privacidade"
        description="Última atualização: novembro de 2026."
      />
      <Section className="pt-0 pb-24">
        <Container className="max-w-3xl">
          <div className="space-y-8 text-[17px] leading-relaxed text-ink-700">
            <p>
              A {siteConfig.legalName} (&ldquo;nós&rdquo;) respeita a sua privacidade e
              está comprometida em proteger os dados pessoais tratados por
              meio deste site, em conformidade com a Lei Geral de Proteção de
              Dados (Lei nº 13.709/2018 — LGPD).
            </p>

            <div>
              <h2 className="font-display mb-3 text-xl font-semibold text-ink-900">
                1. Quais dados coletamos
              </h2>
              <p>
                Coletamos os dados que você nos fornece voluntariamente por
                meio do formulário de contato — nome, e-mail, telefone,
                empresa e o conteúdo da mensagem enviada. Também podemos
                coletar dados de navegação básicos (como páginas visitadas)
                para fins de análise de desempenho do site.
              </p>
            </div>

            <div>
              <h2 className="font-display mb-3 text-xl font-semibold text-ink-900">
                2. Como usamos os dados
              </h2>
              <p>
                Utilizamos os dados fornecidos exclusivamente para responder
                às suas solicitações de contato, elaborar propostas comerciais
                e, quando aplicável, dar continuidade a um relacionamento
                comercial. Não vendemos nem compartilhamos seus dados com
                terceiros para fins de marketing.
              </p>
            </div>

            <div>
              <h2 className="font-display mb-3 text-xl font-semibold text-ink-900">
                3. Compartilhamento de dados
              </h2>
              <p>
                Podemos compartilhar dados com prestadores de serviço
                estritamente necessários à operação do site e ao envio de
                comunicações (por exemplo, provedores de e-mail transacional),
                sempre sob obrigações contratuais de confidencialidade e
                segurança.
              </p>
            </div>

            <div>
              <h2 className="font-display mb-3 text-xl font-semibold text-ink-900">
                4. Seus direitos
              </h2>
              <p>
                Nos termos da LGPD, você pode solicitar a qualquer momento a
                confirmação, o acesso, a correção ou a eliminação dos seus
                dados pessoais, bem como a revogação do consentimento dado.
                Para exercer esses direitos, entre em contato pelo e-mail{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-accent-600 underline underline-offset-4"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display mb-3 text-xl font-semibold text-ink-900">
                5. Retenção e segurança
              </h2>
              <p>
                Mantemos os dados pelo tempo necessário para cumprir as
                finalidades descritas nesta política ou por prazo superior
                quando exigido por obrigação legal. Adotamos medidas técnicas
                e organizacionais razoáveis para proteger os dados contra
                acesso não autorizado, perda ou alteração.
              </p>
            </div>

            <div id="whatsapp">
              <h2 className="font-display mb-3 text-xl font-semibold text-ink-900">
                6. Atendimento pelo WhatsApp
              </h2>
              <p>
                Quando você nos chama no WhatsApp, recebemos o seu número, o
                nome do seu perfil e o conteúdo das mensagens que você envia
                (textos, áudios, imagens e documentos). Esses dados são usados
                para responder ao seu contato, entender o seu negócio, agendar
                demonstrações e reuniões e, por até 7 dias depois da conversa,
                enviar mensagens de acompanhamento sobre o assunto que você
                procurou. Você pode parar esse acompanhamento a qualquer
                momento tocando em &ldquo;Não tenho interesse&rdquo; ou
                avisando na conversa.
              </p>
              <p className="mt-4">
                O atendimento é feito com apoio de uma assistente virtual com
                inteligência artificial. Para isso, os dados passam pelos
                provedores necessários ao serviço: Meta (WhatsApp Business
                Platform), Google (processamento de linguagem e transcrição de
                áudios) e ElevenLabs (geração de voz), além da nossa
                infraestrutura de automação e de uma planilha interna de
                acompanhamento dos contatos. Guardamos as conversas e os
                dados do contato por até 12 meses após a última mensagem,
                salvo pedido de exclusão ou obrigação legal.
              </p>
            </div>

            <div id="exclusao-de-dados">
              <h2 className="font-display mb-3 text-xl font-semibold text-ink-900">
                7. Como pedir a exclusão dos seus dados
              </h2>
              <p>
                Para excluir os dados que temos sobre você, envie
                &ldquo;excluir meus dados&rdquo; na mesma conversa do WhatsApp
                ou escreva para{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-accent-600 underline underline-offset-4"
                >
                  {siteConfig.email}
                </a>{" "}
                informando o número de WhatsApp usado. Apagamos as conversas,
                o registro do contato e os dados de acompanhamento em até 15
                dias e confirmamos a exclusão pelo mesmo canal.
              </p>
            </div>

            <div>
              <h2 className="font-display mb-3 text-xl font-semibold text-ink-900">
                8. Alterações a esta política
              </h2>
              <p>
                Esta política pode ser atualizada periodicamente. A data da
                última atualização estará sempre indicada no topo desta
                página.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
