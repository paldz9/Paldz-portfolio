import Link from "next/link";
import { profile } from "@/content/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-medium text-white/90">{profile.name}</div>
            <div className="mt-1 text-sm text-white/60">
              {profile.headline}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
            <Link href="/projects" className="hover:text-white">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            {profile.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-xs text-white/45">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

