// Digital Marketing category translations (Blogs 36-40)
import { BlogTranslations } from '../types'

const marketingTranslations: BlogTranslations = {
  // Blog 36: SEO vs SEA
  36: {
    fr: {
      domainExplanation: 'SEO (référencement naturel) et SEA (publicité payante) sont deux piliers du marketing digital. Comprendre leurs différences, avantages et comment les combiner efficacement est essentiel pour maximiser votre visibilité en ligne et générer du trafic qualifié.',
      howToStart: 'Analysez votre position actuelle sur Google. Définissez vos mots-clés cibles. Commencez par améliorer votre SEO (gratuit mais long terme), puis testez SEA (payant mais immédiat) sur mots-clés stratégiques.',
      essentialElements: [
        'SEO : Référencement naturel, gratuit mais long terme (3-6 mois+)',
        'SEA : Publicité payante, coût mais résultats immédiats',
        'Différences : Coût, délai, contrôle, trafic généré',
        'Combinaison : SEO pour visibilité long terme, SEA pour résultats rapides',
        'KPIs : Position, trafic organique vs payant, coût par acquisition',
        'Stratégie : Investir SEO pour stabilité, SEA pour lancement/événements'
      ],
      fullContent: `
        <h2>Introduction : SEO vs SEA - Stratégie marketing digitale complète</h2>
        <p>SEO (Search Engine Optimization) et SEA (Search Engine Advertising) sont deux approches complémentaires mais distinctes pour générer du trafic depuis les moteurs de recherche. Chaque méthode a ses forces, limites et cas d'usage optimaux. Comprendre comment les différencier, quand utiliser chacune, et comment les combiner, vous permet de construire une stratégie de visibilité en ligne complète et performante qui maximise votre ROI.</p>
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop" alt="SEO vs SEA" class="w-full rounded-lg my-6" />
        
        <h2>1. SEO : Référencement naturel (organique)</h2>
        
        <h3>Définition et fonctionnement</h3>
        <p>Le SEO consiste à optimiser votre site web pour apparaître naturellement dans les résultats de recherche (SERP) sans payer pour l'espace publicitaire.</p>
        
        <h3>Avantages SEO</h3>
        <ul>
          <li><strong>Gratuit à long terme :</strong> Pas de coût par clic une fois bien positionné</li>
          <li><strong>Crédibilité :</strong> Utilisateurs font plus confiance aux résultats organiques</li>
          <li><strong>Trafic durable :</strong> Résultats persistent dans le temps si maintenus</li>
          <li><strong>ROI élevé :</strong> Investissement initial, retour sur plusieurs années</li>
          <li><strong>Large couverture :</strong> Peut générer trafic sur centaines de mots-clés</li>
        </ul>
        
        <h3>Inconvénients SEO</h3>
        <ul>
          <li><strong>Délai long :</strong> 3-6 mois minimum pour voir résultats</li>
          <li><strong>Pas de garantie :</strong> Algorithme Google change, positions varient</li>
          <li><strong>Effort continu :</strong> Nécessite optimisation constante</li>
          <li><strong>Difficile pour niches compétitives :</strong> Concurrence forte sur certains mots-clés</li>
        </ul>
        
        <h3>Piliers du SEO</h3>
        <ul>
          <li><strong>SEO On-page :</strong> Optimisation contenu, balises, structure interne</li>
          <li><strong>SEO Off-page :</strong> Backlinks, autorité domaine, signaux externes</li>
          <li><strong>SEO Technique :</strong> Vitesse site, mobile-friendly, structure données</li>
          <li><strong>SEO Local :</strong> Google My Business, avis, géolocalisation</li>
        </ul>
        
        <h2>2. SEA : Publicité payante (Google Ads)</h2>
        
        <h3>Définition et fonctionnement</h3>
        <p>Le SEA consiste à payer pour apparaître en haut des résultats de recherche Google (et autres moteurs) via Google Ads (anciennement AdWords).</p>
        
        <h3>Avantages SEA</h3>
        <ul>
          <li><strong>Résultats immédiats :</strong> Visibilité dès la première annonce</li>
          <li><strong>Contrôle total :</strong> Budget, mots-clés, audiences, horaires</li>
          <li><strong>Test rapide :</strong> Valider mots-clés et messages rapidement</li>
          <li><strong>Précision :</strong> Cibler exactement audiences recherchées</li>
          <li><strong>Mesurable :</strong> Métriques détaillées en temps réel</li>
          <li><strong>Flexibilité :</strong> Modifier/pauser campagnes instantanément</li>
        </ul>
        
        <h3>Inconvénients SEA</h3>
        <ul>
          <li><strong>Coût continu :</strong> Payer pour chaque clic (CPC)</li>
          <li><strong>Arrêt = Arrêt trafic :</strong> Trafic s'arrête quand budget s'arrête</li>
          <li><strong>Concurrence :</strong> Coûts peuvent augmenter sur mots-clés compétitifs</li>
          <li><strong>Apprentissage nécessaire :</strong> Courbe d'apprentissage pour optimiser</li>
        </ul>
        
        <h3>Types de campagnes SEA</h3>
        <ul>
          <li><strong>Recherche :</strong> Annonces textuelles dans résultats recherche</li>
          <li><strong>Display :</strong> Bannières sur sites partenaires</li>
          <li><strong>Shopping :</strong> Produits avec images et prix</li>
          <li><strong>Vidéo :</strong> Annonces YouTube</li>
          <li><strong>Performance Max :</strong> Campagnes automatisées multi-canal</li>
        </ul>
        
        <h2>3. Comparaison détaillée SEO vs SEA</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background-color: #1f2937; color: white;">
              <th style="padding: 12px; border: 1px solid #374151;">Critère</th>
              <th style="padding: 12px; border: 1px solid #374151;">SEO</th>
              <th style="padding: 12px; border: 1px solid #374151;">SEA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Coût</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Gratuit (temps/investissement initial)</td>
              <td style="padding: 12px; border: 1px solid #374151;">Payant (CPC, budget continu)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Délai résultats</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">3-6 mois minimum</td>
              <td style="padding: 12px; border: 1px solid #374151;">Immédiat (24-48h)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Contrôle</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Limité (algorithme Google)</td>
              <td style="padding: 12px; border: 1px solid #374151;">Total (budget, mots-clés, audiences)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Trafic long terme</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Durable si maintenu</td>
              <td style="padding: 12px; border: 1px solid #374151;">Arrête si budget arrête</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Crédibilité</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Plus élevée (résultats naturels)</td>
              <td style="padding: 12px; border: 1px solid #374151;">Plus faible (perçu comme pub)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>Couverture</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Large (centaines mots-clés possibles)</td>
              <td style="padding: 12px; border: 1px solid #374151;">Ciblée (mots-clés choisis)</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #374151;"><strong>ROI long terme</strong></td>
              <td style="padding: 12px; border: 1px solid #374151;">Très élevé</td>
              <td style="padding: 12px; border: 1px solid #374151;">Variable selon optimisation</td>
            </tr>
          </tbody>
        </table>
        
        <h2>4. Quand utiliser SEO</h2>
        <ul>
          <li><strong>Stratégie long terme :</strong> Construire visibilité durable</li>
          <li><strong>Budget limité :</strong> Investir temps plutôt qu'argent</li>
          <li><strong>Crédibilité importante :</strong> Besoin de confiance utilisateurs</li>
          <li><strong>Contenu riche :</strong> Beaucoup de contenu à optimiser</li>
          <li><strong>Trafic large :</strong> Cibler de nombreux mots-clés</li>
        </ul>
        
        <h2>5. Quand utiliser SEA</h2>
        <ul>
          <li><strong>Lancement produit/service :</strong> Besoin visibilité immédiate</li>
          <li><strong>Événements limités :</strong> Promotions, ventes flash</li>
          <li><strong>Test marché :</strong> Valider messages et audiences</li>
          <li><strong>Mots-clés compétitifs :</strong> Difficiles à ranker en SEO</li>
          <li><strong>Budget disponible :</strong> Pour résultats rapides</li>
        </ul>
        
        <h2>6. Stratégie combinée : SEO + SEA (SEM complet)</h2>
        <p>La meilleure approche combine les deux pour maximiser résultats :</p>
        <ul>
          <li><strong>SEA pour court terme :</strong> Générer trafic immédiat</li>
          <li><strong>SEO pour long terme :</strong> Construire trafic durable</li>
          <li><strong>Synergie :</strong> SEA teste mots-clés pour SEO, SEO réduit coûts SEA</li>
          <li><strong>Dominance SERP :</strong> Apparaître plusieurs fois dans résultats</li>
        </ul>
        
        <h2>7. Métriques et KPIs</h2>
        <ul>
          <li><strong>SEO :</strong> Position, trafic organique, backlinks, autorité domaine</li>
          <li><strong>SEA :</strong> CPC, CTR, conversions, ROAS (Return on Ad Spend)</li>
          <li><strong>Communes :</strong> Trafic total, conversions, coût par acquisition</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>SEO et SEA ne sont pas concurrents mais complémentaires. Le SEO construit une base solide et durable de visibilité, tandis que le SEA génère des résultats rapides et mesurables. Une stratégie marketing digitale complète combine intelligemment les deux : investir en SEO pour la pérennité, utiliser SEA pour les opportunités immédiates et les tests. Le meilleur choix dépend de vos objectifs, budget, délais et secteur d'activité. Souvent, la combinaison des deux offre le meilleur ROI global.</p>
      `,
      prerequisites: [
        'Compréhension de base du marketing digital',
        'Accès à Google Analytics',
        'Site web existant ou en développement'
      ],
      tools: [
        'Google Search Console (SEO)',
        'Google Ads (SEA)',
        'Google Analytics',
        'Outils SEO : Ahrefs, SEMrush, Moz',
        'Outils de mots-clés : Google Keyword Planner'
      ],
      nextSteps: [
        'Auditez votre SEO actuel avec Google Search Console',
        'Identifiez vos mots-clés cibles et opportunités',
        'Lancez une campagne SEA test sur mots-clés stratégiques',
        'Créez un plan SEO 6 mois avec optimisations prioritaires',
        'Mettez en place tracking pour mesurer ROI SEO et SEA',
        'Optimisez progressivement basé sur données'
      ]
    },
    ar: {
      domainExplanation: 'SEO (تحسين محركات البحث) و SEA (الإعلان على محركات البحث) هما ركيزتان للتسويق الرقمي. فهم الفروقات والجمع بينهما أمر ضروري.',
      howToStart: 'حلل موقعك الحالي على Google. حدد كلماتك المفتاحية. ابدأ بتحسين SEO ثم اختبر SEA.',
      essentialElements: [
        'SEO: تحسين محركات البحث، مجاني لكن طويل الأمد',
        'SEA: إعلانات مدفوعة، تكلفة لكن نتائج فورية',
        'الفرق: التكلفة، التوقيت، التحكم',
        'الجمع: SEO للاستدامة، SEA للسرعة',
        'المقاييس: الموقع، الزيارات، تكلفة الاكتساب'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>SEO و SEA طريقتان متكاملتان للظهور في محركات البحث.</p>
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop" alt="SEO vs SEA" class="w-full rounded-lg my-6" />
        <h2>١. SEO</h2>
        <p>تحسين محركات البحث للظهور الطبيعي.</p>
        <h2>٢. SEA</h2>
        <p>الإعلانات المدفوعة لنتائج فورية.</p>
        <h2>٣. المقارنة</h2>
        <p>SEO: مجاني، طويل الأمد. SEA: مدفوع، فوري.</p>
        <h2>الخلاصة</h2>
        <p>الجمع بينهما يوفر أفضل النتائج.</p>
      `,
      prerequisites: ['فهم أساسي للتسويق الرقمي', 'إمكانية الوصول لـ Google Analytics'],
      tools: ['Google Search Console', 'Google Ads', 'Google Analytics'],
      nextSteps: ['حلل SEO الحالي', 'حدد الكلمات المفتاحية', 'اختبر SEA']
    },
    en: {
      domainExplanation: 'SEO (organic) and SEA (paid advertising) are two pillars of digital marketing. Understanding their differences and how to combine them is essential.',
      howToStart: 'Analyze your current Google position. Define target keywords. Start with SEO improvements, then test SEA on strategic keywords.',
      essentialElements: [
        'SEO: Organic search, free but long-term',
        'SEA: Paid advertising, cost but immediate results',
        'Differences: Cost, timing, control',
        'Combination: SEO for sustainability, SEA for speed',
        'KPIs: Position, organic vs paid traffic, cost per acquisition'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>SEO and SEA are complementary approaches to search engine visibility.</p>
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop" alt="SEO vs SEA" class="w-full rounded-lg my-6" />
        <h2>1. SEO</h2>
        <p>Optimize for organic search results.</p>
        <h2>2. SEA</h2>
        <p>Paid advertising for immediate visibility.</p>
        <h2>3. Comparison</h2>
        <p>SEO: Free, long-term. SEA: Paid, immediate.</p>
        <h2>Conclusion</h2>
        <p>Combining both offers best results.</p>
      `,
      prerequisites: ['Basic digital marketing understanding', 'Access to Google Analytics'],
      tools: ['Google Search Console', 'Google Ads', 'Google Analytics'],
      nextSteps: ['Audit current SEO', 'Identify keywords', 'Test SEA']
    }
  },
  // Blog 37: Marketing d'influence
  37: {
    fr: {
      domainExplanation: 'Le marketing d\'influence utilise la crédibilité et la portée d\'influenceurs pour promouvoir votre marque. Identifier les bons influenceurs, construire des partenariats authentiques et mesurer l\'impact sont les clés du succès.',
      howToStart: 'Définissez vos objectifs et publics cibles. Recherchez influenceurs dans votre niche. Analysez leur audience et engagement. Contactez-les avec proposition personnalisée. Commencez par micro-influenceurs pour tester.',
      essentialElements: [
        'Types d\'influenceurs : Nano, Micro, Macro, Mega (selon nombre followers)',
        'Critères de sélection : Pertinence niche, engagement réel, authenticité',
        'Formats : Posts Instagram/TikTok, Stories, Reels, YouTube, Blog',
        'Partenariats : Contenu sponsorisé, collaboration, ambassadeur',
        'ROI : Reach, engagement, conversions, brand awareness',
        'Légal : Mention #sponsored, transparence obligatoire'
      ],
      fullContent: `
        <h2>Introduction : Maîtriser le marketing d'influence en 2025</h2>
        <p>Le marketing d'influence est devenu l'une des stratégies les plus efficaces pour atteindre des audiences ciblées et construire la confiance autour de votre marque. En collaborant avec des créateurs de contenu qui partagent les valeurs de votre marque, vous pouvez générer un engagement authentique, augmenter votre notoriété et convertir des prospects en clients. Ce guide complet vous montre comment identifier les bons influenceurs, construire des partenariats durables et mesurer le succès de vos campagnes.</p>
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop" alt="Marketing d'influence" class="w-full rounded-lg my-6" />
        
        <h2>1. Comprendre les types d'influenceurs</h2>
        
        <h3>Nano-influenceurs (1K-10K followers)</h3>
        <ul>
          <li><strong>Avantages :</strong> Engagement très élevé, coûts faibles, authenticité maximale</li>
          <li><strong>Idéal pour :</strong> Marques locales, niches spécifiques, budgets limités</li>
          <li><strong>Engagement moyen :</strong> 5-10% (très élevé)</li>
        </ul>
        
        <h3>Micro-influenceurs (10K-100K followers)</h3>
        <ul>
          <li><strong>Avantages :</strong> Bon équilibre reach/engagement, coûts raisonnables</li>
          <li><strong>Idéal pour :</strong> La plupart des marques, campagnes ciblées</li>
          <li><strong>Engagement moyen :</strong> 3-5%</li>
        </ul>
        
        <h3>Macro-influenceurs (100K-1M followers)</h3>
        <ul>
          <li><strong>Avantages :</strong> Large reach, professionnalisme</li>
          <li><strong>Idéal pour :</strong> Grandes marques, lancements produits</li>
          <li><strong>Engagement moyen :</strong> 1-3%</li>
        </ul>
        
        <h3>Mega-influenceurs/Célébrités (1M+ followers)</h3>
        <ul>
          <li><strong>Avantages :</strong> Portée massive, notoriété instantanée</li>
          <li><strong>Idéal pour :</strong> Grandes campagnes, budgets importants</li>
          <li><strong>Engagement moyen :</strong> <1%</li>
        </ul>
        
        <h2>2. Identifier les bons influenceurs</h2>
        
        <h3>Critères de sélection essentiels</h3>
        <ul>
          <li><strong>Pertinence niche :</strong> Audience alignée avec votre cible</li>
          <li><strong>Taux d'engagement réel :</strong> Vérifier likes, commentaires authentiques</li>
          <li><strong>Qualité contenu :</strong> Style, esthétique cohérents avec votre marque</li>
          <li><strong>Authenticité :</strong> Pas de followers achetés, vrai engagement</li>
          <li><strong>Valeurs alignées :</strong> Partage valeurs de votre marque</li>
          <li><strong>Fréquence publication :</strong> Actif et régulier</li>
        </ul>
        
        <h3>Outils de recherche</h3>
        <ul>
          <li><strong>Outils spécialisés :</strong> AspireIQ, Upfluence, Grin, Klear</li>
          <li><strong>Recherche manuelle :</strong> Hashtags, géolocalisation, concurrents</li>
          <li><strong>Analytics :</strong> Vérifier avec Social Blade, HypeAuditor</li>
        </ul>
        
        <h2>3. Types de collaborations</h2>
        
        <h3>Contenu sponsorisé (Paid Post)</h3>
        <ul>
          <li>Influenceur crée contenu promouvant votre produit/service</li>
          <li>Paiement unique par publication</li>
          <li>Idéal pour : Lancements, promotions spécifiques</li>
        </ul>
        
        <h3>Partenariat long terme (Ambassadeur)</h3>
        <ul>
          <li>Collaboration continue sur plusieurs mois</li>
          <li>Création contenu régulier + code promo</li>
          <li>Idéal pour : Construire association forte marque-influenceur</li>
        </ul>
        
        <h3>Gifting (Produit gratuit)</h3>
        <ul>
          <li>Envoi produits gratuits en échange contenu (pas toujours garanti)</li>
          <li>Coût : Seulement produit + shipping</li>
          <li>Idéal pour : Nano/micro-influenceurs, produits physiques</li>
        </ul>
        
        <h3>Affiliation</h3>
        <ul>
          <li>Commission sur ventes générées via code/lien unique</li>
          <li>Paiement uniquement sur résultats</li>
          <li>Idéal pour : E-commerce, produits/services avec tracking possible</li>
        </ul>
        
        <h2>4. Approche de contact professionnelle</h2>
        
        <h3>Email/DM efficace</h3>
        <ul>
          <li><strong>Personnalisation :</strong> Mentionner contenu spécifique qu'ils ont créé</li>
          <li><strong>Proposition claire :</strong> Expliquer collaboration envisagée</li>
          <li><strong>Valeur :</strong> Ce qu'ils gagnent (rémunération, produits, exposition)</li>
          <li><strong>Détails :</strong> Timeline, deliverables, compensation</li>
          <li><strong>Ton authentique :</strong> Éviter templates génériques</li>
        </ul>
        
        <h3>Exemple de pitch</h3>
        <pre><code>Bonjour [Nom],

J'ai découvert votre compte et j'adore votre contenu sur [thème]. 
Votre post sur [mentionner post spécifique] m'a particulièrement marqué.

Je représente [Marque], [description courte marque]. 
Nous cherchons à collaborer avec des créateurs authentiques comme vous.

Proposition : [Décrire collaboration]
Compensation : [Détails rémunération]
Timeline : [Dates]

Seriez-vous intéressé(e) ?</code></pre>
        
        <h2>5. Formats de contenu populaires</h2>
        
        <h3>Instagram</h3>
        <ul>
          <li><strong>Posts Feed :</strong> Contenu permanent avec produits</li>
          <li><strong>Stories :</strong> Contenu éphémère, swipes up, polls</li>
          <li><strong>Reels :</strong> Contenu viral, tendances, éducatif</li>
          <li><strong>IGTV/Video :</strong> Contenu long format, tutoriels</li>
        </ul>
        
        <h3>TikTok</h3>
        <ul>
          <li>Contenu court, créatif, viral</li>
          <li>Challenges, duets, behind-the-scenes</li>
          <li>Très efficace pour générations Z/Alpha</li>
        </ul>
        
        <h3>YouTube</h3>
        <ul>
          <li>Contenu long format, tutoriels, reviews</li>
          <li>Idéal pour produits complexes nécessitant explication</li>
          <li>SEO YouTube, découverte organique</li>
        </ul>
        
        <h3>Blog</h3>
        <ul>
          <li>Articles détaillés, reviews approfondies</li>
          <li>SEO bénéfique pour votre site</li>
        </ul>
        
        <h2>6. Mesurer le ROI</h2>
        
        <h3>Métriques clés</h3>
        <ul>
          <li><strong>Reach :</strong> Nombre personnes ayant vu contenu</li>
          <li><strong>Engagement :</strong> Likes, commentaires, partages, sauvegardes</li>
          <li><strong>Traffic :</strong> Visites site via liens influenceur</li>
          <li><strong>Conversions :</strong> Ventes/actions via code promo unique</li>
          <li><strong>Brand Awareness :</strong> Recherches marque, mentions</li>
          <li><strong>ROAS :</strong> Return on Ad Spend (revenus / coût campagne)</li>
        </ul>
        
        <h3>Codes promo uniques</h3>
        <ul>
          <li>Créer code promo unique par influenceur</li>
          <li>Tracking conversions directes</li>
          <li>Calcul ROI précis</li>
        </ul>
        
        <h2>7. Aspects légaux et éthiques</h2>
        
        <h3>Transparence obligatoire</h3>
        <ul>
          <li><strong>France/EU :</strong> Mention #sponsored, #partenariat, #pub obligatoire</li>
          <li><strong>États-Unis :</strong> #ad, #sponsored, #partner requis par FTC</li>
          <li><strong>Sanctions :</strong> Amendes possibles si non respecté</li>
        </ul>
        
        <h3>Bonnes pratiques</h3>
        <ul>
          <li>Transparence totale avec audience</li>
          <li>Laisser liberté créative à influenceur</li>
          <li>Respecter authenticité créateur</li>
          <li>Clauses contractuelles claires</li>
        </ul>
        
        <h2>8. Erreurs courantes à éviter</h2>
        <ul>
          <li>Choisir influenceur uniquement sur nombre followers</li>
          <li>Templates génériques sans personnalisation</li>
          <li>Contrôle trop strict du contenu (perd authenticité)</li>
          <li>Ignorer micro-influenceurs (meilleur ROI souvent)</li>
          <li>Ne pas suivre métriques et ROI</li>
          <li>Oublier aspects légaux (#sponsored)</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Le marketing d'influence, lorsqu'il est bien exécuté, génère un engagement authentique et des résultats mesurables. La clé du succès réside dans l'identification des bons partenaires (pertinence > nombre followers), la construction de relations authentiques, et la mesure continue des performances. En 2025, les micro et nano-influenceurs offrent souvent le meilleur ROI grâce à leur engagement élevé et leur authenticité. Commencez petit, testez, mesurez, et scalez ce qui fonctionne. Le marketing d'influence n'est pas une tactique ponctuelle mais une stratégie long terme pour construire la confiance et la notoriété de votre marque.</p>
      `,
      prerequisites: [
        'Compréhension de base réseaux sociaux',
        'Définition claire de votre marque et valeurs',
        'Budget pour collaborations (même modeste)'
      ],
      tools: [
        'Outils recherche : AspireIQ, Upfluence, Grin',
        'Analytics : Social Blade, HypeAuditor',
        'Tracking : Google Analytics, codes promo uniques',
        'Plateformes : Instagram, TikTok, YouTube'
      ],
      nextSteps: [
        'Définissez vos objectifs et publics cibles',
        'Recherchez 10-20 influenceurs pertinents dans votre niche',
        'Analysez leur engagement et authenticité',
        'Contactez 5 influenceurs avec proposition personnalisée',
        'Commencez par collaboration test (gifting ou petit budget)',
        'Mesurez résultats et itérez sur ce qui fonctionne'
      ]
    },
    ar: {
      domainExplanation: 'التسويق بالمؤثرين يستخدم مصداقية ووصول المؤثرين للترويج لعلامتك التجارية.',
      howToStart: 'حدد أهدافك وجمهورك المستهدف. ابحث عن المؤثرين في مجالك. اتصل بهم بعرض مخصص.',
      essentialElements: [
        'أنواع المؤثرين: نانو، مايكرو، ماكرو',
        'معايير الاختيار: الصلة، التفاعل، الأصالة',
        'أشكال التعاون: منشورات، قصص، فيديوهات',
        'العائد: الوصول، التفاعل، التحويلات'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>التسويق بالمؤثرين طريقة فعالة للوصول للجماهير المستهدفة.</p>
        <h2>١. أنواع المؤثرين</h2>
        <p>نانو، مايكرو، ماكرو، ميجا حسب عدد المتابعين.</p>
        <h2>٢. اختيار المؤثرين</h2>
        <p>الصلة، التفاعل الحقيقي، الأصالة.</p>
        <h2>الخلاصة</h2>
        <p>اختر المؤثرين المناسبين وابني شراكات أصيلة.</p>
      `,
      prerequisites: ['فهم أساسي لوسائل التواصل الاجتماعي', 'تعريف واضح لعلامتك التجارية'],
      tools: ['AspireIQ', 'Social Blade', 'Instagram', 'TikTok'],
      nextSteps: ['حدد أهدافك', 'ابحث عن المؤثرين', 'اتصل بهم']
    },
    en: {
      domainExplanation: 'Influencer marketing uses influencers\' credibility and reach to promote your brand.',
      howToStart: 'Define your goals and target audiences. Research influencers in your niche. Contact them with personalized proposal.',
      essentialElements: [
        'Influencer types: Nano, Micro, Macro, Mega',
        'Selection criteria: Relevance, engagement, authenticity',
        'Collaboration formats: Posts, Stories, Videos',
        'ROI: Reach, engagement, conversions'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Influencer marketing is an effective way to reach targeted audiences.</p>
        <h2>1. Influencer Types</h2>
        <p>Nano, Micro, Macro, Mega based on follower count.</p>
        <h2>2. Selecting Influencers</h2>
        <p>Relevance, real engagement, authenticity.</p>
        <h2>Conclusion</h2>
        <p>Choose right influencers and build authentic partnerships.</p>
      `,
      prerequisites: ['Basic social media understanding', 'Clear brand definition'],
      tools: ['AspireIQ', 'Social Blade', 'Instagram', 'TikTok'],
      nextSteps: ['Define goals', 'Research influencers', 'Contact them']
    }
  }
}

export default marketingTranslations
