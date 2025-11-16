"use client"

import { useEffect, useState } from "react"

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: "⚙️",
      title: "Technology",
      description: "Cutting-edge innovations and digital solutions for modern challenges",
      delay: 0.2,
    },
    {
      icon: "🛍️",
      title: "Commerce",
      description: "Seamless shopping experience with secure transactions and fast delivery",
      delay: 0.4,
    },
    {
      icon: "✨",
      title: "Perfumery",
      description: "Luxury fragrances curated from the finest ingredients worldwide",
      delay: 0.6,
    },
  ]

  return (
    <section className="relative z-10 px-6 py-20 md:px-12 md:py-32 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold text-brand-text mb-4"
          style={{
            animation: isVisible ? "slideInUp 0.8s ease-out 0.1s both" : "none",
          }}
        >
          Our <span className="text-brand-gold">Three Pillars</span>
        </h2>
        <p
          className="text-brand-text/70 max-w-2xl mx-auto"
          style={{
            animation: isVisible ? "slideInUp 0.8s ease-out 0.2s both" : "none",
          }}
        >
          Alawlama brings together technology, commerce, and perfumery under one unified vision of excellence
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div
            key={i}
            className="group p-8 rounded-lg border border-brand-gold/20 bg-brand-gold/5 hover:bg-brand-gold/10 transition-all duration-300 hover:border-brand-gold/50 hover:shadow-lg hover:shadow-brand-gold/20"
            style={{
              animation: isVisible ? `slideInUp 0.8s ease-out ${feature.delay}s both` : "none",
            }}
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
            <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-gold transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-brand-text/70 group-hover:text-brand-text/90 transition-colors duration-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
