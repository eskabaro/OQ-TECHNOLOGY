'use client'

import { FC, HTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react'
import styles from './HeadingAnimation.module.scss'
import cn from 'classnames'

interface IHeadingAnimateProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    duration?: number
    className?: string
}

export const HeadingAnimate: FC<IHeadingAnimateProps> = ({ children, duration = 0, className, ...props }) => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const options = { root: null, rootMargin: '0px', threshold: 0.9 }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries

            setTimeout(() => {
                setIsVisible(entry.isIntersecting)
            }, duration)
        }, options)

        if (ref.current) observer.observe(ref.current)

        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [ref, options])

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
