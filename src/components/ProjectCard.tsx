import Link from "next/link";
import type { Project } from "@/content/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const [from, to] = project.cover.gradient;
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div
        className="relative aspect-[3/2] overflow-hidden rounded-xl mb-4 transition-all duration-300 group-hover:opacity-90"
        style={{
          background: `radial-gradient(ellipse at 30% 30%, ${from}66, transparent 60%), radial-gradient(ellipse at 70% 70%, ${to}66, transparent 60%), linear-gradient(135deg, ${from}33, ${to}33)`,
        }}
        aria-label={project.cover.alt}
      >
        <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-250 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0D0D0B] backdrop-blur-sm">
            Open project →
          </span>
        </div>
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[#0D0D0B] transition-colors duration-150 group-hover:text-[#17381D]">
            {project.title}
          </p>
          <p className="mt-0.5 text-sm text-[#8C8C8C]">
            {project.type} · {project.year}
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-[#17381D]/[0.07] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#17381D]">
          {project.role.split(" • ")[0]}
        </span>
      </div>
    </Link>
  );
}
