import { Container } from "@/components/container";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.roles[0]}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-block text-sm text-foreground transition-colors hover:text-accent"
          >
            {site.email}
          </a>
        </div>
        <SocialLinks />
      </Container>
    </footer>
  );
}
