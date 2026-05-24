export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: BlogSection[];
}

export interface BlogSection {
  heading?: string;
  body: string;
}

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const loremLong =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "cout-site-web-2026",
    title: "Quel est le coût d'un **site web** en **2026** ?",
    excerpt:
      "Vous envisagez de créer un site web pour votre entreprise ? Découvrez les fourchettes de prix réelles en 2026 et ce qui influence le coût de votre projet.",
    category: "Site web",
    readTime: "5 min",
    date: "19 mai 2026",
    content: [
      { body: loremLong },
      { heading: "Lorem ipsum dolor sit amet", body: loremLong },
      { heading: "Consectetur adipiscing elit", body: loremLong },
      { heading: "Sed do eiusmod tempor", body: lorem },
      { heading: "Ut labore et dolore magna", body: lorem },
      { heading: "Conclusion", body: lorem },
    ],
  },
  {
    id: 2,
    slug: "cout-application-web-2026",
    title: "Quel est le coût d'une **application web** en **2026** ?",
    excerpt:
      "Application SaaS, portail client, tableau de bord, outil interne — les applications web ont des budgets très variables. Voici comment s'y retrouver.",
    category: "Application web",
    readTime: "6 min",
    date: "19 mai 2026",
    content: [
      { body: loremLong },
      { heading: "Lorem ipsum dolor sit amet", body: loremLong },
      { heading: "Consectetur adipiscing elit", body: loremLong },
      { heading: "Sed do eiusmod tempor", body: lorem },
      { heading: "Ut labore et dolore magna", body: lorem },
      { heading: "Excepteur sint occaecat", body: lorem },
      { heading: "Conclusion", body: lorem },
    ],
  },
  {
    id: 3,
    slug: "cout-application-mobile-2026",
    title: "Quel est le coût d'une **application mobile** en **2026** ?",
    excerpt:
      "iOS, Android ou multiplateforme ? Natif ou React Native ? Le coût d'une application mobile dépend de nombreux choix techniques. On vous explique tout.",
    category: "Application mobile",
    readTime: "7 min",
    date: "19 mai 2026",
    content: [
      { body: loremLong },
      { heading: "Lorem ipsum dolor sit amet", body: loremLong },
      { heading: "Consectetur adipiscing elit", body: loremLong },
      { heading: "Sed do eiusmod tempor", body: lorem },
      { heading: "Ut labore et dolore magna", body: lorem },
      { heading: "Excepteur sint occaecat", body: lorem },
      { heading: "Conclusion", body: lorem },
    ],
  },
];
