import Link from "next/link";
import { profile } from "@/content/portfolio";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "About",
  description:
    "Zaldy 'Paldz' Caoile — Video Editor, Creative Strategist, and Graphic Artist with 10+ years of experience.",
};

const experience = [
  {
    role: "Video Editor & Creative Specialist",
    company: "Essential Funding Group",
    period: "2023 – Present",
    items: [
      "Edit and strategize marketing videos focused on lead generation and conversions",
      "Produce direct-response video ads for social media platforms",
      "Collaborate with marketing teams to optimize hooks, pacing, and CTAs",
      "Adapt content into multiple formats — short-form and long-form",
    ],
  },
  {
    role: "Video Editor & Creative Specialist",
    company: "AKT Services / WGS",
    period: "2023 – Present",
    items: [
      "Create end-to-end creative assets including videos and graphic posters",
      "Develop consistent visual branding across platforms",
      "Produce promotional and internal content aligned with company messaging",
    ],
  },
  {
    role: "Video Editor",
    company: "FadPro World",
    period: "2023",
    items: [
      "Edited promotional videos and social media content for fashion campaigns",
      "Worked closely with brand visuals, pacing, and trend-based edits",
      "Delivered short-form content optimized for engagement",
    ],
  },
  {
    role: "Video Editor & Graphic Artist",
    company: "Real Estate Industry",
    period: "2016 – 2022",
    items: [
      "Edited property walkthroughs, promotional videos, and client-focused content",
      "Produced long-form videos and marketing materials for real estate professionals",
      "Helped elevate brand presence through clean, professional visuals",
    ],
  },
];

const skills = [
  "Video Editing & Visual Storytelling",
  "Creative Strategy & Marketing Content",
  "Graphic Design & Marketing Posters",
  "Short-Form Content (Reels, TikTok, Shorts)",
  "Long-Form Video (Vlogs, Cinematic Content)",
  "Motion Graphics & Visual Effects",
  "Sound Design, Mixing & Audio Cleanup",
  "Social Media Content Creation",
  "Brand Consistency & Visual Identity",
];

const tools = [
  { name: "CapCut", note: "Primary — fast, efficient video editing" },
  { name: "Adobe After Effects", note: "Motion graphics & VFX" },
  { name: "Adobe Premiere Pro", note: "Long-form editing & color" },
  { name: "Adobe Photoshop", note: "Graphic design & marketing assets" },
];

const workStyle = [
  "Fast and efficient editor with strong attention to performance metrics",
  "Comfortable working remotely and collaborating with global teams",
  "Balances creativity with marketing objectives",
  "Detail-oriented, adaptable, and deadline-driven",
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Header ── */}
      <section className="py-10 md:py-20">
        <div className="anim-1">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
            About
          </p>
          <h1 className="text-4xl font-black tracking-tighter text-[#0D0D0B] md:text-6xl">
            Zaldy Caoile
            <br />
            <span className="text-[#17381D]">— Paldz</span>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#8C8C8C]">
            Video Editor · Creative Strategist · Graphic Artist — 10+ years
            making content that moves people and converts audiences.
          </p>
        </div>
      </section>

      <div className="border-t border-black/[0.06]" />

      {/* ── Summary ── */}
      <Reveal>
        <section className="py-14 md:py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_320px]">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                Summary
              </p>
              <p className="max-w-2xl text-[17px] leading-relaxed text-[#0D0D0B]">
                Creative Video Editor, Creative Strategist, and Graphic Artist
                with{" "}
                <span className="font-semibold">10+ years of experience</span>{" "}
                in video editing and graphic design, and{" "}
                <span className="font-semibold">
                  8+ years of professional work
                </span>{" "}
                across real estate, fashion, lending/funding, and BPO
                industries.
              </p>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#8C8C8C]">
                Specializes in marketing-driven video content, short-form and
                long-form storytelling, and visually compelling graphic assets.
                Actively utilizes AI-powered tools to enhance creative quality
                and speed up workflows. Adept at turning concepts into engaging
                visual content for social media, marketing, and advertising.
              </p>
            </div>

            {/* Stats sidebar */}
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                  Career background
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#17381D]/40" />
                    <p className="text-sm text-[#8C8C8C]">
                      Video editing & graphic design{" "}
                      <span className="font-semibold text-[#0D0D0B]">
                        since 2012
                      </span>{" "}
                      — started as a hobby
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#17381D]/40" />
                    <p className="text-sm text-[#8C8C8C]">
                      Professional creative work{" "}
                      <span className="font-semibold text-[#0D0D0B]">
                        since 2016
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                  Work style
                </p>
                <div className="space-y-2.5">
                  {workStyle.map((w) => (
                    <div key={w} className="flex items-start gap-3">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#17381D]/40" />
                      <p className="text-sm text-[#8C8C8C]">{w}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                  Based in
                </p>
                <p className="text-sm text-[#0D0D0B]">{profile.location}</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <div className="border-t border-black/[0.06]" />

      {/* ── Experience ── */}
      <Reveal>
        <section className="py-14 md:py-20">
          <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
            Experience
          </p>
          <div className="space-y-12">
            {experience.map((job, i) => (
              <div
                key={i}
                className="grid gap-4 md:grid-cols-[220px_1fr] md:gap-10"
              >
                <div>
                  <p className="font-semibold text-[#0D0D0B]">{job.company}</p>
                  <p className="mt-0.5 text-sm text-[#8C8C8C]">{job.period}</p>
                </div>
                <div>
                  <p className="mb-3 text-sm font-semibold text-[#0D0D0B]">
                    {job.role}
                  </p>
                  <ul className="space-y-2">
                    {job.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#17381D]/40" />
                        <span className="text-[14px] leading-relaxed text-[#8C8C8C]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <div className="border-t border-black/[0.06]" />

      {/* ── Skills + Tools ── */}
      <Reveal>
        <section className="py-14 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* Skills */}
            <div>
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                Core skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-[#0D0D0B]/[0.06] px-3 py-1.5 text-sm text-[#0D0D0B]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                Tools & software
              </p>
              <div className="space-y-4">
                {tools.map((t, i) => (
                  <div key={t.name} className="flex gap-5">
                    <span className="mt-0.5 w-6 shrink-0 font-mono text-xs tabular-nums text-[#8C8C8C]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#0D0D0B]">
                        {t.name}
                      </p>
                      <p className="mt-0.5 text-sm text-[#8C8C8C]">{t.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <div className="border-t border-black/[0.06]" />

      {/* ── CTA ── */}
      <Reveal>
        <section className="py-20 md:py-28">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
            Let&apos;s work together
          </p>
          <h2 className="text-3xl font-black tracking-tighter text-[#0D0D0B] md:text-5xl">
            Got a project?
            <br />
            I&apos;m ready.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#8C8C8C]">
            Tell me what you need — platform, deadline, style references. I'll
            come back with a plan and quote.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="rounded-full bg-[#17381D] px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
            >
              Start a project ↗
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-[#8C8C8C] transition-colors hover:text-[#0D0D0B]"
            >
              {profile.email}
            </a>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
