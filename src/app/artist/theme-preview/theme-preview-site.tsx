import { ArrowUpRight, Mail, Music2, Play, Radio, Video } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";

export type ThemePreviewKey = "midnight-gold" | "porcelain-blue" | "ember-black";

type ThemePreview = {
  key: ThemePreviewKey;
  name: string;
  cnName: string;
  read: string;
  palette: string[];
  fit: string;
  risk: string;
  accent: string;
  accentSoft: string;
  bg: string;
  panel: string;
  text: string;
  muted: string;
  border: string;
  photoSeed: string;
};

export const themePreviews: ThemePreview[] = [
  {
    key: "midnight-gold",
    name: "Midnight Gold",
    cnName: "午夜金色",
    read: "黑胶唱片、剧场灯光、唱作人档案感。保留现有正式度，但让首屏更像音乐发布现场。",
    palette: ["#0f0f0d", "#f2eee4", "#c7a85b", "#5e4a29", "#d8d0c1"],
    fit: "适合继续强化音乐人官网的识别度，也最接近当前版本，迁移成本最低。",
    risk: "黑金容易显得传统，需要保持留白和照片质感，避免太像夜店或过度华丽。",
    accent: "#c7a85b",
    accentSoft: "#efe1b8",
    bg: "#0f0f0d",
    panel: "#1b1a16",
    text: "#f2eee4",
    muted: "rgba(242, 238, 228, 0.68)",
    border: "rgba(199, 168, 91, 0.36)",
    photoSeed: "yuyu-li-midnight-stage",
  },
  {
    key: "porcelain-blue",
    name: "Porcelain Blue",
    cnName: "瓷白冷蓝",
    read: "冷白纸面、蓝灰唱片封套、国际独立音乐杂志感。更清澈，也更适合英文受众。",
    palette: ["#f4f7f8", "#162331", "#426a82", "#9eb7c4", "#d9e2e6"],
    fit: "适合把网站往国际化、干净、耐读的方向推进，Writings 和 About 会更舒服。",
    risk: "冷色会削弱舞台情绪，需要用封面和视频图补足音乐现场的温度。",
    accent: "#426a82",
    accentSoft: "#d9e2e6",
    bg: "#f4f7f8",
    panel: "#ffffff",
    text: "#162331",
    muted: "rgba(22, 35, 49, 0.66)",
    border: "rgba(66, 106, 130, 0.28)",
    photoSeed: "yuyu-li-porcelain-blue-studio",
  },
  {
    key: "ember-black",
    name: "Ember Black",
    cnName: "余烬黑红",
    read: "黑色舞台、红棕灯影、电影海报感。更有攻击性，适合新歌或 MV 推广期。",
    palette: ["#12100f", "#f5eee6", "#b64b36", "#e07b45", "#41201a"],
    fit: "适合想让首页更有记忆点、更偏 MV 和演出宣传的时候使用。",
    risk: "红橙情绪较强，长期作为整站主色可能疲劳，更适合作为活动期主题。",
    accent: "#e07b45",
    accentSoft: "#f3c5a6",
    bg: "#12100f",
    panel: "#211916",
    text: "#f5eee6",
    muted: "rgba(245, 238, 230, 0.68)",
    border: "rgba(224, 123, 69, 0.34)",
    photoSeed: "yuyu-li-ember-black-concert",
  },
];

const navItems = [
  ["HOME", "首页"],
  ["ABOUT", "关于我"],
  ["VIDEOS", "影音专区"],
  ["MUSIC", "音乐专区"],
  ["WRITINGS", "创作札记"],
];

const releaseCards = [
  {
    title: "瞬间的瞬间",
    meta: "Single / 2026",
  },
  {
    title: "Turn of a Page",
    meta: "Demo / 2026",
  },
  {
    title: "Room Takes 01",
    meta: "Archive / 2025",
  },
];

const writingRows = [
  ["创作理念", "旋律抵达之前，先出现的是一个画面"],
  ["歌词手记", "歌词像一张私人地图"],
  ["制作笔记", "夜间制作笔记：不要急着填满"],
];

function getTheme(key: ThemePreviewKey) {
  return themePreviews.find((theme) => theme.key === key) ?? themePreviews[0];
}

function themeVars(theme: ThemePreview) {
  return {
    "--theme-bg": theme.bg,
    "--theme-panel": theme.panel,
    "--theme-text": theme.text,
    "--theme-muted": theme.muted,
    "--theme-accent": theme.accent,
    "--theme-accent-soft": theme.accentSoft,
    "--theme-border": theme.border,
  } as CSSProperties;
}

