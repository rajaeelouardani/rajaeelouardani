// Blog data with 26 articles (only blogs with detailed content)
// Images from Unsplash, Freepik, Pexels, and Pixabay (free sources)

export interface BlogPost {
  id: number
  category: string
  title: string
  description: string
  image: string // URL to free image
  date: string
  readTime: string
  tags: string[]
  resources: Array<{ name: string; url: string }>
  technologies?: string[]
}

export const blogPosts: BlogPost[] = [
  // PHOTOGRAPHY (1-2)
  {
    id: 1,
    category: 'Photography',
    title: 'Les bases de la composition photographique',
    description: 'Règle des tiers, lignes directrices, profondeur, contrastes. Apprenez les fondamentaux de la composition pour créer des images percutantes.',
    image: 'https://images.unsplash.com/photo-1516035069371-85723e4d43f9?w=800&auto=format&fit=crop',
    date: '2025-01-20',
    readTime: '12 min read',
    tags: ['Photography', 'Composition', 'Basics', 'Techniques'],
    resources: [
      { name: 'Photography Life', url: 'https://photographylife.com' },
      { name: 'edX Photography', url: 'https://www.edx.org' },
      { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning' },
    ],
  },
  {
    id: 2,
    category: 'Photography',
    title: 'La lumière naturelle vs lumière artificielle',
    description: 'Techniques, avantages, erreurs à éviter. Maîtrisez l\'art de l\'éclairage pour sublimer vos photos.',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop',
    date: '2025-01-18',
    readTime: '10 min read',
    tags: ['Photography', 'Lighting', 'Natural Light', 'Artificial Light'],
    resources: [
      { name: 'Google Photography', url: 'https://www.google.com/photos' },
      { name: 'Meta Creative', url: 'https://www.facebook.com/creators' },
    ],
  },
  // UI/UX DESIGN (6-7)
  {
    id: 6,
    category: 'UI/UX Design',
    title: 'Les 10 lois UX indispensables pour créer des interfaces efficaces',
    description: 'Loi de Fitts, Hick, Miller… Découvrez les principes fondamentaux du design UX.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
    date: '2025-01-10',
    readTime: '13 min read',
    tags: ['UI/UX', 'Design Laws', 'UX Principles', 'Interface Design'],
    resources: [
      { name: 'Nielsen Norman Group', url: 'https://www.nngroup.com' },
      { name: 'Google Material Design', url: 'https://material.io' },
      { name: 'Meta Design Resources', url: 'https://design.facebook.com' },
    ],
  },
  {
    id: 7,
    category: 'UI/UX Design',
    title: 'Comment créer une design system complet',
    description: 'Couleurs, typographie, composants, guidelines. Construisez un système de design cohérent.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
    date: '2025-01-08',
    readTime: '16 min read',
    tags: ['UI/UX', 'Design System', 'Components', 'Guidelines'],
    resources: [
      { name: 'Figma Design Systems', url: 'https://www.figma.com' },
      { name: 'Google Material Design', url: 'https://material.io' },
      { name: 'edX Design Courses', url: 'https://www.edx.org' },
    ],
  },
  // VIDEOGRAPHY (11-12)
  {
    id: 11,
    category: 'Videography',
    title: 'Les bases du storytelling vidéo',
    description: 'Structure 3 actes, émotion, rythme. Créez des vidéos captivantes avec un storytelling efficace.',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&auto=format&fit=crop',
    date: '2024-12-30',
    readTime: '13 min read',
    tags: ['Videography', 'Storytelling', 'Video Production', 'Narrative'],
    resources: [
      { name: 'YouTube Creator Academy', url: 'https://creatoracademy.youtube.com' },
      { name: 'LinkedIn Learning Video', url: 'https://www.linkedin.com/learning' },
    ],
  },
  {
    id: 12,
    category: 'Videography',
    title: 'Comment filmer avec un smartphone comme un pro',
    description: 'Stabilisation, lumière, réglages. Techniques professionnelles pour la vidéo mobile.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
    date: '2024-12-28',
    readTime: '11 min read',
    tags: ['Videography', 'Mobile', 'Smartphone', 'Filming'],
    resources: [
      { name: 'YouTube Creator Academy', url: 'https://creatoracademy.youtube.com' },
      { name: 'Meta Video Resources', url: 'https://www.facebook.com/creators' },
    ],
  },
  // WEB DEVELOPMENT (16-17)
  {
    id: 16,
    category: 'Web Development',
    title: 'HTML / CSS : créer une landing page moderne',
    description: 'Exemple + code + design. Construisez une landing page professionnelle de A à Z.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop',
    date: '2024-12-20',
    readTime: '12 min read',
    tags: ['Web Development', 'HTML', 'CSS', 'Landing Page'],
    resources: [
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
      { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org' },
      { name: 'Google Developers', url: 'https://developers.google.com' },
    ],
  },
  {
    id: 17,
    category: 'Web Development',
    title: 'React vs Vue vs Angular : lequel choisir en 2025 ?',
    description: 'Comparaison complète des trois frameworks JavaScript les plus populaires.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop',
    date: '2024-12-18',
    readTime: '16 min read',
    tags: ['Web Development', 'React', 'Vue', 'Angular', 'Comparison'],
    resources: [
      { name: 'React Official', url: 'https://react.dev' },
      { name: 'Vue.js Official', url: 'https://vuejs.org' },
      { name: 'Angular Official', url: 'https://angular.io' },
      { name: 'edX Courses', url: 'https://www.edx.org' },
    ],
  },
  // DATABASES (21-22)
  {
    id: 21,
    category: 'Databases',
    title: 'SQL vs NoSQL : différence complète',
    description: 'Avantages / inconvénients. Quand utiliser quoi ? Guide complet pour choisir la bonne base de données.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop',
    date: '2024-12-10',
    readTime: '14 min read',
    tags: ['Database', 'SQL', 'NoSQL', 'Comparison'],
    resources: [
      { name: 'MongoDB University', url: 'https://university.mongodb.com' },
      { name: 'MySQL Documentation', url: 'https://dev.mysql.com/doc' },
    ],
  },
  {
    id: 22,
    category: 'Databases',
    title: 'Architecture base de données : Relational, Document-based, Key-value, Graph, Time-series',
    description: 'Guide complet des différents types d\'architectures de bases de données et leurs cas d\'usage.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
    date: '2024-12-08',
    readTime: '16 min read',
    tags: ['Database', 'Architecture', 'Data Modeling'],
    resources: [
      { name: 'MongoDB University', url: 'https://university.mongodb.com' },
      { name: 'PostgreSQL Official', url: 'https://www.postgresql.org' },
    ],
  },
  // AI & IMAGE PROCESSING (26-27)
  {
    id: 26,
    category: 'AI & Image Processing',
    title: 'Comment fonctionne un modèle de traitement d\'image - CNN, Transformers',
    description: 'Introduction aux réseaux de neurones convolutifs et transformers pour le traitement d\'images.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    date: '2024-11-30',
    readTime: '18 min read',
    tags: ['AI', 'Machine Learning', 'CNN', 'Computer Vision'],
    resources: [
      { name: 'Google AI', url: 'https://ai.google' },
      { name: 'edX AI Courses', url: 'https://www.edx.org' },
    ],
  },
  {
    id: 27,
    category: 'AI & Image Processing',
    title: 'Amélioration d\'image avec IA (Upscaling, Denoise, Deblur)',
    description: 'Techniques d\'amélioration d\'images utilisant l\'intelligence artificielle.',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop',
    date: '2024-11-28',
    readTime: '14 min read',
    tags: ['AI', 'Image Processing', 'Enhancement', 'Deep Learning'],
    resources: [
      { name: 'Google AI', url: 'https://ai.google' },
      { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning' },
    ],
  },
  // CONTENT CREATION (31-32)
  {
    id: 31,
    category: 'Content Creation',
    title: 'Comment créer un calendrier éditorial pour les réseaux sociaux',
    description: 'Guide complet pour planifier et organiser votre contenu sur les réseaux sociaux.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
    date: '2024-11-20',
    readTime: '12 min read',
    tags: ['Content Creation', 'Social Media', 'Planning', 'Strategy'],
    resources: [
      { name: 'Meta Business', url: 'https://www.facebook.com/business' },
      { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning' },
    ],
  },
  {
    id: 32,
    category: 'Content Creation',
    title: 'Les tendances de contenu 2025 (Reels, TikTok, Shorts)',
    description: 'Découvrez les dernières tendances de contenu vidéo court pour 2025.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
    date: '2024-11-18',
    readTime: '14 min read',
    tags: ['Content Creation', 'Video', 'Trends', 'Social Media'],
    resources: [
      { name: 'TikTok Creator Portal', url: 'https://www.tiktok.com/creators' },
      { name: 'YouTube Creator Academy', url: 'https://creatoracademy.youtube.com' },
    ],
  },
  // MARKETING DIGITAL (36-37)
  {
    id: 36,
    category: 'Digital Marketing',
    title: 'SEO vs SEA : comprendre la différence et savoir les utiliser',
    description: 'Guide complet pour choisir entre référencement naturel et payant.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    date: '2024-11-10',
    readTime: '14 min read',
    tags: ['Marketing', 'SEO', 'SEA', 'Digital Strategy'],
    resources: [
      { name: 'Google Search Central', url: 'https://developers.google.com/search' },
      { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning' },
    ],
  },
  {
    id: 37,
    category: 'Digital Marketing',
    title: 'Marketing d\'influence : comment choisir les bons influenceurs',
    description: 'Stratégies pour identifier et collaborer avec les influenceurs pertinents.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    date: '2024-11-08',
    readTime: '13 min read',
    tags: ['Marketing', 'Influencer', 'Social Media', 'Collaboration'],
    resources: [
      { name: 'Meta Business', url: 'https://www.facebook.com/business' },
      { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning' },
    ],
  },
  // BRANDING (41-42)
  {
    id: 41,
    category: 'Branding',
    title: 'Comment construire une identité visuelle forte',
    description: 'Guide complet pour créer une identité de marque mémorable et cohérente.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
    date: '2024-10-30',
    readTime: '14 min read',
    tags: ['Branding', 'Identity', 'Design', 'Visual'],
    resources: [
      { name: 'Behance', url: 'https://www.behance.net' },
      { name: 'Dribbble', url: 'https://dribbble.com' },
    ],
  },
  {
    id: 42,
    category: 'Branding',
    title: 'Positionnement de marque : comment se différencier',
    description: 'Stratégies pour créer un positionnement unique et différenciant.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
    date: '2024-10-28',
    readTime: '13 min read',
    tags: ['Branding', 'Positioning', 'Strategy', 'Differentiation'],
    resources: [
      { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning' },
      { name: 'edX Business Courses', url: 'https://www.edx.org' },
    ],
  },
  // ENTREPRENEURIAT (46-47)
  {
    id: 46,
    category: 'Entrepreneurship',
    title: 'Comment valider une idée business - MVP, prototypes, lean startup',
    description: 'Méthodes pour valider votre idée d\'entreprise avant de lancer.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca8849d1?w=800&auto=format&fit=crop',
    date: '2024-10-20',
    readTime: '16 min read',
    tags: ['Entrepreneurship', 'MVP', 'Validation', 'Startup'],
    resources: [
      { name: 'edX Business Courses', url: 'https://www.edx.org' },
      { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning' },
    ],
  },
  {
    id: 47,
    category: 'Entrepreneurship',
    title: 'Construire un business model solide - Canaux, segments, valeur',
    description: 'Guide pour créer un modèle économique viable et scalable.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca8849d1?w=800&auto=format&fit=crop',
    date: '2024-10-18',
    readTime: '14 min read',
    tags: ['Entrepreneurship', 'Business Model', 'Strategy', 'Planning'],
    resources: [
      { name: 'edX Business Courses', url: 'https://www.edx.org' },
      { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning' },
    ],
  },
  // SOFT SKILLS (51-52)
  {
    id: 51,
    category: 'Soft Skills',
    title: 'Communication efficace - Assertivité, écoute active',
    description: 'Développez vos compétences en communication professionnelle.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop',
    date: '2024-10-10',
    readTime: '12 min read',
    tags: ['Soft Skills', 'Communication', 'Professional Development'],
    resources: [
      { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning' },
      { name: 'edX Courses', url: 'https://www.edx.org' },
    ],
  },
  {
    id: 52,
    category: 'Soft Skills',
    title: 'Gestion du temps & productivité',
    description: 'Techniques pour optimiser votre temps et augmenter votre productivité.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop',
    date: '2024-10-08',
    readTime: '11 min read',
    tags: ['Soft Skills', 'Productivity', 'Time Management'],
    resources: [
      { name: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning' },
      { name: 'edX Courses', url: 'https://www.edx.org' },
    ],
  },
  // HARD SKILLS (56-57)
  {
    id: 56,
    category: 'Hard Skills',
    title: 'Web development (JS, TS, React, Node…)',
    description: 'Maîtrisez les technologies web modernes pour devenir développeur full stack.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop',
    date: '2024-09-30',
    readTime: '16 min read',
    tags: ['Hard Skills', 'Web Development', 'JavaScript', 'React', 'Node.js'],
    resources: [
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
      { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org' },
    ],
  },
  {
    id: 57,
    category: 'Hard Skills',
    title: 'Cloud computing (AWS / Azure / GCP)',
    description: 'Introduction au cloud computing et aux principales plateformes.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
    date: '2024-09-28',
    readTime: '15 min read',
    tags: ['Hard Skills', 'Cloud Computing', 'AWS', 'Azure', 'GCP'],
    resources: [
      { name: 'AWS Training', url: 'https://aws.amazon.com/training' },
      { name: 'Google Cloud Platform', url: 'https://cloud.google.com' },
    ],
  },
  // AUTRES DOMAINES (61-62)
  {
    id: 61,
    category: 'Other Domains',
    title: 'Cybersécurité pour développeurs débutants',
    description: 'Bases de la sécurité informatique pour protéger vos applications.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop',
    date: '2024-09-20',
    readTime: '14 min read',
    tags: ['Cybersecurity', 'Security', 'Development', 'Best Practices'],
    resources: [
      { name: 'OWASP', url: 'https://owasp.org' },
      { name: 'Google Security', url: 'https://developers.google.com/security' },
    ],
  },
  {
    id: 62,
    category: 'Other Domains',
    title: 'UI Motion Design pour interfaces modernes',
    description: 'Créez des interfaces animées et interactives avec le motion design.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
    date: '2024-09-18',
    readTime: '13 min read',
    tags: ['UI/UX', 'Motion Design', 'Animation', 'Interfaces'],
    resources: [
      { name: 'Framer Motion', url: 'https://www.framer.com/motion' },
      { name: 'Google Material Design', url: 'https://material.io' },
    ],
  },
  // BACKEND TECHNOLOGIES (66-67)
  {
    id: 66,
    category: 'Backend Development',
    title: 'Node.js : Développement Backend Moderne',
    description: 'Maîtrisez Node.js pour créer des applications backend performantes et scalables avec JavaScript.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
    date: '2024-09-10',
    readTime: '16 min read',
    tags: ['Node.js', 'Backend', 'JavaScript', 'API'],
    resources: [
      { name: 'Node.js Official', url: 'https://nodejs.org' },
      { name: 'Express.js Official', url: 'https://expressjs.com' },
      { name: 'Google Developers', url: 'https://developers.google.com' },
    ],
  },
  {
    id: 67,
    category: 'Backend Development',
    title: 'Laravel : Framework PHP Moderne',
    description: 'Découvrez Laravel, le framework PHP le plus populaire pour développer des applications web robustes.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
    date: '2024-09-08',
    readTime: '15 min read',
    tags: ['Laravel', 'PHP', 'Backend', 'Framework'],
    resources: [
      { name: 'Laravel Official', url: 'https://laravel.com' },
      { name: 'Laracasts', url: 'https://laracasts.com' },
      { name: 'edX PHP Courses', url: 'https://www.edx.org' },
    ],
  },
]

// Helper function to get blog posts by category
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}

// Helper function to get blog post by ID
export function getBlogPostById(id: number): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
}

