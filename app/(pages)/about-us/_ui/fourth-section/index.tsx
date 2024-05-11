'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/app/(app)/_components/container'
import { SubTitle } from '@/app/_shared/ui/sub-title'
import { Text } from '@/app/_shared/ui/typography/text'

import styles from './FourthSection.module.scss'

export const FourthSection: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Container className={styles.container}>
                <SubTitle upTitle='ABOUT US' title='CORE TEAM' isButtonGroup>
                    Dolor lobortis ullamcorper sollicitudin tellus. Pulvinar nunc aliquam id blandit integer diam tellus. Iaculis elementum est ante
                    tempus aliquet facilisis. Arcu ac convallis integer elementum a adipiscing. Laoreet commodo sed est quisque. Elit tristique.
                </SubTitle>
            </Container>
            <div className={styles.wrapper_slider}>
                <Container className={styles.slider_container}>
                    <div className={styles.slide}>
                        <Image src={require('../../_assets/slider-2/slide-1.webp')} width={512} height={512} alt='' />
                        <div>
                            <Text as='span'>Omar Qaise</Text>
                            <Text as='p'>Founder and CEO</Text>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <Image src={require('../../_assets/slider-2/slide-2.webp')} width={512} height={512} alt='' />
                        <div>
                            <Text as='span'>Omar Qaise</Text>
                            <Text as='p'>Founder and CEO</Text>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <Image src={require('../../_assets/slider-2/slide-3.webp')} width={512} height={512} alt='' />
                        <div>
                            <Text as='span'>Omar Qaise</Text>
                            <Text as='p'>Founder and CEO</Text>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <Image src={require('../../_assets/slider-2/slide-4.webp')} width={512} height={512} alt='' />
                        <div>
                            <Text as='span'>Omar Qaise</Text>
                            <Text as='p'>Founder and CEO</Text>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
