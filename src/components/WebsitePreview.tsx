"use client";
import { useEffect, useRef, useState } from "react";

export function WebsitePreview({ href, title }: { href: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.25);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setScale(el.offsetWidth / 1440);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const containerH = Math.round(900 * scale);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl bg-[#F0F0EE]"
      style={{ height: containerH }}
    >
      <iframe
        src={href}
        title={title}
        loading="lazy"
        scrolling="no"
        style={{
          width: "1440px",
          height: "900px",
          border: "none",
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
