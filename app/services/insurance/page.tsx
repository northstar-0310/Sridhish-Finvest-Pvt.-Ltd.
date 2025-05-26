import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, HeartPulse, Home, Car, Plane, Briefcase, Search, BarChart, Users, CheckCircle } from "lucide-react"

type ServiceCardProps = {
  title: string
  description: string
  icon: React.ReactNode
  benefits: string[]
}

const ServiceCard = ({ title, description, icon, benefits }: ServiceCardProps) => (
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
        <h4 className="font-medium mb-2">How We Help:</h4>
        <ul className="space-y-1 text-sm text-muted-foreground">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
)

export default function InsurancePage() {
  const ourServices = [
    {
      title: "Insurance Advisory",
      description: "Expert guidance to help you understand different insurance products and choose the best coverage for your needs.",
      icon: <Search className="h-5 w-5" />,
      benefits: [
        "Personalized insurance needs assessment",
        "Comparison of multiple insurance providers",
        "Unbiased recommendations based on your requirements",
        "Explanation of policy terms and conditions"
      ]
    },
    {
      title: "Policy Comparison",
      description: "We compare policies from top insurance companies to find you the best coverage at competitive rates.",
      icon: <BarChart className="h-5 w-5" />,
      benefits: [
        "Side-by-side comparison of features",
        "Premium cost analysis",
        "Coverage benefits evaluation",
        "Claim settlement ratio consideration"
      ]
    },
    {
      title: "Claims Assistance",
      description: "We guide you through the claims process to ensure smooth and timely settlements.",
      icon: <Shield className="h-5 w-5" />,
      benefits: [
        "Documentation support",
        "Follow-up with insurance companies",
        "Claim rejection resolution",
        "End-to-end claims assistance"
      ]
    },
    {
      title: "Policy Management",
      description: "We help you manage your insurance portfolio efficiently with timely renewals and updates.",
      icon: <Briefcase className="h-5 w-5" />,
      benefits: [
        "Policy renewal reminders",
        "Coverage review and updates",
        "Portfolio optimization",
        "Document storage and management"
      ]
    },
    {
      title: "Corporate Solutions",
      description: "Comprehensive insurance solutions for businesses of all sizes.",
      icon: <Users className="h-5 w-5" />,
      benefits: [
        "Group health insurance",
        "Professional indemnity",
        "Property and liability coverage",
        "Employee benefits solutions"
      ]
    },
    {
      title: "Specialized Coverage",
      description: "Tailored insurance solutions for unique and specialized needs.",
      icon: <HeartPulse className="h-5 w-5" />,
      benefits: [
        "Critical illness coverage",
        "Travel insurance",
        "High-value asset protection",
        "Special risk coverage"
      ]
    }
  ]

  const insuranceTypes = [
    {
      title: "Life Insurance",
      description: "We help you find the right life insurance policy to secure your family's financial future.",
      icon: <HeartPulse className="h-5 w-5" />,
      features: [
        "Term insurance plans",
        "Endowment policies",
        "ULIPs (Unit Linked Insurance Plans)",
        "Retirement solutions"
      ]
    },
    {
      title: "Health Insurance",
      description: "Compare and choose the best health insurance plans for you and your family.",
      icon: <Shield className="h-5 w-5" />,
      features: [
        "Individual and family floater plans",
        "Senior citizen health insurance",
        "Critical illness coverage",
        "Top-up and super top-up plans"
      ]
    },
    {
      title: "Motor Insurance",
      description: "Get the right motor insurance coverage for your car or two-wheeler.",
      icon: <Car className="h-5 w-5" />,
      features: [
        "Comprehensive and third-party coverage",
        "Zero depreciation add-ons",
        "Engine protection",
        "24/7 roadside assistance"
      ]
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
                Insurance Brokerage Services
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
                Your trusted partner in finding the right insurance solutions from top providers.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us as Your Insurance Broker?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work with multiple insurance providers to bring you the best coverage options at competitive rates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unbiased Advice</h3>
              <p className="text-muted-foreground">We're not tied to any single insurer, so our recommendations are always in your best interest.</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wide Choice</h3>
              <p className="text-muted-foreground">Access to policies from multiple leading insurance companies.</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
              <p className="text-muted-foreground">Dedicated support throughout your insurance journey.</p>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Insurance Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive insurance solutions tailored to your specific needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ourServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  benefits={service.benefits}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Insurance Types */}
        <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Insurance Products We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide access to a wide range of insurance products from leading providers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {insuranceTypes.map((insurance, index) => (
              <ServiceCard
                key={`type-${index}`}
                title={insurance.title}
                description={insurance.description}
                icon={insurance.icon}
                benefits={insurance.features}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Help with Insurance?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Our insurance experts are here to help you find the perfect coverage from our network of trusted providers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-8 transition-colors"
              >
                Get a Free Quote
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
