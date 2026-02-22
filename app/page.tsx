import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Shield, Code2, BookOpen, Scale, Stethoscope, PenTool, Star, Brain, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimate } from "@/components/scroll-animate"

// Mock data for featured skills
const featuredSkills = [
  {
    id: "1",
    name: "Personal Knowledge Assistant",
    description: "Intelligently organize, analyze and retrieve personal knowledge base with multi-format document management",
    category: "Personal Knowledge",
    pricingType: "FREE",
    price: 0,
    rating: 4.8,
    reviews: 128,
    developer: "AI Labs",
    icon: "🧠",
  },
  {
    id: "2",
    name: "Legal Document Generator",
    description: "Automatically generate various legal documents based on requirements, provide legal advice and risk assessment",
    category: "Legal Consultation",
    pricingType: "SUBSCRIPTION",
    price: 49,
    rating: 4.9,
    reviews: 256,
    developer: "LegalTech",
    icon: "⚖️",
  },
  {
    id: "3",
    name: "Healthcare Advisor",
    description: "Provide health advice based on symptom analysis, interpret medical reports, recommend suitable medical institutions",
    category: "Medical Diagnosis",
    pricingType: "SUBSCRIPTION",
    price: 29,
    rating: 4.7,
    reviews: 89,
    developer: "HealthAI",
    icon: "🏥",
  },
  {
    id: "4",
    name: "Content Creation Assistant",
    description: "Intelligently generate articles, video scripts, social media content with multi-platform publishing support",
    category: "Content Creation",
    pricingType: "SUBSCRIPTION",
    price: 39,
    rating: 4.6,
    reviews: 67,
    developer: "ContentFlow",
    icon: "✍️",
  },
]

const businessAreas = [
  {
    id: "1",
    name: "Personal Knowledge",
    description: "Intelligently organize, analyze and retrieve personal knowledge, build your exclusive AI knowledge assistant",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "2",
    name: "Legal Consultation",
    description: "Provide legal advice, document generation and risk assessment, making legal services accessible",
    icon: Scale,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "3",
    name: "Medical Diagnosis",
    description: "Provide health advice based on symptom analysis, interpret medical reports, assist medical decision-making",
    icon: Stethoscope,
    color: "from-red-500 to-rose-600",
  },
  {
    id: "4",
    name: "Content Creation",
    description: "Intelligently generate multi-platform content, improve creation efficiency and expand influence",
    icon: PenTool,
    color: "from-purple-500 to-violet-600",
  },
]

