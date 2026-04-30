export type ProjectType =
  | "Video Editing"
  | "Motion Graphics"
  | "Graphic Design"
  | "Branding"
  | "Social Media";

export type Project = {
  slug: string;
  title: string;
  type: ProjectType;
  year: string;
  role: string;
  tools: string[];
  tags: string[];
  cover: {
    alt: string;
    gradient: [string, string];
  };
  summary: string;
  highlights: string[];
  links?: {
    label: string;
    href: string;
  }[];
  videoEmbedUrl?: string;
};

export const profile = {
  name: "Paldz",
  headline: "Video Editor • Graphic Designer • Motion Graphics",
  location: "Philippines",
  email: "hello@example.com",
  social: [
    { label: "Behance", href: "https://behance.net/" },
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
  ],
  services: [
    {
      title: "Video Editing",
      items: ["Short-form content", "YouTube edits", "Corporate videos"],
    },
    {
      title: "Motion Graphics",
      items: ["Logo stings", "Lower thirds", "Kinetic typography"],
    },
    {
      title: "Graphic Design",
      items: ["Key visuals", "Posters", "Social media templates"],
    },
    {
      title: "Branding",
      items: ["Logo systems", "Style guides", "Pitch decks"],
    },
  ],
} as const;

export const projects: Project[] = [
  {
    slug: "neon-reel-2026",
    title: "Neon Showreel",
    type: "Motion Graphics",
    year: "2026",
    role: "Motion Designer • Editor",
    tools: ["After Effects", "Premiere Pro"],
    tags: ["Showreel", "Kinetic type", "Transitions"],
    cover: {
      alt: "Abstract neon gradients with dynamic light streaks",
      gradient: ["#7C3AED", "#22D3EE"],
    },
    summary:
      "A fast-paced motion reel focused on transitions, typography, and punchy rhythm edits.",
    highlights: [
      "Designed modular motion system for quick iteration",
      "Built reusable animation presets for consistency",
      "Color pipeline tuned for platform compression",
    ],
    links: [{ label: "Watch", href: "https://youtube.com/" }],
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "brand-kit-social-pack",
    title: "Brand Kit + Social Pack",
    type: "Graphic Design",
    year: "2025",
    role: "Designer",
    tools: ["Photoshop", "Illustrator"],
    tags: ["Branding", "Templates", "Social"],
    cover: {
      alt: "Bold editorial layout with type and shapes",
      gradient: ["#F97316", "#F43F5E"],
    },
    summary:
      "A cohesive identity kit and a ready-to-post social media template set for a small business.",
    highlights: [
      "Defined typography + grid rules for speed",
      "Created 15+ export-ready templates",
      "Delivered usage notes for non-designers",
    ],
    links: [{ label: "Case Study", href: "https://behance.net/" }],
  },
  {
    slug: "shortform-campaign-cutdowns",
    title: "Short-form Campaign Cutdowns",
    type: "Video Editing",
    year: "2025",
    role: "Editor",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    tags: ["Reels", "TikTok", "Captions"],
    cover: {
      alt: "Dark gradient with energetic accent shapes",
      gradient: ["#111827", "#A3E635"],
    },
    summary:
      "Cut a long-form campaign into multiple vertical assets with consistent hooks and pacing.",
    highlights: [
      "Built hook-first structure for retention",
      "Caption styling optimized for readability",
      "Delivered variants for A/B testing",
    ],
  },
];

