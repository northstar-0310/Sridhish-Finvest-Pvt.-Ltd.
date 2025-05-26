"use client"

import Link from "next/link"
import { ArrowRight, BarChart, Shield, TrendingUp, Users, CheckCircle, PiggyBank, Target, HandCoins, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Carousel from "@/components/Carousel"

const services = [
  {
    title: "Investment Planning",
    description: "Strategic investment solutions to help you achieve your financial goals",
    icon: <TrendingUp className="h-5 w-5" />,
    link: "/services/mutual-funds"
  },
  {
    title: "Insurance",
    description: "Comprehensive insurance solutions to protect what matters most",
    icon: <Shield className="h-5 w-5" />,
    link: "/services/insurance"
  },
  {
    title: "Stock Broking",
    description: "Expert stock broking services for informed investment decisions",
    icon: <BarChart className="h-5 w-5" />,
    link: "/services/stock-broking"
  },
  {
    title: "Financial Planning",
    description: "Personalized roadmaps for your financial success",
    icon: <Target className="h-5 w-5" />,
    link: "/services/financial-planning"
  },
  {
    title: "Retirement Planning",
    description: "Secure your future with our retirement solutions",
    icon: <PiggyBank className="h-5 w-5" />,
    link: "/services/retirement-planning"
  },
  {
    title: "Tax Planning",
    description: "Strategies to optimize your tax efficiency",
    icon: <Briefcase className="h-5 w-5" />,
    link: "/services/tax-planning"
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
    icon: <CheckCircle className="h-6 w-6 text-primary" />
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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Plan Your Financial <span className="gradient-text">Future</span> Today
                </motion.h1>
                <motion.p 
                  className="text-xl text-muted-foreground max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Expert guidance for your investments, insurance, and financial planning needs. Secure your tomorrow with Sridhish Finvest.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/services">
                      Our Services
                    </Link>
                  </Button>
                </motion.div>
              </div>
              <motion.div 
                className="relative hidden lg:block w-full h-[400px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Carousel
                  images={["/fp1.jpg", "/fp11.jpg", "/logo.png"]}
                  interval={5000}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Sridhish Finvest?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're committed to helping you achieve financial success through personalized solutions.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive financial solutions tailored to your unique needs and goals.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow border">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <Button variant="link" className="px-0" asChild>
                        <Link href={service.link} className="flex items-center">
                          Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to take control of your financial future?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Schedule a free consultation with one of our financial experts today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book a Free Consultation
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}