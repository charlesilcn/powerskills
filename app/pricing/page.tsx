import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimate } from "@/components/scroll-animate"

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    description: "For casual explorers & beginners",
    features: [
      "Basic Skills: 3 downloads / month",
      "Advanced Skills: Pay-as-you-go only",
      "LLM Token Equivalent: 0 Tokens",
      "Extra Credit Top-Up Price: $8.00 per 1k Credits",
      "Living Asset Streams: Manual version checks",
      "Live Sandbox Execution: Standard Priority",
      "Encrypted IP Stewardship: N/A (Buyers only)",
      "Creator Monetization: Cannot sell",
      "Customer Support: Community / Forums",
    ],
    buttonText: "Start Free",
    buttonVariant: "outline" as const,
    isPopular: false,
  },
  {
    name: "Go",
    price: "$19.90",
    period: "/mo",
    description: "For skill testers & hobbyists",
    features: [
      "Basic Skills: Unlimited",
      "Advanced Skills: 3,000 Credits / mo",
      "LLM Token Equivalent: (~3 Million LLM Tokens)",
      "Extra Credit Top-Up Price: $7.60 per 1k Credits",
      "Living Asset Streams: Real-Time Streaming Updates",
      "Live Sandbox Execution: Medium Priority",
      "Encrypted IP Stewardship: Basic protection",
      "Creator Monetization: Can sell (Standard fee)",
      "Customer Support: Standard Email (Business Hours)",
    ],
    buttonText: "Choose Go",
    buttonVariant: "default" as const,
    isPopular: false,
  },
  {
    name: "Pro",
    price: "$199.90",
    period: "/mo",
    description: "For freelancers, creators & agencies",
    features: [
      "Basic Skills: Unlimited",
      "Advanced Skills: 35,000 Credits / mo",
      "LLM Token Equivalent: (~35 Million LLM Tokens)",
      "Extra Credit Top-Up Price: $6.00 per 1k Credits",
      "Living Asset Streams: Real-Time Streaming Updates",
      "Live Sandbox Execution: High Priority (Heavy Compute)",
      "Encrypted IP Stewardship: Advanced audit logs & isolation",
      "Creator Monetization: Can sell (Low fee) + Subscriptions",
      "Customer Support: 24/7 Priority Support",
    ],
    buttonText: "Choose Pro",
    buttonVariant: "default" as const,
    isPopular: true,
  },
  {
    name: "Ultra",
    price: "Custom",
    description: "For enterprise teams",
    features: [
      "Basic Skills: Unlimited",
      "Advanced Skills: Custom Volume",
      "LLM Token Equivalent: Unlimited",
      "Extra Credit Top-Up Price: Negotiated Bulk Rate",
      "Living Asset Streams: Custom deployment",
      "Live Sandbox Execution: Dedicated compute",
      "Encrypted IP Stewardship: Enterprise compliance",
      "Creator Monetization: API White-labeling",
      "Customer Support: Dedicated Account Manager",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "default" as const,
    isPopular: false,
  },
]

const faqs = [
  {
    question: "What are Basic Skills?",
    answer: "Essentially database reads. A user requests the tool/template, your PostgreSQL database serves it, and you log the action. Low cost, low friction.",
  },
  {
    question: "What are Advanced Skills?",
    answer: "Trigger secure API calls. The user requests the skill, your system verifies their token balance, routes the request to the creator's 'private packet' in the Live Sandbox, waits for the output, and deducts the tokens. High value, protected IP.",
  },
  {
    question: "How do I upgrade or downgrade my plan?",
    answer: "You can upgrade or downgrade your plan at any time in your account settings. Upgrades take effect immediately, while downgrades take effect at the start of the next billing cycle.",
  },
  {
    question: "What happens if I exceed my monthly usage limit?",
    answer: "If you exceed your monthly usage limit, you can choose to purchase additional credits or upgrade to a higher plan to get more usage allowance.",
  },
]

export default function PricingPage() {
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
                Transparent Pricing
              </Badge>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-blur">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl font-bold text-[var(--foreground)] mb-8 leading-tight tracking-tight">
                Choose the Perfect<br />
                <span className="text-[var(--primary)]">AI Capability Plan</span>
              </h1>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-up">
              <p className="text-xl md:text-2xl text-[var(--muted-foreground)] mb-12 max-w-3xl mx-auto leading-relaxed">
                Whether you're an individual user or an enterprise team, we have a plan that fits your needs.
                All plans include powerful AI capabilities to help you achieve your business goals.
              </p>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => {
              const animations = ["fade-left", "fade-up", "fade-right", "fade-scale"] as const
              return (
                <ScrollAnimate key={tier.name} animation={animations[index]} delay={index * 0.1}>
                  <Card className={`relative h-full ${tier.isPopular ? 'border-[var(--primary)]' : ''}`}>
                    {tier.isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-[var(--primary)] text-white">Most Popular</Badge>
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="text-center mb-8">
                        <h3 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-2">
                          {tier.name}
                        </h3>
                        <p className="text-sm text-[var(--muted-foreground)] mb-4">
                          {tier.description}
                        </p>
                        <div className="flex items-baseline justify-center gap-1 mb-2">
                          <span className="font-heading text-4xl font-bold text-[var(--foreground)]">
                            {tier.price}
                          </span>
                          {tier.period && (
                            <span className="text-lg text-[var(--muted-foreground)]">{tier.period}</span>
                          )}
                        </div>
                      </div>

                      <div className="space-y-4 mb-8">
                        {tier.features.map((feature, featureIndex) => {
                          const isDisabled = feature.includes("N/A") || feature.includes("Cannot")
                          return (
                            <div key={featureIndex} className="flex items-start gap-3">
                              {isDisabled ? (
                                <X className="w-5 h-5 text-[var(--muted-foreground)] mt-0.5 flex-shrink-0" />
                              ) : (
                                <Check className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" />
                              )}
                              <span className={`text-sm ${isDisabled ? 'text-[var(--muted-foreground)]' : 'text-[var(--foreground)]'}`}>
                                {feature}
                              </span>
                            </div>
                          )
                        })}
                      </div>

                      <Button 
                        variant={tier.buttonVariant} 
                        className={`w-full ${tier.isPopular ? 'bg-[var(--primary)] hover:bg-[var(--primary)]/90' : ''}`}
                        asChild
                      >
                        <Link href="/auth/register">
                          {tier.buttonText}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollAnimate>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollAnimate animation="fade-left">
              <h2 className="font-heading text-3xl font-bold text-[var(--foreground)] mb-8 text-center">
                Frequently Asked Questions
              </h2>
            </ScrollAnimate>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <ScrollAnimate key={index} animation="fade-up" delay={index * 0.1}>
                  <div className="border border-[var(--border)] rounded-lg p-6">
                    <h3 className="font-medium text-[var(--foreground)] mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {faq.answer}
                    </p>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--primary)]">
        <div className="container mx-auto px-4">
          <ScrollAnimate animation="fade-blur">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Choose the plan that works for you and start using powerful AI capabilities to boost your business efficiency today.
              </p>
              <Button size="lg" className="bg-white text-[var(--primary)] hover:bg-white/90" asChild>
                <Link href="/auth/register">Start Free</Link>
              </Button>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </div>
  )
}
