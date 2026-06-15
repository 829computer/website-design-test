import {
  ArrowUpRight,
  BookOpenText,
  Disc3,
  Mail,
  Menu,
  Newspaper,
  Play,
  Radio,
  Users,
} from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ShareActions } from "./share-actions";

type Locale = "zh-cn" | "zh-tw" | "en";
type Section =
  | "home"
  | "about"
  | "artists"
  | "video"
  | "music"
  | "news"
  | "writings"
  | "terms-conditions";

type ArtistSiteProps = {
  locale: Locale;
  section: Section;
};

const localeLabels: Record<Locale, string> = {
  "zh-cn": "简",
  "zh-tw": "繁",
  en: "EN",
};

const sectionPaths: Exclude<Section, "home">[] = ["about", "artists", "video", "music", "news", "writings"];

const sectionMeta: Record<
  Section,
  {
    en: string;
    zhCn: string;
    zhTw: string;
    eyebrow: string;
  }
> = {
  home: {
    en: "HOME",
    zhCn: "首页",
    zhTw: "首頁",
    eyebrow: "ENTRY",
  },
  about: {
    en: "ABOUT",
    zhCn: "关于我",
    zhTw: "關於我",
    eyebrow: "PROFILE",
  },
  artists: {
    en: "ARTISTS",
    zhCn: "艺人专区",
    zhTw: "藝人專區",
    eyebrow: "ROSTER",
  },
  video: {
    en: "VIDEOS",
    zhCn: "影音专区",
    zhTw: "影音專區",
    eyebrow: "VISUAL",
  },
  music: {
    en: "MUSIC",
    zhCn: "音乐专区",
    zhTw: "音樂專區",
    eyebrow: "LISTEN",
  },
  news: {
    en: "NEWS",
    zhCn: "最新消息",
    zhTw: "最新消息",
    eyebrow: "UPDATE",
  },
  writings: {
    en: "WRITINGS",
    zhCn: "创作札记",
    zhTw: "創作札記",
    eyebrow: "BOOKS / IDEAS",
  },
  "terms-conditions": {
    en: "TERMS",
    zhCn: "条款及细则",
    zhTw: "條款及細則",
    eyebrow: "LEGAL",
  },
};

const content = {
  "zh-cn": {
    brand: "YUYU LI",
    brandZh: "李玉宇",
    eyebrow: "词曲作者 / 独立音乐人",
    heroTitle: "声音先抵达，名字慢慢被记住。",
    heroCopy: "这里会成为作品、MV、演出、订阅与所有外部平台的统一入口。第一版先保持静态、轻量、可升级。",
    latestTitle: "最新作品",
    latestCopy: "单曲 / EP / 专辑封面先用占位图，后续替换真实发行素材。",
    listenTitle: "听歌入口",
    videoTitle: "影像入口",
    aboutTitle: "关于音乐人",
    artistsTitle: "艺人专区",
    newsTitle: "最新消息",
    writingsTitle: "创作札记",
    termsTitle: "条款及细则",
    newsletterTitle: "加入发行通知",
    newsletterCopy: "留下邮箱，发新歌、MV、demo 或演出时优先通知！",
    artistsCopy: "这里可以放合作艺人、项目伙伴、制作对象或未来厂牌 roster。第一版先留结构。",
    newsCopy: "这里存放发歌、MV、演出、采访、合作和公告。第一版先用占位消息。",
    writingsCopy: "这里存放书籍作品、歌词手记、创作理念、制作笔记和长文博客。",
    termsIntro:
      "感谢阁下浏览及使用神都玉宇音乐官方网站（“本网站”）。本网站由 Yuyu Li Music LLC 拥有及运营，本条款及细则适用于所有访问、浏览或使用本网站的用户。阁下使用本网站或本网站任何部分，即表示阁下已阅读、理解并同意受本条款及细则约束；如阁下不同意相关内容，请停止浏览及使用本网站。",
    termsUpdate:
      "本网站可不时更新、修订或补充本条款及细则。使用者应定期查阅本页面，以了解最新版本。阁下继续访问或使用本网站，即视为同意受当时公布的最新条款及细则约束。",
    copyrightTitle: "著作权保护声明",
    copyrightCopy:
      "本网站所呈现的图片、文字、影像、录音、音乐、图形、设计及其他内容，部分可能引用或转载自公开媒体、传播平台或第三方资料来源；凡属引用或转载者，本网站将尽可能标明来源，并感谢相关创作者与权利人。若浏览者需要进一步使用该等内容，请自行向原权利人取得授权。除已标注来源的第三方内容外，本网站其余内容及其包含的语文、音乐、美术、摄影、图形、视听、录音、软件或其他作品，均由 Yuyu Li Music LLC 或相关授权方拥有或合法授权使用，并受适用法律保护。未经事前书面同意，请勿复制、转载、改编、上传、公开传播、商业使用或以其他方式提供予第三方使用。若任何用户或合作方自行提交资料，应自行确认其合法性及授权状态；如权利人认为本网站内容涉及权利疑虑，可通过本网站公布的联系渠道通知我们处理。在事实厘清前，本网站有权暂时移除或限制相关内容的展示。",
    ctaListen: "听最新作品",
    ctaNewsletter: "加入名单",
    sourceNote: "当前链接为占位，后续替换为真实账号。",
  },
  "zh-tw": {
    brand: "YUYU LI",
    brandZh: "李玉宇",
    eyebrow: "詞曲作者 / 獨立音樂人",
    heroTitle: "聲音先抵達，名字慢慢被記住。",
    heroCopy: "這裡會成為作品、MV、演出、訂閱與所有外部平台的統一入口。第一版先保持靜態、輕量、可升級。",
    latestTitle: "最新作品",
    latestCopy: "單曲 / EP / 專輯封面先用佔位圖，後續替換真實發行素材。",
    listenTitle: "聽歌入口",
    videoTitle: "影像入口",
    aboutTitle: "關於音樂人",
    artistsTitle: "藝人專區",
    newsTitle: "最新消息",
    writingsTitle: "創作札記",
    termsTitle: "條款及細則",
    newsletterTitle: "加入發行通知",
    newsletterCopy: "留下 email，發新歌、MV、demo 或演出時優先通知！",
    artistsCopy: "這裡可以放合作藝人、項目夥伴、製作對象或未來廠牌 roster。第一版先留結構。",
    newsCopy: "這裡存放發歌、MV、演出、採訪、合作和公告。第一版先用佔位消息。",
    writingsCopy: "這裡存放書籍作品、歌詞手記、創作理念、製作筆記和長文博客。",
    termsIntro:
      "感謝閣下瀏覽及使用神都玉宇音樂官方網站（「本網站」）。本網站由 Yuyu Li Music LLC 擁有及營運，本條款及細則適用於所有瀏覽、訪問或使用本網站之使用者。閣下使用本網站或本網站任何部分，即表示閣下已閱讀、理解並同意受本條款及細則約束；如閣下不同意相關內容，請停止瀏覽及使用本網站。",
    termsUpdate:
      "本網站可不時更新、修訂或補充本條款及細則。使用者應定期查閱本頁面，以了解最新版本。閣下繼續訪問或使用本網站，即視為同意受當時公布的最新條款及細則約束。",
    copyrightTitle: "著作權保護聲明",
    copyrightCopy:
      "本網站所呈現的圖片、文字、影像、錄音、音樂、圖形、設計及其他內容，部分可能引用或轉載自公開媒體、傳播平台或第三方資料來源；凡屬引用或轉載者，本網站將盡可能標明來源，並感謝相關創作者與權利人。若瀏覽者需要進一步使用該等內容，請自行向原權利人取得授權。除已標註來源的第三方內容外，本網站其餘內容及其包含的語文、音樂、美術、攝影、圖形、視聽、錄音、軟體或其他作品，均由 Yuyu Li Music LLC 或相關授權方擁有或合法授權使用，並受適用法律保護。未經事前書面同意，請勿複製、轉載、改編、上載、公開傳播、商業使用或以其他方式提供予第三方使用。若任何使用者或合作方自行提交資料，應自行確認其合法性及授權狀態；如權利人認為本網站內容涉及權利疑慮，可透過本網站公布的聯繫渠道通知我們處理。在事實釐清前，本網站有權暫時移除或限制相關內容的展示。",
    ctaListen: "聽最新作品",
    ctaNewsletter: "加入名單",
    sourceNote: "目前連結為佔位，後續替換為真實帳號。",
  },
  en: {
    brand: "YUYU LI",
    brandZh: "李玉宇",
    eyebrow: "Songwriter / Independent Artist",
    heroTitle: "Let the music arrive first. Let the name stay.",
    heroCopy: "A static, lightweight home for releases, videos, live dates, newsletter signup, and every platform link.",
    latestTitle: "Latest Release",
    latestCopy: "Single, EP, and album artwork use placeholders for now. Replace them with real release assets later.",
    listenTitle: "Listen",
    videoTitle: "Watch",
    aboutTitle: "About the Artist",
    artistsTitle: "Artists",
    newsTitle: "News",
    writingsTitle: "Writings",
    termsTitle: "Terms & Conditions",
    newsletterTitle: "Join the release list",
    newsletterCopy: "Leave your email for early updates on new songs, MVs, demos, and shows.",
    artistsCopy: "A home for collaborators, featured artists, project partners, or a future roster. Structure first, real names later.",
    newsCopy: "Release notes, videos, shows, press, collaborations, and announcements will live here.",
    writingsCopy: "A library for books, lyrics notes, creative philosophy, production journals, and long-form posts.",
    termsIntro:
      "Thank you for visiting and using the official website of 神都玉宇音乐 / Yuyu Li Music LLC (the “Website”). The Website is owned and operated by Yuyu Li Music LLC. These terms and conditions apply to all visitors and users of the Website. By accessing or using the Website, or any part of it, you confirm that you have read, understood, and agreed to be bound by these terms. If you do not agree, please do not use the Website.",
    termsUpdate:
      "The Website may update, revise, or supplement these terms from time to time. Users should review this page periodically for the latest version. Continued access to or use of the Website means you agree to the latest published version.",
    copyrightTitle: "Copyright Protection Statement",
    copyrightCopy:
      "Images, text, videos, recordings, music, graphics, designs, and other materials appearing on this Website may include content quoted from or referenced to public media, platforms, or third-party sources. Where such material is used, the Website will make reasonable efforts to identify the source and thank the relevant creators and rights holders. If a visitor wishes to reuse third-party material, permission should be obtained from the original rights holder. Except for clearly credited third-party content, the remaining materials on this Website, including literary, musical, artistic, photographic, graphic, audiovisual, sound recording, software, and other works, are owned by or licensed to Yuyu Li Music LLC or its relevant licensors and are protected by applicable law. Without prior written consent, please do not copy, repost, adapt, upload, publicly distribute, commercially exploit, or otherwise make such materials available to others. Users or collaborators who submit materials are responsible for confirming the legality and authorization of their submissions. If a rights holder believes that content on this Website raises rights concerns, they may contact us through the published channels. Before facts are confirmed, the Website may temporarily remove or restrict access to the relevant material.",
    ctaListen: "Listen now",
    ctaNewsletter: "Join list",
    sourceNote: "Links are placeholders and should be replaced with real accounts.",
  },
} satisfies Record<Locale, Record<string, unknown>>;

