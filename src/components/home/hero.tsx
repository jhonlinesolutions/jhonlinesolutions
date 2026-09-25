"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  GitBranch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { Container } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { TechMarquee } from "./tech-marquee";

const HERO_IMAGE = "/images/hero.jpg";
const HERO_SIZES = "(min-width: 1024px) 560px, 100vw";

/** Maps the normalized pointer position (-0.5..0.5) to a pixel offset. */
function useDepth(value: MotionValue<number>, distance: number) {
  return useTransform(value, [-0.5, 0.5], [-distance, distance]);
}

type FloatingChipProps = {
  children: ReactNode;
  /** Placement classes for the absolutely positioned wrapper. */
  position: string;
  className: string;
  delay: number;
  from: { x?: number; y?: number; scale?: number };
  x?: MotionValue<number>;
  y?: MotionValue<number>;
};

/** Glass status chip: outer layer handles the parallax, inner layer the entrance. */
function FloatingChip({
  children,
  position,
  className,
  delay,
  from,
  x,
  y,
}: FloatingChipProps) {
  return (
    <motion.div
      style={x && y ? { x, y } : undefined}
      className={`absolute hidden sm:block ${position}`}
    >
      <motion.div
        initial={{ opacity: 0, ...from }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center border border-white/10 bg-brand-900/70 shadow-2xl backdrop-blur-xl ${className}`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Scroll: copy drifts up and fades, photo zooms in as the hero leaves the viewport.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const frameY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.3]);

  // Pointer: frame tilts toward the cursor, layers shift at different depths.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 110, damping: 18 });
  const springY = useSpring(pointerY, { stiffness: 110, damping: 18 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-9, 9]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7]);
  const photoX = useDepth(springX, -16);
  const photoY = useDepth(springY, -16);
  const chipNearX = useDepth(springX, 34);
  const chipNearY = useDepth(springY, 34);
  const chipFarX = useDepth(springX, 18);
  const chipFarY = useDepth(springY, 18);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const section = sectionRef.current;
    if (!section) return;

    const bounds = section.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    section.style.setProperty("--mx", `${x}px`);
    section.style.setProperty("--my", `${y}px`);
    pointerX.set(x / bounds.width - 0.5);
    pointerY.set(y / bounds.height - 0.5);

    const frame = frameRef.current;
    if (frame) {
      const frameBounds = frame.getBoundingClientRect();
      frame.style.setProperty("--fx", `${event.clientX - frameBounds.left}px`);
      frame.style.setProperty("--fy", `${event.clientY - frameBounds.top}px`);
    }
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
    sectionRef.current?.style.removeProperty("--mx");
    sectionRef.current?.style.removeProperty("--my");
    frameRef.current?.style.removeProperty("--fx");
    frameRef.current?.style.removeProperty("--fy");
  }

  const still = reduceMotion ?? false;

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative overflow-hidden bg-brand-950 pt-32 pb-16 text-white md:pt-44 md:pb-24"
    >
      {/* Atmosphere */}
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent-500/25 blur-[100px]"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute top-40 -right-24 h-[26rem] w-[26rem] rounded-full bg-cyan-500/20 blur-[110px]"
        style={{ animationDelay: "-3.5s" }}
      />
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
      />
      <div
        aria-hidden
        className="hero-grid-lit pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(77 216 230 / 0.22) 1px, transparent 1px), linear-gradient(to bottom, rgb(77 216 230 / 0.22) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div aria-hidden className="hero-spotlight pointer-events-none absolute inset-0" />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Copy */}
        <motion.div
          style={still ? undefined : { y: copyY, opacity: copyOpacity }}
          className="flex flex-col items-start"
        >
          <Reveal>
            <Eyebrow dark>
              <Sparkles size={12} className="text-accent-400" />
              Consultoria & Engenharia de Software
            </Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display text-balance mt-7 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Tecnologia que move o seu{" "}
              <span className="bg-gradient-to-r from-accent-400 to-cyan-400 bg-clip-text text-transparent">
                negócio adiante
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
              Somos parceiros de tecnologia para empresas que precisam de
              software sob medida, infraestrutura em nuvem confiável e
              segurança de verdade — sem enrolação e com prazos que a gente
              cumpre.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contato"
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-950 transition-all duration-200 hover:bg-accent-400 hover:text-white"
              >
                Solicitar orçamento
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/servicos"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/10"
              >
                Conhecer serviços
              </Link>
            </div>
          </Reveal>
        </motion.div>

        {/* Visual */}
        <motion.div
          style={still ? undefined : { y: frameY }}
          className="relative mx-auto w-full max-w-[560px] [perspective:1400px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              ref={frameRef}
              style={still ? undefined : { rotateX, rotateY }}
              className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 shadow-[0_40px_120px_-30px_rgba(34,193,209,0.35)] lg:aspect-[5/6]"
            >
              {/* Brand-tinted photo */}
              <motion.div
                style={still ? undefined : { x: photoX, y: photoY, scale: photoScale }}
                className="duotone absolute -inset-6"
              >
                <Image
                  src={HERO_IMAGE}
                  alt="Telas com código-fonte iluminadas em um ambiente de desenvolvimento"
                  fill
                  preload
                  sizes={HERO_SIZES}
                  className="duotone-base object-cover"
                />
              </motion.div>

              {/* True colors under the cursor; the mask sits on a frame-aligned wrapper */}
              <div aria-hidden className="hero-reveal absolute inset-0">
                <motion.div
                  style={still ? undefined : { x: photoX, y: photoY, scale: photoScale }}
                  className="absolute -inset-6"
                >
                  <Image
                    src={HERO_IMAGE}
                    alt=""
                    fill
                    sizes={HERO_SIZES}
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent"
              />
              <div
                aria-hidden
                className="bg-grid pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
              />

              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 font-mono text-[11px] tracking-wider text-white/70 uppercase">
                <span>JH / Engenharia em produção</span>
                <span className="hidden sm:inline">SP · BR</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating status chips */}
          <FloatingChip
            x={still ? undefined : chipNearX}
            y={still ? undefined : chipNearY}
            delay={0.7}
            from={{ x: -20 }}
            position="top-8 -left-4 lg:-left-10"
            className="gap-3 rounded-2xl px-4 py-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
              <GitBranch size={17} />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold">Deploy aprovado</span>
              <span className="font-mono text-[11px] text-ink-300">
                pipeline · main
              </span>
            </span>
            <span className="ml-1 h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          </FloatingChip>

          <FloatingChip
            x={still ? undefined : chipFarX}
            y={still ? undefined : chipFarY}
            delay={0.85}
            from={{ y: 20 }}
            position="-right-3 bottom-16 lg:-right-8"
            className="gap-3 rounded-2xl px-4 py-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
              <Activity size={17} />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold">Monitoramento 24/7</span>
              <span className="mt-1.5 flex h-4 items-end gap-[3px]" aria-hidden>
                {[0, 0.2, 0.45, 0.1, 0.6, 0.3, 0.75, 0.15].map((delay, i) => (
                  <span
                    key={i}
                    className="animate-eq w-[3px] rounded-full bg-cyan-400/80"
                    style={{ height: "100%", animationDelay: `-${delay}s` }}
                  />
                ))}
              </span>
            </span>
          </FloatingChip>

          <FloatingChip
            x={still ? undefined : chipNearX}
            y={still ? undefined : chipFarY}
            delay={1}
            from={{ scale: 0.8 }}
            position="-top-4 right-10"
            className="gap-2 rounded-full px-3.5 py-2 text-xs font-semibold"
          >
            <ShieldCheck size={14} className="text-cyan-400" />
            Adequação à LGPD
          </FloatingChip>
        </motion.div>
      </Container>

      <div className="relative mt-16 md:mt-24">
        <TechMarquee />
      </div>
    </section>
  );
}
