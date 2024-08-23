import { useEffect, useRef, useState } from 'react'

const defaultOptions = {
  root: null,
  rootMargin: '20px',
  threshold: 1.0
}

const UseNearScreen = (options = defaultOptions) => {
  const containerRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  const callbackFunction = entries => {
    const [entry] = entries
    setIsInView(entry.isIntersecting)
  }
  useEffect(() => {
    const observer = new window.IntersectionObserver(callbackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef])
  return { isInView, containerRef }
}

export default UseNearScreen
