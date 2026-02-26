# PowerSkills - AI Capabilities Marketplace

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-3.4-cyan?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Prisma-6.0-2D3748?style=for-the-badge&logo=prisma" alt="Prisma">
</p>

<p align="center">
  <strong>AI Superpower. On Demand.</strong>
</p>

<p align="center">
  <a href="https://powerskills.vercel.app/">Live Demo</a> •
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## 📖 Introduction

**PowerSkills** is a modern AI Skills trading platform that connects AI developers with users who need on-demand AI capabilities. Built with a credit-based business model and creator incentive system, PowerSkills enables seamless discovery, purchase, and integration of AI skills for businesses and individuals.

### 🎯 Mission

Our mission is to democratize access to AI capabilities by creating a thriving marketplace where:
- **Users** can easily discover and use powerful AI skills without complex setup
- **Developers** can monetize their AI expertise and reach a global audience
- **Businesses** can scale their AI capabilities based on actual demand

---

## ✨ Features

### 🚀 Core Capabilities

#### Living Streaming
Experience real-time AI capability streaming with instant updates and live interactions. Our platform ensures you always have access to the latest AI innovations as they happen.

- Real-time capability updates
- Instant API responses
- Live performance monitoring
- Continuous model improvements

#### Demand-Driven
Scale your AI capabilities based on actual demand. Pay only for what you use with our flexible, consumption-based pricing model that grows with your business needs.

- Usage-based pricing
- Auto-scaling infrastructure
- Cost optimization tools
- Predictive demand analytics

#### Encrypted IP
Protect your intellectual property with enterprise-grade encryption. Our platform ensures your AI models and data remain secure throughout the entire lifecycle.

- End-to-end encryption
- Secure sandbox execution
- IP audit logs & tracking
- Compliance certifications

#### Skill Execution Models

**Basic Skills Execution**
- Direct database queries for instant responses
- Pre-configured templates and workflows
- Minimal latency, maximum reliability
- Best for: Standardized tasks, common queries, simple automations

**Advanced Skills Execution**
- Secure API gateway with token verification
- Live Sandbox environment for complex processing
- Real-time monitoring and resource allocation
- Best for: Custom AI models, complex computations, proprietary algorithms

### 🛒 AI Skills Marketplace

Browse and discover AI skills across multiple categories:
- **Personal Knowledge** - Intelligent knowledge management and retrieval
- **Legal Consultation** - Automated legal document generation and advice
- **Medical Diagnosis** - Health advice and medical report interpretation
- **Content Creation** - AI-powered content generation for social media

#### 📚 Skill Types

We offer two types of AI skills to meet different needs:

**Basic Skills**
- Lightweight, ready-to-use AI capabilities
- Simple database queries and template-based responses
- Low cost, instant availability
- Perfect for common tasks and quick integrations
- Examples: Text templates, FAQ bots, simple classifiers

**Advanced Skills**
- Complex AI capabilities requiring secure API calls
- Real-time processing with live sandbox execution
- Protected IP with encrypted execution environment
- Ideal for sophisticated AI models and proprietary algorithms
- Examples: Custom LLM agents, computer vision models, predictive analytics

Features include:
- Credit-based purchasing system
- Advanced skill search and filtering
- TOP 10 rankings based on popularity
- Detailed skill documentation and examples

### 👥 Community Features

Join a thriving community of AI developers and enthusiasts:
- **Discussion Forums** - Share knowledge and get help
- **Events & Workshops** - Learn from experts and network
- **Top Contributors** - Recognition for active community members
- **Developer Program** - Monetize your AI skills

### 💰 Flexible Pricing Plans

Our pricing is designed around two skill types:

| Plan | Price | Basic Skills | Advanced Skills | Additional Features |
|------|-------|--------------|-----------------|---------------------|
| **Free** | $0 | 3 downloads/month | Pay-as-you-go only | Community support |
| **Go** | $19.90/mo | Unlimited | 3,000 credits/month | Standard email support |
| **Pro** | $199.90/mo | Unlimited | 35,000 credits/month | 24/7 priority support |
| **Ultra** | Custom | Unlimited | Custom volume | Dedicated account manager |

**Credit Usage:**
- Basic Skills: Typically 1-5 credits per use
- Advanced Skills: Typically 10-100 credits per use (depending on complexity)

---

## 🚀 Tech Stack

### Frontend
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful UI components

