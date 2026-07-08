export function Eyebrow({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase ${
        dark
          ? "border-white/15 bg-white/5 text-accent-400"
          : "border-brand-100 bg-brand-50 text-accent-600"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent-500 to-cyan-400" />
      {children}
    </span>
  );
}
