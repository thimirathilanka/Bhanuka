import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import {
  featuredProject,
  selectedProjects,
  thumbnailUrl,
} from "@/lib/projects";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div>
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] sm:text-7xl">
            {site.name}
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-muted">
            {site.roles.join(" · ")}
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed">{site.tagline}</p>
          <p className="mt-6 max-w-xl border-l border-accent pl-4 text-muted">
            {site.credit.role} on{" "}
            <em className="font-serif text-foreground">{site.credit.film}</em>.{" "}
            {site.credit.note}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex border border-accent bg-accent px-5 py-3 text-sm tracking-wide text-[#1c1610] transition-colors hover:bg-transparent hover:text-accent"
            >
              View work
            </Link>
            <Link
              href="/contact"
              className="inline-flex border border-line px-5 py-3 text-sm tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Contact
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 sm:py-24">
          <Link
            href={`/work/${featuredProject.slug}`}
            className="group grid items-end gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(16rem,0.7fr)]"
          >
            <div className="relative aspect-video overflow-hidden bg-surface">
              <Image
                src={thumbnailUrl(featuredProject.youtubeId)}
                alt=""
                fill
                preload
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Featured</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight group-hover:text-accent">
                {featuredProject.title}
              </h2>
              <p className="mt-3 text-sm uppercase tracking-[0.16em] text-muted">
                {featuredProject.category}
              </p>
              <span className="mt-8 inline-flex border border-line px-4 py-2 text-sm tracking-wide group-hover:border-accent group-hover:text-accent">
                Watch film
              </span>
            </div>
          </Link>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-serif text-4xl">Selected work</h2>
            <Link
              href="/work"
              className="text-sm tracking-wide text-muted transition-colors hover:text-accent"
            >
              All work
            </Link>
          </div>
          <ul className="mt-10 grid gap-10 sm:grid-cols-2">
            {selectedProjects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}
