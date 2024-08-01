import { useEffect, useRef, useState } from 'react'

const options = { root: null, rootMargin: '0px', threshold: 0.9 }

export const useIntersectionAnimation = (duration: number = 0) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [animationTriggered, setAnimationTriggered] = useState<boolean>(false)

    const ref = useRef<HTMLDivElement>(null)

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries

        if (entry.isIntersecting && !animationTriggered) {
            setAnimationTriggered(true)

            setTimeout(() => {
                setIsVisible(true)
            }, duration)
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, options)

        if (ref.current) observer.observe(ref.current)

        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [isVisible])

    return { ref, isVisible }
}
