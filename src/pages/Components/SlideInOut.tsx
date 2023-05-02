import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const SlideInOut = ({ children, direction, duration }: any) => {
  const containerRef = useRef<any>(null)

  useEffect(() => {
    const container = containerRef.current
    const child = container.firstChild
    const distance = direction === 'left' ? -100 : 100

    gsap.set(child, { x: distance })

    const tl = gsap.timeline({ defaults: { duration: duration } })
    tl.to(child, { x: 0 })
      .fromTo(container, { opacity: 0 }, { opacity: 1 })
      .to(child, { x: -distance })
      .fromTo(container, { opacity: 1 }, { opacity: 0 })

    return () => tl.kill()
  }, [])

  return <div ref={containerRef}>{children}</div>
}

export default SlideInOut
