import { ArrowUpRight, Mail, Menu, Music2, Radio, Video } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";

const styleVars = {
  "--font-cn-title":
    '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif TC", "Noto Serif SC", "Source Han Serif SC", "Songti SC", "STSong", serif',
  "--font-cn-body":
    '"Noto Sans SC", "Noto Sans TC", "Source Han Sans SC", "Source Han Sans TC", "PingFang SC", "Hiragino Sans GB", sans-serif',
} as CSSProperties;

const navItems = [
  ["HOME", "首页"],
  ["ABOUT", "关于我"],
  ["ARTISTS", "艺人专区"],
  ["VIDEOS", "影音专区"],
  ["MUSIC", "音乐专区"],
  ["NEWS", "最新消息"],
  ["WRITINGS", "创作札记"],
];

const releases = [
  ["Single TODO", "单曲 / 发行占位"],
  ["EP TODO", "EP / 发行占位"],
  ["Album TODO", "专辑 / 发行占位"],
];

const menuSections = [
  ["ABOUT", "关于我"],
  ["ARTISTS", "艺人专区"],
  ["VIDEOS", "影音专区"],
  ["MUSIC", "音乐专区"],
  ["NEWS", "最新消息"],
  ["WRITINGS", "创作札记"],
];

const musicPlatforms = ["Spotify", "Apple Music", "YouTube Music", "网易云音乐", "QQ 音乐", "Bandcamp"];
const videoPlatforms = ["YouTube", "Bilibili", "TikTok", "抖音", "Instagram Reels"];

function GoldButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 bg-[#c7a85b] px-6 py-4 font-[var(--font-cn-body)] text-sm font-bold tracking-[0.14em] text-[#0f0f0d] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#efe1b8]"
    >
      {children}
      <span className="grid size-8 place-items-center rounded-full bg-[#0f0f0d]/10 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-1">
        ↗
      </span>
    </a>
  );
}

