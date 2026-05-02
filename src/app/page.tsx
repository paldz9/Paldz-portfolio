import Link from "next/link";
import { profile, projects } from "@/content/portfolio";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  const featured = projects.find((p) => p.slug === "wgs-growth")!;
  const listed = projects;

  return (
    <div>
      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <section className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-center py-16">
        {/* Availability label */}
        <div className="anim-1 mb-10 flex items-center gap-3">
          <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
            <span className="size-1.5 animate-pulse rounded-full bg-[#17381D]" />
            Available for freelance
          </span>
          <span className="h-px w-6 bg-black/20" />
          <span className="text-[11px] uppercase tracking-[0.16em] text-[#8C8C8C]">
            {profile.location}
          </span>
        </div>

        {/* Display headline */}
        <h1 className="anim-2 text-[clamp(3.25rem,9vw,8rem)] font-black leading-[0.9] tracking-tighter text-[#0D0D0B]">
          Motion
          <br />
          <span className="text-[#17381D]">&amp;</span> Visual
          <br />
          Creative.
        </h1>

        {/* Sub-line */}
        <p className="anim-3 mt-8 max-w-xs text-[15px] leading-relaxed text-[#8C8C8C] md:max-w-sm">
          Video editing, motion graphics, and brand design — built for impact
          and made to move.
        </p>

        {/* CTAs */}
        <div className="anim-4 mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#work"
            className="group flex items-center gap-2 text-sm font-semibold text-[#0D0D0B] transition-colors hover:text-[#17381D]"
          >
            View work
            <span className="inline-block transition-transform duration-200 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
          <span className="h-4 w-px bg-black/15" />
          <Link
            href="/contact"
            className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold text-[#0D0D0B] transition-all hover:bg-black/[0.04]"
          >
            Get in touch
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-0 hidden items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-[#8C8C8C]/60 md:flex">
          <span className="h-px w-10 bg-[#8C8C8C]/30" />
          Scroll
        </div>
      </section>

      {/* ════════════════════════════════════
          FEATURED VIDEO — WGS Growth
      ════════════════════════════════════ */}
      <section id="work" className="pb-24 pt-4">
        <Reveal>
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                Latest project
              </p>
              <h2 className="text-2xl font-black tracking-tight text-[#0D0D0B] md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-1 text-sm text-[#8C8C8C]">
                {featured.type} · {featured.year}
              </p>
            </div>
            <Link
              href={`/projects/${featured.slug}`}
              className="shrink-0 text-sm text-[#8C8C8C] transition-colors hover:text-[#0D0D0B]"
            >
              Case study →
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#0D0D0B]">
            {/\.mp4(\?.*)?$/i.test(featured.videoEmbedUrl ?? "") ? (
              <video
                className="block w-full"
                controls
                playsInline
                preload="metadata"
              >
                <source src={featured.videoEmbedUrl} type="video/mp4" />
              </video>
            ) : (
              <iframe
                src={featured.videoEmbedUrl}
                title={featured.title}
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  aspectRatio: "640 / 360",
                }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </Reveal>
      </section>

      {/* ════════════════════════════════════
          PROJECT LIST
      ════════════════════════════════════ */}
      <section className="border-t border-black/[0.06] py-24">
        <Reveal>
          <div className="mb-12 flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
              Selected work
            </p>
            <Link
              href="/projects"
              className="text-sm text-[#8C8C8C] transition-colors hover:text-[#0D0D0B]"
            >
              All projects →
            </Link>
          </div>
        </Reveal>

        <div className="divide-y divide-black/[0.06]">
          {listed.map((p, i) => (
            <Reveal key={p.slug} delay={i * 55}>
              <Link
                href={`/projects/${p.slug}`}
                className="project-row group flex items-center gap-6 rounded-xl px-3 py-6 md:gap-10 md:py-7"
              >
                <span className="w-7 shrink-0 font-mono text-xs tabular-nums text-[#8C8C8C]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0">
                  <p className="truncate text-base font-semibold text-[#0D0D0B] transition-colors duration-150 group-hover:text-[#17381D] md:text-lg">
                    {p.title}
                  </p>
                  <p className="mt-0.5 text-sm text-[#8C8C8C]">{p.type}</p>
                </div>

                <div className="flex shrink-0 items-center gap-6">
                  <span className="hidden text-sm tabular-nums text-[#8C8C8C] md:block">
                    {p.year}
                  </span>
                  <span className="rounded-full bg-[#17381D]/[0.07] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#17381D]">
                    {p.type.split(" ")[0]}
                  </span>
                  <span className="text-[#8C8C8C] opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════
          SERVICES + PROCESS
      ════════════════════════════════════ */}
      <section className="border-t border-black/[0.06] py-24">
        <Reveal>
          <div className="grid gap-16 md:grid-cols-2">
            {/* Services */}
            <div>
              <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                Services
              </p>
              <div className="space-y-6">
                {profile.services.map((s, i) => (
                  <div key={s.title} className="flex gap-5">
                    <span className="mt-0.5 w-6 shrink-0 font-mono text-xs tabular-nums text-[#8C8C8C]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#0D0D0B]">
                        {s.title}
                      </p>
                      <p className="mt-0.5 text-sm text-[#8C8C8C]">
                        {s.items.join(", ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                How it works
              </p>
              <div className="space-y-6">
                {[
                  {
                    n: "01",
                    title: "Discover",
                    desc: "Goals, references, platform, timeline.",
                  },
                  {
                    n: "02",
                    title: "Build",
                    desc: "Draft → refine. Pacing tuned to the brief.",
                  },
                  {
                    n: "03",
                    title: "Deliver",
                    desc: "Platform-ready exports + source files.",
                  },
                ].map((s) => (
                  <div key={s.n} className="flex gap-5">
                    <span className="mt-0.5 w-6 shrink-0 font-mono text-xs tabular-nums text-[#8C8C8C]">
                      {s.n}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#0D0D0B]">
                        {s.title}
                      </p>
                      <p className="mt-0.5 text-sm text-[#8C8C8C]">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ════════════════════════════════════
          CONTACT CTA
      ════════════════════════════════════ */}
      <section className="border-t border-black/[0.06] py-24 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
              Let&apos;s create
            </p>
            <h2 className="text-4xl font-black tracking-tighter text-[#0D0D0B] md:text-6xl">
              Got a project
              <br />
              in mind?
            </h2>
            <p className="mx-auto mt-6 max-w-sm text-[15px] leading-relaxed text-[#8C8C8C]">
              Tell me what you&apos;re building. I&apos;ll come back with a
              plan, timeline, and quote.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#17381D] px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
              >
                Start a project ↗
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-[#8C8C8C] transition-colors hover:text-[#0D0D0B]"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
