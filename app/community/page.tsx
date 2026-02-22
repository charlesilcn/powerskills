import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollAnimate } from "@/components/scroll-animate"
import { 
  MessageSquare, 
  Users, 
  Calendar, 
  ArrowRight, 
  Search,
  TrendingUp,
  Github,
  Twitter,
  Disc,
  Heart,
  Share2,
  Bookmark
} from "lucide-react"

const communityStats = [
  { label: "Active Members", value: "15,000+", icon: Users },
  { label: "Daily Discussions", value: "500+", icon: MessageSquare },
  { label: "Monthly Events", value: "20+", icon: Calendar },
  { label: "Contributors", value: "2,500+", icon: TrendingUp },
]

const recentDiscussions = [
  {
    id: "1",
    title: "Best practices for deploying AI skills in production",
    author: "Sarah Chen",
    avatar: "SC",
    category: "Technical",
    replies: 45,
    likes: 128,
    time: "2 hours ago",
    tags: ["Deployment", "Best Practices"],
  },
  {
    id: "2",
    title: "New NLP skill release: Advanced sentiment analysis",
    author: "Alex Kumar",
    avatar: "AK",
    category: "Showcase",
    replies: 32,
    likes: 89,
    time: "5 hours ago",
    tags: ["NLP", "Release"],
  },
  {
    id: "3",
    title: "Community challenge: Build a skill in 48 hours",
    author: "Maria Garcia",
    avatar: "MG",
    category: "Events",
    replies: 156,
    likes: 234,
    time: "1 day ago",
    tags: ["Challenge", "Hackathon"],
  },
  {
    id: "4",
    title: "How to monetize your AI skills effectively",
    author: "James Wilson",
    avatar: "JW",
    category: "Business",
    replies: 67,
    likes: 145,
    time: "2 days ago",
    tags: ["Monetization", "Tips"],
  },
]

const upcomingEvents = [
  {
    id: "1",
    title: "Global AI Skills Summit 2025",
    date: "March 15, 2025",
    type: "Conference",
    attendees: 5000,
    description: "Join the largest gathering of AI skill developers and users worldwide.",
  },
  {
    id: "2",
    title: "Weekly Community Call",
    date: "Every Thursday",
    type: "Meetup",
    attendees: 200,
    description: "Weekly sync with the community to share updates and get feedback.",
  },
  {
    id: "3",
    title: "Beginner Workshop: Creating Your First Skill",
    date: "February 28, 2025",
    type: "Workshop",
    attendees: 150,
    description: "Learn the fundamentals of building and publishing AI skills.",
  },
]

const featuredContributors = [
  { name: "David Lee", role: "Core Contributor", skills: 45, avatar: "DL" },
  { name: "Emma Watson", role: "Community Champion", skills: 32, avatar: "EW" },
  { name: "Michael Brown", role: "Technical Writer", skills: 28, avatar: "MB" },
  { name: "Lisa Zhang", role: "Event Organizer", skills: 21, avatar: "LZ" },
]

