'use client'

import { FC } from 'react'
// import { usePathname } from 'next/navigation'

import Link from 'next/link'
import Image from 'next/image'

import { Logo } from '@/app/_shared/ui/logo'
import { Text } from '@/app/_shared/ui/typography/text'

import styles from './Header.module.scss'
// import { Container } from '@/app/(app)/_components/container'
import { Icon } from '@/app/_shared/ui/icon'

export const Header: FC = () => {
    // const pathname = usePathname()

    return (
        <header className={styles.wrapper}>
            <div className={styles['wrapper_left-side']}>
                <Logo />
                <nav className={styles['nav-left']}>
                    <ul className={styles['nav-left_list']}>
                        <li>
                            <Link href={'/'}>Products</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Services</Link>
                        </li>
                        <li>
                            <Link href={'/'}>Solutions</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles['wrapper_right-side']}>
                <nav className={styles['nav-right']}>
                    <ul className={styles['nav-right_list']}>
                        <li>
                            <Link
                                href={'/'}
                                // style={{ opacity: '/' === pathname ? 1 : 0.5 }}
                            >
                                Enterprise
                            </Link>
                        </li>
                        <Text className={styles['vertical-bar']} as='span'>
                            {'|'}
                        </Text>
                        <li>
                            <Link href={'/'}>Roam</Link>
                        </li>
                        <Text className={styles['vertical-bar']} as='span'>
                            {'|'}
                        </Text>
                        <li>
                            <Link href={'/'}>Personal</Link>
                        </li>
                    </ul>
                </nav>
                <button className={styles['burger-btn']}>
                    <Icon name='bars' />
                </button>
            </div>
        </header>
    )
}
