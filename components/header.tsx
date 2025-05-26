"use client"

import Image from "next/image"
import Link from "next/link"
import { NavMenu } from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Container centers content and adds horizontal padding */}
      <div className="max-w-7xl mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">
        {/* Logo and company name on the left */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Sridhish Finvest Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight">Sridhish Finvest</span>
            <span className="text-xs text-muted-foreground -mt-1">Wealth Managers</span>
          </div>
        </Link>

        {/* This pushes nav items & toggle to the far right */}
        <div className="ml-auto flex items-center space-x-4">
          <NavMenu />
        </div>
      </div>
    </header>
  )
}