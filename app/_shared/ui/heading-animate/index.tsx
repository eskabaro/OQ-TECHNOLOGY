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

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true)
        }, duration)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

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
