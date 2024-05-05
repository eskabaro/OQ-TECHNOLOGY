'use client'

import { FC, HTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react'
import styles from './HeadingAnimation.module.scss'
import cn from 'classnames'

interface IHeadingAnimateProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    duration?: number
    className?: string
}

const options = { root: null, rootMargin: '0px', threshold: 0.9 }

export const HeadingAnimate: FC<IHeadingAnimateProps> = ({ children, duration = 0, className, ...props }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [animationTriggered, setAnimationTriggered] = useState<boolean>(false)

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

    return (
        <div
            ref={ref}
            className={cn(styles.wrapper, className, {
                [styles.active]: isVisible
            })}
            {...props}
        >
            {children}
        </div>
    )
}
