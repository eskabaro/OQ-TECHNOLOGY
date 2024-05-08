'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/app/(app)/_components/container'
import { Title } from '@/app/_shared/ui/typography/title'
import { Icon } from '@/app/_shared/ui/icon'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <Container className={styles.wrapper} as='section'>
            <Title isObserver size='XXL' title='ABOUT US' text="OQ Technology is the world's first satellite telecom operator for global Internet-of-Things (IoT) connectivity using 3GPP standardized 5G protocol." />

            <div className={styles.wrapper_video}>
                <Image src={'/about-us/video-1.webp'} width={1600} height={730} alt='' priority />
                <Icon name='play-v2' />
            </div>
        </Container>
    )
}
