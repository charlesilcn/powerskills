import Link from "next/link"
import { Search, Filter, Star, Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Mock data
const skills = [
  {
    id: "1",
    name: "Intelligent Text Analyzer",
    shortDescription: "Powerful NLP skill supporting sentiment analysis, entity recognition, and text classification",
    category: { name: "Natural Language Processing", slug: "nlp" },
    pricingType: "FREE",
    price: 0,
    averageRating: 4.8,
    reviewCount: 128,
    downloadCount: 2560,
    developer: { name: "AI Labs", image: null },
    icon: "📝",
  },
  {
    id: "2",
    name: "Image Recognition Pro",
    shortDescription: "High-precision image recognition supporting object detection, face recognition, and scene analysis",
    category: { name: "Computer Vision", slug: "computer-vision" },
    pricingType: "ONE_TIME",
    price: 49,
    averageRating: 4.9,
    reviewCount: 256,
    downloadCount: 1890,
    developer: { name: "VisionTech", image: null },
    icon: "👁️",
  },
  {
    id: "3",
    name: "Smart Customer Service Bot",
    shortDescription: "Intelligent customer service solution based on large language models",
    category: { name: "Conversational AI", slug: "chatbot" },
    pricingType: "SUBSCRIPTION",
    price: 29,
    averageRating: 4.7,
    reviewCount: 89,
    downloadCount: 980,
    developer: { name: "ChatFlow", image: null },
    icon: "💬",
  },
  {
    id: "4",
    name: "Data Prediction Engine",
    shortDescription: "Time series data prediction and anomaly detection for business data analysis",
    category: { name: "Data Analysis", slug: "data-analysis" },
    pricingType: "ONE_TIME",
    price: 99,
    averageRating: 4.6,
    reviewCount: 67,
    downloadCount: 720,
    developer: { name: "DataMind", image: null },
    icon: "📊",
  },
  {
    id: "5",
    name: "Speech Recognition API",
    shortDescription: "High-precision speech recognition supporting multiple languages and real-time transcription",
    category: { name: "Speech Recognition", slug: "speech" },
    pricingType: "SUBSCRIPTION",
    price: 19,
    averageRating: 4.5,
    reviewCount: 156,
    downloadCount: 1450,
    developer: { name: "VoiceAI", image: null },
    icon: "🎤",
  },
  {
    id: "6",
    name: "Recommendation System Engine",
    shortDescription: "Personalized recommendation system based on collaborative filtering and deep learning",
    category: { name: "Recommendation System", slug: "recommendation" },
    pricingType: "ONE_TIME",
    price: 149,
    averageRating: 4.8,
    reviewCount: 45,
    downloadCount: 380,
    developer: { name: "RecSys Pro", image: null },
    icon: "⭐",
  },
]

const categories = [
  { name: "All", slug: "" },
  { name: "Natural Language Processing", slug: "nlp" },
  { name: "Computer Vision", slug: "computer-vision" },
  { name: "Speech Recognition", slug: "speech" },
  { name: "Data Analysis", slug: "data-analysis" },
  { name: "Conversational AI", slug: "chatbot" },
  { name: "Recommendation System", slug: "recommendation" },
]

interface SkillsPageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function SkillsPage({ searchParams }: SkillsPageProps) {
  const query = typeof searchParams.q === "string" ? searchParams.q : ""
  const category = typeof searchParams.category === "string" ? searchParams.category : ""

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold text-[var(--foreground)] mb-2">
            Browse AI Skills
          </h1>
          <p className="text-[var(--muted-foreground)]">
            Discover {skills.length}+ verified AI Skills
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
            <Input
              type="search"
              placeholder="Search Skills..."
              className="pl-10"
              defaultValue={query}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Select defaultValue={category}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select defaultValue="">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Pricing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="subscription">Subscription</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="popular">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price_asc">Price: Low to High</SelectItem>
                <SelectItem value="price_desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.slug ? `/skills?category=${cat.slug}` : "/skills"}
            >
              <Badge
                variant={category === cat.slug ? "default" : "secondary"}
                className={`cursor-pointer whitespace-nowrap ${
                  category === cat.slug
                    ? "bg-[var(--primary)]"
                    : "bg-white hover:bg-[var(--muted)]"
                }`}
              >
                {cat.name}
              </Badge>
            </Link>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Link key={skill.id} href={`/skills/${skill.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{skill.icon}</span>
                    <Badge
                      variant={skill.pricingType === "FREE" ? "secondary" : "default"}
                      className={
                        skill.pricingType === "FREE"
                          ? "bg-[var(--accent)]/10 text-[var(--accent)]"
                          : "bg-[var(--primary)]/10 text-[var(--primary)]"
                      }
                    >
                      {skill.pricingType === "FREE"
                        ? "Free"
                        : skill.pricingType === "SUBSCRIPTION"
                        ? `$${skill.price}/mo`
                        : `$${skill.price}`}
                    </Badge>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] mb-4 line-clamp-2">
                    {skill.shortDescription}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)] mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{skill.averageRating}</span>
                      <span>({skill.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{skill.downloadCount}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                    <Badge variant="outline" className="text-xs">
                      {skill.category.name}
                    </Badge>
                    <span className="text-sm text-[var(--muted-foreground)]">
                      by {skill.developer.name}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-[var(--primary)] text-white">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
