export type Category =
  | "Tous les projets"
  | "Site web sur mesure"
  | "Application mobile"
  | "Application web"
;

export interface Project {
  id: number;
  title: string;
  badge: string;
  category: Category;
  label?: string;
  image: string;
  href: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Antoine Baril",
    badge: "Site sur mesure",
    category: "Site web sur mesure",
    label: "Site web sur mesure",
    image: "/png/real1-antoinebaril.png",
    href: "/developpement-application-mobile/antoine-baril",
  },
  {
    id: 2,
    title: "Quietnest",
    badge: "Application mobile",
    category: "Application mobile",
    image: "/png/real2-quietnest.png",
    href: "/developpement-application-mobile/quietnest",
  },
  {
    id: 3,
    title: "PacPlus",
    badge: "Application web",
    category: "Application web",
    image: "/png/PACPLUS.png",
    href: "/developpement-application-mobile/pacplus",
  },
  {
    id: 5,
    title: "SalesPitch",
    badge: "Application web",
    category: "Application web",
    label: "Copilot de vente",
    image: "/png/Salespitchs.png",
    href: "/realisations/salespitch",
  },
  {
    id: 4,
    title: "Michel Morin Consultants",
    badge: "Site sur mesure",
    category: "Site web sur mesure",
    label: "Site web sur mesure",
    image: "/png/michel-morin.png",
    href: "/realisations/michel-morin",
  },
];

export const categories: Category[] = [
  "Tous les projets",
  "Site web sur mesure",
  "Application mobile",
  "Application web",
];
