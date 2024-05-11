'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/app/(app)/_components/container'
import { SubTitle } from '@/app/_shared/ui/sub-title'
import { Text } from '@/app/_shared/ui/typography/text'
import { Icon } from '@/app/_shared/ui/icon'

import styles from './FifthSection.module.scss'

export const FifthSection: FC = () => {
    return (
        <Container className={styles.wrapper} as='section'>
            <SubTitle upTitle='ABOUT US' title='OUR SATELLITE MISSIONS'>
                With already 3 satellites in space and 7 more to be added to our constellation by the end of 2023 we continue to be pioneers in the
                field of 5G NB-IoT.
            </SubTitle>

            <div className={styles.wrapper_video}>
                <Image src={require('../../_assets/video-2.webp')} width={1600} height={730} alt='' priority />
                <Icon name='play-v2' />
            </div>

            <ul className={styles.wrapper_list}>
                <li>
                    <Image src={require('../../_assets/list/list-1.webp')} width={322} height={320} alt='' />
                    <Text as='span'>Tiger-1 launched in 2019​</Text>
                </li>
                <li>
                    <Image src={require('../../_assets/list/list-2.webp')} width={322} height={320} alt='' />
                    <Text as='span'>Tiger-2 launched in 2021</Text>
                </li>
                <li>
                    <Image src={require('../../_assets/list/list-3.webp')} width={322} height={320} alt='' />
                    <Text as='span'>Tiger-3 launched in 2022</Text>
                </li>
            </ul>
        </Container>
    )
}
