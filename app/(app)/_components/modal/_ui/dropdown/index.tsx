'use client'

import { FC, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import cn from 'classnames'

import { ILink } from '../../lib/links'
import { Icon } from '@/app/_shared/ui/icon'

import styles from './Dropdown.module.scss'

interface IDropdownProps extends ILink {
    modalIsOpen: boolean
}

export const Dropdown: FC<IDropdownProps> = ({ id, title, childrens, modalIsOpen }) => {
    const [visible, setIsVisible] = useState<boolean>(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsVisible(false)
    }, [modalIsOpen, pathname])

    return (
        <li key={id} className={styles.wrapper}>
            <button
                className={cn(styles.wrapper_btn, {
                    [styles.active]: visible
                })}
                onClick={() => setIsVisible(!visible)}
            >
                {title}
                <Icon name='arrow-down' />
            </button>
            <ul
                className={cn(styles.wrapper_menu, {
                    [styles.active]: visible
                })}
            >
                {childrens.map((child) => (
                    <li key={child.id}>
                        <Link href={child.href!}>{child.title}</Link>
                    </li>
                ))}
            </ul>
        </li>
    )
}
