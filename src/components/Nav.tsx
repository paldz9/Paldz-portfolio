"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-black/[0.06] bg-[#F7F7F4]/90 backdrop-blur-md"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="size-2 rounded-full bg-[#17381D] transition-all duration-200 group-hover:scale-125" />
          <span className="text-sm font-semibold tracking-tight text-[#0D0D0B]">
            Paldz
          </span>
        </Link>

        <nav className="flex items-center gap-8 text-sm text-[#8C8C8C]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors duration-150 hover:text-[#0D0D0B]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-[#17381D] px-4 py-2 text-xs font-semibold text-white transition-opacity duration-150 hover:opacity-85"
          >
            Hire me
          </Link>
        </nav>
      </div>
    </header>
  );
}
