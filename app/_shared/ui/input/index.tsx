'use client'

import { FC, ForwardedRef, InputHTMLAttributes, forwardRef, useState } from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'

type VariantType = 'first' | 'second'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant: VariantType
    placeholder: string
    error: boolean
}

export const Input: FC<IInputProps> = forwardRef(({ variant, placeholder, error, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <label
            className={cn('relative overflow-hidden', {
                'max-w-md': variant === 'first',
                '': variant === 'second'
            })}
        >
            <input
                {...props}
                ref={ref}
                type='text'
                className={cn(`${styles.input} ${error && styles.error}`, {
                    'px-5 py-18 rounded-53 backdrop-blur-[0.25rem] bg-transparent outline-none': variant === 'first',
                    '': variant === 'second'
                })}
                onChange={(e) => setIsActive(!!e.target.value)}
            />
            <span
                className={cn(`${styles.placeholder} ${error && styles.error} transform_animation`, {
                    'opacity-0 top-0-im': isActive
                })}
            >
                {placeholder}
            </span>
        </label>
    )
})
