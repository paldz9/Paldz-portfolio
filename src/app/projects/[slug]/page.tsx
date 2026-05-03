import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { projects } from "@/content/portfolio";
import { getGalleryCategories } from "@/lib/gallery";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui";
import { FacebookVideoCard } from "@/components/FacebookVideoCard";
import { WebsitePreview } from "@/components/WebsitePreview";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const [from, to] = project.cover.gradient;
  const videoUrl = project.videoEmbedUrl;
  const isCloudinaryPlayer = videoUrl?.includes("player.cloudinary.com");
  const isMp4 = !!videoUrl && /\.mp4(\?.*)?$/i.test(videoUrl);
  const categories = project.galleryFolder
    ? await getGalleryCategories(project.galleryFolder)
    : null;

  return (
    <div>
      {/* ── Back nav ── */}
      <div className="anim-1 pt-6 md:pt-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[#8C8C8C] transition-colors hover:text-[#0D0D0B]"
        >
          ← All projects
        </Link>
      </div>

      {/* ── Header ── */}
      <section className="py-8 md:py-14">
        <div className="anim-2 flex flex-wrap gap-2 mb-6">
          <Badge>{project.type}</Badge>
          <Badge>{project.year}</Badge>
          <Badge>{project.role.split(" • ")[0]}</Badge>
        </div>

        <h1 className="anim-3 max-w-3xl text-3xl font-black tracking-tight text-[#0D0D0B] md:text-5xl">
          {project.title}
        </h1>

        <p className="anim-4 mt-5 max-w-2xl text-[15px] leading-relaxed text-[#8C8C8C]">
          {project.summary}
        </p>

        {project.links?.[0] && project.type !== "Web Design" && (
          <div className="mt-8">
            <a
              href={project.links[0].href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#17381D] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
            >
              {project.links[0].label} ↗
            </a>
          </div>
        )}
      </section>

      {/* ── Gallery (image projects) ── */}
      {categories ? (
        <div className="mb-14 space-y-16">
          {categories.map((cat) => (
            <div key={cat.name}>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                {cat.name}
              </p>
              <div className="columns-2 sm:columns-3 md:columns-4 gap-2">
                {cat.images.map((src, i) => (
                  <div
                    key={i}
                    className="mb-2 break-inside-avoid overflow-hidden rounded-xl bg-[#F0F0EE]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${cat.name} ${i + 1}`}
                      loading="lazy"
                      className="block w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : project.videos ? (
        /* ── Video collection ── */
        <Reveal>
          <div className="mb-14 columns-1 sm:columns-2 md:columns-3 gap-3">
            {project.videos.map((src, i) =>
              /\.mp4(\?.*)?$/i.test(src) ? (
                <div
                  key={i}
                  className="mb-3 break-inside-avoid overflow-hidden rounded-2xl bg-[#0D0D0B]"
                >
                  <video
                    className="block w-full"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={src} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <div key={i} className="mb-3 break-inside-avoid">
                  <FacebookVideoCard
                    src={src}
                    title={`${project.title} — clip ${i + 1}`}
                  />
                </div>
              )
            )}
          </div>
        </Reveal>
      ) : project.type === "Web Design" && project.links?.length ? (
        /* ── Web Design — site preview cards ── */
        <Reveal>
          <div className="mb-14 grid gap-4 sm:grid-cols-2">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-6 transition-all hover:border-[#17381D]/30 hover:shadow-lg"
              >
                {/* gradient blob */}
                <div
                  className="absolute inset-0 opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.07]"
                  style={{
                    background: `radial-gradient(ellipse at 20% 20%, ${from}ff, transparent 60%), radial-gradient(ellipse at 80% 80%, ${to}ff, transparent 60%)`,
                  }}
                />

                <div className="relative flex flex-col gap-4">
                  {/* live preview */}
                  <WebsitePreview href={link.href} title={link.label} />

                  {/* label + url + badge */}
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#0D0D0B] transition-colors group-hover:text-[#17381D]">
                        {link.label}
                      </p>
                      <p className="mt-0.5 truncate text-[12px] text-[#8C8C8C]">
                        {link.href.replace("https://", "")}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-[#17381D] px-3 py-1 text-[11px] font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      Visit ↗
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      ) : (
        /* ── Single video / cover ── */
        <Reveal>
          <div className="mb-14 overflow-hidden rounded-2xl bg-[#0D0D0B]">
            {videoUrl ? (
              isMp4 ? (
                <video
                  className="block w-full"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={videoUrl} type="video/mp4" />
                </video>
              ) : isCloudinaryPlayer ? (
                <iframe
                  src={videoUrl}
                  title={project.title}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    aspectRatio: "640 / 360",
                  }}
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="relative aspect-video">
                  <iframe
                    className="absolute inset-0 size-full"
                    src={videoUrl}
                    title={project.title}
                    allow="autoplay; fullscreen; accelerometer; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )
            ) : (
              <div
                className="aspect-[16/9]"
                style={{
                  background: `radial-gradient(ellipse at 25% 25%, ${from}55, transparent 55%), radial-gradient(ellipse at 75% 75%, ${to}55, transparent 55%), linear-gradient(135deg, ${from}33, ${to}33)`,
                }}
                aria-label={project.cover.alt}
              />
            )}
          </div>
        </Reveal>
      )}

      {/* ── Details ── */}
      <Reveal delay={80}>
        <div className="grid gap-8 md:gap-12 md:grid-cols-[1fr_280px]">
          {/* Highlights */}
          <div>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
              Highlights
            </p>
            <ul className="space-y-4">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-4 text-[15px] leading-relaxed text-[#8C8C8C]"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#17381D]/40" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                Tools used
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>

            {project.links?.length && project.type !== "Web Design" ? (
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                  Links
                </p>
                <div className="flex flex-col gap-2">
                  {project.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[#8C8C8C] transition-colors hover:text-[#0D0D0B]"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Reveal>

      {/* ── CTA ── */}
      <Reveal delay={120}>
        <div className="mt-20 border-t border-black/[0.06] pt-12">
          <p className="text-[15px] text-[#8C8C8C]">
            Like what you see?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[#0D0D0B] underline-offset-2 hover:underline"
            >
              Let&apos;s build yours ↗
            </Link>
          </p>
        </div>
      </Reveal>
    </div>
  );
}
