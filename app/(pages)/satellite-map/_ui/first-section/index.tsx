'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/app/(app)/_components/container'
import { Title } from '@/app/_shared/ui/typography/title'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <section className={styles.wrapper}>
            <Container className={styles.wrapper_heading}>
                <Title title='SATELLITE MAP' text='Sit sit non ut adipiscing aliquet est consectetur risus. Velit integer urna ut mattis mauris augue. Nunc amet aliquam blandit risus massa. Scelerisque est sed eu.' />
            </Container>

            <div className={styles['wrapper_image-box']}>
                <Image src='/satellite-map/map.webp' width={1920} height={1000} alt='Map' />
            </div>
        </section>
    )
}
