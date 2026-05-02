import Link from "next/link";
import { profile } from "@/content/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06]">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="size-2 rounded-full bg-[#17381D]" />
              <span className="text-sm font-semibold text-[#0D0D0B]">
                {profile.name}
              </span>
            </Link>
            <p className="mt-2 text-sm text-[#8C8C8C]">{profile.location}</p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-[#8C8C8C]">
            <Link
              href="/projects"
              className="transition-colors hover:text-[#0D0D0B]"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-[#0D0D0B]"
            >
              Contact
            </Link>
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

        <div className="mt-10 border-t border-black/[0.05] pt-6 text-xs text-[#8C8C8C]/60">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