### Backend
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication for Next.js
- **[Prisma ORM](https://www.prisma.io/)** - Type-safe database client
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database

### Animation & UX
- **Custom ScrollAnimate** - Intersection Observer-based animations
- **CSS Variables** - Dynamic theming with light/dark mode
- **Responsive Design** - Mobile-first approach

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- PostgreSQL 14+
- npm or yarn

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/powerskills.git
cd powerskills
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

4. **Configure your environment**

Edit `.env.local`:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/powerskills"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# OAuth (optional)
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

5. **Initialize database**
```bash
npx prisma migrate dev
npx prisma generate
```

6. **Start development server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) 🎉

---

## 🏗️ Project Structure

```
ai-skills-store/
├── app/                          # Next.js App Router
│   ├── (routes)/                 # Route groups
│   ├── api/                      # API routes
│   │   ├── auth/                 # Authentication endpoints
│   │   └── ...
│   ├── community/                # Community page
│   ├── pricing/                  # Pricing page
│   ├── ranking/                  # Rankings page
│   ├── skills/                   # Skills listing page
│   ├── globals.css               # Global styles & animations
│   ├── layout.tsx                # Root layout with providers
│   └── page.tsx                  # Home page
├── components/                   # React components
│   ├── layout/                   # Layout components
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── ui/                       # shadcn/ui components
│   └── scroll-animate.tsx        # Animation component
├── lib/                          # Utility functions
│   ├── utils.ts
│   └── auth.ts
├── prisma/                       # Database schema
│   └── schema.prisma
├── public/                       # Static assets
└── types/                        # TypeScript types
```

---

## 🎨 Animation System

PowerSkills features a sophisticated animation system with multiple fade-in effects powered by Intersection Observer API.

### Available Animations

| Animation | Description |
|-----------|-------------|
| `fade-up` | Fade in from bottom |
| `fade-down` | Fade in from top |
| `fade-left` | Fade in from left |
| `fade-right` | Fade in from right |
| `fade-scale` | Scale fade in |
| `fade-blur` | Blur fade in |

### Usage Example

```tsx
import { ScrollAnimate } from "@/components/scroll-animate"

<ScrollAnimate animation="fade-up" delay={0.2}>
  <YourComponent />
</ScrollAnimate>
```

### Animation Features
- **Scroll-triggered** - Animations play when elements enter viewport
- **Stagger support** - Chain animations with delay prop
- **Customizable duration** - Adjust animation speed
- **Performance optimized** - Uses CSS transforms and opacity

---

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ Yes |
| `NEXTAUTH_URL` | Your app URL | ✅ Yes |
| `NEXTAUTH_SECRET` | Random secret for JWT | ✅ Yes |
| `GITHUB_CLIENT_ID` | GitHub OAuth App ID | ❌ No |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth App Secret | ❌ No |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID | ❌ No |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret | ❌ No |

---

## 🧪 Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack

# Building
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript checks
```

### Database Commands

```bash
# Migrations
npx prisma migrate dev      # Create and apply migration
npx prisma migrate deploy   # Deploy migrations to production

# Client
npx prisma generate         # Generate Prisma client
npx prisma studio           # Open Prisma Studio GUI

# Seeding
npx prisma db seed          # Seed database with sample data
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Add environment variables in project settings
4. Deploy automatically on every push

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Docker

```bash
# Build Docker image
docker build -t powerskills .

# Run container
docker run -p 3000:3000 \
  -e DATABASE_URL=postgresql://... \
  -e NEXTAUTH_SECRET=... \
  powerskills
```

### Self-Hosting

```bash
# Build application
npm run build

# Start production server
npm start
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit with clear messages**
   ```bash
   git commit -m "Add: amazing new feature"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Be respectful in discussions

### Code Style

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use semantic HTML and accessibility best practices
- Comment complex logic

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible UI components
- **[Lucide Icons](https://lucide.dev/)** - Clean and consistent iconography
- **[skills.sh](https://skills.sh/)** - Inspiration for skill rankings and marketplace design
- **[Vercel](https://vercel.com/)** - Seamless deployment and hosting
- **[Prisma](https://www.prisma.io/)** - Excellent database tooling

---

## 📞 Support & Contact

- 📚 **Documentation**: [https://docs.powerskills.store](https://docs.powerskills.store)
- 💬 **Community Forum**: [https://community.powerskills.store](https://community.powerskills.store)
- 🐦 **Twitter**: [@PowerSkills](https://twitter.com/powerskills)
- 📧 **Email**: support@powerskills.store
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/powerskills/issues)

---

<p align="center">
  <strong>Built with ❤️ by the PowerSkills Team</strong>
</p>

<p align="center">
  <a href="https://powerskills.store">powerskills.store</a>
</p>
