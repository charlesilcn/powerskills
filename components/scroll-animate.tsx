"use client"

import { useEffect, useRef, ReactNode } from "react"

type AnimationType = 
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right" 
  | "fade-scale" 
  | "fade-blur"
  | "slide-up"

interface ScrollAnimateProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: AnimationType
  duration?: number
  once?: boolean
}

export function ScrollAnimate({ 
  children, 
  className = "", 
  delay = 0,
  animation = "fade-up",
  duration = 0.6,
  once = true
}: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const animationClass = {
      "fade-up": "fade-in-up",
      "fade-down": "fade-in-down",
      "fade-left": "fade-in-left",
      "fade-right": "fade-in-right",
      "fade-scale": "fade-in-scale",
      "fade-blur": "fade-in-blur",
      "slide-up": "scroll-animate"
    }[animation]

    element.classList.add(animationClass)
    
    // Set custom duration if provided
    if (duration !== 0.6) {
      element.style.transitionDuration = `${duration}s`
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("is-visible")
            }, delay * 1000)
            
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            entry.target.classList.remove("is-visible")
          }
        })
      },
      { 
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px" 
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      element.classList.remove(animationClass)
    }
  }, [delay, animation, duration, once])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// Simple fade in wrapper for immediate animations
export function FadeIn({ 
  children, 
  className = "",
  delay = 0,
  direction = "up"
}: { 
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}) {
  const animationClass = {
    up: "animate-fade-in-up",
    down: "animate-fade-in-down",
    left: "animate-fade-in-left",
    right: "animate-fade-in-right"
  }[direction]

  return (
    <div 
      className={`${animationClass} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

// Stagger container for child animations
export function StaggerContainer({ 
  children, 
  className = "",
  staggerDelay = 0.1
}: { 
  children: ReactNode
  className?: string
  staggerDelay?: number
}) {
  return (
    <div className={className} data-stagger={staggerDelay}>
      {children}
    </div>
  )
}
