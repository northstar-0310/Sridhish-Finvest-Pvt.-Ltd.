import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Shield, TrendingUp, Clock, Lock } from "lucide-react"

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

export default function DebtFundsPage() {
  const debtFunds: FundCardProps[] = [
    {
      name: "SBI Banking & PSU Fund",
      category: "Banking & PSU Fund",

      returns: "7.2%",
      aum: "₹18,765 Cr",
      url: "https://www.sbimf.com/mutual-fund"
    },
    {
      name: "ICICI Prudential Corporate Bond Fund",
      category: "Corporate Bond Fund",

      returns: "6.9%",
      aum: "₹32,456 Cr",
      url: "https://www.icicipruamc.com"
    },
    {
      name: "Nippon India Low Duration Fund",
      category: "Low Duration Fund",

      returns: "6.5%",
      aum: "₹12,345 Cr",
      url: "https://mf.nipponindiaim.com"
    },
    {
      name: "HDFC Corporate Bond Fund",
      category: "Corporate Bond Fund",

      returns: "7.1%",
      aum: "₹28,765 Cr",
      url: "https://www.hdfcfund.com"
    },
    {
      name: "Axis Strategic Bond Fund",
      category: "Dynamic Bond Fund",

      returns: "8.2%",
      aum: "₹15,678 Cr",
      url: "https://www.axismf.com"
    },
    {
      name: "Franklin India Dynamic Accrual Fund",
      category: "Dynamic Bond Fund",

      returns: "7.8%",
      aum: "₹9,876 Cr",
      url: "https://www.franklintempletonindia.com"
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
              Debt Funds
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Stable returns with lower risk through fixed income securities. Ideal for conservative investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {debtFunds.map((fund, index) => (
              <FundCard key={index} {...fund} />
            ))}
          </div>

          <div className="bg-secondary/30 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-semibold mb-6">Why Choose Debt Funds?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background/50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-lg font-medium">Lower Risk</h3>
                </div>
                <p className="text-muted-foreground">
                  Debt funds invest in fixed income securities like government bonds and corporate bonds, which are generally less volatile than stocks.
                </p>
              </div>
              
              <div className="bg-background/50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Lock className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-lg font-medium">Stable Returns</h3>
                </div>
                <p className="text-muted-foreground">
                  These funds aim to provide regular income with relatively stable returns, making them ideal for risk-averse investors.
                </p>
              </div>
              
              <div className="bg-background/50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-lg font-medium">Better than Traditional Options</h3>
                </div>
                <p className="text-muted-foreground">
                  Debt funds typically offer higher returns than traditional fixed deposits and savings accounts, with better tax efficiency.
                </p>
              </div>
              
              <div className="bg-background/50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-lg font-medium">Liquidity</h3>
                </div>
                <p className="text-muted-foreground">
                  Most debt funds offer high liquidity with no lock-in period, allowing you to redeem your investments when needed.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Need help choosing the right debt fund?</h3>
            <p className="text-muted-foreground mb-4">
              Our financial advisors can help you select the most suitable debt funds based on your investment horizon and risk tolerance.
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
