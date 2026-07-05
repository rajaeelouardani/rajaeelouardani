// Other Domains category translations (Blogs 61-65)
import { BlogTranslations } from '../types'

const otherTranslations: BlogTranslations = {
  // Blog 61: Cybersécurité
  61: {
    fr: {
      domainExplanation: 'La cybersécurité est essentielle pour protéger vos applications et données contre les menaces. Comprendre les vulnérabilités communes, les bonnes pratiques de sécurité et les techniques de protection est crucial pour tout développeur.',
      howToStart: 'Étudiez les OWASP Top 10 (vulnérabilités web communes). Apprenez à valider et sanitizer les entrées utilisateur. Comprenez l\'authentification et l\'autorisation. Pratiquez avec des CTF (Capture The Flag) pour apprendre par la pratique.',
      essentialElements: [
        'OWASP Top 10 : Injection, XSS, broken authentication, etc.',
        'Validation et sanitization : Vérifier toutes entrées utilisateur',
        'Authentification sécurisée : Hashing passwords (bcrypt), JWT, sessions',
        'HTTPS/TLS : Chiffrement données en transit',
        'Principle of least privilege : Accès minimal nécessaire',
        'Dépendances : Maintenir à jour, vérifier vulnérabilités'
      ],
      fullContent: `
        <h2>Introduction : Cybersécurité pour développeurs</h2>
        <p>La cybersécurité n'est plus optionnelle - c'est une responsabilité fondamentale de tout développeur. Comprendre les menaces communes et implémenter des mesures de sécurité de base protège vos applications, vos utilisateurs et vos données. Ce guide vous introduit aux concepts essentiels de sécurité web.</p>
        <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&auto=format&fit=crop" alt="Cybersécurité" class="w-full rounded-lg my-6" />
        
        <h2>1. OWASP Top 10 : Vulnérabilités communes</h2>
        
        <h3>Top vulnérabilités web</h3>
        <ul>
          <li><strong>Injection (SQL, NoSQL, Command) :</strong> Entrées non validées exécutent code malveillant</li>
          <li><strong>Broken Authentication :</strong> Mots de passe faibles, sessions non sécurisées</li>
          <li><strong>Sensitive Data Exposure :</strong> Données sensibles non chiffrées</li>
          <li><strong>XML External Entities (XXE) :</strong> Traitement XML non sécurisé</li>
          <li><strong>Broken Access Control :</strong> Permissions insuffisantes</li>
          <li><strong>Security Misconfiguration :</strong> Configurations par défaut non sécurisées</li>
          <li><strong>XSS (Cross-Site Scripting) :</strong> Injection scripts dans pages web</li>
          <li><strong>Insecure Deserialization :</strong> Données désérialisées non validées</li>
          <li><strong>Using Components with Known Vulnerabilities :</strong> Dépendances obsolètes</li>
          <li><strong>Insufficient Logging & Monitoring :</strong> Détection incidents insuffisante</li>
        </ul>
        
        <h2>2. Bonnes pratiques essentielles</h2>
        
        <h3>Validation et sanitization</h3>
        <ul>
          <li>Valider TOUTES les entrées côté serveur</li>
          <li>Sanitizer données avant affichage (prévenir XSS)</li>
          <li>Utiliser whitelist plutôt que blacklist</li>
          <li>Échapper caractères spéciaux dans requêtes SQL</li>
        </ul>
        
        <h3>Authentification sécurisée</h3>
        <ul>
          <li>Hacher mots de passe avec bcrypt/Argon2 (jamais en clair)</li>
          <li>Imposer mots de passe forts (min 12 caractères, complexité)</li>
          <li>Implémenter rate limiting sur login</li>
          <li>Utiliser JWT avec expiration courte</li>
          <li>HTTPS pour toutes communications</li>
        </ul>
        
        <h3>Gestion des erreurs</h3>
        <ul>
          <li>Ne pas exposer détails techniques aux utilisateurs</li>
          <li>Logger erreurs côté serveur seulement</li>
          <li>Messages d'erreur génériques pour utilisateurs</li>
        </ul>
        
        <h2>3. Outils et ressources</h2>
        <ul>
          <li><strong>OWASP :</strong> Ressources, guides, outils</li>
          <li><strong>npm audit :</strong> Vérifier vulnérabilités dépendances</li>
          <li><strong>Snyk, Dependabot :</strong> Scan automatique sécurité</li>
          <li><strong>Burp Suite :</strong> Tests pénétration</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>La sécurité doit être intégrée dès le début du développement, pas ajoutée après. Commencez par les bases : validation des entrées, authentification sécurisée, et gestion des dépendances. La sécurité est un processus continu d'amélioration.</p>
      `,
      prerequisites: [
        'Connaissances de base développement web',
        'Compréhension HTTP et bases de données',
        'Familiarité avec concepts authentification'
      ],
      tools: [
        'OWASP resources',
        'npm audit',
        'Snyk, Dependabot',
        'Burp Suite (tests)'
      ],
      nextSteps: [
        'Lisez OWASP Top 10 en détail',
        'Auditez votre application actuelle pour vulnérabilités communes',
        'Implémentez validation robuste sur toutes entrées',
        'Passez votre application en HTTPS',
        'Configurez scans automatiques de dépendances'
      ]
    },
    ar: {
      domainExplanation: 'الأمن السيبراني ضروري لحماية التطبيقات والبيانات من التهديدات.',
      howToStart: 'ادرس OWASP Top 10. تعلم التحقق من المدخلات. فهم المصادقة والتفويض.',
      essentialElements: [
        'OWASP Top 10',
        'التحقق من المدخلات',
        'المصادقة الآمنة',
        'HTTPS/TLS'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>الأمن السيبراني ليس اختياريًا - إنه مسؤولية أساسية لكل مطور.</p>
        <h2>الخلاصة</h2>
        <p>يجب دمج الأمان من البداية، وليس إضافته لاحقًا.</p>
      `,
      prerequisites: ['معرفة أساسية بالتطوير', 'فهم HTTP'],
      tools: ['OWASP', 'npm audit', 'Snyk'],
      nextSteps: ['اقرأ OWASP Top 10', 'راجع تطبيقك', 'نفذ التحقق']
    },
    en: {
      domainExplanation: 'Cybersecurity is essential to protect applications and data from threats.',
      howToStart: 'Study OWASP Top 10. Learn input validation. Understand authentication and authorization.',
      essentialElements: [
        'OWASP Top 10',
        'Input validation',
        'Secure authentication',
        'HTTPS/TLS'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Cybersecurity is not optional - it's a fundamental responsibility for every developer.</p>
        <h2>Conclusion</h2>
        <p>Security should be integrated from the start, not added later.</p>
      `,
      prerequisites: ['Basic development knowledge', 'HTTP understanding'],
      tools: ['OWASP', 'npm audit', 'Snyk'],
      nextSteps: ['Read OWASP Top 10', 'Audit your app', 'Implement validation']
    }
  },
  // Blog 62: UI Motion Design
  62: {
    fr: {
      domainExplanation: 'Le motion design UI transforme les interfaces statiques en expériences animées et engageantes. Les animations subtiles et bien conçues améliorent l\'UX, guident l\'attention et rendent les interfaces plus intuitives et professionnelles.',
      howToStart: 'Comprenez les principes d\'animation (timing, easing, purpose). Explorez les bibliothèques (Framer Motion pour React, CSS animations). Créez des animations subtiles pour interactions courantes (hover, transitions, loading). Testez sur différents appareils pour performance.',
      essentialElements: [
        'Principes : Timing, easing, purpose (chaque animation doit avoir un objectif)',
        'Types animations : Transitions, micro-interactions, feedback utilisateur',
        'Bibliothèques : Framer Motion (React), GSAP, CSS animations',
        'Performance : 60fps, optimiser pour mobile, utiliser transform/opacity',
        'Accessibility : Respecter prefers-reduced-motion, animations optionnelles',
        'Design : Subtilité, cohérence, ne pas distraire'
      ],
      fullContent: `
        <h2>Introduction : Motion Design pour interfaces modernes</h2>
        <p>Les animations bien conçues rendent les interfaces non seulement plus belles, mais aussi plus fonctionnelles. Le motion design guide l'attention, communique le feedback, et crée une expérience utilisateur fluide et professionnelle. Ce guide vous montre comment implémenter des animations efficaces dans vos interfaces.</p>
        <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop" alt="Motion Design" class="w-full rounded-lg my-6" />
        
        <h2>1. Principes d'animation</h2>
        
        <h3>Principes fondamentaux</h3>
        <ul>
          <li><strong>Purpose :</strong> Chaque animation doit avoir un objectif clair</li>
          <li><strong>Timing :</strong> Durée appropriée (200-500ms généralement)</li>
          <li><strong>Easing :</strong> Courbes d'accélération naturelles (ease-in-out)</li>
          <li><strong>Subtilité :</strong> Améliorer sans distraire</li>
          <li><strong>Cohérence :</strong> Style d'animation uniforme</li>
        </ul>
        
        <h2>2. Types d'animations UI</h2>
        
        <h3>Transitions de page</h3>
        <ul>
          <li>Fade, slide, scale</li>
          <li>Guider utilisateur entre états</li>
        </ul>
        
        <h3>Micro-interactions</h3>
        <ul>
          <li>Feedback immédiat sur actions</li>
          <li>Boutons, formulaires, hover states</li>
        </ul>
        
        <h3>États de chargement</h3>
        <ul>
          <li>Skeleton screens, spinners, progress bars</li>
          <li>Indiquer que quelque chose se passe</li>
        </ul>
        
        <h2>3. Outils et bibliothèques</h2>
        
        <h3>Pour React</h3>
        <ul>
          <li><strong>Framer Motion :</strong> Puissant, déclaratif</li>
          <li><strong>React Spring :</strong> Animations physiques</li>
          <li><strong>CSS-in-JS :</strong> Animations CSS avec styled-components</li>
        </ul>
        
        <h3>Général</h3>
        <ul>
          <li><strong>GSAP :</strong> Bibliothèque animation puissante</li>
          <li><strong>CSS Animations :</strong> Native, performant</li>
          <li><strong>Lottie :</strong> Animations After Effects dans web</li>
        </ul>
        
        <h2>4. Performance</h2>
        <ul>
          <li>Utiliser transform et opacity (GPU-accelerated)</li>
          <li>Éviter animer width, height, top, left</li>
          <li>Targeter 60fps</li>
          <li>Tester sur mobile (moins puissant)</li>
        </ul>
        
        <h2>5. Accessibilité</h2>
        <ul>
          <li>Respecter prefers-reduced-motion</li>
          <li>Rendre animations optionnelles si possible</li>
          <li>Ne pas utiliser animations critiques pour fonctionnalité</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Le motion design bien implémenté améliore significativement l'UX. Rappelez-vous : moins c'est souvent plus. Les animations subtiles et purpose-driven sont plus efficaces que des animations flashy. Commencez simple, testez, et itérez.</p>
      `,
      prerequisites: [
        'Connaissances CSS et JavaScript',
        'Compréhension de base React (si utilisant Framer Motion)',
        'Sensibilité au design et UX'
      ],
      tools: [
        'Framer Motion (React)',
        'GSAP',
        'CSS animations',
        'Chrome DevTools (performance)'
      ],
      nextSteps: [
        'Apprenez principes animation de base',
        'Installez Framer Motion et créez animations simples',
        'Implémentez micro-interactions sur vos boutons',
        'Créez transitions entre pages/routes',
        'Testez performance et accessibilité'
      ]
    },
    ar: {
      domainExplanation: 'تصميم الحركة UI يحول الواجهات الثابتة إلى تجارب متحركة وجذابة.',
      howToStart: 'افهم مبادئ الرسوم المتحركة. استكشف المكتبات. أنشئ رسومًا متحركة دقيقة.',
      essentialElements: [
        'المبادئ: التوقيت، التخفيف',
        'الأنواع: التحولات، التفاعلات الصغيرة',
        'الأدوات: Framer Motion, GSAP',
        'الأداء: 60fps'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>الرسوم المتحركة المصممة جيدًا تجعل الواجهات أكثر جمالًا ووظيفية.</p>
        <h2>الخلاصة</h2>
        <p>تصميم الحركة المحسّن يحسن تجربة المستخدم بشكل كبير.</p>
      `,
      prerequisites: ['معرفة CSS و JavaScript', 'فهم React أساسي'],
      tools: ['Framer Motion', 'GSAP', 'CSS'],
      nextSteps: ['تعلم المبادئ', 'ثبت Framer Motion', 'أنشئ تفاعلات']
    },
    en: {
      domainExplanation: 'UI motion design transforms static interfaces into animated and engaging experiences.',
      howToStart: 'Understand animation principles. Explore libraries. Create subtle animations.',
      essentialElements: [
        'Principles: Timing, easing',
        'Types: Transitions, micro-interactions',
        'Tools: Framer Motion, GSAP',
        'Performance: 60fps'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Well-designed animations make interfaces more beautiful and functional.</p>
        <h2>Conclusion</h2>
        <p>Well-implemented motion design significantly improves UX.</p>
      `,
      prerequisites: ['CSS and JavaScript knowledge', 'Basic React understanding'],
      tools: ['Framer Motion', 'GSAP', 'CSS'],
      nextSteps: ['Learn principles', 'Install Framer Motion', 'Create interactions']
    }
  }
}

export default otherTranslations
