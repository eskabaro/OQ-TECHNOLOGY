'use client'

import { FC, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'

type VariantType = 'first' | 'second'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant: VariantType
    placeholder: string
    error: boolean
}

export const Input: FC<IInputProps> = forwardRef(({ variant, placeholder, error, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    // const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <label className={cn(styles.wrapper, styles[variant])}>
            <input
                {...props}
                ref={ref}
                placeholder={placeholder}
                className={cn(styles.input, {
                    [styles.error]: error,
                    [styles[variant]]: variant
                })}
                // onChange={(e) => setIsActive(!!e.target.value)}
            />
            {/* <span
                className={cn(`${styles.placeholder} ${error && styles.error} transform_animation`, {
                    'opacity-0 top-0-im': isActive
                })}
            >
                {placeholder}
            </span> */}
        </label>
    )
})
