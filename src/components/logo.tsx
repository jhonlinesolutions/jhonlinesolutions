import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className ?? ""}`}
      aria-label="JH Online Solutions — página inicial"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect width="34" height="34" rx="9" fill="url(#logo-gradient)" />
        <path
          d="M10 9v10.5a3.5 3.5 0 0 1-3.5 3.5"
          stroke="white"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M16.5 9v9a4.5 4.5 0 0 0 9 0V9"
          stroke="white"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeOpacity="0.55"
        />
        <defs>
          <linearGradient
            id="logo-gradient"
            x1="0"
            y1="0"
            x2="34"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5B6CF0" />
            <stop offset="1" stopColor="#22C1D1" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-display text-[15px] font-semibold leading-tight tracking-tight">
        JH Online
        <span className="block text-[11px] font-medium tracking-[0.16em] text-ink-500 uppercase">
          Solutions
        </span>
      </span>
    </Link>
  );
}
