import Link from "next/link";
import type { ComponentProps } from "react";

export function Container(props: ComponentProps<"div">) {
  const { className, ...rest } = props;
  return (
    <div
      className={["mx-auto w-full max-w-6xl", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    />
  );
}

export function Section(props: ComponentProps<"section">) {
  const { className, ...rest } = props;
  return (
    <section
      className={[
        "rounded-2xl border border-black/[0.06] bg-white p-6 md:p-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    />
  );
}

export function H2(props: ComponentProps<"h2">) {
  const { className, ...rest } = props;
  return (
    <h2
      className={[
        "text-balance text-xl font-bold tracking-tight text-[#0D0D0B] md:text-2xl",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    />
  );
}

export function P(props: ComponentProps<"p">) {
  const { className, ...rest } = props;
  return (
    <p
      className={[
        "text-pretty text-sm leading-relaxed text-[#8C8C8C] md:text-[15px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    />
  );
}

type ButtonProps =
  | ({ href?: never } & ComponentProps<"button">)
  | ({ href: string } & Omit<ComponentProps<typeof Link>, "href">);

export function Button(
  props: ButtonProps & { variant?: "primary" | "ghost" }
) {
  const { variant = "primary", className } = props;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17381D]/40";
  const styles =
    variant === "primary"
      ? "bg-[#17381D] text-white hover:opacity-85"
      : "border border-black/[0.1] text-[#0D0D0B] hover:bg-black/[0.04]";

  const cls = [base, styles, className].filter(Boolean).join(" ");

  if (typeof (props as { href?: unknown }).href === "string") {
    const {
      href,
      variant: v,
      className: c,
      ...linkProps
    } = props as {
      href: string;
      variant?: "primary" | "ghost";
      className?: string;
    } & Omit<ComponentProps<typeof Link>, "href">;
    void v;
    void c;
    return <Link href={href} className={cls} {...linkProps} />;
  }

  const {
    variant: v,
    className: c,
    ...btnProps
  } = props as {
    variant?: "primary" | "ghost";
    className?: string;
  } & ComponentProps<"button">;
  void v;
  void c;
  return <button className={cls} type="button" {...btnProps} />;
}

export function Badge(props: ComponentProps<"span">) {
  const { className, ...rest } = props;
  return (
    <span
      className={[
        "inline-flex items-center rounded-full bg-[#17381D]/[0.07] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#17381D]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    />
  );
}
