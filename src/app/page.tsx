import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Hero } from "@/components/home/hero";
import { ServicesPreview } from "@/components/home/services-preview";
import { Differentiators } from "@/components/home/differentiators";
import { Process } from "@/components/home/process";
import { BlogPreview } from "@/components/home/blog-preview";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = pageMetadata({
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Differentiators />
      <Process />
      <BlogPreview />
      <FinalCta />
    </>
  );
}
