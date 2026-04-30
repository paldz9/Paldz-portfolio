import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { projects } from "@/content/portfolio";
import { Badge, Button, H2, P, Section } from "@/components/ui";

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
    openGraph: {
      title: project.title,
      description: project.summary,
    },
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

  return (
    <div className="flex flex-col gap-6">
      <Section className="overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{project.type}</Badge>
              <Badge>{project.year}</Badge>
              <Badge>{project.role}</Badge>
            </div>
            <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-white md:text-4xl">
              {project.title}
            </h1>
            <P className="mt-3 max-w-3xl">{project.summary}</P>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button href="/projects" variant="ghost">
              Back to projects
            </Button>
            {project.links?.[0] ? (
              <a
                href={project.links[0].href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
              >
                {project.links[0].label}
              </a>
            ) : null}
          </div>
        </div>

        <div
          className="mt-7 overflow-hidden rounded-2xl border border-white/10"
          style={{
            background: `radial-gradient(1200px circle at 15% 10%, ${from}55, transparent 40%), radial-gradient(900px circle at 85% 80%, ${to}55, transparent 45%), linear-gradient(135deg, ${from}22, ${to}22)`,
          }}
          aria-label={project.cover.alt}
        >
          {project.videoEmbedUrl ? (
            <div className="relative aspect-video bg-black/40">
              <iframe
                className="absolute inset-0 size-full"
                src={project.videoEmbedUrl}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="aspect-[16/9] p-6 md:p-10">
              <div className="max-w-xl rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-sm font-semibold text-white/90">
                  Media placeholder
                </div>
                <div className="mt-2 text-sm text-white/70">
                  Add a video embed URL or image assets for this project in{" "}
                  <span className="font-mono text-white/80">
                    src/content/portfolio.ts
                  </span>
                  .
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:col-span-2">
            <H2 className="text-lg md:text-xl">Highlights</H2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-white/30" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-sm font-semibold text-white/90">Tools</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            <div className="mt-6 text-sm font-semibold text-white/90">Tags</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            {project.links?.length ? (
              <>
                <div className="mt-6 text-sm font-semibold text-white/90">
                  Links
                </div>
                <div className="mt-3 flex flex-col gap-2 text-sm">
                  {project.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/75 hover:text-white"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </Section>

      <div className="text-sm text-white/60">
        <Link href="/contact" className="text-white/80 hover:text-white">
          Want something like this?
        </Link>{" "}
        Let’s talk about your brief.
      </div>
    </div>
  );
}