const musicPlatforms = ["Spotify", "Apple Music", "YouTube Music", "网易云音乐", "QQ 音乐", "Bandcamp"];
const musicCategories = {
  albums: { zhCn: "专辑", zhTw: "專輯", en: "Albums" },
  singles: { zhCn: "单曲", zhTw: "單曲", en: "Singles" },
  other: { zhCn: "其他", zhTw: "其他", en: "Other" },
} as const;

type MusicCategoryKey = keyof typeof musicCategories;
type MusicTone = "dawn" | "noir" | "gold" | "rose" | "green" | "blue" | "ember" | "paper";
type MusicWork = {
  slug: string;
  date: string;
  artist: string;
  title: string;
  category: MusicCategoryKey;
  typeLabel: string;
  tracks: string[];
  tone: MusicTone;
};

const musicWorks: MusicWork[] = [
  {
    slug: "blink-of-eternity",
    date: "2026.08.28",
    artist: "Yuyu Li",
    title: "瞬间的瞬间",
    category: "albums",
    typeLabel: "专辑",
    tracks: ["瞬间的瞬间", "慢速光年", "雨后留声"],
    tone: "paper",
  },
  {
    slug: "skibidi-demo",
    date: "2026.07.19",
    artist: "Yuyu Li",
    title: "Skibidi Demo Version",
    category: "singles",
    typeLabel: "单曲",
    tracks: ["Skibidi Demo Version"],
    tone: "gold",
  },
  {
    slug: "hold-me-close",
    date: "2026.06.21",
    artist: "Yuyu Li",
    title: "在崩塌前抱紧我",
    category: "singles",
    typeLabel: "单曲",
    tracks: ["在崩塌前抱紧我"],
    tone: "noir",
  },
  {
    slug: "turn-of-a-page",
    date: "2026.05.15",
    artist: "Yuyu Li",
    title: "Turn of a Page",
    category: "singles",
    typeLabel: "单曲",
    tracks: ["Turn of a Page"],
    tone: "ember",
  },
  {
    slug: "above-the-fray",
    date: "2026.04.03",
    artist: "Yuyu Li",
    title: "光阴副本",
    category: "other",
    typeLabel: "器乐版本",
    tracks: ["光阴副本 Piano Version", "光阴副本 String Version"],
    tone: "green",
  },
  {
    slug: "snow-and-thunder",
    date: "2026.03.01",
    artist: "Yuyu Li",
    title: "你想的雪与雷",
    category: "singles",
    typeLabel: "单曲",
    tracks: ["你想的雪与雷"],
    tone: "rose",
  },
  {
    slug: "unreleased-room-takes",
    date: "2025.12.12",
    artist: "Yuyu Li",
    title: "Room Takes 01",
    category: "other",
    typeLabel: "录音版本",
    tracks: ["Room Take A", "Room Take B"],
    tone: "blue",
  },
  {
    slug: "first-light-archive",
    date: "2025.10.09",
    artist: "Yuyu Li",
    title: "First Light Archive",
    category: "albums",
    typeLabel: "作品集",
    tracks: ["First Light", "Archive One", "Signal"],
    tone: "dawn",
  },
];
const videoPlatforms = ["YouTube", "Bilibili", "TikTok", "抖音", "Instagram Reels"];
const videoItems = [
  {
    date: "2026.06.12",
    artist: "Yuyu Li",
    title: "声线抵达之前 Official Visualizer",
    href: "https://www.youtube.com/watch?v=placeholder-video-01",
    tone: "field",
  },
  {
    date: "2026.05.28",
    artist: "Yuyu Li",
    title: "未完成的海 Live Session",
    href: "https://www.youtube.com/watch?v=placeholder-video-02",
    tone: "sea",
  },
  {
    date: "2026.05.06",
    artist: "Yuyu Li",
    title: "I Do Not Fade MV",
    href: "https://www.youtube.com/watch?v=placeholder-video-03",
    tone: "stage",
  },
  {
    date: "2026.04.19",
    artist: "Yuyu Li",
    title: "夜间制作笔记 Studio Cut",
    href: "https://www.youtube.com/watch?v=placeholder-video-04",
    tone: "studio",
  },
  {
    date: "2026.03.31",
    artist: "Yuyu Li",
    title: "Gold Light Town Lyric Video",
    href: "https://www.youtube.com/watch?v=placeholder-video-05",
    tone: "gold",
  },
  {
    date: "2026.03.08",
    artist: "Yuyu Li",
    title: "Children of the Sun Concept Trailer",
    href: "https://www.youtube.com/watch?v=placeholder-video-06",
    tone: "red",
  },
  {
    date: "2026.02.12",
    artist: "Yuyu Li",
    title: "Single Ticket Acoustic Take",
    href: "https://www.youtube.com/watch?v=placeholder-video-07",
    tone: "portrait",
  },
  {
    date: "2026.01.18",
    artist: "Yuyu Li",
    title: "最后一天的爱恋 Short Film",
    href: "https://www.youtube.com/watch?v=placeholder-video-08",
    tone: "amber",
  },
  {
    date: "2025.12.23",
    artist: "Yuyu Li",
    title: "你没等我去的旧金山 Demo Film",
    href: "https://www.youtube.com/watch?v=placeholder-video-09",
    tone: "room",
  },
  {
    date: "2025.11.30",
    artist: "Yuyu Li",
    title: "From Here On Rehearsal Archive",
    href: "https://www.youtube.com/watch?v=placeholder-video-10",
    tone: "green",
  },
];
const newsItems = ["Release announcement TODO", "MV premiere TODO", "Press / interview TODO"];
const writingCategories = {
  books: {
    label: "书籍作品",
    enLabel: "Book Works",
    en: "BOOKS",
    mark: "◆",
  },
  lyrics: {
    label: "歌词手记",
    enLabel: "Lyric Notes",
    en: "LYRICS",
    mark: "♪",
  },
  ideas: {
    label: "创作理念",
    enLabel: "Creative Ideas",
    en: "IDEAS",
    mark: "✦",
  },
  production: {
    label: "制作笔记",
    enLabel: "Studio Notes",
    en: "STUDIO",
    mark: "▣",
  },
  essay: {
    label: "长文博客",
    enLabel: "Long Essays",
    en: "ESSAY",
    mark: "¶",
  },
} as const;

type WritingCategoryKey = keyof typeof writingCategories;
type WritingTone = "amber" | "ink" | "paper";
type WritingPost = {
  slug: string;
  date: string;
  category: WritingCategoryKey;
  title: string;
  excerpt: string;
  body: string[];
  tone: WritingTone;
};

const writingPosts: WritingPost[] = [
  {
    slug: "before-the-melody-arrives",
    date: "2026.06.12",
    category: "ideas",
    title: "旋律抵达之前，先出现的是一个画面",
    excerpt:
      "这篇模拟札记记录一首歌诞生前的状态：不是先有和弦，也不是先有副歌，而是一个房间、一束暗光和一句还没说出口的话。",
    body: [
      "很多歌并不是从旋律开始的。它先像一个画面停在脑子里：房间里有一点光，空气里有没说完的话，人的情绪比语言早一点抵达。",
      "我常常会先写下几个没有押韵关系的词，把它们当成临时坐标。等这些词慢慢形成温度，旋律才会从里面浮出来。这个过程不快，但它比较诚实。",
      "如果一首歌最后还能保留最开始那个画面的湿度，我会觉得它没有被制作流程磨平。它还是活的，还能把听的人带回某个只有自己知道的地方。",
    ],
    tone: "amber",
  },
  {
    slug: "a-note-for-an-unreleased-demo",
    date: "2026.06.08",
    category: "production",
    title: "给一首未发行 demo 的说明",
    excerpt:
      "这篇模拟文章像作品说明一样，写给一段还没有正式发行的 demo：它为什么暂时停在这里，以及我想保留什么。",
    body: [
      "这首 demo 现在还不完整，但我暂时不想急着把它修到很光滑。它的粗糙感里有一种比较靠近现场的东西，像刚写完时还没有冷却的情绪。",
      "我想保留人声里一点点不稳定的呼吸，也保留钢琴尾音里没有完全对齐的空间。它们不是技术上的完美，却能说明这首歌为什么存在。",
      "等到正式制作时，我希望编曲只是把它照亮，而不是把它改造成另一首更正确却更陌生的歌。",
    ],
    tone: "ink",
  },
  {
    slug: "lyrics-as-a-private-map",
    date: "2026.06.03",
    category: "lyrics",
    title: "歌词像一张私人地图",
    excerpt:
      "关于歌词如何在具体与留白之间找到距离：太直白会失去回声，太隐晦又会让听者进不来。",
    body: [
      "歌词最难的地方，不是把话说漂亮，而是决定哪些地方必须说清楚，哪些地方应该留给听的人自己走进去。",
      "我喜欢把一句歌词写得像地图上的标记。它不替你走完整条路，但它告诉你这里曾经发生过什么，也暗示你可以往哪里去。",
      "好的留白不是故作神秘，而是信任听者也有自己的记忆。歌曲提供入口，真正的房间由每个人自己打开。",
    ],
    tone: "paper",
  },
  {
    slug: "book-project-fragments",
    date: "2026.05.28",
    category: "books",
    title: "书籍项目片段：把声音写成文字",
    excerpt: "关于如何把音乐创作中的听觉经验转译成可以阅读的句子。",
    body: [
      "当声音变成文字，它失去了一部分身体感，却得到另一种可以反复停留的时间。",
      "这个书籍项目暂时还只是片段，但它正在尝试把创作中的微小判断记录下来。",
    ],
    tone: "amber",
  },
  {
    slug: "production-journal-night-session",
    date: "2026.05.19",
    category: "production",
    title: "夜间制作笔记：不要急着填满",
    excerpt: "一段关于留白、低频和夜里听感的模拟制作札记。",
    body: [
      "夜里做音乐时，最容易把所有空间都填满，因为安静会放大不确定感。",
      "但有时候真正让副歌成立的，不是又加了一层声音，而是删掉某个太努力的东西。",
    ],
    tone: "ink",
  },
  {
    slug: "why-this-site-keeps-a-writing-room",
    date: "2026.05.06",
    category: "essay",
    title: "为什么官网需要一个创作房间",
    excerpt: "这篇模拟说明解释 Writing 区的用途：让作品背后的想法留在自己的站内。",
    body: [
      "社交平台适合发布消息，但官网更像一个可以慢慢整理的房间。",
      "我希望作品说明、歌词手记和创作理念都能留在这里，成为一个长期可回看的档案。",
    ],
    tone: "paper",
  },
];
const newsletterEmbedUrl =
  "https://tally.so/embed/PdP2Gx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
const termsPlaceholders = [
  "Account / 帐户",
  "Payment methods / 付款方法",
  "Pricing / 价格",
  "Intellectual property / 知识产权",
  "Delivery policy / 送货政策",
  "Customs and taxes / 关税及税项",
  "Returns / 退换政策",
  "Disclaimer / 免责声明",
  "Privacy / 隐私保护",
];

