import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Providers } from "./providers"
import "./globals.css"

export const metadata: Metadata = {
  title: "PowerSkills - AI Capabilities Marketplace",
  description: "Connect AI Skills with customers, help developers monetize their expertise. Discover, purchase and integrate powerful AI capabilities.",
  keywords: ["AI", "Skills", "API", "Marketplace", "Artificial Intelligence", "Capabilities"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Providers>
          <TooltipProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}
