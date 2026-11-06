import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Container } from "@/components/container";
import { embedUrl, getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Film" };

  return {
    title: project.title,
    description: `${project.title} — ${project.category} by Bhanuka Vithanage.`,
    openGraph: {
      title: project.title,
      description: `${project.category} by Bhanuka Vithanage.`,
      images: [
        {
          url: `https://i.ytimg.com/vi/${project.youtubeId}/hqdefault.jpg`,
          alt: project.title,
        },
      ],
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <Container className="py-16 sm:py-24">
          <p className="text-sm text-muted">Loading film…</p>
        </Container>
      }
    >
      <ProjectDetail params={params} />
    </Suspense>
  );
}

async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const portrait = project.orientation === "portrait";

  return (
    <Container className="py-16 sm:py-24">
      <Link
        href="/work"
        className="text-sm tracking-wide text-muted transition-colors hover:text-accent"
      >
        All work
      </Link>
      <p className="mt-8 text-xs uppercase tracking-[0.22em] text-accent">
        {project.category}
      </p>
      <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
        {project.title}
      </h1>
      <div className={portrait ? "mx-auto mt-10 w-full max-w-sm" : "mt-10 w-full"}>
        <div className={portrait ? "relative aspect-[9/16] bg-surface" : "relative aspect-video bg-surface"}>
          <iframe
            src={embedUrl(project.youtubeId)}
            title={project.title}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </Container>
  );
}