export default function CommunityPage() {
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
                Welcome to PowerSkills Community
              </Badge>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-blur">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl font-bold text-[var(--foreground)] mb-8 leading-tight tracking-tight">
                Connect, Learn
                <br />
                <span className="text-[var(--primary)]">& Grow Together</span>
              </h1>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up">
              <p className="text-xl md:text-2xl text-[var(--muted-foreground)] mb-12 max-w-3xl mx-auto leading-relaxed">
                Join a thriving community of AI developers, enthusiasts, and innovators. 
                Share knowledge, collaborate on projects, and stay updated with the latest trends.
              </p>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-scale">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-lg px-8 py-6" asChild>
                  <Link href="/auth/register">Join Community</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                  <Link href="/ranking">View Rankings</Link>
                </Button>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollAnimate animation="fade-up" delay={0}>
        <section className="py-12 border-y border-[var(--border)] bg-[var(--muted)]/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {communityStats.map((stat, index) => (
                <ScrollAnimate key={stat.label} animation="fade-up" delay={0.1 * (index + 1)}>
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
      </ScrollAnimate>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Discussions */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollAnimate animation="fade-left" delay={0}>
                <div className="flex items-center justify-between">
                  <h2 className="font-heading text-2xl font-bold text-[var(--foreground)]">
                    Recent Discussions
                  </h2>
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
                    <Input 
                      placeholder="Search discussions..." 
                      className="pl-10"
                    />
                  </div>
                </div>
              </ScrollAnimate>

              <div className="space-y-4">
                {recentDiscussions.map((discussion, index) => (
                  <ScrollAnimate key={discussion.id} animation="fade-right" delay={0.1 * (index + 1)}>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-medium text-[var(--primary)]">
                              {discussion.avatar}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {discussion.category}
                              </Badge>
                              <span className="text-xs text-[var(--muted-foreground)]">
                                {discussion.time}
                              </span>
                            </div>
                            <h3 className="font-semibold text-[var(--foreground)] mb-2 hover:text-[var(--primary)] cursor-pointer">
                              {discussion.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                              <span>by {discussion.author}</span>
                              <div className="flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                {discussion.replies}
                              </div>
                              <div className="flex items-center gap-1">
                                <Heart className="w-4 h-4" />
                                {discussion.likes}
                              </div>
                            </div>
                            <div className="flex gap-2 mt-3">
                              {discussion.tags.map((tag) => (
                                <span 
                                  key={tag} 
                                  className="text-xs px-2 py-1 rounded-full bg-[var(--muted)]/30 text-[var(--muted-foreground)]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimate>
                ))}
              </div>

              <ScrollAnimate animation="fade-up" delay={0.5}>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/community/discussions">
                    View All Discussions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </ScrollAnimate>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <ScrollAnimate animation="fade-left" delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[var(--primary)]" />
                      Upcoming Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={event.id} className="border-b border-[var(--border)] last:border-0 pb-4 last:pb-0">
                        <Badge className="mb-2" variant="outline">{event.type}</Badge>
                        <h4 className="font-semibold text-[var(--foreground)] mb-1">
                          {event.title}
                        </h4>
                        <p className="text-sm text-[var(--muted-foreground)] mb-2">
                          {event.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                          <span>{event.date}</span>
                          <span>{event.attendees} attending</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </ScrollAnimate>

              {/* Featured Contributors */}
              <ScrollAnimate animation="fade-scale" delay={0.3}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-[var(--primary)]" />
                      Top Contributors
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {featuredContributors.map((contributor, index) => (
                      <div key={contributor.name} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
                          <span className="text-sm font-medium text-[var(--accent)]">
                            {contributor.avatar}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-[var(--foreground)] text-sm">
                            {contributor.name}
                          </h4>
                          <p className="text-xs text-[var(--muted-foreground)]">
                            {contributor.role}
                          </p>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {contributor.skills} skills
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </ScrollAnimate>

              {/* Connect With Us */}
              <ScrollAnimate animation="fade-scale" delay={0.4}>
                <Card>
                  <CardHeader>
                    <CardTitle>Connect With Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[var(--muted)]/20 hover:bg-[var(--muted)]/30 transition-colors"
                      >
                        <Github className="w-6 h-6 text-[var(--foreground)]" />
                        <span className="text-xs text-[var(--muted-foreground)]">GitHub</span>
                      </a>
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[var(--muted)]/20 hover:bg-[var(--muted)]/30 transition-colors"
                      >
                        <Twitter className="w-6 h-6 text-[var(--foreground)]" />
                        <span className="text-xs text-[var(--muted-foreground)]">Twitter</span>
                      </a>
                      <a 
                        href="https://discord.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[var(--muted)]/20 hover:bg-[var(--muted)]/30 transition-colors"
                      >
                        <Disc className="w-6 h-6 text-[var(--foreground)]" />
                        <span className="text-xs text-[var(--muted-foreground)]">Discord</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollAnimate animation="fade-blur" delay={0}>
        <section className="py-20 bg-[var(--primary)]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Be part of a growing ecosystem of AI innovators. Share your skills, 
              learn from others, and build the future of AI together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-[var(--primary)] hover:bg-white/90" asChild>
                <Link href="/auth/register">Get Started Free</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/docs/community-guidelines">Community Guidelines</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimate>
    </div>
  )
}
