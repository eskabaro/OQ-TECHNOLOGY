'use client'

import { FC } from 'react'
import Image from 'next/image'

import { HeadingAnimate } from '@/app/_shared/ui/heading-animate'
import { Text } from '@/app/_shared/ui/typography/text'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_heading}>
                <HeadingAnimate>
                    <Text as='h1'>TECHNOLOGY</Text>
                </HeadingAnimate>
                <HeadingAnimate duration={200}>
                    <Text as='p'>Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.</Text>
                </HeadingAnimate>
            </div>
            <Image src={'/technology/banner.webp'} width={1600} height={900} alt='banner' priority />
        </div>
    )
}
