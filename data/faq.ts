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
];
