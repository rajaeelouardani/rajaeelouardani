// Main entry point for blog detail translations with lazy loading and cache
import { BlogDetailTranslations, BlogDetailLocale, BlogTranslations } from './types'
import { getBlogCategory } from './categoryMap'

// Static imports for completed categories (better for Next.js)
import uiuxTranslations from './categories/uiux'
import videographyTranslations from './categories/videography'
import webdevTranslations from './categories/webdev'
import databasesTranslations from './categories/databases'
import aiTranslations from './categories/ai'
import photographyTranslations from './categories/photography'
import contentTranslations from './categories/content'
import marketingTranslations from './categories/marketing'
import brandingTranslations from './categories/branding'
import entrepreneurshipTranslations from './categories/entrepreneurship'
import softskillsTranslations from './categories/softskills'
import hardskillsTranslations from './categories/hardskills'
import otherTranslations from './categories/other'
import backendTranslations from './categories/backend'

// Cache for loaded translations
const translationCache = new Map<string, BlogTranslations>()

// Cache for individual blog translations
const blogCache = new Map<string, BlogDetailTranslations>()

// Clear cache on module load in development to ensure fresh content
// Always clear cache in development, both client and server side
if (process.env.NODE_ENV === 'development') {
  translationCache.clear()
  blogCache.clear()
}

// Default content generator
function generateDefaultContent(blogId: number, locale: BlogDetailLocale): BlogDetailTranslations {
  const messages = {
    fr: {
      domainExplanation: 'Ce domaine est en cours de développement. Le contenu détaillé sera bientôt disponible.',
      howToStart: 'Restez à l\'écoute pour des guides détaillés sur ce sujet.',
      essentialElements: ['Contenu en préparation'],
      fullContent: `<h2>Contenu en Préparation</h2><p>Le contenu détaillé pour cet article est en cours de préparation. Revenez bientôt pour découvrir des explications complètes, des exemples pratiques et des guides détaillés.</p><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop" alt="En préparation" class="w-full rounded-lg my-6" />`,
      prerequisites: ['À venir'],
      tools: ['À venir'],
      nextSteps: ['Revenez bientôt pour plus de contenu']
    },
    ar: {
      domainExplanation: 'هذا المجال قيد التطوير. المحتوى التفصيلي سيكون متاحًا قريبًا.',
      howToStart: 'ترقبوا أدلة تفصيلية حول هذا الموضوع.',
      essentialElements: ['المحتوى قيد الإعداد'],
      fullContent: `<h2>المحتوى قيد الإعداد</h2><p>المحتوى التفصيلي لهذه المقالة قيد الإعداد. عد قريبًا لاكتشاف شرح كامل وأمثلة عملية وأدلة تفصيلية.</p><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop" alt="قيد الإعداد" class="w-full rounded-lg my-6" />`,
      prerequisites: ['قريبًا'],
      tools: ['قريبًا'],
      nextSteps: ['عد قريبًا للمزيد من المحتوى']
    },
    en: {
      domainExplanation: 'This domain is under development. Detailed content will be available soon.',
      howToStart: 'Stay tuned for detailed guides on this topic.',
      essentialElements: ['Content in preparation'],
      fullContent: `<h2>Content in Preparation</h2><p>The detailed content for this article is being prepared. Come back soon to discover complete explanations, practical examples, and detailed guides.</p><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop" alt="In preparation" class="w-full rounded-lg my-6" />`,
      prerequisites: ['Coming soon'],
      tools: ['Coming soon'],
      nextSteps: ['Come back soon for more content']
    }
  }
  
  return messages[locale]
}

