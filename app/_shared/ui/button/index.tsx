'use client'

import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

type VariantType = 'long' | 'short' | 'dark'

interface IButtonProps extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
    variant: VariantType
    withoutBg?: boolean
}

export const Button: FC<IButtonProps> = ({ children, variant, className, withoutBg, ...props }) => {
    return (
        <button
            {...props}
            className={cn(styles.button, className, styles[variant], {
                [styles['without-bg']]: withoutBg
            })}
        >
            {children}
        </button>
    )
}
