import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({ children }) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.12 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={elementRef} className={`scroll-reveal${isVisible ? ' is-visible' : ''}`}>
      {children}
    </div>
  )
}
