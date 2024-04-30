'use client'

import { Dispatch, FC, ForwardedRef, SetStateAction, forwardRef } from 'react'
import cn from 'classnames'
import Link from 'next/link'

import { Icon } from '@/app/_shared/ui/icon'
import { Dropdown } from './_ui/dropdown'
import { links } from './const/links'

import styles from './Modal.module.scss'

interface IModalProps {
    isActive: boolean
    setIsActive: Dispatch<SetStateAction<boolean>>
    ref: any
}

export const Modal: FC<IModalProps> = forwardRef(({ isActive, setIsActive }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div
            className={cn(styles.bg, {
                [styles.active]: isActive
            })}
        >
            <div
                ref={ref}
                className={cn(styles.bg_modal, {
                    [styles.active]: isActive
                })}
            >
                <button onClick={() => setIsActive(false)}>
                    <Icon name='x-mark' />
                </button>

                <ul className={styles.list}>
                    {links.map((link) => {
                        const { id, href, title } = link

                        if (href) {
                            return (
                                <li key={id}>
                                    <Link href={href}>{title}</Link>
                                </li>
                            )
                        }

                        return <Dropdown key={id} modalIsOpen={isActive} {...link} />
                    })}
                </ul>
            </div>
        </div>
    )
})
