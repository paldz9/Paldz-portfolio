import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: {
    default: "Paldz — Visual Creative Portfolio",
    template: "%s • Paldz",
  },
  description:
    "Video editor, graphic designer, and motion graphic designer. Showreel, projects, and services.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "Paldz — Visual Creative Portfolio",
    description:
      "Video editor, graphic designer, and motion graphic designer. Showreel, projects, and services.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">
        <Nav />
        <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-20 md:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

