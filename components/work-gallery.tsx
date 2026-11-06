"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { categories, type Project } from "@/lib/projects";

const filters = ["All", ...categories] as const;

export function WorkGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter, projects]);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter by category">
        {filters.map((item) => {
          const selected = filter === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item)}
              className={
                selected
                  ? "shrink-0 border border-accent bg-accent px-3 py-2 text-xs uppercase tracking-[0.14em] text-[#1c1610]"
                  : "shrink-0 border border-line px-3 py-2 text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-foreground"
              }
            >
              {item}
            </button>
          );
        })}
      </div>
      <p className="mt-6 text-sm text-muted" aria-live="polite">
        {visible.length} {visible.length === 1 ? "film" : "films"}
        {filter === "All" ? "" : ` in ${filter}`}
      </p>
      <ul className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
