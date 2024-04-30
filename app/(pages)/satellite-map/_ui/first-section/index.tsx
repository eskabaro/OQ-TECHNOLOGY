'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/app/(app)/_components/container'
import { HeadingAnimate } from '@/app/_shared/ui/heading-animate'
import { Text } from '@/app/_shared/ui/typography/text'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <section className={styles.wrapper}>
            <Container className={styles.wrapper_heading}>
                <HeadingAnimate>
                    <Text as='h1'>SATELLITE MAP</Text>
                </HeadingAnimate>
                <HeadingAnimate duration={200}>
                    <Text as='p'>Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.</Text>
                </HeadingAnimate>
            </Container>

            <div className={styles['wrapper_image-box']}>
                <Image src='/satellite-map/map.webp' width={1920} height={1000} alt='Map' />
            </div>
        </section>
    )
}
