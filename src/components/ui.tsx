import Link from "next/link";
import type { ComponentProps } from "react";

export function Container(props: ComponentProps<"div">) {
  const { className, ...rest } = props;
  return <div className={["mx-auto w-full max-w-6xl", className].filter(Boolean).join(" ")} {...rest} />;
}

export function Section(props: ComponentProps<"section">) {
  const { className, ...rest } = props;
  return (
    <section
      className={[
        "rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] md:p-8",
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
        "text-balance text-xl font-semibold tracking-tight text-white/95 md:text-2xl",
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
      className={["text-pretty text-sm leading-6 text-white/70 md:text-[15px]", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    />
  );
}

type ButtonProps =
  | ({ href?: never } & ComponentProps<"button">)
  | ({ href: string } & Omit<ComponentProps<typeof Link>, "href">);

export function Button(props: ButtonProps & { variant?: "primary" | "ghost" }) {
  const { variant = "primary", className } = props;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-white/15 bg-white/[0.02] text-white/85 hover:bg-white/[0.06]";

  const cls = [base, styles, className].filter(Boolean).join(" ");

  if (typeof (props as { href?: unknown }).href === "string") {
    const { href, variant: v, className: c, ...linkProps } = props as {
      href: string;
      variant?: "primary" | "ghost";
      className?: string;
    } & Omit<ComponentProps<typeof Link>, "href">;
    void v;
    void c;
    return <Link href={href} className={cls} {...linkProps} />;
  }

  const { variant: v, className: c, ...btnProps } = props as {
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
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    />
  );
}

