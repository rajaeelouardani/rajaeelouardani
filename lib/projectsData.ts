export type ProjectDomain = 
  | 'complete'      // Projets complets (logo + vidéo + design + site)
  | 'design-only'   // Design seul
  | 'photography'   // Photographie
  | 'videography'   // Vidéo/Montage
  | 'web-development' // Développement web / Site web

export interface Project {
  id: number
  title: string
  description: string
  fullDescription?: string
  domain: ProjectDomain  // Domaine principal du projet
  
  // Image principale (thumbnail)
  thumbnail: string
  
  // Galerie d'images
  images: string[]
  
  // Vidéos (optionnel)
  videos?: Array<{
    url: string
    thumbnail: string
    title: string
    youtubeId?: string
  }>
  
  // Logo (optionnel)
  logo?: {
    url: string
    description?: string
  }
  
  // Designs (optionnel)
  designs?: Array<{
    url: string
    title: string
    description?: string
  }>
  
  // Métadonnées
  category: string
  period: string
  technologies: string[]
  link?: string
  associated?: string
  designCategory?: 'bondrole' | 'flayer' | 'post' | 'logo' | 'CARTE' | 'ui ux' // Sous-catégorie pour le design
}

// Helper function pour obtenir thumbnail YouTube
const getYouTubeThumbnail = (videoId: string): string => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

