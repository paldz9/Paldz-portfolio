import Link from "next/link";
import { projects } from "@/content/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Projects",
  description: "Editing, motion graphics, and graphic design work.",
};

export default function ProjectsPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-14 md:py-20">
        <div className="anim-1">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
            Work
          </p>
          <h1 className="text-4xl font-black tracking-tighter text-[#0D0D0B] md:text-6xl">
            Projects
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#8C8C8C]">
            Selected work across editing, motion graphics, and design.
          </p>
        </div>
      </section>

      {/* Grid */}
      <div className="border-t border-black/[0.06] pt-12">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <Reveal>
        <div className="mt-24 border-t border-black/[0.06] pt-14 text-center">
          <p className="text-[15px] text-[#8C8C8C]">
            See something you like?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[#0D0D0B] underline-offset-2 hover:underline"
            >
              Let&apos;s talk ↗
            </Link>
          </p>
        </div>
      </Reveal>
    </div>
  );
}
