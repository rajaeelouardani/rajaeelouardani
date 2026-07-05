// Hard Skills category translations (Blogs 56-60)
import { BlogTranslations } from '../types'

const hardskillsTranslations: BlogTranslations = {
  // Blog 56: Web development stack
  56: {
    fr: {
      domainExplanation: 'Le développement web moderne nécessite maîtriser une stack complète : JavaScript/TypeScript pour la logique, React pour l\'interface utilisateur, Node.js pour le backend, et les outils associés. Cette combinaison permet de créer des applications web complètes et performantes.',
      howToStart: 'Commencez par maîtriser JavaScript (variables, fonctions, async/await). Apprenez TypeScript pour sécurité de types. Étudiez React pour interfaces modernes. Explorez Node.js pour backend. Pratiquez en créant projets progressivement plus complexes.',
      essentialElements: [
        'JavaScript ES6+ : Variables, fonctions, classes, async/await, destructuring',
        'TypeScript : Types, interfaces, génériques, sécurité de code',
        'React : Composants, hooks, state management, routing',
        'Node.js : Serveurs, APIs REST, bases de données, middleware',
        'Outils : npm/yarn, Git, VS Code, Webpack/Vite',
        'Concepts : DOM, API REST, bases de données, authentification'
      ],
      fullContent: `
        <h2>Introduction : Maîtriser la stack web moderne complète</h2>
        <p>Le développement web moderne est un écosystème riche et complexe. Maîtriser JavaScript, TypeScript, React et Node.js vous permet de créer des applications web complètes, du frontend au backend. Ce guide vous donne une vue d'ensemble structurée et des chemins d'apprentissage pour devenir développeur full stack.</p>
        <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&auto=format&fit=crop" alt="Web development" class="w-full rounded-lg my-6" />
        
        <h2>1. JavaScript : Fondations</h2>
        
        <h3>Concepts essentiels</h3>
        <ul>
          <li><strong>Variables :</strong> let, const, var (différences)</li>
          <li><strong>Fonctions :</strong> Déclarations, expressions, arrow functions</li>
          <li><strong>Objects & Arrays :</strong> Manipulation, méthodes, destructuring</li>
          <li><strong>Classes :</strong> Programmation orientée objet</li>
          <li><strong>Async/await :</strong> Gestion asynchrone, Promises</li>
          <li><strong>Modules :</strong> import/export, ES6 modules</li>
        </ul>
        
        <h2>2. TypeScript : JavaScript avec types</h2>
        
        <h3>Avantages</h3>
        <ul>
          <li>Sécurité de types (erreurs détectées avant exécution)</li>
          <li>Meilleur autocomplete IDE</li>
          <li>Refactoring plus sûr</li>
          <li>Documentation implicite dans le code</li>
        </ul>
        
        <h3>Concepts clés</h3>
        <ul>
          <li>Types de base (string, number, boolean)</li>
          <li>Interfaces et types personnalisés</li>
          <li>Génériques</li>
          <li>Unions et intersections</li>
        </ul>
        
        <h2>3. React : Bibliothèque UI moderne</h2>
        
        <h3>Concepts fondamentaux</h3>
        <ul>
          <li><strong>Composants :</strong> Fonctionnels, réutilisables</li>
          <li><strong>Props :</strong> Passer données aux composants</li>
          <li><strong>State :</strong> useState, gestion état local</li>
          <li><strong>Hooks :</strong> useEffect, useContext, custom hooks</li>
          <li><strong>Routing :</strong> React Router</li>
          <li><strong>State Management :</strong> Context API, Redux (si nécessaire)</li>
        </ul>
        
        <h2>4. Node.js : JavaScript côté serveur</h2>
        
        <h3>Écosystème</h3>
        <ul>
          <li><strong>Express.js :</strong> Framework web minimal</li>
          <li><strong>APIs REST :</strong> Création endpoints, CRUD</li>
          <li><strong>Bases de données :</strong> MongoDB, PostgreSQL</li>
          <li><strong>Authentification :</strong> JWT, sessions</li>
          <li><strong>Middleware :</strong> Gestion requêtes, erreurs</li>
        </ul>
        
        <h2>5. Outils et workflow</h2>
        
        <h3>Développement</h3>
        <ul>
          <li><strong>Éditeurs :</strong> VS Code (recommandé)</li>
          <li><strong>Package managers :</strong> npm, yarn, pnpm</li>
          <li><strong>Build tools :</strong> Webpack, Vite, Parcel</li>
          <li><strong>Git :</strong> Version control</li>
        </ul>
        
        <h2>6. Parcours d'apprentissage recommandé</h2>
        
        <h3>Phase 1 : Fondations (1-2 mois)</h3>
        <ul>
          <li>HTML/CSS (si débutant)</li>
          <li>JavaScript ES6+</li>
          <li>DOM manipulation</li>
        </ul>
        
        <h3>Phase 2 : Frontend (2-3 mois)</h3>
        <ul>
          <li>React (composants, hooks)</li>
          <li>TypeScript</li>
          <li>Routing, state management</li>
        </ul>
        
        <h3>Phase 3 : Backend (2-3 mois)</h3>
        <ul>
          <li>Node.js et Express</li>
          <li>Bases de données</li>
          <li>APIs REST</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Maîtriser la stack web moderne est un parcours qui nécessite pratique et patience. Commencez par les fondations (JavaScript), puis progressez vers React et Node.js. Pratiquez en créant des projets réels, et n'essayez pas de tout apprendre en même temps. La pratique régulière et la création de projets sont les clés du succès.</p>
      `,
      prerequisites: [
        'Connaissances de base HTML/CSS',
        'Logique de programmation',
        'Accès à un ordinateur et connexion internet'
      ],
      tools: [
        'VS Code (éditeur)',
        'Node.js et npm',
        'Git et GitHub',
        'Navigateur moderne'
      ],
      nextSteps: [
        'Installez Node.js et VS Code',
        'Suivez un cours JavaScript de base',
        'Créez votre premier projet React',
        'Construisez une API simple avec Node.js',
        'Créez un projet full stack complet'
      ]
    },
    ar: {
      domainExplanation: 'التطوير الويب الحديث يتطلب إتقان JavaScript، TypeScript، React، Node.js.',
      howToStart: 'ابدأ بإتقان JavaScript. تعلم TypeScript. ادرس React. استكشف Node.js.',
      essentialElements: [
        'JavaScript ES6+',
        'TypeScript',
        'React',
        'Node.js',
        'الأدوات'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>التطوير الويب الحديث نظام بيئي غني ومعقد.</p>
        <h2>الخلاصة</h2>
        <p>إتقان المكدس الويب الحديث يتطلب الممارسة والصبر.</p>
      `,
      prerequisites: ['معرفة أساسية HTML/CSS', 'منطق البرمجة'],
      tools: ['VS Code', 'Node.js', 'Git'],
      nextSteps: ['ثبت Node.js', 'تعلم JavaScript', 'أنشئ مشروع React']
    },
    en: {
      domainExplanation: 'Modern web development requires mastering JavaScript, TypeScript, React, Node.js.',
      howToStart: 'Start by mastering JavaScript. Learn TypeScript. Study React. Explore Node.js.',
      essentialElements: [
        'JavaScript ES6+',
        'TypeScript',
        'React',
        'Node.js',
        'Tools'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Modern web development is a rich and complex ecosystem.</p>
        <h2>Conclusion</h2>
        <p>Mastering the modern web stack requires practice and patience.</p>
      `,
      prerequisites: ['Basic HTML/CSS knowledge', 'Programming logic'],
      tools: ['VS Code', 'Node.js', 'Git'],
      nextSteps: ['Install Node.js', 'Learn JavaScript', 'Create React project']
    }
  },
  // Blog 57: Cloud computing
  57: {
    fr: {
      domainExplanation: 'Le cloud computing transforme comment nous développons, déployons et scalons des applications. AWS, Azure et GCP sont les trois plateformes cloud majeures offrant infrastructure, services managés et outils pour applications modernes.',
      howToStart: 'Créez compte gratuit sur une plateforme (AWS Free Tier recommandé pour débuter). Suivez tutoriels de base (déployer site statique, créer instance EC2). Explorez services fondamentaux (S3, Lambda, bases de données). Pratiquez avec projets personnels.',
      essentialElements: [
        'Concepts : IaaS, PaaS, SaaS, serverless',
        'AWS : Services principaux (EC2, S3, Lambda, RDS, CloudFront)',
        'Azure : Services Microsoft, intégration enterprise',
        'GCP : Services Google, machine learning, BigQuery',
        'Déploiement : CI/CD, containers (Docker), orchestration',
        'Sécurité : IAM, VPC, chiffrement, compliance'
      ],
      fullContent: `
        <h2>Introduction : Maîtriser le cloud computing</h2>
        <p>Le cloud computing est devenu l'infrastructure standard pour applications modernes. Comprendre AWS, Azure et GCP vous permet de construire, déployer et scaler des applications efficacement. Ce guide vous introduit aux concepts fondamentaux et services essentiels de chaque plateforme.</p>
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop" alt="Cloud computing" class="w-full rounded-lg my-6" />
        
        <h2>1. Concepts fondamentaux</h2>
        
        <h3>Types de cloud</h3>
        <ul>
          <li><strong>IaaS (Infrastructure as a Service) :</strong> Serveurs, stockage, réseau (ex: EC2, VMs)</li>
          <li><strong>PaaS (Platform as a Service) :</strong> Environnement développement complet (ex: Heroku, App Engine)</li>
          <li><strong>SaaS (Software as a Service) :</strong> Applications complètes (ex: Gmail, Salesforce)</li>
          <li><strong>Serverless :</strong> Exécution code sans gérer serveurs (ex: Lambda, Functions)</li>
        </ul>
        
        <h3>Avantages du cloud</h3>
        <ul>
          <li>Scalabilité automatique</li>
          <li>Paiement à l'usage</li>
          <li>Haute disponibilité</li>
          <li>Gestion simplifiée</li>
        </ul>
        
        <h2>2. AWS (Amazon Web Services)</h2>
        
        <h3>Services essentiels</h3>
        <ul>
          <li><strong>EC2 :</strong> Serveurs virtuels</li>
          <li><strong>S3 :</strong> Stockage objet</li>
          <li><strong>Lambda :</strong> Fonctions serverless</li>
          <li><strong>RDS :</strong> Bases de données managées</li>
          <li><strong>CloudFront :</strong> CDN global</li>
          <li><strong>IAM :</strong> Gestion accès et permissions</li>
        </ul>
        
        <h3>Points forts AWS</h3>
        <ul>
          <li>Le plus grand marché</li>
          <li>Écosystème énorme</li>
          <li>Services très matures</li>
          <li>Free Tier généreux (12 mois)</li>
        </ul>
        
        <h2>3. Azure (Microsoft)</h2>
        
        <h3>Services clés</h3>
        <ul>
          <li>Virtual Machines</li>
          <li>Azure Functions</li>
          <li>Azure SQL Database</li>
          <li>Azure Active Directory</li>
        </ul>
        
        <h3>Points forts Azure</h3>
        <ul>
          <li>Intégration Microsoft (Windows, Office 365)</li>
          <li>Idéal entreprises Microsoft</li>
          <li>Hybrid cloud</li>
        </ul>
        
        <h2>4. GCP (Google Cloud Platform)</h2>
        
        <h3>Services principaux</h3>
        <ul>
          <li>Compute Engine</li>
          <li>Cloud Functions</li>
          <li>BigQuery (analytics)</li>
          <li>AI/ML services</li>
        </ul>
        
        <h3>Points forts GCP</h3>
        <ul>
          <li>Excellents services ML/AI</li>
          <li>BigQuery pour Big Data</li>
          <li>Réseau global rapide</li>
        </ul>
        
        <h2>5. Comparaison rapide</h2>
        <ul>
          <li><strong>AWS :</strong> Leader marché, services complets, idéal la plupart projets</li>
          <li><strong>Azure :</strong> Entreprises Microsoft, hybrid cloud</li>
          <li><strong>GCP :</strong> ML/AI, Big Data, analytics</li>
        </ul>
        
        <h2>6. Premiers pas recommandés</h2>
        <ol>
          <li>Créer compte AWS Free Tier</li>
          <li>Déployer site statique sur S3</li>
          <li>Créer instance EC2 simple</li>
          <li>Expérimenter Lambda</li>
          <li>Apprendre IAM (sécurité)</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>Le cloud computing est essentiel pour développeurs modernes. Commencez par AWS (plus de ressources), apprenez les concepts fondamentaux, puis explorez Azure ou GCP selon besoins spécifiques. La pratique avec projets réels est la meilleure façon d'apprendre.</p>
      `,
      prerequisites: [
        'Connaissances de base développement web',
        'Compréhension serveurs et déploiement',
        'Carte bancaire pour comptes cloud (Free Tier généralement gratuit)'
      ],
      tools: [
        'AWS Console, Azure Portal, GCP Console',
        'AWS CLI, gcloud CLI',
        'Terraform (infrastructure as code)',
        'Docker (containers)'
      ],
      nextSteps: [
        'Créez compte AWS Free Tier',
        'Suivez tutoriel "Premier déploiement S3"',
        'Créez instance EC2 et déployez application simple',
        'Expérimentez Lambda avec fonction Hello World',
        'Passez certification AWS Cloud Practitioner'
      ]
    },
    ar: {
      domainExplanation: 'الحوسبة السحابية تحول كيفية تطوير وتنفيذ التطبيقات. AWS و Azure و GCP هي المنصات الرئيسية.',
      howToStart: 'أنشئ حساب مجاني على AWS. اتبع دروس أساسية. استكشف الخدمات الأساسية.',
      essentialElements: [
        'المفاهيم: IaaS, PaaS, SaaS',
        'AWS: EC2, S3, Lambda',
        'Azure: خدمات Microsoft',
        'GCP: خدمات Google'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>الحوسبة السحابية أصبحت البنية التحتية القياسية للتطبيقات الحديثة.</p>
        <h2>الخلاصة</h2>
        <p>ابدأ بـ AWS، تعلم المفاهيم الأساسية، ثم استكشف منصات أخرى حسب الحاجة.</p>
      `,
      prerequisites: ['معرفة أساسية بالتنمية', 'فهم الخوادم'],
      tools: ['AWS Console', 'AWS CLI', 'Docker'],
      nextSteps: ['أنشئ حساب AWS', 'نشر موقع على S3', 'أنشئ EC2']
    },
    en: {
      domainExplanation: 'Cloud computing transforms how we develop and deploy applications. AWS, Azure, and GCP are major platforms.',
      howToStart: 'Create free account on AWS. Follow basic tutorials. Explore core services.',
      essentialElements: [
        'Concepts: IaaS, PaaS, SaaS',
        'AWS: EC2, S3, Lambda',
        'Azure: Microsoft services',
        'GCP: Google services'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Cloud computing has become the standard infrastructure for modern applications.</p>
        <h2>Conclusion</h2>
        <p>Start with AWS, learn fundamentals, then explore other platforms as needed.</p>
      `,
      prerequisites: ['Basic development knowledge', 'Server understanding'],
      tools: ['AWS Console', 'AWS CLI', 'Docker'],
      nextSteps: ['Create AWS account', 'Deploy site on S3', 'Create EC2']
    }
  }
}

export default hardskillsTranslations
