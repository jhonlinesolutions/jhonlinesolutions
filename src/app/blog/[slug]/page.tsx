import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import { Section, Container } from "@/components/section";
import { mdxComponents } from "@/components/mdx-components";
import { BlogCard } from "@/components/blog-card";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Section className="pt-36 pb-4 md:pt-44">
        <Container className="max-w-3xl">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors duration-200 hover:text-accent-600"
            >
              <ArrowLeft size={15} />
              Voltar para o blog
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <span className="mt-6 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-accent-600">
              {post.category}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display mt-4 text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-5 flex items-center gap-3 text-sm text-ink-500">
              <span>{post.author}</span>
              <span aria-hidden>·</span>
              <span>{formatDate(post.date)}</span>
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} min de leitura</span>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-8 pb-20">
        <Container className="max-w-3xl">
          <article>
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section dark className="py-20">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-white">
              Continue lendo
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
