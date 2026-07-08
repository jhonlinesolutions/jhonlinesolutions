import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { Section, Container } from "@/components/section";
import { Eyebrow } from "@/components/eyebrow";
import { BlogCard } from "@/components/blog-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre cloud, segurança da informação, engenharia de software e transformação digital, escritos pela equipe da JH Online Solutions.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Section className="pt-36 pb-16 md:pt-44">
        <Container>
          <Reveal>
            <Eyebrow>Blog</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl">
              Ideias práticas sobre tecnologia e negócio
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-500">
              Conteúdo direto ao ponto sobre cloud, segurança, engenharia de
              software e automação — baseado em projetos reais que
              conduzimos.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-0 pb-24">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <RevealItem key={post.slug}>
                <BlogCard post={post} index={index} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  );
}
