import Link from "next/link";
import { profile, projects } from "@/content/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { Badge, Button, H2, P, Section } from "@/components/ui";

export default function HomePage() {
  const featured = projects.slice(0, 3);
  const showreel = projects.find((p) => p.videoEmbedUrl);

  return (
    <div className="flex flex-col gap-6">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 md:p-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 size-72 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 size-72 rounded-full bg-cyan-400/20 blur-3xl" />
        </div>

        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{profile.location}</Badge>
            <Badge>Available for freelance</Badge>
            <Badge>Remote / On-site</Badge>
          </div>

          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {profile.headline}
          </h1>
          <P className="mt-4 max-w-2xl">
            I craft high-impact visuals—from clean brand systems to fast, punchy
            edits and motion graphics that feel premium, modern, and on-beat.
          </P>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/projects">View projects</Button>
            <Button href="/contact" variant="ghost">
              Let’s work together
            </Button>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-full px-4 py-2 text-sm text-white/70 hover:text-white"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </section>

      {showreel ? (
        <Section>
          <div className="flex items-end justify-between gap-4">
            <div>
              <H2>Showreel</H2>
              <P className="mt-1">
                A quick snapshot of editing rhythm, typography, and motion.
              </P>
            </div>
            <Link
              href={`/projects/${showreel.slug}`}
              className="text-sm text-white/70 hover:text-white"
            >
              View details
            </Link>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 size-full"
                src={showreel.videoEmbedUrl}
                title={showreel.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Section>
      ) : null}

      <Section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <H2>Featured projects</H2>
            <P className="mt-1">
              A small selection across editing, design, and motion.
            </P>
          </div>
          <Link href="/projects" className="text-sm text-white/70 hover:text-white">
            See all
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section>
        <H2>Services</H2>
        <P className="mt-1">
          Flexible packages, clean handoffs, and fast turnaround when needed.
        </P>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {profile.services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div className="text-sm font-semibold text-white/90">
                {s.title}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-white/30" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <H2>Process</H2>
        <P className="mt-1">
          Clear steps so you always know what’s happening and what’s next.
        </P>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "1. Discover",
              body: "Goals, references, target platform, and success metrics.",
            },
            {
              title: "2. Build",
              body: "Draft → refine. Motion + typography + pacing tuned to the brief.",
            },
            {
              title: "3. Deliver",
              body: "Exports for each platform, plus source files when required.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div className="text-sm font-semibold text-white/90">
                {s.title}
              </div>
              <div className="mt-2 text-sm text-white/70">{s.body}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

