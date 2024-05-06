'use client'

import { FC, ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react'
import styles from './Textarea.module.scss'
import cn from 'classnames'

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error: boolean
    className?: string
}

export const Textarea: FC<ITextareaProps> = forwardRef(({ error, className, ...props }, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
        <textarea
            ref={ref}
            className={cn(styles.textarea, styles[className!], {
                [styles.error]: error
            })}
            {...props}
        />
    )
})
