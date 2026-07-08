import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
};

export function Section({ children, id, className, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 ${dark ? "bg-brand-950 text-white" : "bg-white"} ${className ?? ""}`}
    >
      {children}
    </section>
  );
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`container-px relative mx-auto max-w-6xl ${className ?? ""}`}>
      {children}
    </div>
  );
}
