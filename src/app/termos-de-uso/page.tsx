import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section, Container } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do site institucional da JH Online Solutions.",
};

export default function TermosDeUsoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Termos de Uso"
        description="Última atualização: julho de 2026."
      />
      <Section className="pt-0 pb-24">
        <Container className="max-w-3xl">
          <div className="space-y-8 text-[17px] leading-relaxed text-ink-700">
            <p>
              Estes Termos de Uso regulam o acesso e a utilização do site
              institucional da {siteConfig.legalName}. Ao navegar neste site,
              você concorda com os termos abaixo.
            </p>

            <div>
              <h2 className="font-display mb-3 text-xl font-semibold text-ink-900">
                1. Uso do conteúdo
              </h2>
              <p>
                Todo o conteúdo publicado neste site — textos, artigos do
                blog, marca e identidade visual — é de propriedade da{" "}
                {siteConfig.legalName} ou de seus licenciadores, sendo
                protegido por leis de propriedade intelectual. É permitida a
                citação de trechos com a devida referência à fonte.
              </p>
            </div>

            <div>
              <h2 className="font-display mb-3 text-xl font-semibold text-ink-900">
                2. Finalidade informativa
              </h2>
              <p>
                O conteúdo do blog tem caráter informativo e educacional. Não
                constitui consultoria técnica formal — recomendações
                específicas para o seu contexto devem ser obtidas por meio de
                contato direto com nossa equipe.
              </p>
            </div>

            <div>
              <h2 className="font-display mb-3 text-xl font-semibold text-ink-900">
                3. Disponibilidade do site
              </h2>
              <p>
                Envidamos esforços razoáveis para manter o site disponível e
                atualizado, mas não garantimos disponibilidade ininterrupta e
                podemos alterar ou remover conteúdo a qualquer momento, sem
                aviso prévio.
              </p>
            </div>

            <div>
              <h2 className="font-display mb-3 text-xl font-semibold text-ink-900">
                4. Links externos
              </h2>
              <p>
                Este site pode conter links para sites de terceiros. Não nos
                responsabilizamos pelo conteúdo ou pelas práticas de
                privacidade desses sites.
              </p>
            </div>

            <div>
              <h2 className="font-display mb-3 text-xl font-semibold text-ink-900">
                5. Contato
              </h2>
              <p>
                Dúvidas sobre estes termos podem ser enviadas para{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-accent-600 underline underline-offset-4"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
