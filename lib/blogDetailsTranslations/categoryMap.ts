// Mapping of blog IDs to their categories for lazy loading
// Only blogs with detailed content are included
export const blogCategoryMap: Record<number, string> = {
  // Photography (1-2)
  1: 'photography',
  2: 'photography',
  
  // UI/UX Design (6-7)
  6: 'uiux',
  7: 'uiux',
  
  // Videography (11-12)
  11: 'videography',
  12: 'videography',
  
  // Web Development (16-17)
  16: 'webdev',
  17: 'webdev',
  
  // Databases (21-22)
  21: 'databases',
  22: 'databases',
  
  // AI & Image Processing (26-27)
  26: 'ai',
  27: 'ai',
  
  // Content Creation (31-32)
  31: 'content',
  32: 'content',
  
  // Digital Marketing (36-37)
  36: 'marketing',
  37: 'marketing',
  
  // Branding (41-42)
  41: 'branding',
  42: 'branding',
  
  // Entrepreneurship (46-47)
  46: 'entrepreneurship',
  47: 'entrepreneurship',
  
  // Soft Skills (51-52)
  51: 'softskills',
  52: 'softskills',
  
  // Hard Skills (56-57)
  56: 'hardskills',
  57: 'hardskills',
  
  // Other Domains (61-62)
  61: 'other',
  62: 'other',
  
  // Backend Development (66-67)
  66: 'backend',
  67: 'backend',
}

export function getBlogCategory(blogId: number): string {
  return blogCategoryMap[blogId] || 'other'
}

