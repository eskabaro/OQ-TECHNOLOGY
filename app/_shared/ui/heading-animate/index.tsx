'use client'

import { FC, HTMLAttributes, PropsWithChildren } from 'react'

import { cn } from '../../lib/classnames'
import { useIntersectionAnimation } from '../../lib/hooks/useIntersectionAnimation'
import styles from './HeadingAnimation.module.scss'

interface IHeadingAnimateProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    duration?: number
    className?: string
}

export const HeadingAnimate: FC<IHeadingAnimateProps> = ({ children, duration = 0, className, ...props }) => {
    const { ref, isVisible } = useIntersectionAnimation(duration)

    return (
        <div ref={ref} className={cn(styles.wrapper, className, isVisible && styles.active)} {...props}>
            {children}
        </div>
    )
}
