import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

const gradients = [
  "from-accent-500 to-cyan-400",
  "from-cyan-500 to-accent-400",
  "from-brand-700 to-accent-500",
  "from-accent-600 to-cyan-500",
];

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  const gradient = gradients[index % gradients.length];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)]"
    >
      <div
        className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}
      >
        <div className="bg-grid absolute inset-0 opacity-30" />
        <span className="relative rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-medium text-ink-500">
          {formatDate(post.date)} · {post.readingMinutes} min de leitura
        </span>
        <h3 className="font-display text-lg font-semibold text-ink-900 transition-colors duration-200 group-hover:text-accent-600">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-ink-500">
          {post.description}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
          Ler artigo
          <ArrowUpRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
