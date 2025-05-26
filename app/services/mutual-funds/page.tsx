import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

type FundCardProps = {
  title: string
  description: string
  href: string
  className?: string
}

const FundCard = ({ title, description, href, className = '' }: FundCardProps) => (
  <div className={`bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors ${className}`}>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button asChild variant="outline" className="group">
        <Link href={href}>
          Explore {title} Funds
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  </div>
)

export default function MutualFundsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 gradient-text">
              Mutual Funds
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our diverse range of mutual fund options to meet your financial goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <FundCard 
              title="Equity" 
              href="/services/mutual-funds/equity"
              description="Invest in stocks of companies with high growth potential. Ideal for long-term wealth creation." 
            />
            <FundCard 
              title="Debt" 
              href="/services/mutual-funds/debt"
              description="Stable returns with lower risk through fixed income securities. Ideal for conservative investors." 
            />
            <FundCard 
              title="Hybrid" 
              href="/services/mutual-funds/hybrid"
              description="Balanced mix of equity and debt instruments. Best of both worlds for moderate risk takers." 
            />
          </div>

          <div className="bg-secondary/30 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-semibold mb-4">Why Invest in Mutual Funds?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Professional Management', desc: 'Managed by expert fund managers' },
                { title: 'Diversification', desc: 'Invest across multiple securities' },
                { title: 'Affordability', desc: 'Start with small investment amounts' },
                { title: 'Liquidity', desc: 'Easily redeemable units' },
              ].map((item, index) => (
                <div key={index} className="bg-background/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/contact" className="text-base">
                Get Personalized Investment Advice
              </Link>
            </Button>
          </div>

          <div className="mt-12">
            <Link href="/services" className="text-primary hover:underline text-sm sm:text-base inline-flex items-center">
              ← Back to Services
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}