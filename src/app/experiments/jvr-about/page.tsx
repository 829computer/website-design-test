import { ArrowUpRight, Disc3, Menu, Play, Radio } from "lucide-react";
import Link from "next/link";

const navItems = [
  "NEWS 最新消息",
  "ARTISTS 藝人專區",
  "SCHEDULE 活動行程",
  "VIDEO 影音專區",
  "ABOUT 關於我們",
];

const principles = [
  {
    label: "JUST",
    title: "尊重創作",
    copy: "把製作、文字與聲音放在同一張工作台上，讓每一首作品先成立，再走向市場。",
  },
  {
    label: "VERY",
    title: "完整照顧",
    copy: "藝人不是名單，而是一段長期養成；每一次曝光都回到作品本身的重量。",
  },
  {
    label: "ROMANTIC",
    title: "音樂浪漫",
    copy: "浪漫不是裝飾，而是願意為好的聲音多等一拍，為創意保留餘白。",
  },
];

function WavePlaceholder() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      viewBox="0 0 900 700"
      fill="none"
      role="img"
    >
      <rect width="900" height="700" fill="#111111" />
      <circle cx="650" cy="180" r="210" fill="#f5f0e7" opacity="0.08" />
      <circle cx="652" cy="182" r="118" stroke="#f5f0e7" strokeWidth="1" opacity="0.28" />
      <circle cx="652" cy="182" r="34" fill="#f5f0e7" opacity="0.2" />
      <path
        d="M76 526C148 462 219 552 291 488C362 424 432 514 504 450C574 388 648 469 724 404C761 372 798 367 836 385"
        stroke="#f5f0e7"
        strokeWidth="2"
        opacity="0.7"
      />
      <path
        d="M82 563C154 499 226 589 298 525C369 461 439 551 511 487C581 425 654 506 731 441C766 411 800 404 838 420"
        stroke="#f5f0e7"
        strokeWidth="1"
        opacity="0.35"
      />
      <g opacity="0.38">
        {Array.from({ length: 28 }).map((_, index) => (
          <rect
            key={index}
            x={82 + index * 18}
            y={172 - (index % 7) * 9}
            width="2"
            height={180 + (index % 5) * 28}
            fill="#f5f0e7"
          />
        ))}
      </g>
      <path
        d="M84 112H334M84 136H252M84 160H292"
        stroke="#f5f0e7"
        strokeWidth="1"
        opacity="0.36"
      />
    </svg>
  );
}

function PosterGlyph() {
  return (
    <svg aria-hidden="true" viewBox="0 0 220 220" className="h-full w-full">
      <rect width="220" height="220" fill="#f4f0e8" />
      <circle cx="110" cy="110" r="78" fill="#111111" />
      <circle cx="110" cy="110" r="28" fill="#f4f0e8" />
      <circle cx="110" cy="110" r="9" fill="#111111" />
      <path d="M28 36H98M28 184H156M162 36H192" stroke="#111111" strokeWidth="5" />
    </svg>
  );
}