const stats = [
  { label: "AI Capabilities", value: "100+", icon: Brain },
  { label: "Enterprise Clients", value: "500+", icon: Code2 },
  { label: "API Calls", value: "10M+", icon: Zap },
  { label: "Customer Satisfaction", value: "4.9", icon: Star },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden flex items-center min-h-[80vh]">
        {/* Particle Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--accent)]/10" />
          {/* Animated Particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-[var(--primary)]/40 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-[var(--accent)]/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[var(--primary)]/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-[var(--accent)]/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-[var(--primary)]/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-60 left-1/3 w-3 h-3 bg-[var(--accent)]/20 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
          <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-[var(--primary)]/25 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }} />
          {/* Floating Orbs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--primary)]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--accent)]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimate animation="fade-down">
              <Badge className="mb-8 bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)]/20 text-sm px-4 py-1">
                🚀 New Upgrade
              </Badge>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-blur">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl font-bold text-[var(--foreground)] mb-8 leading-tight tracking-tight">
                AI Superpower.
                <br />
                <span className="text-[var(--primary)]">On Demand.</span>
              </h1>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up">
              <p className="text-xl md:text-2xl text-[var(--muted-foreground)] mb-12 max-w-3xl mx-auto leading-relaxed">
                PowerSkills is a modern AI Skills trading platform that uses a credit-based business model and creator incentive system to provide users with on-demand AI skills.
              </p>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-scale">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-lg px-8 py-6" asChild>
                  <Link href="/community">Explore Community</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                  <Link href="/ranking">View Rankings</Link>
                </Button>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Core Business Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollAnimate animation="fade-up">
              <Badge className="mb-4 bg-[var(--primary)]/10 text-[var(--primary)]">
                Core Business
              </Badge>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
                Four Core AI Capability Areas
              </h2>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up">
              <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
                PowerSkills focuses on four core areas to provide you with comprehensive AI solutions
              </p>
            </ScrollAnimate>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {businessAreas.map((area, index) => {
              const animations = ["fade-left", "fade-up", "fade-right", "fade-scale"]
              return (
                <ScrollAnimate key={area.id} animation={animations[index] as any}>
                  <div className="group flex flex-col h-full">
                    <div className={`flex-1 rounded-2xl p-8 text-white mb-6 bg-gradient-to-br ${area.color} shadow-lg group-hover:shadow-xl transition-shadow flex flex-col min-h-[280px]`}>
                      <area.icon className="w-12 h-12 mb-4 flex-shrink-0" />
                      <h3 className="font-heading text-2xl font-bold mb-2">{area.name}</h3>
                      <p className="text-white/80 flex-grow">{area.description}</p>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-[var(--primary)] group-hover:text-white transition-colors mt-auto" asChild>
                      <Link href={`/skills?category=${area.name}`}>Learn More</Link>
                    </Button>
                  </div>
                </ScrollAnimate>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-20 bg-white/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <ScrollAnimate animation="fade-left">
                <h2 className="font-heading text-3xl font-bold text-[var(--foreground)] mb-2">
                  Featured AI Capabilities
                </h2>
              </ScrollAnimate>
              <ScrollAnimate animation="fade-left">
                <p className="text-[var(--muted-foreground)]">
                  Verified high-quality AI capabilities to boost your business growth
                </p>
              </ScrollAnimate>
            </div>
            <ScrollAnimate animation="fade-scale">
              <Button variant="outline" asChild>
                <Link href="/community" className="hidden md:flex items-center gap-2">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </ScrollAnimate>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSkills.map((skill) => (
              <ScrollAnimate key={skill.id} animation="fade-scale">
                <Link href={`/skills/${skill.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-4xl">{skill.icon}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-[var(--primary)] transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)] mb-4 line-clamp-2">
                        {skill.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{skill.rating}</span>
                          <span className="text-[var(--muted-foreground)]">
                            ({skill.reviews})
                          </span>
                        </div>
                        <span className="text-[var(--muted-foreground)]">
                          by {skill.developer}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollAnimate>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <ScrollAnimate animation="fade-scale">
              <Button variant="outline" asChild>
                <Link href="/community" className="flex items-center gap-2">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Living Streaming, Demand-Driven & Encrypted IP */}
      <section className="py-20 bg-[var(--muted)]/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Living Streaming */}
            <ScrollAnimate animation="fade-left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="relative bg-[var(--card)] rounded-3xl p-8 border border-[var(--border)] hover:border-[var(--primary)]/30 transition-all duration-300 h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-6">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="mb-4 bg-blue-500/10 text-blue-600 dark:text-blue-400 w-fit">
                    Real-Time
                  </Badge>
                  <h3 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-4">
                    Living Streaming
                  </h3>
                  <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed flex-grow">
                    Experience real-time AI capability streaming. Our platform delivers 
                    instant updates and live interactions, ensuring you always have access 
                    to the latest AI innovations as they happen.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Real-time capability updates",
                      "Instant API responses",
                      "Live performance monitoring",
                      "Continuous model improvements",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-[var(--foreground)]">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <ArrowRight className="w-3 h-3 text-blue-500" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/docs/streaming">Learn More</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimate>

            {/* Demand-Driven */}
            <ScrollAnimate animation="fade-up">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--primary)]/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="relative bg-[var(--card)] rounded-3xl p-8 border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all duration-300 h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="mb-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 w-fit">
                    Scalable
                  </Badge>
                  <h3 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-4">
                    Demand-Driven
                  </h3>
                  <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed flex-grow">
                    Scale your AI capabilities based on actual demand. Pay only for what 
                    you use with our flexible, consumption-based pricing model that grows 
                    with your business needs.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Usage-based pricing",
                      "Auto-scaling infrastructure",
                      "Cost optimization tools",
                      "Predictive demand analytics",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-[var(--foreground)]">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <ArrowRight className="w-3 h-3 text-emerald-500" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimate>

            {/* Encrypted IP */}
            <ScrollAnimate animation="fade-right">
              <div className="relative group md:col-span-2 lg:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="relative bg-[var(--card)] rounded-3xl p-8 border border-[var(--border)] hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="mb-4 bg-purple-500/10 text-purple-600 dark:text-purple-400 w-fit">
                    Secure
                  </Badge>
                  <h3 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-4">
                    Encrypted IP
                  </h3>
                  <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed flex-grow">
                    Protect your intellectual property with enterprise-grade encryption. 
                    Our platform ensures your AI models and data remain secure throughout 
                    the entire lifecycle.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "End-to-end encryption",
                      "Secure sandbox execution",
                      "IP audit logs & tracking",
                      "Compliance certifications",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-[var(--foreground)]">
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <ArrowRight className="w-3 h-3 text-purple-500" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/security">Learn More</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimate animation="fade-blur">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-blur">
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Whether you are an enterprise looking for AI solutions or a developer
              wanting to monetize your skills, PowerSkills is your best choice.
            </p>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-blur">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-[var(--primary)] hover:bg-white/90" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/auth/register">Sign Up Free</Link>
              </Button>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  )
}
