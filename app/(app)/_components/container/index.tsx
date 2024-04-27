'use client'

import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './Container.module.scss'

interface IContainerProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    className?: string
}

export const Container: FC<IContainerProps> = ({ children, className, ...props }) => {
    return (
        <div className={cn(styles.container, className)} {...props}>
            {children}
        </div>
    )
}
