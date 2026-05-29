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
  cta?: {
    title: string;
    body: string;
    label: string;
    href: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 6,
    slug: "refonte-site-web-michel-morin-consultants",
    title: "Nouveau mandat : refonte complète pour Michel Morin, coach professionnel.",
    excerpt:
      "Michel avait un site qui ne reflétait plus ce qu'il était devenu. On lui a livré une refonte complète, moderne et crédible, qui met enfin ses partenaires et certifications de l'avant.",
    category: "Étude de cas",
    readTime: "4 min",
    date: "29 mai 2026",
    content: [
      {
        body: "Il y a des clients qui arrivent avec un brief de 10 pages. Michel, lui, avait une phrase claire : \"Mon site ne me ressemble plus.\"\n\nMichel Morin est coach professionnel et ingénieur, avec plus de 30 ans d'expérience en développement du leadership, en médiation et en accompagnement organisationnel. Son expertise est réelle, reconnue, et appuyée par des certifications sérieuses. Mais son site web ne racontait pas cette histoire-là.\n\nLe mandat : refonte complète. Design moderne, contenu restructuré, crédibilité mise de l'avant.",
      },
      {
        heading: "Ce que Michel voulait",
        body: "Quand on a fait notre premier appel, trois choses sont ressorties clairement.\n\nSon site devait refléter qui il est aujourd'hui. Ses certifications et accréditations devaient être visibles dès le départ. Et ses partenaires devaient avoir une place centrale sur le site, parce que la collaboration est au cœur de son modèle de travail.",
      },
      {
        heading: "Ce qu'on a livré",
        body: "On a entièrement revu l'architecture du site : une page d'accueil qui positionne Michel comme l'expert qu'il est, une section services claire qui présente le coaching individuel, la médiation, l'évaluation psychométrique (EQ-i 2.0, NOVA), les groupes de codéveloppement et les cercles de coaching.\n\nOn a aussi bâti une section partenaires dédiée. Chacun des collaborateurs de Michel est présenté avec soin : **Julie Dubuc**, **Daniel Fillion CRHA**, **Michel Gagnon CRIA** et **Maryse Lepage**. Ce n'est pas juste une liste de noms. C'est une démonstration que Michel travaille en réseau et que ses clients ont accès à un écosystème de compétences.",
      },
      {
        heading: "Le résultat",
        body: "On est fiers de ce qu'on a livré. Le site est moderne, épuré et professionnel. À l'image de Michel. Les certifications sont en évidence, les services sont clairs, et les partenaires ont enfin la visibilité qu'ils méritent.\n\nMerci à toute l'équipe derrière ce mandat : **Hugo Bouchard**, **Samuel Bergeron** et moi-même.\n\nVoir le résultat : [michelmorinconsultants.com](https://michelmorinconsultants.com)",
        testimonial: {
          quote: "Merci à l'équipe Oriana Solutions pour leur sérieux et leur professionnalisme dans la refonte du site Web. Je vous les recommande chaleureusement.",
          author: "Michel Morin",
          role: "Coach professionnel & Ingénieur",
        },
      },
      {
        cta: {
          title: "Votre site vous ressemble ?",
          body: "Si la réponse est non, c'est le bon moment pour en parler. On vous revient rapidement.",
          label: "Discuter de ma refonte",
          href: "/contact",
        },
      },
    ],
  },
  {
    id: 5,
    slug: "calculateur-prix-logiciel-sur-mesure",
    title: "On a créé un calculateur de prix pour que vous sachiez à quoi vous attendre.",
    excerpt:
      "Personne ne devrait commencer une conversation avec une agence sans avoir la moindre idée du budget. On a bâti un outil gratuit pour changer ça.",
    category: "Développement logiciel",
    readTime: "3 min",
    date: "28 mai 2026",
    content: [
      {
        body: "Une des premières choses que les clients me disent en début d'appel, c'est : \"Je sais pas du tout combien ça coûte. J'ai peur de me faire avoir.\"\n\nC'est une peur légitime. Le développement logiciel a longtemps été une boîte noire côté prix. Une agence peut vous sortir un chiffre de 15 000 $, une autre 80 000 $ pour le même projet. Sans contexte, impossible de savoir si c'est raisonnable.\n\nC'est pour ça qu'on a bâti notre calculateur de prix. Gratuit, en temps réel, sans avoir à parler à personne.",
      },
      {
        heading: "Ce que le calculateur fait",
        body: "Vous sélectionnez le type de projet (site web, application web ou mobile), la taille, les fonctionnalités souhaitées, et l'outil vous donne une fourchette de prix instantanément.\n\nC'est basé sur les vrais projets qu'on a livrés. Pas des chiffres inventés pour impressionner ou pour avoir l'air compétitif. Des fourchettes honnêtes, issues de notre expérience terrain.",
      },
      {
        heading: "Les fourchettes qu'on utilise",
        comparison: {
          headers: ["Type de projet", "Fourchette typique"],
          rows: [
            { label: "Site web sur mesure", values: ["2 000 $ à 30 000 $"] },
            { label: "Application web", values: ["8 000 $ à 200 000 $+"] },
            { label: "Application mobile", values: ["15 000 $ à 200 000 $+"] },
          ],
          note: "Les fourchettes varient selon la complexité, les intégrations et la taille de l'équipe. Le calculateur affine l'estimation selon vos réponses.",
        },
      },
      {
        heading: "Ce que le calculateur ne fait pas",
        body: "Il ne remplace pas une vraie conversation. Une fourchette, c'est un point de départ — pas un devis. Les vrais chiffres sortent après qu'on a pris le temps de comprendre votre projet, votre modèle d'affaires et ce que vous voulez accomplir.\n\nMais au moins, quand vous venez nous parler, vous savez dans quelle réalité budgétaire vous vous situez. Et ça change tout dans la qualité de la conversation.",
        callout: {
          icon: "💡",
          title: "Mon conseil",
          body: "Commencez par le calculateur avant votre premier appel. Ça vous donnera un cadre de référence. Et si l'estimation vous surprend — dans un sens ou dans l'autre — c'est exactement le genre de conversation qu'on aime avoir.",
          variant: "tip",
        },
      },
      {
        heading: "Pourquoi on l'a rendu gratuit",
        body: "Parce qu'on croit que la transparence, c'est une marque de respect envers nos clients potentiels. Vous ne devriez pas avoir à signer un NDA ou endurer trois appels de vente pour savoir si un projet est dans vos moyens.\n\nLe calculateur, c'est notre façon de dire : voilà ce qu'on pense que ça coûte, et voilà pourquoi. Faites-en ce que vous voulez.",
      },
      {
        cta: {
          title: "Essayez le calculateur maintenant",
          body: "Aucun compte requis. Le prix s'affiche en temps réel selon vos choix.",
          label: "Calculer le prix de mon projet",
          href: "/calculateur-prix",
        },
      },
    ],
  },
  {
    id: 4,
    slug: "combien-coute-logiciel-sur-mesure",
    title: "Combien coûte un logiciel sur mesure ? La vraie réponse.",
    excerpt:
      "Site web, application web, application mobile : les prix varient énormément. Voici ce que ça coûte vraiment, avec des chiffres réels, un cas client, et mon opinion franche après des dizaines de projets livrés.",
    category: "Développement logiciel",
    readTime: "6 min",
    date: "28 mai 2026",
    content: [
      {
        body: "C'est la première question que presque tous les clients me posent. Et ma vraie réponse, celle que j'ai envie de donner, c'est : ça dépend. Pas pour éviter la question, mais parce que c'est la seule réponse honnête.\n\nÇa dépend de si c'est un site web, une application web ou une application mobile. Ça dépend du nombre de pages, des fonctionnalités, et surtout des décisions que vous prenez en début de projet. Ce que je propose toujours, c'est de faire un estimatif en direct lors d'un premier appel, et de revenir ensuite avec une soumission formelle avec le vrai prix.\n\nCet article, c'est une synthèse de ce que j'explique à chaque client. Avec des chiffres réels, un cas client qui m'a coûté cher (à moi), et mon opinion sur les pièges à éviter.",
      },
      {
        heading: "Les fourchettes de prix selon le type de projet",
        body: "Voici les fourchettes qu'on utilise comme point de départ chez Oriana Solutions. Ce ne sont pas des prix plafonds. C'est là où ça commence.",
        comparison: {
          headers: ["Type de projet", "Fourchette typique", "Pour quoi"],
          rows: [
            { label: "Site web sur mesure", values: ["2 000 $ à 10 000 $", "Vitrine, landing page, portfolio professionnel"] },
            { label: "Application web", values: ["10 000 $ à 25 000 $", "Plateforme, outil interne, SaaS simple"] },
            { label: "Application mobile", values: ["15 000 $ à 35 000 $", "iOS/Android, app avec backend et authentification"] },
          ],
          note: "Ces fourchettes couvrent le développement, l'intégration, l'hébergement initial et les révisions. Elles varient selon la complexité des fonctionnalités choisies.",
        },
      },
      {
        heading: "Ce qui fait vraiment monter le prix",
        body: "La vraie variable, ce n'est pas le nombre de pages. C'est le niveau de perfection que vous visez dès le départ, et le nombre de fonctionnalités complexes que vous intégrez avant même d'avoir validé votre idée.\n\nVoici ce que je vois régulièrement faire doubler un budget :",
        checklist: {
          variant: "red",
          items: [
            { text: "**Vouloir tout avoir dès le début** au lieu de lancer un MVP et d'itérer selon les retours réels." },
            { text: "**Intégrer l'authentification complète dès le lancement** alors qu'un accès manuel peut suffire pour les premiers utilisateurs." },
            { text: "**Configurer Stripe dès le jour 1** alors que les premiers clients peuvent payer par virement." },
            { text: "**Demander un design parfait** avant même de savoir si le produit va fonctionner sur le marché." },
          ],
        },
      },
      {
        heading: "L'approche MVP : commencer petit pour aller plus loin",
        body: "Mon conseil le plus fréquent : commencez avec un MVP. Un produit minimum viable, c'est la version la plus simple de votre idée qui permet de la tester auprès de vrais utilisateurs.\n\nÇa coûte moins cher, ça se livre plus vite, et ça vous donne des données réelles avant d'investir davantage. Plusieurs de nos meilleurs projets ont commencé à 8 000 $, ont été testés, validés, et sont devenus des plateformes à 30 000 $ et plus au fil des mois.",
        callout: {
          icon: "💡",
          title: "La règle du MVP",
          body: "Si vous pouvez faire les 5 premières ventes sans une fonctionnalité, c'est qu'elle n'est pas dans le MVP. Ajoutez-la après, quand vous savez que le marché répond.",
          variant: "tip",
        },
      },
      {
        heading: "Un cas réel : l'application d'épicerie à 10 000 $",
        body: "Un de nos premiers clients voulait une plateforme pour comparer les prix d'épicerie en temps réel et livrer aux clients les produits les moins chers, regroupés dans une même boîte. Un projet ambitieux.\n\nOn a tout livré : authentification sécurisée, backend complet, hébergement, refonte graphique complète, intégration des paiements avec Stripe. Le prix facturé : 10 000 $. La valeur réelle du projet : entre 25 000 $ et 30 000 $.\n\nOn n'a pas fait beaucoup d'argent sur ce contrat. Mais c'était un de nos premiers projets, et on voulait livrer quelque chose dont on serait fiers. Ce qui nous a permis de tenir le budget malgré la complexité, c'est l'IA, qui nous a permis d'avancer beaucoup plus vite que prévu.",
        callout: {
          icon: "📦",
          title: "Ce qu'on a appris",
          body: "Ce projet nous a appris à mieux évaluer la valeur réelle d'un livrable, pas seulement le temps. Une plateforme avec Stripe, auth, backend et design custom, ce n'est pas un projet à 10 000 $. C'est un projet à 25 000 $. Aujourd'hui, nos soumissions reflètent cette réalité.",
          variant: "insight",
        },
      },
      {
        heading: "L'IA a tout changé, et ça joue en votre faveur",
        body: "Il y a deux ans, un projet de 3 mois prenait 3 mois. Aujourd'hui, le même projet nous prend environ un mois. L'IA nous permet d'avancer trois fois plus vite sans sacrifier la qualité.\n\nEt cette économie de temps, on la répercute directement sur le client. Vous payez moins cher. On peut prendre plus de projets. Tout le monde y gagne.\n\nC'est une des raisons pour lesquelles les fourchettes que je vous donne aujourd'hui sont plus accessibles qu'elles ne l'étaient il y a 24 mois.",
      },
      {
        heading: "\"J'ai trouvé quelqu'un en Inde pour 3 000 $\"",
        body: "Je l'entends souvent. Et voici ma réponse honnête : les développeurs offshore vont faire exactement ce que vous leur dites. Ce qui peut sembler être un avantage est souvent un piège.\n\nIls vont accepter des projets sans savoir s'ils sont capables de les réaliser. Ils vont livrer ce qui est demandé, pas ce qui est nécessaire. La communication est difficile : décalage horaire, barrière culturelle, rétroactions qui se perdent. Et dès qu'ils sont payés, le projet est terminé pour eux.\n\nNous, on ne fait pas que coder. On comprend votre modèle d'affaires. On agit comme partenaire technologique, pas comme sous-traitant. Si on pense que votre idée a un problème, on vous le dit avant d'écrire la première ligne de code.",
        checklist: {
          variant: "red",
          items: [
            { text: "Vous ne pouvez pas valider si le code est de qualité ou s'il est maintenable à long terme." },
            { text: "Les modifications après livraison sont souvent impossibles ou coûteuses à obtenir." },
            { text: "La communication en temps réel est quasi inexistante selon les fuseaux horaires." },
            { text: "Vous n'aurez pas de partenaire qui comprend vos objectifs d'affaires." },
          ],
        },
      },
      {
        heading: "L'histoire du client qui a essayé Lovable d'abord",
        body: "Un client est venu nous voir après avoir investi 1 000 $ en tokens sur Lovable, un outil no-code/IA pour générer des applications. Il avait réussi à construire environ 80 % de son application : l'interface, les pages principales, la structure de base.\n\nMais le dernier 20 %, les fonctionnalités complexes spécifiques à son business, il n'a jamais réussi à les faire. Ces fonctionnalités n'étaient pas supportées par l'outil. Il s'est retrouvé avec une coquille belle à regarder, mais inutilisable dans son contexte.\n\nOn a repris le projet. Et on l'a livré.",
        callout: {
          icon: "⚠️",
          title: "Les outils no-code ont des limites",
          body: "Lovable, Bubble et les outils similaires sont excellents pour valider rapidement une idée. Mais dès que vous avez des besoins spécifiques (intégrations sur mesure, logique métier complexe, performance à l'échelle), vous atteignez rapidement le mur. Et migrer hors d'un outil no-code coûte souvent plus cher que de bien bâtir dès le départ.",
          variant: "warning",
        },
      },
      {
        heading: "Comment savoir si vous avez trouvé le bon partenaire",
        body: "Je dis souvent que choisir une firme de développement, c'est comme choisir un partenaire de vie. Vous allez partager les frustrations, les décisions difficiles, les mauvaises nouvelles autant que les bonnes.\n\nIl faut s'assurer d'avoir une vision commune, des valeurs similaires, et surtout une communication franche. Faites affaires avec des gens qui tiennent vraiment à ce que votre projet fonctionne, pas avec des gens qui veulent juste fermer le contrat.",
        checklist: {
          variant: "green",
          items: [
            { text: "Ils posent des questions sur vos utilisateurs et vos objectifs avant de parler de technologies." },
            { text: "Ils vous proposent un MVP plutôt que de tout construire d'un coup." },
            { text: "Ils vous disent non quand une décision n'est pas dans votre intérêt." },
            { text: "Ils peuvent vous expliquer leurs choix techniques en termes simples." },
            { text: "Ils ont des références clients que vous pouvez contacter directement." },
          ],
        },
      },
      {
        body: "Si vous voulez savoir combien coûterait votre projet spécifiquement, on offre un estimatif en direct lors d'un premier appel gratuit de 30 minutes. Pas de soumission inventée en cinq minutes. Une vraie conversation pour comprendre ce que vous voulez bâtir, et vous donner un chiffre honnête.",
      },
    ],
  },
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
