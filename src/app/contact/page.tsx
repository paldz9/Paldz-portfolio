import { profile } from "@/content/portfolio";
import { Badge, Button, H2, P, Section } from "@/components/ui";

export const metadata = {
  title: "Contact",
  description: "Book a project or request a quote.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-6">
      <Section>
        <H2>Let’s work together</H2>
        <P className="mt-1 max-w-2xl">
          Tell me what you’re making (platform, duration, deadline, references).
          I’ll reply with a quick plan + estimate.
        </P>

        <div className="mt-5 flex flex-wrap gap-2">
          <Badge>Video editing</Badge>
          <Badge>Motion graphics</Badge>
          <Badge>Graphic design</Badge>
          <Badge>Branding</Badge>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-sm font-semibold text-white/90">Email</div>
            <div className="mt-2 text-sm text-white/70">{profile.email}</div>
            <div className="mt-4">
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(
                  "Project inquiry"
                )}`}
                className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
              >
                Send email
              </a>
            </div>
          </div>

          <form
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            action={`mailto:${profile.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="text-sm font-semibold text-white/90">
              Quick brief (optional)
            </div>
            <P className="mt-1">
              This uses your email client. For a real form, connect a provider
              (Formspree, Getform, etc.).
            </P>

            <div className="mt-4 grid gap-3">
              <label className="grid gap-1 text-sm text-white/70">
                Project type
                <input
                  name="Project type"
                  className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white outline-none focus:border-violet-400/60"
                  placeholder="Video edit / Motion / Design"
                />
              </label>
              <label className="grid gap-1 text-sm text-white/70">
                Deadline
                <input
                  name="Deadline"
                  className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white outline-none focus:border-violet-400/60"
                  placeholder="e.g. May 20"
                />
              </label>
              <label className="grid gap-1 text-sm text-white/70">
                Details
                <textarea
                  name="Details"
                  className="min-h-28 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white outline-none focus:border-violet-400/60"
                  placeholder="Links, references, duration, platform, vibe…"
                />
              </label>
            </div>

            <div className="mt-4">
              <Button variant="primary">Create email draft</Button>
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
}

