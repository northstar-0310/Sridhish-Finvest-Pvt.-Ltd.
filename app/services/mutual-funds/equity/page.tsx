import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, BarChart2, TrendingUp, Shield, Clock } from "lucide-react"

type FundCardProps = {
  name: string
  category: string

  returns: string
  aum: string
  url: string
}

const FundCard = ({ name, category, returns, aum, url }: FundCardProps) => (
  <div className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-colors">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground">{category}</p>
      </div>

    </div>
    
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <p className="text-xs text-muted-foreground">1Y Returns</p>
        <p className="font-medium">{returns}</p>
      </div>
      <div>
        <p className="text-xs text-muted-foreground">AUM</p>
        <p className="font-medium">{aum}</p>
      </div>
    </div>
    
    <Button asChild variant="outline" className="w-full group">
      <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
        View Details
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </Button>
  </div>
)

export default function EquityFundsPage() {
  const equityFunds: FundCardProps[] = [
    {
      name: "SBI Bluechip Fund",
      category: "Large Cap Fund",

      returns: "18.5%",
      aum: "₹42,345 Cr",
      url: "https://www.sbimf.com/mutual-fund"
    },
    {
      name: "Mirae Asset Large Cap Fund",
      category: "Large Cap Fund",

      returns: "20.1%",
      aum: "₹38,765 Cr",
      url: "https://www.miraeassetmf.co.in"
    },
    {
      name: "Axis Midcap Fund",
      category: "Mid Cap Fund",

      returns: "24.3%",
      aum: "₹28,432 Cr",
      url: "https://www.axismf.com"
    },
    {
      name: "Nippon Small Cap Fund",
      category: "Small Cap Fund",

      returns: "32.7%",
      aum: "₹35,678 Cr",
      url: "https://mf.nipponindiaim.com"
    },
    {
      name: "ICICI Prudential Value Discovery",
      category: "Value Fund",

      returns: "16.8%",
      aum: "₹31,234 Cr",
      url: "https://www.icicipruamc.com"
    },
    {
      name: "Parag Parikh Flexi Cap Fund",
      category: "Flexi Cap Fund",

      returns: "19.5%",
      aum: "₹25,678 Cr",
      url: "https://www.paragparikhfunds.com"
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/services/mutual-funds" className="text-primary hover:underline text-sm sm:text-base inline-flex items-center mb-6">
              ← Back to Mutual Funds
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 gradient-text">
              Equity Funds
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Invest in stocks of companies with high growth potential. Ideal for long-term wealth creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {equityFunds.map((fund, index) => (
              <FundCard key={index} {...fund} />
            ))}
          </div>

          <div className="bg-secondary/30 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-semibold mb-6">Why Choose Equity Funds?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background/50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-lg font-medium">High Growth Potential</h3>
                </div>
                <p className="text-muted-foreground">
                  Equity funds have historically provided higher returns compared to other asset classes over the long term, helping you build substantial wealth.
                </p>
              </div>
              
              <div className="bg-background/50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <BarChart2 className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-lg font-medium">Diversification</h3>
                </div>
                <p className="text-muted-foreground">
                  Invest across multiple companies and sectors, reducing the impact of any single stock's performance on your overall portfolio.
                </p>
              </div>
              
              <div className="bg-background/50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-lg font-medium">Professional Management</h3>
                </div>
                <p className="text-muted-foreground">
                  Your investments are managed by professional fund managers who conduct in-depth research and analysis to select the best stocks.
                </p>
              </div>
              
              <div className="bg-background/50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-lg font-medium">Long-term Wealth Creation</h3>
                </div>
                <p className="text-muted-foreground">
                  Ideal for long-term financial goals like retirement or children's education, with the power of compounding working in your favor.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Not sure which fund is right for you?</h3>
            <p className="text-muted-foreground mb-4">
              Our financial advisors can help you choose the best equity funds based on your financial goals and risk appetite.
            </p>
            <Button asChild>
              <Link href="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Personalized Advice
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
