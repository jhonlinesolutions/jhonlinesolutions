import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Container } from "@/components/section";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { BlogCard } from "@/components/blog-card";
import { getAllPosts } from "@/lib/blog";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <Section>
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>Blog</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
                Ideias para quem decide tecnologia
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href="/blog"
              className="group inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-accent-600"
            >
              Ver todos os artigos
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <RevealItem key={post.slug} className="h-full">
              <BlogCard post={post} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