// Helper function pour obtenir URL YouTube embed
export function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`
}

// Projets vidéo - Montages pour les clubs FSM
const videographyProjects: Project[] = [
  {
    id: 3001,
    title: 'Montage Vidéo - Club IVR FSM',
    description: 'Montage vidéo créatif pour le Club IVR (Innovation, Visionnaire, Robotique) de la Faculté des Sciences Meknès.',
    fullDescription: 'Montage vidéo présentant les activités et projets du Club IVR FSM, mettant en avant l\'innovation, l\'astronomie, les biotechnologies, la géotechnologie, la robotique et l\'intelligence artificielle.',
    domain: 'videography',
    thumbnail: getYouTubeThumbnail('QOfQlD78U6M'),
    images: [getYouTubeThumbnail('QOfQlD78U6M')],
    videos: [
      {
        url: 'https://youtu.be/QOfQlD78U6M',
        thumbnail: getYouTubeThumbnail('QOfQlD78U6M'),
        title: 'Montage Vidéo - Club IVR FSM',
        youtubeId: 'QOfQlD78U6M'
      }
    ],
    category: 'Videography & Montage',
    period: '2024-2025',
    technologies: ['Premiere Pro', 'After Effects', 'Video Editing'],
    link: 'https://youtu.be/QOfQlD78U6M'
  },
  {
    id: 3002,
    title: 'Montage Vidéo - Photography FSM Club',
    description: 'Montage vidéo artistique pour le Photography FSM Club présentant les activités photographiques du club.',
    fullDescription: 'Vidéo de montage créatif mettant en valeur les sessions photo, les événements et les réalisations du Photography FSM Club de la Faculté des Sciences Meknès.',
    domain: 'videography',
    thumbnail: getYouTubeThumbnail('6hwWWU-Q-ls'),
    images: [getYouTubeThumbnail('6hwWWU-Q-ls')],
    videos: [
      {
        url: 'https://youtu.be/6hwWWU-Q-ls',
        thumbnail: getYouTubeThumbnail('6hwWWU-Q-ls'),
        title: 'Montage Vidéo - Photography FSM Club',
        youtubeId: '6hwWWU-Q-ls'
      }
    ],
    category: 'Videography & Montage',
    period: '2024-2025',
    technologies: ['Premiere Pro', 'After Effects', 'Video Editing'],
    link: 'https://youtu.be/6hwWWU-Q-ls'
  },
  {
    id: 3003,
    title: 'Montage Vidéo - MUN FSM Club',
    description: 'Montage vidéo pour le MUN (Model United Nations) FSM Club présentant les simulations et débats.',
    fullDescription: 'Vidéo de montage présentant les activités du MUN FSM Club, incluant les simulations de conférences des Nations Unies, les débats et les événements organisés par le club.',
    domain: 'videography',
    thumbnail: getYouTubeThumbnail('Ljaaxwq39UM'),
    images: [getYouTubeThumbnail('Ljaaxwq39UM')],
    videos: [
      {
        url: 'https://youtu.be/Ljaaxwq39UM',
        thumbnail: getYouTubeThumbnail('Ljaaxwq39UM'),
        title: 'Montage Vidéo - MUN FSM Club',
        youtubeId: 'Ljaaxwq39UM'
      }
    ],
    category: 'Videography & Montage',
    period: '2024-2025',
    technologies: ['Premiere Pro', 'After Effects', 'Video Editing'],
    link: 'https://youtu.be/Ljaaxwq39UM'
  },
  {
    id: 3004,
    title: 'Montage Vidéo - Événement FSM',
    description: 'Montage vidéo d\'un événement organisé à la Faculté des Sciences Meknès.',
    fullDescription: 'Montage vidéo capturant les moments forts d\'un événement organisé à la Faculté des Sciences Meknès, présentant les différentes activités et la participation étudiante.',
    domain: 'videography',
    thumbnail: getYouTubeThumbnail('-RxAVBTV9bY'),
    images: [getYouTubeThumbnail('-RxAVBTV9bY')],
    videos: [
      {
        url: 'https://youtu.be/-RxAVBTV9bY',
        thumbnail: getYouTubeThumbnail('-RxAVBTV9bY'),
        title: 'Montage Vidéo - Événement FSM',
        youtubeId: '-RxAVBTV9bY'
      }
    ],
    category: 'Videography & Montage',
    period: '2024-2025',
    technologies: ['Premiere Pro', 'After Effects', 'Video Editing'],
    link: 'https://youtu.be/-RxAVBTV9bY'
  },
  {
    id: 3005,
    title: 'Montage Vidéo - Activités Club',
    description: 'Montage vidéo présentant les diverses activités des clubs de la Faculté des Sciences Meknès.',
    fullDescription: 'Vidéo de montage dynamique présentant les différentes activités organisées par les clubs étudiants de la Faculté des Sciences Meknès, mettant en avant la vie étudiante active.',
    domain: 'videography',
    thumbnail: getYouTubeThumbnail('7554SFaoO8M'),
    images: [getYouTubeThumbnail('7554SFaoO8M')],
    videos: [
      {
        url: 'https://youtu.be/7554SFaoO8M',
        thumbnail: getYouTubeThumbnail('7554SFaoO8M'),
        title: 'Montage Vidéo - Activités Club',
        youtubeId: '7554SFaoO8M'
      }
    ],
    category: 'Videography & Montage',
    period: '2024-2025',
    technologies: ['Premiere Pro', 'After Effects', 'Video Editing'],
    link: 'https://youtu.be/7554SFaoO8M'
  },
  {
    id: 3006,
    title: 'Montage Vidéo - Projet Étudiant',
    description: 'Montage vidéo documentant un projet étudiant réalisé à la Faculté des Sciences Meknès.',
    fullDescription: 'Vidéo de montage présentant un projet étudiant innovant, de sa conception à sa réalisation, mettant en valeur le travail collaboratif et la créativité des étudiants.',
    domain: 'videography',
    thumbnail: getYouTubeThumbnail('HmsQeTKVMko'),
    images: [getYouTubeThumbnail('HmsQeTKVMko')],
    videos: [
      {
        url: 'https://youtu.be/HmsQeTKVMko',
        thumbnail: getYouTubeThumbnail('HmsQeTKVMko'),
        title: 'Montage Vidéo - Projet Étudiant',
        youtubeId: 'HmsQeTKVMko'
      }
    ],
    category: 'Videography & Montage',
    period: '2024-2025',
    technologies: ['Premiere Pro', 'After Effects', 'Video Editing'],
    link: 'https://youtu.be/HmsQeTKVMko'
  },
  {
    id: 3007,
    title: 'Montage Vidéo - Événement Spécial',
    description: 'Montage vidéo d\'un événement spécial organisé par les clubs de la Faculté des Sciences Meknès.',
    fullDescription: 'Montage vidéo capturant les moments mémorables d\'un événement spécial, incluant les présentations, les activités interactives et les moments de partage entre les participants.',
    domain: 'videography',
    thumbnail: getYouTubeThumbnail('I03KZyK81kI'),
    images: [getYouTubeThumbnail('I03KZyK81kI')],
    videos: [
      {
        url: 'https://youtu.be/I03KZyK81kI',
        thumbnail: getYouTubeThumbnail('I03KZyK81kI'),
        title: 'Montage Vidéo - Événement Spécial',
        youtubeId: 'I03KZyK81kI'
      }
    ],
    category: 'Videography & Montage',
    period: '2024-2025',
    technologies: ['Premiere Pro', 'After Effects', 'Video Editing'],
    link: 'https://youtu.be/I03KZyK81kI'
  }
]

// Projets Design - Bâches (bondrole)
const designBannersProjects: Project[] = [
  {
    id: 4001,
    title: 'Bâches - Événements',
    description: 'Collection de bâches pour différents événements et workshops.',
    fullDescription: 'Série de bâches conçues pour promouvoir divers événements, workshops et activités.',
    domain: 'design-only',
    thumbnail: '/design/bondrole/Screenshot 2025-12-16 204201.png',
    images: [
      '/design/bondrole/Screenshot 2025-12-16 204201.png',
      '/design/bondrole/Screenshot 2025-12-16 210034.png'
    ],
    category: 'Design - Bâches',
    period: '2024-2025',
    technologies: ['Photoshop', 'Illustrator', 'Graphic Design'],
    designCategory: 'bondrole'
  }
]

// Projets Design - Flyers A4 (flayer)
const designFlyersProjects: Project[] = [
  {
    id: 5001,
    title: 'Flyers A4 - Événements',
    description: 'Collection de flyers A4 pour différents événements et workshops.',
    fullDescription: 'Série de flyers au format A4 conçus pour promouvoir divers événements, workshops et activités.',
    domain: 'design-only',
    designCategory: 'flayer',
    thumbnail: '/design/flayer/BCO.f78ed4aa-944b-4b0f-98be-aa14fd9e9333.png',
    images: [
      '/design/flayer/BCO.f78ed4aa-944b-4b0f-98be-aa14fd9e9333.png',
      '/design/flayer/Copilot_20251005_164214.png',
      '/design/flayer/IMG-20250310-WA0069.jpg',
      '/design/flayer/IMG-20250329-WA0129.jpg',
      '/design/flayer/IMG-20250421-WA0005.jpg',
      '/design/flayer/Screenshot 2025-12-16 204038.png',
      '/design/flayer/Screenshot 2025-12-16 204122.png',
      '/design/flayer/Screenshot 2025-12-16 204227.png',
      '/design/flayer/Screenshot 2025-12-16 204315.png',
      '/design/flayer/Screenshot 2025-12-16 210117.png',
      '/design/flayer/Screenshot 2025-12-16 210156.png',
      '/design/flayer/Screenshot 2025-12-16 210228.png',
      '/design/flayer/Screenshot 2025-12-16 210320.png',
      '/design/flayer/Screenshot 2025-12-16 210611.png',
      '/design/flayer/Screenshot 2025-12-16 210918.png',
      '/design/flayer/Screenshot 2025-12-16 211013.png',
      '/design/flayer/Screenshot 2025-12-16 211032.png',
      '/design/flayer/Screenshot 2025-12-16 211051.png',
      '/design/flayer/Screenshot 2025-12-16 211120.png',
      '/design/flayer/Screenshot 2025-12-17 130214.png',
      '/design/flayer/Screenshot 2025-12-17 130232.png'
    ],
    category: 'Design - Flyers A4',
    period: '2024-2025',
    technologies: ['Photoshop', 'Illustrator', 'InDesign', 'Graphic Design']
  }
]

// Projets Design - Posts Instagram (post)
const designPostsProjects: Project[] = [
  {
    id: 6001,
    title: 'Posts Instagram',
    description: 'Collection de posts Instagram pour différents clients et projets.',
    fullDescription: 'Série de posts Instagram conçus pour promouvoir divers produits, services et événements.',
    domain: 'design-only',
    designCategory: 'post',
    thumbnail: '/design/post/Blue and Gold Modern Graduation Ceremony Instagram Post.png',
    images: [
      '/design/post/Blue and Gold Modern Graduation Ceremony Instagram Post.png',
      '/design/post/Blue and Gold Modern Graduation Ceremony Instagram Post (1).png',
      '/design/post/Orange and Black Bold Modern Asian Food Instagram Post.jpg',
      '/design/post/Orange and Black Bold Modern Asian Food Instagram Post (1).jpg',
      '/design/post/Orange and Black Bold Modern Asian Food Instagram Post (2).jpg',
      '/design/post/Orange Modern Africa Connect Icon Logo.jpg',
      '/design/post/Orange Modern Africa Connect Icon Logo (1).jpg',
      '/design/post/10000codeurs workshop.jpg',
      '/design/post/fred academy workshop.jpg',
      '/design/post/IMG_20240803_203456_575.jpg',
      '/design/post/IMG_20240803_203456_585.jpg',
      '/design/post/IMG_20240803_203456_608.jpg',
      '/design/post/IMG_20240803_203457_491.jpg',
      '/design/post/IMG-20250114-WA0015.jpg',
      '/design/post/IMG-20250219-WA0059.jpg',
      '/design/post/IMG-20250219-WA0060.jpg',
      '/design/post/IMG-20250219-WA0061.jpg',
      '/design/post/IMG-20250219-WA0062.jpg',
      '/design/post/IMG-20250219-WA0063.jpg',
      '/design/post/IMG-20250219-WA0064.jpg',
      '/design/post/IMG-20250219-WA0065.jpg',
      '/design/post/IMG-20250219-WA0066.jpg',
      '/design/post/IMG-20250222-WA0059.jpg',
      '/design/post/IMG-20250222-WA0060.jpg',
      '/design/post/IMG-20250310-WA0059.jpg',
      '/design/post/IMG-20250315-WA0003.jpg',
      '/design/post/IMG-20250320-WA0214.jpg',
      '/design/post/IMG-20250320-WA0217.jpg',
      '/design/post/IMG-20250410-WA0002.jpg',
      '/design/post/IMG-20250416-WA0095.jpg',
      '/design/post/IMG-20250416-WA0096.jpg',
      '/design/post/IMG-20250416-WA0097.jpg'
    ],
    category: 'Design - Posts Instagram',
    period: '2024-2025',
    technologies: ['Photoshop', 'Canva', 'Graphic Design']
  }
]

// Projets Design - Logos (logo)
const designLogosProjects: Project[] = [
  {
    id: 7001,
    title: 'Logos & Identités Visuelles',
    description: 'Collection de logos et identités visuelles pour différents clients.',
    fullDescription: 'Série de logos et identités visuelles créés pour diverses marques et entreprises.',
    domain: 'design-only',
    designCategory: 'logo',
    thumbnail: '/design/logo/loggoo-white-opium.gif',
    images: [
      '/design/logo/loggoo-white-opium.gif',
      '/design/logo/logoooo-net.gif',
      '/design/logo/Beige Minimalist Korean Food Menu Instagram Story (1).jpg',
      '/design/logo/Beige Minimalist Korean Food Menu Instagram Story.jpg',
      '/design/logo/IMG-20240622-WA0052.jpg',
      '/design/logo/IMG-20250218-WA0064.jpg',
      '/design/logo/Screenshot 2025-12-16 203603.png',
      '/design/logo/Screenshot 2025-12-16 203657.png',
      '/design/logo/Screenshot 2025-12-16 203947.png',
      '/design/logo/WhatsApp Image 2025-12-17 at 1.34.35 PM.jpeg'
    ],
    logo: {
      url: '/design/logo/loggoo-white-opium.gif',
      description: 'Logos animés et statiques'
    },
    category: 'Design - Logos',
    period: '2024-2025',
    technologies: ['Illustrator', 'After Effects', 'Logo Design']
  }
]

// Projets Design - Cartes de Visite (CARTE)
const designCardsProjects: Project[] = [
  {
    id: 7004,
    title: 'Cartes de Visite',
    description: 'Collection de cartes de visite professionnelles.',
    fullDescription: 'Design de cartes de visite professionnelles avec différents styles modernes.',
    domain: 'design-only',
    designCategory: 'CARTE',
    thumbnail: '/design/CARTE/Carte de visite développement web moderne blanc bleu et vert.png',
    images: [
      '/design/CARTE/Carte de visite développement web moderne blanc bleu et vert.png',
      '/design/CARTE/Screenshot 2025-12-16 203902.png',
      '/design/CARTE/Screenshot 2025-12-16 210531.png',
      '/design/CARTE/WhatsApp Image 2025-12-17 at 1.37.45 PM.jpeg'
    ],
    category: 'Design - Cartes de Visite',
    period: '2024-2025',
    technologies: ['Illustrator', 'InDesign', 'Print Design']
  }
]

// Projets Design - UI/UX
const designUIUXProjects: Project[] = [
  {
    id: 8001,
    title: 'UI/UX Design - Rabat Tours',
    description: 'Design d\'interface utilisateur pour une application de tours à Rabat.',
    fullDescription: 'Conception complète de l\'interface utilisateur pour une application de réservation de tours à Rabat, incluant toutes les pages principales et les modals.',
    domain: 'design-only',
    designCategory: 'ui ux',
    thumbnail: '/design/ui ux/RabatTours.png',
    images: [
      '/design/ui ux/HomeLanding.png',
      '/design/ui ux/AboutUs.png',
      '/design/ui ux/ContactPage.png',
      '/design/ui ux/FAQPage.png',
      '/design/ui ux/HelpCenter.png',
      '/design/ui ux/ToursCatalog.png',
      '/design/ui ux/UsefulInformation.png',
      '/design/ui ux/TeamOverview.png',
      '/design/ui ux/CartModal.png',
      '/design/ui ux/HowItWorksModal.png',
      '/design/ui ux/LanguageModal.png',
      '/design/ui ux/RabatTours.png',
      '/design/ui ux/Screenshot 2025-10-29 093601.png'
    ],
    category: 'Design - UI/UX',
    period: '2024-2025',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping']
  }
]

// Projets Photography
const photographyProjects: Project[] = [
  {
    id: 9001,
    title: 'Galerie de Photographie',
    description: 'Collection de photographies artistiques et professionnelles.',
    fullDescription: 'Série de photographies capturant des moments, des paysages et des événements avec un regard artistique et professionnel.',
    domain: 'photography',
    thumbnail: '/photo/DSC00144.jpg',
    images: [
      '/photo/1745430856611.jpeg',
      '/photo/DSC00144.jpg',
      '/photo/DSC00176.jpg',
      '/photo/DSC00231.jpg',
      '/photo/DSC00256.jpg',
      '/photo/DSC00349.jpg',
      '/photo/DSC00444.jpg',
      '/photo/DSC00480.jpg',
      '/photo/DSC00497.jpg',
      '/photo/DSC00508.jpg',
      '/photo/DSC00514.jpg',
      '/photo/DSC09393.jpg',
      '/photo/DSC09466.jpg',
      '/photo/DSC09469.jpg',
      '/photo/DSC09813.jpg',
      '/photo/DSC09814.jpg',
      '/photo/DSC09820.jpg',
      '/photo/DSC09832.jpg',
      '/photo/DSC09895.jpg',
      '/photo/DSC09898.jpg',
      '/photo/DSC09928.jpg',
      '/photo/DSC09992.jpg',
      '/photo/IMG_1807.JPG',
      '/photo/IMG_1945.JPG',
      '/photo/IMG_20231220_122846.jpg',
      '/photo/IMG_20241210_234121_923.jpg',
      '/photo/IMG_20250418_182119_614.jpg',
      '/photo/IMG_20250425_124929_420.webp',
      '/photo/IMG_20250429_183620_100.jpg',
      '/photo/IMG_20250429_215706_719.jpg',
      '/photo/IMG_20251117_225800_117.jpg',
      '/photo/IMG_20251214_204713_529.jpg',
      '/photo/IMG_20251214_204713_589.jpg',
      '/photo/IMG_2683.JPG',
      '/photo/IMG_2701.JPG',
      '/photo/IMG_2713.JPG',
      '/photo/IMG_2749.JPG',
      '/photo/IMG_4528.JPG',
      '/photo/IMG_4532.jpg',
      '/photo/IMG_4555.JPG',
      '/photo/IMG-20230323-WA0156.jpg',
      '/photo/IMG-20230502-WA0011.jpg',
      '/photo/IMG-20230523-WA0020.jpg',
      '/photo/IMG-20230523-WA0070.jpg',
      '/photo/IMG-20240307-WA0138.jpg',
      '/photo/IMG-20240319-WA0024.jpeg',
      '/photo/IMG-20240320-WA0094.jpg',
      '/photo/IMG-20240424-WA0316.jpg',
      '/photo/IMG-20241023-WA0140.jpg',
      '/photo/IMG-20241111-WA0024.jpg',
      '/photo/IMG-20241111-WA0028.jpg',
      '/photo/IMG-20250503-WA0169.jpg',
      '/photo/IMG-20250503-WA0173.jpg',
      '/photo/IMG-20250503-WA0175.jpg',
      '/photo/IMG-20250503-WA0177.jpg',
      '/photo/PXL_20230811_125941447 (1).jpg',
      '/photo/WhatsApp Image 2025-03-12 at 10.01.32_4cce7898.jpg',
      '/photo/WhatsApp Image 2025-03-12 at 10.15.11_9c06ea00.jpg',
      '/photo/WhatsApp Image 2025-03-12 at 10.15.17_c7113c2f.jpg',
      '/photo/WhatsApp Image 2025-03-12 at 10.15.19_614e4031.jpg',
      '/photo/WhatsApp Image 2025-03-12 at 10.15.20_912fa7c0.jpg',
      '/photo/WhatsApp Image 2025-03-12 at 10.15.22_b4275f8b.jpg',
      '/photo/WhatsApp Image 2025-03-12 at 10.21.00_f2982910.jpg',
      '/photo/WhatsApp Image 2025-03-18 at 21.59.02_1cb4ca95.jpg',
      '/photo/WhatsApp Image 2025-03-20 at 20.48.47_59450f1b.jpg',
      '/photo/WhatsApp Image 2025-03-20 at 20.48.48_f8506b7c.jpg',
      '/photo/WhatsApp Image 2025-03-29 at 14.04.10_dc8d80e3.jpg',
      '/photo/WhatsApp Image 2025-04-19 at 11.27.43_6662915c.jpg',
      '/photo/WhatsApp Image 2025-04-19 at 12.15.01_18d9b041.jpg',
      '/photo/WhatsApp Image 2025-04-19 at 12.42.38_fa2b8411.jpg',
      '/photo/WhatsApp Image 2025-04-19 at 12.42.39_83ee4d77.jpg',
      '/photo/WhatsApp Image 2025-04-25 at 00.05.55_13765920.jpg',
      '/photo/WhatsApp Image 2025-04-25 at 21.50.59_9a204e57.jpg'
    ],
    category: 'Photography',
    period: '2023-2025',
    technologies: ['Photography', 'Lightroom', 'Photoshop']
  }
]

// Projets web development
const webDevelopmentProjects: Project[] = [
  {
    id: 3,
    title: 'Mowajih AI',
    description: 'Plateforme web innovante basée sur l\'intelligence artificielle pour accompagner les étudiants dans leurs choix académiques et professionnels.',
    domain: 'web-development',
    thumbnail: '/logos/mowajihai.jpg',
    images: ['/logos/mowajihai.jpg'],
    videos: [
      {
        url: '/Siteweb/mowajihAI/mowajih ai.mp4',
        thumbnail: '/logos/mowajihai.jpg',
        title: 'Mowajih AI - Présentation du projet'
      }
    ],
    logo: {
      url: '/logos/mowajihai.jpg',
      description: 'Logo Mowajih AI'
    },
    category: 'AI Platform & Entrepreneurship',
    period: 'Nov 2022 - Jul 2023',
    technologies: ['AI', 'Web Development', 'Data Collection', 'Machine Learning'],
    link: 'https://mowajihai.tech/',
    associated: 'INJAZ Al-Maghrib - Company Program'
  },
  {
    id: 1,
    title: 'Ghilla Maroc',
    description: 'Site vitrine professionnel pour l\'engrais VERANGRI, réalisé dans le cadre de la MENA Competition 2025.',
    domain: 'web-development',
    thumbnail: '/Siteweb/ghilla/coverture .png',
    images: [
      '/Siteweb/ghilla/coverture .png',
      '/Siteweb/ghilla/Screenshot 2025-12-17 144057.png',
      '/Siteweb/ghilla/Screenshot 2025-12-17 144144.png'
    ],
    category: 'Web Development & Branding',
    period: '2025',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    link: 'https://ghilla-projet-tldh.vercel.app/',
    associated: 'INJAZ Al-Maghrib - MENA Competition 2025'
  },
  {
    id: 2,
    title: 'UMI Tech Business Hub (TBH)',
    description: 'Plateforme officielle de l\'incubateur universitaire d\'innovation et d\'entrepreneuriat de l\'Université Moulay Ismail (UMI).',
    domain: 'web-development',
    thumbnail: '/Siteweb/tbh/COVERTURE.png',
    images: [
      '/Siteweb/tbh/COVERTURE.png',
      '/Siteweb/tbh/Screenshot 2025-12-17 142408.png',
      '/Siteweb/tbh/Screenshot 2025-12-17 142435.png'
    ],
    category: 'Web Development & Institutional',
    period: '2025',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    link: 'https://tbh-xkyn.vercel.app/',
    associated: 'UMI - Tech Business Hub'
  },
  {
    id: 4,
    title: 'ARC D\'ORÉ Meknès',
    description: 'Site web officiel du club ARC D\'ORÉ Meknès, conçu pour renforcer sa présence digitale et faciliter la communication avec ses membres et partenaires.',
    domain: 'web-development',
    thumbnail: '/logos/arc dore meknes.jfif',
    images: ['/logos/arc dore meknes.jfif'],
    logo: {
      url: '/logos/arc dore meknes.jfif',
      description: 'Logo ARC D\'ORÉ Meknès'
    },
    category: 'Web Development & Association',
    period: 'Décembre 2023',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
    link: 'https://www.arcdoremeknes.ma/',
    associated: 'Club ARC D\'ORÉ Meknès'
  },
  {
    id: 5,
    title: 'IVR FSM Club – Plateforme Web & E-Learning',
    description: 'Site web officiel et plateforme e-learning du IVR FSM Club (Innovation, Visionnaire, Robotique) de la Faculté des Sciences de Meknès.',
    domain: 'web-development',
    thumbnail: '/Siteweb/ivr club/image.png',
    images: [
      '/Siteweb/ivr club/image.png',
      '/Siteweb/ivr club/ivr site.png',
      '/Siteweb/ivr club/Fhamtech.png'
    ],
    logo: {
      url: '/logos/ivr.png',
      description: 'Logo IVR FSM Club'
    },
    category: 'Web Development & E-Learning Platform',
    period: 'Décembre 2024 – Janvier 2025',
    technologies: ['HTML5', 'CSS / SCSS', 'CSS Sprites', 'JavaScript', 'Bootstrap', 'PHP'],
    link: 'https://ivrclubfs.com/',
    associated: 'IVR FSM Club – Faculté des Sciences de Meknès'
  },
  {
    id: 6,
    title: 'Photography FSM Club',
    description: 'Site web officiel du Photography Club de la Faculté des Sciences de Meknès, conçu pour valoriser la créativité étudiante dans les domaines de la photographie et de la vidéographie.',
    domain: 'web-development',
    thumbnail: '/Siteweb/photography club/couverture.png',
    images: [
      '/Siteweb/photography club/couverture.png',
      '/Siteweb/photography club/image.png'
    ],
    logo: {
      url: '/logos/photography .png',
      description: 'Logo Photography FSM Club'
    },
    category: 'Web Development & Creative Platform',
    period: 'Avril 2025 – Mai 2025',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'React Three Fiber', 'Three.js', 'Ollama'],
    link: 'https://www.photographyfsm.online/',
    associated: 'Photography FSM Club – Faculté des Sciences de Meknès'
  },
  {
    id: 7,
    title: 'Servicelik',
    description: 'Plateforme digitale intermédiaire reliant les étudiants, freelances, entrepreneurs et salariés aux espaces de coworking, pour faciliter la recherche et la réservation d\'espaces de travail professionnels.',
    domain: 'web-development',
    thumbnail: '/Siteweb/servicelik/coverture.png',
    images: [
      '/Siteweb/servicelik/coverture.png',
      '/Siteweb/servicelik/Screenshot 2025-06-10 102112.png',
      '/Siteweb/servicelik/Screenshot 2025-06-10 102131.png'
    ],
    category: 'Web Development & Platform',
    period: 'En développement',
    technologies: ['Web Development', 'Platform Development'],
    link: '#',
    associated: 'Projet personnel - Porteuse de l\'idée'
  },
  {
    id: 8,
    title: 'J&S Firm – HR Consulting & Business Solutions',
    description: 'Site web professionnel pour un cabinet de conseil en ressources humaines et solutions d\'entreprise, visant à renforcer la présence digitale et valoriser le positionnement stratégique.',
    domain: 'web-development',
    thumbnail: '/Siteweb/js firm/coverture.png',
    images: [
      '/Siteweb/js firm/coverture.png',
      '/Siteweb/js firm/Screenshot 2025-12-17 160857.png',
      '/Siteweb/js firm/Screenshot 2025-12-17 160939.png'
    ],
    category: 'Web Development & Business Solutions',
    period: 'Août 2025',
    technologies: ['Next.js', 'TypeScript', 'JavaScript'],
    link: 'https://j-sfirm.vercel.app/',
    associated: 'J&S Firm - Collaboration avec Mansour Jalal'
  },
  {
    id: 9,
    title: 'Harvey Specteur – Cabinet RH & Services aux Entreprises',
    description: 'Site web professionnel pour un cabinet marocain de conseil en ressources humaines et services aux entreprises, visant à présenter les services du cabinet et renforcer sa visibilité B2B.',
    domain: 'web-development',
    thumbnail: '/Siteweb/harvey specteur/couverture.png',
    images: [
      '/Siteweb/harvey specteur/couverture.png',
      '/Siteweb/harvey specteur/Screenshot 2025-12-17 161851.png',
      '/Siteweb/harvey specteur/Screenshot 2025-12-17 161907.png'
    ],
    category: 'Web Development & HR Consulting',
    period: 'Août 2025',
    technologies: ['Next.js', 'TypeScript', 'JavaScript', 'CSS'],
    link: 'https://hevery-specteur-op9a.vercel.app/',
    associated: 'Harvey Specteur - Collaboration avec Experts Human Capital (EHC Groupe)'
  },
  {
    id: 10,
    title: 'Mcovery – Part-Time Web Developer & SEO Specialist',
    description: 'Découvrez Rabat avec Mcovery grâce à des visites audio immersives guidées par des conteurs, musiciens et historiens. Commencez votre exploration en un clic, sans application ni réservation.',
    domain: 'web-development',
    thumbnail: '/logos/mcovery.webp',
    images: [
      '/logos/mcovery.webp'
    ],
    logo: { url: '/logos/mcovery.webp', description: 'Mcovery logo' },
    category: 'Web Development & SEO',
    period: 'Juillet 2025 – Présent',
    technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'React', 'Strapi', 'Tailwind CSS', 'Trello'],
    link: 'https://www.mcovery.org/',
    associated: 'Mcovery - Rabat, Maroc (Remote)'
  },
  {
    id: 11,
    title: 'MWT – Moroccan Walking Tour',
    description: 'Plateforme intermédiaire qui connecte les guides locaux avec les touristes, permettant de réserver des circuits touristiques authentiques à Rabat et au Maroc.',
    domain: 'web-development',
    thumbnail: '/logos/Logo-MWT-500-×-250-px-1.webp',
    images: [
      '/logos/Logo-MWT-500-×-250-px-1.webp'
    ],
    logo: { url: '/logos/Logo-MWT-500-×-250-px-1.webp', description: 'MWT logo' },
    category: 'Web Development & Tourism',
    period: '2025 – Présent',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'NestJS', 'MySQL'],
    link: 'https://moroccowalkingtour.com/',
    associated: 'Moroccan Walking Tour - Développeuse à temps partiel'
  },
  {
    id: 12,
    title: 'SI_EHC – Système d\'Information EHC',
    description: 'Plateforme multi-tenant complète pour la gestion des formations, couvrant tout le cycle de vie : catalogue, campagnes, sélections, workflows d\'approbation, planification, suivi des formateurs, QCM et reporting.',
    domain: 'web-development',
    thumbnail: '/logos/experts_human_capital_logo.jpg',
    images: [
      '/logos/experts_human_capital_logo.jpg'
    ],
    logo: { url: '/logos/experts_human_capital_logo.jpg', description: 'EHC logo' },
    videos: [
      {
        url: '/Siteweb/SI EHC/Sequence 01_1.mp4',
        thumbnail: '/logos/experts_human_capital_logo.jpg',
        title: 'Démonstration SI_EHC'
      }
    ],
    category: 'Web Development & SaaS',
    period: '2025',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'Sequelize', 'React.js', 'Redux Toolkit', 'Ant Design', 'Tailwind CSS', 'JWT'],
    link: '#',
    associated: 'EHC - Chef de projet avec équipe de 12 stagiaires'
  },
  {
    id: 13,
    title: 'CoursAdis – Plateforme de Cours Particuliers en Ligne',
    description: 'Plateforme de cours particuliers en ligne permettant de connecter élèves et professeurs certifiés. Les utilisateurs peuvent apprendre à leur rythme grâce à des cours personnalisés en visioconférence.',
    domain: 'web-development',
    thumbnail: '/Siteweb/coursadis/couverture.png',
    images: [
      '/Siteweb/coursadis/couverture.png',
      '/Siteweb/coursadis/Screenshot 2025-12-17 172703.png',
      '/Siteweb/coursadis/Screenshot 2025-12-17 172821.png'
    ],
    category: 'Web Development & Education',
    period: '2025',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Framer Motion', 'React Hook Form', 'Sonner'],
    link: 'https://cours-adis.vercel.app/',
    associated: 'CoursAdis - Collaboration avec Imane Halif'
  },
  {
    id: 14,
    title: 'MedChain – Plateforme de Digitalisation du Secteur de la Santé',
    description: 'Plateforme et application mobile sécurisées, basées sur la blockchain, visant à digitaliser le secteur de la santé au Maroc.',
    domain: 'web-development',
    thumbnail: '/Siteweb/Medchains/coverture.png',
    images: [
      '/Siteweb/Medchains/coverture.png',
      '/Siteweb/Medchains/Screenshot 2025-12-17 173821.png',
      '/Siteweb/Medchains/Screenshot 2025-12-17 173840.png'
    ],
    logo: { url: '/logos/medchain-logo (1).jpg', description: 'MedChain logo' },
    category: 'Web Development & Healthcare',
    period: 'Mars 2024 – Présent',
    technologies: ['Blockchain', 'Mobile App', 'Web Platform'],
    link: '#',
    associated: 'MedChain - Porteuse de projet / PDG'
  },
  {
    id: 15,
    title: 'Arihal – Gestion des Travaux pour Entreprise BTP',
    description: 'Plateforme de gestion complète pour une entreprise de BTP, permettant un suivi efficace des projets, des ressources humaines et matérielles, ainsi que de la santé financière de l\'entreprise.',
    domain: 'web-development',
    thumbnail: '/Siteweb/Arihal Traveaux/arihal.jpeg',
    images: [
      '/Siteweb/Arihal Traveaux/arihal.jpeg',
      '/Siteweb/Arihal Traveaux/Screenshot 2025-12-17 180520.png',
      '/Siteweb/Arihal Traveaux/Screenshot 2025-12-17 180544.png'
    ],
    logo: { url: '/Siteweb/Arihal Traveaux/arihal.jpeg', description: 'Arihal logo' },
    category: 'Web Development & BTP Management',
    period: '2025',
    technologies: ['Web Platform', 'Project Management', 'Financial Management'],
    link: '#',
    associated: 'Arihal - Développeuse / Responsable du projet'
  },
  {
    id: 16,
    title: 'Opium Restaurant – Portugal',
    description: 'Site web complet pour restaurant avec menu interactif, identité visuelle et contenu multilingue, offrant une expérience utilisateur fluide et moderne.',
    domain: 'web-development',
    thumbnail: '/Siteweb/OPIUM/OPIUM.gif',
    images: [
      '/Siteweb/OPIUM/OPIUM.gif'
    ],
    logo: { url: '/Siteweb/OPIUM/OPIUM.gif', description: 'Opium Restaurant logo' },
    category: 'Web Development & Restaurant',
    period: '2025',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://opium-restaurant.vercel.app/',
    associated: 'Opium Restaurant - Développeuse / Responsable contenu et design'
  }
]

// Tous les projets
export const projects: Project[] = [
  ...videographyProjects,
  ...photographyProjects,
  ...designBannersProjects,
  ...designFlyersProjects,
  ...designPostsProjects,
  ...designLogosProjects,
  ...designCardsProjects,
  ...designUIUXProjects,
  ...webDevelopmentProjects
]

// Export webDevelopmentProjects for use in components
export { webDevelopmentProjects }

// Helper functions
export function getProjectsByDomain(domain: ProjectDomain): Project[] {
  return projects.filter(project => project.domain === domain)
}

export function getProjectById(id: number): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getAllDomains(): ProjectDomain[] {
  return ['complete', 'design-only', 'photography', 'videography', 'web-development']
}

