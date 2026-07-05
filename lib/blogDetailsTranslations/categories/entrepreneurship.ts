// Entrepreneurship category translations (Blogs 46-50)
import { BlogTranslations } from '../types'

const entrepreneurshipTranslations: BlogTranslations = {
  // Blog 46: Valider une idée business
  46: {
    fr: {
      domainExplanation: 'Valider une idée business avant d\'investir temps et argent est crucial pour éviter les échecs coûteux. Les méthodes lean startup, MVP (Minimum Viable Product) et prototypage permettent de tester rapidement la demande réelle et d\'itérer basé sur les retours clients réels.',
      howToStart: 'Commencez par définir votre hypothèse principale (votre idée résout un problème réel). Créez un prototype ou MVP minimal. Testez avec un petit groupe de clients cibles. Collectez des retours et mesurez l\'intérêt réel. Itérez rapidement basé sur les données.',
      essentialElements: [
        'Lean Startup : Build-Measure-Learn, itération rapide',
        'MVP : Produit minimal avec fonctionnalités essentielles pour tester demande',
        'Validation : Interviews clients, landing pages, prototypes, pre-orders',
        'Métriques : Taux de conversion, engagement, rétention, feedback qualitatif',
        'Pivoter ou persévérer : Décision basée sur données, pas suppositions',
        'Hypothèses testables : Formuler hypothèses claires et mesurables'
      ],
      fullContent: `
        <h2>Introduction : Valider votre idée business avant de lancer</h2>
        <p>La majorité des startups échouent non pas par manque d'exécution, mais parce qu'elles créent quelque chose que personne ne veut vraiment. Valider une idée business avant d'investir massivement en temps et argent est l'une des compétences les plus critiques pour les entrepreneurs. Ce guide vous montre comment utiliser les méthodologies lean startup, créer des MVP efficaces, et tester rapidement la demande réelle de votre marché.</p>
        <img src="https://images.unsplash.com/photo-1552664730-d307ca8849d1?w=1200&auto=format&fit=crop" alt="Validation business" class="w-full rounded-lg my-6" />
        
        <h2>1. Comprendre la validation</h2>
        
        <h3>Pourquoi valider ?</h3>
        <ul>
          <li><strong>Économiser ressources :</strong> Éviter développer produit que personne ne veut</li>
          <li><strong>Réduire risques :</strong> Tester avant investissement massif</li>
          <li><strong>Apprendre rapidement :</strong> Comprendre besoins réels clients</li>
          <li><strong>Itérer efficacement :</strong> Ajuster direction basé sur données réelles</li>
        </ul>
        
        <h3>Méthodologie Lean Startup</h3>
        <p><strong>Cycle Build-Measure-Learn :</strong></p>
        <ul>
          <li><strong>Build :</strong> Créer MVP minimal</li>
          <li><strong>Measure :</strong> Mesurer réactions et comportements réels</li>
          <li><strong>Learn :</strong> Apprendre et décider pivoter ou persévérer</li>
          <li><strong>Répéter :</strong> Itérer rapidement</li>
        </ul>
        
        <h2>2. Créer des hypothèses testables</h2>
        
        <h3>Hypothèses critiques à tester</h3>
        <ul>
          <li><strong>Problème :</strong> Les clients ont-ils vraiment ce problème ?</li>
          <li><strong>Solution :</strong> Notre solution résout-elle vraiment le problème ?</li>
          <li><strong>Marché :</strong> Y a-t-il assez de clients prêts à payer ?</li>
          <li><strong>Monétisation :</strong> Sommes-nous capables de monétiser ?</li>
        </ul>
        
        <h3>Format d'hypothèse</h3>
        <pre><code>Nous croyons que [groupe cible]
a besoin de [solution]
parce que [problème/insight].

Nous saurons que nous avons raison quand
[métrique spécifique] atteint [valeur cible].</code></pre>
        
        <h2>3. Méthodes de validation</h2>
        
        <h3>1. Interviews clients (Customer Discovery)</h3>
        <ul>
          <li><strong>Objectif :</strong> Comprendre problèmes et besoins réels</li>
          <li><strong>Processus :</strong>
            <ul>
              <li>Identifier 20-30 personnes de votre marché cible</li>
              <li>Poser questions ouvertes sur problèmes actuels</li>
              <li>Écouter, ne pas vendre</li>
              <li>Identifier patterns communs</li>
            </ul>
          </li>
          <li><strong>Questions clés :</strong>
            <ul>
              <li>"Quel est votre plus gros défi avec [domaine] ?"</li>
              <li>"Comment résolvez-vous actuellement ce problème ?"</li>
              <li>"Combien payeriez-vous pour une solution ?"</li>
            </ul>
          </li>
        </ul>
        
        <h3>2. Landing Page / Smoke Test</h3>
        <ul>
          <li>Créer page présentant votre produit</li>
          <li>Ajouter formulaire "Pré-commander" ou "Être notifié"</li>
          <li>Générer trafic via publicité (Google Ads, Facebook)</li>
          <li><strong>Mesurer :</strong> Taux de conversion visiteurs → signups</li>
          <li><strong>Seuil de validation :</strong> 2-5% de conversion minimum</li>
          <li><strong>Outils :</strong> Unbounce, Carrd, Webflow</li>
        </ul>
        
        <h3>3. MVP (Minimum Viable Product)</h3>
        <ul>
          <li><strong>Définition :</strong> Version minimale permettant de tester hypothèse principale</li>
          <li><strong>Caractéristiques :</strong>
            <ul>
              <li>Fonctionnalité minimale pour résoudre problème principal</li>
              <li>Peut être bugué mais doit démontrer valeur</li>
              <li>Permet mesurer réaction utilisateurs</li>
            </ul>
          </li>
          <li><strong>Exemples MVP :</strong>
            <ul>
              <li>Dropbox : Vidéo démo au lieu de produit réel</li>
              <li>Zappos : Photos de chaussures sans stock (achète si commande)</li>
              <li>Airbnb : Site simple avec couchages chez créateurs</li>
            </ul>
          </li>
        </ul>
        
        <h3>4. Prototypage</h3>
        <ul>
          <li><strong>Prototype papier :</strong> Esquisses pour tester UX</li>
          <li><strong>Mockups :</strong> Figma, Sketch pour présenter concept</li>
          <li><strong>Prototype cliquable :</strong> InVision, Framer pour tester interactions</li>
          <li><strong>Wizard of Oz :</strong> Interface mais traitement manuel derrière</li>
        </ul>
        
        <h3>5. Pre-orders / Crowdfunding</h3>
        <ul>
          <li>Demander paiement avant de construire</li>
          <li>Validation ultime : gens paient vraiment</li>
          <li>Plateformes : Kickstarter, Indiegogo, ou votre propre site</li>
          <li><strong>Attention :</strong> Engagements à tenir si succès</li>
        </ul>
        
        <h2>4. Types de MVP</h2>
        
        <h3>Concierge MVP</h3>
        <ul>
          <li>Service manuel simulant produit automatisé</li>
          <li>Exemple : Service repas livré (vous commandez/livrez manuellement d'abord)</li>
          <li>Avantage : Teste valeur sans développer</li>
        </ul>
        
        <h3>Wizard of Oz MVP</h3>
        <ul>
          <li>Interface automatisée mais traitement manuel</li>
          <li>Exemple : Bot IA (vous répondez manuellement d'abord)</li>
          <li>Avantage : Teste expérience utilisateur</li>
        </ul>
        
        <h3>Single Feature MVP</h3>
        <ul>
          <li>Une seule fonctionnalité mais bien exécutée</li>
          <li>Exemple : Twitter (juste tweets au début)</li>
          <li>Avantage : Focus sur valeur principale</li>
        </ul>
        
        <h2>5. Métriques de validation</h2>
        
        <h3>Métriques quantitatives</h3>
        <ul>
          <li><strong>Taux de conversion :</strong> Visiteurs → utilisateurs/payants</li>
          <li><strong>Engagement :</strong> Utilisateurs actifs, fréquence utilisation</li>
          <li><strong>Rétention :</strong> Utilisateurs revenant après première utilisation</li>
          <li><strong>Valeur :</strong> Revenus générés, commandes</li>
        </ul>
        
        <h3>Métriques qualitatives</h3>
        <ul>
          <li>Feedback utilisateurs</li>
          <li>Problèmes mentionnés</li>
          <li>Suggestions d'amélioration</li>
          <li>Émotions et réactions</li>
        </ul>
        
        <h3>Seuils de validation</h3>
        <ul>
          <li><strong>Landing page :</strong> 2-5% conversion</li>
          <li><strong>MVP :</strong> 40%+ utilisateurs testant utilisent régulièrement</li>
          <li><strong>Pre-orders :</strong> Objectif chiffre d'affaires atteint</li>
        </ul>
        
        <h2>6. Pivoter ou persévérer</h2>
        
        <h3>Quand persévérer</h3>
        <ul>
          <li>Signaux positifs de validation</li>
          <li>Utilisateurs engagés et payants</li>
          <li>Feedback positif dominant</li>
          <li>Croissance organique</li>
        </ul>
        
        <h3>Quand pivoter</h3>
        <ul>
          <li>Pas de traction malgré efforts</li>
          <li>Feedback négatif répété</li>
          <li>Marché trop petit</li>
          <li>Modèle économique non viable</li>
        </ul>
        
        <h3>Types de pivots</h3>
        <ul>
          <li><strong>Pivot zoom-in :</strong> Une fonctionnalité devient produit principal</li>
          <li><strong>Pivot zoom-out :</strong> Produit devient fonctionnalité d'un produit plus large</li>
          <li><strong>Pivot segment :</strong> Même produit, audience différente</li>
          <li><strong>Pivot besoin :</strong> Nouveau problème, même audience</li>
        </ul>
        
        <h2>7. Erreurs courantes</h2>
        <ul>
          <li>Trop développer avant tester</li>
          <li>Demander si gens aiment idée (vs si ils achèteraient)</li>
          <li>Ignorer signaux négatifs</li>
          <li>MVP trop complexe</li>
          <li>Ne pas itérer basé sur retours</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Valider une idée business est un processus itératif qui économise temps, argent et frustration. En testant rapidement vos hypothèses avec des MVP et méthodes de validation appropriées, vous apprenez ce que vos clients veulent vraiment avant d'investir massivement. Rappelez-vous : échouer vite et apprendre est préférable à échouer lentement et cher. La validation n'est pas un événement ponctuel mais un processus continu qui guide votre développement produit.</p>
      `,
      prerequisites: [
        'Idée business à valider',
        'Compréhension de base du marché cible',
        'Ouverture à recevoir feedback critique'
      ],
      tools: [
        'Landing pages : Carrd, Unbounce, Webflow',
        'Surveys : Typeform, Google Forms',
        'Analytics : Google Analytics, Mixpanel',
        'Prototypes : Figma, Framer, InVision'
      ],
      nextSteps: [
        'Formulez vos hypothèses principales à tester',
        'Identifiez 20 personnes de votre marché cible',
        'Conduisez 5 interviews clients de découverte',
        'Créez une landing page simple avec CTA',
        'Testez avec 100-200€ de publicité',
        'Analysez résultats et décidez prochaines étapes'
      ]
    },
    ar: {
      domainExplanation: 'التحقق من فكرة العمل قبل الاستثمار أمر بالغ الأهمية لتجنب الفشل المكلف.',
      howToStart: 'حدد فرضيتك الرئيسية. أنشئ MVP أو نموذج أولي. اختبر مع مجموعة صغيرة. اجمع التعليقات.',
      essentialElements: [
        'Lean Startup: Build-Measure-Learn',
        'MVP: منتج أدنى قابل للتطبيق',
        'التحقق: مقابلات، صفحات هبوط، طلبات مسبقة',
        'المقاييس: التحويل، التفاعل، الاحتفاظ'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>التحقق من فكرة العمل قبل الاستثمار أمر بالغ الأهمية.</p>
        <h2>١. فهم التحقق</h2>
        <p>لماذا التحقق؟ توفير الموارد، تقليل المخاطر، التعلم السريع.</p>
        <h2>الخلاصة</h2>
        <p>التحقق عملية تكرارية توفر الوقت والمال.</p>
      `,
      prerequisites: ['فكرة عمل للتحقق منها', 'فهم أساسي للسوق المستهدف'],
      tools: ['Carrd', 'Typeform', 'Google Analytics', 'Figma'],
      nextSteps: ['صيغ فرضياتك', 'أجر مقابلات', 'أنشئ صفحة هبوط']
    },
    en: {
      domainExplanation: 'Validating a business idea before investing time and money is crucial to avoid costly failures.',
      howToStart: 'Define your main hypothesis. Create MVP or prototype. Test with small group. Collect feedback.',
      essentialElements: [
        'Lean Startup: Build-Measure-Learn',
        'MVP: Minimum Viable Product',
        'Validation: Interviews, landing pages, pre-orders',
        'Metrics: Conversion, engagement, retention'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Validating a business idea before investing is crucial.</p>
        <h2>1. Understanding Validation</h2>
        <p>Why validate? Save resources, reduce risks, learn fast.</p>
        <h2>Conclusion</h2>
        <p>Validation is an iterative process that saves time and money.</p>
      `,
      prerequisites: ['Business idea to validate', 'Basic understanding of target market'],
      tools: ['Carrd', 'Typeform', 'Google Analytics', 'Figma'],
      nextSteps: ['Formulate hypotheses', 'Conduct interviews', 'Create landing page']
    }
  },
  // Blog 47: Business model
  47: {
    fr: {
      domainExplanation: 'Un business model solide définit comment votre entreprise crée, délivre et capture de la valeur. Comprendre les différents composants (segments clients, proposition de valeur, canaux, revenus) vous permet de créer un modèle économique viable et scalable.',
      howToStart: 'Identifiez vos segments clients et leurs besoins. Définissez votre proposition de valeur unique. Choisissez vos canaux de distribution et relation clients. Déterminez vos sources de revenus. Analysez vos coûts et structure. Créez votre Business Model Canvas.',
      essentialElements: [
        'Segments clients : Qui sont vos clients cibles et leurs besoins',
        'Proposition de valeur : Ce que vous offrez et pourquoi c\'est unique',
        'Canaux : Comment vous atteignez et délivrez valeur à vos clients',
        'Relations clients : Type de relation (personnalisée, automatique, communauté)',
        'Revenus : Comment vous générez de l\'argent (vente, abonnement, commission)',
        'Ressources clés : Actifs nécessaires pour fonctionner',
        'Activités clés : Actions principales pour délivrer valeur',
        'Partenaires : Relations stratégiques importantes',
        'Structure de coûts : Coûts principaux du modèle'
      ],
      fullContent: `
        <h2>Introduction : Construire un business model solide et viable</h2>
        <p>Un business model est le mécanisme qui explique comment une entreprise crée de la valeur pour ses clients et génère des revenus en retour. Un business model bien conçu aligne toutes les composantes de votre entreprise - de la proposition de valeur à la structure de coûts - pour créer un système viable et scalable. Ce guide vous montre comment utiliser le Business Model Canvas et d'autres frameworks pour concevoir et tester votre modèle économique.</p>
        <img src="https://images.unsplash.com/photo-1552664730-d307ca8849d1?w=1200&auto=format&fit=crop" alt="Business model" class="w-full rounded-lg my-6" />
        
        <h2>1. Business Model Canvas : Framework complet</h2>
        
        <h3>9 composants du BMC</h3>
        
        <h4>1. Segments de clients</h4>
        <ul>
          <li>Groupes distincts de personnes/organisations que vous servez</li>
          <li>Segmentation : Démographique, géographique, comportementale, besoins</li>
          <li><strong>Questions :</strong> Pour qui créons-nous de la valeur ? Qui sont nos clients les plus importants ?</li>
          <li><strong>Exemple :</strong> Entrepreneurs tech, PME locales, étudiants</li>
        </ul>
        
        <h4>2. Proposition de valeur</h4>
        <ul>
          <li>Ensemble produits/services créant valeur pour segments clients</li>
          <li>Doit résoudre problème ou satisfaire besoin</li>
          <li><strong>Types :</strong> Nouveauté, performance, personnalisation, design, prix, réduction risques, accessibilité, commodité</li>
          <li><strong>Exemple :</strong> "Plateforme SaaS qui automatise tâches répétitives, économisant 10h/semaine"</li>
        </ul>
        
        <h4>3. Canaux</h4>
        <ul>
          <li>Comment vous communiquez avec et délivrez valeur à vos segments clients</li>
          <li><strong>Types :</strong> Vente directe, partenaires, web, magasins physiques</li>
          <li><strong>Phases :</strong> Awareness, évaluation, achat, livraison, après-vente</li>
          <li><strong>Exemple :</strong> Site web, réseaux sociaux, email marketing</li>
        </ul>
        
        <h4>4. Relations clients</h4>
        <ul>
          <li>Type de relation que vous établissez avec chaque segment</li>
          <li><strong>Types :</strong> Assistance personnelle, self-service, communautés, co-création</li>
          <li><strong>Objectifs :</strong> Acquérir, fidéliser, augmenter</li>
        </ul>
        
        <h4>5. Sources de revenus</h4>
        <ul>
          <li>Comment vous générez de l'argent de chaque segment client</li>
          <li><strong>Types :</strong>
            <ul>
              <li>Vente d'actifs (produit unique)</li>
              <li>Droits d'usage (abonnement)</li>
              <li>Commission (marketplace)</li>
              <li>Publicité (modèle freemium)</li>
              <li>Licensing (licences logiciels)</li>
            </ul>
          </li>
          <li><strong>Stratégies :</strong> Prix fixe, négociable, dépendant marché, volume</li>
        </ul>
        
        <h4>6. Ressources clés</h4>
        <ul>
          <li>Actifs nécessaires pour faire fonctionner votre modèle</li>
          <li><strong>Types :</strong>
            <ul>
              <li>Physiques (infrastructure, véhicules)</li>
              <li>Intellectuelles (brevets, connaissances, données)</li>
              <li>Humaines (équipe, experts)</li>
              <li>Financières (liquidité, crédit)</li>
            </ul>
          </li>
        </ul>
        
        <h4>7. Activités clés</h4>
        <ul>
          <li>Actions les plus importantes pour faire fonctionner modèle</li>
          <li><strong>Types :</strong>
            <ul>
              <li>Production (création produits/services)</li>
              <li>R&D (recherche développement)</li>
              <li>Réseautage (plateformes, communautés)</li>
            </ul>
          </li>
        </ul>
        
        <h4>8. Partenaires clés</h4>
        <ul>
          <li>Réseau de fournisseurs et partenaires</li>
          <li><strong>Types :</strong>
            <ul>
              <li>Stratégiques (alliances non-concurrentielles)</li>
              <li>Joint-ventures (partenariats développement)</li>
              <li>Fournisseurs clés (achats)</li>
            </ul>
          </li>
          <li><strong>Motivations :</strong> Optimisation économies, réduction risques, acquisition ressources</li>
        </ul>
        
        <h4>9. Structure de coûts</h4>
        <ul>
          <li>Coûts les plus importants pour faire fonctionner modèle</li>
          <li><strong>Types :</strong>
            <ul>
              <li>Coûts fixes (salaires, loyer)</li>
              <li>Coûts variables (matières premières, commissions)</li>
              <li>Économies d'échelle (réduction coûts avec volume)</li>
            </ul>
          </li>
          <li><strong>Stratégies :</strong> Coût-driven (minimiser), value-driven (maximiser valeur)</li>
        </ul>
        
        <h2>2. Types de business models populaires</h2>
        
        <h3>Abonnement (SaaS)</h3>
        <ul>
          <li>Revenus récurrents mensuels/annuels</li>
          <li>Avantages : Prédictibilité, LTV élevé</li>
          <li>Exemples : Netflix, Spotify, Salesforce</li>
        </ul>
        
        <h3>Marketplace</h3>
        <ul>
          <li>Commission sur transactions entre utilisateurs</li>
          <li>Avantages : Scalabilité, pas d'inventaire</li>
          <li>Exemples : Airbnb, Uber, Amazon Marketplace</li>
        </ul>
        
        <h3>Freemium</h3>
        <ul>
          <li>Gratuit avec options payantes</li>
          <li>Avantages : Acquisition utilisateurs, conversion vers payant</li>
          <li>Exemples : Dropbox, LinkedIn, Spotify</li>
        </ul>
        
        <h3>Produit physique</h3>
        <ul>
          <li>Vente d'objets tangibles</li>
          <li>Avantages : Contrôle qualité, marque</li>
          <li>Défis : Inventaire, logistique</li>
        </ul>
        
        <h3>Services</h3>
        <ul>
          <li>Prestation de services facturés à l'heure/projet</li>
          <li>Avantages : Flexibilité, marges élevées</li>
          <li>Défis : Scalabilité limitée</li>
        </ul>
        
        <h3>Affiliation</h3>
        <ul>
          <li>Commission sur ventes référées</li>
          <li>Avantages : Pas de produit à créer</li>
          <li>Exemples : Bloggers, influenceurs</li>
        </ul>
        
        <h2>3. Créer votre Business Model Canvas</h2>
        
        <h3>Processus étape par étape</h3>
        <ol>
          <li><strong>Segments clients :</strong> Liste vos segments prioritaires</li>
          <li><strong>Proposition de valeur :</strong> Match chaque segment avec sa valeur</li>
          <li><strong>Canaux :</strong> Comment atteindre chaque segment</li>
          <li><strong>Revenus :</strong> Comment chaque segment paie</li>
          <li><strong>Relations :</strong> Type relation pour chaque segment</li>
          <li><strong>Ressources :</strong> Actifs nécessaires</li>
          <li><strong>Activités :</strong> Actions principales</li>
          <li><strong>Partenaires :</strong> Partenaires clés</li>
          <li><strong>Coûts :</strong> Structure de coûts</li>
        </ol>
        
        <h2>4. Valider et itérer votre modèle</h2>
        
        <h3>Tests à effectuer</h3>
        <ul>
          <li>Valider chaque composant du canvas</li>
          <li>Tester hypothèses avec MVP</li>
          <li>Mesurer métriques clés (CAC, LTV, marge)</li>
          <li>Itérer basé sur apprentissages</li>
        </ul>
        
        <h3>Métriques clés</h3>
        <ul>
          <li><strong>CAC (Customer Acquisition Cost) :</strong> Coût acquérir 1 client</li>
          <li><strong>LTV (Lifetime Value) :</strong> Revenus totaux d'un client</li>
          <li><strong>LTV:CAC ratio :</strong> Doit être > 3:1 idéalement</li>
          <li><strong>Marge brute :</strong> Revenus - coûts directs</li>
          <li><strong>Point mort :</strong> Niveau ventes couvrant tous coûts</li>
        </ul>
        
        <h2>5. Scalabilité du modèle</h2>
        
        <h3>Modèles scalables</h3>
        <ul>
          <li>SaaS (coûts serveurs faibles vs revenus croissants)</li>
          <li>Marketplace (effets réseau)</li>
          <li>Contenu (marginal cost faible)</li>
        </ul>
        
        <h3>Modèles limités en scalabilité</h3>
        <ul>
          <li>Services consultatifs (temps limité)</li>
          <li>Produits sur mesure (pas de réplication facile)</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Un business model solide est la fondation de toute entreprise viable. En utilisant le Business Model Canvas pour cartographier tous les composants et en testant continuellement vos hypothèses, vous créez un modèle qui crée, délivre et capture de la valeur efficacement. Rappelez-vous : un bon business model évolue avec votre entreprise. Testez, mesurez, apprenez et itérez constamment pour optimiser votre modèle économique et maximiser votre potentiel de croissance.</p>
      `,
      prerequisites: [
        'Idée business ou produit/service existant',
        'Compréhension de votre marché cible',
        'Connaissance de base finances entreprise'
      ],
      tools: [
        'Business Model Canvas : Stratfy, Canvanizer',
        'Modélisation financière : Excel, Google Sheets',
        'Présentation : PowerPoint, Figma'
      ],
      nextSteps: [
        'Téléchargez template Business Model Canvas',
        'Complétez chaque section avec vos hypothèses',
        'Validez chaque composant avec tests/réalité',
        'Calculez vos métriques clés (CAC, LTV)',
        'Itérez et ajustez votre modèle basé sur données'
      ]
    },
    ar: {
      domainExplanation: 'نموذج الأعمال القوي يحدد كيف تخلق شركتك وتقدم وتلتقط القيمة.',
      howToStart: 'حدد شرائح عملائك. حدد قيمة مقترحتك. اختر قنواتك. حدد مصادر الإيرادات.',
      essentialElements: [
        'شرائح العملاء',
        'القيمة المقترحة',
        'القنوات',
        'العلاقات',
        'الإيرادات',
        'الموارد',
        'الأنشطة',
        'الشركاء',
        'التكاليف'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>نموذج الأعمال يحدد كيف تخلق الشركة القيمة وتولد الإيرادات.</p>
        <h2>١. Business Model Canvas</h2>
        <p>9 مكونات للنموذج.</p>
        <h2>الخلاصة</h2>
        <p>نموذج الأعمال القوي هو أساس أي شركة قابلة للحياة.</p>
      `,
      prerequisites: ['فكرة عمل', 'فهم السوق المستهدف'],
      tools: ['Stratfy', 'Excel', 'Figma'],
      nextSteps: ['أنشئ Business Model Canvas', 'تحقق من كل مكون']
    },
    en: {
      domainExplanation: 'A solid business model defines how your company creates, delivers, and captures value.',
      howToStart: 'Identify customer segments. Define value proposition. Choose channels. Determine revenue sources.',
      essentialElements: [
        'Customer segments',
        'Value proposition',
        'Channels',
        'Relationships',
        'Revenue',
        'Resources',
        'Activities',
        'Partners',
        'Costs'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>A business model defines how a company creates value and generates revenue.</p>
        <h2>1. Business Model Canvas</h2>
        <p>9 components of the model.</p>
        <h2>Conclusion</h2>
        <p>A solid business model is the foundation of any viable business.</p>
      `,
      prerequisites: ['Business idea', 'Target market understanding'],
      tools: ['Stratfy', 'Excel', 'Figma'],
      nextSteps: ['Create Business Model Canvas', 'Validate each component']
    }
  }
}

export default entrepreneurshipTranslations
