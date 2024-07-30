import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/app/(app)/_components/container'
import { Title } from '@/app/_shared/ui/typography/title'
import { Icon } from '@/app/_shared/ui/icon'

import styles from './FirstSection.module.scss'

export const FirstSection: FC = () => {
    return (
        <Container className={styles.wrapper} as='section'>
            <Title
                isObserver
                size='XXL'
                title='CAREERS'
                text="Lorem ipsum dolor sit amet consectetur. Accumsan bibendum vestibulum vivamus ullamcorper."
            />

            <Image src={require('../../_assets/video-1.webp')} width={1600} height={730} alt='' priority />
        </Container>
    )
}
