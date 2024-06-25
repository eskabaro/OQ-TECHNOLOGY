'use client'

import { FC } from 'react'
import Image from 'next/image'

import useScrollSlider from '@/app/_shared/lib/hooks/useScrollSlider'
import { Text } from '@/app/_shared/ui/typography/text'
import { Icon } from '@/app/_shared/ui/icon'
import { Container } from '@/app/(app)/_components/container'
import { SubTitle } from '@/app/_shared/ui/sub-title'
import { Slider } from '@/app/(app)/_components/slider'

import styles from './ThirdSection.module.scss'

export const ThirdSection: FC = () => {
    const { onEmblaApiInit, onSliderScroll } = useScrollSlider()

    return (
        <section className={styles.wrapper}>
            <Container>
                <SubTitle
                    upTitle='ABOUT US'
                    title='TRANSFORMING CONNECTIVITY'
                    isButtonGroup
                    prevSlideFn={() => onSliderScroll('prev')}
                    nextSlideFn={() => onSliderScroll('next')}
                >
                    ​We work hard everyday to achieve our mission to connect remote areas and enable our enterprise customers to extract the maximum
                    value of their IoT data and make the best decision for their operations and business.
                </SubTitle>
            </Container>
            <Slider hasContainer hasDots onEmblaApiInit={onEmblaApiInit}>
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className={styles.slide}>
                        <Image src={require('../../_assets/slider-1/slide-1.webp')} width={923} height={616} alt='' />
                        <div className={styles.btn}>
                            <Icon name='play-v2' />
                            <div className={styles['btn-typography']}>
                                <Text as='span'>Lorem ipsum dolar</Text>
                                <Text as='p'>Lorem</Text>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}
