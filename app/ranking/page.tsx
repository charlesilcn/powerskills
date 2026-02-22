import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollAnimate } from "@/components/scroll-animate"
import { 
  Trophy, 
  TrendingUp, 
  Download, 
  Star, 
  ArrowUpRight,
  GitBranch,
  Users,
  Zap,
  Code2,
  MessageSquare,
  Calendar
} from "lucide-react"

// TOP 10 Skills Ranking based on skills.sh leaderboard
const topSkills = [
  {
    rank: 1,
    name: "browser-use",
    owner: "browser-use",
    description: "Make websites accessible for AI agents",
    installs: 125000,
    growth: "+45%",
    rating: 4.9,
    category: "Web Automation",
    language: "Python",
    lastUpdated: "2 days ago",
    icon: "🌐",
  },
  {
    rank: 2,
    name: "mcp-server",
    owner: "modelcontextprotocol",
    description: "Model Context Protocol servers for AI assistants",
    installs: 98000,
    growth: "+38%",
    rating: 4.8,
    category: "Protocol",
    language: "TypeScript",
    lastUpdated: "1 day ago",
    icon: "🔌",
  },
  {
    rank: 3,
    name: "puppeteer",
    owner: "puppeteer",
    description: "Headless Chrome Node.js API for web scraping",
    installs: 87000,
    growth: "+22%",
    rating: 4.7,
    category: "Web Scraping",
    language: "JavaScript",
    lastUpdated: "3 days ago",
    icon: "🎭",
  },
  {
    rank: 4,
    name: "playwright",
    owner: "microsoft",
    description: "Cross-browser automation library",
    installs: 76000,
    growth: "+31%",
    rating: 4.8,
    category: "Web Testing",
    language: "TypeScript",
    lastUpdated: "5 hours ago",
    icon: "🎪",
  },
  {
    rank: 5,
    name: "langchain",
    owner: "langchain-ai",
    description: "Framework for developing LLM applications",
    installs: 68000,
    growth: "+28%",
    rating: 4.6,
    category: "LLM Framework",
    language: "Python",
    lastUpdated: "1 day ago",
    icon: "🔗",
  },
  {
    rank: 6,
    name: "llamaindex",
    owner: "run-llama",
    description: "Data framework for LLM applications",
    installs: 54000,
    growth: "+35%",
    rating: 4.7,
    category: "Data Framework",
    language: "Python",
    lastUpdated: "2 days ago",
    icon: "🦙",
  },
  {
    rank: 7,
    name: "autogen",
    owner: "microsoft",
    description: "Multi-agent conversation framework",
    installs: 48000,
    growth: "+42%",
    rating: 4.5,
    category: "Multi-Agent",
    language: "Python",
    lastUpdated: "4 days ago",
    icon: "🤖",
  },
  {
    rank: 8,
    name: "crewai",
    owner: "joaomdmoura",
    description: "Framework for orchestrating role-playing AI agents",
    installs: 42000,
    growth: "+55%",
    rating: 4.6,
    category: "Agent Framework",
    language: "Python",
    lastUpdated: "6 hours ago",
    icon: "👥",
  },
  {
    rank: 9,
    name: "dify",
    owner: "langgenius",
    description: "Open-source LLM app development platform",
    installs: 38000,
    growth: "+48%",
    rating: 4.7,
    category: "LLM Platform",
    language: "TypeScript",
    lastUpdated: "1 day ago",
    icon: "🚀",
  },
  {
    rank: 10,
    name: "open-interpreter",
    owner: "OpenInterpreter",
    description: "Let LLMs run code on your computer",
    installs: 35000,
    growth: "+39%",
    rating: 4.8,
    category: "Code Execution",
    language: "Python",
    lastUpdated: "3 days ago",
    icon: "💻",
  },
]

const rankingStats = [
  { label: "Total Skills", value: "15,000+", icon: Code2 },
  { label: "Total Installs", value: "2.5M+", icon: Download },
  { label: "Active Developers", value: "50,000+", icon: Users },
  { label: "Daily Installs", value: "25,000+", icon: Zap },
]

const trendingCategories = [
  { name: "Web Automation", growth: "+65%", skills: 1200 },
  { name: "LLM Frameworks", growth: "+52%", skills: 890 },
  { name: "Multi-Agent", growth: "+78%", skills: 456 },
  { name: "Code Execution", growth: "+43%", skills: 234 },
]

