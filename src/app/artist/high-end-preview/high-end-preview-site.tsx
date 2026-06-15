"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const navItems = ["Home", "About", "Videos", "Music", "Writings"];

const works = [
  {
    title: "瞬间的瞬间",
    label: "New single",
    seed: "yuyu-li-archive-maison-single",
  },
  {
    title: "夜间制作笔记",
    label: "Studio note",
    seed: "yuyu-li-archive-maison-studio",
  },
  {
    title: "声线抵达之前",
    label: "Visualizer",
    seed: "yuyu-li-archive-maison-visualizer",
  },
];

const palette = ["#FDFBF7", "#241D18", "#8D9A78", "#D9C8AA", "#76644F"];
const workLayoutClasses = ["md:col-span-7", "md:col-span-5", "md:col-span-5 md:col-start-8 md:-mt-32"];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transform-gpu transition-all duration-[1100ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${
        visible ? "translate-y-0 blur-0 opacity-100" : "translate-y-16 blur-md opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Bezel({ children, className = "", innerClassName = "" }: { children: ReactNode; className?: string; innerClassName?: string }) {
  return (
    <div
      className={`rounded-[2rem] border border-[#241d18]/10 bg-white/35 p-1.5 shadow-[0_34px_110px_rgba(36,29,24,0.10)] ${className}`}
    >
      <div
        className={`h-full rounded-[calc(2rem-0.375rem)] bg-[#f8f2e8] shadow-[inset_0_1px_1px_rgba(255,255,255,0.72)] ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}

function IslandButton({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-4 rounded-full px-3 py-3 pl-6 text-sm font-semibold tracking-[0.14em] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${
        dark
          ? "bg-[#241d18] text-[#fdfbf7] shadow-[0_24px_80px_rgba(36,29,24,0.18)]"
          : "bg-[#fdfbf7] text-[#241d18] shadow-[0_22px_70px_rgba(36,29,24,0.12)]"
      }`}
    >
      <span>{children}</span>
      <span
        className={`grid size-9 place-items-center rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[1px] group-hover:translate-x-1 group-hover:scale-105 ${
          dark ? "bg-white/12 text-[#fdfbf7]" : "bg-[#241d18]/7 text-[#241d18]"
        }`}
      >
        ↗
      </span>
    </a>
  );
}

function FloatingNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed left-1/2 top-0 z-40 w-[min(94vw,980px)] -translate-x-1/2 pt-6">
        <nav className="mx-auto flex w-full items-center justify-between rounded-full border border-[#241d18]/10 bg-[#fdfbf7]/78 px-4 py-3 shadow-[0_24px_90px_rgba(36,29,24,0.12)] backdrop-blur-3xl">
          <Link href="/artist/high-end-preview" className="flex items-center gap-3 pl-2">
            <span className="grid size-9 place-items-center rounded-full bg-[#241d18] text-[11px] font-black tracking-[0.08em] text-[#fdfbf7]">
              YL
            </span>
            <span className="text-sm font-black tracking-[0.24em] text-[#241d18]">YUYU LI</span>
          </Link>
          <div className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#241d18]/58 md:flex">
            {navItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <button
            type="button"
            aria-label="Toggle preview navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="relative grid size-11 place-items-center rounded-full bg-[#241d18]/6 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
          >
            <span
              className={`absolute h-px w-5 bg-[#241d18] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5 rotate-0"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-[#241d18] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "translate-y-0 -rotate-45" : "translate-y-1.5 rotate-0"
              }`}
            />
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-30 bg-[#241d18]/82 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-[100dvh] items-center justify-center px-6 text-[#fdfbf7]">
          <div className="space-y-7 text-center">
            {navItems.map((item, index) => (
              <div
                key={item}
                className={`text-5xl font-black tracking-[-0.01em] transition-all duration-[900ms] ease-[cubic-bezier(0.32,0.72,0,1)] md:text-7xl ${
                  open ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${120 + index * 70}ms` : "0ms" }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function PhotoPanel({ seed, label, className = "" }: { seed: string; label: string; className?: string }) {
  return (
    <Bezel className={className} innerClassName="overflow-hidden">
      <div
        className="min-h-80 bg-cover bg-center opacity-[0.92] saturate-[0.82]"
        role="img"
        aria-label={label}
        style={{ backgroundImage: `url(https://picsum.photos/seed/${seed}/1200/900)` }}
      />
    </Bezel>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid min-h-[100dvh] max-w-7xl gap-10 px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40 lg:grid-cols-[0.94fr_1.06fr] lg:items-end">
      <Reveal className="relative z-10">
        <span className="inline-flex rounded-full border border-[#241d18]/10 bg-white/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#76644f]">
          High End Visual Study
        </span>
        <h1 className="mt-8 max-w-4xl text-[clamp(4.2rem,11vw,10rem)] font-black leading-[0.82] tracking-[-0.01em] text-[#241d18]">
          A quiet house for songs.
        </h1>
        <p className="mt-8 max-w-xl text-xl leading-9 text-[#241d18]/64">
          这一版只做高级视觉方向测试：更克制、更有材质、更像音乐人长期作品档案。
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <IslandButton href="#archive" dark>
            View Study
          </IslandButton>
          <IslandButton href="/artist">
            Original
          </IslandButton>
        </div>
      </Reveal>

      <div className="relative min-h-[34rem] md:min-h-[42rem]">
        <Reveal delay={120} className="absolute left-0 top-8 w-[72%] rotate-[-2deg] max-md:relative max-md:top-0 max-md:w-full max-md:rotate-0">
          <PhotoPanel seed="yuyu-li-high-end-hero" label="High-end musician editorial portrait placeholder" />
        </Reveal>
        <Reveal delay={260} className="absolute bottom-0 right-0 w-[58%] rotate-[3deg] max-md:relative max-md:mt-6 max-md:w-full max-md:rotate-0">
          <Bezel innerClassName="p-7 md:p-9">
            <span className="inline-flex rounded-full bg-[#8d9a78]/16 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#76644f]">
              Current identity
            </span>
            <p className="mt-8 text-4xl font-black leading-none text-[#241d18] md:text-5xl">YUYU LI</p>
            <p className="mt-4 text-lg font-semibold tracking-[0.2em] text-[#241d18]/52">李玉宇</p>
            <div className="mt-10 h-px bg-[#241d18]/10" />
            <p className="mt-6 text-base leading-8 text-[#241d18]/60">
              Songwriter / Independent Artist. Releases, visuals, writings, and long-form creative notes.
            </p>
          </Bezel>
        </Reveal>
      </div>
    </section>
  );
}

function ArchiveSection() {
  return (
    <section id="archive" className="px-4 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="inline-flex rounded-full border border-[#241d18]/10 bg-white/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#76644f]">
            Archive Surface
          </span>
          <h2 className="mt-7 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.01em] text-[#241d18] md:text-8xl">
            Releases, videos, and notes share one visual room.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-12">
          {works.map((work, index) => (
            <Reveal
              key={work.title}
              delay={index * 120}
              className={workLayoutClasses[index]}
            >
              <Bezel innerClassName="overflow-hidden bg-[#fbf6ec]">
                <div
                  className="min-h-72 bg-cover bg-center"
                  style={{ backgroundImage: `url(https://picsum.photos/seed/${work.seed}/1000/720)` }}
                  role="img"
                  aria-label={`${work.title} mood placeholder`}
                />
                <div className="p-7 md:p-9">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#76644f]">{work.label}</p>
                  <h3 className="mt-5 text-3xl font-black leading-tight text-[#241d18] md:text-5xl">{work.title}</h3>
                </div>
              </Bezel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function NotesSection() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <Reveal>
          <span className="inline-flex rounded-full border border-[#241d18]/10 bg-white/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#76644f]">
            Why this version
          </span>
          <h2 className="mt-7 text-5xl font-black leading-[0.92] text-[#241d18] md:text-7xl">更像高端作品档案，而不是普通艺人模板。</h2>
        </Reveal>
        <Reveal delay={160}>
          <Bezel innerClassName="p-7 md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              {[
                ["视觉读法", "Editorial Luxury + Z-Axis Cascade。温暖纸面、低饱和鼠尾草、深 espresso 字色，像实体唱片内页。"],
                ["适合原因", "它会让 Writings、About 和长期作品沉淀更有质感，适合做成正式官网的高级路线。"],
                ["可能风险", "如果真实照片不够好，这种设计会放大素材质量差异，需要后续配合正式封面与人像。"],
                ["下一步", "若你喜欢这版，可以再做 2 个微调：更东方、更国际化，或更音乐现场。"],
              ].map(([title, body]) => (
                <article key={title} className="rounded-[1.5rem] bg-white/45 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)]">
                  <h3 className="text-sm font-black tracking-[0.18em] text-[#76644f]">{title}</h3>
                  <p className="mt-5 text-base leading-8 text-[#241d18]/62">{body}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {palette.map((color) => (
                <span
                  key={color}
                  className="h-12 w-24 rounded-full ring-1 ring-[#241d18]/10"
                  style={{ backgroundColor: color } as CSSProperties}
                />
              ))}
            </div>
          </Bezel>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 pb-12 pt-24 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] bg-[#241d18] p-7 text-[#fdfbf7] shadow-[0_34px_110px_rgba(36,29,24,0.16)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">©2025 Yuyu Li Music LLC. All rights reserved.</p>
          <p className="mt-2 font-semibold tracking-[0.18em] text-[#fdfbf7]/58">神都玉宇音乐</p>
        </div>
        <Link
          href="/artist/theme-preview"
          className="group inline-flex w-fit items-center gap-4 rounded-full bg-white/10 px-3 py-3 pl-6 text-sm font-semibold tracking-[0.14em] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
        >
          <span>Other previews</span>
          <span className="grid size-9 place-items-center rounded-full bg-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[1px] group-hover:translate-x-1">
            ↗
          </span>
        </Link>
      </div>
    </footer>
  );
}

export function HighEndPreviewSite() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fdfbf7] text-[#241d18]">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-20 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(36,29,24,0.55) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#8d9a78]/24 blur-3xl"
      />
      <FloatingNav />
      <Hero />
      <ArchiveSection />
      <NotesSection />
      <Footer />
    </main>
  );
}
