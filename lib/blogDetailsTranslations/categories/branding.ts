// Branding category translations (Blogs 41-45)
import { BlogTranslations } from '../types'

const brandingTranslations: BlogTranslations = {
  // Blog 41: Identité visuelle
  41: {
    fr: {
      domainExplanation: 'Une identité visuelle forte est la fondation de toute marque mémorable. Elle communique instantanément les valeurs, la personnalité et la position de votre marque à travers des éléments visuels cohérents : logo, couleurs, typographie, et style graphique.',
      howToStart: 'Définissez votre positionnement de marque et valeurs. Recherchez l\'inspiration et analysez vos concurrents. Créez une charte graphique avec logo, palette de couleurs, typographie et règles d\'utilisation. Testez l\'identité sur différents supports.',
      essentialElements: [
        'Logo : Symbole ou mot-symbole reconnaissable et mémorable',
        'Palette de couleurs : 2-3 couleurs principales + couleurs secondaires',
        'Typographie : 1-2 polices cohérentes (une pour titres, une pour texte)',
        'Style graphique : Iconographie, illustrations, photographies cohérentes',
        'Charte graphique : Document guidant l\'utilisation de l\'identité',
        'Applications : Site web, réseaux sociaux, packaging, supports marketing'
      ],
      fullContent: `
        <h2>Introduction : Construire une identité visuelle forte et mémorable</h2>
        <p>Une identité visuelle forte est bien plus qu'un simple logo - c'est l'ensemble des éléments visuels qui représentent votre marque et créent une impression durable dans l'esprit de vos clients. Une identité visuelle cohérente et bien pensée renforce la reconnaissance de marque, construit la confiance et communique efficacement vos valeurs et votre positionnement. Ce guide complet vous montre comment créer une identité visuelle professionnelle qui distingue votre marque et résonne avec votre audience cible.</p>
        <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop" alt="Identité visuelle" class="w-full rounded-lg my-6" />
        
        <h2>1. Le logo : Cœur de l'identité visuelle</h2>
        
        <h3>Types de logos</h3>
        <ul>
          <li><strong>Wordmark (Logo texte) :</strong> Nom de marque stylisé (ex: Coca-Cola, Google)</li>
          <li><strong>Symbol/Icon :</strong> Symbole seul sans texte (ex: Apple, Nike Swoosh)</li>
          <li><strong>Combination Mark :</strong> Symbole + texte combinés (ex: Adidas, Burger King)</li>
          <li><strong>Emblem :</strong> Symbole dans forme (ex: Starbucks, BMW)</li>
          <li><strong>Lettermark :</strong> Initiales stylisées (ex: IBM, CNN)</li>
        </ul>
        
        <h3>Caractéristiques d'un bon logo</h3>
        <ul>
          <li><strong>Mémorable :</strong> Facile à retenir et reconnaître</li>
          <li><strong>Simplicité :</strong> Fonctionne en petit format (favicon) et grand</li>
          <li><strong>Timeless :</strong> Reste pertinent au fil des années</li>
          <li><strong>Polyvalent :</strong> Fonctionne en couleur, noir/blanc, différentes tailles</li>
          <li><strong>Pertinent :</strong> Communique valeurs et secteur d'activité</li>
          <li><strong>Distinctif :</strong> Se démarque de la concurrence</li>
        </ul>
        
        <h3>Processus de création</h3>
        <ul>
          <li><strong>Brief créatif :</strong> Définir valeurs, cible, secteur</li>
          <li><strong>Recherche :</strong> Concurrents, tendances, inspiration</li>
          <li><strong>Esquisses :</strong> Plusieurs concepts à la main</li>
          <li><strong>Développement :</strong> Affiner 2-3 concepts prometteurs</li>
          <li><strong>Applications :</strong> Tester sur différents supports</li>
          <li><strong>Finalisation :</strong> Choix final et création fichiers vectoriels</li>
        </ul>
        
        <h2>2. Palette de couleurs : Communiquer avec les couleurs</h2>
        
        <h3>Psychologie des couleurs</h3>
        <ul>
          <li><strong>Rouge :</strong> Énergie, passion, urgence (ex: Coca-Cola, Netflix)</li>
          <li><strong>Bleu :</strong> Confiance, professionnalisme, stabilité (ex: Facebook, IBM)</li>
          <li><strong>Vert :</strong> Nature, croissance, santé (ex: Starbucks, Spotify)</li>
          <li><strong>Jaune :</strong> Optimisme, créativité, attention (ex: McDonald's, Nikon)</li>
          <li><strong>Orange :</strong> Enthousiasme, innovation, jeunesse (ex: Amazon, Fanta)</li>
          <li><strong>Violet :</strong> Créativité, luxe, mystère (ex: Cadbury, Yahoo)</li>
          <li><strong>Noir :</strong> Élégance, sophistication, simplicité (ex: Nike, Chanel)</li>
          <li><strong>Blanc :</strong> Simplicité, pureté, espace (ex: Apple, Tesla)</li>
        </ul>
        
        <h3>Structure de palette</h3>
        <ul>
          <li><strong>Couleur primaire :</strong> Couleur principale de la marque (1-2 couleurs)</li>
          <li><strong>Couleurs secondaires :</strong> Couleurs complémentaires (2-3 couleurs)</li>
          <li><strong>Couleurs neutres :</strong> Gris, noir, blanc pour textes et arrière-plans</li>
          <li><strong>Accent :</strong> Couleur pour CTA, highlights (optionnel)</li>
        </ul>
        
        <h3>Bonnes pratiques</h3>
        <ul>
          <li>Limiter à 2-3 couleurs principales (éviter surcharge)</li>
          <li>Considérer accessibilité (contraste suffisant pour lisibilité)</li>
          <li>Définir codes hexadécimaux exacts pour cohérence</li>
          <li>Créer variations (clair, foncé) pour différents usages</li>
        </ul>
        
        <h2>3. Typographie : La voix visuelle de votre marque</h2>
        
        <h3>Choix de polices</h3>
        <ul>
          <li><strong>Police titre :</strong> Impactante, distinctive pour headers/logos</li>
          <li><strong>Police texte :</strong> Lisible, confortable pour corps de texte</li>
          <li><strong>Règle :</strong> Maximum 2 polices différentes (cohérence)</li>
        </ul>
        
        <h3>Familles de polices</h3>
        <ul>
          <li><strong>Serif :</strong> Traditionnel, élégant (ex: Times, Georgia) - Finances, luxe</li>
          <li><strong>Sans-serif :</strong> Moderne, propre (ex: Helvetica, Arial) - Tech, startups</li>
          <li><strong>Script :</strong> Élégant, créatif (ex: Brush Script) - Créatif, artisanal</li>
          <li><strong>Display :</strong> Décoratif, impactant - Titres seulement</li>
        </ul>
        
        <h3>Hiérarchie typographique</h3>
        <ul>
          <li>Définir tailles standard : H1, H2, H3, body, caption</li>
          <li>Créer échelle cohérente (ex: 32px, 24px, 18px, 16px, 14px)</li>
          <li>Définir line-height, letter-spacing pour lisibilité</li>
        </ul>
        
        <h2>4. Style graphique et iconographie</h2>
        
        <h3>Éléments visuels</h3>
        <ul>
          <li><strong>Iconographie :</strong> Style d'icônes cohérent (ligne, rempli, détaillé)</li>
          <li><strong>Illustrations :</strong> Style unique (flat, 3D, dessinée, réaliste)</li>
          <li><strong>Photographie :</strong> Style et ton cohérents (lumière, couleurs, sujets)</li>
          <li><strong>Patterns :</strong> Motifs récurrents pour enrichir visuels</li>
        </ul>
        
        <h3>Ton et style</h3>
        <ul>
          <li><strong>Minimaliste :</strong> Beaucoup d'espace blanc, simplicité</li>
          <li><strong>Bold :</strong> Couleurs vives, contrastes forts</li>
          <li><strong>Élégant :</strong> Subtilité, sophistication</li>
          <li><strong>Playful :</strong> Fun, créatif, jeunes</li>
        </ul>
        
        <h2>5. Charte graphique : Guide d'utilisation</h2>
        
        <h3>Éléments essentiels d'une charte</h3>
        <ul>
          <li><strong>Présentation marque :</strong> Valeurs, mission, personnalité</li>
          <li><strong>Logo :</strong> Variations, tailles minimum, espacement, usages interdits</li>
          <li><strong>Couleurs :</strong> Codes couleur (hex, RGB, CMYK), applications</li>
          <li><strong>Typographie :</strong> Polices, hiérarchie, exemples</li>
          <li><strong>Applications :</strong> Exemples sur différents supports</li>
          <li><strong>Do's and Don'ts :</strong> Erreurs à éviter</li>
        </ul>
        
        <h2>6. Applications de l'identité visuelle</h2>
        
        <h3>Supports digitaux</h3>
        <ul>
          <li>Site web (header, footer, pages)</li>
          <li>Réseaux sociaux (couverture, posts, Stories templates)</li>
          <li>Email marketing (templates, signatures)</li>
          <li>Présentations (slides cohérentes)</li>
        </ul>
        
        <h3>Supports print</h3>
        <ul>
          <li>Cartes de visite, en-têtes</li>
          <li>Packaging produits</li>
          <li>Brochures, catalogues</li>
          <li>Signalétique, enseignes</li>
        </ul>
        
        <h2>7. Processus de création étape par étape</h2>
        
        <h3>Phase 1 : Définition (1-2 semaines)</h3>
        <ul>
          <li>Brief créatif (valeurs, cible, positionnement)</li>
          <li>Recherche concurrents et inspiration</li>
          <li>Moodboard (direction créative)</li>
        </ul>
        
        <h3>Phase 2 : Concept (2-3 semaines)</h3>
        <ul>
          <li>Esquisses logo (plusieurs concepts)</li>
          <li>Développement palette couleurs</li>
          <li>Tests typographie</li>
        </ul>
        
        <h3>Phase 3 : Développement (2-3 semaines)</h3>
        <ul>
          <li>Affinage concepts sélectionnés</li>
          <li>Création fichiers vectoriels</li>
          <li>Applications sur différents supports</li>
        </ul>
        
        <h3>Phase 4 : Finalisation (1 semaine)</h3>
        <ul>
          <li>Choix final</li>
          <li>Création charte graphique complète</li>
          <li>Livraison fichiers (vectoriels, formats web, print)</li>
        </ul>
        
        <h2>8. Outils recommandés</h2>
        
        <h3>Design professionnel</h3>
        <ul>
          <li><strong>Adobe Illustrator :</strong> Logo, vecteurs (standard industrie)</li>
          <li><strong>Figma :</strong> Design collaboratif, prototypes</li>
          <li><strong>Adobe Photoshop :</strong> Retouches, compositions</li>
        </ul>
        
        <h3>Alternatives accessibles</h3>
        <ul>
          <li><strong>Canva :</strong> Templates, design simplifié</li>
          <li><strong>GIMP :</strong> Gratuit, open-source</li>
          <li><strong>Inkscape :</strong> Gratuit, vectoriel</li>
        </ul>
        
        <h2>9. Erreurs courantes à éviter</h2>
        <ul>
          <li>Trop de couleurs (perd cohérence)</li>
          <li>Logo trop complexe (ne scale pas bien)</li>
          <li>Incohérence entre supports</li>
          <li>Copier concurrence (perd différenciation)</li>
          <li>Ignorer accessibilité (contraste, lisibilité)</li>
          <li>Pas de charte graphique (utilisations incohérentes)</li>
        </ul>
        
        <h2>10. Budget et ressources</h2>
        
        <h3>Options</h3>
        <ul>
          <li><strong>Designer freelance :</strong> 500-5000€ selon complexité</li>
          <li><strong>Agence :</strong> 5000-50000€+ (projets complets)</li>
          <li><strong>DIY avec outils :</strong> Gratuit-50€/mois (limites créativité)</li>
          <li><strong>Marketplace (Fiverr, 99designs) :</strong> 50-500€ (qualité variable)</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Une identité visuelle forte est un investissement essentiel pour toute marque sérieuse. Elle crée la première impression, renforce la reconnaissance, et communique efficacement vos valeurs. En suivant ce processus structuré et en maintenant la cohérence à travers tous vos supports, vous créez une identité visuelle qui distingue votre marque et construit une connexion durable avec votre audience. Rappelez-vous : simplicité, cohérence et pertinence sont les clés d'une identité visuelle mémorable qui résiste à l'épreuve du temps.</p>
      `,
      prerequisites: [
        'Définition claire positionnement marque',
        'Compréhension de base du design',
        'Budget pour designer ou outils design'
      ],
      tools: [
        'Adobe Illustrator ou Figma (professionnel)',
        'Canva (accessible)',
        'Outils palette couleurs : Coolors, Adobe Color',
        'Outils typographie : Google Fonts, Adobe Fonts'
      ],
      nextSteps: [
        'Définissez votre brief créatif (valeurs, cible, positionnement)',
        'Créez un moodboard avec inspiration',
        'Esquissez 5-10 concepts de logo',
        'Développez votre palette de couleurs',
        'Choisissez vos polices',
        'Créez votre charte graphique',
        'Appliquez l\'identité sur vos supports principaux'
      ]
    },
    ar: {
      domainExplanation: 'الهوية البصرية القوية هي أساس أي علامة تجارية لا تُنسى. تتواصل فورًا مع القيم والشخصية.',
      howToStart: 'حدد موضع علامتك التجارية وقيمها. ابحث عن الإلهام. أنشئ دليلًا بصريًا مع الشعار والألوان والخطوط.',
      essentialElements: [
        'الشعار: رمز أو كلمة رمزية قابلة للتعرف',
        'لوحة الألوان: 2-3 ألوان رئيسية',
        'الطباعة: خط واحد أو اثنين متسقين',
        'الأسلوب: الأيقونات والرسوم والصور'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>الهوية البصرية القوية هي أساس العلامة التجارية.</p>
        <h2>١. الشعار</h2>
        <p>أنواع الشعارات وخصائص الشعار الجيد.</p>
        <h2>٢. الألوان</h2>
        <p>سيكولوجيا الألوان ولوحة الألوان.</p>
        <h2>الخلاصة</h2>
        <p>الهوية البصرية المتماسكة تبني الاعتراف بالعلامة التجارية.</p>
      `,
      prerequisites: ['تعريف واضح لموضع العلامة التجارية', 'فهم أساسي للتصميم'],
      tools: ['Adobe Illustrator', 'Figma', 'Canva'],
      nextSteps: ['حدد موجزك الإبداعي', 'أنشئ شعار', 'طور لوحة الألوان']
    },
    en: {
      domainExplanation: 'A strong visual identity is the foundation of any memorable brand. It instantly communicates values and personality.',
      howToStart: 'Define your brand positioning and values. Research inspiration. Create a visual guide with logo, colors, typography.',
      essentialElements: [
        'Logo: Recognizable symbol or wordmark',
        'Color palette: 2-3 primary colors',
        'Typography: 1-2 consistent fonts',
        'Style: Icons, illustrations, photography'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>A strong visual identity is the foundation of a brand.</p>
        <h2>1. Logo</h2>
        <p>Logo types and characteristics of a good logo.</p>
        <h2>2. Colors</h2>
        <p>Color psychology and color palette.</p>
        <h2>Conclusion</h2>
        <p>Cohesive visual identity builds brand recognition.</p>
      `,
      prerequisites: ['Clear brand positioning definition', 'Basic design understanding'],
      tools: ['Adobe Illustrator', 'Figma', 'Canva'],
      nextSteps: ['Define creative brief', 'Create logo', 'Develop color palette']
    }
  },
  // Blog 42: Positionnement de marque
  42: {
    fr: {
      domainExplanation: 'Le positionnement de marque définit comment votre marque est perçue dans l\'esprit des consommateurs par rapport à la concurrence. Un positionnement clair et différenciant est essentiel pour se démarquer et attirer votre audience cible.',
      howToStart: 'Analysez votre marché et concurrents. Identifiez les besoins non satisfaits de votre audience. Définissez votre valeur unique (USP). Créez votre positionnement statement. Testez votre positionnement auprès de votre audience.',
      essentialElements: [
        'Proposition de valeur unique (USP) : Ce qui vous différencie',
        'Cible : Audience spécifique que vous servez',
        'Bénéfices clés : Ce que vous apportez à vos clients',
        'Personnalité : Traits de caractère de votre marque',
        'Positioning statement : Déclaration claire de votre position',
        'Preuve : Éléments supportant votre positionnement'
      ],
      fullContent: `
        <h2>Introduction : Créer un positionnement de marque différenciant</h2>
        <p>Le positionnement de marque est l'art de créer une place unique et désirable pour votre marque dans l'esprit des consommateurs. Il définit non seulement ce que vous êtes, mais aussi ce que vous n'êtes pas, et comment vous vous différenciez de la concurrence. Un positionnement clair guide toutes vos décisions marketing, communication et produit, créant une cohérence qui renforce la reconnaissance et la fidélité. Ce guide vous montre comment développer un positionnement stratégique qui résonne avec votre audience et vous distingue durablement.</p>
        <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop" alt="Positionnement marque" class="w-full rounded-lg my-6" />
        
        <h2>1. Comprendre le positionnement</h2>
        
        <h3>Définition</h3>
        <p>Le positionnement = La place unique qu'occupe votre marque dans l'esprit du consommateur par rapport à la concurrence.</p>
        
        <h3>Exemples célèbres</h3>
        <ul>
          <li><strong>Volvo :</strong> "Sécurité" (vs performance, luxe des autres marques)</li>
          <li><strong>Apple :</strong> "Innovation et simplicité" (vs fonctionnalités techniques)</li>
          <li><strong>Nike :</strong> "Just Do It" - Performance et détermination</li>
          <li><strong>Dollar Shave Club :</strong> "Rasoirs abordables, livrés à domicile" (vs Gillette cher en magasin)</li>
        </ul>
        
        <h2>2. Les piliers du positionnement</h2>
        
        <h3>Proposition de valeur unique (USP)</h3>
        <ul>
          <li>Ce qui vous rend unique et différent</li>
          <li>Bénéfice que vous seul (ou mieux) pouvez offrir</li>
          <li>Raison pour laquelle clients vous choisissent vs concurrence</li>
          <li><strong>Exemple :</strong> "Seul service de livraison en 1h dans votre ville"</li>
        </ul>
        
        <h3>Audience cible</h3>
        <ul>
          <li>Segment spécifique de marché que vous servez</li>
          <li>Démographie, psychographie, comportements</li>
          <li>Plus spécifique = meilleur positionnement</li>
          <li><strong>Exemple :</strong> "Entrepreneurs tech qui lancent leur premier SaaS"</li>
        </ul>
        
        <h3>Bénéfices clés</h3>
        <ul>
          <li>Ce que votre audience obtient en vous choisissant</li>
          <li>Bénéfices fonctionnels + émotionnels</li>
          <li><strong>Exemple :</strong> "Gagner du temps + se sentir productif et en contrôle"</li>
        </ul>
        
        <h3>Personnalité de marque</h3>
        <ul>
          <li>Traits de caractère (comme une personne)</li>
          <li>Guide ton de voix, style communication</li>
          <li><strong>Exemples :</strong> Amical, professionnel, audacieux, authentique, innovant</li>
        </ul>
        
        <h2>3. Processus de création du positionnement</h2>
        
        <h3>Étape 1 : Analyse concurrentielle</h3>
        <ul>
          <li>Identifier principaux concurrents</li>
          <li>Analyser leur positionnement actuel</li>
          <li>Identifier espaces vides (opportunités)</li>
          <li>Créer carte de positionnement (graphique)</li>
        </ul>
        
        <h3>Étape 2 : Comprendre votre audience</h3>
        <ul>
          <li>Recherche utilisateurs (interviews, surveys)</li>
          <li>Identifier besoins non satisfaits</li>
          <li>Comprendre motivations d'achat</li>
          <li>Définir personas détaillés</li>
        </ul>
        
        <h3>Étape 3 : Identifier votre différenciation</h3>
        <ul>
          <li>Liste vos forces uniques</li>
          <li>Ce que vous faites mieux que concurrence</li>
          <li>Ressources/capacités exclusives</li>
          <li>Expérience client distinctive</li>
        </ul>
        
        <h3>Étape 4 : Créer votre positioning statement</h3>
        <p><strong>Template :</strong></p>
        <pre><code>Pour [audience cible],
[Notre marque] est la [catégorie]
qui [bénéfice clé]
parce que [raison de croire / preuve].</code></pre>
        
        <p><strong>Exemple :</strong></p>
        <pre><code>Pour les entrepreneurs occupés,
TaskMaster est l'application de productivité
qui double votre efficacité
parce que nous utilisons l'IA pour automatiser 
vos tâches répétitives, contrairement aux 
solutions manuelles traditionnelles.</code></pre>
        
        <h2>4. Types de positionnement</h2>
        
        <h3>Par attribut produit</h3>
        <ul>
          <li>Positionner sur caractéristique unique</li>
          <li><strong>Exemple :</strong> "Seule voiture 100% électrique avec autonomie 800km"</li>
        </ul>
        
        <h3>Par prix</h3>
        <ul>
          <li>Leaders prix (premium) ou valeur (budget)</li>
          <li><strong>Exemple :</strong> "Qualité premium" vs "Meilleur rapport qualité/prix"</li>
        </ul>
        
        <h3>Par usage/application</h3>
        <ul>
          <li>Positionner sur usage spécifique</li>
          <li><strong>Exemple :</strong> "Café pour le matin" (vs toute la journée)</li>
        </ul>
        
        <h3>Par bénéfice</h3>
        <ul>
          <li>Positionner sur bénéfice apporté</li>
          <li><strong>Exemple :</strong> "Vous aide à perdre du poids"</li>
        </ul>
        
        <h3>Par utilisateur</h3>
        <ul>
          <li>Positionner sur type utilisateur</li>
          <li><strong>Exemple :</strong> "Pour les professionnels créatifs"</li>
        </ul>
        
        <h3>Par concurrence</h3>
        <ul>
          <li>Positionner directement vs concurrent</li>
          <li><strong>Exemple :</strong> "Comme X, mais 50% moins cher"</li>
        </ul>
        
        <h2>5. Carte de positionnement</h2>
        <p>Outil visuel pour visualiser positionnement relatif :</p>
        <ul>
          <li>Axe X : Attribut 1 (ex: Prix bas vs Premium)</li>
          <li>Axe Y : Attribut 2 (ex: Simple vs Complexe)</li>
          <li>Placer concurrents et votre marque</li>
          <li>Identifier zones vides (opportunités)</li>
        </ul>
        
        <h2>6. Communiquer votre positionnement</h2>
        
        <h3>Messages clés</h3>
        <ul>
          <li>Développer 3-5 messages supportant positionnement</li>
          <li>Utiliser dans toutes communications (site, réseaux, pubs)</li>
          <li>Être cohérent et répétitif</li>
        </ul>
        
        <h3>Preuves et storytelling</h3>
        <ul>
          <li>Histoires illustrant positionnement</li>
          <li>Témoignages clients alignés</li>
          <li>Données/nombres supportant</li>
        </ul>
        
        <h2>7. Erreurs courantes à éviter</h2>
        <ul>
          <li>Positionnement trop large (essayer plaire à tous)</li>
          <li>Copier positionnement concurrent</li>
          <li>Positionnement non crédible (pas de preuve)</li>
          <li>Changer positionnement trop souvent</li>
          <li>Positionnement non communiqué clairement</li>
        </ul>
        
        <h2>8. Tester et valider votre positionnement</h2>
        
        <h3>Méthodes</h3>
        <ul>
          <li>Surveys auprès audience cible</li>
          <li>A/B testing messages</li>
          <li>Interviews utilisateurs</li>
          <li>Analyse feedback clients</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Un positionnement de marque clair et différenciant est le fondement d'une stratégie marketing efficace. Il guide toutes vos décisions, crée de la cohérence et vous aide à vous démarquer dans un marché saturé. Le meilleur positionnement est celui qui : (1) répond à un besoin réel de votre audience, (2) se différencie clairement de la concurrence, (3) est crédible et supporté par des preuves, et (4) peut être communiqué simplement et efficacement. Prenez le temps de bien définir votre positionnement - c'est un investissement qui paie sur le long terme.</p>
      `,
      prerequisites: [
        'Compréhension de votre marché et concurrence',
        'Connaissance de votre audience cible',
        'Clarté sur vos forces et différenciations'
      ],
      tools: [
        'Outils recherche : Google Trends, SimilarWeb',
        'Outils surveys : Typeform, SurveyMonkey',
        'Outils analyse : Google Analytics, social listening',
        'Carte positionnement : Figma, Miro'
      ],
      nextSteps: [
        'Analysez vos 5 principaux concurrents et leur positionnement',
        'Identifiez votre audience cible spécifique',
        'Listez vos différenciations uniques',
        'Créez votre positioning statement',
        'Développez votre carte de positionnement',
        'Testez votre positionnement auprès de votre audience',
        'Communiquez votre positionnement dans toutes vos communications'
      ]
    },
    ar: {
      domainExplanation: 'يحدد موضع العلامة التجارية كيفية إدراك علامتك التجارية في أذهان المستهلكين مقارنة بالمنافسة.',
      howToStart: 'حلل السوق والمنافسين. حدد احتياجات جمهورك غير الملباة. حدد قيمتك الفريدة.',
      essentialElements: [
        'القيمة الفريدة: ما يميزك',
        'الجمهور المستهدف',
        'الفوائد الرئيسية',
        'الشخصية',
        'بيان الموضع'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>موضع العلامة التجارية يحدد مكانتك الفريدة في أذهان المستهلكين.</p>
        <h2>١. فهم الموضع</h2>
        <p>الموضع = المكان الفريد لعلامتك التجارية.</p>
        <h2>٢. أركان الموضع</h2>
        <p>القيمة الفريدة، الجمهور، الفوائد، الشخصية.</p>
        <h2>الخلاصة</h2>
        <p>الموضع الواضح يوجه استراتيجيتك التسويقية.</p>
      `,
      prerequisites: ['فهم السوق', 'معرفة الجمهور المستهدف'],
      tools: ['Google Trends', 'Typeform', 'Google Analytics'],
      nextSteps: ['حلل المنافسين', 'حدد جمهورك', 'أنشئ بيان الموضع']
    },
    en: {
      domainExplanation: 'Brand positioning defines how your brand is perceived in consumers\' minds relative to competition.',
      howToStart: 'Analyze your market and competitors. Identify unmet audience needs. Define your unique value.',
      essentialElements: [
        'Unique value proposition: What differentiates you',
        'Target audience',
        'Key benefits',
        'Personality',
        'Positioning statement'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Brand positioning defines your unique place in consumers' minds.</p>
        <h2>1. Understanding Positioning</h2>
        <p>Positioning = Your brand's unique place.</p>
        <h2>2. Positioning Pillars</h2>
        <p>Unique value, audience, benefits, personality.</p>
        <h2>Conclusion</h2>
        <p>Clear positioning guides your marketing strategy.</p>
      `,
      prerequisites: ['Market understanding', 'Target audience knowledge'],
      tools: ['Google Trends', 'Typeform', 'Google Analytics'],
      nextSteps: ['Analyze competitors', 'Define audience', 'Create positioning statement']
    }
  }
}

export default brandingTranslations
