// Photography category translations (Blogs 1-5)
import { BlogTranslations } from '../types'

const photographyTranslations: BlogTranslations = {
  // Blog 1: Les bases de la composition photographique
  1: {
    fr: {
      domainExplanation: 'La composition photographique est l\'un des piliers fondamentaux de la photographie. Elle permet de transformer une simple image en une histoire visuelle, d\'équilibrer les éléments, d\'attirer le regard et de transmettre une émotion. Même avec un appareil basique, une bonne composition peut donner un résultat professionnel.',
      howToStart: 'Commencez par observer les photos que vous aimez et identifiez les éléments qui les rendent attrayantes. Pratiquez la règle des tiers en activant la grille sur votre appareil. Prenez des photos quotidiennement et analysez-les pour comprendre ce qui fonctionne.',
      essentialElements: [
        'Règle des tiers : Divisez l\'image en neuf zones égales et placez le sujet principal sur une ligne ou intersection',
        'Lignes directrices : Utilisez les lignes (routes, ponts, rails, ombres) pour guider l\'œil vers le sujet',
        'Cadrage naturel : Encadrez le sujet avec des éléments naturels (portes, fenêtres, branches, arches)',
        'Minimalisme visuel : Moins d\'éléments = plus de puissance, utilisez l\'espace négatif',
        'Équilibre visuel : Créez un équilibre symétrique, asymétrique ou radial',
        'Profondeur : Incluez trois plans (premier plan, plan intermédiaire, arrière-plan)',
        'Point de vue : Changez l\'angle (vue du bas, vue du dessus, vue latérale, macro)',
        'Règle du regard : Laissez de l\'espace dans la direction où le sujet regarde',
        'Symétrie et motifs : Utilisez les motifs naturels et la symétrie pour attirer l\'œil'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>La composition photographique est l'un des piliers fondamentaux de la photographie. Elle permet de transformer une simple image en une histoire visuelle, d'équilibrer les éléments, d'attirer le regard et de transmettre une émotion. Même avec un appareil basique, une bonne composition peut donner un résultat professionnel. Ce guide complet explore les règles essentielles utilisées par les photographes en 2025, avec des exemples concrets et des conseils pour progresser rapidement.</p>
        <img src="https://images.unsplash.com/photo-1516035069371-85723e4d43f9?w=1200&auto=format&fit=crop" alt="Composition photographique" class="w-full rounded-lg my-6" />
        
        <h2>1. La règle des tiers : la base universelle</h2>
        <p>La règle des tiers consiste à diviser l'image en neuf zones égales à l'aide de deux lignes verticales et deux lignes horizontales.</p>
        <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&auto=format&fit=crop" alt="Règle des tiers" class="w-full rounded-lg my-6" />
        <ul>
          <li>Place le sujet principal sur une ligne ou une intersection</li>
          <li>Évite de centrer systématiquement</li>
        </ul>
        <h3>Pourquoi ça marche ?</h3>
        <p>Parce que l'œil humain lit une image comme un texte : il cherche des points forts et des directions naturelles.</p>
        <h3>Exemples :</h3>
        <ul>
          <li><strong>Portrait :</strong> placer un œil sur une intersection</li>
          <li><strong>Paysage :</strong> l'horizon sur la ligne supérieure ou inférieure</li>
        </ul>
        
        <h2>2. Les lignes directrices (Leading Lines)</h2>
        <p>Les lignes (routes, ponts, rails, ombres, clôtures…) guident l'œil vers le sujet principal.</p>
        <img src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=1200&auto=format&fit=crop" alt="Lignes directrices" class="w-full rounded-lg my-6" />
        <h3>Types :</h3>
        <ul>
          <li><strong>Lignes diagonales :</strong> dynamique</li>
          <li><strong>Lignes horizontales :</strong> calme</li>
          <li><strong>Lignes verticales :</strong> puissance</li>
          <li><strong>Lignes courbes :</strong> élégance</li>
        </ul>
        <p><strong>Conseil pro :</strong> Utilise les leading lines pour créer de la profondeur.</p>
        
        <h2>3. Le cadrage et l'utilisation des cadres naturels</h2>
        <p>Encadrer un sujet à l'aide d'éléments naturels : portes, fenêtres, branches, arches…</p>
        <h3>Effets :</h3>
        <ul>
          <li>Renforce l'attention</li>
          <li>Ajoute une profondeur</li>
          <li>Crée une ambiance immersive</li>
        </ul>
        
        <h2>4. Le minimalisme visuel</h2>
        <p>Moins il y a d'éléments, plus l'image est puissante. Le minimalisme en photographie met en avant :</p>
        <ul>
          <li>l'espace négatif</li>
          <li>un sujet unique</li>
          <li>un contraste marqué</li>
        </ul>
        <p><strong>Exemple :</strong> Un objet isolé sur un fond vide.</p>
        
        <h2>5. L'équilibre visuel</h2>
        <p>Deux objets peuvent créer un équilibre même si leur taille diffère : un grand élément proche = un petit élément loin.</p>
        <h3>Types d'équilibre :</h3>
        <ul>
          <li>Symétrique</li>
          <li>Asymétrique</li>
          <li>Radial</li>
        </ul>
        
        <h2>6. La profondeur : donner du relief</h2>
        <p>Inclure trois plans dans l'image :</p>
        <ul>
          <li>Premier plan</li>
          <li>Plan intermédiaire</li>
          <li>Arrière-plan</li>
        </ul>
        <p>Cela donne un rendu plus 3D et immersif.</p>
        <img src="https://images.unsplash.com/photo-1516035069371-85723e4d43f9?w=1200&auto=format&fit=crop" alt="Profondeur photographique" class="w-full rounded-lg my-6" />
        
        <h2>7. Le point de vue (Angle & Perspective)</h2>
        <p>Change le point de vue :</p>
        <ul>
          <li>vue du bas (low angle)</li>
          <li>vue du dessus (bird view)</li>
          <li>vue latérale</li>
          <li>macro</li>
        </ul>
        <p>Un simple changement d'angle peut transformer la photo.</p>
        
        <h2>8. La règle du regard</h2>
        <p>Dans un portrait, laisse de l'espace dans la direction où le sujet regarde. Cela donne :</p>
        <ul>
          <li>du mouvement</li>
          <li>une histoire</li>
          <li>un équilibre</li>
        </ul>
        
        <h2>9. La symétrie et les motifs</h2>
        <p>Les architectures modernes, les galaxies, les escaliers, les fenêtres… créent des motifs parfaits. La symétrie attire naturellement l'œil.</p>
        <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&auto=format&fit=crop" alt="Symétrie et motifs" class="w-full rounded-lg my-6" />
        
        <h2>10. Conclusion</h2>
        <p>La composition n'est pas une liste de règles rigides. C'est un langage visuel que tu adaptes selon ton style et ton intention. En maîtrisant ces bases, tu pourras créer des photos harmonieuses, artistiques et professionnelles — même avec un smartphone.</p>
      `,
      prerequisites: ['Aucun prérequis technique nécessaire', 'Un appareil photo ou smartphone', 'Un œil pour l\'observation'],
      tools: ['Appareil photo ou smartphone', 'Application de retouche photo (optionnel)', 'Grille de composition activée'],
      nextSteps: [
        'Pratiquez la règle des tiers pendant une semaine',
        'Expérimentez avec les lignes directrices',
        'Analysez 10 photos que vous aimez et identifiez leurs techniques de composition',
        'Rejoignez une communauté de photographes pour obtenir des retours'
      ]
    },
    ar: {
      domainExplanation: 'تُعدّ هندسة التكوين في التصوير الفوتوغرافي أساس الصورة الناجحة. فهي التي تمنح الصورة معنى، وتوازنًا بصريًا، وانسجامًا، وتجعل المشاهد يتفاعل مع المشهد.',
      howToStart: 'ابدأ بمراقبة الصور التي تحبها وتحديد العناصر التي تجعلها جذابة. تدرب على قاعدة الأثلاث من خلال تفعيل الشبكة على جهازك. التقط صورًا يوميًا وحللها لفهم ما ينجح.',
      essentialElements: [
        'قاعدة الأثلاث: قسّم الصورة إلى ٩ مربعات وضع العنصر الرئيسي على أحد الخطوط أو نقاط التقاطع',
        'الخطوط المُوجِّهة: الطرق، الجسور، الظلال، الأسوار… كلها خطوط تقود العين نحو الهدف',
        'الإطار الطبيعي: استخدام الأبواب، النوافذ، الأشجار لخلق إطار طبيعي حول العنصر',
        'التبسيط (الحد الأدنى): موضوع واحد + مساحة فارغة = صورة قوية',
        'التوازن البصري: التوازن يمكن أن يكون متماثلًا أو غير متماثل',
        'العمق: وجود مقدمة + وسط + خلفية يمنح إحساسًا بالبعد',
        'زاوية التصوير: جرّب زوايا منخفضة أو مرتفعة أو تصويرًا قريبًا',
        'قاعدة النظرة: اترك مساحة باتجاه نظرة الشخص',
        'التماثل والنقوش: العمارة والطبيعة مليئة بأنماط متناظرة تجذب العين'
      ],
      fullContent: `
        <h2>المقدمة</h2>
        <p>تُعدّ هندسة التكوين في التصوير الفوتوغرافي أساس الصورة الناجحة. فهي التي تمنح الصورة معنى، وتوازنًا بصريًا، وانسجامًا، وتجعل المشاهد يتفاعل مع المشهد.</p>
        <img src="https://images.unsplash.com/photo-1516035069371-85723e4d43f9?w=1200&auto=format&fit=crop" alt="التكوين الفوتوغرافي" class="w-full rounded-lg my-6" />
        
        <h2>١. قاعدة الأثلاث</h2>
        <p>قسّم الصورة إلى ٩ مربعات وضع العنصر الرئيسي على أحد الخطوط أو نقاط التقاطع.</p>
        <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&auto=format&fit=crop" alt="قاعدة الأثلاث" class="w-full rounded-lg my-6" />
        
        <h2>٢. الخطوط المُوجِّهة</h2>
        <p>الطرق، الجسور، الظلال، الأسوار… كلها خطوط تقود العين نحو الهدف.</p>
        <img src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=1200&auto=format&fit=crop" alt="الخطوط الموجهة" class="w-full rounded-lg my-6" />
        
        <h2>٣. الإطار الطبيعي</h2>
        <p>استخدام الأبواب، النوافذ، الأشجار لخلق إطار طبيعي حول العنصر.</p>
        
        <h2>٤. التبسيط (الحد الأدنى)</h2>
        <p>موضوع واحد + مساحة فارغة = صورة قوية.</p>
        
        <h2>٥. التوازن البصري</h2>
        <p>التوازن يمكن أن يكون متماثلًا أو غير متماثل.</p>
        
        <h2>٦. العمق</h2>
        <p>وجود مقدمة + وسط + خلفية يمنح إحساسًا بالبعد.</p>
        <img src="https://images.unsplash.com/photo-1516035069371-85723e4d43f9?w=1200&auto=format&fit=crop" alt="العمق في التصوير" class="w-full rounded-lg my-6" />
        
        <h2>٧. زاوية التصوير</h2>
        <p>جرّب زوايا منخفضة أو مرتفعة أو تصويرًا قريبًا.</p>
        
        <h2>٨. قاعدة النظرة</h2>
        <p>اترك مساحة باتجاه نظرة الشخص.</p>
        
        <h2>٩. التماثل والنقوش</h2>
        <p>العمارة والطبيعة مليئة بأنماط متناظرة تجذب العين.</p>
        <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&auto=format&fit=crop" alt="التماثل والنقوش" class="w-full rounded-lg my-6" />
        
        <h2>١٠. الخلاصة</h2>
        <p>التكوين ليس قواعد جامدة، بل أسلوب بصري يمنح صورتك هوية فنية.</p>
      `,
      prerequisites: ['لا توجد متطلبات تقنية', 'كاميرا أو هاتف ذكي', 'عين للملاحظة'],
      tools: ['كاميرا أو هاتف ذكي', 'تطبيق تعديل الصور (اختياري)', 'شبكة التكوين مفعلة'],
      nextSteps: [
        'تدرب على قاعدة الأثلاث لمدة أسبوع',
        'جرب خطوط التوجيه',
        'حلل 10 صور تحبها وحدد تقنيات التكوين الخاصة بها',
        'انضم إلى مجتمع المصورين للحصول على ملاحظات'
      ]
    },
    en: {
      domainExplanation: 'Photographic composition is the foundation of visual storytelling. It transforms a simple shot into an expressive image that communicates depth, balance and emotion. With good composition, even a basic camera can produce professional-looking photos.',
      howToStart: 'Start by observing photos you like and identifying the elements that make them attractive. Practice the rule of thirds by activating the grid on your device. Take photos daily and analyze them to understand what works.',
      essentialElements: [
        'Rule of Thirds: Divide your frame into nine equal parts and place the main subject on a line or intersection',
        'Leading Lines: Use lines (roads, bridges, railings, shadows) to guide the viewer\'s eye toward the subject',
        'Framing: Use natural frames like windows, arches, trees',
        'Minimalism: Highlight negative space, a single subject, and strong contrast',
        'Visual Balance: Balance large and small elements through placement',
        'Depth: Combine foreground + midground + background for a 3D effect',
        'Perspective: Try low angle, high angle, side view, macro',
        'Eye-Line Rule: Leave space in the direction the subject is looking',
        'Symmetry & Patterns: Architecture, nature and objects often create strong symmetrical patterns'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Photographic composition is the foundation of visual storytelling. It transforms a simple shot into an expressive image that communicates depth, balance and emotion. With good composition, even a basic camera can produce professional-looking photos.</p>
        <img src="https://images.unsplash.com/photo-1516035069371-85723e4d43f9?w=1200&auto=format&fit=crop" alt="Photographic composition" class="w-full rounded-lg my-6" />
        
        <h2>1. Rule of Thirds</h2>
        <p>Divide your frame into nine equal parts and place the main subject on a line or intersection.</p>
        <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&auto=format&fit=crop" alt="Rule of thirds" class="w-full rounded-lg my-6" />
        <h3>Examples:</h3>
        <ul>
          <li><strong>Portraits:</strong> one eye on an intersection</li>
          <li><strong>Landscapes:</strong> horizon on the top or bottom line</li>
        </ul>
        
        <h2>2. Leading Lines</h2>
        <p>Use lines (roads, bridges, railings, shadows) to guide the viewer's eye toward the subject.</p>
        <img src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=1200&auto=format&fit=crop" alt="Leading lines" class="w-full rounded-lg my-6" />
        <ul>
          <li><strong>Diagonal</strong> = dynamic</li>
          <li><strong>Horizontal</strong> = calm</li>
          <li><strong>Vertical</strong> = strength</li>
          <li><strong>Curved</strong> = elegance</li>
        </ul>
        
        <h2>3. Framing</h2>
        <p>Use natural frames like windows, arches, trees.</p>
        
        <h2>4. Minimalism</h2>
        <p>Highlight negative space, a single subject, and strong contrast.</p>
        
        <h2>5. Visual Balance</h2>
        <p>Balance large and small elements through placement.</p>
        
        <h2>6. Depth</h2>
        <p>Combine foreground + midground + background for a 3D effect.</p>
        <img src="https://images.unsplash.com/photo-1516035069371-85723e4d43f9?w=1200&auto=format&fit=crop" alt="Depth in photography" class="w-full rounded-lg my-6" />
        
        <h2>7. Perspective</h2>
        <p>Try low angle, high angle, side view, macro.</p>
        
        <h2>8. Eye-Line Rule</h2>
        <p>Leave space in the direction the subject is looking.</p>
        
        <h2>9. Symmetry & Patterns</h2>
        <p>Architecture, nature and objects often create strong symmetrical patterns.</p>
        <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&auto=format&fit=crop" alt="Symmetry and patterns" class="w-full rounded-lg my-6" />
        
        <h2>10. Conclusion</h2>
        <p>Composition is a flexible language. Mastering the basics allows you to create unique and professional photographs.</p>
      `,
      prerequisites: ['No technical prerequisites required', 'A camera or smartphone', 'An eye for observation'],
      tools: ['Camera or smartphone', 'Photo editing app (optional)', 'Composition grid enabled'],
      nextSteps: [
        'Practice the rule of thirds for a week',
        'Experiment with leading lines',
        'Analyze 10 photos you like and identify their composition techniques',
        'Join a photography community for feedback'
      ]
    }
  },
  // Blog 2: Maîtriser la lumière en photographie
  2: {
    fr: {
      domainExplanation: 'La lumière est l\'élément fondamental de toute photographie. Sans lumière, il n\'y a pas d\'image. Comprendre comment la lumière fonctionne, comment elle interagit avec votre sujet et comment la manipuler est essentiel pour créer des photos professionnelles. Chaque type de lumière a ses caractéristiques, avantages et défis, et savoir les identifier et les utiliser fait la différence entre une photo moyenne et une photo exceptionnelle.',
      howToStart: 'Commencez par observer la lumière autour de vous à différents moments de la journée. Photographiez le même sujet à différentes heures pour voir comment la lumière change l\'ambiance et les détails. Expérimentez d\'abord avec la lumière naturelle (fenêtre, extérieur) avant de passer à la lumière artificielle. Notez la direction, l\'intensité et la couleur de la lumière. Analysez les ombres qu\'elle crée et leur impact sur votre composition.',
      essentialElements: [
        'Heure dorée : La première heure après le lever du soleil et la dernière heure avant le coucher offrent une lumière chaude, douce et directionnelle, parfaite pour portraits et paysages',
        'Heure bleue : La période de crépuscule avec un ciel bleu profond crée une atmosphère unique, idéale pour photos urbaines et architecturales',
        'Lumière directe vs diffuse : La lumière directe crée des ombres dures et des contrastes marqués, la lumière diffuse (nuages, ombre) crée des ombres douces et uniformes',
        'Direction de la lumière : Frontale (éclaire uniformément), latérale (crée profondeur et texture), contre-jour (silhouettes dramatiques), rasant (met en valeur texture)',
        'Température de couleur : La lumière naturelle change de couleur selon l\'heure (bleue le matin, chaude le soir), mesurée en Kelvin (5500K = lumière du jour)',
        'Réflexion et rebond : Utilisez des surfaces réfléchissantes (murs blancs, réflecteurs) pour adoucir, diriger et compléter la lumière principale',
        'Ratio d\'éclairage : Contrôlez le contraste entre zones claires et sombres pour créer de la profondeur et de l\'intérêt visuel',
        'Éclairage studio : Techniques classiques (Rembrandt, Butterfly, Loop) pour portraits professionnels avec contrôle total de la lumière'
      ],
      fullContent: `
        <h2>Introduction : La lumière, essence de la photographie</h2>
        <p>La lumière est le matériau brut, la palette et le pinceau du photographe. Sans lumière, il n'y a pas de photo. Comprendre comment la lumière fonctionne, comment elle interagit avec votre sujet, comment elle sculpte les formes et crée les atmosphères est crucial pour créer des images exceptionnelles. Ce guide complet explore tous les aspects de la maîtrise de la lumière en photographie en 2025.</p>
        <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&auto=format&fit=crop" alt="Lumière photographique" class="w-full rounded-lg my-6" />
        
        <h2>1. La lumière naturelle : travailler avec le soleil</h2>
        
        <h3>L'heure dorée (Golden Hour)</h3>
        <p>L'heure dorée est la période magique tant attendue par les photographes :</p>
        <img src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&auto=format&fit=crop" alt="Heure dorée" class="w-full rounded-lg my-6" />
        <ul>
          <li><strong>Timing :</strong> Première heure après le lever du soleil et dernière heure avant le coucher</li>
          <li><strong>Qualité :</strong> Lumière chaude, douce et directionnelle avec une teinte dorée/rose</li>
          <li><strong>Avantages :</strong> Ombres longues et dramatiques, couleurs saturées, peau flatteuse pour portraits</li>
          <li><strong>Idéale pour :</strong> Portraits, paysages, photos de rue, photographie de mariage</li>
          <li><strong>Conseil pro :</strong> Planifiez vos séances photo selon les horaires de golden hour de votre région</li>
        </ul>
        
        <h3>L'heure bleue (Blue Hour)</h3>
        <p>L'heure bleue offre une atmosphère unique et onirique :</p>
        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&auto=format&fit=crop" alt="Heure bleue" class="w-full rounded-lg my-6" />
        <ul>
          <li><strong>Timing :</strong> Période de crépuscule avec ciel bleu profond (environ 20-30 minutes)</li>
          <li><strong>Qualité :</strong> Lumière douce, uniforme et bleutée</li>
          <li><strong>Avantages :</strong> Contraste magnifique avec lumières artificielles, ambiances dramatiques</li>
          <li><strong>Idéale pour :</strong> Photos urbaines, architecturales, longues expositions, photographie de paysage nocturne</li>
          <li><strong>Technique :</strong> Utilisez un trépied et exposez pour les lumières artificielles</li>
        </ul>
        
        <h3>Lumière en plein jour (Midday Light)</h3>
        <p>La lumière de midi peut sembler difficile, mais elle est gérable avec les bonnes techniques :</p>
        <ul>
          <li><strong>Caractéristiques :</strong> Lumière dure, directe, venant du haut avec ombres prononcées</li>
          <li><strong>Défis :</strong> Contrastes extrêmes, yeux qui plissent, couleurs moins saturées</li>
          <li><strong>Solutions :</strong> Cherchez l'ombre pour adoucir la lumière, utilisez un réflecteur pour remplir les ombres</li>
          <li><strong>Idéale pour :</strong> Photos en noir et blanc, architecture moderne, portraits avec flash de remplissage</li>
          <li><strong>Technique :</strong> Utilisez un diffuseur au-dessus de votre sujet ou photographiez à l'ombre d'un bâtiment</li>
        </ul>
        
        <h3>Lumière de fenêtre (Window Light)</h3>
        <p>La lumière de fenêtre est une source de lumière naturelle contrôlable et magnifique :</p>
        <ul>
          <li><strong>Avantages :</strong> Lumière douce et directionnelle, facile à contrôler</li>
          <li><strong>Techniques :</strong> Positionnez le sujet à différents angles par rapport à la fenêtre</li>
          <li><strong>Latérale :</strong> Crée de la profondeur et des ombres sculptées (éclairage Rembrandt)</li>
          <li><strong>Frontale :</strong> Éclaire uniformément, idéal pour portraits flatteurs</li>
          <li><strong>Contre-jour :</strong> Crée des silhouettes ou nécessite un rebond de lumière</li>
          <li><strong>Conseil :</strong> Utilisez un voilage blanc pour diffuser si la lumière est trop dure</li>
        </ul>
        
        <h2>2. La lumière artificielle : contrôle total</h2>
        
        <h3>Flash intégré</h3>
        <p>Le flash intégré de votre appareil peut être utile si utilisé correctement :</p>
        <ul>
          <li><strong>Avantages :</strong> Toujours disponible, pas besoin d'équipement supplémentaire</li>
          <li><strong>Limitations :</strong> Lumière dure, direction fixe, portée limitée</li>
          <li><strong>Techniques :</strong> Utilisez un diffuseur DIY (tissu blanc, papier calque), évitez le flash direct sur le visage</li>
          <li><strong>Flash de remplissage :</strong> Réduisez la puissance pour adoucir les ombres en plein jour</li>
        </ul>
        
        <h3>Flash externe (Speedlight)</h3>
        <p>Le flash externe offre un contrôle beaucoup plus grand :</p>
        <img src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&auto=format&fit=crop" alt="Flash externe" class="w-full rounded-lg my-6" />
        <ul>
          <li><strong>Avantages :</strong> Plus de puissance, direction contrôlable, possibilité de rebond</li>
          <li><strong>Rebond :</strong> Orientez le flash vers le plafond ou un mur blanc pour adoucir la lumière</li>
          <li><strong>Modificateurs :</strong> Utilisez softbox, parapluie ou snoot pour modifier la qualité de la lumière</li>
          <li><strong>Flash hors caméra :</strong> Utilisez des déclencheurs pour placer le flash à distance</li>
          <li><strong>Technique TTL :</strong> Laisse l'appareil calculer l'exposition automatiquement</li>
          <li><strong>Mode manuel :</strong> Contrôle total sur la puissance pour résultats cohérents</li>
        </ul>
        
        <h3>Lumière continue (LED)</h3>
        <p>Les panneaux LED sont devenus essentiels pour la photographie moderne :</p>
        <ul>
          <li><strong>Avantages :</strong> Vous voyez exactement ce que vous obtenez (WYSIWYG), température de couleur ajustable</li>
          <li><strong>Idéal pour :</strong> Vidéo, photographie de produit, portraits en studio, streaming</li>
          <li><strong>Types :</strong> Panneaux plats, lanternes, tubes LED</li>
          <li><strong>Température :</strong> Réglable de 3200K (chaud) à 5600K (jour) ou RGB pour couleurs créatives</li>
          <li><strong>Avantages écologiques :</strong> Consommation réduite, pas de chaleur excessive</li>
        </ul>
        
        <h3>Lumière de studio (Strobe)</h3>
        <p>Les flashes de studio offrent la puissance maximale pour la photographie professionnelle :</p>
        <ul>
          <li><strong>Avantages :</strong> Puissance très élevée, contrôle précis, modificateurs professionnels compatibles</li>
          <li><strong>Idéal pour :</strong> Portraits studio, photographie de mode, photographie de produit, photographie publicitaire</li>
          <li><strong>Modificateurs :</strong> Softbox (grande et petite), parapluie (blanc translucide ou argenté), beauty dish, snoot</li>
          <li><strong>Mise en place classique :</strong> Une lumière principale (key), une lumière de remplissage (fill), une lumière d'éclairage des cheveux (hair/rim)</li>
        </ul>
        
        <h2>3. Techniques d'éclairage classiques</h2>
        
        <h3>Éclairage Rembrandt</h3>
        <p>Nommé d'après le célèbre peintre, cet éclairage crée un triangle de lumière sur la joue :</p>
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&auto=format&fit=crop" alt="Éclairage Rembrandt" class="w-full rounded-lg my-6" />
        <ul>
          <li><strong>Position :</strong> Lumière à 45° par rapport au sujet, légèrement au-dessus du niveau des yeux</li>
          <li><strong>Résultat :</strong> Triangle lumineux sous l'œil, ombre du nez qui crée ce triangle</li>
          <li><strong>Idéal pour :</strong> Portraits classiques, portraits d'hommes, photos professionnelles</li>
          <li><strong>Ambiance :</strong> Dramatique mais équilibré</li>
        </ul>
        
        <h3>Éclairage Butterfly (Paramount)</h3>
        <p>Crée une ombre en forme de papillon sous le nez :</p>
        <ul>
          <li><strong>Position :</strong> Lumière frontale, au-dessus de l'appareil, pointant vers le bas</li>
          <li><strong>Résultat :</strong> Ombres sous le nez et le menton en forme de papillon</li>
          <li><strong>Idéal pour :</strong> Portraits de beauté, portraits de femmes, photos glamour</li>
          <li><strong>Avantages :</strong> Minimise les rides, flatte les pommettes, crée un regard perçant</li>
        </ul>
        
        <h3>Éclairage Loop</h3>
        <p>Une variante douce de l'éclairage Rembrandt :</p>
        <ul>
          <li><strong>Position :</strong> Lumière à 30-45°, légèrement au-dessus</li>
          <li><strong>Résultat :</strong> Petite ombre en boucle du nez sur la joue</li>
          <li><strong>Idéal pour :</strong> Portraits polyvalents, portraits de famille</li>
        </ul>
        
        <h3>Éclairage en Split</h3>
        <p>Divise le visage en deux parties égales :</p>
        <ul>
          <li><strong>Position :</strong> Lumière à 90° du sujet</li>
          <li><strong>Résultat :</strong> Une moitié du visage éclairée, l'autre dans l'ombre</li>
          <li><strong>Idéal pour :</strong> Portraits dramatiques, portraits d'hommes, photos artistiques</li>
        </ul>
        
        <h3>Contre-jour (Rim Light)</h3>
        <p>Placez votre sujet entre vous et la source de lumière :</p>
        <img src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&auto=format&fit=crop" alt="Contre-jour" class="w-full rounded-lg my-6" />
        <ul>
          <li><strong>Résultat :</strong> Crée des silhouettes ou un contour lumineux autour du sujet</li>
          <li><strong>Silhouettes :</strong> Exposez pour le fond lumineux, le sujet sera en ombre</li>
          <li><strong>Rim light :</strong> Utilisez un flash ou réflecteur pour éclairer légèrement le sujet</li>
          <li><strong>Idéal pour :</strong> Photos créatives, portraits artistiques, photos de couple romantiques</li>
        </ul>
        
        <h2>4. Modificateurs de lumière et accessoires</h2>
        
        <h3>Réflecteurs</h3>
        <p>Les réflecteurs sont essentiels pour contrôler et compléter la lumière :</p>
        <ul>
          <li><strong>Types :</strong> Blanc (lumière douce), argent (lumière plus dure et directionnelle), or (lumière chaude)</li>
          <li><strong>Utilisations :</strong> Remplir les ombres, adoucir les contrastes, créer un éclairage auxiliaire</li>
          <li><strong>Positions :</strong> En face de la source de lumière principale pour rebondir vers le sujet</li>
          <li><strong>DIY :</strong> Un carton blanc ou un drap blanc peut servir de réflecteur improvisé</li>
        </ul>
        
        <h3>Diffuseurs</h3>
        <p>Adoucissent la lumière dure :</p>
        <ul>
          <li><strong>Types :</strong> Softbox, parapluie translucide, diffuseur portable (scrim)</li>
          <li><strong>Effet :</strong> Agrandit la source de lumière apparente, crée des ombres douces</li>
          <li><strong>Règle :</strong> Plus la source de lumière est grande par rapport au sujet, plus la lumière est douce</li>
        </ul>
        
        <h3>Snoot et grilles</h3>
        <p>Contrôlent et dirigent la lumière précisément :</p>
        <ul>
          <li><strong>Snoot :</strong> Concentre la lumière en un faisceau étroit</li>
          <li><strong>Grilles (honeycomb) :</strong> Dirigent la lumière et préviennent les déversements</li>
          <li><strong>Idéal pour :</strong> Éclairage dramatique, accentuation de zones spécifiques</li>
        </ul>
        
        <h2>5. Température de couleur et balance des blancs</h2>
        
        <p>Comprendre la température de couleur est crucial pour des couleurs naturelles :</p>
        <ul>
          <li><strong>Kelvin (K) :</strong> Unité de mesure de la température de couleur</li>
          <li><strong>2000-3000K :</strong> Lumière chaude (bougies, ampoules tungstène) - teinte orange/jaune</li>
          <li><strong>4000-5000K :</strong> Lumière neutre (flash, lumière du jour nuageuse)</li>
          <li><strong>5500-6500K :</strong> Lumière du jour (soleil de midi) - blanche</li>
          <li><strong>7000-10000K :</strong> Lumière froide (ombre, ciel bleu) - teinte bleue</li>
          <li><strong>Balance des blancs :</strong> Réglage de votre appareil pour compenser la température de couleur</li>
          <li><strong>Préréglages :</strong> Tungstène, fluorescent, jour, ombre, nuageux</li>
          <li><strong>Balance personnalisée :</strong> Photographiez une surface blanche/gris neutre pour calibration</li>
          <li><strong>RAW :</strong> Photographiez en RAW pour ajuster la balance des blancs en post-production sans perte de qualité</li>
        </ul>
        
        <h2>6. Ratio d'éclairage et contrôle du contraste</h2>
        
        <p>Le ratio d'éclairage contrôle le contraste entre zones claires et sombres :</p>
        <ul>
          <li><strong>Ratio 1:1 :</strong> Lumière principale = lumière de remplissage (plat, peu dramatique)</li>
          <li><strong>Ratio 2:1 :</strong> Lumière principale 2x plus forte (lumineux mais doux)</li>
          <li><strong>Ratio 4:1 :</strong> Lumière principale 4x plus forte (dramatique, contrasté)</li>
          <li><strong>Ratio 8:1 :</strong> Très contrasté, ombres profondes (très dramatique)</li>
          <li><strong>Mesure :</strong> Utilisez un posemètre pour mesurer précisément les ratios</li>
          <li><strong>Technique :</strong> Ajustez la puissance du flash ou la distance de la source de lumière</li>
        </ul>
        
        <h2>7. Erreurs courantes à éviter</h2>
        
        <ul>
          <li><strong>Ne pas tenir compte de la direction :</strong> La direction de la lumière détermine la forme et la texture</li>
          <li><strong>Flash intégré direct :</strong> Crée des ombres dures et des yeux rouges, toujours diffuser</li>
          <li><strong>Photographier en plein soleil sans protection :</strong> Cherchez l'ombre ou utilisez un réflecteur</li>
          <li><strong>Ignorer la température de couleur :</strong> Résulte en couleurs non naturelles</li>
          <li><strong>Ne pas utiliser de réflecteur quand nécessaire :</strong> Les ombres trop dures tuent les détails</li>
          <li><strong>Surchauffe des sources LED :</strong> Laissez les refroidir entre les séances</li>
          <li><strong>Oublier le ratio d'éclairage :</strong> Contrôle du contraste = contrôle de l'ambiance</li>
        </ul>
        
        <h2>8. Exercices pratiques pour maîtriser la lumière</h2>
        
        <ol>
          <li><strong>Lumière naturelle :</strong> Photographiez le même sujet à différentes heures (matin, midi, soir, nuit)</li>
          <li><strong>Direction :</strong> Photographiez un portrait avec lumière frontale, latérale, arrière et au-dessus</li>
          <li><strong>Réflecteur :</strong> Photographiez avec et sans réflecteur pour voir la différence</li>
          <li><strong>Flash rebond :</strong> Expérimentez avec flash direct vs flash rebond</li>
          <li><strong>Température :</strong> Photographiez la même scène avec différentes balances des blancs</li>
          <li><strong>Ratio :</strong> Créez une série avec différents ratios d'éclairage (1:1, 2:1, 4:1)</li>
          <li><strong>Contre-jour :</strong> Photographiez des silhouettes au coucher du soleil</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>Maîtriser la lumière est une compétence qui se développe avec la pratique et l'observation. Chaque situation d'éclairage est unique, et le photographe qui comprend comment lire et manipuler la lumière crée des images qui se démarquent. Commencez par observer la lumière autour de vous, expérimentez avec les techniques de base, puis développez votre style personnel. La lumière n'est pas seulement un outil technique, c'est le langage visuel qui donne vie à vos photographies.</p>
        <img src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&auto=format&fit=crop" alt="Maîtrise de la lumière" class="w-full rounded-lg my-6" />
      `,
      prerequisites: [
        'Connaissances de base en photographie (exposition, ouverture, vitesse)',
        'Compréhension des modes de votre appareil photo',
        'Appareil photo avec contrôle manuel'
      ],
      tools: [
        'Appareil photo avec mode manuel',
        'Réflecteur (ou carton blanc)',
        'Flash externe (recommandé)',
        'Diffuseur/softbox (optionnel)',
        'Trépied (pour longue exposition)',
        'Posemètre (optionnel, pour mesure précise)'
      ],
      nextSteps: [
        'Photographiez le même sujet à différentes heures de la journée pour observer les changements de lumière',
        'Expérimentez avec la lumière de fenêtre en photographiant des portraits',
        'Pratiquez le contre-jour au coucher du soleil',
        'Apprenez à utiliser un réflecteur pour remplir les ombres',
        'Expérimentez avec flash rebond si vous avez un flash externe',
        'Maîtrisez la balance des blancs en photographiant différentes scènes',
        'Créez une série de photos avec différents ratios d\'éclairage'
      ]
    },
    ar: {
      domainExplanation: 'الضوء هو العنصر الأساسي في أي صورة فوتوغرافية. بدون ضوء، لا توجد صورة. فهم كيفية عمل الضوء، وكيف يتفاعل مع موضوعك، وكيفية التحكم به أمر ضروري لإنشاء صور احترافية. كل نوع من الضوء له خصائصه ومزاياه وتحدياته.',
      howToStart: 'ابدأ بمراقبة الضوء حولك في أوقات مختلفة من اليوم. التقط صورًا لنفس الموضوع في ساعات مختلفة لرؤية كيف يغير الضوء الجو والتفاصيل. جرب أولاً الضوء الطبيعي (نافذة، خارج) قبل الانتقال إلى الضوء الاصطناعي. لاحظ اتجاه وكثافة ولون الضوء.',
      essentialElements: [
        'الساعة الذهبية: الساعة الأولى بعد شروق الشمس والأخيرة قبل غروبها توفر ضوءًا دافئًا وناعمًا واتجاهيًا',
        'الساعة الزرقاء: فترة الشفق مع سماء زرقاء عميقة، مثالية للصور الحضرية والمعمارية',
        'الضوء المباشر مقابل المنتشر: الضوء المباشر يخلق ظلالًا صلبة، الضوء المنتشر (غيوم، ظل) يخلق ظلالًا ناعمة',
        'اتجاه الضوء: أمامي (يضيء بشكل موحد)، جانبي (يخلق عمقًا)، عكسي (ظلال درامية)',
        'درجة حرارة اللون: الضوء الطبيعي يتغير لونه حسب الوقت (أزرق في الصباح، دافئ في المساء)',
        'الانعكاس: استخدم الأسطح العاكسة لتليين وتوجيه الضوء',
        'نسبة الإضاءة: تحكم في التباين بين المناطق المضيئة والمظلمة',
        'إضاءة الاستوديو: تقنيات كلاسيكية (رامبرانت، الفراشة) للصور الشخصية الاحترافية'
      ],
      fullContent: `
        <h2>المقدمة: الضوء، جوهر التصوير الفوتوغرافي</h2>
        <p>الضوء هو المادة الخام واللوحة والفرشاة للمصور. بدون ضوء، لا توجد صورة. فهم كيفية عمل الضوء، وكيف يتفاعل مع موضوعك، وكيف ينحت الأشكال ويخلق الأجواء أمر بالغ الأهمية لإنشاء صور استثنائية.</p>
        <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&auto=format&fit=crop" alt="الضوء في التصوير" class="w-full rounded-lg my-6" />
        
        <h2>١. الضوء الطبيعي: العمل مع الشمس</h2>
        
        <h3>الساعة الذهبية</h3>
        <p>الساعة الذهبية هي الفترة السحرية التي ينتظرها المصورون:</p>
        <img src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&auto=format&fit=crop" alt="الساعة الذهبية" class="w-full rounded-lg my-6" />
        <ul>
          <li><strong>التوقيت:</strong> الساعة الأولى بعد شروق الشمس والأخيرة قبل غروبها</li>
          <li><strong>الجودة:</strong> ضوء دافئ وناعم واتجاهي مع صبغة ذهبية/وردية</li>
          <li><strong>المزايا:</strong> ظلال طويلة ودرامية، ألوان مشبعة، بشرة جذابة للصور الشخصية</li>
          <li><strong>مثالي لـ:</strong> الصور الشخصية، المناظر الطبيعية، صور الشارع، تصوير الأعراس</li>
        </ul>
        
        <h3>الساعة الزرقاء</h3>
        <p>الساعة الزرقاء توفر جوًا فريدًا ومثاليًا:</p>
        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&auto=format&fit=crop" alt="الساعة الزرقاء" class="w-full rounded-lg my-6" />
        <ul>
          <li><strong>التوقيت:</strong> فترة الشفق مع سماء زرقاء عميقة (حوالي 20-30 دقيقة)</li>
          <li><strong>الجودة:</strong> ضوء ناعم وموحد ومزرق</li>
          <li><strong>المزايا:</strong> تباين رائع مع الأضواء الاصطناعية، أجواء درامية</li>
          <li><strong>مثالي لـ:</strong> الصور الحضرية، المعمارية، التعريض الطويل</li>
        </ul>
        
        <h3>الضوء الطبيعي من النافذة</h3>
        <p>ضوء النافذة هو مصدر ضوء طبيعي قابل للتحكم وجميل:</p>
        <ul>
          <li><strong>المزايا:</strong> ضوء ناعم واتجاهي، سهل التحكم</li>
          <li><strong>التقنيات:</strong> ضع الموضوع بزوايا مختلفة بالنسبة للنافذة</li>
          <li><strong>جانبي:</strong> يخلق عمقًا وظلالًا منحوتة</li>
          <li><strong>أمامي:</strong> يضيء بشكل موحد، مثالي للصور الشخصية الجذابة</li>
        </ul>
        
        <h2>٢. الضوء الاصطناعي: تحكم كامل</h2>
        
        <h3>الفلاش المدمج</h3>
        <p>فلاش الكاميرا المدمج يمكن أن يكون مفيدًا إذا استخدم بشكل صحيح:</p>
        <ul>
          <li><strong>المزايا:</strong> متاح دائمًا، لا حاجة لمعدات إضافية</li>
          <li><strong>القيود:</strong> ضوء قاسٍ، اتجاه ثابت، مدى محدود</li>
          <li><strong>التقنيات:</strong> استخدم موزع DIY (قماش أبيض)، تجنب الفلاش المباشر على الوجه</li>
        </ul>
        
        <h3>الفلاش الخارجي</h3>
        <p>الفلاش الخارجي يوفر تحكمًا أكبر بكثير:</p>
        <img src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&auto=format&fit=crop" alt="الفلاش الخارجي" class="w-full rounded-lg my-6" />
        <ul>
          <li><strong>المزايا:</strong> المزيد من القوة، اتجاه قابل للتحكم، إمكانية الانعكاس</li>
          <li><strong>الانعكاس:</strong> وجه الفلاش نحو السقف أو جدار أبيض لتليين الضوء</li>
          <li><strong>المعدلات:</strong> استخدم softbox، مظلة، أو snoot لتعديل جودة الضوء</li>
        </ul>
        
        <h3>الضوء المستمر (LED)</h3>
        <p>ألواح LED أصبحت ضرورية للتصوير الفوتوغرافي الحديث:</p>
        <ul>
          <li><strong>المزايا:</strong> ترى بالضبط ما تحصل عليه، درجة حرارة لون قابلة للتعديل</li>
          <li><strong>مثالي لـ:</strong> الفيديو، تصوير المنتجات، الصور الشخصية في الاستوديو</li>
        </ul>
        
        <h2>٣. تقنيات الإضاءة الكلاسيكية</h2>
        
        <h3>إضاءة رامبرانت</h3>
        <p>سميت على اسم الرسام الشهير، هذه الإضاءة تخلق مثلثًا من الضوء على الخد:</p>
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&auto=format&fit=crop" alt="إضاءة رامبرانت" class="w-full rounded-lg my-6" />
        <ul>
          <li><strong>الموضع:</strong> ضوء بزاوية 45° من الموضوع، قليلاً فوق مستوى العينين</li>
          <li><strong>النتيجة:</strong> مثلث مضيء تحت العين، ظل الأنف يخلق هذا المثلث</li>
          <li><strong>مثالي لـ:</strong> الصور الشخصية الكلاسيكية، صور الرجال</li>
        </ul>
        
        <h3>إضاءة الفراشة</h3>
        <p>تخلق ظلًا على شكل فراشة تحت الأنف:</p>
        <ul>
          <li><strong>الموضع:</strong> ضوء أمامي، فوق الكاميرا، يشير للأسفل</li>
          <li><strong>النتيجة:</strong> ظلال تحت الأنف والذقن على شكل فراشة</li>
          <li><strong>مثالي لـ:</strong> صور الجمال، صور النساء</li>
        </ul>
        
        <h3>الضوء العكسي (Contre-jour)</h3>
        <p>ضع موضوعك بينك وبين مصدر الضوء:</p>
        <img src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&auto=format&fit=crop" alt="الضوء العكسي" class="w-full rounded-lg my-6" />
        <ul>
          <li><strong>النتيجة:</strong> تخلق ظلالًا أو محيطًا مضيئًا حول الموضوع</li>
          <li><strong>مثالي لـ:</strong> صور إبداعية، صور شخصية فنية</li>
        </ul>
        
        <h2>٤. المعدلات والإكسسوارات</h2>
        
        <h3>العاكسات</h3>
        <p>العاكسات ضرورية للتحكم في الضوء وإكماله:</p>
        <ul>
          <li><strong>الأنواع:</strong> أبيض (ضوء ناعم)، فضي (ضوء أكثر قسوة)، ذهبي (ضوء دافئ)</li>
          <li><strong>الاستخدامات:</strong> ملء الظلال، تليين التباينات، إنشاء إضاءة مساعدة</li>
        </ul>
        
        <h3>الموزعات</h3>
        <p>تليين الضوء القاسي:</p>
        <ul>
          <li><strong>الأنواع:</strong> Softbox، مظلة شفافة، موزع محمول</li>
          <li><strong>التأثير:</strong> يوسع مصدر الضوء الظاهري، يخلق ظلالًا ناعمة</li>
        </ul>
        
        <h2>٥. درجة حرارة اللون وموازنة البياض</h2>
        
        <p>فهم درجة حرارة اللون أمر بالغ الأهمية للألوان الطبيعية:</p>
        <ul>
          <li><strong>كلفن (K):</strong> وحدة قياس درجة حرارة اللون</li>
          <li><strong>2000-3000K:</strong> ضوء دافئ (شموع، مصابيح تنغستن) - صبغة برتقالية/صفراء</li>
          <li><strong>5500-6500K:</strong> ضوء النهار (شمس الظهيرة) - أبيض</li>
          <li><strong>موازنة البياض:</strong> إعداد الكاميرا للتعويض عن درجة حرارة اللون</li>
          <li><strong>RAW:</strong> التصوير بصيغة RAW لضبط موازنة البياض في ما بعد بدون فقدان الجودة</li>
        </ul>
        
        <h2>٦. أخطاء شائعة يجب تجنبها</h2>
        
        <ul>
          <li>عدم الأخذ في الاعتبار اتجاه الضوء</li>
          <li>استخدام الفلاش المدمج مباشرة</li>
          <li>التصوير في الشمس الكاملة بدون حماية</li>
          <li>تجاهل درجة حرارة اللون</li>
          <li>عدم استخدام عاكس عند الحاجة</li>
        </ul>
        
        <h2>٧. تمارين عملية لإتقان الضوء</h2>
        
        <ol>
          <li>التقاط صور لنفس الموضوع في أوقات مختلفة</li>
          <li>التصوير بإضاءة أمامية وجانبية وخلفية</li>
          <li>التجربة مع العاكس</li>
          <li>التجربة مع الفلاش المنعكس</li>
          <li>التقاط صور الظلال عند غروب الشمس</li>
        </ol>
        
        <h2>الخلاصة</h2>
        <p>إتقان الضوء هو مهارة تتطور بالممارسة والملاحظة. كل حالة إضاءة فريدة، والمصور الذي يفهم كيفية قراءة الضوء والتحكم به يخلق صورًا مميزة. ابدأ بمراقبة الضوء حولك، جرب التقنيات الأساسية، ثم طور أسلوبك الشخصي.</p>
        <img src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&auto=format&fit=crop" alt="إتقان الضوء" class="w-full rounded-lg my-6" />
      `,
      prerequisites: [
        'معرفة أساسية بالتصوير الفوتوغرافي (التعريض، الفتحة، السرعة)',
        'فهم أوضاع الكاميرا',
        'كاميرا مع تحكم يدوي'
      ],
      tools: [
        'كاميرا مع وضع يدوي',
        'عاكس (أو كرتون أبيض)',
        'فلاش خارجي (موصى به)',
        'موزع/softbox (اختياري)',
        'حامل ثلاثي (للتعرّض الطويل)'
      ],
      nextSteps: [
        'التقاط صور لنفس الموضوع في أوقات مختلفة من اليوم',
        'التجربة مع ضوء النافذة في التصوير الشخصي',
        'ممارسة الضوء العكسي عند غروب الشمس',
        'تعلم استخدام العاكس لملء الظلال',
        'التجربة مع الفلاش المنعكس إذا كان لديك فلاش خارجي',
        'إتقان موازنة البياض في تصوير مشاهد مختلفة'
      ]
    },
    en: {
      domainExplanation: 'Light is the fundamental element of all photography. Without light, there is no image. Understanding how light works, how it interacts with your subject, and how to manipulate it is essential for creating professional photos. Each type of light has its characteristics, advantages, and challenges.',
      howToStart: 'Start by observing light around you at different times of the day. Photograph the same subject at different hours to see how light changes the mood and details. Experiment first with natural light (window, outdoors) before moving to artificial light. Note the direction, intensity, and color of light.',
      essentialElements: [
        'Golden Hour: The first hour after sunrise and last hour before sunset offer warm, soft, directional light',
        'Blue Hour: The twilight period with deep blue sky, perfect for urban and architectural photos',
        'Direct vs Diffused Light: Direct light creates hard shadows, diffused light (clouds, shade) creates soft shadows',
        'Light Direction: Frontal (even lighting), side (creates depth), backlight (dramatic silhouettes)',
        'Color Temperature: Natural light changes color according to time (blue in morning, warm in evening)',
        'Reflection and Bounce: Use reflective surfaces to soften and direct light',
        'Lighting Ratio: Control the contrast between bright and dark areas',
        'Studio Lighting: Classical techniques (Rembrandt, Butterfly) for professional portraits'
      ],
      fullContent: `
        <h2>Introduction: Light, the Essence of Photography</h2>
        <p>Light is the raw material, the palette, and the brush of the photographer. Without light, there is no photo. Understanding how light works, how it interacts with your subject, how it sculpts forms and creates atmospheres is crucial for creating exceptional images.</p>
        <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&auto=format&fit=crop" alt="Photographic light" class="w-full rounded-lg my-6" />
        
        <h2>1. Natural Light: Working with the Sun</h2>
        
        <h3>Golden Hour</h3>
        <p>The golden hour is the magical period photographers wait for:</p>
        <img src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&auto=format&fit=crop" alt="Golden hour" class="w-full rounded-lg my-6" />
        <ul>
          <li><strong>Timing:</strong> First hour after sunrise and last hour before sunset</li>
          <li><strong>Quality:</strong> Warm, soft, directional light with golden/pink tint</li>
          <li><strong>Advantages:</strong> Long dramatic shadows, saturated colors, flattering skin for portraits</li>
          <li><strong>Ideal for:</strong> Portraits, landscapes, street photography, wedding photography</li>
        </ul>
        
        <h3>Blue Hour</h3>
        <p>Blue hour offers a unique and dreamy atmosphere:</p>
        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&auto=format&fit=crop" alt="Blue hour" class="w-full rounded-lg my-6" />
        <ul>
          <li><strong>Timing:</strong> Twilight period with deep blue sky (about 20-30 minutes)</li>
          <li><strong>Quality:</strong> Soft, uniform, bluish light</li>
          <li><strong>Advantages:</strong> Beautiful contrast with artificial lights, dramatic atmospheres</li>
          <li><strong>Ideal for:</strong> Urban photos, architectural, long exposures</li>
        </ul>
        
        <h3>Window Light</h3>
        <p>Window light is a controllable and beautiful natural light source:</p>
        <ul>
          <li><strong>Advantages:</strong> Soft, directional light, easy to control</li>
          <li><strong>Techniques:</strong> Position subject at different angles relative to window</li>
          <li><strong>Side:</strong> Creates depth and sculpted shadows (Rembrandt lighting)</li>
          <li><strong>Frontal:</strong> Even lighting, ideal for flattering portraits</li>
        </ul>
        
        <h2>2. Artificial Light: Total Control</h2>
        
        <h3>Built-in Flash</h3>
        <p>Your camera's built-in flash can be useful if used correctly:</p>
        <ul>
          <li><strong>Advantages:</strong> Always available, no additional equipment needed</li>
          <li><strong>Limitations:</strong> Harsh light, fixed direction, limited range</li>
          <li><strong>Techniques:</strong> Use DIY diffuser (white fabric), avoid direct flash on face</li>
        </ul>
        
        <h3>External Flash (Speedlight)</h3>
        <p>External flash offers much greater control:</p>
        <img src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&auto=format&fit=crop" alt="External flash" class="w-full rounded-lg my-6" />
        <ul>
          <li><strong>Advantages:</strong> More power, controllable direction, bounce capability</li>
          <li><strong>Bounce:</strong> Point flash at ceiling or white wall to soften light</li>
          <li><strong>Modifiers:</strong> Use softbox, umbrella, or snoot to modify light quality</li>
        </ul>
        
        <h3>Continuous Light (LED)</h3>
        <p>LED panels have become essential for modern photography:</p>
        <ul>
          <li><strong>Advantages:</strong> See exactly what you get (WYSIWYG), adjustable color temperature</li>
          <li><strong>Ideal for:</strong> Video, product photography, studio portraits</li>
        </ul>
        
        <h2>3. Classical Lighting Techniques</h2>
        
        <h3>Rembrandt Lighting</h3>
        <p>Named after the famous painter, this lighting creates a triangle of light on the cheek:</p>
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&auto=format&fit=crop" alt="Rembrandt lighting" class="w-full rounded-lg my-6" />
        <ul>
          <li><strong>Position:</strong> Light at 45° from subject, slightly above eye level</li>
          <li><strong>Result:</strong> Bright triangle under eye, nose shadow creates this triangle</li>
          <li><strong>Ideal for:</strong> Classical portraits, men's portraits</li>
        </ul>
        
        <h3>Butterfly Lighting</h3>
        <p>Creates a butterfly-shaped shadow under the nose:</p>
        <ul>
          <li><strong>Position:</strong> Frontal light, above camera, pointing down</li>
          <li><strong>Result:</strong> Shadows under nose and chin in butterfly shape</li>
          <li><strong>Ideal for:</strong> Beauty portraits, women's portraits</li>
        </ul>
        
        <h3>Backlight (Rim Light)</h3>
        <p>Place your subject between you and the light source:</p>
        <img src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&auto=format&fit=crop" alt="Backlight" class="w-full rounded-lg my-6" />
        <ul>
          <li><strong>Result:</strong> Creates silhouettes or bright rim around subject</li>
          <li><strong>Ideal for:</strong> Creative photos, artistic portraits</li>
        </ul>
        
        <h2>4. Light Modifiers and Accessories</h2>
        
        <h3>Reflectors</h3>
        <p>Reflectors are essential for controlling and complementing light:</p>
        <ul>
          <li><strong>Types:</strong> White (soft light), silver (harder directional light), gold (warm light)</li>
          <li><strong>Uses:</strong> Fill shadows, soften contrasts, create auxiliary lighting</li>
        </ul>
        
        <h3>Diffusers</h3>
        <p>Soften harsh light:</p>
        <ul>
          <li><strong>Types:</strong> Softbox, translucent umbrella, portable diffuser (scrim)</li>
          <li><strong>Effect:</strong> Enlarges apparent light source, creates soft shadows</li>
        </ul>
        
        <h2>5. Color Temperature and White Balance</h2>
        
        <p>Understanding color temperature is crucial for natural colors:</p>
        <ul>
          <li><strong>Kelvin (K):</strong> Unit of measurement for color temperature</li>
          <li><strong>2000-3000K:</strong> Warm light (candles, tungsten bulbs) - orange/yellow tint</li>
          <li><strong>5500-6500K:</strong> Daylight (noon sun) - white</li>
          <li><strong>White Balance:</strong> Your camera setting to compensate for color temperature</li>
          <li><strong>RAW:</strong> Shoot in RAW to adjust white balance in post-production without quality loss</li>
        </ul>
        
        <h2>6. Common Mistakes to Avoid</h2>
        
        <ul>
          <li>Not considering light direction</li>
          <li>Direct built-in flash</li>
          <li>Shooting in full sun without protection</li>
          <li>Ignoring color temperature</li>
          <li>Not using reflector when needed</li>
        </ul>
        
        <h2>7. Practical Exercises to Master Light</h2>
        
        <ol>
          <li>Photograph same subject at different times</li>
          <li>Shoot with frontal, side, and back lighting</li>
          <li>Experiment with reflector</li>
          <li>Experiment with bounced flash</li>
          <li>Photograph silhouettes at sunset</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>Mastering light is a skill that develops with practice and observation. Each lighting situation is unique, and the photographer who understands how to read and manipulate light creates images that stand out. Start by observing light around you, experiment with basic techniques, then develop your personal style.</p>
        <img src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&auto=format&fit=crop" alt="Mastering light" class="w-full rounded-lg my-6" />
      `,
      prerequisites: [
        'Basic photography knowledge (exposure, aperture, speed)',
        'Understanding of camera modes',
        'Camera with manual control'
      ],
      tools: [
        'Camera with manual mode',
        'Reflector (or white cardboard)',
        'External flash (recommended)',
        'Diffuser/softbox (optional)',
        'Tripod (for long exposure)'
      ],
      nextSteps: [
        'Photograph the same subject at different times of the day',
        'Experiment with window light in portrait photography',
        'Practice backlighting at sunset',
        'Learn to use a reflector to fill shadows',
        'Experiment with bounced flash if you have an external flash',
        'Master white balance by photographing different scenes'
      ]
    }
  }
  // Note: Blogs 3-5 will be added in subsequent updates
}

export default photographyTranslations

