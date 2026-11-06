import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { WorkGallery } from "@/components/work-gallery";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Feature films, short films, commercials, documentaries, and shorts edited by Bhanuka Vithanage.",
};

export default function WorkPage() {
  return (
    <Container className="py-16 sm:py-24">
      <PageHeader
        eyebrow="Work"
        title="Films"
        lede="Feature films, short films, commercials, documentaries, sports, and vertical shorts."
      />
      <div className="mt-12">
        <WorkGallery projects={projects} />
      </div>
    </Container>
  );
}
