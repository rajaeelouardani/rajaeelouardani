// Backend Development category translations (Blogs 66-70)
import { BlogTranslations } from '../types'

const backendTranslations: BlogTranslations = {
  // Blog 66: Node.js
  66: {
    fr: {
      domainExplanation: 'Node.js permet d\'utiliser JavaScript côté serveur, créant des applications backend performantes et scalables. Avec Express.js et l\'écosystème npm, vous pouvez construire des APIs REST, des applications temps réel, et des microservices modernes.',
      howToStart: 'Installez Node.js et npm. Créez votre premier serveur avec Express. Apprenez à créer routes et middleware. Intégrez une base de données (MongoDB ou PostgreSQL). Construisez votre première API REST complète avec authentification.',
      essentialElements: [
        'Node.js : Runtime JavaScript côté serveur, event loop, modules',
        'Express.js : Framework web minimal et flexible',
        'APIs REST : Routes, méthodes HTTP, stateless',
        'Middleware : Gestion requêtes, authentification, erreurs',
        'Bases de données : MongoDB, PostgreSQL, intégration ORMs',
        'Authentification : JWT, sessions, bcrypt pour mots de passe',
        'Async/await : Gestion asynchrone efficace'
      ],
      fullContent: `
        <h2>Introduction : Développement Backend avec Node.js</h2>
        <p>Node.js a révolutionné le développement backend en permettant d'utiliser JavaScript à la fois côté client et serveur. Avec son écosystème riche, ses performances élevées et sa scalabilité, Node.js est devenu le choix privilégié pour de nombreuses applications modernes. Ce guide vous introduit au développement backend avec Node.js et Express.</p>
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop" alt="Node.js Backend" class="w-full rounded-lg my-6" />
        
        <h2>1. Concepts fondamentaux Node.js</h2>
        
        <h3>Event Loop</h3>
        <ul>
          <li>Node.js est asynchrone et non-bloquant</li>
          <li>Event loop gère opérations I/O efficacement</li>
          <li>Idéal pour applications I/O intensives</li>
        </ul>
        
        <h3>Modules CommonJS et ES6</h3>
        <ul>
          <li>CommonJS : require() et module.exports</li>
          <li>ES6 Modules : import et export</li>
          <li>Modules npm : Réutiliser code communautaire</li>
        </ul>
        
        <h2>2. Express.js : Framework web</h2>
        
        <h3>Création serveur de base</h3>
        <pre><code>const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});</code></pre>
        
        <h3>Routes et méthodes HTTP</h3>
        <ul>
          <li>GET, POST, PUT, DELETE, PATCH</li>
          <li>Routes paramétrées</li>
          <li>Query parameters</li>
          <li>Body parsing (JSON, form data)</li>
        </ul>
        
        <h3>Middleware</h3>
        <ul>
          <li><strong>Built-in :</strong> express.json(), express.static()</li>
          <li><strong>Custom :</strong> Fonctions avec req, res, next</li>
          <li><strong>Third-party :</strong> cors, helmet, morgan</li>
          <li>Ordre d'exécution important</li>
        </ul>
        
        <h2>3. APIs REST</h2>
        
        <h3>Principes REST</h3>
        <ul>
          <li>Stateless (chaque requête indépendante)</li>
          <li>Utiliser méthodes HTTP appropriées</li>
          <li>URLs ressources claires</li>
          <li>Codes status HTTP appropriés</li>
        </ul>
        
        <h3>Structure API typique</h3>
        <ul>
          <li>/api/users (GET: liste, POST: créer)</li>
          <li>/api/users/:id (GET: un, PUT: modifier, DELETE: supprimer)</li>
          <li>Versioning : /api/v1/...</li>
        </ul>
        
        <h2>4. Bases de données</h2>
        
        <h3>MongoDB (NoSQL)</h3>
        <ul>
          <li>Mongoose ODM</li>
          <li>Schémas et modèles</li>
          <li>Requêtes asynchrones</li>
        </ul>
        
        <h3>PostgreSQL (SQL)</h3>
        <ul>
          <li>pg ou Sequelize ORM</li>
          <li>Requêtes SQL</li>
          <li>Relations et migrations</li>
        </ul>
        
        <h2>5. Authentification et sécurité</h2>
        
        <h3>JWT (JSON Web Tokens)</h3>
        <ul>
          <li>Tokens stateless</li>
          <li>Signer avec secret</li>
          <li>Expiration et refresh tokens</li>
        </ul>
        
        <h3>Sécurité</h3>
        <ul>
          <li>Hacher mots de passe (bcrypt)</li>
          <li>Valider entrées utilisateur</li>
          <li>Helmet.js pour headers sécurité</li>
          <li>Rate limiting</li>
        </ul>
        
        <h2>6. Gestion d'erreurs</h2>
        <ul>
          <li>Try-catch avec async/await</li>
          <li>Middleware erreurs global</li>
          <li>Codes status appropriés</li>
          <li>Logging erreurs</li>
        </ul>
        
        <h2>7. Déploiement</h2>
        <ul>
          <li>Variables d'environnement (.env)</li>
          <li>Process managers (PM2)</li>
          <li>Containers (Docker)</li>
          <li>Cloud platforms (Heroku, AWS, Vercel)</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Node.js avec Express est un choix excellent pour développer des APIs modernes et performantes. Commencez par les bases (serveur, routes, middleware), puis ajoutez progressivement base de données, authentification, et fonctionnalités avancées. La pratique avec projets réels est la meilleure façon d'apprendre.</p>
      `,
      prerequisites: [
        'Connaissances JavaScript solides',
        'Compréhension HTTP et APIs',
        'Connaissances de base bases de données'
      ],
      tools: [
        'Node.js et npm',
        'Express.js',
        'MongoDB/PostgreSQL',
        'Postman (test APIs)',
        'VS Code'
      ],
      nextSteps: [
        'Installez Node.js',
        'Créez premier serveur Express',
        'Implémentez routes CRUD de base',
        'Intégrez base de données',
        'Ajoutez authentification JWT',
        'Déployez votre API'
      ]
    },
    ar: {
      domainExplanation: 'Node.js يسمح باستخدام JavaScript على جانب الخادم لإنشاء تطبيقات backend فعالة وقابلة للتطوير.',
      howToStart: 'ثبت Node.js. أنشئ خادمك الأول مع Express. تعلم إنشاء المسارات والوسائط.',
      essentialElements: [
        'Node.js',
        'Express.js',
        'APIs REST',
        'الوسائط',
        'قواعد البيانات',
        'المصادقة'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>Node.js أحدث ثورة في تطوير backend بالسماح باستخدام JavaScript على الخادم.</p>
        <h2>الخلاصة</h2>
        <p>Node.js مع Express اختيار ممتاز لتطوير APIs حديثة وفعالة.</p>
      `,
      prerequisites: ['معرفة JavaScript قوية', 'فهم HTTP'],
      tools: ['Node.js', 'Express', 'MongoDB', 'Postman'],
      nextSteps: ['ثبت Node.js', 'أنشئ خادم Express', 'نفذ APIs']
    },
    en: {
      domainExplanation: 'Node.js allows using JavaScript on the server side to create efficient and scalable backend applications.',
      howToStart: 'Install Node.js. Create your first server with Express. Learn to create routes and middleware.',
      essentialElements: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'Middleware',
        'Databases',
        'Authentication'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Node.js revolutionized backend development by allowing JavaScript on the server.</p>
        <h2>Conclusion</h2>
        <p>Node.js with Express is an excellent choice for modern and efficient APIs.</p>
      `,
      prerequisites: ['Strong JavaScript knowledge', 'HTTP understanding'],
      tools: ['Node.js', 'Express', 'MongoDB', 'Postman'],
      nextSteps: ['Install Node.js', 'Create Express server', 'Implement APIs']
    }
  },
  // Blog 67: Laravel
  67: {
    fr: {
      domainExplanation: 'Laravel est le framework PHP le plus populaire, connu pour sa syntaxe élégante, ses outils puissants et son écosystème riche. Il simplifie le développement d\'applications web complexes avec MVC, ORM Eloquent, et de nombreuses fonctionnalités intégrées.',
      howToStart: 'Installez PHP et Composer. Installez Laravel via Composer ou Laravel Installer. Créez votre premier projet. Explorez structure MVC. Apprenez Eloquent ORM. Créez votre première application avec authentification et base de données.',
      essentialElements: [
        'MVC (Model-View-Controller) : Architecture séparation responsabilités',
        'Eloquent ORM : ORM intuitif pour bases de données',
        'Blade : Moteur de templates puissant',
        'Artisan : CLI pour automatiser tâches',
        'Routing : Routes définies clairement',
        'Middleware : Filtres requêtes',
        'Migrations : Gestion schéma base de données versionnée'
      ],
      fullContent: `
        <h2>Introduction : Laravel - Framework PHP Moderne</h2>
        <p>Laravel a transformé le développement PHP en offrant un framework moderne, élégant et puissant. Avec sa syntaxe expressive, son ORM Eloquent intuitif, et ses nombreuses fonctionnalités intégrées, Laravel permet de développer des applications web robustes rapidement et efficacement.</p>
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop" alt="Laravel Framework" class="w-full rounded-lg my-6" />
        
        <h2>1. Installation et configuration</h2>
        
        <h3>Prérequis</h3>
        <ul>
          <li>PHP 8.1+</li>
          <li>Composer (gestionnaire dépendances PHP)</li>
          <li>Extension PHP : OpenSSL, PDO, Mbstring, Tokenizer, XML, Ctype, JSON</li>
        </ul>
        
        <h3>Installation</h3>
        <pre><code>composer create-project laravel/laravel myapp
cd myapp
php artisan serve</code></pre>
        
        <h2>2. Architecture MVC</h2>
        
        <h3>Modèle (Model)</h3>
        <ul>
          <li>Représente données et logique métier</li>
          <li>Eloquent models pour bases de données</li>
          <li>Relations entre modèles</li>
        </ul>
        
        <h3>Vue (View)</h3>
        <ul>
          <li>Templates Blade</li>
          <li>Syntaxe simple et puissante</li>
          <li>Layouts et composants</li>
        </ul>
        
        <h3>Contrôleur (Controller)</h3>
        <ul>
          <li>Gère logique application</li>
          <li>Reçoit requêtes, retourne réponses</li>
          <li>Resource controllers pour CRUD</li>
        </ul>
        
        <h2>3. Routing</h2>
        
        <h3>Routes de base</h3>
        <pre><code>Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/users/{id}', [UserController::class, 'show']);</code></pre>
        
        <h3>Resource routes</h3>
        <pre><code>Route::resource('users', UserController::class);
// Crée automatiquement toutes routes CRUD</code></pre>
        
        <h2>4. Eloquent ORM</h2>
        
        <h3>Modèles</h3>
        <pre><code>class User extends Model {
  protected \$fillable = ['name', 'email'];
  
  public function posts() {
    return \$this->hasMany(Post::class);
  }
}</code></pre>
        
        <h3>Requêtes</h3>
        <ul>
          <li>User::all() - Tous utilisateurs</li>
          <li>User::find(1) - Utilisateur par ID</li>
          <li>User::where('active', true)->get()</li>
          <li>Relations : \$user->posts</li>
        </ul>
        
        <h2>5. Migrations</h2>
        
        <h3>Créer migration</h3>
        <pre><code>php artisan make:migration create_users_table</code></pre>
        
        <h3>Définir schéma</h3>
        <pre><code>Schema::create('users', function (Blueprint \$table) {
  \$table->id();
  \$table->string('name');
  \$table->string('email')->unique();
  \$table->timestamps();
});</code></pre>
        
        <h2>6. Blade Templates</h2>
        
        <h3>Syntaxe Blade</h3>
        <ul>
          <li>{{ \$variable }} - Échapper HTML</li>
          <li>{!! \$html !!} - HTML brut</li>
          <li>@if, @foreach, @while - Structures contrôle</li>
          <li>@extends, @section, @yield - Layouts</li>
          <li>@include - Partials</li>
        </ul>
        
        <h2>7. Authentification</h2>
        <ul>
          <li>Laravel Breeze ou Jetstream (démarrage rapide)</li>
          <li>Migrations utilisateurs incluses</li>
          <li>Middleware auth</li>
          <li>Guards et providers configurables</li>
        </ul>
        
        <h2>8. Middleware</h2>
        <ul>
          <li>Filtrer requêtes HTTP</li>
          <li>auth, guest, throttle (rate limiting)</li>
          <li>Middleware personnalisé</li>
        </ul>
        
        <h2>9. Artisan CLI</h2>
        <ul>
          <li>php artisan make:controller</li>
          <li>php artisan make:model</li>
          <li>php artisan migrate</li>
          <li>php artisan tinker (REPL)</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Laravel simplifie considérablement le développement d'applications PHP modernes. Avec son architecture MVC claire, Eloquent ORM puissant, et écosystème riche, Laravel permet de développer rapidement des applications robustes. Commencez par comprendre MVC, puis explorez Eloquent et Blade pour construire des applications complètes.</p>
      `,
      prerequisites: [
        'Connaissances PHP de base',
        'Compréhension programmation orientée objet',
        'Familiarité avec bases de données'
      ],
      tools: [
        'PHP 8.1+',
        'Composer',
        'Laravel',
        'Base de données (MySQL, PostgreSQL)',
        'Éditeur (PHPStorm, VS Code)'
      ],
      nextSteps: [
        'Installez PHP et Composer',
        'Créez premier projet Laravel',
        'Explorez structure MVC',
        'Créez modèles et migrations',
        'Implémentez authentification',
        'Construisez application CRUD complète'
      ]
    },
    ar: {
      domainExplanation: 'Laravel هو إطار عمل PHP الأكثر شعبية، معروف بتركيبه الأنيق وأدواته القوية.',
      howToStart: 'ثبت PHP و Composer. ثبت Laravel. أنشئ مشروعك الأول. استكشف بنية MVC.',
      essentialElements: [
        'MVC',
        'Eloquent ORM',
        'Blade',
        'Artisan',
        'التوجيه',
        'الوسائط'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>Laravel حول تطوير PHP بإطار عمل حديث وأنيق وقوي.</p>
        <h2>الخلاصة</h2>
        <p>Laravel يبسط تطوير تطبيقات PHP الحديثة بشكل كبير.</p>
      `,
      prerequisites: ['معرفة PHP أساسية', 'فهم POO'],
      tools: ['PHP', 'Composer', 'Laravel', 'قاعدة بيانات'],
      nextSteps: ['ثبت PHP', 'أنشئ مشروع Laravel', 'استكشف MVC']
    },
    en: {
      domainExplanation: 'Laravel is the most popular PHP framework, known for elegant syntax and powerful tools.',
      howToStart: 'Install PHP and Composer. Install Laravel. Create your first project. Explore MVC structure.',
      essentialElements: [
        'MVC',
        'Eloquent ORM',
        'Blade',
        'Artisan',
        'Routing',
        'Middleware'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Laravel transformed PHP development with a modern, elegant, and powerful framework.</p>
        <h2>Conclusion</h2>
        <p>Laravel greatly simplifies modern PHP application development.</p>
      `,
      prerequisites: ['Basic PHP knowledge', 'OOP understanding'],
      tools: ['PHP', 'Composer', 'Laravel', 'Database'],
      nextSteps: ['Install PHP', 'Create Laravel project', 'Explore MVC']
    }
  }
}

export default backendTranslations
