"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-teal-500/20 border border-purple-500/30 p-12"
        >
          <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
          <div className="relative z-10 text-center">
            <Mail className="w-16 h-16 mx-auto mb-6 text-purple-500" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Stay in the Loop</h2>
            <p className="text-muted-foreground text-lg mb-8 text-balance">
              Get the latest updates, insights, and exclusive offers delivered to your inbox
            </p>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-background/50 backdrop-blur-sm border-border"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 ripple-button"
                  >
                    Subscribe
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center justify-center gap-3 text-teal-500"
                >
                  <CheckCircle2 className="w-8 h-8" />
                  <span className="text-xl font-semibold">Successfully subscribed!</span>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
