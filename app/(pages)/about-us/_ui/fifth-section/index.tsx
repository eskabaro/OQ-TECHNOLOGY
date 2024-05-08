'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/app/(app)/_components/container'
import { HeadingAnimate } from '@/app/_shared/ui/heading-animate'
import { Text } from '@/app/_shared/ui/typography/text'
import { Icon } from '@/app/_shared/ui/icon'

import styles from './FifthSection.module.scss'

export const FifthSection: FC = () => {
    return (
        <Container className={styles.wrapper} as='section'>
            <div className={styles.wrapper_heading}>
                <div className={styles.typography}>
                    <HeadingAnimate>
                        <Text as='span'>ABOUT US</Text>
                    </HeadingAnimate>
                    <HeadingAnimate duration={200}>
                        <Text as='h1'>OUR SATELLITE MISSIONS</Text>
                    </HeadingAnimate>
                    <HeadingAnimate duration={400}>
                        <Text as='p'>With already 3 satellites in space and 7 more to be added to our constellation by the end of 2023 we continue to be pioneers in the field of 5G NB-IoT.</Text>
                    </HeadingAnimate>
                </div>
            </div>

            <div className={styles.wrapper_video}>
                <Image src={'/about-us/video-2.webp'} width={1600} height={730} alt='' priority />
                <Icon name='play-v2' />
            </div>

            <ul className={styles.wrapper_list}>
                <li>
                    <Image src={'/about-us/list-1.webp'} width={322} height={320} alt='' />
                    <Text as='span'>Tiger-1 launched in 2019​</Text>
                </li>
                <li>
                    <Image src={'/about-us/list-2.webp'} width={322} height={320} alt='' />
                    <Text as='span'>Tiger-2 launched in 2021</Text>
                </li>
                <li>
                    <Image src={'/about-us/list-3.webp'} width={322} height={320} alt='' />
                    <Text as='span'>Tiger-3 launched in 2022</Text>
                </li>
            </ul>
        </Container>
    )
}
