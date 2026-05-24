export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQSection {
  category: string;
  items: FAQItem[];
}

export const faqSections: FAQSection[] = [
  {
    category: "FAQ générale",
    items: [
      {
        id: 1,
        question: "Quelles technologies utilisez-vous pour développer vos projets ?",
        answer:
          "Selon le type du projet, vos besoins ainsi que plusieurs autres facteurs, la technologie utilisée peut varier. La majorité du temps, on utilise **TypeScript**, un « sur-ensemble » de JavaScript, comme langage de programmation, ainsi que **Next.js** comme framework.\n\nNos solutions sont déployées sur une **architecture cloud moderne et évolutive** basée principalement sur les services **Microsoft Azure**.\n\nPour les systèmes de paiement, on utilise **Stripe**. Pour l'authentification back-end, on utilise notamment **Firebase**. Pour les LLM, on utilise **Flask** comme framework et **Python** comme langage de programmation. Pour les API, on utilise **.NET Core** comme framework et **C#** comme langage de programmation.\n\nPour les applications mobiles sur iOS, Google Play, Linux et Windows, on utilise **Flutter** ou **React Native** comme framework, ainsi que **Dart** ou **TypeScript** comme langage de programmation.\n\nQuand ce sont des sites web, on les fait sur mesure ou bien on utilise parfois **WordPress** avec **Elementor Pro**. La technologie utilisée dépend du projet et du client.",
      },
      {
        id: 2,
        question:
          "Combien de temps prend le développement d'une application web, d'une application mobile, d'un logiciel ou d'un site web sur mesure ?",
        answer:
          "Généralement, nous commençons par une **phase d'analyse** afin de bien comprendre vos besoins, définir les fonctionnalités clés et établir un plan de match avec vous.\n\nPar la suite, nous passons à la **phase de design**, où nous créons les premières maquettes que nous vous présentons. Cette étape peut durer **entre une semaine et un mois**.\n\nUne fois les maquettes validées et les fonctionnalités bien définies, nous entamons la **phase de développement**, qui peut prendre **de deux semaines à deux mois**, selon la complexité du projet.\n\nNous sommes également capables de livrer rapidement une première version ou un **MVP** afin de valider les idées tôt dans le processus.\n\nAu total, il faut généralement compter **entre deux semaines et trois mois** pour un projet complet. Cela varie toutefois selon chaque client, la complexité du projet ainsi que l'implication et la réactivité dans le processus.",
      },
      {
        id: 3,
        question:
          "Quelle est la différence entre travailler avec vous et utiliser des outils en ligne comme Replit, Lovable ou Base44 ?",
        answer:
          "Lorsque vous bâtissez une application, les outils de codage basés sur l'IA peuvent vous aider à créer une première version que vous pouvez tester rapidement et améliorer de façon itérative.\n\nCependant, au fur et à mesure que votre projet progresse, plusieurs éléments deviennent très complexes, tels que **la sécurisation de la base de données**, **la mise en place d'un processus d'authentification**, **l'hébergement**, **le respect des différentes lois et la gestion des cookies**, **la correction de bugs critiques** ainsi que **l'intégration d'un système de paiement sécurisé**.\n\nBref, il devient rapidement important de collaborer avec une **équipe d'experts** afin de s'assurer de ne pas commettre d'erreurs qui pourraient coûter cher.",
      },
      {
        id: 4,
        question:
          "Combien coûte le développement d'une application web, mobile, d'un logiciel ou d'un site web sur mesure ?",
        answer:
          "Les prix varient selon le type de projet ainsi que les différentes fonctionnalités requises. Voici une grille indicative de nos différents prix :\n\n**Moins de 5 000 $** : MVP simple, site vitrine, fonctionnalités de base\n**5 000 $ à 10 000 $** : Application simple avec authentification, base de données et interface utilisateur\n**10 000 $ à 25 000 $** : Plateforme complète avec back-end structuré, API et fonctionnalités avancées\n**25 000 $ à 50 000 $** : Produit SaaS évolutif, architecture cloud, intégrations tierces et performance optimisée\n**50 000 $ et plus** : Solution sur mesure complexe, scalabilité avancée, infrastructure robuste et développement continu",
      },
      {
        id: 5,
        question: "Pourquoi choisir Oriana Solutions plutôt qu'une autre agence ?",
        answer:
          "Premièrement, nous sommes une **jeune équipe qui utilise des technologies modernes et évolutives**. Notre équipe regroupe plusieurs compétences, que ce soit en génie logiciel, en administration des affaires, en programmation, en informatique ou en cybersécurité.\n\nNous avons travaillé avec de grandes institutions, notamment des villes, sur des projets complexes, ainsi qu'avec des entrepreneurs individuels et des startups. Nous nous assurons toujours de maintenir une **communication continue** et de simplifier au maximum la technologie pour nos clients.\n\nEn 2025, nous avons remporté la **première place du Défi OSEntreprendre lors de la finale nationale** pour une application mobile que nous avons créée. Des milliers de personnes participent chaque année à ce concours, qui est **le plus grand concours d'entrepreneuriat au Québec**.\n\nParmi nos clients, nous comptons l'un des **resto-pubs les plus populaires de la province**, un **courtier immobilier classé dans le top 10 individuel au Québec**, un **coach professionnel de renommée**, ainsi que plusieurs autres PME et entrepreneurs.",
      },
    ],
  },
  {
    category: "Application mobile",
    items: [
      {
        id: 101,
        question: "Développez-vous des applications iOS et Android ?",
        answer:
          "Oui, on développe des applications disponibles sur les deux plateformes. On utilise principalement **React Native** ou **Flutter**, ce qui nous permet de couvrir iOS et Android avec une seule base de code tout en offrant des performances natives.\n\nLe choix du framework dépend de vos besoins, de la complexité de l'application et des fonctionnalités requises.",
      },
      {
        id: 102,
        question: "Combien de temps faut-il pour développer une application mobile ?",
        answer:
          "Pour un **MVP simple**, comptez généralement **6 à 10 semaines**. Pour une application complète avec back-end, authentification, notifications et fonctionnalités avancées, le délai se situe plutôt entre **3 et 6 mois**.\n\nOn commence toujours par bien définir les fonctionnalités prioritaires afin de livrer une première version rapidement et d'itérer ensuite selon vos retours.",
      },
      {
        id: 103,
        question: "Gérez-vous la publication sur l'App Store et Google Play ?",
        answer:
          "Oui, on s'occupe de l'ensemble du processus de soumission : captures d'écran, descriptions, conformité aux guidelines d'Apple et de Google, certificats et configuration des comptes développeur.\n\nSi vous n'avez pas encore de compte développeur, on vous guide dans la création et la configuration.",
      },
      {
        id: 104,
        question: "Peut-on intégrer un système de paiement dans l'application ?",
        answer:
          "Absolument. On intègre **Stripe** pour les paiements en application, incluant les abonnements, les achats uniques et les paiements in-app. On s'assure que l'intégration respecte les exigences d'Apple et Google en matière de paiements.",
      },
      {
        id: 105,
        question: "Offrez-vous de la maintenance après le lancement ?",
        answer:
          "Oui, on propose des plans de maintenance adaptés pour les **mises à jour de compatibilité** (nouvelles versions iOS/Android), la correction de bugs, l'ajout de nouvelles fonctionnalités et la surveillance des performances.\n\nLes stores évoluent régulièrement et une maintenance active permet de garder votre application disponible et performante dans le temps.",
      },
    ],
  },
  {
    category: "Application web & SaaS",
    items: [
      {
        id: 201,
        question: "Quelle est la différence entre une application web et un site web ?",
        answer:
          "Un **site web** est principalement informatif : il présente votre entreprise, vos services ou votre contenu. Une **application web** est interactive : les utilisateurs s'y connectent, créent un compte, gèrent des données et effectuent des actions.\n\nUn **SaaS** (Software as a Service) est une application web accessible par abonnement, généralement avec plusieurs niveaux de fonctionnalités ou d'utilisateurs.",
      },
      {
        id: 202,
        question: "Quelles technologies utilisez-vous pour les applications web ?",
        answer:
          "On utilise principalement **Next.js** et **React** pour le front-end, avec **TypeScript** comme langage. Pour le back-end, on travaille avec **.NET Core** en C# ou **Node.js** selon les besoins.\n\nPour la base de données, on utilise **PostgreSQL**, **Supabase** ou **Firebase** selon l'architecture. Nos déploiements se font sur **Microsoft Azure** ou **Vercel** pour assurer performance et scalabilité.",
      },
      {
        id: 203,
        question: "Pouvez-vous reprendre ou améliorer une application web existante ?",
        answer:
          "Oui, on peut auditer votre code existant, identifier les problèmes et proposer un plan d'amélioration. On peut refactoriser une application, migrer vers une technologie plus moderne ou ajouter de nouvelles fonctionnalités.\n\nOn commence toujours par une **phase d'analyse** pour bien comprendre l'existant avant de recommander quoi que ce soit.",
      },
      {
        id: 204,
        question: "Comment gérez-vous la sécurité et les données des utilisateurs ?",
        answer:
          "La sécurité est intégrée dès le départ : **authentification sécurisée** (JWT, OAuth), **chiffrement des données sensibles**, protection contre les injections SQL et les attaques XSS, et conformité aux bonnes pratiques de l'industrie.\n\nOn s'assure également que votre application respecte les obligations légales en matière de confidentialité, notamment la **Loi 25 au Québec** et le **RGPD** si applicable.",
      },
      {
        id: 205,
        question: "Peut-on intégrer des outils tiers comme Stripe, HubSpot ou des API externes ?",
        answer:
          "Oui, l'intégration d'outils tiers fait partie de notre quotidien. On connecte régulièrement des systèmes de paiement (**Stripe**), des CRM, des outils de communication, des API gouvernementales ou des plateformes tierces selon vos besoins.\n\nSi une API existe pour l'outil que vous utilisez, on peut l'intégrer à votre application.",
      },
    ],
  },
  {
    category: "Site web sur mesure",
    items: [
      {
        id: 301,
        question: "Quelle est la différence entre un site sur mesure et un site WordPress ?",
        answer:
          "Un **site sur mesure** est développé entièrement à partir de zéro, sans template ni thème prédéfini. Il est plus rapide, plus performant, plus sécurisé et entièrement adapté à votre image de marque.\n\n**WordPress** est une bonne option pour les budgets plus limités ou les projets qui nécessitent une gestion de contenu simple. On travaille avec les deux selon les besoins du client, mais on recommande le sur-mesure pour les entreprises qui veulent se démarquer.",
      },
      {
        id: 302,
        question: "Le site sera-t-il optimisé pour le référencement (SEO) ?",
        answer:
          "Oui, le SEO est intégré dès la phase de développement. On s'assure que le site respecte les meilleures pratiques : **structure HTML sémantique**, **balises meta optimisées**, **temps de chargement rapide**, **images compressées**, **sitemap XML** et **compatibilité mobile**.\n\nOn utilise **Next.js** qui offre un rendu côté serveur (SSR) nativement, ce qui est un avantage significatif pour le référencement.",
      },
      {
        id: 303,
        question: "Est-ce que je pourrai modifier le contenu moi-même ?",
        answer:
          "Oui, si vous souhaitez pouvoir modifier votre contenu sans toucher au code, on peut intégrer un **système de gestion de contenu (CMS)** comme **Sanity**, **Contentful** ou **Prismic**.\n\nCela vous permet de mettre à jour vos textes, images, articles de blogue ou offres d'emploi directement depuis une interface simple, sans aucune connaissance technique.",
      },
      {
        id: 304,
        question: "Combien coûte un site web sur mesure ?",
        answer:
          "Un site vitrine simple commence autour de **2 500 $**. Un site avec plusieurs pages, animations, formulaires et intégrations se situe généralement entre **5 000 $ et 15 000 $**.\n\nLe prix dépend du nombre de pages, du niveau de design, des fonctionnalités requises et des intégrations nécessaires. On vous fournit un devis détaillé et transparent dès notre première rencontre.",
      },
      {
        id: 305,
        question: "Est-ce que le site sera responsive sur mobile et tablette ?",
        answer:
          "Oui, tous nos sites sont **100 % responsives**. On adopte une approche mobile-first, c'est-à-dire qu'on design et développe d'abord pour les petits écrans avant d'adapter pour les formats plus grands.\n\nAvec plus de 60 % du trafic web qui provient des appareils mobiles, c'est une priorité non négociable pour nous.",
      },
    ],
  },
];
