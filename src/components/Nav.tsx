"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || open
            ? "border-b border-black/[0.06] bg-[#F7F7F4]/95 backdrop-blur-md"
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

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-sm text-[#8C8C8C] md:flex">
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

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-[#0D0D0B] transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-[#0D0D0B] transition-all duration-300 ${
                open ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-[#0D0D0B] transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[#F7F7F4] pt-16 transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 pt-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-b border-black/[0.06] py-6 text-3xl font-black tracking-tight text-[#0D0D0B] transition-colors hover:text-[#17381D]"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#17381D] px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
            >
              Hire me ↗
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
