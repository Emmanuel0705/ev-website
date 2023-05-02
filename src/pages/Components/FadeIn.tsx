import { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function FadeIn({ children, vars, toggle }: any) {
  const el = useRef<any>()

  const tl = useRef<any>()

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     Animation.current = gsap.from(el.current.children, {
  //       opacity: 0.1,
  //       ...vars
  //     })
  //   })
  //   return () => ctx.revert()
  // }, [toggle])

  //   useEffect(() => {
  //     tl.current = gsap.timeline({
  //       paused: true
  //     })

  //     tl.current.to(el.current.children, {
  //       top: 4,
  //       duration: 5
  //     })
  //   }, [])
  //   useEffect(() => {
  //     console.log({ toggle })
  //     toggle ? tl.current.play() : tl.current.reverse()
  //   }, [toggle])

  return <span ref={el}>{children}</span>
}
