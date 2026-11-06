export const categories = [
  "Feature Films",
  "Short Films",
  "Commercial",
  "Documentaries",
  "Analytical",
  "Sports",
  "Motivational",
  "Shorts",
] as const;

export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  title: string;
  category: Category;
  youtubeId: string;
  orientation: "landscape" | "portrait";
};

export const projects: Project[] = [
  {
    slug: "ben-and-suzanne",
    title: "Ben and Suzanne: A Reunion in 4 Parts (2024) Teaser",
    category: "Feature Films",
    youtubeId: "DQD_Mf7ru98",
    orientation: "landscape",
  },
  {
    slug: "whatsup",
    title: "WhatsUp Short Film Teaser",
    category: "Short Films",
    youtubeId: "HoCD1HJTwD0",
    orientation: "landscape",
  },
  {
    slug: "hilton-39th-anniversary",
    title: "Hilton 39th Anniversary",
    category: "Commercial",
    youtubeId: "yFQUdmgnWHA",
    orientation: "landscape",
  },
  {
    slug: "cwit",
    title: "CWIT",
    category: "Commercial",
    youtubeId: "1TgLA5kl-AQ",
    orientation: "landscape",
  },
  {
    slug: "737-max-crashes",
    title: "737 Max Crashes",
    category: "Documentaries",
    youtubeId: "HfxnZ3a0QPs",
    orientation: "landscape",
  },
  {
    slug: "alexander-volkanovski",
    title: "Alexander Volkanovski",
    category: "Analytical",
    youtubeId: "CCxsy5ghm6o",
    orientation: "landscape",
  },
  {
    slug: "mclaren",
    title: "Is There a New #1 At McLaren",
    category: "Sports",
    youtubeId: "_EjxdHAZVN8",
    orientation: "landscape",
  },
  {
    slug: "abundance-experiment",
    title: "Abundance Experiment — Dr. Joe Dispenza",
    category: "Motivational",
    youtubeId: "flwwiVEeMJw",
    orientation: "landscape",
  },
  {
    slug: "dont-lower-prices",
    title: "Don't Lower Prices",
    category: "Motivational",
    youtubeId: "RFlYGMH8bCk",
    orientation: "landscape",
  },
  {
    slug: "short-1",
    title: "Short 1",
    category: "Shorts",
    youtubeId: "Gtbp29f1UT0",
    orientation: "portrait",
  },
  {
    slug: "short-2",
    title: "Short 2",
    category: "Shorts",
    youtubeId: "Xvi_IVkEb10",
    orientation: "portrait",
  },
  {
    slug: "imbul-kiribath",
    title: "Imbul Kiribath Reel",
    category: "Shorts",
    youtubeId: "7o8yh2mYiEE",
    orientation: "portrait",
  },
  {
    slug: "king-coconut-mango",
    title: "King Coconut Mango Drink Reel",
    category: "Shorts",
    youtubeId: "kwuBzRT39zE",
    orientation: "portrait",
  },
];

export const featuredProject = projects[0];

const selectedSlugs = [
  "hilton-39th-anniversary",
  "737-max-crashes",
  "whatsup",
  "mclaren",
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjects(slugs: readonly string[]) {
  return slugs.flatMap((slug) => {
    const project = getProject(slug);
    return project ? [project] : [];
  });
}

export const selectedProjects = getProjects(selectedSlugs);

export function thumbnailUrl(youtubeId: string) {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}

export function embedUrl(youtubeId: string) {
  return `https://www.youtube-nocookie.com/embed/${youtubeId}`;
}