// Load category translations dynamically
async function loadCategoryTranslations(category: string): Promise<BlogTranslations> {
  const cacheKey = category
  
  // In development, always skip cache to ensure fresh content
  // Check cache first (skip in development)
  if (process.env.NODE_ENV !== 'development' && translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!
  }
  
  try {
    // Use static imports for completed categories, dynamic for others
    let translations: BlogTranslations = {}
    
    switch (category) {
      case 'photography':
        translations = photographyTranslations
        break
      case 'uiux':
        translations = uiuxTranslations
        break
      case 'videography':
        translations = videographyTranslations
        break
      case 'webdev':
        translations = webdevTranslations
        break
      case 'databases':
        translations = databasesTranslations
        break
      case 'ai':
        translations = aiTranslations
        break
      case 'content':
        translations = contentTranslations
        break
      case 'marketing':
        translations = marketingTranslations
        break
      case 'branding':
        translations = brandingTranslations
        break
      case 'entrepreneurship':
        translations = entrepreneurshipTranslations
        break
      case 'softskills':
        translations = softskillsTranslations
        break
      case 'hardskills':
        translations = hardskillsTranslations
        break
      case 'other':
        translations = otherTranslations
        break
      case 'backend':
        translations = backendTranslations
        break
      default:
        return {}
    }
    
    // Debug logging
    if (process.env.NODE_ENV === 'development') {
      console.log(`Loaded translations for category ${category}:`, Object.keys(translations))
      console.log(`Translations object:`, translations)
    }
    
    // Cache the loaded translations (only in production)
    if (process.env.NODE_ENV !== 'development') {
      translationCache.set(cacheKey, translations)
    }
    return translations
  } catch (error) {
    console.error(`Failed to load translations for category: ${category}`, error)
    return {}
  }
}

// Main function to get blog detail translations
export async function getBlogDetailTranslations(
  blogId: number,
  locale: BlogDetailLocale
): Promise<BlogDetailTranslations | undefined> {
  const blogCacheKey = `${blogId}-${locale}`
  
  // In development, skip cache to ensure fresh content
  // Check individual blog cache first (skip in development)
  if (process.env.NODE_ENV !== 'development' && blogCache.has(blogCacheKey)) {
    return blogCache.get(blogCacheKey)
  }
  
  // Get category for this blog
  const category = getBlogCategory(blogId)
  
  // Load category translations
  const categoryTranslations = await loadCategoryTranslations(category)
  
  // Debug logging (remove in production)
  if (process.env.NODE_ENV === 'development') {
    console.log(`Loading translations for blog ${blogId}, category: ${category}`)
    const availableIds = Object.keys(categoryTranslations).map(Number)
    console.log(`Available blog IDs in category:`, availableIds)
    console.log(`Looking for blog ID:`, blogId, `Type:`, typeof blogId)
    console.log(`Category translations object:`, categoryTranslations)
  }
  
  // Get translations for this specific blog
  // Ensure blogId is a number for proper lookup
  const blogTranslations = categoryTranslations[blogId]
  
  // Debug: Also try with string key in case of type mismatch
  if (!blogTranslations && process.env.NODE_ENV === 'development') {
    const stringKey = String(blogId)
    console.log(`Trying with string key:`, stringKey)
    const altTranslations = categoryTranslations[stringKey as any]
    if (altTranslations) {
      console.log(`Found with string key!`)
    }
  }
  
  if (!blogTranslations) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`No translations found for blog ${blogId} in category ${category}`)
      console.warn(`Available IDs:`, Object.keys(categoryTranslations))
    }
    // Generate default content if not found
    const defaultContent = generateDefaultContent(blogId, locale)
    // Only cache in production
    if (process.env.NODE_ENV !== 'development') {
      blogCache.set(blogCacheKey, defaultContent)
    }
    return defaultContent
  }
  
  // Try to get translation for requested locale, fallback to French, then English
  const translation = blogTranslations[locale] || blogTranslations.fr || blogTranslations.en
  
  if (translation) {
    // Cache the result (only in production)
    if (process.env.NODE_ENV !== 'development') {
      blogCache.set(blogCacheKey, translation)
    }
    return translation
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.warn(`No translation found for locale ${locale} in blog ${blogId}`)
  }
  
  // Fallback to default content
  const defaultContent = generateDefaultContent(blogId, locale)
  // Only cache in production
  if (process.env.NODE_ENV !== 'development') {
    blogCache.set(blogCacheKey, defaultContent)
  }
  return defaultContent
}

// Synchronous version for backward compatibility (loads from cache if available)
export function getBlogDetailTranslationsSync(
  blogId: number,
  locale: BlogDetailLocale
): BlogDetailTranslations | undefined {
  const blogCacheKey = `${blogId}-${locale}`
  
  // Check cache first
  if (blogCache.has(blogCacheKey)) {
    return blogCache.get(blogCacheKey)
  }
  
  // If not in cache, return default content
  // Note: This is a fallback. For best performance, use the async version
  return generateDefaultContent(blogId, locale)
}

// Preload category translations (useful for prefetching)
export async function preloadCategory(category: string): Promise<void> {
  await loadCategoryTranslations(category)
}

// Clear cache (useful for development or when translations are updated)
export function clearTranslationCache(): void {
  translationCache.clear()
  blogCache.clear()
}

