'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import Image from 'next/image'

import { Logo } from '@/app/_shared/ui/logo'
import { Text } from '@/app/_shared/ui/typography/text'

export const Header: FC = () => {
    const pathname = usePathname()
    const isActiveLinkStyles = (url: string) => `opacity_animation opacity-${pathname === url ? 100 : 50} hover:opacity-100`
    const linksStyles = 'text-lg font-semibold'

    return (
        <header className='flex_horizontal_gap_10 h-header container justify-between absolute top-5 left-2/4 -translate-x-2/4'>
            <div className='flex_horizontal_gap_12'>
                <Logo />
                <nav className='flex items-center'>
                    <ul className='flex_horizontal_gap_8'>
                        <li>
                            <Link className='opacity_animation hover:opacity-50' href={'/'}>
                                <Text className={linksStyles} as='span'>
                                    Products
                                </Text>
                            </Link>
                        </li>
                        <li>
                            <Link className='opacity_animation hover:opacity-50' href={'/'}>
                                <Text className={linksStyles} as='span'>
                                    Services
                                </Text>
                            </Link>
                        </li>
                        <li>
                            <Link className='opacity_animation hover:opacity-50' href={'/'}>
                                <Text className={linksStyles} as='span'>
                                    Solutions
                                </Text>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='flex_horizontal_gap_12 items-center'>
                <nav className='flex items-center'>
                    <ul className='flex_horizontal_gap_4'>
                        <li>
                            <Link href={'/contact-us'} className={isActiveLinkStyles('/contact-us')}>
                                <Text className={linksStyles} as='span'>
                                    Enterprise
                                </Text>
                            </Link>
                        </li>
                        <Text className='text-lg font-normal' as='span'>
                            {'|'}
                        </Text>
                        <li>
                            <Link href={'/'} className={isActiveLinkStyles('')}>
                                <Text className={linksStyles} as='span'>
                                    Roam
                                </Text>
                            </Link>
                        </li>
                        <Text className='text-lg font-normal' as='span'>
                            {'|'}
                        </Text>
                        <li>
                            <Link href={'/'} className={isActiveLinkStyles('')}>
                                <Text className={linksStyles} as='span'>
                                    Personal
                                </Text>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button className='h-fit'>
                    <Image className='opacity_animation hover:opacity-50' src='/svgs/bars.svg' width={32} height={24} alt='Bars' />
                </button>
            </div>
        </header>
    )
}
