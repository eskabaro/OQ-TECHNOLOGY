'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/app/(app)/_components/container'
import { SubTitle } from '@/app/_shared/ui/sub-title'
import { Text } from '@/app/_shared/ui/typography/text'
import { Slider } from '@/app/(app)/_components/slider'

import styles from './FourthSection.module.scss'

export const FourthSection: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Container className={styles.container}>
                <SubTitle upTitle='ABOUT US' title='CORE TEAM'>
                    Dolor lobortis ullamcorper sollicitudin tellus. Pulvinar nunc aliquam id blandit integer diam tellus. Iaculis elementum est ante
                    tempus aliquet facilisis. Arcu ac convallis integer elementum a adipiscing. Laoreet commodo sed est quisque. Elit tristique.
                </SubTitle>
            </Container>
            <Slider
                hasContainer
                options={{
                    breakpoints: {
                        '(min-width: 768px)': { dragFree: true }
                    }
                }}
            >
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className={styles.slide}>
                        <Image src={require(`../../_assets/slider-2/slide-${(index % 3) + 1}.webp`)} width={512} height={512} alt='' />
                        <div className={styles.slide_content}>
                            <Text as='span'>Omar Qaise</Text>
                            <Text as='p'>Founder and CEO</Text>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
