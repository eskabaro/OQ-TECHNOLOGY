'use client'

import { FC, ForwardedRef, InputHTMLAttributes, forwardRef, useState } from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'

type VariantType = 'first' | 'second'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant: VariantType
    placeholder: string
}

export const Input: FC<IInputProps> = forwardRef(({ variant, placeholder, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <label
            className={cn('relative', {
                'max-w-md': variant === 'first',
                '': variant === 'second'
            })}
        >
            <input
                {...props}
                ref={ref}
                type='text'
                className={cn(styles.input, {
                    'px-5 py-18 rounded-53 backdrop-blur-[0.25rem] bg-transparent outline-none border border-shadow-slate': variant === 'first',
                    '': variant === 'second'
                })}
            />
            <span className={cn(`${styles.placeholder} transform_animation`, {})}>{placeholder}</span>
        </label>
    )
})
