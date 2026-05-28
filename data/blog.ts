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
  body?: string;
  comparison?: {
    headers: string[];
    rows: { label: string; values: string[] }[];
    note?: string;
  };
  checklist?: {
    items: { text: string }[];
    variant?: "green" | "red";
  };
  callout?: {
    icon?: string;
    title?: string;
    body: string;
    variant?: "tip" | "warning" | "insight";
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 3,
    slug: "salesforce-ou-crm-sur-mesure",
    title: "Salesforce ou un CRM sur mesure ? La vraie question en 2026.",
    excerpt:
      "Les abonnements CRM SaaS coûtent cher et l'IA a changé l'équation du développement sur mesure. Voici comment faire le bon choix pour votre entreprise.",
    category: "Développement logiciel",
    readTime: "5 min",
    date: "27 mai 2026",
    content: [
      {
        body: "Salesforce. HubSpot. Pipedrive. Ces plateformes ont dominé la gestion de la relation client depuis 20 ans. Et pour beaucoup d'entreprises, elles ont du sens. Mais quelque chose a changé.\n\nLe coût des abonnements CRM SaaS monte chaque année. Les fonctionnalités dont vous avez besoin sont souvent dans le plan supérieur. Et l'IA a complètement transformé ce que ça coûte de développer un logiciel sur mesure. Ce qui prenait 6 mois à construire en prend maintenant 6 semaines.\n\nAlors la question n'est plus \"est-ce qu'on peut se permettre un CRM sur mesure ?\". C'est devenu \"est-ce qu'on a vraiment besoin de Salesforce ?\"",
      },
      {
        heading: "Ce que vous payez vraiment avec Salesforce",
        callout: {
          icon: "⚠️",
          title: "Le vrai coût annuel d'un CRM SaaS",
          body: "Salesforce Sales Cloud : 165 $ à 330 $ par utilisateur par mois. Pour une équipe de 10 personnes, c'est 19 800 $ à 39 600 $ par an en licences seulement. Ajoutez les modules supplémentaires (CPQ, Service Cloud, Marketing Cloud), l'implémentation par un consultant certifié (15 000 $ à 50 000 $), la formation de l'équipe et les intégrations personnalisées. Le coût total sur 3 ans pour une PME de taille moyenne dépasse souvent 150 000 $.",
          variant: "warning",
        },
      },
      {
        heading: "Ce que l'IA a changé",
        body: "Il y a deux ans, développer un CRM sur mesure avec pipeline de vente, fiches clients, historique des interactions et tableaux de bord demandait 4 à 6 mois de développement. C'était réservé aux entreprises avec des budgets importants.\n\nAujourd'hui, les outils d'IA permettent à nos développeurs d'avancer 3 à 5 fois plus vite. Une fonctionnalité qui prenait 3 jours à coder en prend maintenant moins d'un. Le code produit est meilleur, mieux documenté et plus facile à maintenir.\n\nConcrètement, un CRM fonctionnel avec les fonctionnalités clés peut être développé en 6 à 10 semaines pour un budget entre 12 000 $ et 35 000 $. La comparaison avec Salesforce devient beaucoup plus intéressante.",
      },
      {
        heading: "Salesforce vs CRM sur mesure",
        comparison: {
          headers: ["", "Salesforce / HubSpot", "CRM Oriana sur mesure"],
          rows: [
            { label: "Coût mensuel", values: ["165 $ à 330 $ par utilisateur", "0 $ (hébergement seulement)"] },
            { label: "Coût initial", values: ["15 000 $ à 50 000 $ (impl.)", "12 000 $ à 35 000 $ (dev.)"] },
            { label: "Fonctionnalités", values: ["Standard, parfois trop larges", "Exactement ce qu'il vous faut"] },
            { label: "Données", values: ["Chez le fournisseur", "Chez vous, 100%"] },
            { label: "Évolutions", values: ["Limité par la plateforme", "Illimité, selon vos besoins"] },
            { label: "Support", values: ["Tickets, documentation", "Accès direct à l'équipe"] },
            { label: "Délai", values: ["Disponible immédiatement", "6 à 10 semaines"] },
          ],
          note: "Les coûts varient selon la taille de l'équipe et les fonctionnalités choisies. Cette comparaison est basée sur une équipe de 5 à 15 personnes.",
        },
      },
      {
        heading: "Quand garder Salesforce",
        checklist: {
          variant: "green",
          items: [
            { text: "Votre équipe est déjà formée et l'adoption est excellente. Migrer coûterait plus que ça rapporte." },
            { text: "Vous avez des intégrations complexes avec d'autres outils Salesforce (Pardot, Service Cloud) qui fonctionnent bien." },
            { text: "Votre processus de vente est standard et les fonctionnalités de base de Salesforce couvrent 95% de vos besoins." },
            { text: "Vous faites partie d'un grand groupe qui impose Salesforce comme standard corporatif." },
            { text: "Vous avez besoin de certifications ou de conformité spécifiques que Salesforce garantit déjà." },
          ],
        },
      },
      {
        heading: "Quand passer au sur mesure",
        checklist: {
          variant: "green",
          items: [
            { text: "Votre facture Salesforce dépasse 2 000 $ par mois et vous n'utilisez pas 40% des fonctionnalités." },
            { text: "Vous avez des processus très spécifiques à votre industrie que les CRM génériques gèrent mal." },
            { text: "Vous avez besoin d'intégrations profondes avec des logiciels maison ou des systèmes hérités." },
            { text: "Votre équipe se plaint que le CRM ne correspond pas à leur façon de travailler." },
            { text: "Vous voulez contrôler vos données clients sans dépendance envers un fournisseur américain." },
            { text: "Votre budget de démarrage est limité et un abonnement mensuel élevé crée trop de pression." },
          ],
        },
      },
      {
        heading: "Ce qu'on entend souvent",
        callout: {
          icon: "💡",
          title: "Témoignage de client",
          body: "\"On pensait qu'on était trop petits pour un CRM sur mesure. Finalement, c'est exactement pour des équipes comme nous que c'est fait. Notre équipe de 6 personnes utilise le CRM tous les jours. Personne ne demande de formation. Et on paie plus rien par mois.\"",
          variant: "insight",
        },
      },
      {
        body: "La décision n'est pas universelle. Certaines entreprises ont tout à fait raison de rester sur Salesforce. D'autres paient depuis des années pour des fonctionnalités qu'elles n'utilisent pas, dans un outil que leur équipe tolère plutôt qu'apprécie.\n\nSi vous voulez faire le calcul pour votre situation, on offre une consultation gratuite de 30 minutes. On regarde ensemble votre utilisation actuelle et on vous dit honnêtement si un CRM sur mesure ferait du sens pour vous.",
      },
    ],
  },
  {
    id: 2,
    slug: "comment-choisir-developpeur-logiciel-sur-mesure",
    title: "Comment choisir le bon développeur de logiciel sur mesure ?",
    excerpt:
      "Choisir un développeur, c'est une décision qui peut faire ou défaire votre projet. Voici ce qu'on aurait aimé savoir avant nos premières années dans le métier.",
    category: "Développement logiciel",
    readTime: "6 min",
    date: "27 mai 2026",
    content: [
      {
        body: "On reçoit souvent des appels de fondateurs ou de gestionnaires qui ont déjà travaillé avec un développeur ou une agence, et ça s'est mal passé. Délais non respectés, coûts qui explosent, code qui ne peut pas évoluer. Ce n'est pas une fatalité.\n\nChoisir le bon partenaire technologique, ça s'apprend. Voici ce qu'on regarde nous-mêmes quand on évalue nos propres pratiques, et ce que vous devriez regarder quand vous magasinez.",
      },
      {
        heading: "La première rencontre en dit beaucoup",
        body: "Avant même de parler de technologie ou de prix, observez comment le développeur ou l'agence réagit à votre première description du projet.\n\nEst-ce qu'il pose des questions sur votre clientèle, vos objectifs, vos contraintes ? Ou est-ce qu'il commence immédiatement à parler de frameworks et d'architectures ?\n\nUn bon partenaire cherche d'abord à comprendre le problème. Il reformule votre vision pour vous montrer qu'il a saisi l'essentiel. Si vous sortez du premier appel avec l'impression que l'autre côté a compris ce que vous voulez bâtir, c'est un bon signe.",
        callout: {
          icon: "💬",
          title: "Ce qu'on veut entendre lors du premier appel",
          body: "\"Parlez-moi de vos utilisateurs. Quel problème essayez-vous de régler pour eux ? Qu'est-ce qui se passe aujourd'hui si ce problème n'est pas résolu ?\" Un développeur qui commence par ces questions pense comme un partenaire, pas comme un sous-traitant.",
          variant: "tip",
        },
      },
      {
        heading: "Freelance, petite agence ou grande firme ?",
        body: "Ce n'est pas une question de prestige ou de budget. C'est une question de risque et de besoin. Voici comment on voit les trois options :",
        comparison: {
          headers: ["", "Freelance", "Petite agence", "Grande firme"],
          rows: [
            { label: "Coût", values: ["Plus bas", "Moyen", "Élevé"] },
            { label: "Expertise", values: ["Souvent une spécialité", "Pluridisciplinaire", "Large, mais fragmentée"] },
            { label: "Disponibilité", values: ["Variable", "Dédiée", "Partagée entre projets"] },
            { label: "Risque de départ", values: ["Élevé", "Faible", "Faible"] },
            { label: "Idéal pour", values: ["MVP simple, court terme", "Projets évolutifs, PME", "Grands comptes, budgets importants"] },
          ],
          note: "Aucune option n'est universellement meilleure. Tout dépend de la complexité de votre projet et du niveau de risque que vous êtes prêt à absorber.",
        },
      },
      {
        heading: "Demandez à voir du vrai travail, pas juste des logos clients",
        body: "Tout le monde a une belle page de clients sur son site. Ce qui compte, c'est de voir comment ce travail a été fait.\n\nDemandez des exemples de fonctionnalités similaires à ce que vous voulez construire. Demandez si vous pouvez parler à un ancien client. Regardez si les projets montrés ressemblent à votre contexte (taille, industrie, complexité).",
        checklist: {
          variant: "green",
          items: [
            { text: "\"Pouvez-vous me montrer une fonctionnalité similaire à ce que je veux construire ?\"" },
            { text: "\"Est-ce que je peux parler à un de vos anciens clients ?\"" },
            { text: "\"Avez-vous travaillé dans mon industrie ou sur des projets de cette taille ?\"" },
            { text: "\"Comment gérez-vous les changements de scope en cours de projet ?\"" },
            { text: "\"Qui sera mon interlocuteur principal au jour le jour ?\"" },
          ],
        },
      },
      {
        heading: "Le processus compte autant que les compétences techniques",
        body: "Un bon développeur peut produire du mauvais travail si le processus est chaotique. Voici les indicateurs qu'on considère comme non-négociables :",
        checklist: {
          variant: "green",
          items: [
            { text: "**Des livrables réguliers.** Quelque chose de fonctionnel toutes les deux semaines, pas juste un rapport verbal." },
            { text: "**Une gestion transparente des priorités.** Vous devriez être le premier informé quand un délai change ou qu'un problème survient." },
            { text: "**Des outils de suivi accessibles.** Jira, ClickUp, Notion... peu importe, tant que vous avez accès à l'état du projet en tout temps." },
            { text: "**Des revues de code régulières.** Le code est relu par quelqu'un d'autre que celui qui l'a écrit." },
          ],
        },
      },
      {
        heading: "Les signaux d'alarme à surveiller",
        body: "Certains comportements sont des avertissements clairs. Si vous en repérez plus d'un, prenez le temps d'y réfléchir avant de signer quoi que ce soit.",
        checklist: {
          variant: "red",
          items: [
            { text: "Il dit oui à tout, sans poser de questions, sans émettre de réserves." },
            { text: "Le devis arrive en quelques heures, sans analyse sérieuse du projet." },
            { text: "Pas de contrat clair sur la propriété du code après livraison." },
            { text: "Il ne peut pas expliquer ses choix technologiques en termes simples." },
            { text: "Les références clients sont vagues ou introuvables." },
            { text: "Il refuse de faire une phase de découverte avant de coder." },
          ],
        },
      },
      {
        heading: "La sécurité, ce n'est pas une option",
        body: "On voit encore beaucoup de projets livrés sans tests, sans revue de code, avec des mots de passe stockés en clair ou des dépendances jamais mises à jour.\n\nDemandez comment les données de vos utilisateurs sont protégées. Comment les accès sont gérés. Si le développeur n'a pas de réponse claire, c'est une réponse en soi.",
        callout: {
          icon: "⚠️",
          title: "Ne pas négliger la sécurité",
          body: "Une fuite de données peut coûter bien plus cher que le développement initial. Vérifiez que votre partenaire parle de sécurité dès la phase de conception, pas seulement à la fin.",
          variant: "warning",
        },
      },
      {
        heading: "Et après le lancement ?",
        body: "Un logiciel, ce n'est pas un projet avec une date de fin. C'est un actif qui doit être maintenu, amélioré, mis à jour.\n\nSi votre partenaire ne parle pas de support post-lancement, posez la question directement. Et si la réponse est floue, prenez-en note.",
        checklist: {
          variant: "green",
          items: [
            { text: "Qui s'occupe des bogues après la mise en ligne ?" },
            { text: "Qui gère les mises à jour de sécurité ?" },
            { text: "Quel est le délai de réponse si quelque chose tombe en panne ?" },
            { text: "Comment se passe l'ajout d'une nouvelle fonctionnalité dans six mois ?" },
          ],
        },
      },
      {
        heading: "Ce qu'on vous dit rarement",
        body: "La compatibilité humaine compte. Vous allez travailler avec cette équipe pendant des mois. Si la communication est difficile dès le départ, ça ne s'améliore pas avec le temps.",
        callout: {
          icon: "💡",
          title: "Un bon partenaire vous dit non",
          body: "Choisissez quelqu'un avec qui vous pouvez avoir une conversation honnête. Un partenaire qui vous dit \"votre idée a un problème ici\" est beaucoup plus précieux qu'un partenaire qui dit oui à tout. Le oui facile, ça se paie toujours plus tard.",
          variant: "insight",
        },
      },
    ],
  },
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
