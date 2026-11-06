"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/container";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/lib/site";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/work") return pathname.startsWith("/work");
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href="/" className="font-serif text-xl tracking-tight sm:text-2xl">
          {site.name}
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-6 text-sm tracking-wide">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(pathname, link.href) ? "page" : undefined}
                    className={
                      isActive(pathname, link.href)
                        ? "text-accent"
                        : "text-muted transition-colors hover:text-foreground"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks />
        </div>
        <button
          type="button"
          className="text-sm tracking-wide text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>
      <div id="site-menu" className={open ? "border-t border-line md:hidden" : "hidden"}>
        <Container className="flex flex-col gap-6 py-5">
          <nav aria-label="Primary">
            <ul className="flex flex-col gap-4 text-lg">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(pathname, link.href) ? "page" : undefined}
                    className={
                      isActive(pathname, link.href) ? "text-accent" : "text-foreground"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks />
        </Container>
      </div>
    </header>
  );
}
