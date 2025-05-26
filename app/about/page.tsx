"use client"

import { ArrowRight, BarChart, Shield, TrendingUp, Users, CheckCircle, Target, Handshake, Award } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ServiceCategory = {
  category: string
  items: string[]
  icon: JSX.Element
  link: string
}

const services: ServiceCategory[] = [
  {
    category: "Insurance",
    items: ["Health Insurance", "Life Insurance", "General Insurance"],
    icon: <Shield className="h-5 w-5" />,
    link: "/services/insurance"
  },
  {
    category: "Financial Planning",
    items: ["Goal Planning", "Tax Planning", "Retirement Planning", "Estate Planning"],
    icon: <Target className="h-5 w-5" />,
    link: "/services/financial-planning"
  },
  {
    category: "Stock Broking",
    items: ["Equity Trading", "Derivatives", "Portfolio Management"],
    icon: <BarChart className="h-5 w-5" />,
    link: "/services/stock-broking"
  },
  {
    category: "Mutual Funds",
    items: ["Equity Funds", "Debt Funds", "Hybrid Funds", "SIP Planning"],
    icon: <TrendingUp className="h-5 w-5" />,
    link: "/services/mutual-funds"
  },
]

const values = [
  {
    title: "Integrity",
    description: "We conduct our business with the highest ethical standards and transparency.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />
  },
  {
    title: "Excellence",
    description: "We strive for excellence in all aspects of our services and client interactions.",
    icon: <Award className="h-6 w-6 text-primary" />
  },
  {
    title: "Client-Centric",
    description: "Your financial goals and success are at the heart of everything we do.",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Trust",
    description: "We build long-term relationships based on trust, reliability, and mutual respect.",
    icon: <Handshake className="h-6 w-6 text-primary" />
  }
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 to-primary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                About <span className="gradient-text">Sridhish Finvest</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Your trusted partner in financial planning and wealth management
              </motion.p>
            </div>
          </div>
        </section>

        {/* Portfolio Size Card */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-primary/10 border border-primary/20 rounded-xl flex flex-col items-center justify-center py-8 shadow-sm">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">₹60 Crore+</div>
              <div className="text-lg text-muted-foreground">Total Assets Managed for Our Clients</div>
            </div>
          </div>
        </section>

        {/* Partners Banner */}
        <section className="py-6">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-lg font-semibold text-muted-foreground mb-4 text-center tracking-wide">Some of our partners</h3>
            <div className="flex flex-wrap items-center justify-center gap-8 bg-card/50 rounded-lg py-6 shadow-sm">
              <img src="/partners/tata-aig.png" alt="Tata AIG" className="h-12 object-contain" style={{maxWidth:'120px'}} />
              <img src="/partners/oriental-insurance.png" alt="Oriental Insurance" className="h-12 object-contain" style={{maxWidth:'180px'}} />
              <img src="/partners/niva-bupa.png" alt="Niva Bupa" className="h-12 object-contain" style={{maxWidth:'180px'}} />
              <img src="/partners/lic.png" alt="LIC" className="h-12 object-contain" style={{maxWidth:'120px'}} />
            </div>
            <div className="text-center text-xs text-muted-foreground mt-2">Our trusted partners & mutual fund houses</div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-card p-8 rounded-lg shadow-sm border"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To empower individuals and businesses to achieve financial freedom through expert advice, 
                  innovative solutions, and personalized service. We are committed to helping our clients 
                  navigate the complexities of financial planning with clarity and confidence.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-card p-8 rounded-lg shadow-sm border"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  To be the most trusted financial partner for individuals and businesses, known for our 
                  integrity, expertise, and commitment to client success. We envision a future where 
                  everyone has access to the knowledge and tools needed to achieve their financial aspirations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do at Sridhish Finvest
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16 bg-background">
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
                Comprehensive financial solutions tailored to your unique needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.category}
                  className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{service.category}</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Button variant="link" className="px-0" asChild>
                      <Link href={service.link} className="flex items-center">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to start your financial journey?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Our team of experts is here to help you achieve your financial goals. Schedule a consultation today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">
                    Explore Services
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