type PlatformIconName =
  | "youtube"
  | "weibo"
  | "x"
  | "wechat"
  | "instagram"
  | "tiktok"
  | "spotify"
  | "appleMusic"
  | "netease"
  | "qqMusic"
  | "soundcloud"
  | "bilibili"
  | "kkbox"
  | "moov"
  | "joox"
  | "website";

type FollowLink = {
  name: string;
  note: string;
  href: string;
  icon: PlatformIconName;
};

const primarySocialLinks: FollowLink[] = [
  { name: "YouTube", note: "官方视频主页", href: "#todo-youtube", icon: "youtube" },
  { name: "微博", note: "中文动态与公告", href: "#todo-weibo", icon: "weibo" },
  { name: "X", note: "海外动态与短消息", href: "#todo-x", icon: "x" },
  { name: "微信", note: "公众号 / 私域入口占位", href: "#todo-wechat", icon: "wechat" },
];

const followGroups: { title: string; eyebrow: string; links: FollowLink[] }[] = [
  {
    title: "社交平台",
    eyebrow: "SOCIAL",
    links: [
      { name: "微博", note: "中文动态与公告", href: "#todo-weibo", icon: "weibo" },
      { name: "微信", note: "公众号 / 私域入口占位", href: "#todo-wechat", icon: "wechat" },
      { name: "X", note: "海外动态与短消息", href: "#todo-x", icon: "x" },
      { name: "Instagram", note: "照片、短视频与视觉档案", href: "#todo-instagram", icon: "instagram" },
      { name: "TikTok / 抖音", note: "短视频平台入口", href: "#todo-tiktok", icon: "tiktok" },
    ],
  },
  {
    title: "视频平台",
    eyebrow: "VIDEO",
    links: [
      { name: "YouTube", note: "官方视频主页", href: "#todo-youtube", icon: "youtube" },
      { name: "Bilibili 哔哩哔哩", note: "中文长视频入口", href: "#todo-bilibili", icon: "bilibili" },
    ],
  },
  {
    title: "听歌平台",
    eyebrow: "MUSIC",
    links: [
      { name: "Spotify", note: "海外听歌入口", href: "#todo-spotify", icon: "spotify" },
      { name: "Apple Music 苹果音乐", note: "苹果音乐主页", href: "#todo-apple-music", icon: "appleMusic" },
      { name: "SoundCloud", note: "demo、remix 与音频草稿入口", href: "#todo-soundcloud", icon: "soundcloud" },
      { name: "网易云音乐", note: "华语听歌入口", href: "#todo-netease", icon: "netease" },
      { name: "QQ 音乐", note: "华语听歌入口", href: "#todo-qq-music", icon: "qqMusic" },
    ],
  },
  {
    title: "其他入口",
    eyebrow: "OTHER",
    links: [{ name: "Website / Link hub", note: "备用总入口", href: "#todo-link-hub", icon: "website" }],
  },
];

const businessEmail = "music@yuyu-li.com";
const businessPhoneDisplay = "+1 (616) 625-9555";
const businessPhoneHref = "tel:+16166259555";

const footerCopy: Record<Locale, { business: string; phone: string; terms: string }> = {
  "zh-cn": {
    business: "商务邮箱",
    phone: "商务电话",
    terms: "条款及细则",
  },
  "zh-tw": {
    business: "商務信箱",
    phone: "商務電話",
    terms: "條款及細則",
  },
  en: {
    business: "Business",
    phone: "Phone",
    terms: "Terms & Conditions",
  },
};

const midnightMingVars = {
  "--font-cn-title":
    '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif TC", "Noto Serif SC", "Source Han Serif SC", "Songti SC", "STSong", serif',
  "--font-cn-body":
    '"Noto Sans SC", "Noto Sans TC", "Source Han Sans SC", "Source Han Sans TC", "PingFang SC", "Hiragino Sans GB", sans-serif',
} as CSSProperties;

const lightSurface = "#eef1ef";

function MidnightMingStyle() {
  return (
    <style>{`
      .midnight-ming-site {
        background: #0f0f0d;
        color: #e8edf0;
        font-family: var(--font-cn-body);
      }

      .midnight-ming-site .font-serif,
      .midnight-ming-site h1,
      .midnight-ming-site h2,
      .midnight-ming-site h3,
      .midnight-ming-site h4 {
        font-family: var(--font-cn-title);
        font-weight: 600;
        letter-spacing: 0.02em;
      }

      .midnight-ming-site p,
      .midnight-ming-site a,
      .midnight-ming-site button,
      .midnight-ming-site span,
      .midnight-ming-site li,
      .midnight-ming-site input,
      .midnight-ming-site textarea {
        font-family: var(--font-cn-body);
      }

      .midnight-ming-site h1 span,
      .midnight-ming-site h2 span,
      .midnight-ming-site h3 span,
      .midnight-ming-site h4 span,
      .midnight-ming-site .font-serif span {
        font-family: inherit;
      }

      .midnight-ming-site main,
      .midnight-ming-site section,
      .midnight-ming-site article,
      .midnight-ming-site aside {
        border-color: rgba(199, 168, 91, 0.42) !important;
      }

      .midnight-ming-site > section:not(:first-of-type):not(.artist-gold-panel):not(.midnight-newsletter-panel),
      .midnight-ming-site > div,
      .midnight-ming-site article > section:not(:first-child):not(.midnight-newsletter-panel) {
        background: ${lightSurface} !important;
        color: #0f0f0d !important;
      }

      .midnight-ming-site header,
      .midnight-ming-site footer,
      .midnight-ming-site .artist-gold-panel,
      .midnight-ming-site > .artist-gold-panel,
      .midnight-ming-site .midnight-newsletter-panel,
      .midnight-ming-site > section:first-of-type,
      .midnight-ming-site article > section:first-of-type {
        background: #0f0f0d !important;
        color: #e8edf0 !important;
      }

      .midnight-ming-site header {
        border-color: rgba(199, 168, 91, 0.34) !important;
        box-shadow: 0 18px 60px rgba(0, 0, 0, 0.2);
      }

      .midnight-ming-site a,
      .midnight-ming-site button {
        transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
      }

      .midnight-ming-site a:hover {
        color: #c7a85b;
      }

      .midnight-ming-site .text-\\[\\#d6bd73\\],
      .midnight-ming-site .text-\\[\\#8f6d16\\],
      .midnight-ming-site .text-\\[\\#1e335b\\] {
        color: #c7a85b !important;
      }

      .midnight-ming-site .bg-\\[\\#d6bd73\\],
      .midnight-ming-site .bg-\\[\\#e9edf3\\] {
        background: #c7a85b !important;
        color: #0f0f0d !important;
      }

      .midnight-ming-site .bg-\\[\\#f4f0e8\\],
      .midnight-ming-site .bg-white\\/38,
      .midnight-ming-site .bg-\\[\\#eef1f7\\] {
        background: ${lightSurface} !important;
        color: #0f0f0d !important;
      }

      .midnight-ming-site .bg-\\[\\#111111\\],
      .midnight-ming-site .bg-\\[\\#020202\\],
      .midnight-ming-site .bg-\\[\\#2f2f2d\\] {
        background: #0f0f0d !important;
        color: #e8edf0 !important;
      }

      .midnight-ming-site .artist-gold-panel,
      .midnight-ming-site .artist-gold-panel *,
      .midnight-ming-site .midnight-newsletter-panel,
      .midnight-ming-site .midnight-newsletter-panel * {
        border-color: rgba(199, 168, 91, 0.32) !important;
      }

      .midnight-ming-site .border-\\[\\#111111\\],
      .midnight-ming-site .border-\\[\\#242424\\],
      .midnight-ming-site .divide-\\[\\#111111\\] > :not([hidden]) ~ :not([hidden]) {
        border-color: rgba(15, 15, 13, 0.76) !important;
      }

      .midnight-ming-site svg text {
        font-family: var(--font-cn-title) !important;
      }

      .midnight-ming-site .ming-title,
      .midnight-ming-site .ming-title * {
        font-family: var(--font-cn-title) !important;
      }

      .midnight-ming-site .tally-powered-by,
      .midnight-ming-site [data-tally-powered-by] {
        display: none !important;
      }
    `}</style>
  );
}

function pathFor(locale: Locale, section: Section = "home") {
  const localeRoot = `/artist-midnight-gold/${locale}`;
  if (section === "home") {
    return localeRoot;
  }
  return `${localeRoot}/${section}`;
}

function musicPathFor(locale: Locale, slug: string) {
  return `${pathFor(locale, "music")}/${slug}`;
}

function musicCategoryPathFor(locale: Locale, category?: MusicCategoryKey) {
  if (!category) {
    return pathFor(locale, "music");
  }
  return `${pathFor(locale, "music")}/category/${category}`;
}

function getMusicWork(slug: string) {
  return musicWorks.find((work) => work.slug === slug);
}

export function getMusicSlugs() {
  return musicWorks.map((work) => work.slug);
}

export function getMusicCategoryKeys() {
  return Object.keys(musicCategories) as MusicCategoryKey[];
}

function writingPathFor(locale: Locale, slug: string) {
  return `${pathFor(locale, "writings")}/${slug}`;
}

function writingCategoryPathFor(locale: Locale, category?: WritingCategoryKey) {
  if (!category) {
    return pathFor(locale, "writings");
  }
  return `${pathFor(locale, "writings")}/category/${category}`;
}

function getWritingPost(slug: string) {
  return writingPosts.find((post) => post.slug === slug);
}

function getWritingCategory(category: WritingCategoryKey) {
  return writingCategories[category];
}

function writingCategoryDisplayLabel(category: WritingCategoryKey, locale: Locale) {
  const categoryMeta = getWritingCategory(category);

  return locale === "en" ? categoryMeta.enLabel : categoryMeta.label;
}

function WritingCategoryLabel({ category, locale }: { category: WritingCategoryKey; locale: Locale }) {
  const categoryMeta = getWritingCategory(category);

  return (
    <span className="inline-flex items-center gap-2">
      <span aria-hidden="true">{categoryMeta.mark}</span>
      <span>{writingCategoryDisplayLabel(category, locale)}</span>
      <span className="text-current/42">{categoryMeta.en}</span>
    </span>
  );
}

export function getWritingCategoryKeys() {
  return Object.keys(writingCategories) as WritingCategoryKey[];
}

function getCopy(locale: Locale) {
  return content[locale];
}

function zhLabel(locale: Locale, section: Section) {
  return locale === "zh-tw" ? sectionMeta[section].zhTw : sectionMeta[section].zhCn;
}

function musicCategoryLabel(locale: Locale, category: MusicCategoryKey) {
  const categoryMeta = musicCategories[category];
  if (locale === "en") return categoryMeta.en;
  if (locale === "zh-tw") return categoryMeta.zhTw;
  return categoryMeta.zhCn;
}

function musicTypeLabel(locale: Locale, category: MusicCategoryKey, fallback: string) {
  if (category === "albums") return locale === "en" ? "Album" : locale === "zh-tw" ? "專輯" : "专辑";
  if (category === "singles") return locale === "en" ? "Single" : locale === "zh-tw" ? "單曲" : "单曲";
  if (category === "other") return locale === "en" ? "Other" : locale === "zh-tw" ? "其他" : "其他";
  return fallback;
}

