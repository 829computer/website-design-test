import Link from "next/link";
import type { CSSProperties } from "react";

const titleFonts = [
  {
    key: "noto-serif-sc",
    name: "Noto Serif SC",
    label: "简体宋体标题",
    stack: '"Noto Serif SC", "Noto Serif CJK SC", "Source Han Serif SC", "Songti SC", "STSong", serif',
    note: "适合简体中文标题，字形端正，气质正式，做官网首页和栏目标题比较稳。",
  },
  {
    key: "noto-serif-tc",
    name: "Noto Serif TC",
    label: "繁体宋体标题",
    stack: '"Noto Serif TC", "Noto Serif CJK TC", "Source Han Serif TC", "Songti TC", "PMingLiU", serif',
    note: "繁体字形更有出版物气质，适合繁中页面、唱片内页、艺术家档案感。",
  },
  {
    key: "source-han-serif",
    name: "Source Han Serif",
    label: "思源宋体标题",
    stack:
      '"Source Han Serif SC", "Source Han Serif CN", "Source Han Serif TC", "Noto Serif CJK SC", "Songti SC", serif',
    note: "更像完整品牌字体系统，适合中英文长期统一维护，标题高级感较强。",
  },
];

const bodyFonts = [
  {
    key: "noto-sans-sc",
    name: "Noto Sans SC",
    label: "简体黑体正文",
    stack:
      '"Noto Sans SC", "Noto Sans CJK SC", "Source Han Sans SC", "PingFang SC", "Hiragino Sans GB", sans-serif',
    note: "适合简体正文，耐读、现代、不会抢标题风头。",
  },
  {
    key: "noto-sans-tc",
    name: "Noto Sans TC",
    label: "繁体黑体正文",
    stack:
      '"Noto Sans TC", "Noto Sans CJK TC", "Source Han Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif',
    note: "繁体页面正文更稳，阅读感比系统 fallback 更统一。",
  },
  {
    key: "source-han-sans",
    name: "Source Han Sans",
    label: "思源黑体正文",
    stack:
      '"Source Han Sans SC", "Source Han Sans CN", "Source Han Sans TC", "Noto Sans CJK SC", "PingFang SC", sans-serif',
    note: "适合做正式品牌系统正文，干净、专业、兼容简繁。",
  },
];

const navSamples = ["首页", "关于我", "影音专区", "音乐专区", "创作札记"];

function fontStyle(variable: string, stack: string) {
  return {
    [variable]: stack,
  } as CSSProperties;
}

function FontSpecLine({ stack }: { stack: string }) {
  return (
    <p className="mt-5 break-words rounded-[1.25rem] bg-[#241d18]/5 px-4 py-3 text-xs leading-6 text-[#241d18]/48">
      {stack}
    </p>
  );
}

function TitleFontCard({ font }: { font: (typeof titleFonts)[number] }) {
  return (
    <article
      className="rounded-[2rem] border border-[#241d18]/10 bg-[#fdfbf7] p-2 shadow-[0_26px_90px_rgba(36,29,24,0.10)]"
      style={fontStyle("--font-title-test", font.stack)}
    >
      <div className="h-full rounded-[calc(2rem-0.5rem)] bg-[#f8f1e7] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.72)]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#76644f]">{font.label}</p>
        <h2 className="mt-4 text-3xl font-black leading-none text-[#241d18]">{font.name}</h2>
        <h3 className="mt-9 font-[var(--font-title-test)] text-[clamp(3.1rem,7vw,6.5rem)] font-semibold leading-[0.98] tracking-[0.02em] text-[#241d18]">
          声音先抵达，名字慢慢被记住。
        </h3>
        <p className="mt-7 font-[var(--font-title-test)] text-3xl font-semibold leading-tight text-[#241d18]/80">
          旋律抵达之前，先出现的是一个画面
        </p>
        <p className="mt-7 text-base leading-8 text-[#241d18]/62">{font.note}</p>
        <FontSpecLine stack={font.stack} />
      </div>
    </article>
  );
}

