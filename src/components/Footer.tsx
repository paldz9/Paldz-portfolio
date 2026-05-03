import Link from "next/link";
import Image from "next/image";
import { profile } from "@/content/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06]">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8">
        {/* Top row */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <Image
                src="/Icon Green.png"
                alt="Paldz logo"
                width={36}
                height={36}
                className="transition-transform duration-200 group-hover:scale-110"
              />
              <span className="text-base font-semibold tracking-tight text-[#0D0D0B]">
                {profile.name}
              </span>
            </Link>
            <p className="mt-2 text-sm text-[#8C8C8C]">{profile.headline}</p>
            <p className="mt-1 text-sm text-[#8C8C8C]/60">{profile.location}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-16 gap-y-8 text-sm">
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                Navigate
              </p>
              <div className="flex flex-col gap-2 text-[#8C8C8C]">
                <Link href="/" className="transition-colors hover:text-[#0D0D0B]">Home</Link>
                <Link href="/projects" className="transition-colors hover:text-[#0D0D0B]">Projects</Link>
                <Link href="/about" className="transition-colors hover:text-[#0D0D0B]">About</Link>
                <Link href="/contact" className="transition-colors hover:text-[#0D0D0B]">Contact</Link>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                Social
              </p>
              <div className="flex flex-col gap-2 text-[#8C8C8C]">
                {profile.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#0D0D0B]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
                Hire me
              </p>
              <div className="flex flex-col gap-2 text-[#8C8C8C]">
                <a href={`mailto:${profile.email}`} className="transition-colors hover:text-[#0D0D0B]">
                  {profile.email}
                </a>
                <a href={profile.whatsapp.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#0D0D0B]">
                  {profile.whatsapp.label}
                </a>
                <a href={profile.viber.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#0D0D0B]">
                  {profile.viber.label}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col gap-2 border-t border-black/[0.05] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[#8C8C8C]/60">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-[#8C8C8C]/40">
            Video Editor · Motion Graphics · Graphic Designer · Web Design
          </p>
        </div>
      </div>
    </footer>
  );
}
