'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Text } from '@/app/_shared/ui/typography/text'
import { Icon } from '@/app/_shared/ui/icon'
import { Container } from '@/app/(app)/_components/container'
import { SubTitle } from '@/app/_shared/ui/sub-title'

import styles from './ThirdSection.module.scss'

export const ThirdSection: FC = () => {
    return (
        <section className={styles.wrapper}>
            <Container className={styles.container}>
                <SubTitle upTitle='ABOUT US' title='TRANSFORMING CONNECTIVITY' isButtonGroup>
                    ​We work hard everyday to achieve our mission to connect remote areas and enable our enterprise customers to extract the maximum value of their IoT data and make the best decision for their operations and business.
                </SubTitle>
            </Container>
            <div className={styles.wrapper_slider}>
                <Container className={styles['slider-container']}>
                    <div className={styles['slider-container_slide']}>
                        <Image src={'/about-us/slide-1.webp'} width={923} height={616} alt='' />
                        <div className={styles.btn}>
                            <Icon name='play-v2' />
                            <div className={styles['btn-typography']}>
                                <Text as='span'>Lorem ipsum dolar</Text>
                                <Text as='p'>Lorem</Text>
                            </div>
                        </div>
                    </div>
                    <div className={styles['slider-container_slide']}>
                        <Image src={'/about-us/slide-2.webp'} width={923} height={616} alt='' />
                        <div className={styles.btn}>
                            <Icon name='play-v2' />
                            <div className={styles['btn-typography']}>
                                <Text as='span'>Lorem ipsum dolar</Text>
                                <Text as='p'>Lorem</Text>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
