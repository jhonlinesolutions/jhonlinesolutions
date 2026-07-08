const stack = [
  "Node.js",
  "React",
  "Next.js",
  "AWS",
  "Azure",
  "Google Cloud",
  "Kubernetes",
  "Docker",
  "Terraform",
  "PostgreSQL",
  "Python",
  "TypeScript",
];

export function TechMarquee() {
  const items = [...stack, ...stack];

  return (
    <div className="relative overflow-hidden border-y border-white/10 py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap text-sm font-medium tracking-wide text-ink-300/80"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
