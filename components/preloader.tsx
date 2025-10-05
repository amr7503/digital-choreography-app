"use client"

import { useEffect, useState } from "react"

export function Preloader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-accent animate-spin"
            style={{ animationDuration: "1s" }}
          ></div>
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <div className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
            Digital Choreography
          </div>
          <div className="text-sm text-muted-foreground">{progress}%</div>
        </div>
      </div>
    </div>
  )
}
