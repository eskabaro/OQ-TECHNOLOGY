'use client'

import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/app/(app)/_components/container'
import { ButtonGroup } from '@/app/_shared/ui/button-group'
import { HeadingAnimate } from '@/app/_shared/ui/heading-animate'
import { Icon } from '@/app/_shared/ui/icon'
import { Text } from '@/app/_shared/ui/typography/text'

import styles from './FourthSection.module.scss'

export const FourthSection: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Container className={styles.container}>
                <div className={styles.container_heading}>
                    <div className={styles.typography}>
                        <HeadingAnimate>
                            <Text as='span'>ABOUT US</Text>
                        </HeadingAnimate>
                        <HeadingAnimate duration={200}>
                            <Text as='h1'>CORE TEAM</Text>
                        </HeadingAnimate>
                        <HeadingAnimate duration={400}>
                            <Text as='p'>
                                Dolor lobortis ullamcorper sollicitudin tellus. Pulvinar nunc aliquam id blandit integer diam tellus. Iaculis elementum est ante tempus aliquet facilisis. Arcu ac convallis integer elementum a adipiscing. Laoreet
                                commodo sed est quisque. Elit tristique.
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
                <Container className={styles.slider_container}>
                    <div className={styles.slide}>
                        <Image src={'/about-us/slider-2/slide-1.webp'} width={512} height={512} alt='' />
                        <div>
                            <Text as='span'>Omar Qaise</Text>
                            <Text as='p'>Founder and CEO</Text>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <Image src={'/about-us/slider-2/slide-2.webp'} width={512} height={512} alt='' />
                        <div>
                            <Text as='span'>Omar Qaise</Text>
                            <Text as='p'>Founder and CEO</Text>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <Image src={'/about-us/slider-2/slide-3.webp'} width={512} height={512} alt='' />
                        <div>
                            <Text as='span'>Omar Qaise</Text>
                            <Text as='p'>Founder and CEO</Text>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <Image src={'/about-us/slider-2/slide-3.webp'} width={512} height={512} alt='' />
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
