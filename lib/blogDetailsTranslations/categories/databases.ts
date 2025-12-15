// Databases category translations (Blogs 21-25)
import { BlogTranslations } from '../types'

const databasesTranslations: BlogTranslations = {
  // Blog 21: SQL vs NoSQL
  21: {
    fr: {
      domainExplanation: 'SQL et NoSQL sont deux approches différentes pour gérer les données. Bien choisir dépend des besoins du projet.',
      howToStart: 'Comprenez les différences fondamentales. Testez les deux approches avec des projets simples. Analysez vos besoins spécifiques.',
      essentialElements: [
        'Concepts SQL : Bases relationnelles, tables, relations',
        'Concepts NoSQL : Documents, clé-valeur, graph',
        'Avantages/inconvénients : Comparaison détaillée',
        'Cas d\'usage : Quand utiliser quoi',
        'Performance : Comparaison des performances',
        'Intégration : Comment intégrer dans un projet web'
      ],
      fullContent: `
        <h2>Introduction : SQL vs NoSQL - Choisir la bonne base de données</h2>
        <p>Le choix entre SQL (relationnel) et NoSQL (non-relationnel) est l'une des décisions les plus critiques lors de la conception d'une application. Chaque approche a ses forces, faiblesses et cas d'usage idéaux. Comprendre les différences fondamentales, les avantages et inconvénients de chaque modèle, et savoir quand utiliser lequel, est essentiel pour construire des systèmes performants, scalables et maintenables. Ce guide complet explore en profondeur ces deux mondes pour vous aider à faire le choix optimal pour votre projet en 2025.</p>
        <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&auto=format&fit=crop" alt="SQL vs NoSQL" class="w-full rounded-lg my-6" />
        
        <h2>1. Bases de données SQL (Relationnelles) : Fondations solides</h2>
        <p>Les bases de données relationnelles (SQL) existent depuis les années 1970 et restent le standard pour de nombreuses applications critiques.</p>
        
        <h3>Concepts fondamentaux</h3>
        <ul>
          <li><strong>Tables :</strong> Données organisées en tables avec colonnes (attributs) et lignes (enregistrements)</li>
          <li><strong>Schéma fixe :</strong> Structure définie à l'avance avec types de données stricts</li>
          <li><strong>Relations :</strong> Tables connectées via clés primaires et étrangères</li>
          <li><strong>ACID :</strong> Propriétés garantissant fiabilité (Atomicité, Cohérence, Isolation, Durabilité)</li>
          <li><strong>SQL :</strong> Langage standardisé pour interroger et manipuler les données</li>
        </ul>
        
        <h3>Bases de données SQL populaires</h3>
        <ul>
          <li><strong>PostgreSQL :</strong> Open-source, puissant, excellent pour applications complexes</li>
          <li><strong>MySQL :</strong> Très populaire, simple, bon pour web applications</li>
          <li><strong>SQL Server :</strong> Microsoft, enterprise, intégration Windows</li>
          <li><strong>SQLite :</strong> Légère, embarquée, parfaite pour apps mobiles</li>
          <li><strong>Oracle :</strong> Enterprise, très puissant, coûteux</li>
        </ul>
        
        <h3>Avantages SQL</h3>
        <ul>
          <li><strong>ACID garanti :</strong> Transactions fiables, pas de corruption de données</li>
          <li><strong>Requêtes complexes :</strong> JOINs, sous-requêtes, agrégations puissantes</li>
          <li><strong>Intégrité référentielle :</strong> Contraintes garantissent cohérence des données</li>
          <li><strong>Maturité :</strong> Technologie éprouvée depuis 50 ans</li>
          <li><strong>Standardisation :</strong> SQL est un standard, transferable entre bases</li>
          <li><strong>Relations complexes :</strong> Gestion efficace de relations many-to-many, hiérarchies</li>
          <li><strong>Transactions :</strong> Garanties de cohérence pour opérations multiples</li>
          <li><strong>Support large :</strong> Documentation abondante, grandes communautés</li>
        </ul>
        
        <h3>Inconvénients SQL</h3>
        <ul>
          <li><strong>Schéma rigide :</strong> Difficile de changer structure une fois définie</li>
          <li><strong>Scalabilité verticale :</strong> Scaling = hardware plus puissant (coûteux)</li>
          <li><strong>Performance sur grandes données :</strong> JOINs complexes peuvent être lents</li>
          <li><strong>Normalisation :</strong> Peut nécessiter plusieurs tables pour une entité</li>
          <li><strong>Migrations :</strong> Changer schéma nécessite migrations complexes</li>
        </ul>
        
        <h3>Exemple de structure SQL</h3>
        <pre><code>-- Tables relationnelles
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  total DECIMAL(10,2),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Requête avec JOIN
SELECT u.name, o.total
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.total > 100;</code></pre>
        
        <h2>2. Bases de données NoSQL : Flexibilité et performance</h2>
        <p>NoSQL (Not Only SQL) est apparu dans les années 2000 pour répondre aux limites des bases relationnelles, particulièrement pour le Big Data et applications web modernes.</p>
        
        <h3>Modèles de données NoSQL</h3>
        
        <h4>Document-based (MongoDB, CouchDB)</h4>
        <ul>
          <li>Stockage en documents (JSON/BSON)</li>
          <li>Schéma flexible, chaque document peut avoir structure différente</li>
          <li>Idéal pour : Contenu, catalogues produits, profils utilisateurs</li>
          <li>Exemple : <code>{"_id": 1, "name": "John", "address": {"city": "Paris"}}</code></li>
        </ul>
        
        <h4>Key-Value (Redis, DynamoDB, Memcached)</h4>
        <ul>
          <li>Stockage simple clé → valeur</li>
          <li>Ultra-rapide, très simple</li>
          <li>Idéal pour : Cache, sessions, configurations, compteurs</li>
          <li>Exemple : <code>{"user:123": "{name: 'John', email: 'john@example.com'}"}</code></li>
        </ul>
        
        <h4>Graph (Neo4j, Amazon Neptune)</h4>
        <ul>
          <li>Stockage de nœuds et relations</li>
          <li>Optimisé pour relations complexes</li>
          <li>Idéal pour : Réseaux sociaux, recommandations, fraud detection</li>
          <li>Exemple : (User)-[FOLLOWS]->(User), (User)-[LIKES]->(Post)</li>
        </ul>
        
        <h4>Column-family / Wide-column (Cassandra, HBase)</h4>
        <ul>
          <li>Stockage en colonnes au lieu de lignes</li>
          <li>Excellent pour écriture massive et lecture distribuée</li>
          <li>Idéal pour : Analytics, IoT, time-series data</li>
        </ul>
        
        <h3>Avantages NoSQL</h3>
        <ul>
          <li><strong>Flexibilité du schéma :</strong> Structure évolue facilement sans migrations</li>
          <li><strong>Scalabilité horizontale :</strong> Ajouter serveurs plutôt que hardware plus puissant</li>
          <li><strong>Performance élevée :</strong> Optimisé pour lectures/écritures rapides</li>
          <li><strong>Structure adaptée :</strong> Modèles adaptés à différents cas d'usage</li>
          <li><strong>Développement rapide :</strong> Moins de contraintes, développement plus rapide</li>
          <li><strong>Big Data :</strong> Gère facilement volumes massifs de données</li>
        </ul>
        
        <h3>Inconvénients NoSQL</h3>
        <ul>
          <li><strong>Pas d'ACID complet :</strong> Garanties de cohérence plus faibles (varie selon base)</li>
          <li><strong>Requêtes limitées :</strong> Pas de JOINs complexes, requêtes moins puissantes</li>
          <li><strong>Duplication :</strong> Données souvent dupliquées (pas de normalisation)</li>
          <li><strong>Courbe d'apprentissage :</strong> Concepts différents de SQL</li>
          <li><strong>Moins mature :</strong> Outils et communauté plus petits que SQL</li>
          <li><strong>Pas de standard :</strong> Chaque base a son propre langage/API</li>
        </ul>
        
        <h3>Exemple NoSQL (MongoDB)</h3>
        <pre><code>// Collection users (équivalent table)
{
  _id: ObjectId("..."),
  name: "John",
  email: "john@example.com",
  orders: [
    { id: 1, total: 150, date: "2025-01-20" },
    { id: 2, total: 75, date: "2025-01-25" }
  ]
}

// Requête simple
db.users.find({ "orders.total": { $gt: 100 } })</code></pre>
        
        <h2>3. Comparaison détaillée SQL vs NoSQL</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background-color: #1f2937; color: white;">
              <th style="padding: 12px; border: 1px solid #374151;">Critère</th>
              <th style="padding: 12px; border: 1px solid #374151;">SQL</th>
              <th style="padding: 12px; border: 1px solid #374151;">NoSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Structure</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Tables avec schéma fixe</td>
              <td style="padding: 12px; border: 1px solid #374151;">Documents/Key-value/Graph avec schéma flexible</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Scalabilité</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Verticale (hardware plus puissant)</td>
              <td style="padding: 12px; border: 1px solid #374151;">Horizontale (ajouter serveurs)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>ACID</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Complet (garanti)</td>
              <td style="padding: 12px; border: 1px solid #374151;">Partiel ou BASE (varie)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Requêtes complexes</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Excellent (JOINs, sous-requêtes)</td>
              <td style="padding: 12px; border: 1px solid #374151;">Limité (pas de JOINs)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Performance lectures</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Bonne à excellente</td>
              <td style="padding: 12px; border: 1px solid #374151;">Très bonne (optimisée pour)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Performance écritures</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Bonne (avec index)</td>
              <td style="padding: 12px; border: 1px solid #374151;">Excellente (optimisée pour)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Relations</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Excellentes (clés étrangères)</td>
              <td style="padding: 12px; border: 1px solid #374151;">Embedded ou références (selon modèle)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Schéma</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Rigide, défini à l'avance</td>
              <td style="padding: 12px; border: 1px solid #374151;">Flexible, peut évoluer</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Maturité</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Très mature (50+ ans)</td>
              <td style="padding: 12px; border: 1px solid #374151;">Moins mature (20 ans)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Coût</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Variable (open-source à très cher)</td>
              <td style="padding: 12px; border: 1px solid #374151;">Variable (souvent open-source)</td>
            </tr>
          </tbody>
        </table>
        
        <h2>4. Cas d'usage : Quand utiliser SQL vs NoSQL</h2>
        
        <h3>Utilisez SQL pour :</h3>
        <ul>
          <li><strong>Applications transactionnelles :</strong> Systèmes bancaires, e-commerce, réservations</li>
          <li><strong>Données structurées avec relations :</strong> CRM, ERP, systèmes de gestion</li>
          <li><strong>Applications nécessitant ACID :</strong> Où cohérence est critique</li>
          <li><strong>Requêtes complexes :</strong> Reporting, analytics avec agrégations multiples</li>
          <li><strong>Applications matures :</strong> Où structure est stable</li>
          <li><strong>Conformité :</strong> Quand réglementations exigent ACID (finance, santé)</li>
          <li><strong>Équipe familiarisée :</strong> Développeurs connaissant bien SQL</li>
        </ul>
        
        <h3>Utilisez NoSQL pour :</h3>
        <ul>
          <li><strong>Contenu et catalogues :</strong> CMS, e-commerce avec produits variés</li>
          <li><strong>Big Data :</strong> Analytics massives, IoT, logs</li>
          <li><strong>Réseaux sociaux :</strong> Relations complexes, recommandations</li>
          <li><strong>Cache et sessions :</strong> Redis pour performance</li>
          <li><strong>Prototypage rapide :</strong> Développement rapide sans contraintes</li>
          <li><strong>Scalabilité horizontale :</strong> Besoin de scale facilement</li>
          <li><strong>Données non structurées :</strong> Contenu varié, user-generated content</li>
          <li><strong>Time-series :</strong> Métriques, monitoring, analytics temporelles</li>
        </ul>
        
        <h2>5. Approche hybride : SQL + NoSQL</h2>
        <p>De nombreuses applications modernes utilisent les deux approches (polyglot persistence) :</p>
        <ul>
          <li><strong>SQL pour :</strong> Données transactionnelles, relations complexes</li>
          <li><strong>NoSQL pour :</strong> Cache, logs, contenu, analytics</li>
          <li><strong>Exemple :</strong> PostgreSQL pour données utilisateurs, Redis pour cache, MongoDB pour contenu</li>
        </ul>
        
        <h2>6. Performance et optimisation</h2>
        
        <h3>SQL</h3>
        <ul>
          <li>Index pour accélérer requêtes</li>
          <li>Optimisation requêtes (EXPLAIN)</li>
          <li>Connection pooling</li>
          <li>Caching au niveau application</li>
        </ul>
        
        <h3>NoSQL</h3>
        <ul>
          <li>Sharding pour distribution</li>
          <li>Réplication pour disponibilité</li>
          <li>Index (selon type NoSQL)</li>
          <li>Modélisation adaptée au modèle de données</li>
        </ul>
        
        <h2>7. Migration et changement</h2>
        <ul>
          <li><strong>SQL → NoSQL :</strong> Possible mais nécessite redesign modélisation</li>
          <li><strong>NoSQL → SQL :</strong> Possible, peut nécessiter normalisation</li>
          <li><strong>Recommandation :</strong> Choisir dès le départ selon besoins long terme</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>SQL et NoSQL ne sont pas des concurrents, mais des outils complémentaires. SQL excelle pour données structurées nécessitant cohérence et relations complexes. NoSQL brille pour flexibilité, scalabilité horizontale et cas d'usage spécifiques. Le meilleur choix dépend de vos besoins : structure des données, volume, fréquence d'accès, relations, besoins de cohérence, et équipe. En 2025, beaucoup d'applications utilisent les deux approches (hybride) pour tirer le meilleur des deux mondes. L'important est de comprendre les forces et limites de chaque approche pour faire un choix éclairé.</p>
      `,
      prerequisites: ['Connaissances de base en bases de données', 'Compréhension des modèles de données'],
      tools: ['MySQL ou PostgreSQL', 'MongoDB', 'Éditeur de code'],
      nextSteps: [
        'Testez les deux approches avec des projets simples',
        'Analysez vos besoins spécifiques',
        'Choisissez la solution adaptée',
        'Intégrez dans votre projet'
      ]
    },
    ar: {
      domainExplanation: 'SQL و NoSQL هما نهجان مختلفان لإدارة البيانات. الاختيار الجيد يعتمد على احتياجات المشروع.',
      howToStart: 'افهم الاختلافات الأساسية. اختبر كلا النهجين بمشاريع بسيطة. حلل احتياجاتك المحددة.',
      essentialElements: [
        'مفاهيم SQL: قواعد علائقية، جداول، علاقات',
        'مفاهيم NoSQL: وثائق، مفتاح-قيمة، رسم بياني',
        'المزايا/العيوب: مقارنة مفصلة',
        'حالات الاستخدام: متى تستخدم ماذا',
        'الأداء: مقارنة الأداء',
        'التكامل: كيفية التكامل في مشروع ويب'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>SQL و NoSQL هما نهجان مختلفان لإدارة البيانات. الاختيار الجيد يعتمد على احتياجات المشروع.</p>
        <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&auto=format&fit=crop" alt="SQL vs NoSQL" class="w-full rounded-lg my-6" />
        
        <h2>١. مفاهيم SQL</h2>
        <p>SQL يستخدم قواعد البيانات العلائقية.</p>
        
        <h2>٢. مفاهيم NoSQL</h2>
        <p>NoSQL يقدم نماذج بيانات متعددة.</p>
        
        <h2>٣. المزايا والعيوب</h2>
        <p>SQL: بنية صلبة، استعلامات معقدة ممتازة</p>
        <p>NoSQL: مرونة، قابلية توسع أفقية</p>
        
        <h2>٤. حالات الاستخدام</h2>
        <p>استخدم SQL للبيانات المنظمة. استخدم NoSQL للبيانات غير المنظمة.</p>
        
        <h2>الخلاصة</h2>
        <p>فهم SQL و NoSQL يسمح باختيار الحل الأنسب لاحتياجات التخزين والوصول إلى البيانات.</p>
      `,
      prerequisites: ['معرفة أساسية بقواعد البيانات', 'فهم نماذج البيانات'],
      tools: ['MySQL أو PostgreSQL', 'MongoDB', 'محرر الكود'],
      nextSteps: [
        'اختبر كلا النهجين',
        'حلل احتياجاتك',
        'اختر الحل المناسب'
      ]
    },
    en: {
      domainExplanation: 'SQL and NoSQL are two different approaches to managing data. Choosing well depends on project needs.',
      howToStart: 'Understand fundamental differences. Test both approaches with simple projects. Analyze your specific needs.',
      essentialElements: [
        'SQL concepts: Relational databases, tables, relations',
        'NoSQL concepts: Documents, key-value, graph',
        'Advantages/disadvantages: Detailed comparison',
        'Use cases: When to use what',
        'Performance: Performance comparison',
        'Integration: How to integrate in a web project'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>SQL and NoSQL are two different approaches to managing data. Choosing well depends on project needs.</p>
        <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&auto=format&fit=crop" alt="SQL vs NoSQL" class="w-full rounded-lg my-6" />
        
        <h2>1. SQL Concepts (Relational)</h2>
        <p>SQL uses relational databases.</p>
        <ul>
          <li>Tables with columns and rows</li>
          <li>Relations between tables (foreign keys)</li>
          <li>ACID (Atomicity, Consistency, Isolation, Durability)</li>
          <li>Complex queries with JOIN</li>
        </ul>
        
        <h2>2. NoSQL Concepts</h2>
        <p>NoSQL offers multiple data models.</p>
        <ul>
          <li><strong>Document:</strong> MongoDB, CouchDB</li>
          <li><strong>Key-value:</strong> Redis, DynamoDB</li>
          <li><strong>Graph:</strong> Neo4j</li>
          <li><strong>Column:</strong> Cassandra</li>
        </ul>
        
        <h2>3. Advantages and Disadvantages</h2>
        <p><strong>SQL:</strong> Rigid structure, excellent complex queries, vertical scalability</p>
        <p><strong>NoSQL:</strong> Flexible, horizontal scalability, limited complex queries</p>
        
        <h2>4. Use Cases</h2>
        <p><strong>Use SQL for:</strong> Structured data with complex relations, financial transactions</p>
        <p><strong>Use NoSQL for:</strong> Unstructured data, horizontal scalability, high-performance apps</p>
        
        <h2>5. Integration in Web Project</h2>
        <p>Integrate your database into your application.</p>
        <ul>
          <li>Drivers and ORMs</li>
          <li>Connection pooling</li>
          <li>Migrations</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Understanding SQL and NoSQL allows selecting the most suitable solution for data storage and access needs.</p>
      `,
      prerequisites: ['Basic database knowledge', 'Understanding of data models'],
      tools: ['MySQL or PostgreSQL', 'MongoDB', 'Code editor'],
      nextSteps: [
        'Test both approaches with simple projects',
        'Analyze your specific needs',
        'Choose the suitable solution',
        'Integrate into your project'
      ]
    }
  },
  // Blog 22: Architecture base de données
  22: {
    fr: {
      domainExplanation: 'L\'architecture des bases de données détermine la manière dont les données sont stockées, consultées et maintenues. Chaque type d\'architecture a ses avantages.',
      howToStart: 'Comprenez les différents types d\'architectures. Analysez vos besoins de données. Choisissez l\'architecture adaptée. Testez avec des données réelles.',
      essentialElements: [
        'Bases relationnelles : Tables, relations, ACID',
        'Document-based : MongoDB, documents JSON',
        'Key-value : Redis, stockage simple',
        'Graph : Neo4j, relations complexes',
        'Time-series : Données temporelles',
        'Choix selon usage : Critères de sélection'
      ],
      fullContent: `
        <h2>Introduction : Architectures de bases de données - Choisir le bon modèle</h2>
        <p>L'architecture d'une base de données détermine fondamentalement comment vos données sont stockées, organisées, consultées et maintenues. Chaque type d'architecture - relationnelle, document-based, key-value, graph, ou time-series - est optimisé pour des cas d'usage spécifiques. Comprendre ces architectures et leurs forces permet de choisir le modèle qui maximise les performances, facilite le développement et répond exactement aux besoins de votre application. Ce guide explore en profondeur chaque architecture pour vous aider à faire le choix optimal.</p>
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop" alt="Architecture base de données" class="w-full rounded-lg my-6" />
        
        <h2>1. Architecture relationnelle : Tables et relations</h2>
        <p>L'architecture relationnelle, la plus ancienne et la plus répandue, organise les données en tables avec des relations définies.</p>
        
        <h3>Structure et concepts</h3>
        <ul>
          <li><strong>Tables :</strong> Collections de lignes (enregistrements) et colonnes (attributs)</li>
          <li><strong>Clés primaires :</strong> Identifiants uniques pour chaque ligne</li>
          <li><strong>Clés étrangères :</strong> Références vers autres tables créant relations</li>
          <li><strong>Normalisation :</strong> Processus d'organisation pour éviter redondance</li>
          <li><strong>ACID :</strong> Garanties de transactions fiables</li>
        </ul>
        
        <h3>Exemples de bases relationnelles</h3>
        <ul>
          <li><strong>PostgreSQL :</strong> Open-source, très puissant, support JSON/Arrays</li>
          <li><strong>MySQL :</strong> Très populaire, simple, bon pour web apps</li>
          <li><strong>SQL Server :</strong> Microsoft, enterprise-grade</li>
          <li><strong>Oracle :</strong> Enterprise, très robuste, coûteux</li>
          <li><strong>SQLite :</strong> Légère, embarquée, parfaite mobile/desktop</li>
        </ul>
        
        <h3>Avantages</h3>
        <ul>
          <li>Intégrité référentielle garantie</li>
          <li>Requêtes complexes avec JOINs puissants</li>
          <li>Standard SQL universellement supporté</li>
          <li>Maturité et stabilité éprouvées</li>
          <li>ACID complet pour transactions fiables</li>
        </ul>
        
        <h3>Cas d'usage</h3>
        <ul>
          <li>Applications transactionnelles (e-commerce, banque)</li>
          <li>Données structurées avec relations complexes</li>
          <li>Systèmes nécessitant cohérence stricte</li>
          <li>Reporting et analytics avec agrégations</li>
        </ul>
        
        <h2>2. Architecture Document-based : Flexibilité JSON</h2>
        <p>L'architecture document stocke les données en documents (généralement JSON/BSON), idéale pour données semi-structurées.</p>
        
        <h3>Structure et concepts</h3>
        <ul>
          <li><strong>Collections :</strong> Groupes de documents (équivalent tables)</li>
          <li><strong>Documents :</strong> Structures JSON/BSON avec champs flexibles</li>
          <li><strong>Schéma flexible :</strong> Chaque document peut avoir structure différente</li>
          <li><strong>Embedded vs Referenced :</strong> Données embarquées ou référencées</li>
        </ul>
        
        <h3>Exemples</h3>
        <ul>
          <li><strong>MongoDB :</strong> Le plus populaire, très flexible, excellente performance</li>
          <li><strong>CouchDB :</strong> Multi-master replication, offline-first</li>
          <li><strong>Amazon DocumentDB :</strong> MongoDB-compatible, managé AWS</li>
          <li><strong>Firebase Firestore :</strong> Real-time, managé Google</li>
        </ul>
        
        <h3>Exemple de document</h3>
        <pre><code>{
  "_id": ObjectId("..."),
  "name": "John Doe",
  "email": "john@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Paris",
    "zip": "75001"
  },
  "orders": [
    {
      "id": 1,
      "total": 150.00,
      "items": ["item1", "item2"]
    }
  ]
}</code></pre>
        
        <h3>Cas d'usage</h3>
        <ul>
          <li>Catalogues produits avec attributs variés</li>
          <li>Profils utilisateurs avec champs dynamiques</li>
          <li>Contenu CMS (articles, blogs)</li>
          <li>Logs et événements avec structures variables</li>
          <li>Prototypage rapide sans contraintes schéma</li>
        </ul>
        
        <h2>3. Architecture Key-Value : Simplicité et performance</h2>
        <p>L'architecture key-value est la plus simple : stockage direct clé → valeur, ultra-rapide.</p>
        
        <h3>Structure</h3>
        <ul>
          <li><strong>Clé :</strong> Identifiant unique (string généralement)</li>
          <li><strong>Valeur :</strong> Données associées (string, JSON, binaire)</li>
          <li><strong>Pas de structure :</strong> Pas de schéma, pas de relations</li>
        </ul>
        
        <h3>Exemples</h3>
        <ul>
          <li><strong>Redis :</strong> In-memory, très rapide, structures de données avancées</li>
          <li><strong>Amazon DynamoDB :</strong> Managed, scalable, serverless-friendly</li>
          <li><strong>Memcached :</strong> Simple cache distribué</li>
          <li><strong>Riak :</strong> Distribué, haute disponibilité</li>
        </ul>
        
        <h3>Cas d'usage</h3>
        <ul>
          <li><strong>Cache :</strong> Mise en cache résultats de requêtes</li>
          <li><strong>Sessions :</strong> Stockage sessions utilisateurs</li>
          <li><strong>Compteurs :</strong> Vues, likes, métriques</li>
          <li><strong>Queue :</strong> Files d'attente de messages</li>
          <li><strong>Configuration :</strong> Paramètres applicatifs</li>
        </ul>
        
        <h2>4. Architecture Graph : Relations complexes</h2>
        <p>L'architecture graph est optimisée pour modéliser et interroger des relations complexes entre entités.</p>
        
        <h3>Structure</h3>
        <ul>
          <li><strong>Nœuds (Nodes) :</strong> Entités (utilisateurs, produits, articles)</li>
          <li><strong>Relations (Edges) :</strong> Connections entre nœuds</li>
          <li><strong>Propriétés :</strong> Attributs sur nœuds et relations</li>
          <li><strong>Traversée :</strong> Navigation efficace à travers relations</li>
        </ul>
        
        <h3>Exemples</h3>
        <ul>
          <li><strong>Neo4j :</strong> Leader, très mature, excellente documentation</li>
          <li><strong>Amazon Neptune :</strong> Managed, compatible Gremlin et SPARQL</li>
          <li><strong>ArangoDB :</strong> Multi-model (document + graph)</li>
          <li><strong>Dgraph :</strong> Distributed, GraphQL-native</li>
        </ul>
        
        <h3>Exemple de requête (Cypher - Neo4j)</h3>
        <pre><code>// Trouver amis d'amis d'un utilisateur
MATCH (user:User {name: "John"})-[:FRIENDS]->(friend)-[:FRIENDS]->(friendOfFriend)
RETURN friendOfFriend.name</code></pre>
        
        <h3>Cas d'usage</h3>
        <ul>
          <li>Réseaux sociaux (amitiés, follows)</li>
          <li>Systèmes de recommandation</li>
          <li>Fraud detection (recherche patterns suspects)</li>
          <li>Knowledge graphs (relations entre concepts)</li>
          <li>Analyse de réseaux (social network analysis)</li>
        </ul>
        
        <h2>5. Architecture Time-Series : Données temporelles</h2>
        <p>Optimisée pour données indexées par temps (métriques, événements, mesures).</p>
        
        <h3>Structure</h3>
        <ul>
          <li><strong>Timestamp :</strong> Index principal temporel</li>
          <li><strong>Tags :</strong> Métadonnées pour filtrage (device_id, location)</li>
          <li><strong>Fields :</strong> Valeurs numériques mesurées</li>
          <li><strong>Compression :</strong> Optimisée pour stockage efficace</li>
        </ul>
        
        <h3>Exemples</h3>
        <ul>
          <li><strong>InfluxDB :</strong> Open-source, très performant, SQL-like queries</li>
          <li><strong>TimescaleDB :</strong> Extension PostgreSQL, SQL natif</li>
          <li><strong>Prometheus :</strong> Monitoring, métriques systèmes</li>
          <li><strong>Amazon Timestream :</strong> Managed AWS, serverless</li>
        </ul>
        
        <h3>Cas d'usage</h3>
        <ul>
          <li>IoT (capteurs, appareils connectés)</li>
          <li>Monitoring (métriques systèmes, applications)</li>
          <li>Finance (prix actions, transactions)</li>
          <li>Analytics temporelles (trafic web, événements)</li>
        </ul>
        
        <h2>6. Architecture Column-family (Wide-column) : Big Data</h2>
        <p>Organise les données en colonnes plutôt qu'en lignes, optimisée pour écriture massive.</p>
        
        <h3>Exemples</h3>
        <ul>
          <li><strong>Apache Cassandra :</strong> Distribuée, haute disponibilité, écritures rapides</li>
          <li><strong>HBase :</strong> Sur Hadoop, Big Data analytics</li>
          <li><strong>ScyllaDB :</strong> Cassandra-compatible, plus rapide</li>
        </ul>
        
        <h3>Cas d'usage</h3>
        <ul>
          <li>Big Data (millions/billions de lignes)</li>
          <li>Écriture massive (logging, événements)</li>
          <li>Analytics distribuées</li>
        </ul>
        
        <h2>7. Comparaison des architectures</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background-color: #1f2937; color: white;">
              <th style="padding: 12px; border: 1px solid #374151;">Architecture</th>
              <th style="padding: 12px; border: 1px solid #374151;">Force principale</th>
              <th style="padding: 12px; border: 1px solid #374151;">Cas d'usage typique</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Relationnel</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Cohérence, relations complexes</td>
              <td style="padding: 12px; border: 1px solid #374151;">E-commerce, systèmes transactionnels</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Document</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Flexibilité, développement rapide</td>
              <td style="padding: 12px; border: 1px solid #374151;">CMS, catalogues, contenu</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Key-Value</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Performance, simplicité</td>
              <td style="padding: 12px; border: 1px solid #374151;">Cache, sessions, queues</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Graph</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Relations complexes, traversée</td>
              <td style="padding: 12px; border: 1px solid #374151;">Réseaux sociaux, recommandations</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Time-Series</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Données temporelles, compression</td>
              <td style="padding: 12px; border: 1px solid #374151;">IoT, monitoring, métriques</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Column-family</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Écriture massive, Big Data</td>
              <td style="padding: 12px; border: 1px solid #374151;">Logging massif, analytics</td>
            </tr>
          </tbody>
        </table>
        
        <h2>8. Approche multi-modèle (Polyglot Persistence)</h2>
        <p>Utiliser plusieurs architectures selon les besoins spécifiques de chaque partie de l'application.</p>
        <ul>
          <li><strong>PostgreSQL :</strong> Données transactionnelles utilisateurs</li>
          <li><strong>Redis :</strong> Cache et sessions</li>
          <li><strong>MongoDB :</strong> Contenu et catalogues</li>
          <li><strong>Neo4j :</strong> Relations sociales et recommandations</li>
          <li><strong>InfluxDB :</strong> Métriques et monitoring</li>
        </ul>
        
        <h2>9. Facteurs de choix</h2>
        <ul>
          <li><strong>Structure des données :</strong> Structurées → SQL, flexibles → NoSQL</li>
          <li><strong>Relations :</strong> Complexes → Graph ou SQL, simples → Document</li>
          <li><strong>Volume :</strong> Très grand → Time-series ou Column-family</li>
          <li><strong>Performance :</strong> Cache → Key-value, lectures rapides → Document</li>
          <li><strong>Cohérence :</strong> Critique → SQL, flexible → NoSQL</li>
          <li><strong>Équipe :</strong> Expérience existante influence choix</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Chaque architecture de base de données est un outil spécialisé conçu pour des besoins spécifiques. L'architecture relationnelle reste le choix sûr pour données structurées et transactions. Les architectures NoSQL (document, key-value, graph, time-series) excellent dans leurs domaines respectifs. En 2025, les applications modernes utilisent souvent plusieurs architectures (polyglot persistence) pour tirer le meilleur de chaque modèle. Le choix optimal dépend de vos besoins spécifiques : structure des données, volume, relations, performance, et contraintes de cohérence. Comprendre ces architectures vous permet de construire des systèmes optimisés et performants.</p>
      `,
      prerequisites: ['Connaissances de base en bases de données'],
      tools: ['Bases de données variées', 'Éditeur de code'],
      nextSteps: [
        'Analysez vos besoins de données',
        'Testez différentes architectures',
        'Choisissez l\'architecture adaptée'
      ]
    },
    ar: {
      domainExplanation: 'تحدد بنية قواعد البيانات كيفية تخزين واستعلام وصيانة البيانات. كل نوع له مزايا.',
      howToStart: 'افهم أنواع البنى المختلفة. حلل احتياجات بياناتك. اختر البنية المناسبة.',
      essentialElements: [
        'قواعد علائقية: جداول، علاقات، ACID',
        'قائمة على الوثائق: MongoDB، وثائق JSON',
        'مفتاح-قيمة: Redis، تخزين بسيط',
        'رسم بياني: Neo4j، علاقات معقدة',
        'السلاسل الزمنية: بيانات زمنية',
        'الاختيار حسب الاستخدام: معايير الاختيار'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>تحدد بنية قواعد البيانات كيفية تخزين واستعلام البيانات. اختيار البنية الصحيحة يحسن الأداء.</p>
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop" alt="بنية قاعدة البيانات" class="w-full rounded-lg my-6" />
        
        <h2>١. قواعد البيانات العلائقية</h2>
        <p>بنية في جداول مع علاقات.</p>
        
        <h2>٢. قواعد البيانات المستندة على الوثائق</h2>
        <p>تخزين في وثائق (JSON).</p>
        
        <h2>٣. قواعد مفتاح-قيمة</h2>
        <p>تخزين بسيط مفتاح-قيمة.</p>
        
        <h2>٤. قواعد الرسم البياني</h2>
        <p>محسّنة للعلاقات المعقدة.</p>
        
        <h2>٥. قواعد السلاسل الزمنية</h2>
        <p>محسّنة للبيانات الزمنية.</p>
        
        <h2>الخلاصة</h2>
        <p>اختيار البنية الصحيحة يحسن الأداء ويسهل التطوير والصيانة.</p>
      `,
      prerequisites: ['معرفة أساسية بقواعد البيانات'],
      tools: ['قواعد بيانات متنوعة', 'محرر الكود'],
      nextSteps: [
        'حلل احتياجات بياناتك',
        'اختبر بنى مختلفة',
        'اختر البنية المناسبة'
      ]
    },
    en: {
      domainExplanation: 'Database architecture determines how data is stored, queried, and maintained. Each architecture type has its advantages.',
      howToStart: 'Understand different architecture types. Analyze your data needs. Choose the suitable architecture. Test with real data.',
      essentialElements: [
        'Relational databases: Tables, relations, ACID',
        'Document-based: MongoDB, JSON documents',
        'Key-value: Redis, simple storage',
        'Graph: Neo4j, complex relations',
        'Time-series: Temporal data',
        'Choice by usage: Selection criteria'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Database architecture determines how data is stored, queried, and maintained. Choosing the right architecture optimizes performance.</p>
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop" alt="Database architecture" class="w-full rounded-lg my-6" />
        
        <h2>1. Relational Databases</h2>
        <p>Table structure with relations.</p>
        <ul>
          <li>MySQL, PostgreSQL</li>
          <li>ACID compliance</li>
          <li>Complex SQL queries</li>
        </ul>
        
        <h2>2. Document-based Databases</h2>
        <p>Document storage (JSON).</p>
        <ul>
          <li>MongoDB, CouchDB</li>
          <li>Schema flexibility</li>
          <li>Horizontal scalability</li>
        </ul>
        
        <h2>3. Key-value Databases</h2>
        <p>Simple key-value storage.</p>
        <ul>
          <li>Redis, DynamoDB</li>
          <li>High performance</li>
          <li>Cache and sessions</li>
        </ul>
        
        <h2>4. Graph Databases</h2>
        <p>Optimized for complex relations.</p>
        <ul>
          <li>Neo4j</li>
          <li>Social networks</li>
          <li>Recommendations</li>
        </ul>
        
        <h2>5. Time-series Databases</h2>
        <p>Optimized for temporal data.</p>
        <ul>
          <li>InfluxDB, TimescaleDB</li>
          <li>IoT, metrics</li>
          <li>Temporal analytics</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Choosing the right architecture optimizes performance and facilitates development and maintenance.</p>
      `,
      prerequisites: ['Basic database knowledge'],
      tools: ['Various databases', 'Code editor'],
      nextSteps: [
        'Analyze your data needs',
        'Test different architectures',
        'Choose the suitable architecture'
      ]
    }
  },
  // Blog 23: Normalisation des données
  23: {
    fr: {
      domainExplanation: 'La normalisation des bases de données élimine la redondance et améliore l\'intégrité des données. Comprendre les formes normales (1NF, 2NF, 3NF) est essentiel.',
      howToStart: 'Comprenez les problèmes de redondance. Étudiez les formes normales. Pratiquez avec des exemples. Normalisez vos propres schémas.',
      essentialElements: [
        '1NF (Première forme normale) : Éliminer les groupes répétitifs',
        '2NF (Deuxième forme normale) : Dépendances fonctionnelles partielles',
        '3NF (Troisième forme normale) : Dépendances transitives',
        'Avantages : Réduction redondance, intégrité',
        'Inconvénients : Plus de tables, requêtes complexes',
        'Dénormalisation : Quand et pourquoi'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>La normalisation des bases de données élimine la redondance et améliore l'intégrité des données. Comprendre les formes normales est essentiel.</p>
        <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&auto=format&fit=crop" alt="Normalisation" class="w-full rounded-lg my-6" />
        
        <h2>1. 1NF (Première forme normale)</h2>
        <p>Éliminer les groupes répétitifs et les valeurs multiples.</p>
        <ul>
          <li>Chaque colonne contient une seule valeur</li>
          <li>Pas de groupes répétitifs</li>
          <li>Identifiant unique pour chaque ligne</li>
        </ul>
        
        <h2>2. 2NF (Deuxième forme normale)</h2>
        <p>Éliminer les dépendances fonctionnelles partielles.</p>
        <ul>
          <li>Doit être en 1NF</li>
          <li>Tous les attributs non-clés dépendent de la clé complète</li>
        </ul>
        
        <h2>3. 3NF (Troisième forme normale)</h2>
        <p>Éliminer les dépendances transitives.</p>
        <ul>
          <li>Doit être en 2NF</li>
          <li>Aucun attribut non-clé ne dépend d'un autre attribut non-clé</li>
        </ul>
        
        <h2>4. Avantages de la normalisation</h2>
        <ul>
          <li>Réduction de la redondance</li>
          <li>Amélioration de l'intégrité des données</li>
          <li>Facilite la maintenance</li>
        </ul>
        
        <h2>5. Dénormalisation</h2>
        <p>Parfois, la dénormalisation améliore les performances.</p>
        <ul>
          <li>Quand les performances sont critiques</li>
          <li>Pour simplifier les requêtes complexes</li>
          <li>À utiliser avec précaution</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>La normalisation améliore la qualité des données mais peut complexifier les requêtes. Trouvez le bon équilibre selon vos besoins.</p>
      `,
      prerequisites: ['Connaissances de base en bases de données relationnelles', 'Compréhension des clés primaires et étrangères'],
      tools: ['MySQL ou PostgreSQL', 'Éditeur de code', 'Outils de modélisation'],
      nextSteps: [
        'Étudiez les formes normales en détail',
        'Pratiquez avec des exemples',
        'Normalisez vos propres schémas',
        'Testez les performances'
      ]
    },
    ar: {
      domainExplanation: 'تطبيع قواعد البيانات يزيل التكرار ويحسن سلامة البيانات. فهم الأشكال العادية (1NF، 2NF، 3NF) أمر ضروري.',
      howToStart: 'افهم مشاكل التكرار. ادرس الأشكال العادية. تدرب بأمثلة. طبيع مخططاتك الخاصة.',
      essentialElements: [
        '1NF: إزالة المجموعات المتكررة',
        '2NF: التبعيات الوظيفية الجزئية',
        '3NF: التبعيات العابرة',
        'المزايا: تقليل التكرار، السلامة',
        'العيوب: المزيد من الجداول، استعلامات معقدة',
        'إلغاء التطبيع: متى ولماذا'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>تطبيع قواعد البيانات يزيل التكرار ويحسن سلامة البيانات. فهم الأشكال العادية أمر ضروري.</p>
        <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&auto=format&fit=crop" alt="التطبيع" class="w-full rounded-lg my-6" />
        
        <h2>١. 1NF</h2>
        <p>إزالة المجموعات المتكررة والقيم المتعددة.</p>
        
        <h2>٢. 2NF</h2>
        <p>إزالة التبعيات الوظيفية الجزئية.</p>
        
        <h2>٣. 3NF</h2>
        <p>إزالة التبعيات العابرة.</p>
        
        <h2>٤. مزايا التطبيع</h2>
        <p>تقليل التكرار، تحسين السلامة.</p>
        
        <h2>٥. إلغاء التطبيع</h2>
        <p>أحيانًا يحسن الأداء.</p>
        
        <h2>الخلاصة</h2>
        <p>التطبيع يحسن جودة البيانات ولكن قد يعقد الاستعلامات. ابحث عن التوازن الصحيح.</p>
      `,
      prerequisites: ['معرفة أساسية بقواعد البيانات العلائقية', 'فهم المفاتيح الأساسية والأجنبية'],
      tools: ['MySQL أو PostgreSQL', 'محرر الكود', 'أدوات النمذجة'],
      nextSteps: [
        'ادرس الأشكال العادية بالتفصيل',
        'تدرب بأمثلة',
        'طبيع مخططاتك الخاصة'
      ]
    },
    en: {
      domainExplanation: 'Database normalization eliminates redundancy and improves data integrity. Understanding normal forms (1NF, 2NF, 3NF) is essential.',
      howToStart: 'Understand redundancy problems. Study normal forms. Practice with examples. Normalize your own schemas.',
      essentialElements: [
        '1NF (First Normal Form): Eliminate repetitive groups',
        '2NF (Second Normal Form): Partial functional dependencies',
        '3NF (Third Normal Form): Transitive dependencies',
        'Advantages: Redundancy reduction, integrity',
        'Disadvantages: More tables, complex queries',
        'Denormalization: When and why'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Database normalization eliminates redundancy and improves data integrity. Understanding normal forms is essential.</p>
        <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&auto=format&fit=crop" alt="Normalization" class="w-full rounded-lg my-6" />
        
        <h2>1. 1NF (First Normal Form)</h2>
        <p>Eliminate repetitive groups and multiple values.</p>
        <ul>
          <li>Each column contains a single value</li>
          <li>No repetitive groups</li>
          <li>Unique identifier for each row</li>
        </ul>
        
        <h2>2. 2NF (Second Normal Form)</h2>
        <p>Eliminate partial functional dependencies.</p>
        <ul>
          <li>Must be in 1NF</li>
          <li>All non-key attributes depend on complete key</li>
        </ul>
        
        <h2>3. 3NF (Third Normal Form)</h2>
        <p>Eliminate transitive dependencies.</p>
        <ul>
          <li>Must be in 2NF</li>
          <li>No non-key attribute depends on another non-key attribute</li>
        </ul>
        
        <h2>4. Normalization Advantages</h2>
        <ul>
          <li>Redundancy reduction</li>
          <li>Improved data integrity</li>
          <li>Easier maintenance</li>
        </ul>
        
        <h2>5. Denormalization</h2>
        <p>Sometimes denormalization improves performance.</p>
        <ul>
          <li>When performance is critical</li>
          <li>To simplify complex queries</li>
          <li>Use with caution</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Normalization improves data quality but may complicate queries. Find the right balance according to your needs.</p>
      `,
      prerequisites: ['Basic relational database knowledge', 'Understanding of primary and foreign keys'],
      tools: ['MySQL or PostgreSQL', 'Code editor', 'Modeling tools'],
      nextSteps: [
        'Study normal forms in detail',
        'Practice with examples',
        'Normalize your own schemas',
        'Test performance'
      ]
    }
  },
  // Blog 24: Data Warehousing & Data Lakes
  24: {
    fr: {
      domainExplanation: 'Data Warehouses et Data Lakes sont des architectures modernes pour stocker et analyser de grandes quantités de données. Comprendre leurs différences est crucial pour le Big Data.',
      howToStart: 'Comprenez les concepts de Data Warehouse et Data Lake. Étudiez les architectures modernes (Lakehouse). Explorez les solutions cloud (AWS, GCP, Azure).',
      essentialElements: [
        'Data Warehouse : Données structurées, optimisées pour l\'analyse',
        'Data Lake : Stockage brut, tous types de données',
        'Lakehouse : Combinaison des deux approches',
        'Architectures cloud : AWS Redshift, Google BigQuery, Azure Synapse',
        'ETL vs ELT : Transformation des données',
        'Cas d\'usage : Quand utiliser quoi'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Data Warehouses et Data Lakes sont des architectures modernes pour stocker et analyser de grandes quantités de données. Comprendre leurs différences est crucial pour le Big Data.</p>
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop" alt="Data Warehouse" class="w-full rounded-lg my-6" />
        
        <h2>1. Data Warehouse</h2>
        <p>Stockage structuré optimisé pour l'analyse.</p>
        <ul>
          <li>Données structurées et nettoyées</li>
          <li>Schéma défini (schema-on-write)</li>
          <li>Optimisé pour les requêtes SQL</li>
          <li>Exemples : Amazon Redshift, Google BigQuery</li>
        </ul>
        
        <h2>2. Data Lake</h2>
        <p>Stockage brut de tous types de données.</p>
        <ul>
          <li>Données brutes et non structurées</li>
          <li>Schéma flexible (schema-on-read)</li>
          <li>Stockage économique</li>
          <li>Exemples : AWS S3, Azure Data Lake</li>
        </ul>
        
        <h2>3. Lakehouse</h2>
        <p>Architecture moderne combinant les deux approches.</p>
        <ul>
          <li>Flexibilité du Data Lake</li>
          <li>Performance du Data Warehouse</li>
          <li>Exemples : Databricks, Delta Lake</li>
        </ul>
        
        <h2>4. Architectures cloud</h2>
        <p>Solutions cloud pour le Big Data.</p>
        <ul>
          <li>AWS : Redshift, S3, Athena</li>
          <li>Google Cloud : BigQuery, Cloud Storage</li>
          <li>Azure : Synapse Analytics, Data Lake</li>
        </ul>
        
        <h2>5. ETL vs ELT</h2>
        <p>Deux approches pour transformer les données.</p>
        <ul>
          <li><strong>ETL :</strong> Extract, Transform, Load</li>
          <li><strong>ELT :</strong> Extract, Load, Transform</li>
          <li>Choisissez selon vos besoins</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Choisir la bonne architecture dépend de vos besoins : Data Warehouse pour l'analyse structurée, Data Lake pour la flexibilité, Lakehouse pour le meilleur des deux mondes.</p>
      `,
      prerequisites: ['Connaissances de base en bases de données', 'Compréhension du Big Data'],
      tools: ['AWS, GCP ou Azure', 'Outils ETL/ELT', 'Éditeur de code'],
      nextSteps: [
        'Explorez les solutions cloud',
        'Testez avec des données réelles',
        'Choisissez l\'architecture adaptée',
        'Mettez en place votre pipeline'
      ]
    },
    ar: {
      domainExplanation: 'مستودعات البيانات وبحيرات البيانات هي بنى حديثة لتخزين وتحليل كميات كبيرة من البيانات. فهم اختلافاتها أمر حاسم للبيانات الضخمة.',
      howToStart: 'افهم مفاهيم Data Warehouse و Data Lake. ادرس البنى الحديثة (Lakehouse). استكشف الحلول السحابية.',
      essentialElements: [
        'Data Warehouse: بيانات منظمة، محسّنة للتحليل',
        'Data Lake: تخزين خام، جميع أنواع البيانات',
        'Lakehouse: مزيج من النهجين',
        'البنى السحابية: AWS Redshift، Google BigQuery، Azure Synapse',
        'ETL vs ELT: تحويل البيانات',
        'حالات الاستخدام: متى تستخدم ماذا'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>مستودعات البيانات وبحيرات البيانات هي بنى حديثة لتخزين وتحليل كميات كبيرة من البيانات.</p>
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop" alt="مستودع البيانات" class="w-full rounded-lg my-6" />
        
        <h2>١. Data Warehouse</h2>
        <p>تخزين منظم محسّن للتحليل.</p>
        
        <h2>٢. Data Lake</h2>
        <p>تخزين خام لجميع أنواع البيانات.</p>
        
        <h2>٣. Lakehouse</h2>
        <p>بنية حديثة تجمع النهجين.</p>
        
        <h2>٤. البنى السحابية</h2>
        <p>حلول سحابية للبيانات الضخمة.</p>
        
        <h2>٥. ETL vs ELT</h2>
        <p>نهجان لتحويل البيانات.</p>
        
        <h2>الخلاصة</h2>
        <p>اختيار البنية الصحيحة يعتمد على احتياجاتك.</p>
      `,
      prerequisites: ['معرفة أساسية بقواعد البيانات', 'فهم البيانات الضخمة'],
      tools: ['AWS أو GCP أو Azure', 'أدوات ETL/ELT', 'محرر الكود'],
      nextSteps: [
        'استكشف الحلول السحابية',
        'اختبر ببيانات حقيقية',
        'اختر البنية المناسبة'
      ]
    },
    en: {
      domainExplanation: 'Data Warehouses and Data Lakes are modern architectures for storing and analyzing large amounts of data. Understanding their differences is crucial for Big Data.',
      howToStart: 'Understand Data Warehouse and Data Lake concepts. Study modern architectures (Lakehouse). Explore cloud solutions (AWS, GCP, Azure).',
      essentialElements: [
        'Data Warehouse: Structured data, optimized for analysis',
        'Data Lake: Raw storage, all data types',
        'Lakehouse: Combination of both approaches',
        'Cloud architectures: AWS Redshift, Google BigQuery, Azure Synapse',
        'ETL vs ELT: Data transformation',
        'Use cases: When to use what'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Data Warehouses and Data Lakes are modern architectures for storing and analyzing large amounts of data. Understanding their differences is crucial for Big Data.</p>
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop" alt="Data Warehouse" class="w-full rounded-lg my-6" />
        
        <h2>1. Data Warehouse</h2>
        <p>Structured storage optimized for analysis.</p>
        <ul>
          <li>Structured and cleaned data</li>
          <li>Defined schema (schema-on-write)</li>
          <li>Optimized for SQL queries</li>
          <li>Examples: Amazon Redshift, Google BigQuery</li>
        </ul>
        
        <h2>2. Data Lake</h2>
        <p>Raw storage of all data types.</p>
        <ul>
          <li>Raw and unstructured data</li>
          <li>Flexible schema (schema-on-read)</li>
          <li>Economical storage</li>
          <li>Examples: AWS S3, Azure Data Lake</li>
        </ul>
        
        <h2>3. Lakehouse</h2>
        <p>Modern architecture combining both approaches.</p>
        <ul>
          <li>Data Lake flexibility</li>
          <li>Data Warehouse performance</li>
          <li>Examples: Databricks, Delta Lake</li>
        </ul>
        
        <h2>4. Cloud Architectures</h2>
        <p>Cloud solutions for Big Data.</p>
        <ul>
          <li>AWS: Redshift, S3, Athena</li>
          <li>Google Cloud: BigQuery, Cloud Storage</li>
          <li>Azure: Synapse Analytics, Data Lake</li>
        </ul>
        
        <h2>5. ETL vs ELT</h2>
        <p>Two approaches to transform data.</p>
        <ul>
          <li><strong>ETL:</strong> Extract, Transform, Load</li>
          <li><strong>ELT:</strong> Extract, Load, Transform</li>
          <li>Choose according to your needs</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Choosing the right architecture depends on your needs: Data Warehouse for structured analysis, Data Lake for flexibility, Lakehouse for the best of both worlds.</p>
      `,
      prerequisites: ['Basic database knowledge', 'Understanding of Big Data'],
      tools: ['AWS, GCP or Azure', 'ETL/ELT tools', 'Code editor'],
      nextSteps: [
        'Explore cloud solutions',
        'Test with real data',
        'Choose the suitable architecture',
        'Set up your pipeline'
      ]
    }
  },
  // Blog 25: Les index
  25: {
    fr: {
      domainExplanation: 'Les index accélèrent les requêtes en permettant un accès rapide aux données. Comprendre leur fonctionnement et leur utilisation optimise les performances.',
      howToStart: 'Comprenez le fonctionnement des index. Apprenez à créer des index. Analysez les performances de vos requêtes. Optimisez avec les bons index.',
      essentialElements: [
        'Fonctionnement : Structure B-tree, recherche rapide',
        'Types d\'index : Primary, Unique, Composite, Full-text',
        'Création : Syntaxe SQL pour créer des index',
        'Analyse : EXPLAIN pour comprendre l\'utilisation',
        'Optimisation : Quand créer et supprimer des index',
        'Trade-offs : Performance vs espace de stockage'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Les index accélèrent les requêtes en permettant un accès rapide aux données. Comprendre leur fonctionnement et leur utilisation optimise les performances.</p>
        <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&auto=format&fit=crop" alt="Index base de données" class="w-full rounded-lg my-6" />
        
        <h2>1. Fonctionnement des index</h2>
        <p>Les index utilisent des structures de données pour accélérer la recherche.</p>
        <ul>
          <li>Structure B-tree (arbre binaire)</li>
          <li>Recherche en O(log n) au lieu de O(n)</li>
          <li>Tri automatique des données</li>
        </ul>
        
        <h2>2. Types d'index</h2>
        <p>Différents types d'index pour différents besoins.</p>
        <ul>
          <li><strong>Primary :</strong> Index unique sur la clé primaire</li>
          <li><strong>Unique :</strong> Garantit l'unicité</li>
          <li><strong>Composite :</strong> Sur plusieurs colonnes</li>
          <li><strong>Full-text :</strong> Pour la recherche textuelle</li>
        </ul>
        
        <h2>3. Création d'index</h2>
        <p>Créez des index avec SQL.</p>
        <pre><code>-- Index simple
CREATE INDEX idx_name ON table_name(column_name);

-- Index composite
CREATE INDEX idx_composite ON table_name(col1, col2);

-- Index unique
CREATE UNIQUE INDEX idx_unique ON table_name(column_name);</code></pre>
        
        <h2>4. Analyse avec EXPLAIN</h2>
        <p>Utilisez EXPLAIN pour comprendre l'utilisation des index.</p>
        <pre><code>EXPLAIN SELECT * FROM users WHERE email = 'user@example.com';</code></pre>
        
        <h2>5. Optimisation</h2>
        <p>Créez des index stratégiques.</p>
        <ul>
          <li>Index sur les colonnes fréquemment utilisées dans WHERE</li>
          <li>Index sur les colonnes de JOIN</li>
          <li>Évitez trop d'index (ralentit les INSERT/UPDATE)</li>
        </ul>
        
        <h2>6. Trade-offs</h2>
        <p>Les index ont des coûts.</p>
        <ul>
          <li>Espace de stockage supplémentaire</li>
          <li>Ralentissement des INSERT/UPDATE/DELETE</li>
          <li>Maintenance automatique par la base</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Les index sont essentiels pour optimiser les performances. Utilisez-les stratégiquement sur les colonnes fréquemment interrogées.</p>
      `,
      prerequisites: ['Connaissances de base en SQL', 'Compréhension des bases de données relationnelles'],
      tools: ['MySQL ou PostgreSQL', 'Éditeur de code', 'Outils d\'analyse'],
      nextSteps: [
        'Analysez vos requêtes lentes',
        'Créez des index appropriés',
        'Testez les performances',
        'Optimisez continuellement'
      ]
    },
    ar: {
      domainExplanation: 'الفهارس تسرع الاستعلامات من خلال السماح بالوصول السريع إلى البيانات. فهم عملها واستخدامها يحسن الأداء.',
      howToStart: 'افهم عمل الفهارس. تعلم إنشاء الفهارس. حلل أداء استعلاماتك. حسّن بالفهارس الصحيحة.',
      essentialElements: [
        'العمل: بنية B-tree، بحث سريع',
        'أنواع الفهارس: Primary، Unique، Composite، Full-text',
        'الإنشاء: بناء جملة SQL لإنشاء الفهارس',
        'التحليل: EXPLAIN لفهم الاستخدام',
        'التحسين: متى تنشئ وتحذف الفهارس',
        'المقايضات: الأداء مقابل مساحة التخزين'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>الفهارس تسرع الاستعلامات من خلال السماح بالوصول السريع إلى البيانات.</p>
        <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&auto=format&fit=crop" alt="فهرس قاعدة البيانات" class="w-full rounded-lg my-6" />
        
        <h2>١. عمل الفهارس</h2>
        <p>الفهارس تستخدم هياكل البيانات لتسريع البحث.</p>
        
        <h2>٢. أنواع الفهارس</h2>
        <p>أنواع مختلفة للاحتياجات المختلفة.</p>
        
        <h2>٣. إنشاء الفهارس</h2>
        <p>أنشئ فهارس بـ SQL.</p>
        
        <h2>٤. التحليل مع EXPLAIN</h2>
        <p>استخدم EXPLAIN لفهم استخدام الفهارس.</p>
        
        <h2>٥. التحسين</h2>
        <p>أنشئ فهارس استراتيجية.</p>
        
        <h2>٦. المقايضات</h2>
        <p>الفهارس لها تكاليف.</p>
        
        <h2>الخلاصة</h2>
        <p>الفهارس ضرورية لتحسين الأداء. استخدمها استراتيجيًا على الأعمدة المستفسر عنها بشكل متكرر.</p>
      `,
      prerequisites: ['معرفة أساسية بـ SQL', 'فهم قواعد البيانات العلائقية'],
      tools: ['MySQL أو PostgreSQL', 'محرر الكود', 'أدوات التحليل'],
      nextSteps: [
        'حلل استعلاماتك البطيئة',
        'أنشئ فهارس مناسبة',
        'اختبر الأداء'
      ]
    },
    en: {
      domainExplanation: 'Indexes speed up queries by allowing fast access to data. Understanding their operation and use optimizes performance.',
      howToStart: 'Understand how indexes work. Learn to create indexes. Analyze your query performance. Optimize with the right indexes.',
      essentialElements: [
        'Operation: B-tree structure, fast search',
        'Index types: Primary, Unique, Composite, Full-text',
        'Creation: SQL syntax to create indexes',
        'Analysis: EXPLAIN to understand usage',
        'Optimization: When to create and delete indexes',
        'Trade-offs: Performance vs storage space'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Indexes speed up queries by allowing fast access to data. Understanding their operation and use optimizes performance.</p>
        <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&auto=format&fit=crop" alt="Database index" class="w-full rounded-lg my-6" />
        
        <h2>1. How Indexes Work</h2>
        <p>Indexes use data structures to speed up search.</p>
        <ul>
          <li>B-tree structure (binary tree)</li>
          <li>Search in O(log n) instead of O(n)</li>
          <li>Automatic data sorting</li>
        </ul>
        
        <h2>2. Index Types</h2>
        <p>Different index types for different needs.</p>
        <ul>
          <li><strong>Primary:</strong> Unique index on primary key</li>
          <li><strong>Unique:</strong> Guarantees uniqueness</li>
          <li><strong>Composite:</strong> On multiple columns</li>
          <li><strong>Full-text:</strong> For text search</li>
        </ul>
        
        <h2>3. Creating Indexes</h2>
        <p>Create indexes with SQL.</p>
        <pre><code>-- Simple index
CREATE INDEX idx_name ON table_name(column_name);

-- Composite index
CREATE INDEX idx_composite ON table_name(col1, col2);

-- Unique index
CREATE UNIQUE INDEX idx_unique ON table_name(column_name);</code></pre>
        
        <h2>4. Analysis with EXPLAIN</h2>
        <p>Use EXPLAIN to understand index usage.</p>
        <pre><code>EXPLAIN SELECT * FROM users WHERE email = 'user@example.com';</code></pre>
        
        <h2>5. Optimization</h2>
        <p>Create strategic indexes.</p>
        <ul>
          <li>Index on columns frequently used in WHERE</li>
          <li>Index on JOIN columns</li>
          <li>Avoid too many indexes (slows INSERT/UPDATE)</li>
        </ul>
        
        <h2>6. Trade-offs</h2>
        <p>Indexes have costs.</p>
        <ul>
          <li>Additional storage space</li>
          <li>Slower INSERT/UPDATE/DELETE</li>
          <li>Automatic maintenance by database</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Indexes are essential for optimizing performance. Use them strategically on frequently queried columns.</p>
      `,
      prerequisites: ['Basic SQL knowledge', 'Understanding of relational databases'],
      tools: ['MySQL or PostgreSQL', 'Code editor', 'Analysis tools'],
      nextSteps: [
        'Analyze your slow queries',
        'Create appropriate indexes',
        'Test performance',
        'Continuously optimize'
      ]
    }
  }
}

export default databasesTranslations