function BilingualLabel({ locale, section }: { locale: Locale; section: Section }) {
  if (locale === "en") {
    return <span className="text-[15px] font-semibold tracking-[0.14em]">{sectionMeta[section].en}</span>;
  }

  return (
    <span className="inline-flex min-w-[5.2rem] flex-col items-center gap-1.5 text-center leading-none">
      <span className="text-[15px] font-semibold tracking-[0.14em]">{sectionMeta[section].en}</span>
      <span className="text-[15px] font-semibold tracking-[0.1em] text-current/82">{zhLabel(locale, section)}</span>
    </span>
  );
}

function HeroVisual() {
  return (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 980 720" fill="none">
      <rect width="980" height="720" fill="#111111" />
      <circle cx="696" cy="216" r="214" fill="#f4f0e8" opacity="0.08" />
      <circle cx="696" cy="216" r="132" stroke="#f4f0e8" strokeWidth="1" opacity="0.34" />
      <circle cx="696" cy="216" r="42" fill="#f4f0e8" opacity="0.2" />
      <path
        d="M94 540C166 476 238 566 310 502C381 438 451 528 523 464C594 401 667 482 744 417C779 387 814 380 852 397"
        stroke="#f4f0e8"
        strokeWidth="2"
        opacity="0.72"
      />
      <path
        d="M96 585C168 521 240 611 312 547C383 483 453 573 525 509C596 446 669 527 746 462C781 432 816 425 854 442"
        stroke="#f4f0e8"
        strokeWidth="1"
        opacity="0.36"
      />
      {Array.from({ length: 34 }).map((_, index) => (
        <rect
          key={index}
          x={96 + index * 17}
          y={150 - (index % 8) * 7}
          width="2"
          height={188 + (index % 6) * 26}
          fill="#f4f0e8"
          opacity="0.32"
        />
      ))}
      <path d="M96 104H354M96 132H272M96 160H318" stroke="#f4f0e8" strokeWidth="1" opacity="0.34" />
    </svg>
  );
}

function CoverPlaceholder({ label }: { label: string }) {
  return (
    <div className="aspect-square overflow-hidden border border-current bg-[#f4f0e8]">
      <svg aria-hidden="true" viewBox="0 0 320 320" className="h-full w-full">
        <rect width="320" height="320" fill="#f4f0e8" />
        <circle cx="160" cy="160" r="104" fill="#111111" />
        <circle cx="160" cy="160" r="38" fill="#f4f0e8" />
        <circle cx="160" cy="160" r="10" fill="#111111" />
        <path d="M38 48H132M38 272H210M232 48H282" stroke="#111111" strokeWidth="6" />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
}

function PlatformLogo({ icon }: { icon: PlatformIconName }) {
  const common = "stroke-current stroke-[2.6] fill-none stroke-linecap-round stroke-linejoin-round";

  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="size-7">
      {icon === "youtube" && (
        <>
          <rect x="7" y="13" width="34" height="22" rx="6" className={common} />
          <path d="M21 19.5L30 24L21 28.5V19.5Z" className="fill-current stroke-current stroke-[2]" />
        </>
      )}
      {icon === "weibo" && (
        <>
          <path d="M12 27C12 20.8 18.3 16.5 25.3 18.1C32.2 19.6 36.3 24.4 34.6 29.4C32.8 34.8 24.7 37.5 17.9 35.2C13.8 33.8 12 31.1 12 27Z" className={common} />
          <path d="M19.1 27.2C20.1 24.9 23.6 24 26.4 25.2C29.3 26.4 30.2 29.1 28.4 31C26.5 33 22.3 33.2 19.9 31.4C18.6 30.4 18.4 28.8 19.1 27.2Z" className={common} />
          <path d="M31 13C35.7 13.4 39.2 16.7 39.8 21" className={common} />
          <path d="M32.4 17.3C34.7 17.8 36.4 19.4 37 21.7" className={common} />
          <circle cx="23" cy="28.5" r="1.4" className="fill-current" />
        </>
      )}
      {icon === "x" && (
        <>
          <path d="M13 12L35 36" className="stroke-current stroke-[4.2] stroke-linecap-round" />
          <path d="M35 12L13 36" className="stroke-current stroke-[4.2] stroke-linecap-round" />
        </>
      )}
      {icon === "wechat" && (
        <>
          <path d="M20 16C12.9 16 8 20.1 8 25.5C8 28.7 9.8 31.4 12.6 33.1L11.8 37L16.3 34.6C17.5 34.9 18.7 35 20 35C27.1 35 32 30.9 32 25.5C32 20.1 27.1 16 20 16Z" className={common} />
          <path d="M29 20.5C35.5 20.8 40 24.6 40 29.5C40 32.2 38.5 34.6 36.2 36.2L36.8 39.5L33.1 37.6C32 37.9 30.9 38 29.7 38C26.5 38 23.8 37.1 21.9 35.6" className={common} />
          <circle cx="16.6" cy="25.2" r="1.3" className="fill-current" />
          <circle cx="23.8" cy="25.2" r="1.3" className="fill-current" />
        </>
      )}
      {icon === "instagram" && (
        <>
          <rect x="10" y="10" width="28" height="28" rx="8" className={common} />
          <circle cx="24" cy="24" r="6.2" className={common} />
          <circle cx="32.5" cy="15.5" r="1.6" className="fill-current" />
        </>
      )}
      {icon === "tiktok" && (
        <>
          <path d="M27 10V29.5C27 34.2 23.7 37.5 19.4 37.5C15.9 37.5 13 35.2 13 31.9C13 28.4 15.8 26.1 19.5 26.1C20.3 26.1 21.1 26.2 22 26.5" className={common} />
          <path d="M27 13.4C29.2 18 32.5 20.1 36.8 20.3" className={common} />
        </>
      )}
      {icon === "spotify" && (
        <>
          <circle cx="24" cy="24" r="16" className={common} />
          <path d="M16 20.2C22.2 18.4 28.2 18.9 33 21.2" className={common} />
          <path d="M17.4 25C22.5 23.7 27.1 24 31 25.9" className={common} />
          <path d="M19 29.4C22.8 28.6 26.2 28.8 29.1 30.2" className={common} />
        </>
      )}
      {icon === "appleMusic" && (
        <>
          <path d="M17 32.5C17 29.4 19.7 27.7 22.3 28.7V13.5L34 11V27.2" className={common} />
          <path d="M22.3 17.2L34 14.8" className={common} />
          <circle cx="17.2" cy="32.8" r="4.6" className={common} />
          <circle cx="29.6" cy="29" r="4.6" className={common} />
        </>
      )}
      {icon === "soundcloud" && (
        <>
          <path d="M10 30.4H35.2C39 30.4 41.5 27.9 41.5 24.7C41.5 21.5 38.9 19 35.8 19C34.8 14.2 30.9 11 26.1 11C23.3 11 20.8 12.1 19 14" className={common} />
          <path d="M8 26V30.4M12 23.8V30.4M16 20.8V30.4M20 16.2V30.4M24 13.2V30.4" className={common} />
        </>
      )}
      {icon === "netease" && (
        <>
          <circle cx="24" cy="24" r="16" className={common} />
          <path d="M29.5 17.5C24.2 14.8 17.2 18.4 17.2 25C17.2 30.2 22.7 33.2 27.2 30.4C30.7 28.2 30.4 23.4 27.1 21.9C24.7 20.8 21.7 22 21.1 24.4" className={common} />
          <path d="M29.1 13.1C33.2 16 35.1 20.2 34.5 25" className={common} />
        </>
      )}
      {icon === "qqMusic" && (
        <>
          <circle cx="24" cy="24" r="16" className={common} />
          <path d="M22 32C22 29.2 24.5 27.5 27 28.3V16L33 14.5V26.8" className={common} />
          <circle cx="20" cy="32" r="3.8" className={common} />
        </>
      )}
      {icon === "bilibili" && (
        <>
          <rect x="9" y="15" width="30" height="22" rx="5" className={common} />
          <path d="M18 15L14 10M30 15L34 10" className={common} />
          <path d="M18 25H18.2M30 25H30.2" className="stroke-current stroke-[4] stroke-linecap-round" />
          <path d="M20 31C22.7 32.4 25.3 32.4 28 31" className={common} />
        </>
      )}
      {icon === "kkbox" && (
        <text x="4" y="29" fill="currentColor" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="800">
          KK
        </text>
      )}
      {icon === "moov" && (
        <>
          <circle cx="15" cy="24" r="8" className={common} />
          <text x="25" y="29" fill="currentColor" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="800">
            MV
          </text>
        </>
      )}
      {icon === "joox" && (
        <text x="3" y="30" fill="currentColor" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="900">
          JX
        </text>
      )}
      {icon === "website" && (
        <>
          <circle cx="24" cy="24" r="16" className={common} />
          <path d="M8 24H40M24 8C28.4 12.8 30.4 18 30.4 24C30.4 30 28.4 35.2 24 40C19.6 35.2 17.6 30 17.6 24C17.6 18 19.6 12.8 24 8Z" className={common} />
        </>
      )}
    </svg>
  );
}

function SocialRail() {
  return (
    <aside
      aria-label="Primary social links"
      className="fixed left-0 top-1/2 z-20 hidden -translate-y-1/2 flex-col border-y border-r border-[#d6bd73]/60 bg-[#d6bd73] text-[#111111] shadow-[0_16px_40px_rgba(0,0,0,0.18)] md:flex"
    >
      {primarySocialLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          title={item.name}
          aria-label={item.name}
          className="group flex h-16 w-14 items-center justify-center overflow-hidden border-b border-[#111111]/18 transition-all duration-300 last:border-b-0 hover:w-40 hover:bg-[#111111] hover:text-[#f4f0e8]"
        >
          <PlatformLogo icon={item.icon} />
          <span className="ml-3 hidden whitespace-nowrap text-sm font-black tracking-[0.08em] group-hover:inline">
            {item.name}
          </span>
        </a>
      ))}
    </aside>
  );
}

