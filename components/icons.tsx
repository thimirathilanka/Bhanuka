import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
    ...props,
  };
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6.5 9H4V20h2.5V9ZM5.25 3.8A1.55 1.55 0 1 0 5.26 6.9 1.55 1.55 0 0 0 5.25 3.8ZM20 20h-2.5v-5.7c0-1.6-.6-2.6-2-2.6-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H11V9h2.4v1.5c.4-.7 1.3-1.7 3.2-1.7 2.3 0 4 1.5 4 4.8V20Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 7.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4Zm0 7.6A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm5.7-8.8a1.08 1.08 0 1 1-1.08-1.08A1.08 1.08 0 0 1 17.7 6.2ZM12 4.8c1.3 0 1.5 0 2 .1.5 0 .8.1 1.1.2a2.2 2.2 0 0 1 1.3 1.3c.1.3.2.6.2 1.1.1.5.1.7.1 2s0 1.5-.1 2c0 .5-.1.8-.2 1.1a2.2 2.2 0 0 1-1.3 1.3c-.3.1-.6.2-1.1.2-.5.1-.7.1-2 .1s-1.5 0-2-.1c-.5 0-.8-.1-1.1-.2a2.2 2.2 0 0 1-1.3-1.3c-.1-.3-.2-.6-.2-1.1-.1-.5-.1-.7-.1-2s0-1.5.1-2c0-.5.1-.8.2-1.1a2.2 2.2 0 0 1 1.3-1.3c.3-.1.6-.2 1.1-.2.5-.1.7-.1 2-.1m0-1.5c-1.4 0-1.5 0-2.1.1-.6 0-1 .1-1.3.3a3.7 3.7 0 0 0-1.4 1.4c-.2.3-.3.7-.3 1.3-.1.6-.1.7-.1 2.1s0 1.5.1 2.1c0 .6.1 1 .3 1.3a3.7 3.7 0 0 0 1.4 1.4c.3.2.7.3 1.3.3.6.1.7.1 2.1.1s1.5 0 2.1-.1c.6 0 1-.1 1.3-.3a3.7 3.7 0 0 0 1.4-1.4c.2-.3.3-.7.3-1.3.1-.6.1-.7.1-2.1s0-1.5-.1-2.1c0-.6-.1-1-.3-1.3a3.7 3.7 0 0 0-1.4-1.4c-.3-.2-.7-.3-1.3-.3-.6-.1-.7-.1-2.1-.1Z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14.2 20v-7.2H17l.4-2.8h-3.2V8.3c0-.8.2-1.4 1.4-1.4H17.5V4.4C17.2 4.3 16.3 4.2 15.3 4.2c-2.2 0-3.7 1.3-3.7 3.8v2H9v2.8h2.6V20h2.6Z" />
    </svg>
  );
}

export function ImdbIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 6.5h2.2v11H4v-11Zm4.4 0 1.1 7.2.6-4.2c.1-.7.2-1.4.4-3h2.2l.6 4.2 1.1-7.2H17v11h-2.1l-.8-5.6-.8 5.6h-2.2l-.8-5.6-.8 5.6H7.4v-11h1Z" />
    </svg>
  );
}

const icons = {
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  IMDb: ImdbIcon,
};

export function SocialIcon({
  name,
  className,
}: {
  name: keyof typeof icons;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className ?? "h-5 w-5"} />;
}
