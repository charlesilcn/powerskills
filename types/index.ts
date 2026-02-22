import { Skill, SkillCategory, User, Review, Purchase } from "@prisma/client"

// Skill with relations
export interface SkillWithRelations extends Skill {
  category: SkillCategory
  developer: Pick<User, "id" | "name" | "image">
  tags: { id: string; name: string; slug: string }[]
  reviews: Review[]
}

// Skill card data (for listings)
export interface SkillCardData {
  id: string
  name: string
  slug: string
  shortDescription: string
  logo: string | null
  pricingType: string
  price: number
  subscriptionPrice: number | null
  averageRating: number
  reviewCount: number
  downloadCount: number
  category: {
    id: string
    name: string
    slug: string
  }
  developer: {
    id: string
    name: string | null
    image: string | null
  }
}

// Category with skill count
export interface CategoryWithCount extends SkillCategory {
  _count: {
    skills: number
  }
}

// Search filters
export interface SkillFilters {
  category?: string
  pricingType?: string
  minPrice?: number
  maxPrice?: number
  minRating?: number
  sortBy?: "newest" | "popular" | "rating" | "price_asc" | "price_desc"
}

// User session data
export interface SessionUser {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
  role: "CUSTOMER" | "DEVELOPER" | "ADMIN"
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Pagination
export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Cart item
export interface CartItem {
  skillId: string
  name: string
  price: number
  pricingType: string
  image: string | null
}
