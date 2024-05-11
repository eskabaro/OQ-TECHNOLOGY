'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { cn } from '@/app/_shared/lib/classnames'
import { Logo } from '@/app/_shared/ui/logo'
import { Text } from '@/app/_shared/ui/typography/text'
import { Modal } from '@/app/(app)/_components/modal'
import { Icon } from '@/app/_shared/ui/icon'
import { useClickOutside } from '@/app/_shared/lib/hooks/useClickOutside'

import styles from './Header.module.scss'

export const Header: FC = () => {
    const pathname = usePathname()
    const { ref, isShow, setIsShow } = useClickOutside(false)

    return (
        <>
            <header className={styles.wrapper}>
                <div className={styles['wrapper_left-side']}>
                    <Logo />
                    <nav className={styles['nav-left']}>
                        <ul className={styles['nav-left_list']}>
                            <li>
                                <Link className={styles.link} href={'/'}>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} href={'/'}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} href={'/'}>
                                    Solutions
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles['wrapper_right-side']}>
                    <nav className={styles['nav-right']}>
                        <ul className={styles['nav-right_list']}>
                            <li>
                                <Link href={'/'}>Enterprise</Link>
                            </li>
                            <Text className={styles['vertical-bar']} as='span'>
                                {'|'}
                            </Text>
                            <li>
                                <Link href={'roam'} className={cn(styles.link, '/roam' === pathname && styles.active)}>
                                    Roam
                                </Link>
                            </li>
                            <Text className={styles['vertical-bar']} as='span'>
                                {'|'}
                            </Text>
                            <li>
                                <Link href={'personal'} className={cn(styles.link, '/personal' === pathname && styles.active)}>
                                    Personal
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <button className={styles['burger-btn']} onClick={() => setIsShow(!isShow)}>
                        <Icon name='bars' />
                    </button>
                </div>
            </header>
            <Modal ref={ref} isActive={isShow} setIsActive={setIsShow} />
        </>
    )
}
