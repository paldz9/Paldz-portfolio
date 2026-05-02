"use client";

function parseFbUrl(embedSrc: string): string {
  try {
    const url = new URL(embedSrc);
    return decodeURIComponent(url.searchParams.get("href") ?? "");
  } catch {
    return "";
  }
}

function isEmbedUrl(src: string) {
  return src.includes("facebook.com/plugins/video.php");
}

export function FacebookVideoCard({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const embed = isEmbedUrl(src);
  const fbUrl = embed ? parseFbUrl(src) : src;

  /* ── Direct link → green "unavailable" placeholder ── */
  if (!embed) {
    return (
      <div className="overflow-hidden rounded-2xl bg-[#17381D]">
        <div className="relative aspect-video flex flex-col items-center justify-center gap-4 px-6 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-8 text-white/25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-white/80">
              Preview unavailable
            </p>
            <p className="text-[12px] leading-relaxed text-white/40">
              This video can't be embedded.
              <br />
              Watch it directly on Facebook.
            </p>
          </div>

          {fbUrl && (
            <a
              href={fbUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-[#17381D] transition-opacity hover:opacity-85"
            >
              Watch on Facebook ↗
            </a>
          )}
        </div>
      </div>
    );
  }

  /* ── Embed URL → iframe with fallback pill ── */
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#0D0D0B]">
      <div className="relative aspect-video">
        <iframe
          className="absolute inset-0 size-full"
          src={src}
          title={title}
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
        {fbUrl && (
          <div className="absolute inset-x-0 bottom-0 flex justify-end p-2 pointer-events-none">
            <a
              href={fbUrl}
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/80"
            >
              Watch on Facebook ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
