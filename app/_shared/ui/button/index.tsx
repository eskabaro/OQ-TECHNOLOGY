'use client'

import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import { cn } from '../../lib/classnames'
import styles from './Button.module.scss'

type VariantType = 'long' | 'short' | 'dark'

interface IButtonProps extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
    variant: VariantType
    withoutBg?: boolean
    type?: 'submit' | 'reset' | 'button' | undefined
}

export const Button: FC<IButtonProps> = ({ children, variant, className, withoutBg, type, ...props }) => {
    return (
        <button {...props} type={type} className={cn(styles.button, className, styles[variant], withoutBg && styles['without-bg'])}>
            {children}
        </button>
    )
}
