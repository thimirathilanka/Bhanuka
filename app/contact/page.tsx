import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bhanuka Vithanage for video editing, trailers, documentaries, and production work.",
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <PageHeader
        eyebrow="Contact"
        title="Start a project"
        lede="For editing, trailers, documentaries, and production support."
      />
      <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.7fr)]">
        <ContactForm />
        <aside className="space-y-8 border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block text-lg transition-colors hover:text-accent"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">WhatsApp</p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-lg transition-colors hover:text-accent"
            >
              {site.phone}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Elsewhere</p>
            <ul className="mt-3 space-y-2">
              {site.socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Container>
  );
}
