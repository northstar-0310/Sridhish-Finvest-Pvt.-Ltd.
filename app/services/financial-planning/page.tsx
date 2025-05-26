import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, PiggyBank, BarChart, HeartHandshake, Shield, Home, Calendar } from "lucide-react"

type PlanCardProps = {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
}

const PlanCard = ({ title, description, icon, features }: PlanCardProps) => (
  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="flex items-center space-x-2">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="flex-1 flex flex-col">
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="mt-auto">
        <h4 className="font-medium mb-2">Key Aspects:</h4>
        <ul className="space-y-1 text-sm text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
)

export default function FinancialPlanningPage() {
  const planningTypes = [
    {
      title: "Retirement Planning",
      description: "Plan your golden years with confidence and financial security.",
      icon: <PiggyBank className="h-5 w-5" />,
      features: [
        "Retirement corpus calculation",
        "Pension planning",
        "Post-retirement income strategies",
        "Tax-efficient withdrawal plans"
      ]
    },
    {
      title: "Tax Planning",
      description: "Optimize your tax liabilities while maximizing your savings.",
      icon: <BarChart className="h-5 w-5" />,
      features: [
        "Tax-saving investment options",
        "Section 80C planning",
        "Capital gains management",
        "Tax-efficient investment strategies"
      ]
    },
    {
      title: "Estate Planning",
      description: "Secure your legacy and ensure smooth wealth transfer.",
      icon: <Home className="h-5 w-5" />,
      features: [
        "Will preparation",
        "Trust setup",
        "Nomination guidance",
        "Inheritance tax planning"
      ]
    },
    {
      title: "Goal-based Planning",
      description: "Achieve your life goals with structured financial planning.",
      icon: <Target className="h-5 w-5" />,
      features: [
        "Education funding",
        "Home purchase planning",
        "Wealth creation",
        "Major life event planning"
      ]
    },
    {
      title: "Insurance Planning",
      description: "Adequate protection for you and your family's future.",
      icon: <Shield className="h-5 w-5" />,
      features: [
        "Life insurance needs analysis",
        "Health insurance planning",
        "Critical illness coverage",
        "Disability protection"
      ]
    },
    {
      title: "Investment Planning",
      description: "Grow your wealth with a disciplined investment approach.",
      icon: <BarChart className="h-5 w-5" />,
      features: [
        "Asset allocation strategy",
        "Portfolio diversification",
        "Risk assessment",
        "Performance monitoring"
      ]
    }
  ]

  const steps = [
    {
      title: "Initial Consultation",
      description: "We discuss your financial situation, goals, and risk tolerance.",
      icon: <HeartHandshake className="h-6 w-6 text-primary" />
    },
    {
      title: "Data Collection",
      description: "We gather all necessary financial information and documents.",
      icon: <Calendar className="h-6 w-6 text-primary" />
    },
    {
      title: "Analysis",
      description: "We analyze your current financial position and future needs.",
      icon: <BarChart className="h-6 w-6 text-primary" />
    },
    {
      title: "Plan Development",
      description: "We create a customized financial plan tailored to your goals.",
      icon: <Target className="h-6 w-6 text-primary" />
    },
    {
      title: "Implementation",
      description: "We help you put the plan into action with the right products.",
      icon: <PiggyBank className="h-6 w-6 text-primary" />
    },
    {
      title: "Review & Adjust",
      description: "Regular reviews to ensure your plan stays on track with life changes.",
      icon: <Shield className="h-6 w-6 text-primary" />
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
                Financial Planning
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
                Achieve your life goals with our comprehensive financial planning services.
              </p>
            </div>
          </div>
        </div>

        {/* Why Financial Planning */}
        <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Financial Planning?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A well-crafted financial plan helps you navigate life's financial challenges and opportunities with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Goal Achievement</h3>
              <p className="text-muted-foreground">Turn your dreams into achievable financial goals with a clear roadmap.</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
              <p className="text-muted-foreground">Protect yourself and your family from financial uncertainties.</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wealth Creation</h3>
              <p className="text-muted-foreground">Grow your wealth systematically with disciplined investing.</p>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Financial Planning Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A structured approach to help you achieve financial success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {steps.map((step, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  <div className="mt-4 text-sm font-medium text-primary">
                    Step {index + 1}/6
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Planning Types */}
        <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Financial Planning Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions tailored to your unique financial situation and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planningTypes.map((plan, index) => (
              <PlanCard
                key={index}
                title={plan.title}
                description={plan.description}
                icon={plan.icon}
                features={plan.features}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Financial Future?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Schedule a consultation with our financial planning experts today.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-8 transition-colors"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
