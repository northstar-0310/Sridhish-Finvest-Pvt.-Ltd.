"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Loader2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [service, setService] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    const serviceParam = searchParams.get("service")
    if (serviceParam) {
      setService(serviceParam)
      setMessage(
        `I'm interested in your ${serviceParam} services. Please provide me with more information about the options available.`
      )
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }
    
    setIsSubmitting(true)

    try {
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';
      
      const templateParams = {
        from_name: name,
        from_email: email,
        to_email: 'sridhifinpltd@gmail.com',
        message: message,
        service: service || 'General Inquiry',
        reply_to: email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Inquiry Sent",
        description: "Thank you for your inquiry. We'll get back to you soon!",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setService("");
    } catch (error) {
      console.error("Error submitting inquiry:", error)
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again later or contact us directly at sridhifinpltd@gmail.com",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1
            className="heading-responsive font-bold mb-6 text-left gradient-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>

          {/* 
            Use items-stretch so both cards match in height.
            Each motion.div & Card uses h-full flex flex-col.
          */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Get in Touch */}
            <motion.div
              className="flex flex-col h-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-card text-card-foreground card-hover animate-slide-up h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl font-semibold mb-4">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-6 text-sm sm:text-base text-muted-foreground">
                    We&apos;d love to hear from you. Please fill out the form or use our contact information to reach us.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="text-primary" />
                      <p className="text-sm sm:text-base">+91 612-3587939</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="text-primary" />
                      <p className="text-sm sm:text-base">+91 9304058205, +91 7903430940</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-primary" />
                      <p className="text-sm sm:text-base">sridhifinpltd@gmail.com</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-primary mt-1" />
                      <p className="text-sm sm:text-base">
                        F.No. 301, Chandan Mahal, Opposite Pillar 3
                        <br />
                        Near Ara Garden Road, Jagdeo Path
                        <br />
                        Patna, Bihar - 800014
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            {/* Send an Inquiry */}
            <motion.div
              className="flex flex-col h-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-card text-card-foreground card-hover animate-slide-up h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl font-semibold mb-4">Send an Inquiry</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                        Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 bg-background border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 bg-background border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full p-2 bg-background border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}