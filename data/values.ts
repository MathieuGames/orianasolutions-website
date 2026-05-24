export type ValueItem = {
  id: string;
  title: string;
  description: string;
};

const values: ValueItem[] = [
  {
    id: "innovation",
    title: "Innovation",
    description:
      "On cherche constamment de meilleures façons de construire. Chaque projet est une occasion de repousser ce qui est possible avec la technologie.",
  },
  {
    id: "simplicite",
    title: "Simplicité",
    description:
      "Les meilleures solutions sont celles que les gens comprennent et utilisent vraiment. On évite la complexité inutile à chaque étape.",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "On travaille en proximité avec nos clients, pas juste pour eux. Votre réalité guide chaque décision qu'on prend.",
  },
  {
    id: "excellence",
    title: "Excellence",
    description:
      "On ne livre pas pour livrer. Chaque détail compte, chaque ligne de code est pensée pour durer et performer dans le temps.",
  },
];

export default values;
