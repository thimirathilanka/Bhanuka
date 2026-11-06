import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-xs uppercase tracking-[0.22em] text-accent">404</p>
      <h1 className="mt-3 font-serif text-5xl">This page is not in the reel.</h1>
      <Link
        href="/work"
        className="mt-8 inline-flex border border-accent bg-accent px-5 py-3 text-sm tracking-wide text-[#1c1610]"
      >
        View work
      </Link>
    </Container>
  );
}
