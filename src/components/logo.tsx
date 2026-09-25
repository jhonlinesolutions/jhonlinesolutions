import Image from "next/image";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className ?? ""}`}
      aria-label="JH Online Solutions — página inicial"
    >
      <Image
        src="/brand/logo-mark.png"
        alt=""
        width={470}
        height={406}
        loading="eager"
        className="h-[34px] w-auto shrink-0"
      />
      <span className="font-display text-[15px] font-semibold leading-tight tracking-tight">
        JH Online
        <span className="block text-[11px] font-medium tracking-[0.16em] text-ink-500 uppercase">
          Solutions
        </span>
      </span>
    </Link>
  );
}
