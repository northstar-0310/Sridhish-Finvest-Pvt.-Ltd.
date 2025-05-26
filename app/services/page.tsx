import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, HeartPulse, BarChart, Users, CheckCircle, ArrowRight, PiggyBank, TrendingUp, FileText, Landmark, Target, HandCoins, Scale, Briefcase } from "lucide-react"

const services = [
  {
    title: "Mutual Funds",
    description: "Expert guidance to help you build wealth through professionally managed mutual fund investments.",
    icon: <TrendingUp className="h-5 w-5" />,
    features: [
      "Diversified portfolio management",
      "Systematic Investment Plans (SIPs)",
      "Tax-saving ELSS funds",
      "Regular portfolio reviews"
    ],
    link: "/services/mutual-funds"
  },
  {
    title: "Insurance",
    description: "Comprehensive insurance solutions to protect what matters most to you and your family.",
    icon: <Shield className="h-5 w-5" />,
    features: [
      "Life insurance plans",
      "Health insurance",
      "Motor insurance",
      "Travel insurance"
    ],
    link: "/services/insurance"
  },
  {
    title: "Financial Planning",
    description: "Personalized financial roadmaps to help you achieve your life goals with confidence.",
    icon: <Target className="h-5 w-5" />,
    features: [
      "Retirement planning",
      "Wealth creation",
      "Tax planning",
      "Estate planning"
    ],
    link: "/services/financial-planning"
  },
  {
    title: "Stock Broking",
    description: "Access to equity markets with expert research and trading platforms.",
    icon: <BarChart className="h-5 w-5" />,
    features: [
      "Equity investments",
      "IPO applications",
      "Research reports",
      "Portfolio tracking"
    ],
    link: "/services/stock-broking"
  },
  {
    title: "Tax Planning",
    description: "Strategic approaches to minimize tax liabilities while maximizing returns.",
    icon: <FileText className="h-5 w-5" />,
    features: [
      "Tax-saving investments",
      "Capital gains planning",
      "Tax-efficient withdrawals",
      "Year-round tax strategy"
    ],
    link: "/services/tax-planning"
  },
  {
    title: "Retirement Planning",
    description: "Secure your golden years with a well-structured retirement plan.",
    icon: <PiggyBank className="h-5 w-5" />,
    features: [
      "Retirement corpus planning",
      "Pension products",
      "Annuity solutions",
      "Withdrawal strategies"
    ],
    link: "/services/retirement-planning"
  }
]

const whyChooseUs = [
  {
    title: "Expert Advisors",
    description: "Our team of certified financial planners brings years of industry experience.",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Unbiased Advice",
    description: "We recommend products based on your needs, not commissions.",
    icon: <Scale className="h-6 w-6 text-primary" />
  },
  {
    title: "Comprehensive Solutions",
    description: "One-stop solution for all your financial planning needs.",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    title: "Client-First Approach",
    description: "Your financial goals are at the center of everything we do.",
    icon: <HandCoins className="h-6 w-6 text-primary" />
  }
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
                Comprehensive Financial Solutions
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert guidance for all your financial needs, from investments to insurance and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're committed to helping you achieve financial success through personalized solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive financial solutions tailored to your unique needs and goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-shadow border">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="mt-auto">
                      <h4 className="font-medium mb-2">What We Offer:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="link" className="px-0 mt-4" asChild>
                        <a href={service.link} className="flex items-center">
                          Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to take control of your financial future?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Schedule a free consultation with one of our financial experts today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book a Free Consultation
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}