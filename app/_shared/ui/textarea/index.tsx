'use client'

import { FC, ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/classnames'
import styles from './Textarea.module.scss'

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error: boolean
    className?: string
}

export const Textarea: FC<ITextareaProps> = forwardRef(({ error, className, ...props }, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return <textarea ref={ref} className={cn(styles.textarea, className, error && styles.error)} {...props} />
})
