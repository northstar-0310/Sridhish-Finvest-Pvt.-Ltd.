import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LineChart, BarChart2, Smartphone, Shield, Zap, TrendingUp } from "lucide-react"

type FeatureCardProps = {
  title: string
  description: string
  icon: React.ReactNode
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
)


export default function StockBrokingPage() {
  const features = [
    {
      title: "Advanced Trading Platforms",
      description: "Access our powerful web and mobile trading platforms with advanced charting tools and real-time data.",
      icon: <Smartphone className="h-8 w-8" />
    },
    {
      title: "Research & Analysis",
      description: "Get access to in-depth research reports, technical analysis, and expert recommendations.",
      icon: <BarChart2 className="h-8 w-8" />
    },
    {
      title: "Low Brokerage",
      description: "Competitive brokerage rates to help you maximize your returns on every trade.",
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: "Secure & Safe",
      description: "Your investments are protected with bank-level security and insurance coverage.",
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: "Quick Settlements",
      description: "Fast and hassle-free fund transfers with quick settlement of trades.",
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: "Demat Services",
      description: "Safe and secure demat account for holding your securities in electronic form.",
      icon: <LineChart className="h-8 w-8" />
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Stock Broking Services
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
                Trade with confidence using our advanced trading platforms and expert research.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-8 transition-colors"
                >
                  Open Demat Account
                </a>
                <a
                  href="#account-types"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-foreground bg-card hover:bg-muted md:py-4 md:text-lg md:px-8 transition-colors"
                >
                  View Account Types
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Stock Broking Services?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide a comprehensive suite of trading and investment solutions to meet your financial goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>



        {/* CTA Section */}
        <div className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Trading?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Open your demat and trading account in just 5 minutes and get started on your investment journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-8 transition-colors"
              >
                Open an Account
              </a>
              <a
                href="tel:+916123587939"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:py-4 md:text-lg md:px-8 transition-colors"
              >
                Call Us: +91 612-3587939
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