function FollowLinksSection({ locale }: { locale: Locale }) {
  const isEnglish = locale === "en";

  return (
    <section className="pt-10">
      <div className="mb-12 flex flex-col gap-5 border-t border-[#0f0f0d]/28 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="font-serif text-5xl leading-none md:text-7xl">Follow us on</h3>
        </div>
        <p className="max-w-md text-base leading-7 text-[#0f0f0d]/58 md:text-right">
          {isEnglish
            ? "Replace these placeholders with the real profile links after each account is ready."
            : "账号注册好以后，把占位链接替换为真实主页。"}
        </p>
      </div>
      <div className="space-y-14">
        {followGroups.map((group) => (
          <div key={group.title} className="grid gap-6 border-t border-[#0f0f0d]/28 pt-7 md:grid-cols-[0.26fr_1fr]">
            <div>
              <h4 className="font-serif text-3xl leading-none md:text-4xl">
                {isEnglish ? group.eyebrow : group.title}
              </h4>
            </div>
            <div className="grid gap-5">
              {group.links.map((item) => (
                <a
                  key={`${group.eyebrow}-${item.name}`}
                  href={item.href}
                  className="group grid gap-5 py-4 transition-colors hover:text-[#9b7a2e] sm:grid-cols-[auto_1fr_auto] sm:items-center"
                >
                  <span className="grid size-16 place-items-center rounded-full bg-[#0f0f0d]/8 text-[#0f0f0d] transition-colors group-hover:bg-[#0f0f0d] group-hover:text-[#eef1ef]">
                    <PlatformLogo icon={item.icon} />
                  </span>
                  <span>
                    <span className="block font-serif text-3xl leading-tight md:text-4xl">
                      {followDisplayName(locale, item.name)}
                    </span>
                    {!isEnglish && <span className="mt-2 block text-base leading-7 text-current/58">{item.note}</span>}
                  </span>
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-[#c7a85b] text-[#0f0f0d]">
                    <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function followDisplayName(locale: Locale, name: string) {
  if (locale !== "en") return name;
  const englishNames: Record<string, string> = {
    微博: "Weibo",
    微信: "WeChat",
    "TikTok / 抖音": "TikTok",
    "Bilibili 哔哩哔哩": "Bilibili",
    "网易云音乐": "NetEase Cloud Music",
    "QQ 音乐": "QQ Music",
    "Apple Music 苹果音乐": "Apple Music",
  };
  return englishNames[name] ?? name;
}

function BusinessContactBlock({ compact = false, locale = "en" }: { compact?: boolean; locale?: Locale }) {
  const labels = footerCopy[locale];
  const isEnglish = locale === "en";

  if (compact) {
    return (
      <div className="flex flex-col gap-1 text-base font-semibold tracking-[0.06em] text-[#8d8d8d]/84 md:text-lg">
        <a className="transition-colors hover:text-[#f4f0e8]" href={`mailto:${businessEmail}`}>
          {labels.business}: {businessEmail}
        </a>
        <a className="transition-colors hover:text-[#f4f0e8]" href={businessPhoneHref}>
          {labels.phone}: {businessPhoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <section className="border-t border-[#0f0f0d]/28 py-8">
      <h3 className="font-serif text-4xl leading-none md:text-6xl">
        {isEnglish ? "Business Contact" : "商务联系"}
      </h3>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <a
          href={`mailto:${businessEmail}`}
          className="group py-5 transition-colors hover:text-[#9b7a2e]"
        >
          <span className="block text-sm font-bold uppercase tracking-[0.2em] text-[#0f0f0d]/72">
            {isEnglish ? "Email" : labels.business}
          </span>
          <span className="mt-3 block text-2xl font-semibold">{businessEmail}</span>
        </a>
        <a
          href={businessPhoneHref}
          className="group py-5 transition-colors hover:text-[#9b7a2e]"
        >
          <span className="block text-sm font-bold uppercase tracking-[0.2em] text-[#0f0f0d]/72">
            {isEnglish ? "Phone" : labels.phone}
          </span>
          <span className="mt-3 block text-2xl font-semibold">{businessPhoneDisplay}</span>
        </a>
      </div>
      <p className="mt-5 text-sm leading-6 text-[#111111]/58">
        {isEnglish
          ? "The phone number uses international format; mobile visitors can tap it to call."
          : "电话采用美国国际格式；手机端点击号码可直接拨号。"}
      </p>
    </section>
  );
}

function aboutPlaceholder(locale: Locale) {
  if (locale === "en") {
    return "TODO: Artist biography, creative direction, milestones, press profile, and photography assets will be placed here. The structure is reserved for the formal copy.";
  }
  if (locale === "zh-tw") {
    return "TODO: 這裡放音樂人簡介、創作方向、重要經歷、媒體簡介和照片素材。當前先保留結構，後續替換為正式文本。";
  }
  return "TODO: 这里放音乐人简介、创作方向、重要经历、媒体简介和照片资产。当前先保留结构，后续替换为正式文本。";
}

function ArtistHeader({ locale, section }: ArtistSiteProps) {
  const copy = getCopy(locale);
  return (
    <header className="fixed left-0 right-0 top-0 z-30 border-b border-white/15 bg-[#111111]/88 text-[#f4f0e8] backdrop-blur-md">
      <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href={pathFor(locale)} className="group flex min-w-0 items-center gap-4 md:min-w-[15rem]">
          <span className="grid size-12 place-items-center border border-[#f4f0e8]/45">
            <Disc3 className="size-5 transition-transform duration-500 group-hover:rotate-90" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-[0.18em] md:text-3xl">{copy.brand as string}</span>
            {locale !== "en" && (
              <span className="mt-2 text-sm font-semibold tracking-[0.28em] text-[#f4f0e8]/76 md:text-base">
                {copy.brandZh as string}
              </span>
            )}
          </span>
        </Link>
        <nav className="hidden flex-wrap items-center justify-center gap-x-5 gap-y-4 text-[#f4f0e8]/72 xl:flex">
          <Link className="artist-nav-link hover:text-[#f4f0e8]" href={pathFor(locale)}>
            <BilingualLabel locale={locale} section="home" />
          </Link>
          {sectionPaths.map((item) => (
            <Link
              key={item}
              className={`artist-nav-link hover:text-[#f4f0e8] ${section === item ? "text-[#f4f0e8]" : ""}`}
              href={pathFor(locale, item)}
            >
              <BilingualLabel locale={locale} section={item} />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-base font-semibold tracking-[0.18em] text-[#f4f0e8]/70">
          {(Object.keys(localeLabels) as Locale[]).map((item) => (
            <Link
              key={item}
              href={pathFor(item, section)}
              className={`transition-colors hover:text-[#f4f0e8] ${item === locale ? "text-[#f4f0e8]" : ""}`}
            >
              {localeLabels[item]}
            </Link>
          ))}
          <button className="grid size-11 place-items-center border border-[#f4f0e8]/30 transition-colors duration-300 hover:border-[#f4f0e8] lg:hidden">
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

function PlatformLinks({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="pt-2">
      <h2 className="font-serif text-5xl leading-none md:text-7xl">{title}</h2>
      <div className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2">
        {items.map((item) => (
          <a
            key={item}
            href="#todo"
            className="group flex min-h-24 items-center justify-between border-t border-[#0f0f0d]/28 py-5 text-xl font-semibold tracking-[0.04em] transition-colors hover:text-[#9b7a2e] md:text-2xl"
          >
            <span>{item}</span>
            <span className="grid size-10 place-items-center rounded-full bg-[#0f0f0d] text-[#eef1ef] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-1">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function NewsletterBlock({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <section className="midnight-newsletter-panel bg-[#111111] px-5 py-16 text-[#f4f0e8] md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs tracking-[0.34em] text-[#f4f0e8]/50">
            <Mail className="size-4" />
            NEWSLETTER
          </p>
          <h2 className="font-serif text-5xl leading-none md:text-7xl">{copy.newsletterTitle as string}</h2>
        </div>
        <div className="flex flex-col justify-center">
          <p className="max-w-3xl text-2xl font-semibold leading-10 text-[#f4f0e8] md:text-3xl md:leading-[1.45]">
            {copy.newsletterCopy as string}
          </p>
          <form className="mt-12 max-w-3xl" action={newsletterEmbedUrl} method="get">
            <label htmlFor={`release-email-${locale}`} className="block text-base font-bold tracking-[0.08em] text-[#e8edf0]">
              Email
            </label>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <input
                id={`release-email-${locale}`}
                name="email"
                type="email"
                placeholder="you@example.com"
                className="min-h-16 flex-1 bg-[#eef1ef] px-5 text-lg font-semibold text-[#0f0f0d] outline-none placeholder:text-[#0f0f0d]/36 focus:ring-2 focus:ring-[#c7a85b]"
              />
              <button
                type="submit"
                className="min-h-16 bg-[#c7a85b] px-8 text-base font-black tracking-[0.06em] text-[#0f0f0d] transition-transform duration-500 hover:-translate-y-0.5"
              >
                {locale === "en" ? "Submit" : locale === "zh-tw" ? "送出" : "提交"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function SectionMenuShowcase({ locale }: { locale: Locale }) {
  return (
    <section className="artist-gold-panel bg-[#020202] px-5 py-16 text-center md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        {sectionPaths.map((item) => (
          <Link
            key={item}
            href={pathFor(locale, item)}
            className="group block border-b border-[#d6bd73]/10 py-8 last:border-b-0 md:py-10"
          >
            <span className="block font-serif text-[clamp(4rem,11vw,9rem)] font-black uppercase leading-[0.78] tracking-normal text-[#d6bd73] transition-colors duration-300 group-hover:text-[#f4f0e8]">
              {sectionMeta[item].en}
            </span>
            {locale !== "en" && (
              <span className="mt-5 block text-[clamp(1.7rem,4vw,3.25rem)] font-black leading-none tracking-[0.08em] text-white">
                {zhLabel(locale, item)}
              </span>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

function HomePage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <>
      <section className="relative min-h-[94svh] overflow-hidden bg-[#111111] pt-24 text-[#f4f0e8]">
        <div className="absolute inset-0 opacity-70">
          <HeroVisual />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#111111] to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(94svh-6rem)] max-w-7xl flex-col justify-end px-5 pb-10 md:px-8 md:pb-14">
          <div className="artist-fade-in max-w-5xl">
            <p className="mb-5 flex items-center gap-3 text-xs tracking-[0.34em] text-[#f4f0e8]/62">
              <Radio className="size-4" />
              {copy.eyebrow as string}
            </p>
            <h1 className="max-w-5xl font-serif text-[clamp(4rem,12vw,11rem)] leading-[0.82] tracking-normal">
              {copy.heroTitle as string}
            </h1>
          </div>
          <div className="relative mt-10 grid gap-8 border-t border-[#f4f0e8]/25 pt-6 md:grid-cols-[1fr_0.8fr]">
            <p className="artist-fade-in artist-delay-1 max-w-2xl text-balance text-xl leading-8 text-[#f4f0e8]/78 md:text-2xl md:leading-10">
              {copy.heroCopy as string}
            </p>
            <div className="artist-fade-in artist-delay-2 flex items-end gap-4 md:justify-end">
              <Link
                href={pathFor(locale, "music")}
                className="inline-flex items-center gap-2 border-b border-[#f4f0e8] pb-2 text-sm tracking-[0.18em]"
              >
                {copy.ctaListen as string}
                <Play className="size-4 fill-current" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.55fr_1fr] md:px-8 md:py-28">
        <aside className="top-32 h-fit md:sticky">
          <p className="mb-4 text-xs tracking-[0.34em] text-[#111111]/45">RELEASE / TODO</p>
          <CoverPlaceholder label="Latest release placeholder" />
        </aside>
        <article>
          <h2 className="border-b border-[#111111] pb-5 font-serif text-4xl leading-none md:text-6xl">
            {copy.latestTitle as string}
          </h2>
          <p className="max-w-3xl pt-8 text-xl leading-10 text-[#111111]/74">{copy.latestCopy as string}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {["Single TODO", "EP TODO", "Album TODO"].map((item) => (
              <div key={item} className="border-t border-[#111111] pt-4">
                <p className="text-xs tracking-[0.3em] text-[#111111]/45">PLACEHOLDER</p>
                <h3 className="mt-5 font-serif text-3xl">{item}</h3>
              </div>
            ))}
          </div>
        </article>
      </section>

      <SectionMenuShowcase locale={locale} />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <PlatformLinks title={copy.listenTitle as string} items={musicPlatforms} />
        <PlatformLinks title={copy.videoTitle as string} items={videoPlatforms} />
      </section>

      <NewsletterBlock locale={locale} />
    </>
  );
}

function MusicCoverPlaceholder({ tone, title }: { tone: MusicTone; title: string }) {
  const palette: Record<MusicTone, { bg: string; accent: string; ink: string }> = {
    dawn: { bg: "#d9d6ca", accent: "#111111", ink: "#9e8f7a" },
    noir: { bg: "#151515", accent: "#f4f0e8", ink: "#d6bd73" },
    gold: { bg: "#d6bd73", accent: "#111111", ink: "#7a541c" },
    rose: { bg: "#c69a94", accent: "#111111", ink: "#f4f0e8" },
    green: { bg: "#1d3b31", accent: "#f4f0e8", ink: "#d6bd73" },
    blue: { bg: "#31495c", accent: "#f4f0e8", ink: "#95bad0" },
    ember: { bg: "#dd7d32", accent: "#111111", ink: "#f4f0e8" },
    paper: { bg: "#efe8db", accent: "#111111", ink: "#b7a18c" },
  };
  const colors = palette[tone];

  return (
    <div className="relative aspect-square overflow-hidden bg-[#111111]" aria-hidden="true">
      <svg className="h-full w-full" viewBox="0 0 520 520" fill="none">
        <rect width="520" height="520" fill={colors.bg} />
        <circle cx="364" cy="180" r="168" fill={colors.ink} opacity="0.34" />
        <circle cx="156" cy="360" r="112" stroke={colors.accent} strokeOpacity="0.42" />
        <path d="M64 96H292M64 132H224" stroke={colors.accent} strokeOpacity="0.6" strokeWidth="3" />
        <path d="M0 398C86 314 182 366 262 286C334 214 416 202 520 238V520H0V398Z" fill={colors.accent} opacity="0.14" />
        <text x="54" y="274" fill={colors.accent} fillOpacity="0.88" fontFamily="serif" fontSize="58">
          YUYU
        </text>
        <text x="54" y="334" fill={colors.accent} fillOpacity="0.88" fontFamily="serif" fontSize="42">
          LI
        </text>
      </svg>
      <span className="sr-only">{title}</span>
    </div>
  );
}

function MusicCategoryNav({ locale, activeCategory }: { locale: Locale; activeCategory?: MusicCategoryKey }) {
  return (
    <nav className="top-32 h-fit space-y-7 text-xl font-semibold md:sticky" aria-label="Music categories">
      <Link
        href={musicCategoryPathFor(locale)}
        className={`block transition-colors hover:text-[#111111] ${activeCategory ? "text-[#111111]/38" : "text-[#1e335b]"}`}
      >
        {locale === "en" ? "All" : locale === "zh-tw" ? "所有" : "所有"}
      </Link>
      {getMusicCategoryKeys().map((category) => {
        const isActive = activeCategory === category;
        return (
          <Link
            key={category}
            href={musicCategoryPathFor(locale, category)}
            className={`block transition-colors hover:text-[#111111] ${isActive ? "text-[#1e335b]" : "text-[#111111]/38"}`}
          >
            {musicCategoryLabel(locale, category)}
          </Link>
        );
      })}
    </nav>
  );
}

function MusicIndexContent({ locale, activeCategory }: { locale: Locale; activeCategory?: MusicCategoryKey }) {
  const copy = getCopy(locale);
  const visibleWorks = activeCategory ? musicWorks.filter((work) => work.category === activeCategory) : musicWorks;

  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_11rem]">
      <div>
        <div className="border-t-4 border-[#111111] pt-8">
          <h2 className="font-serif text-4xl leading-none md:text-7xl">{copy.listenTitle as string}</h2>
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
          {visibleWorks.map((work) => (
            <Link key={work.slug} href={musicPathFor(locale, work.slug)} className="group block">
              <MusicCoverPlaceholder tone={work.tone} title={work.title} />
              <div className="pt-5">
                <p className="text-sm font-semibold tracking-[0.08em] text-[#111111]/48">{work.date}</p>
                <h3 className="ming-title mt-2 text-2xl font-semibold leading-8 transition-colors group-hover:text-[#8f6d16]">
                  {work.title}
                </h3>
                <p className="mt-1 text-sm tracking-[0.16em] text-[#111111]/45">
                  {work.artist} / {musicTypeLabel(locale, work.category, work.typeLabel)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <MusicCategoryNav locale={locale} activeCategory={activeCategory} />
    </section>
  );
}

const streamingLinks: FollowLink[] = [
  { name: "Apple Music", note: "数位收听占位", href: "#todo-apple-music", icon: "appleMusic" },
  { name: "Spotify", note: "数位收听占位", href: "#todo-spotify", icon: "spotify" },
  { name: "YouTube Music", note: "数位收听占位", href: "#todo-youtube-music", icon: "youtube" },
  { name: "KKBOX", note: "数位收听占位", href: "#todo-kkbox", icon: "kkbox" },
  { name: "MOOV", note: "数位收听占位", href: "#todo-moov", icon: "moov" },
  { name: "JOOX", note: "数位收听占位", href: "#todo-joox", icon: "joox" },
  { name: "网易云音乐", note: "数位收听占位", href: "#todo-netease", icon: "netease" },
  { name: "QQ 音乐", note: "数位收听占位", href: "#todo-qq-music", icon: "qqMusic" },
];

function musicDetailTitle(locale: Locale) {
  if (locale === "en") return "Music";
  if (locale === "zh-tw") return "音樂";
  return "音乐";
}

function releaseDateLabel(locale: Locale, date: string) {
  if (locale === "en") return `Released ${date}`;
  if (locale === "zh-tw") return `${date} 發行`;
  return `${date} 发行`;
}

function tracksTitle(locale: Locale) {
  if (locale === "en") return "Tracks";
  if (locale === "zh-tw") return "曲目";
  return "曲目";
}

function streamingTitle(locale: Locale) {
  if (locale === "en") return "Choose music service";
  if (locale === "zh-tw") return "選擇音樂平台";
  return "选择音乐平台";
}

function playLabel(locale: Locale) {
  return locale === "en" ? "Play" : "播放";
}

function streamingDisplayName(locale: Locale, name: string) {
  if (locale !== "en") return name;
  const englishNames: Record<string, string> = {
    "网易云音乐": "NetEase Cloud Music",
    "QQ 音乐": "QQ Music",
  };
  return englishNames[name] ?? name;
}

function StreamingBrandMark({ name, locale }: { name: string; locale: Locale }) {
  const logoSrc: Record<string, string> = {
    "Apple Music": "https://cdn.simpleicons.org/applemusic/fa243c",
    Spotify: "https://cdn.simpleicons.org/spotify/22c55e",
    "YouTube Music": "https://cdn.simpleicons.org/youtubemusic/ff0000",
    "网易云音乐": "https://cdn.simpleicons.org/neteasecloudmusic/D43C33",
  };

  if (logoSrc[name]) {
    return (
      <span
        aria-hidden="true"
        className="block h-12 w-12 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${logoSrc[name]})` }}
      />
    );
  }

  const wordmarkClass = "font-sans text-[2.5rem] font-black leading-none tracking-[-0.02em]";
  if (name === "KKBOX") return <span className={`${wordmarkClass} text-[#08bfe8]`}>KKBOX</span>;
  if (name === "MOOV") return <span className={`${wordmarkClass} text-[#62c6b8]`}>MOOV</span>;
  if (name === "JOOX") return <span className={`${wordmarkClass} text-[#0f0f0d]`}>JOOX</span>;
  if (name === "QQ 音乐") {
    return <span className={`${wordmarkClass} text-[#18b35b]`}>{locale === "en" ? "QQ Music" : "QQ 音乐"}</span>;
  }

  return <span className={`${wordmarkClass} text-[#0f0f0d]`}>{name}</span>;
}

function StreamingLinksBlock({ locale }: { locale: Locale }) {
  return (
    <section className="pt-8">
      <h3 className="font-serif text-5xl leading-none md:text-6xl">{streamingTitle(locale)}</h3>
      <div className="mt-9 overflow-hidden bg-[#eef1ef] shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
        {streamingLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group flex min-h-28 items-center justify-between gap-6 border-b border-[#0f0f0d]/10 px-7 py-5 last:border-b-0 transition-colors hover:bg-white"
          >
            <span className="flex min-w-0 items-center gap-6">
              <StreamingBrandMark name={item.name} locale={locale} />
              {["Apple Music", "YouTube Music", "网易云音乐", "QQ 音乐"].includes(item.name) && (
                <span className="text-2xl font-bold tracking-[-0.01em]">{streamingDisplayName(locale, item.name)}</span>
              )}
            </span>
            <span className="rounded bg-[#e4e8ef] px-7 py-5 text-lg font-black text-[#0f0f0d] transition-colors group-hover:bg-[#c7a85b]">
              {playLabel(locale)}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function MusicSocialLinksBlock() {
  return (
    <section className="border-t border-[#0f0f0d]/24 pt-8">
      <p className="text-xs uppercase tracking-[0.28em] text-[#111111]/45">Social Network</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {primarySocialLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group flex min-h-16 items-center gap-4 rounded-full bg-[#0f0f0d]/8 px-5 text-[#0f0f0d] transition-colors hover:bg-[#0f0f0d] hover:text-[#eef1ef]"
            aria-label={item.name}
          >
            <PlatformLogo icon={item.icon} />
            <span className="text-base font-semibold">{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function VideoThumbPlaceholder({ tone, index }: { tone: string; index: number }) {
  const palette: Record<string, { bg: string; accent: string; soft: string }> = {
    field: { bg: "#b6c3aa", accent: "#2d3427", soft: "#efe4c9" },
    sea: { bg: "#7aa7b8", accent: "#f4f0e8", soft: "#284b58" },
    stage: { bg: "#1d2118", accent: "#d6bd73", soft: "#f4f0e8" },
    studio: { bg: "#141414", accent: "#d6bd73", soft: "#f4f0e8" },
    gold: { bg: "#d8c483", accent: "#6d4b16", soft: "#fff4c4" },
    red: { bg: "#4b1010", accent: "#f4f0e8", soft: "#d26b4f" },
    portrait: { bg: "#d7d3c8", accent: "#111111", soft: "#a79f91" },
    amber: { bg: "#6d4b16", accent: "#f4f0e8", soft: "#d6bd73" },
    room: { bg: "#3c2b28", accent: "#f4f0e8", soft: "#b8846d" },
    green: { bg: "#23372f", accent: "#d6bd73", soft: "#d7e0c8" },
  };
  const colors = palette[tone] ?? palette.stage;

  return (
    <div className="relative aspect-video overflow-hidden bg-[#111111]" aria-hidden="true">
      <svg className="h-full w-full" viewBox="0 0 640 360" fill="none">
        <rect width="640" height="360" fill={colors.bg} />
        <path d="M0 268C92 214 152 245 230 198C302 154 382 98 640 128V360H0V268Z" fill={colors.soft} opacity="0.28" />
        <path d="M52 274C142 205 202 242 282 184C364 124 466 106 588 142" stroke={colors.accent} strokeOpacity="0.7" />
        <rect x="420" y="64" width="132" height="152" stroke={colors.accent} strokeOpacity="0.5" />
        <circle cx="174" cy="132" r="52" stroke={colors.accent} strokeOpacity="0.46" />
        <path d="M164 107L214 132L164 157V107Z" fill={colors.accent} fillOpacity="0.86" />
        <path d="M62 54H238M62 82H184" stroke={colors.accent} strokeOpacity="0.58" />
        <text x="514" y="314" fill={colors.accent} fillOpacity="0.76" fontFamily="serif" fontSize="42">
          {String(index + 1).padStart(2, "0")}
        </text>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black/22 to-transparent" />
    </div>
  );
}

function videoIntro(locale: Locale) {
  if (locale === "en") {
    return "Music videos, live sessions, lyric videos, and studio fragments will live here. Current covers are placeholders for official thumbnails or stills.";
  }
  if (locale === "zh-tw") {
    return "MV、現場、歌詞影片和製作片段會平鋪在這裡；目前封面為模擬佔位，後續替換真實 YouTube 縮略圖或官方劇照。";
  }
  return "MV、现场、歌词影片和制作片段会平铺在这里；当前封面为模拟占位，后续替换真实 YouTube 缩略图或官方剧照。";
}

function VideoWall({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="border-t border-[#0f0f0d]/28 pt-8">
        <div className="mb-14 flex flex-col gap-5">
          <div>
            <h2 className="font-serif text-4xl leading-none md:text-7xl">{copy.videoTitle as string}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#111111]/68">
              {videoIntro(locale)}
            </p>
          </div>
        </div>

        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
          {videoItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group block transition-transform duration-500 hover:-translate-y-1"
            >
              <VideoThumbPlaceholder tone={item.tone} index={index} />
              <div className="relative pt-5">
                <div className="flex items-center justify-between gap-4 text-[#0f0f0d]/58">
                  <p className="text-sm font-semibold tracking-[0.08em]">{item.date}</p>
                  <span className="grid size-9 place-items-center rounded-full bg-[#c7a85b] text-[#111111]">
                    <Play className="size-3 fill-current" />
                  </span>
                </div>
                <p className="mt-2 text-sm tracking-[0.12em] text-[#0f0f0d]/48">{item.artist}</p>
                <h3 className="ming-title mt-2 text-2xl font-semibold leading-8">{item.title}</h3>
                <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#0f0f0d]/50">
                  YouTube
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 flex justify-end">
          <div className="w-full max-w-xl">
            <PlatformLinks title={copy.videoTitle as string} items={videoPlatforms} />
          </div>
        </div>
      </div>
    </section>
  );
}

function WritingPreviewVisual({ tone, index }: { tone: string; index: number }) {
  const accent = tone === "ink" ? "#f4f0e8" : tone === "paper" ? "#111111" : "#c7a85b";
  const background = tone === "ink" ? "#111111" : tone === "paper" ? lightSurface : "#1a1814";

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-[#111111]" aria-hidden="true">
      <svg className="h-full w-full" viewBox="0 0 640 480" fill="none">
        <rect width="640" height="480" fill={background} />
        <path d="M72 356C160 232 235 284 318 174C390 78 474 86 568 148" stroke={accent} strokeOpacity="0.72" />
        <path d="M86 382C176 278 254 316 338 220C414 134 496 146 566 200" stroke={accent} strokeOpacity="0.34" />
        <circle cx="160" cy="150" r="72" stroke={accent} strokeOpacity="0.38" />
        <circle cx="160" cy="150" r="26" fill={accent} fillOpacity="0.18" />
        <rect x="390" y="72" width="112" height="168" stroke={accent} strokeOpacity="0.5" />
        <path d="M418 118H474M418 154H456M418 190H484" stroke={accent} strokeOpacity="0.65" />
        <path d="M92 82H254" stroke={accent} strokeOpacity="0.7" />
        <path d="M92 106H210" stroke={accent} strokeOpacity="0.38" />
        <text x="92" y="426" fill={accent} fillOpacity="0.82" fontFamily="serif" fontSize="54">
          0{index + 1}
        </text>
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
    </div>
  );
}

function WritingCategoryNav({ locale, activeCategory }: { locale: Locale; activeCategory?: WritingCategoryKey }) {
  return (
    <nav className="border-y border-[#111111]" aria-label="Writing categories">
      <div className="grid gap-px bg-[#111111] sm:grid-cols-2 lg:grid-cols-6">
        <Link
          href={writingCategoryPathFor(locale)}
          className={`bg-[#f4f0e8] px-5 py-5 text-xs uppercase tracking-[0.22em] transition-colors hover:bg-[#111111] hover:text-[#f4f0e8] ${
            activeCategory ? "" : "bg-[#111111] text-[#f4f0e8]"
          }`}
        >
          All
        </Link>
        {getWritingCategoryKeys().map((category) => {
          const categoryMeta = getWritingCategory(category);
          const isActive = activeCategory === category;

          return (
            <Link
              key={category}
              href={writingCategoryPathFor(locale, category)}
              className={`bg-[#f4f0e8] px-5 py-5 transition-colors hover:bg-[#111111] hover:text-[#f4f0e8] ${
                isActive ? "bg-[#111111] text-[#f4f0e8]" : ""
              }`}
            >
              <span className="block text-2xl leading-none">{categoryMeta.mark}</span>
              <span className="mt-4 block text-sm font-semibold tracking-[0.12em]">
                {writingCategoryDisplayLabel(category, locale)}
              </span>
              <span className="mt-1 block text-xs uppercase tracking-[0.22em] text-current/58">{categoryMeta.en}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function WritingsWall({ locale, activeCategory }: { locale: Locale; activeCategory?: WritingCategoryKey }) {
  const visiblePosts = activeCategory ? writingPosts.filter((post) => post.category === activeCategory) : writingPosts;
  const featuredPosts = visiblePosts.slice(0, 3);
  const archivePosts = visiblePosts.slice(3);
  const activeCategoryMeta = activeCategory ? getWritingCategory(activeCategory) : null;

  return (
    <div className="space-y-14">
      <WritingCategoryNav locale={locale} activeCategory={activeCategory} />
      {activeCategoryMeta && (
        <div className="border-b border-[#111111] pb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#111111]/45">Filtered category</p>
          <h3 className="mt-4 font-serif text-4xl md:text-6xl">
            {activeCategoryMeta.mark} {locale === "en" ? activeCategoryMeta.enLabel : activeCategoryMeta.label}
          </h3>
        </div>
      )}
      <div className="space-y-8">
        {featuredPosts.map((post, index) => (
          <Link
            key={post.slug}
            href={writingPathFor(locale, post.slug)}
            className="group grid overflow-hidden border border-[#111111] bg-[#f4f0e8] transition-colors duration-300 hover:bg-[#111111] hover:text-[#f4f0e8] lg:grid-cols-2"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <WritingPreviewVisual tone={post.tone} index={index} />
            </div>
            <div className="flex min-h-80 flex-col p-7 md:p-10 lg:min-h-[24rem]">
              <div className="flex items-center justify-between gap-4 text-xs tracking-[0.24em] text-current/48">
                <WritingCategoryLabel category={post.category} locale={locale} />
                <span>{post.date}</span>
              </div>
              <h3 className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
                {getWritingCategory(post.category).mark} {post.title}
              </h3>
              <p className="mt-5 line-clamp-4 text-base leading-8 text-current/70">{post.excerpt}</p>
              <div className="mt-auto flex items-center gap-2 pt-8 text-xs uppercase tracking-[0.24em]">
                Read
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {archivePosts.length > 0 && (
        <div className="border-y border-[#111111]">
        <div className="grid gap-6 py-6 md:grid-cols-[0.32fr_1fr]">
          <p className="text-xs uppercase tracking-[0.3em] text-[#111111]/45">Archive</p>
          <div className="divide-y divide-[#111111]">
            {archivePosts.map((post) => (
              <Link
                key={post.slug}
                href={writingPathFor(locale, post.slug)}
                className="group flex items-center justify-between gap-6 py-6 transition-colors hover:text-[#8f6d16]"
              >
                <div>
                  <p className="text-xs tracking-[0.24em] text-[#111111]/45">
                    <WritingCategoryLabel category={post.category} locale={locale} /> / {post.date}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl leading-tight">
                    {getWritingCategory(post.category).mark} {post.title}
                  </h3>
                </div>
                <ArrowUpRight className="size-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      )}
      {visiblePosts.length === 0 && (
        <div className="border-y border-[#111111] py-12">
          <p className="text-xl leading-9 text-[#111111]/68">这个分类下还没有文章。</p>
        </div>
      )}
    </div>
  );
}

function WritingsContent({ locale, activeCategory }: { locale: Locale; activeCategory?: WritingCategoryKey }) {
  const copy = getCopy(locale);

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="space-y-10">
        <div className="border-t border-[#111111] pt-6">
          <h2 className="font-serif text-4xl md:text-6xl">{copy.writingsTitle as string}</h2>
          <p className="mt-8 max-w-4xl text-xl leading-10 text-[#111111]/74">{copy.writingsCopy as string}</p>
        </div>
        <WritingsWall locale={locale} activeCategory={activeCategory} />
        <p className="text-sm tracking-[0.12em] text-[#111111]/48">{copy.sourceNote as string}</p>
      </div>
    </section>
  );
}

function ListingPage({ locale, section }: { locale: Locale; section: Exclude<Section, "home"> }) {
  const copy = getCopy(locale);
  const pageTitles: Record<Exclude<Section, "home">, string> = {
    about: copy.aboutTitle as string,
    artists: copy.artistsTitle as string,
    video: copy.videoTitle as string,
    music: copy.listenTitle as string,
    news: copy.newsTitle as string,
    writings: copy.writingsTitle as string,
    "terms-conditions": copy.termsTitle as string,
  };
  return (
    <>
      <section className="bg-[#111111] px-5 pb-16 pt-44 text-[#f4f0e8] md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-[#f4f0e8]/54">
            {sectionMeta[section].eyebrow}
          </p>
          <h1 className="max-w-5xl font-serif text-[clamp(4rem,12vw,10rem)] leading-[0.82]">
            <span className="block text-[#d6bd73]">{sectionMeta[section].en}</span>
            {locale !== "en" && (
              <span className="mt-5 block text-[0.36em] font-black leading-none tracking-[0.08em] text-white">
                {zhLabel(locale, section)}
              </span>
            )}
          </h1>
        </div>
      </section>
      {section === "video" ? (
        <VideoWall locale={locale} />
      ) : section === "music" ? (
        <MusicIndexContent locale={locale} />
      ) : section === "writings" ? (
        <WritingsContent locale={locale} />
      ) : (
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.65fr_1fr] md:px-8 md:py-28">
        <aside>
          <CoverPlaceholder label={`${section} placeholder`} />
        </aside>
        <div className="space-y-10">
          <div className="border-t border-[#111111] pt-6">
            <h2 className="font-serif text-4xl md:text-6xl">{pageTitles[section]}</h2>
          </div>
          {section === "about" && (
            <>
              <div className="border-t border-[#111111] pt-6">
                <p className="text-xl leading-10 text-[#111111]/74">
                  {aboutPlaceholder(locale)}
                </p>
              </div>
              <FollowLinksSection locale={locale} />
              <BusinessContactBlock locale={locale} />
            </>
          )}
          {section === "artists" && (
            <div className="border-t border-[#111111] pt-6">
              <p className="text-xl leading-10 text-[#111111]/74">{copy.artistsCopy as string}</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {["Featured artist TODO", "Collaboration TODO", "Production client TODO"].map((item) => (
                  <div key={item} className="border border-[#111111] p-5">
                    <Users className="mb-8 size-5" />
                    <h3 className="font-serif text-3xl">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          )}
          {section === "news" && (
            <div className="border-t border-[#111111] pt-6">
              <p className="text-xl leading-10 text-[#111111]/74">{copy.newsCopy as string}</p>
              <div className="mt-10 divide-y divide-[#111111] border-y border-[#111111]">
                {newsItems.map((item) => (
                  <article key={item} className="flex items-center justify-between gap-6 py-6">
                    <div>
                      <p className="text-xs tracking-[0.24em] text-[#111111]/45">NEWS / TODO</p>
                      <h3 className="mt-2 font-serif text-3xl">{item}</h3>
                    </div>
                    <Newspaper className="size-5 shrink-0" />
                  </article>
                ))}
              </div>
            </div>
          )}
          {section === "terms-conditions" && (
            <div className="space-y-10 border-t border-[#111111] pt-6">
              <section className="space-y-6 text-lg leading-9 text-[#111111]/76 md:text-xl md:leading-10">
                <p>{copy.termsIntro as string}</p>
                <p>{copy.termsUpdate as string}</p>
              </section>
              <section className="space-y-6 border-t border-[#111111] pt-8 text-lg leading-9 text-[#111111]/76 md:text-xl md:leading-10">
                <h3 className="font-serif text-4xl text-[#111111]">{copy.copyrightTitle as string}</h3>
                <p>{copy.copyrightCopy as string}</p>
              </section>
              <section className="border-t border-[#111111] pt-8">
                <p className="mb-6 text-xs tracking-[0.28em] text-[#111111]/45">PLACEHOLDER SECTIONS</p>
                <div className="divide-y divide-[#111111] border-y border-[#111111]">
                  {termsPlaceholders.map((item) => (
                    <div key={item} className="flex items-center justify-between gap-6 py-5">
                      <span className="font-serif text-2xl">{item}</span>
                      <span className="text-xs tracking-[0.2em] text-[#111111]/45">TODO</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
          <p className="text-sm tracking-[0.12em] text-[#111111]/48">{copy.sourceNote as string}</p>
        </div>
      </section>
      )}
      <NewsletterBlock locale={locale} />
    </>
  );
}

export function MusicCategoryPage({ locale, category }: { locale: Locale; category: MusicCategoryKey }) {
  const categoryMeta = musicCategories[category];

  return (
    <main className="midnight-ming-site min-h-screen bg-[#f4f0e8] text-[#111111]" style={midnightMingVars}>
      <MidnightMingStyle />
      <ArtistHeader locale={locale} section="music" />
      <section className="bg-[#111111] px-5 pb-16 pt-44 text-[#f4f0e8] md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-[#f4f0e8]/54">MUSIC / CATEGORY</p>
          <h1 className="max-w-5xl font-serif text-[clamp(4rem,12vw,10rem)] leading-[0.82]">
            <span className="block text-[#d6bd73]">{categoryMeta.en}</span>
            <span className="mt-5 block text-[0.36em] font-black leading-none tracking-[0.08em] text-white">
              {musicCategoryLabel(locale, category)}
            </span>
          </h1>
        </div>
      </section>
      <MusicIndexContent locale={locale} activeCategory={category} />
      <NewsletterBlock locale={locale} />
      <ArtistFooter locale={locale} />
    </main>
  );
}

export function MusicWorkPage({ locale, slug }: { locale: Locale; slug: string }) {
  const work = getMusicWork(slug);

  if (!work) {
    return null;
  }

  return (
    <main className="midnight-ming-site min-h-screen bg-[#eef1f7] text-[#111111]" style={midnightMingVars}>
      <MidnightMingStyle />
      <ArtistHeader locale={locale} section="music" />
      <section className="px-5 pb-20 pt-44 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-serif text-5xl leading-none md:text-7xl">{musicDetailTitle(locale)}</h1>
          <div className="mt-10 border-t-4 border-[#111111] pt-14">
            <div className="grid gap-14 lg:grid-cols-[0.52fr_0.48fr] lg:items-start">
              <div className="mx-auto w-full max-w-xl">
                <MusicCoverPlaceholder tone={work.tone} title={work.title} />
              </div>
              <div className="space-y-10">
                <div>
                  <p className="text-sm uppercase tracking-[0.26em] text-[#111111]/45">
                    {work.artist} / {musicTypeLabel(locale, work.category, work.typeLabel)}
                  </p>
                  <h2 className="ming-title mt-5 text-4xl font-black leading-tight md:text-5xl">{work.title}</h2>
                  <p className="mt-8 text-2xl leading-9 text-[#111111]/72">{releaseDateLabel(locale, work.date)}</p>
                </div>
                <StreamingLinksBlock locale={locale} />
                <section className="border-t border-[#111111] pt-8">
                  <div className="flex items-end justify-between border-b-4 border-[#111111] pb-6">
                    <h3 className="font-serif text-4xl">{tracksTitle(locale)}</h3>
                    <span className="text-2xl text-[#111111]/58">/ {work.tracks.length}</span>
                  </div>
                  <ol className="divide-y divide-[#111111]/14">
                    {work.tracks.map((track, index) => (
                      <li key={track} className="grid grid-cols-[2rem_1fr] gap-4 py-5 text-xl">
                        <span>{index + 1}.</span>
                        <span className="ming-title">{track}</span>
                      </li>
                    ))}
                  </ol>
                </section>
                <MusicSocialLinksBlock />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ArtistFooter locale={locale} />
    </main>
  );
}

export function getWritingSlugs() {
  return writingPosts.map((post) => post.slug);
}

export function WritingArticlePage({ locale, slug }: { locale: Locale; slug: string }) {
  const post = getWritingPost(slug);

  if (!post) {
    return null;
  }

  return (
    <main className="midnight-ming-site min-h-screen bg-[#f4f0e8] text-[#111111]" style={midnightMingVars}>
      <MidnightMingStyle />
      <ArtistHeader locale={locale} section="writings" />
      <SocialRail />
      <article>
        <section className="bg-[#111111] px-5 pb-14 pt-44 text-[#f4f0e8] md:px-8 md:pb-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
            <div>
              <Link
                href={pathFor(locale, "writings")}
                className="mb-8 inline-flex items-center border-b border-[#f4f0e8]/70 pb-2 text-xs uppercase tracking-[0.24em] text-[#f4f0e8]/70 transition-colors hover:text-white"
              >
                Back to writings
              </Link>
              <p className="mb-5 text-xs uppercase tracking-[0.34em] text-[#f4f0e8]/54">
                <WritingCategoryLabel category={post.category} locale={locale} /> / {post.date}
              </p>
              <h1 className="max-w-5xl font-serif text-[clamp(3.4rem,9vw,8.5rem)] leading-[0.86] text-[#d6bd73]">
                {getWritingCategory(post.category).mark} {post.title}
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-10 text-[#f4f0e8]/76">{post.excerpt}</p>
            </div>
            <WritingPreviewVisual tone={post.tone} index={writingPosts.findIndex((item) => item.slug === post.slug)} />
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.28fr_1fr]">
          <aside className="top-32 h-fit border-t border-[#111111] pt-6 lg:sticky">
            <BookOpenText className="mb-8 size-6" />
            <p className="text-xs uppercase tracking-[0.28em] text-[#111111]/45">Share this note</p>
            <div className="mt-6">
              <ShareActions title={post.title} path={writingPathFor(locale, post.slug)} />
            </div>
          </aside>
          <div className="max-w-3xl">
            <div className="space-y-8 border-t border-[#111111] pt-8 text-xl leading-10 text-[#111111]/78">
              {post.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-16 border-y border-[#111111] py-8">
              <ShareActions title={post.title} path={writingPathFor(locale, post.slug)} />
            </div>
          </div>
        </section>
      </article>
      <NewsletterBlock locale={locale} />
      <ArtistFooter locale={locale} />
    </main>
  );
}

export function WritingCategoryPage({ locale, category }: { locale: Locale; category: WritingCategoryKey }) {
  const categoryMeta = getWritingCategory(category);

  return (
    <main className="midnight-ming-site min-h-screen bg-[#f4f0e8] text-[#111111]" style={midnightMingVars}>
      <MidnightMingStyle />
      <ArtistHeader locale={locale} section="writings" />
      <SocialRail />
      <section className="bg-[#111111] px-5 pb-16 pt-44 text-[#f4f0e8] md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-[#f4f0e8]/54">WRITINGS / CATEGORY</p>
          <h1 className="max-w-5xl font-serif text-[clamp(4rem,12vw,10rem)] leading-[0.82]">
            <span className="block text-[#d6bd73]">
              {categoryMeta.mark} {categoryMeta.en}
            </span>
            {locale !== "en" && (
              <span className="mt-5 block text-[0.36em] font-black leading-none tracking-[0.08em] text-white">
                {categoryMeta.label}
              </span>
            )}
          </h1>
        </div>
      </section>
      <WritingsContent locale={locale} activeCategory={category} />
      <NewsletterBlock locale={locale} />
      <ArtistFooter locale={locale} />
    </main>
  );
}

function ArtistFooter({ locale }: { locale: Locale }) {
  const labels = footerCopy[locale];

  return (
    <footer className="border-t border-[#242424] bg-[#020202] px-5 py-12 text-[#8d8d8d] md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-2 font-semibold tracking-[0.02em] text-base md:text-lg">
            <p>©2025 Yuyu Li Music LLC. All rights reserved.</p>
            <p className="tracking-[0.14em] text-[#8d8d8d]/78">神都玉宇音乐</p>
          </div>
          <div className="hidden h-10 w-px bg-[#8d8d8d]/55 md:block" />
          <div className="h-px w-28 bg-[#8d8d8d]/45 md:hidden" />
          <BusinessContactBlock compact locale={locale} />
        </div>
        <div className="flex md:justify-end">
          <Link
            href={pathFor(locale, "terms-conditions")}
            className="text-lg font-bold uppercase tracking-[0.08em] transition-colors hover:text-[#f4f0e8] md:text-xl"
          >
            {labels.terms}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function ArtistSite({ locale, section }: ArtistSiteProps) {
  return (
    <main className="midnight-ming-site min-h-screen bg-[#f4f0e8] text-[#111111]" style={midnightMingVars}>
      <MidnightMingStyle />
      <ArtistHeader locale={locale} section={section} />
      <SocialRail />
      {section === "home" ? <HomePage locale={locale} /> : <ListingPage locale={locale} section={section} />}
      <ArtistFooter locale={locale} />
    </main>
  );
}
