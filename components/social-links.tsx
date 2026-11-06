import { site } from "@/lib/site";
import { SocialIcon } from "@/components/icons";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {site.socials.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="text-muted transition-colors hover:text-accent"
          >
            <SocialIcon name={item.label} />
          </a>
        </li>
      ))}
    </ul>
  );
}
