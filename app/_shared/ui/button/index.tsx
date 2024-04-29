'use client'

import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

type VariantType = 'long' | 'short'

interface IButtonProps extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
    variant: VariantType
}

export const Button: FC<IButtonProps> = ({ children, variant, className, ...props }) => {
    return (
        <button {...props} className={cn(styles.button, className, styles[variant])}>
            {children}
        </button>
    )
}
