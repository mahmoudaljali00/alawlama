"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimateProps {
  children: React.ReactNode
  className?: string
}

export default function ScrollAnimate({ children, className = "" }: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? "animate-fade-in-scale" : "opacity-0"} transition-all duration-700`}
    >
      {children}
    </div>
  )
}