function MoodImage({ seed, label, className = "" }: { seed: string; label: string; className?: string }) {
  return (
    <div className={`overflow-hidden border border-[#c7a85b]/36 bg-[#1b1a16] ${className}`} role="img" aria-label={label}>
      <div
        className="h-full min-h-72 bg-cover bg-center opacity-[0.78] mix-blend-luminosity"
        style={{ backgroundImage: `url(https://picsum.photos/seed/${seed}/1200/900)` }}
      />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#c7a85b]/24 bg-[#0f0f0d]/90 text-[#f2eee4] backdrop-blur-xl">
      <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/artist/midnight-ming-preview" className="flex min-w-0 items-center gap-4">
          <span className="grid size-12 place-items-center border border-[#c7a85b]/45 text-[#c7a85b]">
            <Radio className="size-5" />
          </span>
          <span className="leading-none">
            <span className="block text-xl font-black tracking-[0.18em] md:text-3xl">YUYU LI</span>
            <span className="mt-2 block font-[var(--font-cn-title)] text-sm font-semibold tracking-[0.28em] text-[#f2eee4]/76 md:text-base">
              李玉宇
            </span>
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-x-5 text-[#f2eee4]/68 xl:flex">
          {navItems.map(([en, cn]) => (
            <span key={en} className="flex min-w-[5.1rem] flex-col items-center gap-1.5 text-center leading-none">
              <span className="text-[14px] font-semibold tracking-[0.14em]">{en}</span>
              <span className="font-[var(--font-cn-body)] text-[14px] font-medium tracking-[0.1em]">{cn}</span>
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/artist"
            className="hidden border border-[#c7a85b]/36 px-4 py-3 text-xs font-bold tracking-[0.16em] text-[#f2eee4]/78 transition hover:bg-[#c7a85b] hover:text-[#0f0f0d] md:block"
          >
            原版
          </Link>
          <button className="grid size-11 place-items-center border border-[#c7a85b]/30 text-[#f2eee4] xl:hidden">
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f0f0d] text-[#f2eee4]">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[12%] top-[12%] h-80 w-80 rounded-full bg-[#c7a85b]/18 blur-3xl" />
        <div className="absolute bottom-[5%] right-[8%] h-96 w-96 rounded-full bg-[#5e4a29]/36 blur-3xl" />
      </div>
      <div className="relative mx-auto grid min-h-[calc(100dvh-6rem)] max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="pb-4">
          <p className="mb-7 inline-flex items-center gap-3 font-[var(--font-cn-body)] text-xs font-bold tracking-[0.24em] text-[#c7a85b]">
            <Music2 className="size-4" />
            词曲作者 / 独立音乐人
          </p>
          <h1 className="max-w-5xl font-[var(--font-cn-title)] text-[clamp(4rem,10vw,9.5rem)] font-semibold leading-[0.94] tracking-[0.02em]">
            声音先抵达，名字慢慢被记住。
          </h1>
          <p className="mt-9 max-w-2xl font-[var(--font-cn-body)] text-xl leading-10 text-[#f2eee4]/72">
            这里会成为作品、MV、演出、订阅与所有外部平台的统一入口。第一版先保持静态、轻量、可升级。
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <GoldButton href="#latest">听最新作品</GoldButton>
            <a
              href="#newsletter"
              className="inline-flex items-center border-b border-[#f2eee4]/70 pb-2 font-[var(--font-cn-body)] text-sm font-bold tracking-[0.14em] text-[#f2eee4]/82 transition hover:text-[#c7a85b]"
            >
              加入名单
            </a>
          </div>
        </div>
        <MoodImage seed="yuyu-li-midnight-ming-hero" label="Midnight gold musician visual" className="aspect-[4/5]" />
      </div>
    </section>
  );
}

function LatestRelease() {
  return (
    <section id="latest" className="bg-[#f2eee4] px-5 py-20 text-[#0f0f0d] md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.54fr_1fr]">
        <aside className="top-32 h-fit md:sticky">
          <p className="mb-4 font-[var(--font-cn-body)] text-xs font-bold tracking-[0.28em] text-[#0f0f0d]/45">
            RELEASE / TODO
          </p>
          <div className="aspect-square overflow-hidden border border-[#0f0f0d] bg-[#0f0f0d]">
            <div
              className="h-full bg-cover bg-center opacity-[0.72] mix-blend-luminosity"
              style={{ backgroundImage: "url(https://picsum.photos/seed/yuyu-li-release-cover/900/900)" }}
            />
          </div>
        </aside>
        <article>
          <h2 className="border-b border-[#0f0f0d] pb-6 font-[var(--font-cn-title)] text-5xl font-semibold leading-none md:text-7xl">
            最新作品
          </h2>
          <p className="max-w-3xl pt-8 font-[var(--font-cn-body)] text-xl leading-10 text-[#0f0f0d]/72">
            单曲 / EP / 专辑封面先用占位图，后续替换真实发行素材。
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {releases.map(([title, meta]) => (
              <div key={title} className="border-t border-[#0f0f0d] pt-5">
                <p className="font-[var(--font-cn-body)] text-xs font-bold tracking-[0.24em] text-[#0f0f0d]/44">
                  {meta}
                </p>
                <h3 className="mt-7 font-[var(--font-cn-title)] text-3xl font-semibold">{title}</h3>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function SectionMenu() {
  return (
    <section className="bg-[#050504] px-5 py-16 text-center md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        {menuSections.map(([en, cn]) => (
          <a key={en} href="#preview-only" className="group block border-b border-[#c7a85b]/12 py-8 last:border-b-0 md:py-10">
            <span className="block text-[clamp(4rem,11vw,9rem)] font-black uppercase leading-[0.78] tracking-normal text-[#c7a85b] transition-colors duration-300 group-hover:text-[#f2eee4]">
              {en}
            </span>
            <span className="mt-5 block font-[var(--font-cn-title)] text-[clamp(1.8rem,4vw,3.4rem)] font-semibold leading-none tracking-[0.08em] text-white">
              {cn}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function PlatformLinks({ title, items, icon }: { title: string; items: string[]; icon: "music" | "video" }) {
  const Icon = icon === "music" ? Music2 : Video;
  return (
    <section className="border-t border-[#0f0f0d] pt-7">
      <h2 className="flex items-center gap-4 font-[var(--font-cn-title)] text-4xl font-semibold md:text-6xl">
        <Icon className="size-7 text-[#8f6d16]" />
        {title}
      </h2>
      <div className="mt-9 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <a
            key={item}
            href="#todo"
            className="group flex items-center justify-between border border-[#0f0f0d] px-4 py-4 font-[var(--font-cn-body)] text-sm font-semibold tracking-[0.12em] transition-colors hover:bg-[#0f0f0d] hover:text-[#f2eee4]"
          >
            {item}
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </section>
  );
}

function Platforms() {
  return (
    <section className="bg-[#f2eee4] px-5 py-20 text-[#0f0f0d] md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <PlatformLinks title="听歌入口" items={musicPlatforms} icon="music" />
        <PlatformLinks title="影像入口" items={videoPlatforms} icon="video" />
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="newsletter" className="bg-[#0f0f0d] px-5 py-16 text-[#f2eee4] md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-5 flex items-center gap-3 font-[var(--font-cn-body)] text-xs tracking-[0.3em] text-[#f2eee4]/50">
            <Mail className="size-4" />
            NEWSLETTER
          </p>
          <h2 className="font-[var(--font-cn-title)] text-5xl font-semibold leading-none md:text-7xl">
            加入发行通知
          </h2>
        </div>
        <div className="flex flex-col justify-center">
          <p className="max-w-3xl font-[var(--font-cn-body)] text-2xl font-medium leading-10 text-[#f2eee4] md:text-3xl md:leading-[1.45]">
            留下邮箱，发新歌、MV、demo 或演出时优先通知！
          </p>
          <div className="mt-10 border border-[#c7a85b]/32 bg-[#1b1a16] p-6">
            <p className="font-[var(--font-cn-body)] text-sm leading-7 text-[#f2eee4]/58">
              Tally 表单区域占位。正式版本可继续使用当前 Newsletter 嵌入。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#242424] bg-[#050504] px-5 py-12 text-[#8d8d8d] md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-2 font-[var(--font-cn-body)] text-base font-semibold tracking-[0.02em] md:text-lg">
            <p>©2025 Yuyu Li Music LLC. All rights reserved.</p>
            <p className="font-[var(--font-cn-title)] tracking-[0.14em] text-[#8d8d8d]/78">神都玉宇音乐</p>
          </div>
          <div className="hidden h-10 w-px bg-[#8d8d8d]/55 md:block" />
          <div className="h-px w-28 bg-[#8d8d8d]/45 md:hidden" />
          <div className="flex flex-col gap-1 font-[var(--font-cn-body)] text-base font-semibold tracking-[0.06em] text-[#8d8d8d]/84 md:text-lg">
            <a className="transition-colors hover:text-[#f2eee4]" href="mailto:music@yuyu-li.com">
              商务邮箱: music@yuyu-li.com
            </a>
            <a className="transition-colors hover:text-[#f2eee4]" href="tel:+16166259555">
              商务电话: +1 (616) 625-9555
            </a>
          </div>
        </div>
        <Link
          href="/artist/theme-preview/midnight-gold"
          className="font-[var(--font-cn-body)] text-lg font-bold uppercase tracking-[0.08em] transition-colors hover:text-[#f2eee4] md:text-xl"
        >
          对照午夜金原预览
        </Link>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main style={styleVars} className="min-h-screen bg-[#f2eee4] text-[#0f0f0d]">
      <Header />
      <Hero />
      <LatestRelease />
      <SectionMenu />
      <Platforms />
      <Newsletter />
      <Footer />
    </main>
  );
}
