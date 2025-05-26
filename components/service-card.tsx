'use client'

import { useState } from 'react'
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceItem {
  title: string
  description: string
}

interface ServiceProps {
  category: string
  items: ServiceItem[]
}

export function ServiceCard({ service, index }: { service: ServiceProps; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="bg-card text-card-foreground card-hover animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
      <CardHeader>
        <CardTitle 
          className="text-xl sm:text-2xl cursor-pointer text-primary hover:underline"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {service.category}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isExpanded ? (
          <div className="space-y-4">
            {service.items.map((item) => (
              <div key={item.title} className="space-y-2">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
            <Button 
              asChild
              className="w-full mt-4"
            >
              <Link href={`/contact?service=${encodeURIComponent(service.category)}`}>
                Contact Us About {service.category}
              </Link>
            </Button>
          </div>
        ) : (
          <ul className="space-y-2">
            {service.items.map((item) => (
              <li key={item.title} className="text-sm sm:text-base">
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

