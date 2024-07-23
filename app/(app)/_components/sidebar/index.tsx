'use client'

import { Dispatch, FC, ForwardedRef, SetStateAction, forwardRef } from 'react'
import Link from 'next/link'

import { cn } from '@/app/_shared/lib/classnames'
import { Icon } from '@/app/_shared/ui/icon'
import { Dropdown } from './_ui/dropdown'
import { links } from './const/links'

import styles from './Sidebar.module.scss'

interface ISidebarProps {
    isActive: boolean
    setIsActive: Dispatch<SetStateAction<boolean>>
    ref: any
}

export const Sidebar: FC<ISidebarProps> = forwardRef(({ isActive, setIsActive }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div className={cn(styles.bg, isActive && styles.active)}>
            <div ref={ref} className={cn(styles.bg_sidebar, isActive && styles.active)}>
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
