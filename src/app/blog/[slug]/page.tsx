import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import { getAuthor, authorId } from "@/lib/authors";
import { Section, Container } from "@/components/section";
import { mdxComponents } from "@/components/mdx-components";
import { BlogCard } from "@/components/blog-card";
import { Reveal } from "@/components/reveal";
import { DuotoneImage } from "@/components/duotone-image";
import { siteConfig } from "@/lib/site-config";
import {
  ORGANIZATION_ID,
  WEBSITE_ID,
  absoluteUrl,
  jsonLdScript,
  pageMetadata,
} from "@/lib/seo";

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

  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: { url: post.cover, alt: post.coverAlt },
    article: {
      publishedTime: post.date,
      ...(post.updated && { modifiedTime: post.updated }),
      authors: [post.author],
    },
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Mesma categoria primeiro (mais recentes antes); completa com os demais posts.
  const others = getAllPosts().filter((p) => p.slug !== slug);
  const related = [
    ...others.filter((p) => p.category === post.category),
    ...others.filter((p) => p.category !== post.category),
  ].slice(0, 3);

  const author = getAuthor(post.author);
  const authorPhoto = author?.photo;
  const url = absoluteUrl(`/blog/${post.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: url,
        url,
        headline: post.title,
        description: post.description,
        image: absoluteUrl(post.cover),
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        inLanguage: siteConfig.locale,
        articleSection: post.category,
        timeRequired: `PT${post.readingMinutes}M`,
        author: {
          "@type": "Person",
          ...(author && {
            "@id": authorId(author),
            url: absoluteUrl(author.profilePath),
            image: absoluteUrl(author.photo),
            ...(author.sameAs.length > 0 && { sameAs: author.sameAs }),
          }),
          name: post.author,
          jobTitle: post.authorRole,
          worksFor: { "@id": ORGANIZATION_ID },
        },
        publisher: { "@id": ORGANIZATION_ID },
        isPartOf: { "@id": WEBSITE_ID },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(jsonLd)}
      />
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
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-500">
              <span className="inline-flex items-center gap-2.5">
                {authorPhoto && (
                  <Image
                    src={authorPhoto}
                    alt={post.author}
                    width={36}
                    height={36}
                    className="size-9 rounded-full object-cover ring-2 ring-white"
                  />
                )}
                <span>
                  {author ? (
                    <Link
                      href={author.profilePath}
                      rel="author"
                      className="font-medium text-ink-900 transition-colors duration-200 hover:text-accent-600"
                    >
                      {post.author}
                    </Link>
                  ) : (
                    <span className="font-medium text-ink-900">{post.author}</span>
                  )}
                  , {post.authorRole}
                </span>
              </span>
              <span aria-hidden>·</span>
              <span>
                {formatDate(post.date)}
                {post.updated && post.updated !== post.date && (
                  <> (atualizado em {formatDate(post.updated)})</>
                )}
              </span>
              <span aria-hidden>·</span>
              <span>{post.readingMinutes} min de leitura</span>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Container className="mt-10 max-w-5xl">
        <Reveal delay={0.2}>
          <DuotoneImage
            src={post.cover}
            alt={post.coverAlt}
            sizes="(min-width: 1024px) 1024px, 100vw"
            preload
            className="aspect-[16/9] rounded-3xl md:aspect-[21/9]"
          />
        </Reveal>
      </Container>

      <Section className="pt-12 pb-20">
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
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
