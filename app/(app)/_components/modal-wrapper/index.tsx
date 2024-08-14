"use client";

import { FC, PropsWithChildren, useEffect } from 'react'

import { cn } from '@/app/_shared/lib/classnames'
import { Icon } from '@/app/_shared/ui/icon'
import styles from './ModalWrapper.module.scss'

type TModalWrapperProps = PropsWithChildren<{
    isOpen: boolean
    onClose: () => void
}>

export const ModalWrapper: FC<TModalWrapperProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [onClose])

    return (
        <div className={cn(styles.bg, isOpen && styles.active)} onClick={onClose}>
            <div className={cn(styles.bg_modalWrapper, isOpen && styles.active)} onClick={(event) => event.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>
                    <Icon name='x-circle' />
                </button>
                {children}
            </div>
        </div>
    )
}
