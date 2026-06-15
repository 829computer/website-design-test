"use client";

import { Check, Copy, Mail, Share2 } from "lucide-react";
import { useState } from "react";

type ShareActionsProps = {
  title: string;
  path: string;
};

export function ShareActions({ title, path }: ShareActionsProps) {
  const [copied, setCopied] = useState(false);

  function getShareUrl() {
    return new URL(path, window.location.origin).toString();
  }

  async function handleNativeShare() {
    const shareUrl = getShareUrl();

    if (navigator.share) {
      await navigator.share({ title, url: shareUrl });
      return;
    }
    await handleCopy();
  }

  async function handleCopy() {
    const shareUrl = getShareUrl();

    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function handleXShare() {
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(getShareUrl());

    window.open(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, "_blank", "noreferrer");
  }

  function handleEmailShare() {
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(getShareUrl());

    window.location.href = `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={handleNativeShare}
        className="inline-flex h-11 items-center gap-2 border border-[#111111] px-4 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-[#111111] hover:text-[#f4f0e8]"
      >
        <Share2 className="size-4" />
        Share
      </button>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex h-11 items-center gap-2 border border-[#111111] px-4 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-[#111111] hover:text-[#f4f0e8]"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        {copied ? "Copied" : "Copy"}
      </button>
      <button
        type="button"
        onClick={handleXShare}
        className="inline-flex h-11 items-center border border-[#111111] px-4 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-[#111111] hover:text-[#f4f0e8]"
      >
        X
      </button>
      <button
        type="button"
        onClick={handleEmailShare}
        className="inline-flex h-11 items-center gap-2 border border-[#111111] px-4 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-[#111111] hover:text-[#f4f0e8]"
      >
        <Mail className="size-4" />
        Email
      </button>
    </div>
  );
}
