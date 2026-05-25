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

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "cout-application-mobile-2026",
    title: "Quel est le coût d'une application mobile en 2026 ?",
    excerpt:
      "Il y a quelques années, développer une application mobile coûtait facilement 50 000 $ et plus. Aujourd'hui, l'IA a tout changé. Voici ce que ça coûte vraiment en 2026.",
    category: "Application mobile",
    readTime: "4 min",
    date: "23 mai 2026",
    content: [
      {
        body: "Il y a quelques années, développer une application mobile coûtait facilement 50 000 $ et plus.\n\nAvec l'intelligence artificielle, il est de plus en plus facile de développer de A à Z une application mobile. Pour les développeurs, l'IA leur permet d'être beaucoup plus productifs et d'en faire plus avec moins.\n\nUne fonctionnalité qui, auparavant, aurait pris 9 heures à coder peut maintenant en prendre 3.",
      },
      {
        heading: "L'IA a changé la donne",
        body: "Quand nous avons développé Quietnest, il y a quelques années, l'IA n'était pas encore là. Chaque fonctionnalité prenait beaucoup plus de temps et d'énergie.\n\nCette époque est terminée.\n\nL'avantage de tout ça, c'est que maintenant, pour 5 à 10 fois moins cher, tu peux te retrouver avec une application mobile sur mesure.",
      },
      {
        heading: "Combien ça coûte en 2026 ?",
        body: "Chez Oriana Solutions, on commence toujours par une phase d'analyse pour comprendre exactement ce que le client veut construire.\n\n**Pour une application simple**, on parle généralement de **5 000 $ à 10 000 $**.\n\nDès qu'on ajoute une authentification, des paiements ou des fonctionnalités plus avancées, on tombe plutôt dans la zone des **15 000 $ à 25 000 $**.\n\nEt finalement, pour des **applications complexes**, c'est **25 000 $ et plus** !\n\nBref, tout dépend des fonctionnalités et du type d'application.",
      },
      {
        heading: "Une excellente période pour se lancer",
        body: "Une chose est sûre : on est dans une excellente période pour le développement d'applications mobiles, car la barrière à l'entrée est quasi inexistante.",
      },
      {
        heading: "Mais le vrai défi reste le même",
        body: "Mais le défi reste le même : maintenant, c'est bien beau d'avoir une application mobile fonctionnelle, mais comment vas-tu la distribuer et faire ton marketing ?\n\nPourquoi les gens téléchargeraient ton app ?\n\nEst-ce que ton app règle un vrai problème ?\n\nEst-ce que tu l'as construite en demandant des rétroactions à tes utilisateurs ?\n\nC'est là que le vrai travail commence. Et souvent, c'est là que ça passe ou ça casse.",
      },
      {
        heading: "La leçon qu'on a apprise avec Quietnest",
        body: "Donc avant de te lancer, pose-toi la question : est-ce que les gens vont vraiment l'utiliser… ou la supprimer après deux jours ?\n\nHonnêtement, c'est une des raisons pour lesquelles on a arrêté le développement de Quietnest. On avait beaucoup de téléchargements, mais la rétention n'était pas super et surtout, on avait sous-estimé les efforts et l'argent nécessaires pour la faire connaître.\n\nConstruire une app, c'est facile aujourd'hui. La faire vivre, c'est une toute autre histoire.",
      },
    ],
  },
];
