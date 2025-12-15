// Web Development category translations (Blogs 16-20)
import { BlogTranslations } from '../types'

const webdevTranslations: BlogTranslations = {
  // Blog 16: HTML / CSS : créer une landing page moderne
  16: {
    fr: {
      domainExplanation: 'La landing page est la première impression d\'un site. Une page bien conçue augmente les conversions et capte l\'attention de l\'utilisateur.',
      howToStart: 'Créez un fichier HTML de base. Structurez votre contenu avec des balises sémantiques. Ajoutez du CSS pour le style. Testez la responsivité.',
      essentialElements: [
        'Structure HTML de base : Doctype, head, body, sections',
        'Organisation du contenu : Header, Hero, Sections, Footer',
        'Mise en forme CSS moderne : Flexbox, Grid, variables CSS',
        'Responsive design : Media queries, mobile-first',
        'Optimisation : Performance et SEO'
      ],
      fullContent: `
        <h2>Introduction : Créer une landing page moderne qui convertit</h2>
        <p>Une landing page efficace est bien plus qu'une simple page web - c'est un outil de conversion stratégique qui guide les visiteurs vers l'action souhaitée. En 2025, avec l'attention limitée des utilisateurs et la concurrence féroce, créer une landing page moderne, performante et optimisée est essentiel pour tout business digital. Ce guide complet vous montre comment construire une landing page professionnelle de A à Z, en utilisant les meilleures pratiques HTML/CSS modernes, tout en maximisant les conversions et l'expérience utilisateur.</p>
        <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&auto=format&fit=crop" alt="Landing page" class="w-full rounded-lg my-6" />
        
        <h2>1. Structure HTML sémantique et accessible</h2>
        <p>Une base HTML solide et sémantique est la fondation d'une landing page performante et accessible.</p>
        
        <h3>Structure HTML5 sémantique</h3>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Votre Landing Page&lt;/title&gt;
  &lt;meta name="description" content="Description optimisée SEO"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;nav&gt;...&lt;/nav&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;section class="hero"&gt;...&lt;/section&gt;
    &lt;section class="features"&gt;...&lt;/section&gt;
    &lt;section class="testimonials"&gt;...&lt;/section&gt;
    &lt;section class="cta"&gt;...&lt;/section&gt;
  &lt;/main&gt;
  &lt;footer&gt;...&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        
        <h3>Bonnes pratiques HTML</h3>
        <ul>
          <li><strong>Balises sémantiques :</strong> Utilisez &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;footer&gt;</li>
          <li><strong>Accessibilité :</strong> Attributs alt sur toutes images, labels pour formulaires, structure hiérarchique H1-H6</li>
          <li><strong>SEO :</strong> Meta description unique, structure heading logique (un seul H1), attributs lang</li>
          <li><strong>Performance :</strong> Images optimisées avec lazy loading, scripts en bas de page ou async</li>
        </ul>
        
        <h2>2. Architecture et organisation du contenu</h2>
        <p>Une landing page efficace suit une structure éprouvée qui guide naturellement le visiteur vers l'action.</p>
        
        <h3>Section Hero (Above the fold)</h3>
        <ul>
          <li><strong>Objectif :</strong> Capturer l'attention et communiquer la valeur immédiate</li>
          <li><strong>Éléments essentiels :</strong>
            <ul>
              <li>Titre accrocheur et clair (H1)</li>
              <li>Sous-titre qui explique la valeur</li>
              <li>CTA principal (bouton proéminent)</li>
              <li>Visuel impactant (image, vidéo, illustration)</li>
              <li>Preuve sociale (avis, logos clients, badges)</li>
            </ul>
          </li>
          <li><strong>Exemple :</strong> "Transformez vos idées en réalité en 30 jours. Essayez gratuitement."</li>
        </ul>
        
        <h3>Section Features/Benefits</h3>
        <ul>
          <li>Présentez 3-5 avantages clés avec icônes et descriptions courtes</li>
          <li>Utilisez des titres descriptifs et bénéfices orientés utilisateur</li>
          <li>Formulez en termes de bénéfices, pas seulement de fonctionnalités</li>
        </ul>
        
        <h3>Section Social Proof</h3>
        <ul>
          <li>Témoignages clients authentiques avec photos</li>
          <li>Logos de clients/clients partenaires</li>
          <li>Statistiques impressionnantes (nombre d'utilisateurs, résultats)</li>
          <li>Avis et étoiles</li>
        </ul>
        
        <h3>Section CTA finale</h3>
        <ul>
          <li>Répéter l'appel à l'action principal</li>
          <li>Créer un sentiment d'urgence ou de valeur (offre limitée, essai gratuit)</li>
          <li>Réduire la friction (processus simple, garantie)</li>
        </ul>
        
        <h2>3. CSS moderne : Flexbox, Grid et techniques avancées</h2>
        
        <h3>CSS Grid pour layouts complexes</h3>
        <pre><code>.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 3rem 1rem;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
  }
}</code></pre>
        
        <h3>Flexbox pour alignements et navigation</h3>
        <pre><code>.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.cta-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}</code></pre>
        
        <h3>Variables CSS pour cohérence</h3>
        <pre><code>:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --spacing-xl: 4rem;
  --border-radius: 0.5rem;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button {
  background: var(--primary-color);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}</code></pre>
        
        <h3>Animations CSS modernes</h3>
        <pre><code>@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content {
  animation: fadeInUp 0.8s ease-out;
}

.button {
  transition: all 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}</code></pre>
        
        <h2>4. Responsive Design : Mobile-First Approach</h2>
        <p>En 2025, plus de 60% du trafic web vient des appareils mobiles. Le mobile-first n'est plus une option.</p>
        
        <h3>Stratégie Mobile-First</h3>
        <ul>
          <li><strong>Design pour mobile d'abord :</strong> Commencez avec la version mobile, puis enrichissez pour desktop</li>
          <li><strong>Progressive enhancement :</strong> Ajoutez fonctionnalités et styles pour écrans plus grands</li>
          <li><strong>Touch-friendly :</strong> Boutons minimum 44×44px, espacement suffisant entre éléments</li>
        </ul>
        
        <h3>Media Queries et Breakpoints</h3>
        <pre><code>/* Mobile First (par défaut) */
.container {
  padding: 1rem;
  font-size: 16px;
}

/* Tablette */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    font-size: 18px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem;
  }
}</code></pre>
        
        <h3>Breakpoints standards (2025)</h3>
        <ul>
          <li><strong>Mobile :</strong> 320px - 767px</li>
          <li><strong>Tablette :</strong> 768px - 1023px</li>
          <li><strong>Desktop :</strong> 1024px - 1439px</li>
          <li><strong>Large Desktop :</strong> 1440px+</li>
        </ul>
        
        <h3>Images responsives</h3>
        <pre><code>&lt;img 
  src="image.jpg" 
  srcset="image-small.jpg 480w, image-medium.jpg 768w, image-large.jpg 1200w"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Description"
  loading="lazy"
&gt;</code></pre>
        
        <h3>Navigation mobile</h3>
        <ul>
          <li>Menu hamburger pour mobile</li>
          <li>Menu complet pour desktop</li>
          <li>Sticky navigation pour faciliter accès</li>
        </ul>
        
        <h2>5. Optimisation des performances</h2>
        
        <h3>Optimisation des images</h3>
        <ul>
          <li><strong>Formats modernes :</strong> WebP, AVIF (avec fallback JPEG/PNG)</li>
          <li><strong>Compression :</strong> Réduire taille fichier (TinyPNG, ImageOptim)</li>
          <li><strong>Lazy loading :</strong> Charger images uniquement quand visible</li>
          <li><strong>Dimensions :</strong> Utiliser srcset pour servir images adaptées</li>
        </ul>
        
        <h3>CSS et JavaScript</h3>
        <ul>
          <li><strong>Minification :</strong> Réduire taille fichiers CSS/JS</li>
          <li><strong>Critical CSS :</strong> Inline CSS above-the-fold</li>
          <li><strong>Code splitting :</strong> Charger JS seulement si nécessaire</li>
          <li><strong>Defer/Async :</strong> Optimiser chargement scripts</li>
        </ul>
        
        <h3>Objectifs de performance</h3>
        <ul>
          <li><strong>First Contentful Paint (FCP) :</strong> < 1.8s</li>
          <li><strong>Largest Contentful Paint (LCP) :</strong> < 2.5s</li>
          <li><strong>Cumulative Layout Shift (CLS) :</strong> < 0.1</li>
          <li><strong>Time to Interactive (TTI) :</strong> < 3.8s</li>
        </ul>
        
        <h2>6. SEO et structure de données</h2>
        
        <h3>Meta tags essentiels</h3>
        <pre><code>&lt;head&gt;
  &lt;title&gt;Titre optimisé SEO (50-60 caractères)&lt;/title&gt;
  &lt;meta name="description" content="Description 150-160 caractères"&gt;
  &lt;meta name="keywords" content="mot-clé1, mot-clé2, mot-clé3"&gt;
  &lt;meta property="og:title" content="Titre pour réseaux sociaux"&gt;
  &lt;meta property="og:description" content="Description pour réseaux sociaux"&gt;
  &lt;meta property="og:image" content="image-preview.jpg"&gt;
  &lt;meta property="og:url" content="https://votresite.com"&gt;
&lt;/head&gt;</code></pre>
        
        <h3>Schema.org Markup (Structured Data)</h3>
        <pre><code>&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Votre Produit",
  "description": "Description du produit",
  "offers": {
    "@type": "Offer",
    "price": "99.00",
    "priceCurrency": "EUR"
  }
}
&lt;/script&gt;</code></pre>
        
        <h2>7. Design moderne et tendances 2025</h2>
        
        <h3>Tendances visuelles</h3>
        <ul>
          <li><strong>Glassmorphism :</strong> Effet verre dépoli avec backdrop-filter</li>
          <li><strong>Gradients subtils :</strong> Dégradés doux en arrière-plan</li>
          <li><strong>Micro-interactions :</strong> Animations subtiles au survol</li>
          <li><strong>Typographie expressive :</strong> Fonts personnalisées, tailles variables</li>
          <li><strong>Espace blanc :</strong> Beaucoup d'espace pour respirer</li>
        </ul>
        
        <h3>Palettes de couleurs modernes</h3>
        <ul>
          <li>Palettes limitées (2-3 couleurs principales)</li>
          <li>Contraste élevé pour accessibilité (WCAG AA minimum)</li>
          <li>Mode sombre optionnel (très tendance)</li>
        </ul>
        
        <h2>8. Conversion Optimization (CRO)</h2>
        
        <h3>Éléments de conversion</h3>
        <ul>
          <li><strong>CTA clairs :</strong> Boutons avec verbes d'action ("Commencez maintenant", "Essayez gratuitement")</li>
          <li><strong>Urgence :</strong> Offres limitées, stock limité (authentique seulement)</li>
          <li><strong>Scarcity :</strong> Nombre limité de places disponibles</li>
          <li><strong>Garanties :</strong> Réduction du risque ("Garantie 30 jours", "Sans engagement")</li>
          <li><strong>Social proof :</strong> Témoignages, avis, logos clients</li>
        </ul>
        
        <h3>A/B Testing</h3>
        <ul>
          <li>Tester différents titres, CTA, couleurs</li>
          <li>Analyser les taux de conversion</li>
          <li>Itérer sur ce qui fonctionne</li>
        </ul>
        
        <h2>9. Accessibilité (WCAG)</h2>
        <ul>
          <li>Contraste de couleurs suffisant (ratio 4.5:1 pour texte)</li>
          <li>Navigation au clavier fonctionnelle</li>
          <li>Lecteurs d'écran compatibles (ARIA labels)</li>
          <li>Texte alternatif pour toutes images</li>
          <li>Focus visible sur éléments interactifs</li>
        </ul>
        
        <h2>10. Outils et ressources</h2>
        <ul>
          <li><strong>Éditeurs :</strong> VS Code, Sublime Text, Atom</li>
          <li><strong>Frameworks CSS :</strong> Tailwind CSS, Bootstrap (optionnels)</li>
          <li><strong>Validation :</strong> W3C Validator, Lighthouse, PageSpeed Insights</li>
          <li><strong>Design :</strong> Figma, Adobe XD pour maquettes</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Une landing page moderne réussie combine une structure HTML solide, un CSS moderne et performant, un design responsive impeccable, et une optimisation constante pour les conversions. En suivant ce guide et en testant continuellement, vous créerez une landing page qui non seulement impressionne visuellement, mais qui convertit réellement vos visiteurs en clients. Rappelez-vous : une landing page n'est jamais terminée - elle évolue constamment basée sur les données et les retours utilisateurs.</p>
      `,
      prerequisites: ['Connaissances de base en HTML/CSS', 'Compréhension du responsive design'],
      tools: ['Éditeur de code (VS Code)', 'Navigateur web', 'Outils de développement'],
      nextSteps: [
        'Créez votre première landing page HTML/CSS',
        'Testez la responsivité sur différents appareils',
        'Optimisez les performances',
        'Ajoutez des animations CSS'
      ]
    },
    ar: {
      domainExplanation: 'صفحة الهبوط هي الانطباع الأول للموقع. صفحة مصممة جيدًا تزيد التحويلات وتجذب انتباه المستخدم.',
      howToStart: 'أنشئ ملف HTML أساسي. نظم محتواك بعلامات دلالية. أضف CSS للتصميم. اختبر الاستجابة.',
      essentialElements: [
        'بنية HTML الأساسية: Doctype، head، body، sections',
        'تنظيم المحتوى: Header، Hero، Sections، Footer',
        'تنسيق CSS حديث: Flexbox، Grid، متغيرات CSS',
        'تصميم متجاوب: Media queries، mobile-first',
        'التحسين: الأداء و SEO'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>صفحة الهبوط هي الانطباع الأول للموقع. صفحة مصممة جيدًا تزيد التحويلات.</p>
        <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&auto=format&fit=crop" alt="صفحة الهبوط" class="w-full rounded-lg my-6" />
        
        <h2>١. بنية HTML الأساسية</h2>
        <p>ابدأ ببنية HTML دلالية ومنظمة جيدًا.</p>
        
        <h2>٢. تنظيم المحتوى</h2>
        <p>نظم صفحة الهبوط في أقسام واضحة.</p>
        
        <h2>٣. تنسيق CSS حديث</h2>
        <p>استخدم Flexbox و Grid للتخطيطات الحديثة.</p>
        
        <h2>٤. تصميم متجاوب</h2>
        <p>صمم أولاً للجوال، ثم تكيف لسطح المكتب.</p>
        
        <h2>٥. تحسين الأداء و SEO</h2>
        <p>حسّن للسرعة والترتيب في محركات البحث.</p>
        
        <h2>الخلاصة</h2>
        <p>صفحة هبوط حديثة ومنظمة جيدًا ضرورية لإشراك الزوار وتحسين معدل التحويل.</p>
      `,
      prerequisites: ['معرفة أساسية بـ HTML/CSS', 'فهم التصميم المتجاوب'],
      tools: ['محرر الكود (VS Code)', 'متصفح الويب', 'أدوات التطوير'],
      nextSteps: [
        'أنشئ أول صفحة هبوط HTML/CSS',
        'اختبر الاستجابة على أجهزة مختلفة',
        'حسّن الأداء'
      ]
    },
    en: {
      domainExplanation: 'The landing page is the first impression of a site. A well-designed page increases conversions and captures user attention.',
      howToStart: 'Create a basic HTML file. Structure your content with semantic tags. Add CSS for styling. Test responsiveness.',
      essentialElements: [
        'Basic HTML structure: Doctype, head, body, sections',
        'Content organization: Header, Hero, Sections, Footer',
        'Modern CSS styling: Flexbox, Grid, CSS variables',
        'Responsive design: Media queries, mobile-first',
        'Optimization: Performance and SEO'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>The landing page is the first impression of a site. A well-designed page increases conversions and captures user attention.</p>
        <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&auto=format&fit=crop" alt="Landing page" class="w-full rounded-lg my-6" />
        
        <h2>1. Basic HTML Structure</h2>
        <p>Start with a semantic and well-organized HTML structure.</p>
        <ul>
          <li>Use semantic tags (header, nav, main, section, footer)</li>
          <li>Organize content logically</li>
          <li>Add alt attributes to images</li>
        </ul>
        
        <h2>2. Content Organization</h2>
        <p>Structure your landing page in clear sections.</p>
        <ul>
          <li><strong>Header:</strong> Navigation and logo</li>
          <li><strong>Hero:</strong> Main section with CTA</li>
          <li><strong>Sections:</strong> Content organized by theme</li>
          <li><strong>Footer:</strong> Additional information</li>
        </ul>
        
        <h2>3. Modern CSS Styling</h2>
        <p>Use Flexbox and Grid for modern layouts.</p>
        <ul>
          <li>Flexbox for alignments</li>
          <li>Grid for complex layouts</li>
          <li>CSS variables for consistency</li>
          <li>Subtle animations</li>
        </ul>
        
        <h2>4. Responsive Design and Mobile-First</h2>
        <p>Design first for mobile, then adapt for desktop.</p>
        <ul>
          <li>Media queries for breakpoints</li>
          <li>Responsive images</li>
          <li>Mobile-friendly navigation</li>
        </ul>
        
        <h2>5. Performance and SEO Optimization</h2>
        <p>Optimize for speed and search engine ranking.</p>
        <ul>
          <li>Minify CSS and JavaScript</li>
          <li>Optimize images</li>
          <li>SEO meta tags</li>
          <li>Structured data (Schema.org)</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>A modern and well-structured landing page is essential to engage visitors and improve conversion rate.</p>
      `,
      prerequisites: ['Basic HTML/CSS knowledge', 'Understanding of responsive design'],
      tools: ['Code editor (VS Code)', 'Web browser', 'Development tools'],
      nextSteps: [
        'Create your first HTML/CSS landing page',
        'Test responsiveness on different devices',
        'Optimize performance',
        'Add CSS animations'
      ]
    }
  },
  // Blog 17: React vs Vue vs Angular
  17: {
    fr: {
      domainExplanation: 'Le choix d\'un framework front-end impacte le développement et la maintenance d\'un projet. React, Vue et Angular offrent des avantages différents selon le contexte.',
      howToStart: 'Créez un projet simple dans chaque framework. Comparez la courbe d\'apprentissage. Testez les performances. Choisissez selon vos besoins.',
      essentialElements: [
        'React : Flexibilité, écosystème riche, grande communauté',
        'Vue : Simplicité, courbe d\'apprentissage douce',
        'Angular : Framework complet, idéal pour projets complexes',
        'Performance : Comparaison des vitesses de rendu',
        'Écosystème : Outils et bibliothèques disponibles'
      ],
      fullContent: `
        <h2>Introduction : Choisir le bon framework JavaScript en 2025</h2>
        <p>Le choix d'un framework front-end est l'une des décisions les plus importantes lors du démarrage d'un nouveau projet web. React, Vue et Angular sont les trois frameworks JavaScript dominants en 2025, chacun avec ses forces, faiblesses et cas d'usage idéaux. Ce guide complet vous aide à comprendre les différences fondamentales, comparer leurs performances, écosystèmes et courbes d'apprentissage pour faire le choix le plus adapté à votre projet, équipe et objectifs long terme.</p>
        <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&auto=format&fit=crop" alt="Frameworks JavaScript" class="w-full rounded-lg my-6" />
        
        <h2>1. React : La bibliothèque flexible et populaire</h2>
        <p>React, développé par Facebook/Meta, est actuellement le framework le plus populaire avec la plus grande communauté et le plus vaste écosystème.</p>
        
        <h3>Philosophie et approche</h3>
        <ul>
          <li><strong>Bibliothèque, pas framework :</strong> React se concentre uniquement sur la vue (UI)</li>
          <li><strong>Flexibilité maximale :</strong> Vous choisissez vos propres outils (routing, state management, etc.)</li>
          <li><strong>Component-based :</strong> Architecture basée sur composants réutilisables</li>
          <li><strong>Unidirectional data flow :</strong> Flux de données unidirectionnel prévisible</li>
        </ul>
        
        <h3>Avantages</h3>
        <ul>
          <li><strong>Écosystème immense :</strong> Plus de 2 millions de packages npm, librairies pour tout</li>
          <li><strong>Grande communauté :</strong> Documentation abondante, tutoriels, Stack Overflow</li>
          <li><strong>Flexibilité :</strong> Adaptable à presque tous les types de projets</li>
          <li><strong>Emploi :</strong> Plus d'offres d'emploi que ses concurrents</li>
          <li><strong>JSX :</strong> Syntaxe intuitive mélangeant HTML et JavaScript</li>
          <li><strong>Virtual DOM :</strong> Performance optimisée grâce au DOM virtuel</li>
          <li><strong>React Hooks :</strong> Gestion d'état moderne et simple depuis React 16.8</li>
          <li><strong>Ecosystem mature :</strong> Next.js (SSR), React Native (mobile), Gatsby (static sites)</li>
        </ul>
        
        <h3>Inconvénients</h3>
        <ul>
          <li><strong>Trop de choix :</strong> Peut être écrasant pour débutants (quel router ? quel state management ?)</li>
          <li><strong>Courbe d'apprentissage :</strong> Nécessite compréhension concepts (hooks, contexte, props, état)</li>
          <li><strong>Changements fréquents :</strong> Écosystème évolue rapidement (certaines librairies deviennent obsolètes)</li>
          <li><strong>Pas de structure imposée :</strong> Projets peuvent devenir désorganisés sans discipline</li>
          <li><strong>Bundle size :</strong> Peut être plus lourd que Vue pour petites applications</li>
        </ul>
        
        <h3>Cas d'usage idéaux</h3>
        <ul>
          <li>Applications web complexes et dynamiques</li>
          <li>Single Page Applications (SPA)</li>
          <li>Dashboards et interfaces admin</li>
          <li>Réseaux sociaux, e-commerce</li>
          <li>Équipes expérimentées appréciant la flexibilité</li>
          <li>Projets nécessitant React Native (mobile)</li>
        </ul>
        
        <h3>Exemple de code React</h3>
        <pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        Increment
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
        
        <h2>2. Vue.js : La simplicité et l'élégance</h2>
        <p>Vue.js, créé par Evan You, se distingue par sa simplicité, sa courbe d'apprentissage douce et sa documentation exceptionnelle.</p>
        
        <h3>Philosophie et approche</h3>
        <ul>
          <li><strong>Progressive :</strong> Adoptable progressivement (peut être intégré dans projets existants)</li>
          <li><strong>Approachable :</strong> Facile à apprendre, documentation claire</li>
          <li><strong>Versatile :</strong> Peut gérer projets simples et complexes</li>
          <li><strong>Opinionated mais flexible :</strong> Structure suggérée mais adaptable</li>
        </ul>
        
        <h3>Avantages</h3>
        <ul>
          <li><strong>Courbe d'apprentissage douce :</strong> Plus facile à maîtriser que React/Angular</li>
          <li><strong>Documentation excellente :</strong> Considérée comme la meilleure du marché</li>
          <li><strong>Performance :</strong> Bundle size plus petit, performances excellentes</li>
          <li><strong>Syntaxe intuitive :</strong> Templates similaires à HTML, facile à comprendre</li>
          <li><strong>Single File Components :</strong> HTML, CSS et JS dans un même fichier .vue</li>
          <li><strong>Réactivité intégrée :</strong> Système de réactivité puissant et automatique</li>
          <li><strong>Tooling intégré :</strong> Vue CLI et maintenant Vite intégrés</li>
          <li><strong>Écosystème en croissance :</strong> Nuxt.js pour SSR, Vue Router, Pinia pour state</li>
        </ul>
        
        <h3>Inconvénients</h3>
        <ul>
          <li><strong>Écosystème plus petit :</strong> Moins de packages que React</li>
          <li><strong>Moins d'emplois :</strong> Marché de l'emploi plus restreint (mais en croissance)</li>
          <li><strong>Popularité :</strong> Moins de ressources communautaires que React</li>
          <li><strong>Mobile :</strong> Pas d'équivalent React Native natif (mais solutions alternatives existent)</li>
          <li><strong>TypeScript :</strong> Support TypeScript moins mature que Angular (mais s'améliore)</li>
        </ul>
        
        <h3>Cas d'usage idéaux</h3>
        <ul>
          <li>Débutants en frameworks JavaScript</li>
          <li>Applications web de taille petite à moyenne</li>
          <li>Intégration dans projets existants</li>
          <li>Prototypage rapide</li>
          <li>Projets nécessitant développement rapide</li>
          <li>Équipes appréciant simplicité et productivité</li>
        </ul>
        
        <h3>Exemple de code Vue</h3>
        <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Count: {{ count }}&lt;/p&gt;
    &lt;button @click="increment"&gt;Increment&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const count = ref(0);
const increment = () =&gt; count.value++;
&lt;/script&gt;</code></pre>
        
        <h2>3. Angular : Le framework enterprise complet</h2>
        <p>Angular, développé par Google, est un framework complet et structuré, idéal pour grandes applications enterprise.</p>
        
        <h3>Philosophie et approche</h3>
        <ul>
          <li><strong>Framework complet :</strong> Tout est inclus (routing, HTTP, forms, etc.)</li>
          <li><strong>TypeScript first :</strong> Conçu pour TypeScript depuis le début</li>
          <li><strong>Opinionated :</strong> Structure et conventions imposées</li>
          <li><strong>Enterprise-ready :</strong> Conçu pour grandes équipes et projets complexes</li>
        </ul>
        
        <h3>Avantages</h3>
        <ul>
          <li><strong>TypeScript natif :</strong> Sécurité de types, meilleur autocomplete, moins d'erreurs</li>
          <li><strong>Structure claire :</strong> Conventions strictes facilitent collaboration équipe</li>
          <li><strong>Dependency Injection :</strong> Architecture modulaire et testable</li>
          <li><strong>CLI puissant :</strong> Angular CLI génère tout automatiquement</li>
          <li><strong>Documentation complète :</strong> Guide officiel très détaillé</li>
          <li><strong>Enterprise support :</strong> Support Google, idéal pour grandes organisations</li>
          <li><strong>Testing intégré :</strong> Karma/Jasmine configurés par défaut</li>
          <li><strong>RxJS :</strong> Programmation réactive puissante intégrée</li>
        </ul>
        
        <h3>Inconvénients</h3>
        <ul>
          <li><strong>Courbe d'apprentissage très raide :</strong> Plus difficile à maîtriser</li>
          <li><strong>Verbosité :</strong> Plus de code à écrire pour mêmes fonctionnalités</li>
          <li><strong>Bundle size :</strong> Plus lourd que React/Vue</li>
          <li><strong>Complexité :</strong> Peut être excessif pour projets simples</li>
          <li><strong>Breaking changes :</strong> Versions majeures avec changements importants</li>
          <li><strong>Moins flexible :</strong> Moins de liberté dans architecture</li>
        </ul>
        
        <h3>Cas d'usage idéaux</h3>
        <ul>
          <li>Applications enterprise complexes</li>
          <li>Grandes équipes nécessitant structure stricte</li>
          <li>Projets long terme avec maintenance importante</li>
          <li>Applications nécessitant TypeScript strict</li>
          <li>Organisations préférant framework "tout-en-un"</li>
          <li>Développeurs expérimentés appréciant structure</li>
        </ul>
        
        <h3>Exemple de code Angular</h3>
        <pre><code>import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    &lt;div&gt;
      &lt;p&gt;Count: {{ count }}&lt;/p&gt;
      &lt;button (click)="increment()"&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  \`
})
export class CounterComponent {
  count = 0;
  
  increment() {
    this.count++;
  }
}</code></pre>
        
        <h2>4. Comparaison détaillée : Performance, taille, vitesse</h2>
        
        <h3>Performance de rendu</h3>
        <ul>
          <li><strong>React :</strong> Virtual DOM efficace, optimisations avec React.memo, useMemo</li>
          <li><strong>Vue :</strong> Système de réactivité très optimisé, Virtual DOM plus léger</li>
          <li><strong>Angular :</strong> Change detection optimisée, Zone.js pour détection changements</li>
          <li><strong>Verdict :</strong> Les trois sont très performants, différences négligeables pour la plupart des apps</li>
        </ul>
        
        <h3>Taille du bundle</h3>
        <ul>
          <li><strong>React :</strong> ~42KB gzipped (React + ReactDOM)</li>
          <li><strong>Vue :</strong> ~34KB gzipped (plus léger)</li>
          <li><strong>Angular :</strong> ~143KB gzipped (plus lourd, mais framework complet)</li>
          <li><strong>Note :</strong> Bundle final dépend de vos dépendances, optimisation possible pour tous</li>
        </ul>
        
        <h3>Vitesse de développement</h3>
        <ul>
          <li><strong>React :</strong> Rapide une fois maîtrisé, mais choix d'outils peut ralentir</li>
          <li><strong>Vue :</strong> Très rapide, courbe d'apprentissage douce</li>
          <li><strong>Angular :</strong> Plus lent initialement (courbe d'apprentissage), mais productif ensuite</li>
        </ul>
        
        <h2>5. Écosystème et outils</h2>
        
        <h3>React Ecosystem</h3>
        <ul>
          <li><strong>Routing :</strong> React Router (le plus populaire), Next.js Router</li>
          <li><strong>State Management :</strong> Redux, Zustand, Recoil, Context API</li>
          <li><strong>UI Libraries :</strong> Material-UI, Ant Design, Chakra UI, Tailwind CSS</li>
          <li><strong>SSR/SSG :</strong> Next.js, Gatsby, Remix</li>
          <li><strong>Mobile :</strong> React Native</li>
          <li><strong>Testing :</strong> Jest, React Testing Library, Cypress</li>
        </ul>
        
        <h3>Vue Ecosystem</h3>
        <ul>
          <li><strong>Routing :</strong> Vue Router (officiel)</li>
          <li><strong>State Management :</strong> Pinia (officiel, remplace Vuex), Vuex</li>
          <li><strong>UI Libraries :</strong> Vuetify, Quasar, Element Plus, Tailwind CSS</li>
          <li><strong>SSR/SSG :</strong> Nuxt.js</li>
          <li><strong>Mobile :</strong> NativeScript-Vue, Quasar (cross-platform)</li>
          <li><strong>Testing :</strong> Vitest, Vue Test Utils, Cypress</li>
        </ul>
        
        <h3>Angular Ecosystem</h3>
        <ul>
          <li><strong>Routing :</strong> Angular Router (intégré)</li>
          <li><strong>State Management :</strong> NgRx, RxJS, Services</li>
          <li><strong>UI Libraries :</strong> Angular Material, PrimeNG, ng-bootstrap</li>
          <li><strong>SSR :</strong> Angular Universal</li>
          <li><strong>Mobile :</strong> Ionic, NativeScript</li>
          <li><strong>Testing :</strong> Jasmine, Karma, Protractor (intégrés)</li>
        </ul>
        
        <h2>6. Marché de l'emploi et tendances 2025</h2>
        
        <h3>Demande d'emploi (globale)</h3>
        <ul>
          <li><strong>React :</strong> ~65% des offres front-end (leader clair)</li>
          <li><strong>Angular :</strong> ~20% des offres (fort en enterprise)</li>
          <li><strong>Vue :</strong> ~15% des offres (en croissance)</li>
        </ul>
        
        <h3>Salaire moyen (approximatif, varie selon région)</h3>
        <ul>
          <li><strong>React :</strong> Très compétitif, forte demande</li>
          <li><strong>Angular :</strong> Souvent plus élevé (enterprise, expérience requise)</li>
          <li><strong>Vue :</strong> Croissance, opportunités intéressantes</li>
        </ul>
        
        <h2>7. Tableau comparatif synthétique</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background-color: #1f2937; color: white;">
              <th style="padding: 12px; border: 1px solid #374151;">Critère</th>
              <th style="padding: 12px; border: 1px solid #374151;">React</th>
              <th style="padding: 12px; border: 1px solid #374151;">Vue</th>
              <th style="padding: 12px; border: 1px solid #374151;">Angular</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Type</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Bibliothèque</td>
              <td style="padding: 12px; border: 1px solid #374151;">Framework progressif</td>
              <td style="padding: 12px; border: 1px solid #374151;">Framework complet</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Courbe d'apprentissage</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Moyenne</td>
              <td style="padding: 12px; border: 1px solid #374151;">Douce</td>
              <td style="padding: 12px; border: 1px solid #374151;">Raide</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Flexibilité</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Très élevée</td>
              <td style="padding: 12px; border: 1px solid #374151;">Élevée</td>
              <td style="padding: 12px; border: 1px solid #374151;">Moyenne</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Taille bundle</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Moyenne (~42KB)</td>
              <td style="padding: 12px; border: 1px solid #374151;">Petite (~34KB)</td>
              <td style="padding: 12px; border: 1px solid #374151;">Grande (~143KB)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Écosystème</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Immense</td>
              <td style="padding: 12px; border: 1px solid #374151;">En croissance</td>
              <td style="padding: 12px; border: 1px solid #374151;">Enterprise</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>TypeScript</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Optionnel (bon support)</td>
              <td style="padding: 12px; border: 1px solid #374151;">Optionnel (s'améliore)</td>
              <td style="padding: 12px; border: 1px solid #374151;">Natif/Requis</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Mobile</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">React Native</td>
              <td style="padding: 12px; border: 1px solid #374151;">NativeScript, Quasar</td>
              <td style="padding: 12px; border: 1px solid #374151;">Ionic, NativeScript</td>
            </tr>
          </tbody>
        </table>
        
        <h2>8. Guide de décision : Quel framework choisir ?</h2>
        
        <h3>Choisissez React si :</h3>
        <ul>
          <li>Vous voulez la plus grande communauté et ressources</li>
          <li>Vous appréciez la flexibilité et choix d'outils</li>
          <li>Vous planifiez développement mobile (React Native)</li>
          <li>Vous travaillez dans startup/scale-up moderne</li>
          <li>Vous cherchez maximum d'opportunités d'emploi</li>
        </ul>
        
        <h3>Choisissez Vue si :</h3>
        <ul>
          <li>Vous êtes débutant en frameworks JavaScript</li>
          <li>Vous voulez apprendre rapidement et être productif</li>
          <li>Vous travaillez sur projets de taille petite à moyenne</li>
          <li>Vous intégrez dans projet existant</li>
          <li>Vous appréciez documentation claire et approche progressive</li>
        </ul>
        
        <h3>Choisissez Angular si :</h3>
        <ul>
          <li>Vous travaillez en environnement enterprise</li>
          <li>Vous avez une grande équipe nécessitant structure stricte</li>
          <li>Vous préférez TypeScript strict et sécurité de types</li>
          <li>Vous développez application complexe long terme</li>
          <li>Vous appréciez framework "tout-en-un" avec moins de choix</li>
        </ul>
        
        <h2>9. Apprendre les trois : Est-ce nécessaire ?</h2>
        <p>Non, pas nécessairement. Il vaut mieux maîtriser un framework en profondeur que de connaître les trois superficiellement. Cependant :</p>
        <ul>
          <li><strong>Avantages :</strong> Comprendre différentes approches, adaptabilité, meilleure compréhension écosystème</li>
          <li><strong>Inconvénients :</strong> Temps investi, risque de confusion entre syntaxes</li>
          <li><strong>Recommandation :</strong> Maîtrisez-en un d'abord, puis explorez les autres si besoin</li>
        </ul>
        
        <h2>10. Alternatives émergentes (2025)</h2>
        <ul>
          <li><strong>Svelte :</strong> Compile en JavaScript vanilla, très performant</li>
          <li><strong>Solid.js :</strong> Syntaxe React-like mais plus performant</li>
          <li><strong>Qwik :</strong> Résume à zéro JavaScript initial, ultra-rapide</li>
          <li><strong>Note :</strong> Moins mature, mais intéressants pour projets spécifiques</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Il n'y a pas de "meilleur" framework - seulement le meilleur pour votre situation spécifique. React offre flexibilité et écosystème immense, Vue simplifie le développement avec courbe d'apprentissage douce, et Angular fournit structure solide pour projets enterprise complexes. En 2025, tous les trois sont excellents choix, matures et bien maintenus. Le meilleur framework est celui que vous et votre équipe maîtrisez le mieux et qui répond à vos besoins spécifiques. Commencez par un, apprenez-le en profondeur, et n'hésitez pas à explorer les autres si votre projet l'exige. L'important est de créer de la valeur pour vos utilisateurs, peu importe l'outil utilisé.</p>
      `,
      prerequisites: ['Connaissances en JavaScript', 'Compréhension des frameworks front-end'],
      tools: ['Node.js', 'npm ou yarn', 'Éditeur de code'],
      nextSteps: [
        'Créez un projet simple dans chaque framework',
        'Comparez la courbe d\'apprentissage',
        'Testez les performances',
        'Choisissez selon vos besoins'
      ]
    },
    ar: {
      domainExplanation: 'اختيار إطار عمل front-end يؤثر على التطوير والصيانة. React و Vue و Angular تقدم مزايا مختلفة حسب السياق.',
      howToStart: 'أنشئ مشروعًا بسيطًا في كل إطار عمل. قارن منحنى التعلم. اختبر الأداء. اختر حسب احتياجاتك.',
      essentialElements: [
        'React: المرونة، نظام بيئي غني، مجتمع كبير',
        'Vue: البساطة، منحنى تعلم سلس',
        'Angular: إطار عمل كامل، مثالي للمشاريع المعقدة',
        'الأداء: مقارنة سرعات العرض',
        'النظام البيئي: الأدوات والمكتبات المتاحة'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>اختيار إطار عمل front-end يؤثر على التطوير والصيانة. React و Vue و Angular تقدم مزايا مختلفة.</p>
        <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&auto=format&fit=crop" alt="أطر عمل JavaScript" class="w-full rounded-lg my-6" />
        
        <h2>١. React</h2>
        <p>React مكتبة مرنة وشائعة.</p>
        <ul>
          <li>المزايا: المرونة، نظام بيئي غني</li>
          <li>العيوب: الكثير من الخيارات</li>
        </ul>
        
        <h2>٢. Vue</h2>
        <p>Vue بسيط وتقدمي.</p>
        <ul>
          <li>المزايا: البساطة، منحنى تعلم سلس</li>
        </ul>
        
        <h2>٣. Angular</h2>
        <p>Angular إطار عمل كامل ومنظم.</p>
        <ul>
          <li>المزايا: إطار عمل كامل، TypeScript أصلي</li>
        </ul>
        
        <h2>الخلاصة</h2>
        <p>الاختيار يعتمد على المشروع: React للمرونة، Angular للمشاريع المعقدة، Vue للتطبيقات البسيطة.</p>
      `,
      prerequisites: ['معرفة JavaScript', 'فهم أطر عمل front-end'],
      tools: ['Node.js', 'npm أو yarn', 'محرر الكود'],
      nextSteps: [
        'أنشئ مشروعًا بسيطًا في كل إطار عمل',
        'قارن منحنى التعلم',
        'اختر حسب احتياجاتك'
      ]
    },
    en: {
      domainExplanation: 'The choice of a front-end framework impacts development and maintenance of a project. React, Vue, and Angular offer different advantages depending on context.',
      howToStart: 'Create a simple project in each framework. Compare learning curve. Test performance. Choose according to your needs.',
      essentialElements: [
        'React: Flexibility, rich ecosystem, large community',
        'Vue: Simplicity, gentle learning curve',
        'Angular: Complete framework, ideal for complex projects',
        'Performance: Rendering speed comparison',
        'Ecosystem: Available tools and libraries'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>The choice of a front-end framework impacts development and maintenance of a project. React, Vue, and Angular offer different advantages depending on context.</p>
        <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&auto=format&fit=crop" alt="JavaScript Frameworks" class="w-full rounded-lg my-6" />
        
        <h2>1. React</h2>
        <p>React is a flexible and popular library.</p>
        <ul>
          <li><strong>Advantages:</strong> Flexibility, rich ecosystem, large community</li>
          <li><strong>Disadvantages:</strong> Many choices to make, learning curve</li>
          <li><strong>Ideal for:</strong> Flexible projects, experienced teams</li>
        </ul>
        
        <h2>2. Vue</h2>
        <p>Vue is simple and progressive.</p>
        <ul>
          <li><strong>Advantages:</strong> Simplicity, gentle learning curve, excellent documentation</li>
          <li><strong>Disadvantages:</strong> Smaller ecosystem than React</li>
          <li><strong>Ideal for:</strong> Simple to medium projects, beginners</li>
        </ul>
        
        <h2>3. Angular</h2>
        <p>Angular is a complete and structured framework.</p>
        <ul>
          <li><strong>Advantages:</strong> Complete framework, native TypeScript, ideal for complex projects</li>
          <li><strong>Disadvantages:</strong> Steep learning curve, more verbose</li>
          <li><strong>Ideal for:</strong> Enterprise projects, large teams</li>
        </ul>
        
        <h2>4. Performance Comparison</h2>
        <p>All three frameworks offer excellent performance.</p>
        <ul>
          <li>React: Efficient Virtual DOM</li>
          <li>Vue: Optimized reactivity</li>
          <li>Angular: Optimized change detection</li>
        </ul>
        
        <h2>5. Ecosystem and Community</h2>
        <p>Each framework has its ecosystem.</p>
        <ul>
          <li>React: Largest ecosystem</li>
          <li>Vue: Growing ecosystem</li>
          <li>Angular: Enterprise ecosystem</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The choice depends on the project: React for flexibility, Angular for complex projects, Vue for simple and lightweight applications.</p>
      `,
      prerequisites: ['JavaScript knowledge', 'Understanding of front-end frameworks'],
      tools: ['Node.js', 'npm or yarn', 'Code editor'],
      nextSteps: [
        'Create a simple project in each framework',
        'Compare learning curve',
        'Test performance',
        'Choose according to your needs'
      ]
    }
  },
  // Blog 18: Les bases de Node.js et Express
  18: {
    fr: {
      domainExplanation: 'Node.js et Express permettent de créer rapidement des APIs performantes et scalables. Comprendre les bases est essentiel pour tout développeur backend.',
      howToStart: 'Installez Node.js depuis nodejs.org. Créez votre premier projet avec npm init. Installez Express avec npm install express. Créez un fichier server.js.',
      essentialElements: [
        'Installation Node.js : Télécharger et configurer l\'environnement',
        'Création serveur Express : App de base avec routes',
        'Gestion routes : GET, POST, PUT, DELETE',
        'Middlewares : Authentification, CORS, parsing',
        'Base de données : Connexion MongoDB/PostgreSQL',
        'Tests : Tests unitaires et d\'intégration'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Node.js et Express permettent de créer rapidement des APIs performantes et scalables. Comprendre les bases est essentiel pour tout développeur backend.</p>
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop" alt="Node.js Express" class="w-full rounded-lg my-6" />
        
        <h2>1. Installation et configuration de Node.js</h2>
        <p>Commencez par installer Node.js sur votre machine.</p>
        <ul>
          <li>Téléchargez depuis nodejs.org</li>
          <li>Vérifiez l'installation avec <code>node --version</code></li>
          <li>Initialisez un projet avec <code>npm init</code></li>
        </ul>
        
        <h2>2. Création d'un serveur Express</h2>
        <p>Créez votre premier serveur Express.</p>
        <pre><code>const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});</code></pre>
        
        <h2>3. Gestion des routes et middlewares</h2>
        <p>Organisez vos routes et utilisez des middlewares.</p>
        <ul>
          <li>Routes RESTful (GET, POST, PUT, DELETE)</li>
          <li>Middlewares pour parsing JSON</li>
          <li>Gestion CORS</li>
          <li>Authentification JWT</li>
        </ul>
        
        <h2>4. Connexion à une base de données</h2>
        <p>Connectez votre API à une base de données.</p>
        <ul>
          <li>MongoDB avec Mongoose</li>
          <li>PostgreSQL avec pg</li>
          <li>MySQL avec mysql2</li>
        </ul>
        
        <h2>5. Test et documentation de l'API</h2>
        <p>Testez et documentez votre API.</p>
        <ul>
          <li>Tests avec Jest ou Mocha</li>
          <li>Documentation avec Swagger</li>
          <li>Postman pour tester manuellement</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Maîtriser Node.js et Express permet de construire des APIs robustes et modulables pour tout type de projet web.</p>
      `,
      prerequisites: ['Connaissances en JavaScript', 'Compréhension des bases de HTTP'],
      tools: ['Node.js', 'npm', 'Express.js', 'Éditeur de code', 'Postman'],
      nextSteps: [
        'Créez votre première API REST',
        'Intégrez une base de données',
        'Implémentez l\'authentification',
        'Testez votre API',
        'Déployez sur un serveur'
      ]
    },
    ar: {
      domainExplanation: 'Node.js و Express يسمحان بإنشاء APIs عالية الأداء وقابلة للتوسع بسرعة. فهم الأساسيات ضروري لأي مطور backend.',
      howToStart: 'قم بتثبيت Node.js من nodejs.org. أنشئ مشروعك الأول باستخدام npm init. قم بتثبيت Express باستخدام npm install express. أنشئ ملف server.js.',
      essentialElements: [
        'تثبيت Node.js: تنزيل وتكوين البيئة',
        'إنشاء خادم Express: تطبيق أساسي مع مسارات',
        'إدارة المسارات: GET، POST، PUT، DELETE',
        'Middlewares: المصادقة، CORS، التحليل',
        'قاعدة البيانات: اتصال MongoDB/PostgreSQL',
        'الاختبارات: اختبارات الوحدة والتكامل'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>Node.js و Express يسمحان بإنشاء APIs عالية الأداء بسرعة. فهم الأساسيات ضروري.</p>
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop" alt="Node.js Express" class="w-full rounded-lg my-6" />
        
        <h2>١. تثبيت وتكوين Node.js</h2>
        <p>ابدأ بتثبيت Node.js على جهازك.</p>
        
        <h2>٢. إنشاء خادم Express</h2>
        <p>أنشئ خادم Express الأول الخاص بك.</p>
        
        <h2>٣. إدارة المسارات و Middlewares</h2>
        <p>نظم مساراتك واستخدم middlewares.</p>
        
        <h2>٤. الاتصال بقاعدة البيانات</h2>
        <p>اتصل API الخاص بك بقاعدة بيانات.</p>
        
        <h2>٥. اختبار وتوثيق API</h2>
        <p>اختبر ووثّق API الخاص بك.</p>
        
        <h2>الخلاصة</h2>
        <p>إتقان Node.js و Express يسمح ببناء APIs قوية ومرنة لأي نوع من مشاريع الويب.</p>
      `,
      prerequisites: ['معرفة JavaScript', 'فهم أساسيات HTTP'],
      tools: ['Node.js', 'npm', 'Express.js', 'محرر الكود', 'Postman'],
      nextSteps: [
        'أنشئ أول API REST',
        'قم بدمج قاعدة بيانات',
        'نفذ المصادقة',
        'اختبر API الخاص بك'
      ]
    },
    en: {
      domainExplanation: 'Node.js and Express allow quickly creating performant and scalable APIs. Understanding the basics is essential for any backend developer.',
      howToStart: 'Install Node.js from nodejs.org. Create your first project with npm init. Install Express with npm install express. Create a server.js file.',
      essentialElements: [
        'Node.js Installation: Download and configure environment',
        'Express Server Creation: Basic app with routes',
        'Route Management: GET, POST, PUT, DELETE',
        'Middlewares: Authentication, CORS, parsing',
        'Database: MongoDB/PostgreSQL connection',
        'Testing: Unit and integration tests'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Node.js and Express allow quickly creating performant and scalable APIs. Understanding the basics is essential for any backend developer.</p>
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop" alt="Node.js Express" class="w-full rounded-lg my-6" />
        
        <h2>1. Node.js Installation and Configuration</h2>
        <p>Start by installing Node.js on your machine.</p>
        <ul>
          <li>Download from nodejs.org</li>
          <li>Verify installation with <code>node --version</code></li>
          <li>Initialize a project with <code>npm init</code></li>
        </ul>
        
        <h2>2. Creating an Express Server</h2>
        <p>Create your first Express server.</p>
        <pre><code>const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});</code></pre>
        
        <h2>3. Route and Middleware Management</h2>
        <p>Organize your routes and use middlewares.</p>
        <ul>
          <li>RESTful routes (GET, POST, PUT, DELETE)</li>
          <li>Middlewares for JSON parsing</li>
          <li>CORS management</li>
          <li>JWT authentication</li>
        </ul>
        
        <h2>4. Database Connection</h2>
        <p>Connect your API to a database.</p>
        <ul>
          <li>MongoDB with Mongoose</li>
          <li>PostgreSQL with pg</li>
          <li>MySQL with mysql2</li>
        </ul>
        
        <h2>5. API Testing and Documentation</h2>
        <p>Test and document your API.</p>
        <ul>
          <li>Tests with Jest or Mocha</li>
          <li>Documentation with Swagger</li>
          <li>Postman for manual testing</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Mastering Node.js and Express allows building robust and modular APIs for any type of web project.</p>
      `,
      prerequisites: ['JavaScript knowledge', 'Understanding of HTTP basics'],
      tools: ['Node.js', 'npm', 'Express.js', 'Code editor', 'Postman'],
      nextSteps: [
        'Create your first REST API',
        'Integrate a database',
        'Implement authentication',
        'Test your API',
        'Deploy on a server'
      ]
    }
  },
  // Blog 19: Comment intégrer une base de données
  19: {
    fr: {
      domainExplanation: 'Une base de données permet de stocker, organiser et récupérer des informations efficacement. L\'intégration est cruciale pour un site dynamique.',
      howToStart: 'Choisissez votre type de base de données (SQL ou NoSQL). Installez le serveur de base de données. Installez le driver/ORM pour votre langage. Créez votre première connexion.',
      essentialElements: [
        'Choix du type : SQL (relationnel) vs NoSQL (document, clé-valeur)',
        'Connexion MongoDB : Driver Mongoose pour Node.js',
        'Connexion MySQL/PostgreSQL : Drivers et ORMs',
        'Modélisation : Schémas et relations',
        'Requêtes CRUD : Create, Read, Update, Delete',
        'Sécurité : Validation, sanitization, injection SQL'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Une base de données permet de stocker, organiser et récupérer des informations efficacement. L'intégration est cruciale pour un site dynamique.</p>
        <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&auto=format&fit=crop" alt="Base de données" class="w-full rounded-lg my-6" />
        
        <h2>1. Choix du type de base de données (SQL vs NoSQL)</h2>
        <p>Choisissez selon vos besoins.</p>
        <ul>
          <li><strong>SQL :</strong> Données structurées, relations complexes</li>
          <li><strong>NoSQL :</strong> Données flexibles, scalabilité horizontale</li>
        </ul>
        
        <h2>2. Connexion à MongoDB</h2>
        <p>MongoDB est une base NoSQL populaire.</p>
        <pre><code>const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');</code></pre>
        
        <h2>3. Connexion à MySQL/PostgreSQL</h2>
        <p>Les bases SQL relationnelles offrent la structure.</p>
        <ul>
          <li>MySQL avec mysql2</li>
          <li>PostgreSQL avec pg</li>
          <li>ORMs : Sequelize, TypeORM</li>
        </ul>
        
        <h2>4. Modélisation des données et schéma</h2>
        <p>Créez vos modèles de données.</p>
        <ul>
          <li>Définissez vos entités</li>
          <li>Créez les relations</li>
          <li>Validez les données</li>
        </ul>
        
        <h2>5. Requêtes CRUD</h2>
        <p>Maîtrisez les opérations de base.</p>
        <ul>
          <li><strong>Create :</strong> Insérer des données</li>
          <li><strong>Read :</strong> Lire des données</li>
          <li><strong>Update :</strong> Mettre à jour</li>
          <li><strong>Delete :</strong> Supprimer</li>
        </ul>
        
        <h2>6. Sécurité et optimisation</h2>
        <p>Protégez et optimisez votre base de données.</p>
        <ul>
          <li>Validation des entrées</li>
          <li>Protection contre injection SQL</li>
          <li>Index pour les performances</li>
          <li>Backup réguliers</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Intégrer correctement une base de données améliore la performance, la sécurité et la scalabilité du projet.</p>
      `,
      prerequisites: ['Connaissances de base en bases de données', 'Compréhension des modèles de données'],
      tools: ['MongoDB ou MySQL/PostgreSQL', 'Driver/ORM approprié', 'Éditeur de code'],
      nextSteps: [
        'Choisissez votre type de base de données',
        'Installez et configurez la base',
        'Créez votre premier modèle',
        'Implémentez les opérations CRUD',
        'Testez et optimisez'
      ]
    },
    ar: {
      domainExplanation: 'قاعدة البيانات تسمح بتخزين وتنظيم واسترجاع المعلومات بفعالية. التكامل أمر حاسم للموقع الديناميكي.',
      howToStart: 'اختر نوع قاعدة البيانات (SQL أو NoSQL). قم بتثبيت خادم قاعدة البيانات. قم بتثبيت السائق/ORM للغتك. أنشئ أول اتصال.',
      essentialElements: [
        'اختيار النوع: SQL (علائقي) vs NoSQL (وثيقة، مفتاح-قيمة)',
        'اتصال MongoDB: سائق Mongoose لـ Node.js',
        'اتصال MySQL/PostgreSQL: السواق و ORMs',
        'النمذجة: المخططات والعلاقات',
        'استعلامات CRUD: إنشاء، قراءة، تحديث، حذف',
        'الأمان: التحقق، التنظيف، حقن SQL'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>قاعدة البيانات تسمح بتخزين وتنظيم المعلومات بفعالية. التكامل أمر حاسم.</p>
        <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&auto=format&fit=crop" alt="قاعدة البيانات" class="w-full rounded-lg my-6" />
        
        <h2>١. اختيار نوع قاعدة البيانات</h2>
        <p>اختر حسب احتياجاتك.</p>
        
        <h2>٢. الاتصال بـ MongoDB</h2>
        <p>MongoDB قاعدة NoSQL شائعة.</p>
        
        <h2>٣. الاتصال بـ MySQL/PostgreSQL</h2>
        <p>قواعد SQL العلائقية توفر البنية.</p>
        
        <h2>٤. نمذجة البيانات</h2>
        <p>أنشئ نماذج البيانات الخاصة بك.</p>
        
        <h2>٥. استعلامات CRUD</h2>
        <p>أتقن العمليات الأساسية.</p>
        
        <h2>٦. الأمان والتحسين</h2>
        <p>احمِ وحسّن قاعدة البيانات الخاصة بك.</p>
        
        <h2>الخلاصة</h2>
        <p>تكامل قاعدة البيانات بشكل صحيح يحسن الأداء والأمان وقابلية التوسع.</p>
      `,
      prerequisites: ['معرفة أساسية بقواعد البيانات', 'فهم نماذج البيانات'],
      tools: ['MongoDB أو MySQL/PostgreSQL', 'سائق/ORM مناسب', 'محرر الكود'],
      nextSteps: [
        'اختر نوع قاعدة البيانات',
        'قم بتثبيت وتكوين القاعدة',
        'أنشئ أول نموذج',
        'نفذ عمليات CRUD'
      ]
    },
    en: {
      domainExplanation: 'A database allows storing, organizing, and retrieving information efficiently. Integration is crucial for a dynamic site.',
      howToStart: 'Choose your database type (SQL or NoSQL). Install the database server. Install the driver/ORM for your language. Create your first connection.',
      essentialElements: [
        'Type choice: SQL (relational) vs NoSQL (document, key-value)',
        'MongoDB connection: Mongoose driver for Node.js',
        'MySQL/PostgreSQL connection: Drivers and ORMs',
        'Modeling: Schemas and relations',
        'CRUD queries: Create, Read, Update, Delete',
        'Security: Validation, sanitization, SQL injection'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>A database allows storing, organizing, and retrieving information efficiently. Integration is crucial for a dynamic site.</p>
        <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&auto=format&fit=crop" alt="Database" class="w-full rounded-lg my-6" />
        
        <h2>1. Database Type Choice (SQL vs NoSQL)</h2>
        <p>Choose according to your needs.</p>
        <ul>
          <li><strong>SQL:</strong> Structured data, complex relations</li>
          <li><strong>NoSQL:</strong> Flexible data, horizontal scalability</li>
        </ul>
        
        <h2>2. MongoDB Connection</h2>
        <p>MongoDB is a popular NoSQL database.</p>
        <pre><code>const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');</code></pre>
        
        <h2>3. MySQL/PostgreSQL Connection</h2>
        <p>Relational SQL databases offer structure.</p>
        <ul>
          <li>MySQL with mysql2</li>
          <li>PostgreSQL with pg</li>
          <li>ORMs: Sequelize, TypeORM</li>
        </ul>
        
        <h2>4. Data Modeling and Schema</h2>
        <p>Create your data models.</p>
        <ul>
          <li>Define your entities</li>
          <li>Create relations</li>
          <li>Validate data</li>
        </ul>
        
        <h2>5. CRUD Queries</h2>
        <p>Master basic operations.</p>
        <ul>
          <li><strong>Create:</strong> Insert data</li>
          <li><strong>Read:</strong> Read data</li>
          <li><strong>Update:</strong> Update</li>
          <li><strong>Delete:</strong> Delete</li>
        </ul>
        
        <h2>6. Security and Optimization</h2>
        <p>Protect and optimize your database.</p>
        <ul>
          <li>Input validation</li>
          <li>SQL injection protection</li>
          <li>Indexes for performance</li>
          <li>Regular backups</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Properly integrating a database improves performance, security, and project scalability.</p>
      `,
      prerequisites: ['Basic database knowledge', 'Understanding of data models'],
      tools: ['MongoDB or MySQL/PostgreSQL', 'Appropriate driver/ORM', 'Code editor'],
      nextSteps: [
        'Choose your database type',
        'Install and configure database',
        'Create your first model',
        'Implement CRUD operations',
        'Test and optimize'
      ]
    }
  },
  // Blog 20: CI/CD simple pour débutant
  20: {
    fr: {
      domainExplanation: 'CI/CD automatise le test et le déploiement des applications, réduisant les erreurs humaines et accélérant la livraison.',
      howToStart: 'Créez un compte GitHub. Créez un repository pour votre projet. Créez un fichier .github/workflows/ci.yml. Configurez votre premier workflow.',
      essentialElements: [
        'Introduction CI/CD : Concepts de base',
        'Configuration GitHub Actions : Fichiers YAML',
        'Déploiement automatique : Sur serveur ou cloud',
        'Tests automatisés : Exécution des tests à chaque push',
        'Notifications : Alertes par email ou Slack'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>CI/CD automatise le test et le déploiement des applications, réduisant les erreurs humaines et accélérant la livraison.</p>
        <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&auto=format&fit=crop" alt="CI/CD" class="w-full rounded-lg my-6" />
        
        <h2>1. Introduction à CI/CD et pipelines</h2>
        <p>CI/CD signifie Continuous Integration / Continuous Deployment.</p>
        <ul>
          <li><strong>CI :</strong> Intégration continue - tests automatiques</li>
          <li><strong>CD :</strong> Déploiement continu - déploiement automatique</li>
          <li>Pipeline : Séquence d'étapes automatisées</li>
        </ul>
        
        <h2>2. Configuration de GitHub Actions</h2>
        <p>GitHub Actions est intégré à GitHub.</p>
        <pre><code>name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test</code></pre>
        
        <h2>3. Déploiement automatique</h2>
        <p>Déployez automatiquement sur votre serveur ou cloud.</p>
        <ul>
          <li>Vercel pour les sites statiques</li>
          <li>Heroku pour les apps Node.js</li>
          <li>Serveur VPS avec SSH</li>
        </ul>
        
        <h2>4. Tests automatisés et notifications</h2>
        <p>Exécutez les tests à chaque push.</p>
        <ul>
          <li>Tests unitaires</li>
          <li>Tests d'intégration</li>
          <li>Notifications par email</li>
          <li>Alertes Slack</li>
        </ul>
        
        <h2>5. Bonnes pratiques</h2>
        <p>Suivez ces bonnes pratiques pour un CI/CD efficace.</p>
        <ul>
          <li>Tests rapides et fiables</li>
          <li>Environnements de staging</li>
          <li>Rollback automatique en cas d'erreur</li>
          <li>Documentation du pipeline</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>CI/CD simplifie la gestion du code, garantit la qualité et accélère le cycle de développement.</p>
      `,
      prerequisites: ['Connaissances de base en Git', 'Compte GitHub'],
      tools: ['GitHub', 'Git', 'Éditeur de code'],
      nextSteps: [
        'Créez votre premier workflow GitHub Actions',
        'Configurez les tests automatisés',
        'Mettez en place le déploiement automatique',
        'Configurez les notifications'
      ]
    },
    ar: {
      domainExplanation: 'CI/CD يؤتمت اختبار ونشر التطبيقات، مما يقلل الأخطاء البشرية ويسرع التسليم.',
      howToStart: 'أنشئ حساب GitHub. أنشئ مستودعًا لمشروعك. أنشئ ملف .github/workflows/ci.yml. قم بتكوين أول workflow.',
      essentialElements: [
        'مقدمة CI/CD: المفاهيم الأساسية',
        'تكوين GitHub Actions: ملفات YAML',
        'النشر التلقائي: على خادم أو سحابة',
        'الاختبارات المؤتمتة: تنفيذ الاختبارات عند كل push',
        'الإشعارات: تنبيهات عبر البريد الإلكتروني أو Slack'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>CI/CD يؤتمت اختبار ونشر التطبيقات، مما يقلل الأخطاء ويسرع التسليم.</p>
        <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&auto=format&fit=crop" alt="CI/CD" class="w-full rounded-lg my-6" />
        
        <h2>١. مقدمة CI/CD</h2>
        <p>CI/CD يعني التكامل المستمر / النشر المستمر.</p>
        
        <h2>٢. تكوين GitHub Actions</h2>
        <p>GitHub Actions مدمج في GitHub.</p>
        
        <h2>٣. النشر التلقائي</h2>
        <p>انشر تلقائيًا على خادمك أو السحابة.</p>
        
        <h2>٤. الاختبارات والإشعارات</h2>
        <p>نفذ الاختبارات عند كل push.</p>
        
        <h2>٥. أفضل الممارسات</h2>
        <p>اتبع أفضل الممارسات لـ CI/CD فعال.</p>
        
        <h2>الخلاصة</h2>
        <p>CI/CD يبسط إدارة الكود، يضمن الجودة ويسرع دورة التطوير.</p>
      `,
      prerequisites: ['معرفة أساسية بـ Git', 'حساب GitHub'],
      tools: ['GitHub', 'Git', 'محرر الكود'],
      nextSteps: [
        'أنشئ أول workflow GitHub Actions',
        'قم بتكوين الاختبارات المؤتمتة',
        'أنشئ النشر التلقائي'
      ]
    },
    en: {
      domainExplanation: 'CI/CD automates testing and deployment of applications, reducing human errors and accelerating delivery.',
      howToStart: 'Create a GitHub account. Create a repository for your project. Create a .github/workflows/ci.yml file. Configure your first workflow.',
      essentialElements: [
        'CI/CD Introduction: Basic concepts',
        'GitHub Actions Configuration: YAML files',
        'Automatic Deployment: On server or cloud',
        'Automated Tests: Run tests on each push',
        'Notifications: Email or Slack alerts'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>CI/CD automates testing and deployment of applications, reducing human errors and accelerating delivery.</p>
        <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&auto=format&fit=crop" alt="CI/CD" class="w-full rounded-lg my-6" />
        
        <h2>1. CI/CD and Pipelines Introduction</h2>
        <p>CI/CD means Continuous Integration / Continuous Deployment.</p>
        <ul>
          <li><strong>CI:</strong> Continuous Integration - automated tests</li>
          <li><strong>CD:</strong> Continuous Deployment - automated deployment</li>
          <li>Pipeline: Sequence of automated steps</li>
        </ul>
        
        <h2>2. GitHub Actions Configuration</h2>
        <p>GitHub Actions is integrated into GitHub.</p>
        <pre><code>name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test</code></pre>
        
        <h2>3. Automatic Deployment</h2>
        <p>Deploy automatically to your server or cloud.</p>
        <ul>
          <li>Vercel for static sites</li>
          <li>Heroku for Node.js apps</li>
          <li>VPS server with SSH</li>
        </ul>
        
        <h2>4. Automated Tests and Notifications</h2>
        <p>Run tests on each push.</p>
        <ul>
          <li>Unit tests</li>
          <li>Integration tests</li>
          <li>Email notifications</li>
          <li>Slack alerts</li>
        </ul>
        
        <h2>5. Best Practices</h2>
        <p>Follow these best practices for effective CI/CD.</p>
        <ul>
          <li>Fast and reliable tests</li>
          <li>Staging environments</li>
          <li>Automatic rollback on error</li>
          <li>Pipeline documentation</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>CI/CD simplifies code management, ensures quality, and accelerates the development cycle.</p>
      `,
      prerequisites: ['Basic Git knowledge', 'GitHub account'],
      tools: ['GitHub', 'Git', 'Code editor'],
      nextSteps: [
        'Create your first GitHub Actions workflow',
        'Configure automated tests',
        'Set up automatic deployment',
        'Configure notifications'
      ]
    }
  }
}

export default webdevTranslations


