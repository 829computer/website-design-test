# Writings Publishing Workflow

This document is the reusable publishing rulebook for the official artist site `WRITINGS / 创作札记` section. Use it whenever new writing, work notes, book notes, lyrics notes, production notes, or long-form blog posts should be published inside the website.

## Publishing Goal

Each post should live on the website itself, not as an external social-media link. Every post must have:

- A reusable category.
- A formal title.
- A date.
- A short excerpt for the article wall.
- A URL slug.
- Body paragraphs.
- A visual preview tone.
- Share buttons on the article page.

The Writing page should keep this layout:

- No left-side generic placeholder image or vinyl/cover symbol on the Writing index page.
- Latest 3 posts: large horizontal preview rows with visual, category, date, title, and excerpt.
- The latest 3 preview rows should alternate image/text direction, creating a left/right/left reading rhythm across the page.
- Older posts: compact archive list with category, date, and title.
- Every post opens to its own detail page at `/artist/{locale}/writings/{slug}`.
- The category filter bar should appear above the article wall.
- Every category should have its own URL and show only posts in that category.

## Reusable Categories

Use only these categories unless the user explicitly asks to add a new permanent category.

| Key | Display | English | Symbol | Use For |
| --- | --- | --- | --- | --- |
| `books` | 书籍作品 | BOOKS | ◆ | Book excerpts, book project notes, manuscript fragments, book announcements. |
| `lyrics` | 歌词手记 | LYRICS | ♪ | Lyrics notes, line-by-line reflections, lyric drafts, song text explanations. |
| `ideas` | 创作理念 | IDEAS | ✦ | Creative philosophy, artistic method, concept essays, worldview behind works. |
| `production` | 制作笔记 | STUDIO | ▣ | Demo notes, arrangement notes, recording/mixing notes, production choices. |
| `essay` | 长文博客 | ESSAY | ¶ | Long-form posts, personal essays, website notes, broader reflections. |

## Title Format

On the website, display category information before the article title.

Use this logic:

- Metadata line: `符号 分类 英文 / 日期`
- Formal title line: `符号 正式文章标题`

Examples:

- `✦ 创作理念 IDEAS / 2026.06.12`
- `✦ 旋律抵达之前，先出现的是一个画面`
- `♪ 歌词像一张私人地图`
- `▣ 给一首未发行 demo 的说明`

Do not put the category into the slug unless it helps clarity. The slug should stay short and readable.

## URL Rules

Every post needs a stable `slug`. The URL is generated from the slug:

```text
/artist/{locale}/writings/{slug}
```

Examples:

```text
/artist/zh-cn/writings/before-the-melody-arrives
/artist/zh-tw/writings/before-the-melody-arrives
/artist/en/writings/before-the-melody-arrives
```

Each category also has a stable URL:

```text
/artist/{locale}/writings/category/{categoryKey}
```

Examples:

```text
/artist/zh-cn/writings/category/books
/artist/zh-cn/writings/category/lyrics
/artist/zh-cn/writings/category/ideas
/artist/zh-cn/writings/category/production
/artist/zh-cn/writings/category/essay
```

Slug rules:

- Use lowercase English words.
- Separate words with hyphens.
- Keep it under roughly 8 words when possible.
- Do not use Chinese characters in the slug for now.
- Do not change old slugs after publishing unless the user explicitly accepts broken old links or asks for redirects.

## User Input Template

When the user wants to publish a new post, they can paste this:

```text
分类：创作理念
标题：这里写正式标题
日期：2026.06.14
摘要：这里写列表页预览摘要，1-2 句话。
URL建议：optional-english-slug
预览风格：amber / ink / paper，可不填

正文：
第一段……

第二段……

第三段……
```

If the user omits fields:

- Category: infer from content, but ask only if ambiguous.
- Date: use the current date.
- Slug: generate a short English slug from the title.
- Tone: choose by category:
  - `books`: `amber`
  - `lyrics`: `paper`
  - `ideas`: `amber`
  - `production`: `ink`
  - `essay`: `paper`
- Excerpt: summarize the post in 1-2 restrained sentences.

## Codex Implementation Steps

When publishing a post now, update the static post data in:

```text
src/app/artist/artist-site.tsx
```

Add the new post near the top of `writingPosts`, newest first:

```ts
{
  slug: "example-slug",
  date: "2026.06.14",
  category: "ideas",
  title: "正式文章标题",
  excerpt: "列表页摘要。",
  body: [
    "正文第一段。",
    "正文第二段。",
    "正文第三段。",
  ],
  tone: "amber",
}
```

Then verify:

```text
npm run check
```

Also verify at least:

```text
/artist/zh-cn/writings
/artist/zh-cn/writings/category/{categoryKey}
/artist/zh-cn/writings/{slug}
```

Finally, update the workspace `log.md` with the publishing record.

## Future Upgrade

This is currently a lightweight static publishing workflow. It is not yet heavy enough to require a Codex skill.

Consider turning this into a skill when any of these become common:

- Publishing many posts per week.
- Converting pasted long drafts into structured posts automatically.
- Maintaining separate Simplified Chinese, Traditional Chinese, and English bodies.
- Adding real cover images per post.
- Adding search, tags, pagination, or related posts.
- Moving post data from code into Markdown / MDX files.
