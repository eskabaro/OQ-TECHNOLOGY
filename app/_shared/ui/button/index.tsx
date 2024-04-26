'use client'

import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import cn from 'classnames'

type VariantType = 'long' | 'short'

interface IButtonProps extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
    variant: VariantType
}

export const Button: FC<IButtonProps> = ({ children, variant, ...props }) => {
    return (
        <button
            {...props}
            className={cn('transform_animation rounded-37 py-22 h-16 hover:opacity-75', {
                'flex_horizontal_gap_5 items-center justify-center bg-autumn-blaze min-w-282 text-base': variant === 'long'
            })}
        >
            {children}
        </button>
    )
}
