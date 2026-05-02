import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { projects } from "@/content/portfolio";
import { Reveal } from "@/components/Reveal";
import { Badge } from "@/components/ui";

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
      <section className="py-10 md:py-14">
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

        {project.links?.[0] && (
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

      {/* ── Video / Cover ── */}
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

      {/* ── Details ── */}
      <Reveal delay={80}>
        <div className="grid gap-12 md:grid-cols-[1fr_280px]">
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

            {project.links?.length ? (
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

      {/* ── Next step CTA ── */}
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
