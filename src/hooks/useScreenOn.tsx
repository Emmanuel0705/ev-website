import { useState, useEffect } from 'react'

export default function useOnScreen(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when element is in viewport
        setIntersecting(entry.isIntersecting)
      },
      {
        // Optional: set a threshold for intersection
        threshold: 0.5
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref])

  return isIntersecting
}
