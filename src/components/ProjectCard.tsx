import Link from "next/link";
import type { Project } from "@/content/portfolio";
import { Badge } from "@/components/ui";

export function ProjectCard({ project }: { project: Project }) {
  const [from, to] = project.cover.gradient;
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:bg-white/[0.04]"
    >
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10"
        style={{
          background: `radial-gradient(1200px circle at 20% 10%, ${from}55, transparent 40%), radial-gradient(900px circle at 80% 70%, ${to}55, transparent 45%), linear-gradient(135deg, ${from}22, ${to}22)`,
        }}
        aria-label={project.cover.alt}
      >
        <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10" />
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-white/95">
            {project.title}
          </div>
          <div className="mt-1 text-sm text-white/60">
            {project.type} • {project.year}
          </div>
        </div>
        <Badge className="shrink-0">{project.role}</Badge>
      </div>

      <div className="mt-3 line-clamp-2 text-sm text-white/70">
        {project.summary}
      </div>
    </Link>
  );
}

