import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

type PageMetadataInput = {
  title?: string;
  description: string;
  path: string;
  image?: { url: string; alt: string };
  article?: { publishedTime: string; authors: string[] };
};

// Builds the full metadata for a page. Next.js replaces nested objects like
// `openGraph` instead of merging them, so every page needs the complete set.
export function pageMetadata({
  title,
  description,
  path,
  image,
  article,
}: PageMetadataInput): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const images = [
    image ?? {
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: `${siteConfig.name} — ${siteConfig.tagline}`,
    },
  ];

  return {
    title: title ?? { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      siteName: siteConfig.name,
      locale: "pt_BR",
      url: path,
      title: fullTitle,
      description,
      images,
      ...(article
        ? { type: "article", ...article }
        : { type: "website" }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
  };
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

// Serializes JSON-LD safely for inline <script> tags (see Next.js JSON-LD guide).
export function jsonLdScript(data: unknown): { __html: string } {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
