export type ProjectType =
  | "Video Editing"
  | "Motion Graphics"
  | "Graphic Design"
  | "Branding"
  | "Social Media"
  | "Web Design";

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
    thumbnail?: string;
  };
  summary: string;
  highlights: string[];
  links?: { label: string; href: string }[];
  videoEmbedUrl?: string;
  videos?: string[];
  videosAspect?: "portrait" | "landscape";
  galleryFolder?: string;
};

export const profile = {
  name: "Paldz",
  headline: "Video Editor • Motion Graphics • Graphic Designer • Web Design",
  location: "Philippines",
  email: "paldzproduction@gmail.com",
  whatsapp: { label: "WhatsApp", href: "https://wa.me/639295091316" },
  viber: { label: "Viber", href: "viber://chat?number=%2B639164762565" },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/paldz.pogi.sagad" },
    { label: "Instagram", href: "https://www.instagram.com/master.paldz/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/master-paldz/" },
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
    {
      title: "Web Design",
      items: ["Landing pages", "Portfolio sites", "UI design & development"],
    },
  ],
} as const;

export const projects: Project[] = [
  {
    slug: "ef-posters",
    title: "Essential Funding Inc. — Social Media Graphics",
    type: "Graphic Design",
    year: "2024–2026",
    role: "Designer",
    tools: ["Photoshop", "Sketch Up", "V-Ray", "Nano Banana"],
    tags: ["Social Media", "Marketing", "Campaigns", "Branding"],
    cover: {
      alt: "Essential Funding Inc. social media graphic design portfolio",
      gradient: ["#1C3D5A", "#2E86C1"],
      thumbnail: "https://res.cloudinary.com/deuwal5fr/image/upload/v1777793303/superhero_rev1_lfsf4t.jpg",
    },
    summary:
      "A comprehensive social media design system for Essential Funding Inc. — spanning creative campaigns, motivational quote cards, industry-specific funding graphics, holiday posts, and minimalist brand visuals.",
    highlights: [
      "300+ graphics across 6 content categories",
      "Consistent brand language adapted across industries and occasions",
      "Campaign-ready templates built for rapid weekly deployment",
      "Minimalist and typography-led designs for high-impact brand recall",
    ],
    galleryFolder: "EF Posters",
  },
  {
    slug: "wgs-akt-designs",
    title: "WGS & AKT — Internal Brand",
    type: "Branding",
    year: "2024–2026",
    role: "Designer",
    tools: ["Photoshop", "Sketch Up", "V-Ray", "Nano Banana"],
    tags: ["Branding", "Employee Apparel", "Internal Comms"],
    cover: {
      alt: "WGS and AKT internal brand design and employee apparel mockups",
      gradient: ["#1A1A2E", "#16213E"],
      thumbnail: "https://res.cloudinary.com/deuwal5fr/image/upload/v1777793347/mock_up_ver_2_n9htos.jpg",
    },
    summary:
      "Internal brand design for WGS and AKT — company announcements, employee recognition, holiday posters, and branded apparel concepts for staff wear only (hoodies, jackets, and shirts), not sold as merchandise.",
    highlights: [
      "Dual-branded designs consistently delivered for both WGS and AKT identities",
      "Employee-only apparel: hoodies, jackets, and T-shirts from concept to mockup",
      "Weekly announcement and milestone graphics for internal communications",
      "Holiday and event posters maintaining brand cohesion across occasions",
    ],
    galleryFolder: "WGS - AKT Graphic Designs",
  },
  {
    slug: "web-design",
    title: "Web Design — Client Sites",
    type: "Web Design",
    year: "2025",
    role: "Designer • Developer",
    tools: ["Photoshop", "Illustrator", "After Effects", "Cursor AI"],
    tags: ["Web Design", "UI/UX", "Brand Identity", "Animation"],
    cover: {
      alt: "Web design projects — Marina Woodcrafts and A1 Remodeling",
      gradient: ["#111111", "#C8A882"],
    },
    summary:
      "Full website design and development for two client brands — Marina Woodcrafts Design Inc. and A1 Remodeling. All visual assets, logos, and UI graphics designed from scratch in Adobe Creative Suite.",
    highlights: [
      "Marina Woodcrafts — custom After Effects intro animation featuring a wood-frame door reveal that opens the site",
      "Marina Woodcrafts — warm, gallery-like layout built to let project photography take center stage",
      "A1 Remodeling — bold black-and-gold identity system (#111111 + #D4A017) conveying premium quality",
      "A1 Remodeling — dark mode support with separate logo variants for light and dark backgrounds",
      "All brand assets — logos, icons, textures, and UI graphics — created entirely in Adobe Photoshop and Illustrator",
      "Both sites built with React and Tailwind CSS, responsive and mobile-first, deployed on Netlify",
    ],
    links: [
      { label: "Marina Woodcrafts", href: "https://marina-wood-craft.netlify.app/" },
      { label: "A1 Remodeling", href: "https://a1-remodeling.netlify.app/" },
    ],
  },
  {
    slug: "marketing-reels",
    title: "Scroll-Stopping Marketing Reels",
    type: "Social Media",
    year: "2024–2026",
    role: "Editor",
    tools: [
      "Premiere Pro",
      "After Effects",
      "Photoshop",
      "ElevenLabs text to speech",
      "ElevenLabs Music Generator",
    ],
    tags: ["Reels", "Ads", "Marketing", "Short-form"],
    cover: {
      alt: "Scroll-stopping marketing reels and social media ads",
      gradient: ["#0F172A", "#6366F1"],
      thumbnail:
        "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723731/funding_friday_10-17-25_tpiiou.jpg",
    },
    summary:
      "A collection of high-converting marketing reels and social media ads engineered for attention — fast hooks, punchy cuts, and visuals built to stop the scroll.",
    highlights: [
      "Hook-first structure designed to capture attention within the first second",
      "Tight pacing and motion-matched cuts for maximum retention",
      "Captions and overlays optimized for silent autoplay",
      "Delivered in vertical and square formats for multi-platform distribution",
    ],
    videos: [
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723731/funding_friday_10-17-25_tpiiou.mp4",
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723731/Funding_Friday_Halloween_e5tvr8.mp4",
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723731/promotion_ri1njf.mp4",
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723730/1113_ooklnq.mp4",
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723729/inc_5000_20sec_bvyqwq.mp4",
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723729/0212_paxnia.mp4",
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723729/1120_mmvcnc.mp4",
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723728/0206_n1nao2.mp4",
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723728/Text_Messages_v4_cjo8on.mp4",
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723727/0129_e4hg5v.mp4",
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723727/1204_pjirik.mp4",
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723727/1218_f4nkrm.mp4",
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723727/1226_qju4pi.mp4",
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723727/0123_ilneci.mp4",
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723726/0115_hpb21z.mp4",
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723724/Funding_Friday_10-23_2_lj9ou9.mp4",
    ],
  },
  {
    slug: "vlog-collection",
    title: "Long-form Vlogs — 2023 to Present",
    type: "Video Editing",
    year: "2023–2026",
    role: "Director • Editor",
    tools: [
      "Premiere Pro",
      "After Effects",
      "Photoshop",
      "DaVinci Resolve",
      "CapCut",
      "ElevenLabs text to speech",
    ],
    tags: ["Vlog", "Long-form", "Storytelling", "Facebook"],
    cover: {
      alt: "Long-form vlog collection shot on location since 2023",
      gradient: ["#78350F", "#D97706"],
    },
    summary:
      "A growing archive of long-form vlogs shot and edited since 2023 — travel, events, and everyday stories told with cinematic pacing and honest storytelling.",
    highlights: [
      "Self-directed and self-edited from capture to final cut",
      "Sound and music design — mixes, ambience, and score choices shaped to match each story beat.",
      "Thumbnail artwork — custom frames built to read clearly at small sizes and set the episode tone.",
      "Voice-over — scripted narration edited for clarity, timing, and level so it sits cleanly in the mix.",
      "Consistent cinematic color grade across all episodes",
      "Paced for long-form retention with natural narrative structure",
      "Published continuously since 2023 across Facebook",
    ],
    videos: [
      "https://www.facebook.com/reel/1982425625885788",
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100075861475134%2Fvideos%2F2330335607335044%2F&show_text=false&width=560&t=0",
      "https://www.facebook.com/61552653226918/videos/347089158383475/",
      "https://www.facebook.com/61552653226918/videos/955174962608936/",
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2890552724461994%2F&show_text=false&width=560&t=0",
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100075861475134%2Fvideos%2F1214486723593635%2F&show_text=false&width=560&t=0",
      "https://www.facebook.com/100075861475134/videos/976191234679457/",
      "https://www.facebook.com/100075861475134/videos/2738456789875635/",
      "https://www.facebook.com/100075861475134/videos/1722621524952808/",
      "https://www.facebook.com/100075861475134/videos/3538219599643963/",
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100075861475134%2Fvideos%2F1628939904528196%2F&show_text=false&width=560&t=0",
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100075861475134%2Fvideos%2F422016793709714%2F&show_text=false&width=560&t=0",
      "https://www.facebook.com/100075861475134/videos/1058726488518792/",
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100075861475134%2Fvideos%2F7278385795583770%2F&show_text=false&width=560&t=0",
      "https://www.facebook.com/100075861475134/videos/1377954026191043/",
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100075861475134%2Fvideos%2F330435029950880%2F&show_text=false&width=560&t=0",
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100075861475134%2Fvideos%2F418095977224566%2F&show_text=false&width=560&t=0",
    ],
  },
  {
    slug: "hr-admin-portal",
    title: "HR Admin Portal — Platform Overview",
    type: "Video Editing",
    year: "2026",
    role: "Editor",
    tools: [
      "Premiere Pro",
      "After Effects",
      "Photoshop",
      "ElevenLabs text to speech",
    ],
    tags: ["HR Platform", "Admin", "Product Demo"],
    cover: {
      alt: "HR admin portal platform overview and feature walkthrough",
      gradient: ["#1E1B4B", "#4F46E5"],
      thumbnail:
        "https://res.cloudinary.com/deuwal5fr/video/upload/v1777725304/HR_Admin_Portal_tn9cu0.jpg",
    },
    summary:
      "A comprehensive feature overview of an HR admin portal, capturing core workflows and interface interactions for client demos and internal documentation.",
    highlights: [
      "Full-feature product walkthrough edited for clarity and flow",
      "Admin workflow coverage from onboarding to reporting",
      "Professional pacing suited for client-facing presentations",
    ],
    videoEmbedUrl:
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777725304/HR_Admin_Portal_tn9cu0.mp4",
  },
  {
    slug: "employee-panel",
    title: "Employee Panel — Self-Service Portal",
    type: "Video Editing",
    year: "2026",
    role: "Editor",
    tools: [
      "Premiere Pro",
      "After Effects",
      "Photoshop",
      "ElevenLabs text to speech",
    ],
    tags: ["HR Platform", "Demo Video", "Walkthrough"],
    cover: {
      alt: "Employee self-service panel walkthrough for an HR platform",
      gradient: ["#1E3A8A", "#3B82F6"],
      thumbnail:
        "https://res.cloudinary.com/deuwal5fr/video/upload/v1777727085/Employee_Panel_r1cc1j.jpg",
    },
    summary:
      "A polished product walkthrough of an employee self-service panel, edited for onboarding clarity and professional client presentation.",
    highlights: [
      "Step-by-step UI navigation edited for first-time user clarity",
      "Clean pacing that guides without overwhelming",
      "Structured for both internal onboarding and external demos",
    ],
    videoEmbedUrl:
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777727085/Employee_Panel_r1cc1j.mp4",
  },
  {
    slug: "training-agreement",
    title: "Training Agreement — HR Onboarding",
    type: "Video Editing",
    year: "2026",
    role: "Editor",
    tools: [
      "Premiere Pro",
      "After Effects",
      "Photoshop",
      "ElevenLabs text to speech",
    ],
    tags: ["HR", "Onboarding", "Training"],
    cover: {
      alt: "Training agreement onboarding video for HR platform",
      gradient: ["#14532D", "#16A34A"],
      thumbnail:
        "https://res.cloudinary.com/deuwal5fr/video/upload/v1777726240/Training_Agreement_pj3khc.jpg",
    },
    summary:
      "A concise walkthrough video guiding employees through the training agreement process, built to reduce onboarding friction and ensure compliance.",
    highlights: [
      "Narrative flow aligned with the onboarding sequence",
      "Edited for brevity without sacrificing critical detail",
      "Supports employee comprehension of key agreement terms",
    ],
    videoEmbedUrl:
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777726240/Training_Agreement_pj3khc.mp4",
  },
  {
    slug: "12-days-of-xmas",
    title: "12 Days of Xmas — Game Announcement",
    type: "Motion Graphics",
    year: "2025",
    role: "Motion Designer • Editor",
    tools: [
      "After Effects",
      "Premiere Pro",
      "Photoshop",
      "ElevenLabs text to speech",
    ],
    tags: ["Holiday", "Social Media", "Campaign"],
    cover: {
      alt: "12 Days of Xmas game announcement motion graphics",
      gradient: ["#7F1D1D", "#15803D"],
      thumbnail:
        "https://res.cloudinary.com/deuwal5fr/video/upload/v1777725702/12_day_of_Xmas_krbd6k.jpg",
    },
    summary:
      "A motion announcement for a twelve-day game event—each day unlocks a new puzzle for participants to solve, with pacing and visuals tuned for social engagement.",
    highlights: [
      "12-day structure with one puzzle reveal per day",
      "Branded motion that tees up the daily challenge format",
      "Pacing and format optimized for short-form content platforms",
    ],
    videoEmbedUrl:
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777725702/12_day_of_Xmas_krbd6k.mp4",
  },
  {
    slug: "wgs-growth",
    title: "WGS — Growth",
    type: "Motion Graphics",
    year: "2026",
    role: "Motion Designer",
    tools: [
      "After Effects",
      "Photoshop",
      "ElevenLabs text to speech",
      "ElevenLabs Music Generator",
    ],
    tags: ["Motion Graphics", "Kinetic Type", "Brand Film"],
    cover: {
      alt: "WGS Growth — dynamic motion graphics with kinetic typography",
      gradient: ["#17381D", "#2A5C30"],
      thumbnail:
        "https://res.cloudinary.com/deuwal5fr/video/upload/WGS_-_Growth_uttjty.jpg",
    },
    summary:
      "A kinetic motion graphics piece for WGS, capturing the energy of growth through typography, fluid transitions, and a tight audio-visual rhythm.",
    highlights: [
      "Script and scene flow written from the client’s description—turning their brief into a clear, beat-by-beat motion arc",
      "Kinetic typography synchronized frame-perfect to audio",
      "Custom sound design to enhance the motion’s impact and pacing",
      "Seamless scene transitions using brand motion language",
      "Color graded and delivered for digital platform distribution",
    ],
    videoEmbedUrl:
      "https://player.cloudinary.com/embed/?cloud_name=deuwal5fr&public_id=WGS_-_Growth_uttjty",
  },
  {
    slug: "neon-reel-2026",
    title: "Essential Funding Inc. — Logo Animation",
    type: "Motion Graphics",
    year: "2024",
    role: "Motion Designer • Editor",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    tags: ["Logo Animation", "Icon Transitions", "Glow FX"],
    cover: {
      alt: "Abstract neon gradients with dynamic light streaks",
      gradient: ["#7C3AED", "#22D3EE"],
      thumbnail:
        "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723729/logo_animation_upfk8y.jpg",
    },
    summary:
      "A short, fast-paced logo animation for Essential Funding Inc. featuring transitioning icons and glowing sprite animations.",
    highlights: [
      "Fast-paced logo reveal built for punchy brand impact",
      "Icon-to-icon transitions timed tightly for rhythm and clarity",
      "Glowing sprite animations layered for depth and energy",
    ],
    videoEmbedUrl:
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777723729/logo_animation_upfk8y.mp4",
  },
  {
    slug: "ragnarok-universal-server",
    title: "Ragnarok Universal Server — Cinematic Trailer",
    type: "Motion Graphics",
    year: "2020",
    role: "Editor • Motion Designer",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    tags: ["Gaming", "Cinematic", "Trailer", "VFX"],
    cover: {
      alt: "Ragnarok Universal Server cinematic game trailer",
      gradient: ["#1A0533", "#6B21A8"],
      thumbnail:
        "https://res.cloudinary.com/deuwal5fr/video/upload/v1777778857/Ragnarok_Universal_Server_trailer_zrbrwg.jpg",
    },
    summary:
      "A cinematic trailer for Ragnarok Universal Server — a private MMORPG server — featuring dramatic pacing, VFX overlays, and an immersive audio-visual build designed to hype the player community.",
    highlights: [
      "Dramatic cinematic pacing built to drive player excitement and server sign-ups",
      "VFX overlays and motion graphics layered on top of in-game footage",
      "Audio-synced cuts timed for maximum impact and energy",
      "Sound and music design built to lift tension, hits, and release with the picture",
      "Delivered for community distribution across gaming forums and social platforms",
    ],
    videoEmbedUrl:
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777778857/Ragnarok_Universal_Server_trailer_zrbrwg.mp4",
  },
  {
    slug: "coffee-boi",
    title: "Coffee Boi — Brand Film",
    type: "Video Editing",
    year: "2022",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    tags: ["Brand Film", "Product", "Lifestyle", "Short Film"],
    cover: {
      alt: "Coffee Boi brand promotional film",
      gradient: ["#3B1F0A", "#92400E"],
      thumbnail:
        "https://res.cloudinary.com/deuwal5fr/video/upload/v1777779054/Coffee_Boi_c8g6hj.jpg",
    },
    summary:
      "A short brand film for Coffee Boi — a warm, aesthetic product video that captures the vibe and identity of the brand through moody visuals, smooth cuts, and a lifestyle-first narrative.",
    highlights: [
      "Warm, moody color grade matching the brand's cozy aesthetic",
      "Lifestyle-driven storytelling putting the product experience first",
      "Tight edit rhythm designed to hold attention in short-form contexts",
      "Delivered as a versatile brand asset for social and promotional use",
    ],
    videoEmbedUrl:
      "https://res.cloudinary.com/deuwal5fr/video/upload/v1777779054/Coffee_Boi_c8g6hj.mp4",
  },
];
