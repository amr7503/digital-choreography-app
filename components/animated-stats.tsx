"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface Stat {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

const stats: Stat[] = [
  { value: 99.9, label: "Uptime Guarantee", suffix: "%" },
  { value: 500, label: "Enterprise Clients", suffix: "+" },
  { value: 50, label: "Countries Worldwide", suffix: "+" },
  { value: 24, label: "Support Available", suffix: "/7" },
]

function AnimatedCounter({ value, suffix = "", prefix = "" }: Stat) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const duration = 2000
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = startValue + (value - startValue) * easeOutQuart

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent mb-2">
        {prefix}
        {count.toFixed(value % 1 !== 0 ? 1 : 0)}
        {suffix}
      </div>
      <div className="text-muted-foreground text-sm md:text-base">{stats.find((s) => s.value === value)?.label}</div>
    </div>
  )
}

export function AnimatedStats() {
  return (
    <section className="py-20 px-4 relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground text-lg text-balance">
            Our platform powers the world's most innovative companies
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedCounter {...stat} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
