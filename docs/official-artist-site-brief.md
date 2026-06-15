# Official Artist Site Brief

## Current Direction

This document records the evolving plan for the real artist website. The first version should stay static, lightweight, and easy to upgrade. It should not include login, membership, payments, a database, or a custom backend.

The first visual pass should borrow the scale and mood from the local JVR experiment at `/experiments/jvr-about`: black and warm off-white surfaces, thin dividers, oversized serif headlines, dense spacing control, and music-related SVG placeholders. The main section menu should also reference the second supplied screenshot: black panel, large gold English section names, and white Chinese subtitles. Final colors, photography, typography, and brand assets can be replaced later.

## Entry Points

- `/artist`: default simplified Chinese home page.
- `/artist/zh-cn`: simplified Chinese home.
- `/artist/zh-tw`: traditional Chinese home.
- `/artist/en`: English home.
- `/artist/{locale}/about`: about me / 关于我.
- `/artist/{locale}/artists`: artists area / 艺人专区.
- `/artist/{locale}/video`: video area / 影音专区.
- `/artist/{locale}/music`: music area and listening links / 音乐专区.
- `/artist/{locale}/news`: news and announcements / 最新消息.
- `/artist/{locale}/writings`: books, creative philosophy, and blog posts / 创作札记.
- `/artist/{locale}/terms-conditions`: legal placeholder page linked from the footer.

## Core Modules

- Hero: artist identity, one-line positioning, latest action.
- Latest release: current single, EP, album, or placeholder.
- Bilingual section menu: `ABOUT 关于我`, `ARTISTS 艺人专区`, `VIDEOS 影音专区`, `MUSIC 音乐专区`, `NEWS 最新消息`, `WRITINGS 创作札记`.
- Music page: use a cover-grid catalog inspired by the supplied reference. Each item should show a square cover first, with song/album title, date, artist, and type displayed below the cover rather than as hover-only overlay text.
- Music categories: right-side filter navigation should include `所有`, `专辑`, `单曲`, and `其他`; category pages live at `/artist/{locale}/music/category/{categoryKey}`.
- Music detail pages: each release opens at `/artist/{locale}/music/{slug}` and uses a two-column layout: cover image on the left, release information and track list on the right.
- Digital listening: on every music detail page, keep the structure to two levels. Do not hide listening services behind a third click. Show Apple Music, Spotify, YouTube Music, KKBOX, MOOV, JOOX, NetEase Cloud Music, and QQ Music directly under `数位收听` with icons and placeholder URLs.
- Music links: Spotify, Apple Music, SoundCloud, NetEase Cloud Music, QQ Music, Bandcamp or future smart-link services.
- Video page: use a flat video grid inspired by JVR-style video listing pages. Each item should link directly to a YouTube URL and show a preview image, date, artist name, song/video title, and play affordance. Use simulated SVG thumbnails until real YouTube thumbnails or official stills are available.
- Video links: keep YouTube, Bilibili, TikTok, Douyin, Instagram Reels as a secondary platform-link block at the bottom-right of the video page, not as the main page content.
- Social links: Weibo, WeChat, X, Instagram, TikTok, YouTube.
- Left social rail: keep only the most important four visible shortcuts for v1: YouTube, 微博, X, 微信. Use recognizable vector-style platform marks plus full text on hover; replace placeholder URLs after account registration.
- About Follow directory: group links by Social / Video / Music / Other. Every row should include icon + explicit platform name + short purpose note, not icon-only labels.
- Newsletter: embedded Tally email form, no local account system. Public form link: `https://tally.so/r/PdP2Gx`.
- Artists area: collaborators, featured artists, production clients, or future roster.
- News: releases, videos, interviews, collaborations, and announcements.
- Writings: books, lyrics notes, creative philosophy, production journals, and long-form posts.
- Writings publishing workflow: use `docs/writings-publishing-workflow.md` for reusable categories, title format, URL rules, and the Codex publishing steps.
- Footer: black legal bar with `©2025 Yuyu Li Music LLC. All rights reserved.`, Chinese company name `神都玉宇音乐`, and a `Terms & Conditions` link.
- Business contact v1: display `music@yuyu-li.com` and `+1 (616) 625-9555` in two places: the About page below the Follow directory, and a compact footer contact block. The phone should display in international format and use `tel:+16166259555`; email should use `mailto:music@yuyu-li.com`.
- Terms page: rewritten site-use introduction, copyright protection statement, and placeholder sections for future account, payment, pricing, IP, delivery, customs, returns, disclaimer, and privacy terms.
- Contact information can live in the footer or newsletter area for v1 unless a dedicated contact page is requested again.

## Visual Elements To Update Later

- Artist name and logo lockup.
- Final color palette.
- Final type pairing.
- Artist portrait photography.
- Album and single artwork.
- MV stills and live performance images.
- Real YouTube video URLs and thumbnails for the Video page.
- Real album/single cover images and real digital listening URLs for the Music page.
- Motion details for page transitions and section reveals.
- Real platform URLs and UTM strategy.
- Real social and music platform account URLs.
- Optional future platforms to consider but not add yet: 小红书, Facebook, Threads, Bandcamp, Audiomack, Tidal, Amazon Music, Deezer, Pandora, Songkick, Bandsintown, Patreon, Discord, Linkfire, Feature.fm, ToneDen.

## Upgrade Path

Phase 1 is a static official site with platform links and an embedded Tally newsletter form.

Phase 2 can add external shop, ticketing, smart links, analytics, and embedded newsletter forms.

Phase 3 can add fan club, member-only content, presale access, or gated archive only when there is a clear reason for users to log in.

Business contact upgrade path:

- Phase 1: show business email and Google Voice number on About + footer.
- Phase 2: create `/artist/{locale}/contact` with sections for Business Inquiries, Booking, Press, Licensing, and General Contact.
- Phase 3: route inquiries through a form service or CRM, optionally hide the public phone number and keep email/form as the primary contact.
- Phone display note: because this is a US number and the site may be viewed internationally, display as `+1 (616) 625-9555`; use clickable HTML equivalent `<a href="tel:+16166259555">+1 (616) 625-9555</a>`.

Music catalog upgrade idea:

- Future catalog should support year filtering, for example `2025`, `2026`, and later years.
- Future catalog should support searching by song name or album name.
- Because one song may have multiple versions, recordings, arrangements, or instrument editions, search results should be able to group versions into one song/release family page.
- Example future structure: a canonical song page for `Song Name`, with child versions such as `Official Release`, `Demo`, `Piano Version`, `String Version`, `Live Version`, `Instrumental`, and `Remix`.
- This can stay static for v1, but the content model should avoid losing version metadata when real releases are added.

## Writings Publishing Note

The Writing section now uses five reusable categories:

- `books`: `◆ 书籍作品 / BOOKS`
- `lyrics`: `♪ 歌词手记 / LYRICS`
- `ideas`: `✦ 创作理念 / IDEAS`
- `production`: `▣ 制作笔记 / STUDIO`
- `essay`: `¶ 长文博客 / ESSAY`

Each post should display its category before the formal title and should have a stable URL at `/artist/{locale}/writings/{slug}`. For the full repeatable workflow, use `docs/writings-publishing-workflow.md`.

The Writing index page should not use the generic vinyl/cover placeholder from other section pages. It should be a full-width article wall: category filter bar first, latest three posts as horizontal preview rows with alternating image/text direction, then older posts in a compact archive list. Category filter pages live at `/artist/{locale}/writings/category/{categoryKey}`.
