import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, TrendingUp, Shield, Scale, BarChart2 } from "lucide-react"

type FundCardProps = {
  name: string
  equityAllocation: string
  debtAllocation: string

  returns: string
  aum: string
  url: string
}

const FundCard = ({ name, equityAllocation, debtAllocation, returns, aum, url }: FundCardProps) => (
  <div className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-colors">
    <div className="mb-4">
      <h3 className="font-semibold text-lg mb-2">{name}</h3>
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm">
          <span className="text-muted-foreground">Equity: </span>
          <span className="font-medium">{equityAllocation}</span>
        </div>
        <div className="text-sm">
          <span className="text-muted-foreground">Debt: </span>
          <span className="font-medium">{debtAllocation}</span>
        </div>

      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div 
          className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full" 
          style={{ width: equityAllocation }}
        ></div>
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

export default function HybridFundsPage() {
  const hybridFunds: FundCardProps[] = [
    {
      name: "ICICI Prudential Equity & Debt Fund",
      equityAllocation: "65%",
      debtAllocation: "35%",

      returns: "14.2%",
      aum: "₹28,765 Cr",
      url: "https://www.icicipruamc.com"
    },
    {
      name: "HDFC Hybrid Equity Fund",
      equityAllocation: "70%",
      debtAllocation: "30%",

      returns: "15.7%",
      aum: "₹32,456 Cr",
      url: "https://www.hdfcfund.com"
    },
    {
      name: "SBI Equity Hybrid Fund",
      equityAllocation: "65%",
      debtAllocation: "35%",

      returns: "13.9%",
      aum: "₹25,678 Cr",
      url: "https://www.sbimf.com"
    },
    {
      name: "Kotak Equity Hybrid Fund",
      equityAllocation: "75%",
      debtAllocation: "25%",

      returns: "16.2%",
      aum: "₹18,765 Cr",
      url: "https://www.kotakmf.com"
    },
    {
      name: "Axis Conservative Hybrid Fund",
      equityAllocation: "25%",
      debtAllocation: "75%",
      returns: "9.5%",
      aum: "₹12,345 Cr",
      url: "https://www.axismf.com"
    },
    {
      name: "Mirae Asset Hybrid Equity Fund",
      equityAllocation: "65%",
      debtAllocation: "35%",

      returns: "15.8%",
      aum: "₹15,678 Cr",
      url: "https://www.miraeassetmf.co.in"
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
              Hybrid Funds
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A balanced mix of equity and debt instruments. Best of both worlds for moderate risk takers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {hybridFunds.map((fund, index) => (
              <FundCard key={index} {...fund} />
            ))}
          </div>

          <div className="bg-secondary/30 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-semibold mb-6">Why Choose Hybrid Funds?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background/50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Scale className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-lg font-medium">Balanced Approach</h3>
                </div>
                <p className="text-muted-foreground">
                  Hybrid funds provide a balanced approach by investing in both equity and debt, offering a middle ground between risk and return.
                </p>
              </div>
              
              <div className="bg-background/50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-lg font-medium">Growth with Stability</h3>
                </div>
                <p className="text-muted-foreground">
                  The equity component aims for capital appreciation, while the debt portion provides stability to the portfolio.
                </p>
              </div>
              
              <div className="bg-background/50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-lg font-medium">Risk Management</h3>
                </div>
                <p className="text-muted-foreground">
                  The debt allocation helps cushion against market volatility, making these funds less risky than pure equity funds.
                </p>
              </div>
              
              <div className="bg-background/50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <BarChart2 className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-lg font-medium">Tax Efficiency</h3>
                </div>
                <p className="text-muted-foreground">
                  Hybrid funds can be more tax-efficient than traditional fixed deposits, especially for investors in higher tax brackets.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Not sure which hybrid fund suits you best?</h3>
            <p className="text-muted-foreground mb-4">
              Our financial advisors can help you choose the right hybrid funds based on your financial goals and risk tolerance.
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
