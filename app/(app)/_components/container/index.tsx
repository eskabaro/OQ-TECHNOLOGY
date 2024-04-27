'use client'

import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import styles from './Container.module.scss'

export const Container: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ children, ...props }) => {
    return (
        <div className={styles.container} {...props}>
            {children}
        </div>
    )
}