function BodyFontCard({ font }: { font: (typeof bodyFonts)[number] }) {
  return (
    <article
      className="rounded-[2rem] border border-[#241d18]/10 bg-[#fdfbf7] p-2 shadow-[0_26px_90px_rgba(36,29,24,0.10)]"
      style={fontStyle("--font-body-test", font.stack)}
    >
      <div className="h-full rounded-[calc(2rem-0.5rem)] bg-[#f8f1e7] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.72)]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#76644f]">{font.label}</p>
        <h2 className="mt-4 text-3xl font-black leading-none text-[#241d18]">{font.name}</h2>
        <div className="mt-8 flex flex-wrap gap-3 font-[var(--font-body-test)] text-sm font-medium text-[#241d18]/62">
          {navSamples.map((item) => (
            <span key={item} className="rounded-full bg-white/58 px-4 py-2">
              {item}
            </span>
          ))}
        </div>
        <p className="mt-8 font-[var(--font-body-test)] text-xl leading-10 text-[#241d18]/68">
          这里会成为作品、MV、演出、订阅与所有外部平台的统一入口。中文正文需要干净、耐读，避免太文艺导致长篇阅读疲劳。
        </p>
        <p className="mt-6 font-[var(--font-body-test)] text-base leading-8 text-[#241d18]/60">
          很多歌并不是从旋律开始的。它先像一个画面停在脑子里：房间里有一点光，空气里有没说完的话，人的情绪比语言早一点抵达。
        </p>
        <p className="mt-7 text-base leading-8 text-[#241d18]/62">{font.note}</p>
        <FontSpecLine stack={font.stack} />
      </div>
    </article>
  );
}

function PairCard({
  titleFont,
  bodyFont,
}: {
  titleFont: (typeof titleFonts)[number];
  bodyFont: (typeof bodyFonts)[number];
}) {
  return (
    <article
      className="rounded-[1.75rem] border border-[#241d18]/10 bg-[#fdfbf7] p-2"
      style={
        {
          "--font-title-test": titleFont.stack,
          "--font-body-test": bodyFont.stack,
        } as CSSProperties
      }
    >
      <div className="h-full rounded-[calc(1.75rem-0.5rem)] bg-[#f8f1e7] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.72)]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#76644f]">
          {titleFont.name} + {bodyFont.name}
        </p>
        <h3 className="mt-5 font-[var(--font-title-test)] text-4xl font-semibold leading-tight text-[#241d18]">
          创作札记
        </h3>
        <p className="mt-4 font-[var(--font-body-test)] text-base leading-8 text-[#241d18]/64">
          这里存放书籍作品、歌词手记、创作理念、制作笔记和长文博客。标题需要有气质，正文需要安静耐读。
        </p>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#efe6d8] px-4 py-10 text-[#241d18] md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-8 border-b border-[#241d18]/16 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#76644f]">
              Chinese Font Preview / Test only
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-none md:text-7xl">
              中文标题与正文平行比较
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-[#241d18]/66">
              按你指定的字体方向分开比较：先看中文大标题，再看中文正文，最后看标题与正文搭配。
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#241d18]/48">
              说明：此页使用字体栈做本地预览。如果某个字体没有安装，浏览器会使用同类 fallback。最终上线时建议正式引入选中的字体文件。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/artist/high-end-preview"
              className="rounded-full bg-[#241d18] px-6 py-4 text-sm font-semibold tracking-[0.14em] text-[#fdfbf7]"
            >
              高端预览
            </Link>
            <Link
              href="/artist/theme-preview"
              className="rounded-full bg-white/58 px-6 py-4 text-sm font-semibold tracking-[0.14em] text-[#241d18]"
            >
              配色预览
            </Link>
          </div>
        </header>

        <section className="py-14 md:py-20">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#76644f]">Title fonts</p>
            <h2 className="mt-4 text-4xl font-black leading-none md:text-6xl">中文大标题字体</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {titleFonts.map((font) => (
              <TitleFontCard key={font.key} font={font} />
            ))}
          </div>
        </section>

        <section className="border-t border-[#241d18]/16 py-14 md:py-20">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#76644f]">Body fonts</p>
            <h2 className="mt-4 text-4xl font-black leading-none md:text-6xl">中文正文字体</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {bodyFonts.map((font) => (
              <BodyFontCard key={font.key} font={font} />
            ))}
          </div>
        </section>

        <section className="border-t border-[#241d18]/16 py-14 md:py-20">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#76644f]">Pairing matrix</p>
            <h2 className="mt-4 text-4xl font-black leading-none md:text-6xl">标题 + 正文搭配矩阵</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {titleFonts.flatMap((titleFont) =>
              bodyFonts.map((bodyFont) => (
                <PairCard key={`${titleFont.key}-${bodyFont.key}`} titleFont={titleFont} bodyFont={bodyFont} />
              )),
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
