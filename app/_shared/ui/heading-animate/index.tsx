'use client'

import { FC, HTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react'
import styles from './HeadingAnimation.module.scss'
import cn from 'classnames'

interface IHeadingAnimateProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    duration?: number
    className?: string
    isObserver?: boolean
}

const options = { root: null, rootMargin: '0px', threshold: 0.9 }

export const HeadingAnimate: FC<IHeadingAnimateProps> = ({ children, duration = 0, className, isObserver, ...props }) => {
    const ref = useRef(null)

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [classAttached, setClassAttached] = useState<boolean>(false)

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            if (entries[0].isIntersecting) {
                observer.disconnect()

                timeoutId = setTimeout(() => {
                    setIsVisible(true)
                }, duration)
            }
        }

        const observer = new IntersectionObserver(observerCallback, options)

        if (isObserver && ref.current) {
            observer.observe(ref.current)
        } else {
            timeoutId = setTimeout(() => {
                setIsVisible(true)
            }, duration)
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current)
            if (timeoutId) clearTimeout(timeoutId)
        }
    }, [isObserver])

    useEffect(() => {
        if (isVisible && !classAttached) {
            setClassAttached(true)
        }
    }, [isVisible])

    return (
        <div
            ref={ref}
            className={cn(styles.wrapper, className, {
                [styles.active]: isVisible && classAttached
            })}
            {...props}
        >
            {children}
        </div>
    )
}