function PhotoBlock({ theme, className = "" }: { theme: ThemePreview; className?: string }) {
  return (
    <div
      className={`overflow-hidden border border-[var(--theme-border)] bg-[var(--theme-panel)] ${className}`}
      role="img"
      aria-label={`${theme.name} visual mood preview`}
    >
      <div
        className="h-full min-h-72 w-full bg-cover bg-center opacity-[0.88] mix-blend-luminosity"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/${theme.photoSeed}/1200/900)`,
        }}
      />
    </div>
  );
}

function ThemeHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--theme-border)] bg-[color-mix(in_srgb,var(--theme-bg)_88%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 md:px-8">
        <Link href="/artist/theme-preview" className="flex items-center gap-4">
          <span className="grid size-11 place-items-center border border-[var(--theme-border)] text-[var(--theme-accent)]">
            <Radio className="size-5" />
          </span>
          <span className="leading-none">
            <span className="block text-xl font-black tracking-[0.16em]">YUYU LI</span>
            <span className="mt-2 block text-sm font-semibold tracking-[0.28em] text-[var(--theme-muted)]">李玉宇</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-xs font-bold tracking-[0.18em] text-[var(--theme-muted)] lg:flex">
          {navItems.map(([en, cn]) => (
            <span key={en} className="flex flex-col items-center gap-1 text-center">
              <span>{en}</span>
              <span className="tracking-[0.12em]">{cn}</span>
            </span>
          ))}
        </nav>
        <Link
          href="/artist"
          className="border border-[var(--theme-border)] px-4 py-3 text-xs font-bold tracking-[0.16em] text-[var(--theme-text)] transition hover:bg-[var(--theme-accent)] hover:text-[var(--theme-bg)]"
        >
          原版
        </Link>
      </div>
    </header>
  );
}

function ThemeHero({ theme }: { theme: ThemePreview }) {
  return (
    <section className="mx-auto grid min-h-[calc(100dvh-5rem)] max-w-7xl gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
      <div className="pb-4">
        <p className="mb-7 inline-flex items-center gap-3 text-xs font-bold tracking-[0.24em] text-[var(--theme-accent)]">
          <Music2 className="size-4" />
          {theme.name} / {theme.cnName}
        </p>
        <h1 className="max-w-5xl text-[clamp(3.6rem,10vw,9.4rem)] font-black leading-[0.86] tracking-normal">
          声音先抵达，名字慢慢被记住。
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-9 text-[var(--theme-muted)]">
          用同一套官网结构测试不同色彩气质。当前页面只做预览，不覆盖正式版本。
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#music-preview"
            className="inline-flex items-center gap-2 bg-[var(--theme-accent)] px-6 py-4 text-sm font-black tracking-[0.14em] text-[var(--theme-bg)] transition hover:translate-y-[-2px]"
          >
            看音乐区
            <Play className="size-4 fill-current" />
          </a>
          <a
            href="#theme-notes"
            className="inline-flex items-center gap-2 border border-[var(--theme-border)] px-6 py-4 text-sm font-black tracking-[0.14em] text-[var(--theme-text)] transition hover:border-[var(--theme-accent)]"
          >
            看判断
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
      <PhotoBlock theme={theme} className="aspect-[4/5] lg:aspect-[0.82]" />
    </section>
  );
}

function ReleaseSection() {
  return (
    <section id="music-preview" className="border-y border-[var(--theme-border)] bg-[var(--theme-panel)] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-black leading-none md:text-6xl">最新作品</h2>
          <p className="mt-6 text-lg leading-8 text-[var(--theme-muted)]">
            同样的发行卡片结构，只调整底色、强调色、图像气质和按钮状态。
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {releaseCards.map((card, index) => (
            <article
              key={card.title}
              className="group min-h-72 border border-[var(--theme-border)] bg-[color-mix(in_srgb,var(--theme-bg)_72%,var(--theme-panel))] p-6 transition hover:-translate-y-1 hover:border-[var(--theme-accent)]"
            >
              <div className="flex h-full flex-col justify-between gap-10">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-bold tracking-[0.16em] text-[var(--theme-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-right text-xs font-bold tracking-[0.18em] text-[var(--theme-muted)]">{card.meta}</span>
                </div>
                <div>
                  <div className="mb-8 h-px w-full bg-[var(--theme-border)]" />
                  <h3 className="text-3xl font-black leading-tight">{card.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MediaWritingSection({ theme }: { theme: ThemePreview }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
      <div className="border-t border-[var(--theme-border)] pt-8">
        <div className="mb-8 flex items-center gap-3 text-[var(--theme-accent)]">
          <Video className="size-5" />
          <h2 className="text-4xl font-black">影音专区</h2>
        </div>
        <PhotoBlock theme={theme} className="aspect-video" />
        <div className="mt-6 flex items-center justify-between gap-6 border-b border-[var(--theme-border)] pb-6">
          <div>
            <p className="text-sm font-bold tracking-[0.16em] text-[var(--theme-muted)]">2026.06.12 / Yuyu Li</p>
            <h3 className="mt-2 text-2xl font-black">声线抵达之前 Official Visualizer</h3>
          </div>
          <span className="grid size-12 shrink-0 place-items-center bg-[var(--theme-accent)] text-[var(--theme-bg)]">
            <Play className="size-5 fill-current" />
          </span>
        </div>
      </div>
      <div className="border-t border-[var(--theme-border)] pt-8">
        <h2 className="text-4xl font-black">创作札记</h2>
        <div className="mt-8 divide-y divide-[var(--theme-border)] border-y border-[var(--theme-border)]">
          {writingRows.map(([category, title]) => (
            <article key={title} className="group flex items-center justify-between gap-8 py-7">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[var(--theme-accent)]">{category}</p>
                <h3 className="mt-3 text-2xl font-black leading-tight">{title}</h3>
              </div>
              <ArrowUpRight className="size-5 shrink-0 text-[var(--theme-muted)] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--theme-accent)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThemeNotes({ theme }: { theme: ThemePreview }) {
  return (
    <section id="theme-notes" className="border-t border-[var(--theme-border)] px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-4xl font-black leading-none md:text-6xl">主题判断</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {theme.palette.map((color) => (
              <span
                key={color}
                className="h-12 w-24 border border-[var(--theme-border)]"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["设计读法", theme.read],
            ["适合原因", theme.fit],
            ["可能问题", theme.risk],
          ].map(([title, body]) => (
            <article key={title} className="border border-[var(--theme-border)] bg-[var(--theme-panel)] p-6">
              <h3 className="text-lg font-black text-[var(--theme-accent)]">{title}</h3>
              <p className="mt-5 text-base leading-8 text-[var(--theme-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThemeFooter() {
  return (
    <footer className="border-t border-[var(--theme-border)] px-5 py-10 text-[var(--theme-muted)] md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">©2025 Yuyu Li Music LLC. All rights reserved.</p>
          <p className="mt-2 font-semibold tracking-[0.14em]">神都玉宇音乐</p>
        </div>
        <a href="mailto:music@yuyu-li.com" className="inline-flex items-center gap-3 font-semibold hover:text-[var(--theme-accent)]">
          <Mail className="size-4" />
          music@yuyu-li.com
        </a>
      </div>
    </footer>
  );
}

export function ThemePreviewPage({ themeKey }: { themeKey: ThemePreviewKey }) {
  const theme = getTheme(themeKey);

  return (
    <main
      className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)]"
      style={themeVars(theme)}
    >
      <ThemeHeader />
      <ThemeHero theme={theme} />
      <ReleaseSection />
      <MediaWritingSection theme={theme} />
      <ThemeNotes theme={theme} />
      <ThemeFooter />
    </main>
  );
}

export function ThemePreviewIndex() {
  return (
    <main className="min-h-screen bg-[#f4f0e8] px-5 py-12 text-[#111111] md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-[#111111] pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.26em] text-[#111111]/50">THEME PREVIEW / TEST ONLY</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-none md:text-7xl">官网配色风格对比</h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-[#111111]/68">
              这里是隔离预览入口。它不会替换正式 `/artist` 页面，只用于比较视觉方向。
            </p>
          </div>
          <Link
            href="/artist"
            className="inline-flex items-center justify-center border border-[#111111] px-6 py-4 text-sm font-black tracking-[0.16em] transition hover:bg-[#111111] hover:text-[#f4f0e8]"
          >
            回到正式版
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {themePreviews.map((theme) => (
            <Link
              key={theme.key}
              href={`/artist/theme-preview/${theme.key}`}
              className="group flex min-h-[34rem] flex-col overflow-hidden border border-[#111111] bg-white transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.16)]"
            >
              <div className="grid grid-cols-5">
                {theme.palette.map((color) => (
                  <span key={color} className="h-16" style={{ backgroundColor: color }} />
                ))}
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-bold tracking-[0.22em] text-[#111111]/45">{theme.cnName}</p>
                <h2 className="mt-5 text-4xl font-black leading-none">{theme.name}</h2>
                <p className="mt-6 text-base leading-8 text-[#111111]/68">{theme.read}</p>
                <div className="mt-auto flex items-center justify-between border-t border-[#111111] pt-6">
                  <span className="text-sm font-black tracking-[0.16em]">打开预览</span>
                  <ArrowUpRight className="size-5 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
