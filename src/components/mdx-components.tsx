import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="font-display mt-12 mb-4 text-2xl font-semibold tracking-tight text-ink-900 first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-display mt-9 mb-3 text-xl font-semibold text-ink-900"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-5 text-[17px] leading-[1.75] text-ink-700" {...props} />
  ),
  ul: (props) => (
    <ul
      className="mb-5 ml-5 list-disc space-y-2 text-[17px] leading-[1.7] text-ink-700"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mb-5 ml-5 list-decimal space-y-2 text-[17px] leading-[1.7] text-ink-700"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  a: ({ href, ...props }) => (
    <Link
      href={href ?? "#"}
      className="font-medium text-accent-600 underline decoration-accent-400/40 underline-offset-4 transition-colors duration-200 hover:text-accent-500"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-ink-900" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-accent-400 pl-5 text-[17px] italic text-ink-500"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-brand-50 px-1.5 py-0.5 font-mono text-[15px] text-accent-600"
      {...props}
    />
  ),
};
