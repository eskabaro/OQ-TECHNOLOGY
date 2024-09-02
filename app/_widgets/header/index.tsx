'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { cn } from '@/app/_shared/lib/classnames'
import { Logo } from '@/app/_shared/ui/logo'
import { Text } from '@/app/_shared/ui/typography/text'
import { Sidebar } from '@/app/(app)/_components/sidebar'
import { Icon } from '@/app/_shared/ui/icon'
import { useClickOutside } from '@/app/_shared/lib/hooks/useClickOutside'

import styles from './Header.module.scss'
import { ShoppingCart } from '@/app/(app)/_components/shopping-cart'

export const Header: FC = () => {
    const pathname = usePathname()
    const { refs, isShow, setIsShow } = useClickOutside({
        sidebar: false,
        cart: false
    })

    return (
        <>
            <header className={styles.wrapper}>
                <div className={styles['wrapper_left-side']}>
                    <Logo />
                    <nav className={styles['nav-left']}>
                        <ul className={styles['nav-left_list']}>
                            <li>
                                <Link className={styles.link} href='/#products'>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} href='/#services'>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.link} href='/#solutions'>
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
                                <Link href={'/'} className={cn(styles.link, '/' === pathname && styles.active)}>
                                    Enterprise
                                </Link>
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
                            <Text className={styles['vertical-bar']} as='span'>
                                {'|'}
                            </Text>
                            <li>
                                <Link href={'careers'} className={cn(styles.link, '/careers' === pathname && styles.active)}>
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <button onClick={() => setIsShow('cart', !isShow.cart)}>
                        <Icon name='cart' />
                    </button>
                    <button className={styles['burger-btn']} onClick={() => setIsShow('sidebar', !isShow.sidebar)}>
                        <Icon name='bars' />
                    </button>
                </div>
            </header>
            <ShoppingCart ref={refs.cart} isActive={isShow.cart} setIsActive={() => setIsShow('cart', !isShow.cart)} />
            <Sidebar ref={refs.sidebar} isActive={isShow.sidebar} setIsActive={() => setIsShow('sidebar', !isShow.sidebar)} />
        </>
    )
}
