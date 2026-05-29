export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  avatarZoom?: boolean;
  avatarPosition?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Ils ont pris le temps de comprendre mon projet dès le début, même quand il était encore flou. Leurs conseils m'ont permis de gagner un temps fou et d'avancer dans la bonne direction.",
    author: "Walid Choubane",
    role: "Entrepreneur",
    avatar: "/png/1763761462572.jpg",
    avatarZoom: true,
  },
  {
    id: 2,
    quote: "Je recommande Oriana Solutions. Ils ont mis à jour mon site web en fonction de mes demandes. Ils sont professionnels, disponibles et à l'écoute des besoins de leur client.",
    author: "Antoine Baril",
    role: "Courtier Immobilier",
    avatar: "/png/antoine1.webp",
  },
  {
    id: 3,
    quote: "Très bon service, ils ont fait mon site web et la programmation du SEO. L'équipe est professionnelle, rapide et à l'écoute. Je recommande fortement !",
    author: "Rafael Bergeron Lagacé",
    role: "Évaluateur agréé",
    avatar: "/png/68992793_1075102852692716_4269992619519508480_n.jpg",
    avatarPosition: "top",
  },
  {
    id: 4,
    quote: "Merci à l'équipe Oriana Solutions pour leur sérieux et leur professionnalisme dans la refonte du site Web. Je vous les recommande chaleureusement.",
    author: "Michel Morin",
    role: "Coach professionnel & Ingénieur",
    avatar: "/png/author.png",
  },
];

export const testimonialsLogo = [
  { src: "/png/balt.png", width: 163 },
  { src: "/png/AB-new-coul.png", width: 163 },
  { src: "/png/logo.png", width: 140, className: "grayscale opacity-50 mix-blend-multiply" },
  { src: "/png/Logo couleur - Vertical.png", width: 163 },
];