export default function JvrAboutExperimentPage() {
  return (
    <main className="min-h-screen bg-[#f4f0e8] text-[#111111]">
      <header className="fixed left-0 right-0 top-0 z-20 border-b border-white/15 bg-[#111111]/88 text-[#f4f0e8] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="group flex items-center gap-3" aria-label="Back to test home">
            <span className="grid size-9 place-items-center border border-[#f4f0e8]/45">
              <Disc3 className="size-4 transition-transform duration-500 group-hover:rotate-90" />
            </span>
            <span className="font-serif text-xl tracking-[0.18em]">JVR MUSIC</span>
          </Link>
          <nav className="hidden items-center gap-7 text-[11px] tracking-[0.18em] text-[#f4f0e8]/72 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#about"
                className="jvr-nav-link transition-colors duration-300 hover:text-[#f4f0e8]"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-xs tracking-[0.22em] text-[#f4f0e8]/70">
            <span className="hidden sm:inline">繁</span>
            <span className="hidden sm:inline">簡</span>
            <span className="hidden sm:inline">EN</span>
            <button className="grid size-9 place-items-center border border-[#f4f0e8]/30 transition-colors duration-300 hover:border-[#f4f0e8] lg:hidden">
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </header>

      <section className="relative min-h-[94svh] overflow-hidden bg-[#111111] pt-16 text-[#f4f0e8]">
        <div className="absolute inset-0 opacity-70">
          <WavePlaceholder />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#111111] to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(94svh-4rem)] max-w-7xl flex-col justify-end px-5 pb-10 md:px-8 md:pb-14">
          <div className="jvr-fade-in max-w-5xl">
            <p className="mb-5 flex items-center gap-3 text-xs tracking-[0.38em] text-[#f4f0e8]/62">
              <Radio className="size-4" />
              ABOUT 關於我們
            </p>
            <h1 className="font-serif text-[clamp(4.5rem,15vw,13rem)] leading-[0.78] tracking-normal">
              杰威爾
              <br />
              音樂
            </h1>
          </div>
          <div className="relative mt-10 grid gap-8 border-t border-[#f4f0e8]/25 pt-6 md:grid-cols-[1fr_0.8fr]">
            <p className="jvr-fade-in jvr-delay-1 max-w-2xl text-balance text-xl leading-8 text-[#f4f0e8]/78 md:text-2xl md:leading-10">
              源自 Jay、Vincent、JR 的金三角組合，一間把創作尊重放在商業速度之前的音樂公司。
            </p>
            <div className="jvr-fade-in jvr-delay-2 flex items-end justify-between gap-4 text-xs tracking-[0.24em] text-[#f4f0e8]/54 md:justify-end">
              <span>JUST VERY ROMANTIC</span>
              <Play className="size-4 fill-current" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.55fr_1fr] md:px-8 md:py-28">
        <aside className="top-24 h-fit md:sticky">
          <p className="mb-4 text-xs tracking-[0.34em] text-[#111111]/45">JVR / 2007</p>
          <div className="h-52 w-52 overflow-hidden border border-[#111111] md:h-64 md:w-64">
            <PosterGlyph />
          </div>
        </aside>
        <article className="max-w-3xl">
          <h2 className="border-b border-[#111111] pb-5 font-serif text-4xl leading-none md:text-6xl">
            關於JVR
          </h2>
          <div className="space-y-8 pt-8 text-lg leading-9 text-[#111111]/76 md:text-xl md:leading-10">
            <p>
              杰威爾音樂有限公司乃源自英文名 JVR Music 的音譯而來，而 JVR 則是周杰倫 Jay 與多年的合作夥伴方文山 Vincent、楊峻榮 JR 三人英文名縮寫的組合。
            </p>
            <p>
              一如對音樂品質的堅持，這支金三角組合的黃金團隊，持續帶領眾多 Fans 遨遊無限的影音世界。
            </p>
            <p>
              JVR 也可以被解釋為 Just Very Romantic。這份浪漫不是粉紅色的浪漫，而是對創作者的尊重與照顧；不是什麼都只以商業考量，而是讓每位藝人把自己的創意發揮到最大。
            </p>
          </div>
        </article>
      </section>

      <section className="border-y border-[#111111] bg-[#111111] text-[#f4f0e8]">
        <div className="mx-auto grid max-w-7xl divide-y divide-[#f4f0e8]/18 px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-8">
          {principles.map((item, index) => (
            <section key={item.label} className="group py-12 md:px-8 md:py-16">
              <p className="mb-10 flex items-center justify-between text-xs tracking-[0.34em] text-[#f4f0e8]/45">
                {item.label}
                <span>{String(index + 1).padStart(2, "0")}</span>
              </p>
              <h3 className="font-serif text-3xl md:text-4xl">{item.title}</h3>
              <p className="mt-5 max-w-sm text-base leading-8 text-[#f4f0e8]/68">{item.copy}</p>
              <div className="mt-10 h-px w-12 bg-[#f4f0e8]/40 transition-all duration-500 group-hover:w-28 group-hover:bg-[#f4f0e8]" />
            </section>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.2fr] md:px-8 md:py-28">
        <div>
          <p className="mb-5 text-xs tracking-[0.34em] text-[#111111]/45">OPEN ARCHIVE</p>
          <h2 className="font-serif text-5xl leading-none md:text-7xl">聲音留下，時間往前。</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="aspect-[4/5] overflow-hidden border border-[#111111] bg-[#111111]">
            <WavePlaceholder />
          </div>
          <div className="flex flex-col justify-between border-t border-[#111111] py-5">
            <p className="text-xl leading-9 text-[#111111]/72">
              這個測試頁刻意不用任何原站照片，只用抽象唱片、波形與海報比例的 SVG 視覺，保留音樂網站的節奏與空間。
            </p>
            <a
              href="https://www.jvrmusic.com/about"
              className="mt-10 inline-flex w-fit items-center gap-2 border-b border-[#111111] pb-1 text-sm tracking-[0.18em]"
            >
              SOURCE
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#111111] px-5 py-10 text-sm text-[#111111]/60 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <p className="font-serif text-2xl text-[#111111]">杰威爾音樂有限公司</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>© Copyright 2019</span>
            <span>台北市松山區長春路451號11樓</span>
            <span>886-2-2547-5588</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
