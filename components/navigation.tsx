"use client"

import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Digital Choreography
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Products
              </a>
              <a href="#analytics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Analytics
              </a>
            </div>
          </div>
          <Button className="ripple-button relative overflow-hidden">Get Started</Button>
        </div>
      </div>
    </nav>
  )
}
