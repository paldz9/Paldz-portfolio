import { projects } from "@/content/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { H2, P, Section } from "@/components/ui";

export const metadata = {
  title: "Projects",
  description: "Editing, motion graphics, and graphic design work.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6">
      <Section>
        <H2>Projects</H2>
        <P className="mt-1">
          Case studies, reels, and selected work. Add new items in{" "}
          <span className="font-mono text-white/80">src/content/portfolio.ts</span>.
        </P>
      </Section>

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}

