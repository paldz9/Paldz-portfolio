import { profile } from "@/content/portfolio";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Contact",
  description: "Book a project or request a quote.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-14 md:py-20">
        <div className="anim-1">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
            Contact
          </p>
          <h1 className="text-4xl font-black tracking-tighter text-[#0D0D0B] md:text-6xl">
            Let&apos;s work
            <br />
            together.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#8C8C8C]">
            Tell me your project — platform, duration, deadline, references.
            I&apos;ll reply with a plan and quote.
          </p>
        </div>
      </section>

      <div className="border-t border-black/[0.06]" />

      {/* Content */}
      <Reveal>
        <section className="py-16">
          <div className="grid gap-14 md:grid-cols-[1fr_420px]">
            {/* Left — email + info */}
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                Reach out
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="group inline-block text-2xl font-bold text-[#0D0D0B] underline-offset-4 transition-colors hover:text-[#17381D] hover:underline md:text-3xl"
              >
                {profile.email}
              </a>

              <p className="mt-3 text-sm text-[#8C8C8C]">
                Usually back within 24 hours.
              </p>

              <div className="mt-10">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                  Open to
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Video editing",
                    "Motion graphics",
                    "Graphic design",
                    "Branding",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#0D0D0B]/[0.06] px-3 py-1.5 text-sm text-[#0D0D0B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                  Social
                </p>
                <div className="flex flex-col gap-2.5">
                  {profile.social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-[#8C8C8C] transition-colors hover:text-[#0D0D0B]"
                    >
                      {s.label} →
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — brief form */}
            <div>
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                Send a brief
              </p>

              <form
                action={`mailto:${profile.email}`}
                method="post"
                encType="text/plain"
                className="space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-[#8C8C8C]">
                    Project type
                    <input
                      name="Project type"
                      className="rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-sm text-[#0D0D0B] placeholder-[#8C8C8C]/50 outline-none transition focus:border-[#17381D]/40 focus:ring-2 focus:ring-[#17381D]/8"
                      placeholder="Video / Motion / Design"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-[#8C8C8C]">
                    Deadline
                    <input
                      name="Deadline"
                      className="rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-sm text-[#0D0D0B] placeholder-[#8C8C8C]/50 outline-none transition focus:border-[#17381D]/40 focus:ring-2 focus:ring-[#17381D]/8"
                      placeholder="e.g. June 30"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm text-[#8C8C8C]">
                  Budget range
                  <input
                    name="Budget"
                    className="rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-sm text-[#0D0D0B] placeholder-[#8C8C8C]/50 outline-none transition focus:border-[#17381D]/40 focus:ring-2 focus:ring-[#17381D]/8"
                    placeholder="e.g. $300–500"
                  />
                </label>

                <label className="grid gap-2 text-sm text-[#8C8C8C]">
                  Project details
                  <textarea
                    name="Details"
                    rows={5}
                    className="resize-none rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-sm text-[#0D0D0B] placeholder-[#8C8C8C]/50 outline-none transition focus:border-[#17381D]/40 focus:ring-2 focus:ring-[#17381D]/8"
                    placeholder="Links, references, duration, platform, style…"
                  />
                </label>

                <p className="text-xs text-[#8C8C8C]/70">
                  Opens your email client.{" "}
                  <span>Connect Formspree for a live form.</span>
                </p>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#17381D] py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                >
                  Send brief via email ↗
                </button>
              </form>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
