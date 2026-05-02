import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col justify-center py-20">
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17381D]">
        404
      </p>
      <h1 className="text-4xl font-black tracking-tighter text-[#0D0D0B] md:text-6xl">
        Page not found.
      </h1>
      <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#8C8C8C]">
        That page doesn&apos;t exist or was moved.
      </p>
      <div className="mt-10 flex items-center gap-5">
        <Link
          href="/"
          className="rounded-full bg-[#17381D] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
        >
          Go home
        </Link>
        <Link
          href="/projects"
          className="text-sm text-[#8C8C8C] transition-colors hover:text-[#0D0D0B]"
        >
          Browse projects →
        </Link>
      </div>
    </div>
  );
}
