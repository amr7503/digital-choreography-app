"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Globe, Lock, TrendingUp, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Military-grade encryption and compliance with global security standards",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process transactions in milliseconds",
    className: "md:col-span-1",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Support for 150+ currencies",
    className: "md:col-span-1",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data stays yours, always",
    className: "md:col-span-1",
  },
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    description: "Insights that drive growth",
    className: "md:col-span-1",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built for modern teams",
    className: "md:col-span-2",
  },
]

export function BentoGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Everything You Need</h2>
          <p className="text-muted-foreground text-lg text-balance">
            Powerful features designed for modern financial operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`${feature.className} group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border p-6 hover:border-purple-500/50 transition-all duration-300`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 h-full flex flex-col">
                <feature.icon className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
