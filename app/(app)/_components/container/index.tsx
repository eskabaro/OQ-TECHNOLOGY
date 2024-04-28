'use client'

import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './Container.module.scss'

type ContainerTagType = 'section' | 'div'

interface IContainerProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
    className?: string
    as?: ContainerTagType
}

export const Container: FC<IContainerProps> = ({ children, className, as, ...props }) => {
    const Component = as || 'div'

    return (
        <Component className={cn(styles.container, className)} {...props}>
            {children}
        </Component>
    )
}
