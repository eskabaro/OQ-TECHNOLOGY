'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Title } from '@/app/_shared/ui/typography/title'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Title isObserver size='XXL' title='TECHNOLOGY' text='Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.' />
            <Image src={'/technology/banner.webp'} width={1600} height={900} alt='banner' priority />
        </div>
    )
}
