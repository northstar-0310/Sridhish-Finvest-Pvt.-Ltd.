"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer: 3 columns on md+, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm text-muted-foreground">
              We provide strategic financial solutions to help you achieve your investment goals and secure your financial future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/services/mutual-funds" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></span>
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link href="/services/insurance" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></span>
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/services/financial-planning" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></span>
                  Financial Planning
                </Link>
              </li>
              <li>
                <Link href="/services/stock-broking" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></span>
                  Stock Broking
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-4 w-4 mt-0.5 text-primary mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">+91 612-3587939</p>
                  <p className="text-sm text-muted-foreground">+91 9304058205, +91 7903430940</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-4 w-4 mt-0.5 text-primary mr-3 flex-shrink-0" />
                <a href="mailto:sridhifinpltd@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  sridhifinpltd@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mt-0.5 text-primary mr-3 flex-shrink-0" />
                <address className="text-sm text-muted-foreground not-italic">
                  F.No. 301, Chandan Mahal, Opposite Pillar 3
                  <br />
                  Near Ara Garden Road, Jagdeo Path
                  <br />
                  Patna, Bihar - 800014
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer: centered note */}
        <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sridhish Finvest. All rights reserved.</p>
          <p className="mt-1">Registered with SEBI, AMFI, and other regulatory bodies</p>
        </div>
      </div>
    </footer>
  )
}