export default function RankingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden flex items-center min-h-[60vh]">
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
                Skills Leaderboard
              </Badge>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-blur">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl font-bold text-[var(--foreground)] mb-8 leading-tight tracking-tight">
                TOP 10 Most
                <br />
                <span className="text-[var(--primary)]">Popular Skills</span>
              </h1>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up">
              <p className="text-xl md:text-2xl text-[var(--muted-foreground)] mb-12 max-w-3xl mx-auto leading-relaxed">
                Discover the most installed and trending AI skills from the global community. 
                These skills are powering thousands of AI applications worldwide.
              </p>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-scale">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-lg px-8 py-6" asChild>
                  <Link href="/skills">Browse All Skills</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                  <Link href="/community">Join Community</Link>
                </Button>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-[var(--border)] bg-[var(--muted)]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {rankingStats.map((stat, index) => (
              <ScrollAnimate key={stat.label} animation="fade-scale" delay={index * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--primary)]/10 mb-3">
                    <stat.icon className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div className="font-heading text-3xl font-bold text-[var(--foreground)] mb-1">
                    {stat.value}
                  </div>
                  <p className="text-[var(--muted-foreground)] text-sm">{stat.label}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* TOP 10 Ranking */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimate animation="fade-left" delay={0}>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading text-2xl font-bold text-[var(--foreground)] flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  Top 10 Skills
                </h2>
                <Badge variant="outline" className="text-sm">
                  Updated Daily
                </Badge>
              </div>
            </ScrollAnimate>

            <div className="space-y-4">
              {topSkills.map((skill, index) => {
                const animations: Array<"fade-up" | "fade-right" | "fade-left" | "fade-scale"> = ["fade-up", "fade-right", "fade-left", "fade-scale"]
                const animation = animations[index % 4]
                return (
                <ScrollAnimate 
                  key={skill.rank} 
                  animation={animation}
                  delay={index * 0.08}
                >
                  <Card 
                    className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
                      skill.rank <= 3 ? 'border-yellow-500/30 bg-yellow-500/5' : ''
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        {/* Rank */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                          skill.rank === 1 ? 'bg-yellow-500 text-white' :
                          skill.rank === 2 ? 'bg-gray-400 text-white' :
                          skill.rank === 3 ? 'bg-amber-600 text-white' :
                          'bg-[var(--muted)]/30 text-[var(--foreground)]'
                        }`}>
                          {skill.rank}
                        </div>

                        {/* Icon */}
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[var(--muted)]/20 flex items-center justify-center text-2xl">
                          {skill.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-[var(--foreground)] text-lg">
                              {skill.name}
                            </h3>
                            <Badge variant="secondary" className="text-xs">
                              {skill.category}
                            </Badge>
                            {skill.rank <= 3 && (
                              <Badge className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-xs">
                                <Trophy className="w-3 h-3 mr-1" />
                                Top {skill.rank}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-[var(--muted-foreground)] mb-2">
                            {skill.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                            <span className="flex items-center gap-1">
                              <GitBranch className="w-3 h-3" />
                              {skill.owner}
                            </span>
                            <span className="flex items-center gap-1">
                              <Code2 className="w-3 h-3" />
                              {skill.language}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {skill.lastUpdated}
                            </span>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="hidden md:flex flex-col items-end gap-2">
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div className="flex items-center gap-1 text-[var(--foreground)] font-semibold">
                                <Download className="w-4 h-4" />
                                {skill.installs.toLocaleString()}
                              </div>
                              <div className="text-xs text-[var(--muted-foreground)]">installs</div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 text-emerald-600 font-semibold">
                                <TrendingUp className="w-4 h-4" />
                                {skill.growth}
                              </div>
                              <div className="text-xs text-[var(--muted-foreground)]">growth</div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 text-yellow-500 font-semibold">
                                <Star className="w-4 h-4 fill-yellow-500" />
                                {skill.rating}
                              </div>
                              <div className="text-xs text-[var(--muted-foreground)]">rating</div>
                            </div>
                          </div>
                        </div>

                        {/* Mobile Stats */}
                        <div className="md:hidden flex flex-col items-end gap-1">
                          <span className="text-sm font-semibold text-[var(--foreground)]">
                            {skill.installs.toLocaleString()}
                          </span>
                          <span className="text-xs text-emerald-600">{skill.growth}</span>
                        </div>

                        {/* Action */}
                        <Button variant="ghost" size="icon" className="flex-shrink-0" asChild>
                          <Link href={`/skills/${skill.name}`}>
                            <ArrowUpRight className="w-5 h-5" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimate>
              )})}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="py-20 bg-[var(--muted)]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimate animation="fade-right" delay={0}>
              <h2 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-8 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[var(--primary)]" />
                Trending Categories
              </h2>
            </ScrollAnimate>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingCategories.map((category, index) => (
                <ScrollAnimate 
                  key={category.name} 
                  animation="fade-up"
                  delay={index * 0.1}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-[var(--foreground)] mb-2">
                        {category.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[var(--muted-foreground)]">
                          {category.skills} skills
                        </span>
                        <Badge className="bg-emerald-500/10 text-emerald-600">
                          {category.growth}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollAnimate animation="fade-blur" delay={0}>
        <section className="py-20 bg-[var(--primary)]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Want to See Your Skill on the Leaderboard?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are sharing their AI skills with the world. 
              Build, publish, and monetize your skills on PowerSkills.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-[var(--primary)] hover:bg-white/90" asChild>
                <Link href="/auth/register?role=developer">Start Publishing</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimate>
    </div>
  )
}
