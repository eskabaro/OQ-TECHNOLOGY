'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Text } from '@/app/_shared/ui/typography/text'
import { Icon } from '@/app/_shared/ui/icon'
import { Container } from '@/app/(app)/_components/container'
import { ButtonGroup } from '@/app/_shared/ui/button-group'
import { HeadingAnimate } from '@/app/_shared/ui/heading-animate'

import styles from './ThirdSection.module.scss'

export const ThirdSection: FC = () => {
    return (
        <section className={styles.wrapper}>
            <Container className={styles.container}>
                <div className={styles.container_heading}>
                    <div className={styles.typography}>
                        <HeadingAnimate>
                            <Text as='span'>ABOUT US</Text>
                        </HeadingAnimate>
                        <HeadingAnimate duration={200}>
                            <Text as='h1'>TRANSFORMING CONNECTIVITY</Text>
                        </HeadingAnimate>
                        <HeadingAnimate duration={400}>
                            <Text as='p'>
                                ​We work hard everyday to achieve our mission to connect remote areas and enable our enterprise customers to extract the maximum value of their IoT data and make the best decision for their operations and business.
                            </Text>
                        </HeadingAnimate>
                    </div>
                    <div className={styles['btn-box']}>
                        <ButtonGroup size='XL'>
                            <button>
                                <Icon name='next' />
                            </button>
                            <button>
                                <Icon name='prev' />
                            </button>
                        </ButtonGroup>
                    </div>
                </div>
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
