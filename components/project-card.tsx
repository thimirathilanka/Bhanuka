import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { thumbnailUrl } from "@/lib/projects";

export function ProjectCard({
  project,
  preload = false,
}: {
  project: Project;
  preload?: boolean;
}) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative aspect-video overflow-hidden bg-surface">
        <Image
          src={thumbnailUrl(project.youtubeId)}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          preload={preload}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <p className="mt-3 text-xs uppercase tracking-[0.18em] text-accent">
        {project.category}
      </p>
      <h3 className="mt-1 font-serif text-xl leading-snug group-hover:text-accent">
        {project.title}
      </h3>
    </Link>
  );
}
