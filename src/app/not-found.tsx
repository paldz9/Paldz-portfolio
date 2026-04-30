import Link from "next/link";
import { Button, H2, P, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section>
      <H2>Page not found</H2>
      <P className="mt-2">
        The page you’re looking for doesn’t exist (or was moved).
      </P>
      <div className="mt-5">
        <Button href="/" variant="ghost">
          Go home
        </Button>
        <Link href="/projects" className="ml-3 text-sm text-white/70 hover:text-white">
          Browse projects
        </Link>
      </div>
    </Section>
  );
}

