import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: site.bio[0],
};

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-24">
      <PageHeader eyebrow="About" title={site.name} />
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm uppercase tracking-[0.16em] text-accent">
        {site.roles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
      <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed">
        {site.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <aside className="mt-12 max-w-2xl border border-line bg-surface px-6 py-6">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">SXSW 2023</p>
        <p className="mt-3 font-serif text-3xl leading-tight">{site.credit.film}</p>
        <p className="mt-3 text-muted">{site.credit.role}</p>
        <p className="mt-1 text-muted">{site.credit.note}</p>
      </aside>
      <Link
        href="/contact"
        className="mt-12 inline-flex border border-accent bg-accent px-5 py-3 text-sm tracking-wide text-[#1c1610] transition-colors hover:bg-transparent hover:text-accent"
      >
        Contact
      </Link>
    </Container>
  );
}
